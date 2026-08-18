/* QA 6 — VIDEOS-Maps im Detail: Abdeckung gegen EN, tote Keys,
   und ob dieselbe Ziel-ID in ZWEI Sprachen verwendet wird (falsche Sprachspur). */
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url'
import { COURSES_EN } from '../src/data.en.js'
const SRC = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src')
const LANGS = ['cz','fr','pt','it','nl','ro','es','sr','ar']
const enIds = new Set()
COURSES_EN.forEach(c => { if (c.youtubeId) enIds.add(c.youtubeId); (c.videoSegments||[]).forEach(s => s.youtubeId && enIds.add(s.youtubeId)) })
console.log('EN benutzt', enIds.size, 'verschiedene YouTube-IDs')
const maps = {}
for (const l of LANGS) {
  const txt = fs.readFileSync(path.join(SRC, `data.${l}.js`), 'utf8')
  const open = txt.indexOf('{', txt.indexOf('const VIDEOS = {'))
  let d = 0, end = -1
  for (let i = open; i < txt.length; i++) { if (txt[i]==='{') d++; else if (txt[i]==='}') { d--; if (!d) { end = i; break } } }
  maps[l] = JSON.parse(txt.slice(open, end+1))
}
const out = []
for (const l of LANGS) {
  const m = maps[l]; const ks = Object.keys(m)
  if (!ks.length) { console.log(`${l}: VIDEOS leer -> alle ${enIds.size} EN-Videos fehlen in ${l}`); continue }
  const dead = ks.filter(k => !enIds.has(k))
  const uncovered = [...enIds].filter(k => !(k in m))
  console.log(`${l}: ${ks.length} Keys | tote Keys (kein EN-Video): ${dead.length}${dead.length?' -> '+dead.join(', '):''} | EN-IDs ohne ${l}-Mapping: ${uncovered.length}${uncovered.length?' -> '+uncovered.join(', '):''}`)
  if (dead.length) out.push(`[HOCH] data.${l}.js: VIDEOS-Keys ohne Gegenstueck in EN: ${dead.join(', ')}`)
}
/* Ziel-ID in mehreren Sprachen? */
const byTarget = new Map()
for (const l of LANGS) for (const [k,v] of Object.entries(maps[l])) {
  if (!byTarget.has(v)) byTarget.set(v, []); byTarget.get(v).push(`${l}:${k}`)
}
let cross = 0
for (const [v, us] of byTarget) {
  const langs = new Set(us.map(u => u.split(':')[0]))
  if (langs.size > 1) { cross++; out.push(`[KRITISCH] Ziel-ID ${v} in ${langs.size} Sprachen verwendet: ${us.join(', ')} — mindestens eine Sprache zeigt die falsche Tonspur`) }
}
console.log(`\nZiel-IDs gesamt: ${byTarget.size} | sprachuebergreifend doppelt: ${cross}`)
/* Ziel-ID gleich Quell-ID (Mapping auf sich selbst = englisches Video) */
for (const l of LANGS) for (const [k,v] of Object.entries(maps[l])) if (k===v) out.push(`[HOCH] data.${l}.js: VIDEOS["${k}"] zeigt auf sich selbst — in ${l} laeuft das englische Video`)
console.log('\n=== BEFUNDE ===')
console.log(out.length ? out.join('\n') : 'keine')
