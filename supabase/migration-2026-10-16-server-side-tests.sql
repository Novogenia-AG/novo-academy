-- =====================================================================
-- NOVO ACADEMY — Testauswertung serverseitig (2026-10-16)
--
-- Problem: Ob ein Test bestanden ist, entschied allein der Browser und schrieb
-- test_passed / test_score direkt in user_progress. Ein manipulierter Client
-- konnte sich so jedes Zertifikat ausstellen.
--
-- Lösung:
--   1) course_answer_keys — Antwortschlüssel je Kurs-UID, für Clients NICHT lesbar.
--   2) submit_test(course_uid, answers[]) — wertet serverseitig aus und schreibt
--      test_score / test_passed (test_passed bleibt true, wenn schon bestanden).
--   3) Trigger guard_test_result — normale Nutzer können test_passed / test_score
--      NICHT mehr direkt setzen (bestehende Werte bleiben erhalten). Ausnahmen:
--      submit_test, Admins (is_admin()), SQL-Editor / service_role.
--
-- Abwärtskompatibel: Kein bestehender Fortschritt wird verändert. Das Frontend
-- ruft submit_test auf und fällt auf die alte Auswertung zurück, solange diese
-- Migration nicht eingespielt ist.
--
-- REIHENFOLGE beim Einspielen (SQL-Editor):
--   1. diese Datei
--   2. supabase/answer-keys.sql  (generiert: node --import ./scripts/register-loader.mjs scripts/gen-answer-keys.mjs)
-- Nach JEDER Änderung an Testfragen/Antworten: answer-keys.sql neu generieren
-- und erneut ausführen (idempotent), sonst werten die Tests falsch aus.
--
-- Rückbau (falls nötig, sofort wirksam):
--   drop trigger if exists guard_test_result on public.user_progress;
-- =====================================================================

-- 1) Antwortschlüssel -------------------------------------------------
create table if not exists public.course_answer_keys (
  course_uid  text primary key,
  answers     smallint[] not null,
  pass_pct    smallint   not null default 80,
  updated_at  timestamptz not null default now()
);
alter table public.course_answer_keys enable row level security;
-- Keine Policy = für anon/authenticated nicht lesbar. Zusätzlich Rechte entziehen.
revoke all on public.course_answer_keys from anon, authenticated;

-- 2) Auswertung ---------------------------------------------------------
create or replace function public.submit_test(p_course_uid text, p_answers smallint[])
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid     uuid := auth.uid();
  v_key     public.course_answer_keys;
  v_n       int;
  v_given   int;
  v_correct int := 0;
  v_score   int;
  v_passed  boolean;
begin
  if v_uid is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;

  select * into v_key from public.course_answer_keys where course_uid = p_course_uid;
  if not found then
    raise exception 'no answer key for course %', p_course_uid using errcode = 'P0002';
  end if;

  v_n := coalesce(array_length(v_key.answers, 1), 0);
  if v_n = 0 then
    raise exception 'empty answer key for course %', p_course_uid using errcode = 'P0002';
  end if;
  v_given := coalesce(array_length(p_answers, 1), 0);

  for i in 1..v_n loop
    if i <= v_given and p_answers[i] = v_key.answers[i] then
      v_correct := v_correct + 1;
    end if;
  end loop;

  v_score  := round(v_correct * 100.0 / v_n);
  v_passed := v_score >= v_key.pass_pct;

  -- Freigabe für den Trigger, nur innerhalb dieser Transaktion
  perform set_config('app.submit_test', '1', true);

  insert into public.user_progress (user_id, course_uid, watched, test_passed, test_score, updated_at)
  values (v_uid, p_course_uid, false, v_passed, v_score, now())
  on conflict (user_id, course_uid) do update
    set test_passed = public.user_progress.test_passed or excluded.test_passed,
        test_score  = excluded.test_score,
        updated_at  = now();

  perform set_config('app.submit_test', '', true);

  return json_build_object('score', v_score, 'passed', v_passed);
end;
$$;

revoke all on function public.submit_test(text, smallint[]) from public, anon;
grant execute on function public.submit_test(text, smallint[]) to authenticated;

-- 3) Schutz-Trigger -----------------------------------------------------
-- Bewusst SECURITY INVOKER: current_user ist dann die API-Rolle
-- ('authenticated' / 'anon'). SQL-Editor und service_role sind nicht betroffen.
create or replace function public.guard_test_result()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if current_user not in ('authenticated', 'anon') then
    return new;                                   -- SQL-Editor, service_role
  end if;
  if coalesce(current_setting('app.submit_test', true), '') = '1' then
    return new;                                   -- Aufruf aus submit_test()
  end if;
  if public.is_admin() then
    return new;                                   -- Admin-Panel (Status setzen/zurücksetzen)
  end if;

  if tg_op = 'INSERT' then
    new.test_passed := false;
    new.test_score  := 0;
  else
    new.test_passed := old.test_passed;
    new.test_score  := old.test_score;
  end if;
  return new;
end;
$$;

drop trigger if exists guard_test_result on public.user_progress;
create trigger guard_test_result
  before insert or update on public.user_progress
  for each row execute function public.guard_test_result();
