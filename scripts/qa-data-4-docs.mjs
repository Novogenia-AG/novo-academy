/* QA 4 — Dokument-Links. Quelle sind AUSSCHLIESSLICH die geladenen Module
   (COURSES aus data.js), keine Textsuche in den Dateien.
   Gemeldet werden nur strukturell kaputte Links. */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { COURSES } from '../src/data.js'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const PUBLIC = path.join(HERE, '..', 'public')
const out = []
const add = (sev, code, msg) => out.push({ sev, code, msg })

/* Alle Dokumente einsammeln — auch aus verschachtelten Strukturen */
const docs = []
for (const c of COURSES) {
  const grab = (list, where) => {
    if (!Array.isArray(list)) return
    list.forEach((d, i) => docs.push({ course: c, where: `${where}[${i}]`, d }))
  }
  grab(c.documents, 'documents')
  ;(c.articleSections || []).forEach((s, si) => grab(s.documents, `articleSections[${si}].documents`))
  ;(c.videoSegments || []).forEach((s, si) => grab(s.documents, `videoSegments[${si}].documents`))
  ;(c.faqGroups || []).forEach((g, gi) => grab(g.documents, `faqGroups[${gi}].documents`))
}
console.log(`Dokument-Eintraege gesamt (aus geladenen Modulen): ${docs.length}`)

const localSet = new Map()   // pfad -> [wer]
let noUrl = 0
for (const { course, where, d } of docs) {
  const tag = `${course.lang || 'de'}/${course.id} (uid ${course.uid}) ${where}`
  if (!d || typeof d !== 'object') { add('HOCH', 'DOC_NOT_OBJECT', `${tag}: Eintrag ist ${JSON.stringify(d)}`); continue }
  if (typeof d.title !== 'string' || !d.title.trim()) add('MITTEL', 'DOC_NO_TITLE', `${tag}: title=${JSON.stringify(d.title)}`)
  const url = d.url
  if (url === undefined) { noUrl++; continue }   // Platzhalter-Doku ohne url (GENERIC_DOCS) — separat gezaehlt
  if (typeof url !== 'string') { add('KRITISCH', 'DOC_URL_TYPE', `${tag}: url=${JSON.stringify(url)} (kein String)`); continue }
  const raw = url
  if (!raw.trim()) { add('KRITISCH', 'DOC_URL_EMPTY', `${tag}: url ist leer/whitespace ("${raw}")`); continue }
  if (raw !== raw.trim()) add('HOCH', 'DOC_URL_WS', `${tag}: url hat fuehrende/abschliessende Leerzeichen: ${JSON.stringify(raw)}`)
  const u = raw.trim()
  if (/\s/.test(u)) add('KRITISCH', 'DOC_URL_SPACE', `${tag}: url enthaelt unkodierte Leerzeichen: "${u}"`)
  if (/(undefined|null|\[object)/i.test(u)) add('KRITISCH', 'DOC_URL_PLACEHOLDER', `${tag}: url enthaelt Platzhalter-Artefakt: "${u}"`)
  if (u.startsWith('http://') || u.startsWith('https://')) {
    try {
      const parsed = new URL(u)
      if (!parsed.hostname || !parsed.hostname.includes('.')) add('KRITISCH', 'DOC_URL_HOST', `${tag}: Host unbrauchbar in "${u}"`)
      if (parsed.pathname === '/' || parsed.pathname === '') add('HOCH', 'DOC_URL_NO_PATH', `${tag}: absolute URL ohne Pfad: "${u}"`)
    } catch (e) { add('KRITISCH', 'DOC_URL_PARSE', `${tag}: url nicht parsebar: "${u}" (${e.message})`) }
  } else if (u.startsWith('/')) {
    if (u.includes('//')) add('HOCH', 'DOC_URL_DOUBLESLASH', `${tag}: doppelter Slash im Pfad: "${u}"`)
    const key = decodeURIComponent(u.split('?')[0].split('#')[0])
    if (!localSet.has(key)) localSet.set(key, [])
    localSet.get(key).push(tag)
  } else {
    add('KRITISCH', 'DOC_URL_RELATIVE', `${tag}: url ist weder absolut noch root-relativ: "${u}"`)
  }
  /* Dateiendung vs. type */
  const ext = (u.split('?')[0].split('#')[0].match(/\.([a-z0-9]{2,5})$/i) || [])[1]
  if (ext && typeof d.type === 'string' && d.type && ext.toLowerCase() !== d.type.toLowerCase()) {
    add('MITTEL', 'DOC_TYPE_MISMATCH', `${tag}: type="${d.type}" aber Endung ".${ext}" — "${u.split('/').pop()}"`)
  }
  if (!ext) add('MITTEL', 'DOC_NO_EXT', `${tag}: url ohne Dateiendung: "${u}"`)
}
console.log(`Eintraege ohne url-Feld (Platzhalter/GENERIC_DOCS): ${noUrl}`)
console.log(`Lokale Pfade (eindeutig): ${localSet.size}`)

/* lokale Pfade gegen public/ pruefen */
let missing = 0
for (const [p, users] of localSet) {
  const fsPath = path.join(PUBLIC, p.replace(/^\//, '').split('/').join(path.sep))
  if (!fs.existsSync(fsPath)) {
    missing++
    add('KRITISCH', 'DOC_FILE_MISSING', `Datei fehlt in public/: "${p}" — referenziert von ${users.length} Stelle(n), z.B. ${users.slice(0, 3).join(' | ')}`)
  }
}
console.log(`Lokale Pfade ohne Datei in public/: ${missing}`)

console.log('\n=== BEFUNDE Dokument-Links ===')
const order = { KRITISCH: 0, HOCH: 1, MITTEL: 2, NIEDRIG: 3 }
out.sort((a, b) => order[a.sev] - order[b.sev])
const counts = {}
for (const o of out) counts[o.code] = (counts[o.code] || 0) + 1
console.log('Codes:', JSON.stringify(counts, null, 1))
for (const o of out) if (o.sev === 'KRITISCH' || o.sev === 'HOCH') console.log(`[${o.sev}][${o.code}] ${o.msg}`)
console.log(`\nSUMME (alle Schweregrade): ${out.length}`)
