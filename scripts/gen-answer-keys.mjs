/* Erzeugt supabase/answer-keys.sql aus den Kursdaten (alle Sprachen).
   Aufruf:  node --import ./scripts/register-loader.mjs scripts/gen-answer-keys.mjs
   Nach JEDER Änderung an Testfragen neu erzeugen und im Supabase-SQL-Editor
   ausführen (idempotent). Hintergrund: supabase/migration-2026-10-16-server-side-tests.sql */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { COURSES, courseKey } from '../src/data.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(HERE, '..', 'supabase', 'answer-keys.sql')
const q = (s) => `'${String(s).replace(/'/g, "''")}'`

const rows = []
const seen = new Set()
for (const c of COURSES) {
  if (!Array.isArray(c.questions) || c.questions.length === 0) continue
  const uid = courseKey(c)
  if (seen.has(uid)) throw new Error(`doppelte Kurs-UID ${uid}`)
  seen.add(uid)
  const answers = c.questions.map((x, i) => {
    if (!Number.isInteger(x.correct) || x.correct < 0 || x.correct >= (x.options || []).length) {
      throw new Error(`${c.id} Frage ${i + 1}: ungültiger correct-Index ${x.correct}`)
    }
    return x.correct
  })
  rows.push(`  (${q(uid)}, '{${answers.join(',')}}', 80)`)
}

const sql = `-- GENERIERT von scripts/gen-answer-keys.mjs — nicht von Hand bearbeiten.
-- ${rows.length} Kurse mit Test. Idempotent: im Supabase-SQL-Editor ausführen.
insert into public.course_answer_keys (course_uid, answers, pass_pct) values
${rows.join(',\n')}
on conflict (course_uid) do update
  set answers = excluded.answers, pass_pct = excluded.pass_pct, updated_at = now();
`
fs.writeFileSync(OUT, sql)
console.log(`answer-keys.sql: ${rows.length} Kurse`)
