-- =====================================================================
--  SICHERHEITS-MIGRATION — 2026-08-06
--  Behebt: jeder eingeloggte Nutzer konnte sich selbst zum Admin machen.
--
--  Ursache: Die Policy "users update own profile" prüft nur die ZEILE
--  (auth.uid() = id), nicht die SPALTEN. Da is_admin in derselben Zeile
--  liegt, ging ein PATCH mit {"is_admin":true} auf die eigene Zeile durch.
--
--  IM SUPABASE SQL-EDITOR AUSFÜHREN. Idempotent — mehrfach ausführbar.
--  Muss zusammen mit dem zugehörigen Frontend-Deploy laufen: solange nur
--  eine Seite aktualisiert ist, funktionieren im Admin-Panel die Knöpfe
--  "Admin-Status", "Löschen" und "Wiederherstellen" nicht.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 0) Schema-Drift beheben: Spalte, die die App nutzt, aber im Schema fehlt
-- ---------------------------------------------------------------------
alter table public.profiles add column if not exists deleted_at timestamptz;

-- RLS auf user_progress war im Schema nie aktiviert (nur die Policies).
-- Achtung: RLS ohne passende Policy sperrt ALLES. Die Eigen-Zeilen-Policies
-- deshalb hier idempotent mitliefern, damit die Migration auch auf einer
-- Datenbank funktioniert, in der sie nie angelegt wurden.
alter table public.user_progress enable row level security;

drop policy if exists "users read own progress" on public.user_progress;
create policy "users read own progress" on public.user_progress
  for select using (auth.uid() = user_id);

drop policy if exists "users write own progress" on public.user_progress;
create policy "users write own progress" on public.user_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "users update own progress" on public.user_progress;
create policy "users update own progress" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- 1) Spaltenrechte: Nutzer dürfen nur noch ihre eigenen harmlosen Felder
--    schreiben. is_admin und deleted_at sind damit für JEDEN Client
--    unerreichbar — auch für Admins, die schreiben ab jetzt über die
--    security-definer-Funktionen unten.
-- ---------------------------------------------------------------------
revoke update on public.profiles from anon, authenticated;
grant  update (name, lang, last_seen_at) on public.profiles to authenticated;

-- "admins update all profiles" durfte bisher mit check (true) alles
-- setzen, inklusive der Primärschlüssel-id. Enger fassen.
drop policy if exists "admins update all profiles" on public.profiles;
create policy "admins update all profiles" on public.profiles
  for update using (public.is_admin()) with check (public.is_admin());

-- ---------------------------------------------------------------------
-- 2) Admin-Operationen als security definer — die Rechteprüfung passiert
--    jetzt SERVERSEITIG in der Funktion, nicht mehr im Frontend.
-- ---------------------------------------------------------------------

create or replace function public.admin_set_is_admin(target_id uuid, make_admin boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'not authorised';
  end if;
  -- Der letzte verbleibende Admin darf sich nicht selbst entrechten
  if make_admin = false
     and (select count(*) from public.profiles
          where is_admin = true and deleted_at is null) <= 1 then
    raise exception 'cannot remove the last admin';
  end if;
  update public.profiles set is_admin = make_admin where id = target_id;
end;
$$;

create or replace function public.admin_soft_delete_user(target_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'not authorised';
  end if;
  -- Selbstlöschung sperren: sonst entzieht sich ein Admin mit einem Klick die
  -- eigenen Rechte (die Funktion setzt is_admin=false gleich mit).
  if target_id = auth.uid() then
    raise exception 'cannot delete yourself';
  end if;
  -- Denselben Letzter-Admin-Schutz wie in admin_set_is_admin: ohne ihn führt
  -- das Löschen des letzten Admins in eine dauerhafte Aussperrung. Zurück ginge
  -- es nicht — admin_undelete_user und admin_set_is_admin verlangen beide
  -- is_admin(), und is_admin/deleted_at sind für jeden Client per Spaltenrecht
  -- unschreibbar. Reparatur wäre nur noch direkt im SQL-Editor möglich.
  if (select is_admin from public.profiles where id = target_id)
     and (select count(*) from public.profiles where is_admin = true and deleted_at is null) <= 1 then
    raise exception 'cannot delete the last admin';
  end if;
  -- Bewusst KEIN Löschen von user_progress: der Fortschritt muss eine
  -- Wiederherstellung überleben (CLAUDE.md Grundregel 2).
  update public.profiles
     set deleted_at = now(), is_admin = false
   where id = target_id;
end;
$$;

create or replace function public.admin_undelete_user(target_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'not authorised';
  end if;
  update public.profiles set deleted_at = null where id = target_id;
end;
$$;

-- from anon allein genuegt NICHT: Funktionen tragen per Default ein
-- EXECUTE-Recht fuer PUBLIC, das die Rolle anon erbt. Erst der Entzug von
-- PUBLIC schliesst den anonymen Aufruf wirklich aus.
revoke execute on function public.admin_set_is_admin(uuid, boolean)  from public, anon;
revoke execute on function public.admin_soft_delete_user(uuid)       from public, anon;
revoke execute on function public.admin_undelete_user(uuid)          from public, anon;
grant  execute on function public.admin_set_is_admin(uuid, boolean)  to authenticated;
grant  execute on function public.admin_soft_delete_user(uuid)       to authenticated;
grant  execute on function public.admin_undelete_user(uuid)          to authenticated;

-- ---------------------------------------------------------------------
-- 3) Gegenprobe (optional, im Editor ausführen)
-- ---------------------------------------------------------------------
-- Erwartet: nur name, lang, last_seen_at für 'authenticated'
--
-- select column_name, privilege_type
--   from information_schema.column_privileges
--  where table_name = 'profiles' and grantee = 'authenticated'
--    and privilege_type = 'UPDATE'
--  order by column_name;
