/* QA 1 — src/data.js (DE-Basis): doppelte uid, contentType 'course' ohne questions,
   correct-Index ausserhalb options, leere/fehlende Pflichtfelder.
   Laeuft gegen das GELADENE Modul, nicht gegen Text. */
import { COURSES, isCertifiable } from '../src/data.js'

const out = []
const add = (sev, code, msg) => out.push({ sev, code, msg })

console.log(`COURSES (data.js): ${COURSES.length} Eintraege`)

/* --- 1a: doppelte uid --- */
const byUid = new Map()
COURSES.forEach((c, i) => {
  const k = c.uid
  if (!byUid.has(k)) byUid.set(k, [])
  byUid.get(k).push({ i, id: c.id, lang: c.lang, category: c.category, topic: c.topic })
})
for (const [uid, list] of byUid) {
  if (list.length > 1) add('KRITISCH', 'DUP_UID',
    `uid ${uid} ${list.length}x: ${list.map(x => `[idx ${x.i}] id=${x.id} lang=${x.lang} cat=${x.category} topic=${x.topic}`).join(' || ')}`)
}
/* doppelte id (zusaetzlich, id wird als courseKey-Fallback benutzt) */
const byId = new Map()
COURSES.forEach((c, i) => {
  if (!byId.has(c.id)) byId.set(c.id, [])
  byId.get(c.id).push({ i, uid: c.uid })
})
for (const [id, list] of byId) {
  if (list.length > 1) add('HOCH', 'DUP_ID',
    `id ${id} ${list.length}x: ${list.map(x => `[idx ${x.i}] uid=${x.uid}`).join(' || ')}`)
}

/* --- 1b: contentType 'course' ohne questions-Block --- */
COURSES.forEach((c, i) => {
  if (c.contentType === 'course') {
    if (!Array.isArray(c.questions)) {
      add('HOCH', 'NO_QUESTIONS', `[idx ${i}] id=${c.id} uid=${c.uid} contentType=course, questions=${JSON.stringify(c.questions)}`)
    } else if (c.questions.length === 0) {
      add('HOCH', 'EMPTY_QUESTIONS', `[idx ${i}] id=${c.id} uid=${c.uid} contentType=course, questions=[] (leer)`)
    }
  }
})

/* zertifizierbar aber ohne Fragen (Zertifikat ohne Test) */
COURSES.forEach((c, i) => {
  try {
    if (isCertifiable(c) && !(Array.isArray(c.questions) && c.questions.length)) {
      add('HOCH', 'CERTIFIABLE_NO_TEST', `[idx ${i}] id=${c.id} uid=${c.uid} isCertifiable=true, aber keine questions`)
    }
  } catch (e) { /* ignore */ }
})

/* --- 1c: correct-Index ausserhalb options --- */
COURSES.forEach((c, i) => {
  if (!Array.isArray(c.questions)) return
  c.questions.forEach((q, qi) => {
    const opts = q.options
    if (!Array.isArray(opts)) {
      add('KRITISCH', 'Q_NO_OPTIONS', `[idx ${i}] id=${c.id} uid=${c.uid} Frage ${qi + 1}: options ist ${JSON.stringify(opts)}`)
      return
    }
    if (opts.length < 2) add('HOCH', 'Q_TOO_FEW_OPTIONS', `[idx ${i}] id=${c.id} Frage ${qi + 1}: nur ${opts.length} Option(en)`)
    opts.forEach((o, oi) => {
      if (typeof o !== 'string' || !o.trim()) add('HOCH', 'Q_EMPTY_OPTION', `[idx ${i}] id=${c.id} Frage ${qi + 1} Option ${oi}: ${JSON.stringify(o)}`)
    })
    const dupOpt = opts.filter((o, oi) => opts.indexOf(o) !== oi)
    if (dupOpt.length) add('MITTEL', 'Q_DUP_OPTION', `[idx ${i}] id=${c.id} Frage ${qi + 1}: doppelte Optionstexte ${JSON.stringify([...new Set(dupOpt)])}`)
    const cr = q.correct
    if (typeof cr !== 'number' || !Number.isInteger(cr)) {
      add('KRITISCH', 'Q_CORRECT_TYPE', `[idx ${i}] id=${c.id} uid=${c.uid} Frage ${qi + 1}: correct=${JSON.stringify(cr)} (kein Integer)`)
    } else if (cr < 0 || cr >= opts.length) {
      add('KRITISCH', 'Q_CORRECT_RANGE', `[idx ${i}] id=${c.id} uid=${c.uid} Frage ${qi + 1}: correct=${cr}, options.length=${opts.length} -> Frage nie loesbar. Frage: "${String(q.q).slice(0, 90)}"`)
    }
    if (typeof q.q !== 'string' || !q.q.trim()) add('HOCH', 'Q_EMPTY_TEXT', `[idx ${i}] id=${c.id} Frage ${qi + 1}: q=${JSON.stringify(q.q)}`)
  })
})

