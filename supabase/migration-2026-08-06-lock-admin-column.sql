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

-- RLS auf user_progress war im Schema nie aktiviert (nur die Policies)
alter table public.user_progress enable row level security;

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

revoke execute on function public.admin_set_is_admin(uuid, boolean)  from anon;
revoke execute on function public.admin_soft_delete_user(uuid)       from anon;
revoke execute on function public.admin_undelete_user(uuid)          from anon;
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
