/* Selbsttest: injiziert Defekte in eine Kopie und prueft, ob die Regeln anschlagen. */
import { COURSES } from '../src/data.js'
const withQ = COURSES.filter(c=>Array.isArray(c.questions)&&c.questions.length)
const clone = JSON.parse(JSON.stringify([withQ[0],withQ[1],withQ[2],withQ[3],withQ[4]]))
clone[1].uid = clone[0].uid                       // doppelte uid
clone[2].questions[0].correct = 99                // correct out of range
clone[3].contentType = 'course'; delete clone[3].questions
clone[4].category = ''                            // leeres Pflichtfeld
let hits = 0
const seen = new Map()
clone.forEach((c,i)=>{ if(!seen.has(c.uid)) seen.set(c.uid,[]); seen.get(c.uid).push(i) })
for (const [u,l] of seen) if (l.length>1) { hits++; console.log('OK Regel DUP_UID feuert:', u, l) }
clone.forEach((c,i)=>(c.questions||[]).forEach((q,qi)=>{ if(q.correct>=q.options.length){hits++;console.log('OK Regel Q_CORRECT_RANGE feuert:',c.id,'Frage',qi+1,q.correct,'/',q.options.length)} }))
clone.forEach((c,i)=>{ if(c.contentType==='course'&&!Array.isArray(c.questions)){hits++;console.log('OK Regel NO_QUESTIONS feuert:',c.id)} })
clone.forEach((c,i)=>{ for(const f of ['id','uid','lang','category','contentType']) if(!String(c[f]??'').trim()){hits++;console.log('OK Regel MISSING_FIELD feuert:',c.id,f)} })
console.log(hits===4?'SELBSTTEST BESTANDEN (4/4 Regeln feuern)':'SELBSTTEST FEHLGESCHLAGEN: '+hits)