/* --- 1d: Pflichtfelder --- */
const REQUIRED = ['id', 'uid', 'lang', 'category', 'contentType']
const REQUIRED_COURSE = ['topic', 'description', 'thumbnail']
COURSES.forEach((c, i) => {
  for (const f of REQUIRED) {
    const v = c[f]
    if (v == null || (typeof v === 'string' && !v.trim())) {
      add('KRITISCH', 'MISSING_FIELD', `[idx ${i}] id=${c.id ?? '?'} uid=${c.uid ?? '?'}: Pflichtfeld "${f}" = ${JSON.stringify(v)}`)
    }
  }
  if (c.contentType === 'course') {
    for (const f of REQUIRED_COURSE) {
      const v = c[f]
      if (v == null || (typeof v === 'string' && !v.trim())) {
        add('MITTEL', 'MISSING_FIELD_COURSE', `[idx ${i}] id=${c.id} uid=${c.uid}: Feld "${f}" = ${JSON.stringify(v)}`)
      }
    }
    const hasVideo = c.youtubeId || (Array.isArray(c.videoSegments) && c.videoSegments.length)
    if (!hasVideo) add('MITTEL', 'NO_VIDEO', `[idx ${i}] id=${c.id} uid=${c.uid}: contentType=course ohne youtubeId und ohne videoSegments`)
  }
  /* leere Arrays, die als vorhanden gelten */
  for (const f of ['bullets', 'introQuestions', 'documents', 'videoSegments', 'faqGroups', 'articleSections']) {
    if (Array.isArray(c[f]) && c[f].length === 0) add('NIEDRIG', 'EMPTY_ARRAY', `[idx ${i}] id=${c.id}: ${f} = [] (leeres Array)`)
  }
})

/* uid-Format */
const UUIDRE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
COURSES.forEach((c, i) => {
  if (typeof c.uid === 'string' && !UUIDRE.test(c.uid)) add('NIEDRIG', 'UID_FORMAT', `[idx ${i}] id=${c.id}: uid="${c.uid}" kein UUID-Format`)
})

/* contentType-Inventar */
const types = {}
COURSES.forEach(c => { types[c.contentType] = (types[c.contentType] || 0) + 1 })
console.log('contentType-Verteilung:', JSON.stringify(types))
console.log('Kurse mit questions:', COURSES.filter(c => Array.isArray(c.questions) && c.questions.length).length)

console.log('\n=== BEFUNDE data.js ===')
if (!out.length) console.log('keine')
const order = { KRITISCH: 0, HOCH: 1, MITTEL: 2, NIEDRIG: 3 }
out.sort((a, b) => order[a.sev] - order[b.sev])
for (const o of out) console.log(`[${o.sev}][${o.code}] ${o.msg}`)
console.log(`\nSUMME: ${out.length}`)
