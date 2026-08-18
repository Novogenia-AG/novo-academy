/* EINMAL-HELFER, NICHT TEIL DES BUILDS.
 *
 * Dieses Skript lief einmalig, um deutsche YouTube-Transkripte fuer vier
 * Kursvideos zu ziehen. Es ist nirgends eingebunden und laeuft so NICHT:
 * die Abhaengigkeit "youtube-transcript" steht weder in package.json noch im
 * Lockfile noch in node_modules — ein Aufruf bricht sofort mit MODULE_NOT_FOUND ab.
 *
 * Wer es erneut braucht:  npm i -D youtube-transcript  (danach package.json und
 * package-lock.json mitcommitten, sonst faellt "npm ci" im CI auseinander).
 * Wer es nicht mehr braucht: die Datei loeschen — sie haelt sonst den Eindruck
 * aufrecht, hier gaebe es ein lauffaehiges Werkzeug.
 */
// Fetch German YouTube transcripts for the 4 new course videos
const { YoutubeTranscript } = require('youtube-transcript')
const fs = require('fs')
const path = require('path')

const VIDEOS = [
  { id: 'gwmVcvbaNgE', name: 'bioage',       title: 'Biologisches Alter' },
  { id: 'eOqrJicdJZM', name: 'burnout',      title: 'Burnout Sensor' },
  { id: 'GyIfKaYmLoE', name: 'performance',  title: 'Sportliche Leistung' },
  { id: '79MPy6BFqu8', name: 'nutrition',    title: 'Nutrition: gesund oder ungesund?' },
]

const OUTDIR = path.join(__dirname, 'TRANSCRIPTS_NEW')
if (!fs.existsSync(OUTDIR)) fs.mkdirSync(OUTDIR)

async function run() {
  for (const v of VIDEOS) {
    try {
      const segs = await YoutubeTranscript.fetchTranscript(v.id, { lang: 'de' })
      const text = segs.map(s => s.text).join(' ')
      const out = path.join(OUTDIR, `${v.name}-${v.id}.txt`)
      fs.writeFileSync(out, `# ${v.title}\n# YouTube-ID: ${v.id}\n# Segments: ${segs.length}\n\n${text}\n`)
      console.log(`OK ${v.name}: ${segs.length} segments, ${text.length} chars`)
    } catch (e) {
      console.log(`FAIL ${v.name}: ${e.message}`)
    }
  }
}
run()
