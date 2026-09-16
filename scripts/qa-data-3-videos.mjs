/* QA 3 — Startseiten-Videos (HOME_VIDEO_IDS / getHomeTopVideos / getHomeVideoSection)
   und die VIDEOS-Maps der Sprachdateien: fehlende Sprachen/Slots, Quell-ID-Lecks,
   KI-Kennzeichnung, doppelte YouTube-IDs je Sprache. */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getHomeTopVideos, getHomeVideoSection, HOME_VIDEO_IDS, COURSES } from '../src/data.js'
import { COURSES_EN } from '../src/data.en.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(HERE, '..', 'src')
const UI_LANGS = ['de', 'en', 'cz', 'fr', 'pt', 'it', 'nl', 'ro', 'es', 'sr', 'ar']
const AI_LANGS = ['cz', 'fr', 'pt', 'it', 'nl', 'ro', 'es', 'sr', 'ar']
const out = []
const add = (sev, code, msg) => out.push({ sev, code, msg })

/* ---- 3a/3b: Startseiten-Videos ----
   Rohdaten aus HOME_VIDEO_IDS, Sichtbarkeit über die Getter getHomeTopVideos /
   getHomeVideoSection (so rendert App.jsx). Geprüft wird: jede Sprache hat alle
   drei Slots, IDs im 11-Zeichen-Format, keine Quell-ID eines Lip-Sync in fremder
   Sprache, keine ID doppelt, gesetzte ID wird auch angezeigt (Text vorhanden),
   nichts ohne ID wird gerendert, KI-Kennzeichnung stimmt, kein deutsches Cover
   außerhalb von DE, unbekannte Sprache liefert nichts (kein EN-Fallback). */
