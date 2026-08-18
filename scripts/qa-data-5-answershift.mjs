/* QA 5 — Vertiefung zu 2: Wurden beim Uebersetzen die Antwortoptionen umsortiert,
   ohne correct mitzuziehen? Heuristik: Zahlen-Fingerprint jeder Option.
   Zahlen werden nicht uebersetzt; steht der Fingerprint der EN-Option an anderer
   Stelle, wurde die Reihenfolge veraendert. */
import { COURSES_EN } from '../src/data.en.js'

const LANGS = ['cz', 'fr', 'pt', 'it', 'nl', 'ro', 'es', 'sr', 'ar']
const ARABIC_DIGITS = { '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9' }
/* Ziffern vereinheitlichen und ALLE Trennzeichen zwischen Ziffern entfernen
   (1,000 / 1.000 / 1 000 / 1'000 -> 1000; 2,4 / 2.4 -> 24). Beide Seiten gleich
   behandelt, deshalb bleibt der Vergleich aussagekraeftig. */
const norm = (s) => {
  let x = String(s).replace(/[٠-٩]/g, d => ARABIC_DIGITS[d])
  let prev
  do { prev = x; x = x.replace(/(\d)[.,'’    ](\d)/g, '$1$2') } while (x !== prev)
  return x
}
const fp = (s) => (norm(s).match(/\d+/g) || []).sort().join('|')

const out = []
let checked = 0
for (const lang of LANGS) {
  const mod = await import(`../src/data.${lang}.js`)
  const arr = mod[`COURSES_${lang.toUpperCase()}`]
  arr.forEach((c, i) => {
    const en = COURSES_EN[i]
    if (!Array.isArray(en?.questions) || !Array.isArray(c.questions)) return
    c.questions.forEach((lq, qi) => {
      const eq = en.questions[qi]
      if (!eq || !Array.isArray(eq.options) || !Array.isArray(lq.options)) return
      const enFps = eq.options.map(fp)
      const lFps = lq.options.map(fp)
      /* nur Fragen bewerten, bei denen die EN-Optionen ueber Zahlen unterscheidbar sind */
      const distinct = new Set(enFps.filter(Boolean))
      if (distinct.size < 2 || enFps.some(x => !x)) return
      checked++
      for (let oi = 0; oi < enFps.length; oi++) {
        if (enFps[oi] !== lFps[oi]) {
          const foundAt = lFps.indexOf(enFps[oi])
          out.push(`[${lang}] ${c.id} (uid ${c.uid}) Frage ${qi + 1}: EN-Option ${oi} (Zahlen ${enFps[oi]}) steht in ${lang} an Position ${foundAt} (Zahlen dort: ${lFps[oi] || '—'}). correct=${lq.correct} (EN ${eq.correct}) => ${foundAt === -1 ? 'Option fehlt/umformuliert' : 'Reihenfolge verschoben, correct NICHT mitgezogen'}`)
        }
      }
    })
  })
}
console.log(`Fragen mit zahlenbasiert unterscheidbaren Optionen geprueft: ${checked}`)
console.log('\n=== BEFUNDE Antwort-Reihenfolge ===')
if (!out.length) console.log('keine — Optionsreihenfolge in allen Sprachen identisch zum Englischen')
for (const o of [...new Set(out)]) console.log(o)
console.log(`\nSUMME: ${out.length}`)
