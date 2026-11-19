/* Rechtsseiten (Impressum, Datenschutz, Nutzungsbedingungen) in allen 11
   Sprachen. Verbindlich ist die deutsche Fassung. Jede Sprachdatei muss
   dieselbe Struktur haben wie de.js — scripts/check-i18n.mjs prüft das.
   Inhalte ändern: zuerst de.js, dann en.js, dann die übrigen neun. */
import de from './de.js'
import en from './en.js'
import cz from './cz.js'
import fr from './fr.js'
import pt from './pt.js'
import it from './it.js'
import nl from './nl.js'
import ro from './ro.js'
import es from './es.js'
import sr from './sr.js'
import ar from './ar.js'

export const LEGAL = { de, en, cz, fr, pt, it, nl, ro, es, sr, ar }

export const legalFor = (lang) => LEGAL[lang] || LEGAL.en

/* Zerlegt einen Text in Stücke und markiert E-Mail-Adressen und Web-Adressen,
   damit die Seite sie als Links rendern kann (ohne HTML in den Texten). */
const LINK_RE = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+|www\.[\w-]+(?:\.[\w-]+)+|policies\.google\.com\/privacy)/g
export function splitLinks(text) {
  const out = []
  let last = 0
  for (const m of text.matchAll(LINK_RE)) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) })
    const v = m[0]
    const href = v.includes('@') ? `mailto:${v}` : `https://${v}`
    out.push({ text: v, href, external: !v.includes('@') })
    last = m.index + v.length
  }
  if (last < text.length) out.push({ text: text.slice(last) })
  return out
}