const SLOTS = ['welcome', 'tour', 'longevity']
const LIPSYNC_SRC = { welcome: ['en', 'rDQBNTWt82Y'], tour: ['en', 'N9aEz_WAe1I'], longevity: ['de', 'jHgdDRGy0hA'] }
/* Unabhängig von data.js definiert: echte Aufnahmen sind de (alle drei) und en welcome/tour. */
const isOriginal = (l, s) => l === 'de' || (l === 'en' && s !== 'longevity')
const idOwner = new Map()
console.log('=== HOME_VIDEO_IDS (Startseite) ===')
for (const l of UI_LANGS) {
  const row = HOME_VIDEO_IDS[l]
  if (!row) { add('HOCH', 'HOME_MISSING_LANG', `HOME_VIDEO_IDS hat keinen Key "${l}"`); continue }
  const top = getHomeTopVideos(l), hv = getHomeVideoSection(l)
  console.log(`  ${l.padEnd(3)} ` + SLOTS.map(s => `${s}=${row[s] || '—'}`).join('  ') + `  -> sichtbar top ${top.length}/2, bonus ${hv.videos.length}/1`)
  for (const k of Object.keys(row)) if (!SLOTS.includes(k)) add('HOCH', 'HOME_SLOT_UNKNOWN', `HOME_VIDEO_IDS['${l}'] hat unbekannten Slot "${k}" (Tippfehler? erlaubt: ${SLOTS.join(', ')})`)
  for (const s of SLOTS) {
    if (!(s in row)) { add('HOCH', 'HOME_SLOT_MISSING', `HOME_VIDEO_IDS['${l}'] ohne Slot "${s}" (null setzen)`); continue }
    const id = row[s]
    if (id == null) continue
    if (typeof id !== 'string' || !/^[A-Za-z0-9_-]{11}$/.test(id)) { add('HOCH', 'HOME_ID_FORMAT', `HOME_VIDEO_IDS['${l}'].${s} = ${JSON.stringify(id)} — keine 11-stellige YouTube-ID`); continue }
    const [srcLang, srcId] = LIPSYNC_SRC[s]
    if (l !== srcLang && id === srcId) add('KRITISCH', 'HOME_SOURCE_LEAK', `HOME_VIDEO_IDS['${l}'].${s} = Quell-ID ${srcId} (${srcLang}) — Video in falscher Sprache`)
    if (idOwner.has(id)) add('HOCH', 'HOME_DUP_ID', `YouTube-ID ${id} doppelt: ${idOwner.get(id)} und ${l}.${s}`)
    else idOwner.set(id, `${l}.${s}`)
  }
  const expTop = ['welcome', 'tour'].filter(s => row[s]).length
  if (top.length !== expTop) add('HOCH', 'HOMETOP_TEXT_MISSING', `${l}: ${expTop} Top-IDs gesetzt, ${top.length} Kacheln sichtbar — Titel fehlt in HOME_TOP_TEXT['${l}']`)
  if (!!row.longevity !== (hv.videos.length === 1)) add('HOCH', 'HOMEVID_TEXT_MISSING', `${l}: longevity ${row.longevity ? 'gesetzt' : 'leer'}, Bonus ${hv.videos.length ? 'sichtbar' : 'ausgeblendet'} — category/title in HOME_BONUS_TEXT['${l}'] prüfen`)
  if (hv.videos.length && !String(hv.subtitle || '').trim()) add('MITTEL', 'HOMEVID_NO_SUBTITLE', `${l}: Bonus ohne subtitle — der Video-Titel ist in der Kachel nicht sichtbar`)
  for (const v of [...top, ...hv.videos]) {
    if (!v.youtubeId) add('KRITISCH', 'HOME_NULL_RENDERED', `${l}.${v.slot}: Eintrag ohne youtubeId wird gerendert`)
    if (typeof v.title !== 'string' || !v.title.trim()) add('MITTEL', 'HOME_NO_TITLE', `${l}.${v.slot}: title leer`)
    if (!isOriginal(l, v.slot) && v.aiDub !== true) add('KRITISCH', 'HOME_AI_LABEL', `${l}.${v.slot}: Lip-Sync ohne aiDub — KI-Hinweis (Art. 50 Abs. 4 KI-VO) fehlt`)
    if (isOriginal(l, v.slot) && v.aiDub) add('MITTEL', 'HOME_AI_LABEL_ORIGINAL', `${l}.${v.slot}: Originalaufnahme als KI markiert`)
    if (l !== 'de' && /ewig-leben-cover/.test(v.coverImage || '')) add('HOCH', 'HOME_COVER_DE_TEXT', `${l}.${v.slot}: deutsches Cover (ewig-leben-cover) in fremder Sprache`)
  }
}
for (const l of Object.keys(HOME_VIDEO_IDS)) if (!UI_LANGS.includes(l)) add('MITTEL', 'HOME_LANG_UNKNOWN', `HOME_VIDEO_IDS hat Sprache "${l}", die nicht in UI_LANGS steht`)
if (getHomeTopVideos('__nonexistent__').length) add('HOCH', 'HOMETOP_FALLBACK', 'unbekannte Sprache liefert Top-Kacheln — Fallback muss leer sein')
if (getHomeVideoSection('__nonexistent__').videos.length) add('HOCH', 'HOMEVID_FALLBACK', 'unbekannte Sprache liefert Bonus-Sektion — Fallback muss leer sein')

/* ---- 3c: VIDEOS-Maps der Sprachdateien ----
   Der Map-Block ist modul-intern. Wir lesen ihn als JSON-Objektliteral aus der
   Datei (reines Objekt, keine Ausdruecke) und pruefen Keys/Values. */
