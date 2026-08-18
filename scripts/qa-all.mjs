/* Sammel-Runner: alle Kursdaten-Pruefungen nacheinander.
   Aufruf:  node --import ./scripts/register-loader.mjs scripts/qa-all.mjs   */
const STEPS = [
  ['1  data.js — uid/Test/Pflichtfelder', './qa-data-1-de.mjs'],
  ['2  Sprachdateien vs. data.en.js',      './qa-data-2-langs.mjs'],
  ['3  Home-Videos + VIDEOS-Maps',         './qa-data-3-videos.mjs'],
  ['4  Dokument-Links (aus Modulen)',      './qa-data-4-docs.mjs'],
  ['5  Antwort-Reihenfolge Uebersetzung',  './qa-data-5-answershift.mjs'],
  ['6  VIDEOS-Maps Abdeckung',             './qa-data-6-videomaps.mjs'],
]
for (const [name, file] of STEPS) {
  console.log('\n' + '='.repeat(70) + `\n### ${name}\n` + '='.repeat(70))
  await import(file)
}
