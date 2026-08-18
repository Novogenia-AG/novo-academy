/* QA 3 — HOME_TOP_VIDEOS_BY_LANG / HOME_VIDEO_BY_LANG und die VIDEOS-Maps
   der Sprachdateien: fehlende Sprachen, doppelte YouTube-IDs je Sprache. */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getHomeTopVideos, getHomeVideoSection, COURSES } from '../src/data.js'
import { COURSES_EN } from '../src/data.en.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(HERE, '..', 'src')
const UI_LANGS = ['de', 'en', 'cz', 'fr', 'pt', 'it', 'nl', 'ro', 'es', 'sr', 'ar']
const AI_LANGS = ['cz', 'fr', 'pt', 'it', 'nl', 'ro', 'es', 'sr', 'ar']
const out = []
const add = (sev, code, msg) => out.push({ sev, code, msg })

/* ---- 3a: HOME_TOP_VIDEOS_BY_LANG ----
   Nicht exportiert -> ueber getHomeTopVideos() gelesen. Fallback ist EN,
   also unterscheiden wir "Sprache im Map" (eigener Wert) von "faellt auf EN zurueck". */
const EN_TOP = getHomeTopVideos('en')
const FALLBACK_PROBE = getHomeTopVideos('__nonexistent__')
console.log('=== HOME_TOP_VIDEOS_BY_LANG ===')
for (const l of UI_LANGS) {
  const v = getHomeTopVideos(l)
  const isFallback = v === FALLBACK_PROBE && l !== 'en'
  const ids = (v || []).map(x => x.youtubeId)
  console.log(`  ${l.padEnd(3)} n=${String((v || []).length).padStart(2)} ${isFallback ? 'FALLBACK->EN' : 'eigener Eintrag'} ids=[${ids.join(', ')}]`)
  if (isFallback) add('HOCH', 'HOMETOP_MISSING_LANG', `HOME_TOP_VIDEOS_BY_LANG hat keinen Key "${l}" -> englischer Fallback`)
  if (!Array.isArray(v)) { add('KRITISCH', 'HOMETOP_NOT_ARRAY', `getHomeTopVideos('${l}') liefert ${typeof v}`); continue }
  const seen = new Map()
  v.forEach((x, i) => {
    if (!x || typeof x.youtubeId !== 'string' || !x.youtubeId.trim()) {
      add('HOCH', 'HOMETOP_NO_ID', `HOME_TOP_VIDEOS_BY_LANG['${l}'][${i}]: youtubeId=${JSON.stringify(x && x.youtubeId)}`)
      return
    }
    if (!/^[A-Za-z0-9_-]{11}$/.test(x.youtubeId)) add('MITTEL', 'HOMETOP_ID_FORMAT', `HOME_TOP_VIDEOS_BY_LANG['${l}'][${i}]: youtubeId="${x.youtubeId}" kein 11-Zeichen-YouTube-Format`)
    if (!seen.has(x.youtubeId)) seen.set(x.youtubeId, [])
    seen.get(x.youtubeId).push(i)
    if (typeof x.title !== 'string' || !x.title.trim()) add('MITTEL', 'HOMETOP_NO_TITLE', `HOME_TOP_VIDEOS_BY_LANG['${l}'][${i}] (${x.youtubeId}): title leer`)
  })
  for (const [id, idxs] of seen) if (idxs.length > 1)
    add('HOCH', 'HOMETOP_DUP_ID', `HOME_TOP_VIDEOS_BY_LANG['${l}']: YouTube-ID ${id} ${idxs.length}x (Positionen ${idxs.join(', ')}) — dieselbe Kachel doppelt`)
}

/* ---- 3b: HOME_VIDEO_BY_LANG ---- */
console.log('\n=== HOME_VIDEO_BY_LANG (getHomeVideoSection) ===')
const HV_FALLBACK = getHomeVideoSection('__nonexistent__')
for (const l of UI_LANGS) {
  const s = getHomeVideoSection(l)
  const isFallback = s === HV_FALLBACK && l !== 'en'
  const ids = (s?.videos || []).map(x => x.youtubeId)
  console.log(`  ${l.padEnd(3)} n=${String((s?.videos || []).length).padStart(2)} ${isFallback ? 'FALLBACK->EN' : 'eigener Eintrag'} ids=[${ids.join(', ')}]`)
  if (isFallback) add('HOCH', 'HOMEVID_MISSING_LANG', `HOME_VIDEO_BY_LANG hat keinen Key "${l}" -> englischer Fallback (englische Sektion in ${l})`)
  const seen = new Map()
  ;(s?.videos || []).forEach((x, i) => {
    const id = x?.youtubeId
    if (typeof id !== 'string' || !id.trim()) { add('HOCH', 'HOMEVID_NO_ID', `HOME_VIDEO_BY_LANG['${l}'].videos[${i}]: youtubeId=${JSON.stringify(id)}`); return }
    if (!seen.has(id)) seen.set(id, []); seen.get(id).push(i)
  })
  for (const [id, idxs] of seen) if (idxs.length > 1)
    add('HOCH', 'HOMEVID_DUP_ID', `HOME_VIDEO_BY_LANG['${l}']: YouTube-ID ${id} ${idxs.length}x (Positionen ${idxs.join(', ')})`)
}

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