console.log('\n=== VIDEOS-Maps (data.<lang>.js) ===')
const videoMaps = {}
for (const l of AI_LANGS) {
  const file = path.join(SRC, `data.${l}.js`)
  const txt = fs.readFileSync(file, 'utf8')
  const start = txt.indexOf('const VIDEOS = {')
  if (start < 0) { add('KRITISCH', 'VIDEOS_MAP_MISSING', `data.${l}.js: kein "const VIDEOS = {" gefunden`); continue }
  const open = txt.indexOf('{', start)
  let depth = 0, end = -1
  for (let i = open; i < txt.length; i++) {
    if (txt[i] === '{') depth++
    else if (txt[i] === '}') { depth--; if (depth === 0) { end = i; break } }
  }
  let map
  try { map = JSON.parse(txt.slice(open, end + 1)) }
  catch (e) { add('KRITISCH', 'VIDEOS_MAP_PARSE', `data.${l}.js: VIDEOS-Map nicht als JSON lesbar: ${e.message}`); continue }
  videoMaps[l] = map
  const entries = Object.entries(map)
  /* doppelte Ziel-IDs = zwei verschiedene EN-Videos zeigen auf dasselbe Lip-Sync-Video */
  const byTarget = new Map()
  for (const [k, v] of entries) {
    if (typeof v !== 'string' || !/^[A-Za-z0-9_-]{11}$/.test(v)) add('HOCH', 'VIDEOS_BAD_TARGET', `data.${l}.js VIDEOS["${k}"] = ${JSON.stringify(v)} — keine gueltige YouTube-ID`)
    if (!/^[A-Za-z0-9_-]{11}$/.test(k)) add('MITTEL', 'VIDEOS_BAD_KEY', `data.${l}.js VIDEOS-Key "${k}" — keine gueltige YouTube-ID`)
    if (!byTarget.has(v)) byTarget.set(v, [])
    byTarget.get(v).push(k)
  }
  let dupT = 0
  for (const [v, ks] of byTarget) if (ks.length > 1) {
    dupT++
    add('KRITISCH', 'VIDEOS_DUP_TARGET', `data.${l}.js: Ziel-ID ${v} ist ${ks.length}x zugeordnet — EN-Quellen ${ks.map(k => `"${k}"`).join(', ')} zeigen auf dasselbe ${l}-Video`)
  }
  console.log(`  ${l}: ${entries.length} Mappings, ${byTarget.size} verschiedene Ziel-IDs, ${dupT} Mehrfachzuordnungen`)
}

/* ---- 3d: doppelte YouTube-IDs innerhalb einer Sprache (Kursebene, aus geladenen Modulen) ----
   Referenz ist EN: wenn EN dasselbe Video mehrfach verwendet, ist das Absicht.
   Nur zusaetzliche Duplikate in einer Sprache sind ein Befund. */
console.log('\n=== YouTube-IDs je Sprache (Kurse, geladen) ===')
const collect = (arr) => {
  const m = new Map()
  arr.forEach(c => {
    const push = (id, where) => { if (!id) return; if (!m.has(id)) m.set(id, []); m.get(id).push(where) }
    push(c.youtubeId, `${c.id}:main`)
    ;(c.videoSegments || []).forEach((s, si) => push(s.youtubeId, `${c.id}:seg${si}`))
  })
  return m
}
const byLang = {}
for (const l of UI_LANGS) byLang[l] = collect(COURSES.filter(c => (c.lang || 'de') === l))
const enDup = new Set()
for (const [id, w] of byLang.en) if (w.length > 1) enDup.add(w.map(x => x.replace(/-en:/, ':')).sort().join('|'))
for (const l of UI_LANGS) {
  const m = byLang[l]
  const dups = [...m].filter(([, w]) => w.length > 1)
  console.log(`  ${l.padEnd(3)} ${String(m.size).padStart(3)} verschiedene IDs, ${dups.length} mehrfach verwendet`)
  for (const [id, w] of dups) {
    const sig = w.map(x => x.replace(new RegExp(`-${l}:`), ':')).sort().join('|')
    if (l !== 'en' && l !== 'de' && enDup.has(sig)) continue      // gleiche Doppelung wie im Englischen -> Absicht
    add(l === 'en' || l === 'de' ? 'MITTEL' : 'HOCH', 'COURSE_DUP_VIDEO',
      `Sprache ${l}: YouTube-ID ${id} in ${w.length} Kurs-Slots — ${w.join(', ')}`)
  }
}

console.log('\n=== BEFUNDE Videos ===')
const order = { KRITISCH: 0, HOCH: 1, MITTEL: 2, NIEDRIG: 3 }
out.sort((a, b) => order[a.sev] - order[b.sev])
for (const o of out) console.log(`[${o.sev}][${o.code}] ${o.msg}`)
console.log(`\nSUMME: ${out.length}`)
void COURSES_EN
