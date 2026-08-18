/* QA 2 — Sprachdateien src/data.<code>.js gegen data.en.js.
   Import-Fehler, Kursanzahl, Test-Struktur (Anzahl Fragen/Optionen, correct-Indizes). */
import { COURSES_EN } from '../src/data.en.js'

const LANGS = ['cz', 'fr', 'pt', 'it', 'nl', 'ro', 'es', 'sr', 'ar']
const out = []
const add = (sev, code, msg) => out.push({ sev, code, msg })

const enById = new Map(COURSES_EN.map(c => [c.id, c]))
console.log(`COURSES_EN: ${COURSES_EN.length} Kurse`)

const loaded = {}
for (const lang of LANGS) {
  const key = `COURSES_${lang.toUpperCase()}`
  try {
    const mod = await import(`../src/data.${lang}.js`)
    const arr = mod[key]
    if (!Array.isArray(arr)) { add('KRITISCH', 'NO_EXPORT', `data.${lang}.js: Export ${key} fehlt oder ist kein Array (${typeof arr})`); continue }
    loaded[lang] = arr
    console.log(`data.${lang}.js: OK, ${key} = ${arr.length} Kurse`)
  } catch (e) {
    add('KRITISCH', 'IMPORT_FAIL', `data.${lang}.js laesst sich nicht importieren: ${e.message}`)
  }
}

/* --- Kursanzahl --- */
for (const [lang, arr] of Object.entries(loaded)) {
  if (arr.length !== COURSES_EN.length) {
    add('KRITISCH', 'COUNT_MISMATCH', `data.${lang}.js: ${arr.length} Kurse vs. data.en.js ${COURSES_EN.length}`)
  }
  /* id-Zuordnung: <en-id ohne -en> + -<lang> */
  const expected = COURSES_EN.map(c => c.id.replace(/-en$/, '') + '-' + lang)
  arr.forEach((c, i) => {
    if (c.id !== expected[i]) add('HOCH', 'ID_MISMATCH', `data.${lang}.js [idx ${i}]: id="${c.id}", erwartet "${expected[i]}"`)
    if (c.lang !== lang) add('HOCH', 'LANG_FIELD', `data.${lang}.js [idx ${i}] id=${c.id}: lang="${c.lang}"`)
    if (c.uid !== COURSES_EN[i].uid + '-' + lang) add('HOCH', 'UID_MISMATCH', `data.${lang}.js [idx ${i}] id=${c.id}: uid="${c.uid}", erwartet "${COURSES_EN[i].uid}-${lang}"`)
  })
  /* doppelte uid innerhalb der Sprache */
  const seen = new Map()
  arr.forEach((c, i) => { if (!seen.has(c.uid)) seen.set(c.uid, []); seen.get(c.uid).push(i) })
  for (const [uid, idxs] of seen) if (idxs.length > 1) add('KRITISCH', 'DUP_UID_LANG', `data.${lang}.js: uid ${uid} ${idxs.length}x (idx ${idxs.join(', ')})`)
}

