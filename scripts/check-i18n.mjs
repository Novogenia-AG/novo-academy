/* Sprach-Wächter: bricht ab, wenn eine Übersetzung fehlt.
 *
 * Hintergrund: `t()` in data.js fällt bei einem fehlenden Key stillschweigend
 * auf Deutsch zurück. Genau so blieb `auth_error_rate_limited` in allen neun
 * Zusatzsprachen unübersetzt — ein gesperrter tschechischer Nutzer bekam die
 * Meldung auf Deutsch, ohne dass irgendetwas fehlschlug.
 *
 * Aufruf:  node scripts/check-i18n.mjs
 * Exit 1 bei Lücken, sonst 0.
 */
import { UI } from '../src/data.js'
import { UI_EXTRA } from '../src/ui-extra.js'
import { LEGAL } from '../src/legal/index.js'

const SPRACHEN = Object.keys(UI_EXTRA)          // die 9 Zusatzsprachen
const alleKeys = Object.keys(UI)

/* Keys, die bewusst nur auf Deutsch/Englisch existieren, hier eintragen —
   mit Begründung, damit die Ausnahme nicht zur Sammelstelle wird. */
const AUSNAHMEN = new Set([])

const luecken = []
for (const sprache of SPRACHEN) {
  const block = UI_EXTRA[sprache]
  for (const key of alleKeys) {
    if (AUSNAHMEN.has(key)) continue
    if (block[key] == null) luecken.push({ sprache, key })
  }
}

/* Umgekehrte Richtung: Keys in UI_EXTRA, die es in UI gar nicht (mehr) gibt.
   Die sind tot und deuten auf eine unvollständige Umbenennung hin. */
const verwaist = []
for (const sprache of SPRACHEN) {
  for (const key of Object.keys(UI_EXTRA[sprache])) {
    if (!(key in UI)) verwaist.push({ sprache, key })
  }
}

if (luecken.length) {
  const proSprache = {}
  for (const l of luecken) (proSprache[l.sprache] ||= []).push(l.key)
  console.error(`\n✗ ${luecken.length} fehlende Übersetzungen in ${Object.keys(proSprache).length} Sprachen:\n`)
  for (const [s, keys] of Object.entries(proSprache)) {
    console.error(`  ${s}: ${keys.join(', ')}`)
  }
  console.error('\nJeder dieser Keys fällt zur Laufzeit still auf Deutsch zurück.\n')
}

if (verwaist.length) {
  console.error(`⚠ ${verwaist.length} verwaiste Keys in ui-extra.js (in UI nicht vorhanden):`)
  for (const v of verwaist.slice(0, 20)) console.error(`  ${v.sprache}: ${v.key}`)
  if (verwaist.length > 20) console.error(`  … und ${verwaist.length - 20} weitere`)
}

/* Rechtsseiten (src/legal/*.js): jede Sprache muss dieselbe Struktur haben
   wie die verbindliche deutsche Fassung — gleiche Felder, gleich viele
   Abschnitte und Absätze, keine leeren Texte. */
const rechtsLuecken = []
const form = (v) => Array.isArray(v) ? v.map(form)
  : (v && typeof v === 'object') ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, form(x)]))
  : (typeof v === 'string' && v.trim() ? 's' : 'LEER')
const vorlage = JSON.stringify(form(LEGAL.de))
for (const sprache of ['de', 'en', ...SPRACHEN]) {
  if (!LEGAL[sprache]) { rechtsLuecken.push(`${sprache}: fehlt`); continue }
  if (JSON.stringify(form(LEGAL[sprache])) !== vorlage) rechtsLuecken.push(`${sprache}: Struktur weicht von de.js ab`)
  for (const k of ['{terms}', '{privacy}']) if (!LEGAL[sprache].regNote?.includes(k)) rechtsLuecken.push(`${sprache}: regNote ohne ${k}`)
}
if (rechtsLuecken.length) {
  console.error(`\n✗ Rechtsseiten unvollständig:\n  ${rechtsLuecken.join('\n  ')}\n`)
}

if (luecken.length || rechtsLuecken.length) process.exit(1)

console.log(`✓ Rechtsseiten: ${Object.keys(LEGAL).length} Sprachen mit gleicher Struktur wie de.js`)
console.log(`✓ i18n vollständig: ${alleKeys.length} Keys × ${SPRACHEN.length} Sprachen` +
            (verwaist.length ? ` (${verwaist.length} verwaiste Keys, nicht blockierend)` : ''))