/* --- Test-Struktur gegen EN --- */
for (const [lang, arr] of Object.entries(loaded)) {
  arr.forEach((c, i) => {
    const en = COURSES_EN[i]
    if (!en) return
    const eq = en.questions, lq = c.questions
    if (Array.isArray(eq) && eq.length) {
      if (!Array.isArray(lq) || !lq.length) {
        add('KRITISCH', 'TEST_MISSING', `${lang}/${c.id} (uid ${c.uid}): EN hat ${eq.length} Fragen, ${lang} hat ${Array.isArray(lq) ? lq.length : 'keine'}`)
        return
      }
      if (lq.length !== eq.length) {
        add('KRITISCH', 'TEST_QCOUNT', `${lang}/${c.id} (uid ${c.uid}): ${lq.length} Fragen vs. EN ${eq.length}`)
      }
      const n = Math.min(lq.length, eq.length)
      for (let qi = 0; qi < n; qi++) {
        const e = eq[qi], l = lq[qi]
        const eo = Array.isArray(e.options) ? e.options.length : -1
        const lo = Array.isArray(l.options) ? l.options.length : -1
        if (lo !== eo) {
          add('KRITISCH', 'TEST_OPTCOUNT', `${lang}/${c.id} (uid ${c.uid}) Frage ${qi + 1}: ${lo} Optionen vs. EN ${eo}`)
        }
        if (l.correct !== e.correct) {
          add('KRITISCH', 'TEST_CORRECT_SHIFT', `${lang}/${c.id} (uid ${c.uid}) Frage ${qi + 1}: correct=${l.correct} vs. EN correct=${e.correct} -> Test in ${lang} nicht bestehbar. ${lang}-Frage: "${String(l.q).slice(0, 80)}"`)
        }
        if (typeof l.correct !== 'number' || !Number.isInteger(l.correct) || l.correct < 0 || l.correct >= lo) {
          add('KRITISCH', 'TEST_CORRECT_RANGE', `${lang}/${c.id} (uid ${c.uid}) Frage ${qi + 1}: correct=${JSON.stringify(l.correct)} ausserhalb options (${lo})`)
        }
        if (typeof l.q !== 'string' || !l.q.trim()) add('HOCH', 'TEST_Q_EMPTY', `${lang}/${c.id} Frage ${qi + 1}: q leer`)
        if (Array.isArray(l.options)) l.options.forEach((o, oi) => {
          if (typeof o !== 'string' || !o.trim()) add('HOCH', 'TEST_OPT_EMPTY', `${lang}/${c.id} Frage ${qi + 1} Option ${oi} leer`)
        })
        /* nicht uebersetzt: identisch zum Englischen */
        if (lang !== 'en' && typeof l.q === 'string' && l.q === e.q) {
          add('NIEDRIG', 'TEST_UNTRANSLATED', `${lang}/${c.id} Frage ${qi + 1}: Text identisch mit EN`)
        }
      }
    } else if (Array.isArray(lq) && lq.length) {
      add('MITTEL', 'TEST_EXTRA', `${lang}/${c.id}: hat ${lq.length} Fragen, EN hat keine`)
    }
    /* contentType darf nicht abweichen */
    if (c.contentType !== en.contentType) add('HOCH', 'CTYPE_MISMATCH', `${lang}/${c.id}: contentType="${c.contentType}" vs. EN "${en.contentType}"`)
    /* Kurs ohne Video in dieser Sprache, EN hat eins */
    const enV = !!(en.youtubeId || (en.videoSegments || []).length)
    const lV = !!(c.youtubeId || (c.videoSegments || []).length)
    if (enV && !lV) add('MITTEL', 'VIDEO_MISSING', `${lang}/${c.id} (uid ${c.uid}): EN hat Video, ${lang} keines (kein Lip-Sync gemappt)`)
    if (enV && lV && Array.isArray(en.videoSegments) && Array.isArray(c.videoSegments) && en.videoSegments.length !== c.videoSegments.length) {
      add('MITTEL', 'SEGMENT_COUNT', `${lang}/${c.id}: ${c.videoSegments.length} videoSegments vs. EN ${en.videoSegments.length}`)
    }
    /* FAQ-Struktur */
    const efc = (en.faqGroups || []).reduce((s, g) => s + (g.items || g.questions || []).length, 0)
    const lfc = (c.faqGroups || []).reduce((s, g) => s + (g.items || g.questions || []).length, 0)
    if ((en.faqGroups || []).length !== (c.faqGroups || []).length || efc !== lfc) {
      add('HOCH', 'FAQ_STRUCT', `${lang}/${c.id} (uid ${c.uid}): faqGroups ${(c.faqGroups || []).length}/${lfc} Items vs. EN ${(en.faqGroups || []).length}/${efc} Items`)
    }
  })
}

console.log('\n=== BEFUNDE Sprachdateien ===')
const order = { KRITISCH: 0, HOCH: 1, MITTEL: 2, NIEDRIG: 3 }
out.sort((a, b) => order[a.sev] - order[b.sev])
const counts = {}
for (const o of out) counts[o.code] = (counts[o.code] || 0) + 1
console.log('Codes:', JSON.stringify(counts))
for (const o of out) if (o.sev === 'KRITISCH' || o.sev === 'HOCH' || o.sev === 'MITTEL') console.log(`[${o.sev}][${o.code}] ${o.msg}`)
console.log(`\nSUMME: ${out.length}`)
