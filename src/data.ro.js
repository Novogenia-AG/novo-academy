/* AUTO-GENERATED — RO academy (ro).
   Transforms COURSES_EN: translated RO text + RO lip-sync videos + lang:'ro'.
   Documents stay ENGLISH (per spec). Missing videos -> placeholder ("VIDEO COMING SOON").
   Regenerate via gen_langfile.mjs. Do not edit by hand. */
import { COURSES_EN, CATEGORIES_EN, MAIN_CATEGORIES_EN, SECTION_PRODUCT_LABELS_EN,
  TOPIC_WB_EN, TOPIC_REPORT_EN, TOPIC_FAQ_EN } from './data.en.js'

// VIDEOS: EN youtubeId -> RO lip-sync youtubeId. Empty until dubs are uploaded.
const VIDEOS = {}
const CAT = {
 "The Gene-Diet": "Dieta genetică",
 "Eat Healthy by Your Genes": "Mănâncă sănătos în funcție de genele tale",
 "Athletic Performance": "Performanță atletică",
 "Detoxification": "Detoxifiere",
 "Burnout and Stress": "Burnout și stres",
 "Biological Age": "Vârsta biologică",
 "Personalized Supplementation": "Suplimentare personalizată",
 "Healthy Skin and Appearance": "Piele sănătoasă și aspect sănătos",
 "Drug Intolerance": "Intoleranță la medicamente",
 "Legally Safe Advertising with Products": "Publicitate sigură din punct de vedere legal cu produsele"
}
const TOPIC = {
 "Scientific Basis": "Bază științifică",
 "Consultation Training": "Instruire pentru consiliere",
 "Frequently Asked Questions": "Întrebări frecvente",
 "Advertising Guideline for Novogenia Products": "Ghid de publicitate pentru produsele Novogenia"
}
const MAIN_TITLES = {
 "Lifestyle DNA Analyses": "Analize ADN pentru stilul de viață",
 "Personalized Supplementation": "Suplimentare personalizată",
 "Beauty": "Frumusețe",
 "Additional Analyses": "Analize suplimentare",
 "Training for Partners and Resellers": "Instruire pentru parteneri și distribuitori"
}
const TXT = {
 "bo-faq-en": {
  "topic": "Întrebări frecvente",
  "description": "Răspunsuri la întrebările tipice ale clienților despre stresul genetic și predispoziția la burnout.",
  "longDescription": "O colecție a celor mai frecvente întrebări despre analiza genetică a burnout-ului și stresului — ce înseamnă COMT și BDNF, cum diferă tipurile Warrior și Worrier și ce recomandări concrete decurg din acestea.",
  "bullets": [
   "Ce este gena COMT?",
   "Ce înseamnă Warrior vs. Worrier?",
   "Cum este riscul de burnout genetic?",
   "Ce recomandări decurg din profil?"
  ]
 },
 "ba-sci-en": {
  "topic": "Baza științifică",
  "description": "Cum este vârsta biologică determinată genetic și influențată de stilul de viață.",
  "longDescription": "Acest training explică baza științifică din spatele determinării vârstei biologice. Vei afla ce gene influențează lungimea telomerilor și îmbătrânirea celulară, cum diferă vârsta biologică de vârsta cronologică și ce factori ai stilului de viață pot modifica măsurabil vârsta biologică.",
  "postVideoText": "Cu această bază științifică poți discuta analiza vârstei biologice cu clienții tăi pe un fundament solid.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "Telomeri și îmbătrânirea celulară — noțiuni de bază",
   "Vârstă cronologică vs. biologică",
   "Factori genetici ai îmbătrânirii (TERT, BICD1 & Co.)",
   "Strategii anti-îmbătrânire cu efect măsurabil"
  ],
  "introQuestions": [
   "Care este diferența dintre vârsta cronologică și cea biologică?",
   "Cum se măsoară telomerii și ce ne spun ei?",
   "Ce gene influențează îmbătrânirea celulară?",
   "Ce măsuri ale stilului de viață modifică demonstrabil vârsta biologică?"
  ],
  "questions": [
   {
    "q": "Care este diferența dintre vârsta cronologică și cea biologică?",
    "options": [
     "Nicio diferență — sunt identice",
     "Vârsta cronologică este timpul scurs de la naștere; vârsta biologică descrie starea celulară reală — influențată de stilul de viață și genetică",
     "Vârsta biologică este întotdeauna mai mare decât cea cronologică",
     "Vârsta cronologică se măsoară în laborator, vârsta biologică se estimează"
    ],
    "correct": 1
   },
   {
    "q": "Ce structuri celulare se scurtează la fiecare diviziune celulară și sunt un indicator-cheie al vârstei biologice?",
    "options": [
     "Mitocondriile",
     "Ribozomii",
     "Telomerii",
     "Membranele celulare"
    ],
    "correct": 2
   },
   {
    "q": "Care este rolul enzimei telomerază?",
    "options": [
     "Descompune celulele care au îmbătrânit",
     "Poate repara și extinde telomerii — încetinind scurtarea telomerilor",
     "Produce radicali liberi",
     "Transportă oxigenul în sânge"
    ],
    "correct": 1
   },
   {
    "q": "Un client are o telomerază slabă genetic („zona roșie”). Cea mai bună recomandare de consultanță?",
    "options": [
     "Ignoră predispoziția — telomerii nu pot fi influențați",
     "Compensează slăbiciunea genetică prin stilul de viață: alimentație bogată în antioxidanți, nutrienți țintiți (D3, Omega-3, Resveratrol), exercițiu fizic moderat și regulat, somn bun și reducerea stresului",
     "Oprește complet exercițiul fizic — generează stres oxidativ",
     "Consultă imediat un medic — varianta este patologică"
    ],
    "correct": 1
   },
   {
    "q": "Ce a arătat cercetarea despre dieta mediteraneană și lungimea telomerilor?",
    "options": [
     "Extinde telomerii măsurabil la toată lumea",
     "Funcționează doar la purtătorii unui anumit genotip — ceilalți nu au niciun efect asupra telomerilor. Un exemplu clar că același sfat privind stilul de viață nu funcționează la fel pentru toată lumea",
     "Scurtează telomerii — ar trebui evitată",
     "Nu are niciun efect măsurabil la nimeni"
    ],
    "correct": 1
   },
   {
    "q": "Cum ar trebui prezentată o predispoziție nefavorabilă anti-îmbătrânire în consultanță?",
    "options": [
     "Ca destin de neschimbat — clientul va îmbătrâni prematur",
     "Ca irelevantă — genele nu contează pentru îmbătrânire",
     "Ca risc crescut, nu ca destin: clienții care își cunosc punctele slabe genetice pot aplica mai conștient antioxidanți, somn, exercițiu fizic și reducerea stresului — efectele se cumulează de-a lungul anilor",
     "Ca o boală care necesită tratament imediat"
    ],
    "correct": 2
   }
  ]
 },
 "ba-report-en": {
  "topic": "Training de consultanță",
  "description": "Parcurge raportul vârstei biologice împreună cu clientul tău.",
  "longDescription": "În acest training de consultanță, Dr. Daniel Wallerstorfer explică cum să parcurgi raportul genetic al vârstei biologice și al procesului de îmbătrânire împreună cu clienții tăi.",
  "postVideoText": "Cu acest training poți discuta raportul vârstei biologice pe un fundament solid cu clienții tăi. Broșura demonstrativă de mai jos poate servi drept raport-exemplu pentru propria ta practică de consultanță.",
  "introQuestionsHeader": "În acest training vei învăța:",
  "bullets": [
   "Parcurge raportul vârstei biologice structurat",
   "Prezintă procesul de îmbătrânire în termeni genetici",
   "Derivă recomandări concrete anti-îmbătrânire",
   "Cum influențează stilul de viață vârsta biologică"
  ],
  "introQuestions": [
   "Cum este structurat raportul vârstei biologice",
   "Cum să explici clar procesul de îmbătrânire",
   "Ce recomandări concrete privind stilul de viață pot fi derivate"
  ],
  "questions": [
   {
    "q": "Cum îi explici clientului vârsta biologică vs. cea cronologică într-un limbaj simplu?",
    "options": [
     "Sunt identice",
     "„Vârsta cronologică reprezintă anii de la naștere. Vârsta biologică descrie cât de bătrâne sunt de fapt celulele tale — două persoane de aceeași vârstă pot diferi cu 10-20 de ani biologic, în funcție de gene și stilul de viață”",
     "Vârsta biologică este doar un termen de marketing",
     "Este același lucru cu IQ-ul"
    ],
    "correct": 1
   },
   {
    "q": "Un client are telomerază slabă („zona roșie”). Care este sfatul practic?",
    "options": [
     "Nu se poate face nimic în această privință",
     "Întărește protecția din exterior: alimentație bogată în antioxidanți (Vitamina C/E, polifenoli, seleniu), nutrienți țintiți (Omega-3, D3, Resveratrol), exercițiu fizic moderat și regulat (nu extrem), 7-9 ore de somn, reducerea stresului. Efectele se acumulează de-a lungul anilor",
     "Urmează chimioterapie în doză mare",
     "Consumă doar carne"
    ],
    "correct": 1
   },
   {
    "q": "Un client întreabă: „Mă ajută dieta mediteraneană să întineresc biologic?”",
    "options": [
     "Da, întotdeauna",
     "Depinde de genetică: studiile arată că dieta mediteraneană extinde măsurabil telomerii doar la purtătorii unei anumite variante. Pentru ceilalți, efectul este mai slab. Raportul arată dacă acest client face parte din grupul care răspunde",
     "Nu, niciodată",
     "Doar pentru femei"
    ],
    "correct": 1
   },
   {
    "q": "Un client tânăr (25 ani) întreabă: „Îmi este util raportul bio-age?”",
    "options": [
     "Nu, util doar la 60+",
     "Da — cu cât mai tânăr, cu atât mai bun momentul pentru a începe. Slăbiciunile genetice se cumulează de-a lungul deceniilor; ajustările stilului de viață la 25 de ani au un efect cumulativ mult mai mare până la 60 de ani decât dacă începi târziu",
     "Util doar pentru sportivi",
     "Nu, vârsta biologică este fixă"
    ],
    "correct": 1
   },
   {
    "q": "Cum ar trebui să prezinți rezultatul bio-age pentru un client stresat cu mai multe „zone roșii”?",
    "options": [
     "Ca un declin inevitabil",
     "Ca oportunități țintite: fiecare zonă roșie este o pârghie clară — Vit D3, Omega-3, aport de antioxidanți, somn, reducerea stresului. Planul este orientat spre acțiune și motivant, nu fatalist",
     "Ca o urgență medicală",
     "Ca o boală netratabilă"
    ],
    "correct": 1
   }
  ]
 },
 "ba-faq-en": {
  "topic": "Întrebări frecvente",
  "description": "Răspunsuri la întrebările tipice ale clienților despre analiza vârstei biologice.",
  "longDescription": "O colecție a celor mai importante întrebări despre analiza telomerilor și anti-îmbătrânire. Cu răspunsuri pliabile pentru studiu individual.",
  "bullets": [
   "Ce sunt telomerii și de ce îmbătrânim?",
   "Cum îmi afectează genetica vârsta biologică?",
   "Ce nutrienți și măsuri ale stilului de viață ajută?",
   "Dieta mediteraneană — funcționează pentru toată lumea?"
  ]
 },
 "pharma-sci-en": {
  "topic": "Bază științifică",
  "description": "Cum influențează variantele genetice metabolizarea și tolerarea medicamentelor — explicat științific.",
  "longDescription": "În acest training, Dr. Daniel Wallerstorfer explică de ce medicamentele acționează diferit la persoane diferite. Vei învăța cum descompun enzimele CYP substanțele active, ce înseamnă „metabolizator rapid\" vs. „metabolizator lent\" și cum ghidează aceste cunoștințe decizii de prescriere mai sigure.",
  "postVideoText": "Cu acest fundal poți discuta relevanța testării farmacogenetice cu clienți și medici — explicând de ce o doză care funcționează pentru majoritatea poate fi prea puternică sau prea slabă pentru o anumită persoană, în funcție de genotipul său CYP.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "Enzimele CYP și metabolizarea medicamentelor",
   "Metabolizatori rapizi și lenți",
   "Substanțe active relevante clinic (antidepresive, analgezice, anticoagulante, …)",
   "Relevanță practică în consiliere"
  ],
  "introQuestions": [
   "De ce acționează medicamentele diferit la persoane diferite?",
   "Ce enzime CYP sunt responsabile de descompunerea celor mai importante substanțe active?",
   "Ce înseamnă „metabolizator rapid\" vs. „metabolizator lent\" în viața clinică de zi cu zi?",
   "Ce medicamente sunt deosebit de relevante pentru consilierea farmacogenetică?"
  ],
  "questions": [
   {
    "q": "De ce acționează același medicament diferit la persoane diferite?",
    "options": [
     "Este o coincidență de dispoziție",
     "Variantele genetice ale enzimelor CYP modifică viteza cu care este descompus medicamentul — metabolizatorii rapizi îl elimină prea repede (efect mai slab), metabolizatorii lenți îl acumulează (efect mai puternic / toxic)",
     "Greutatea corporală este singurul factor",
     "Nu există nicio diferență reală"
    ],
    "correct": 1
   },
   {
    "q": "Ce înseamnă clinic „metabolizator slab\"?",
    "options": [
     "Persoana nu poate digera corect alimentele",
     "Varianta enzimei CYP descompune medicamentul foarte lent, astfel încât substanța activă se acumulează — dozele standard pot duce la efecte secundare sau toxicitate",
     "Are nevoie de o doză mai mare pentru a simți vreun efect",
     "Afectează doar medicamentele pentru sănătatea mintală"
    ],
    "correct": 1
   },
   {
    "q": "Care enzimă CYP este una dintre cele mai relevante clinic pentru metabolizarea medicamentelor?",
    "options": [
     "CYP2D6 — implicată în metabolizarea antidepresivelor, beta-blocantelor, opioidelor și a multor altor medicamente prescrise pe scară largă",
     "CYP1B5",
     "CYP9Z1",
     "CYPX"
    ],
    "correct": 0
   },
   {
    "q": "Cum ar trebui folosit în practică un rezultat farmacogenetic?",
    "options": [
     "Ca motiv pentru a opri toate medicamentele",
     "Ca îndrumare pentru medicul prescriptor — pentru a alege medicamente alternative sau a ajusta dozarea în funcție de tipul de metabolizator al pacientului, reducând efectele secundare și îmbunătățind eficacitatea",
     "Este util doar pentru cercetare",
     "Înlocuiește diagnosticul medical"
    ],
    "correct": 1
   },
   {
    "q": "De ce este importantă farmacogenetica în consiliere?",
    "options": [
     "Este în principal un subiect de vânzare",
     "Aproximativ 7% dintre toate medicamentele au ghiduri farmacogenetice cu aplicabilitate clinică — cunoașterea genotipului înainte de prescriere poate preveni efecte secundare severe și eșecul tratamentului",
     "Contează doar pentru medicamentele oncologice",
     "Este prea rar pentru a fi luat în considerare"
    ],
    "correct": 1
   }
  ]
 },
 "legal-basics-en": {
  "topic": "Ghid de publicitate pentru produsele Novogenia",
  "description": "Ce afirmații publicitare pentru analize genetice, teste de sânge și suplimente sunt sigure din punct de vedere legal — și care sunt expuse la scrisori de avertizare.",
  "longDescription": "Un training bazat pe text (fără video) despre publicitatea conformă legal a produselor Novogenia. Sursă: Ghidul de publicitate Novogenia. Vei învăța cum funcționează scrisorile de avertizare, ce afirmații sunt sigure, care sunt critice — și ce bune practici a dezvoltat Novogenia în 13 ani de experiență.",
  "introQuestionsHeader": "În acest training vei învăța:",
  "bullets": [
   "Cum funcționează o scrisoare de avertizare și cât costă",
   "Afirmații publicitare sigure vs. riscante pentru teste de sânge, teste genetice și suplimente",
   "Health Claims-urile UE pentru suplimente",
   "Gestionarea recenziilor și mărturiilor clienților"
  ],
  "introQuestions": [
   "Cum funcționează asociațiile de scrisori de avertizare și ce costuri să te aștepți",
   "Ce afirmații publicitare pentru testele de sânge sunt sigure din punct de vedere legal",
   "De ce proprietățile genetice pot fi promovate în siguranță, dar recomandările de acțiune sunt critice",
   "Cum să aplici corect Health Claims-urile pentru suplimente",
   "Cum să moderezi recenziile clienților în mod sigur din punct de vedere legal"
  ],
  "questions": [
   {
    "q": "Care este o taxă inițială tipică percepută de o asociație de scrisori de avertizare?",
    "options": [
     "Aproximativ 50 €",
     "Aproximativ 200 €",
     "Aproximativ 1.000 €",
     "Aproximativ 5.000 €"
    ],
    "correct": 1
   },
   {
    "q": "Care este penalitatea tipică pentru reutilizarea unei afirmații publicitare contestate?",
    "options": [
     "Aproximativ 200 €",
     "Aproximativ 1.000 €",
     "Aproximativ 5.000 €",
     "Aproximativ 50.000 €"
    ],
    "correct": 2
   },
   {
    "q": "Ce forme de publicitate declanșează de obicei scrisori de avertizare?",
    "options": [
     "Materiale de vânzare directă și consiliere verbală",
     "Publicitate distribuită pe scară largă, precum TV, reviste și social media",
     "Doar publicitatea tipărită",
     "Site-uri web fără publicitate plătită"
    ],
    "correct": 1
   },
   {
    "q": "Ce parte a unei analize ADN este de obicei NECRITICĂ din perspectiva unei asociații de scrisori de avertizare?",
    "options": [
     "Planurile concrete de nutriție și sport",
     "Recomandările personalizate de micronutrienți",
     "Analiza științifică a proprietăților genetice",
     "Toate afirmațiile despre testele ADN sunt critice"
    ],
    "correct": 2
   },
   {
    "q": "Ce parte a unei analize ADN este de obicei CRITICĂ?",
    "options": [
     "Determinarea variantelor genetice",
     "Planurile de acțiune concrete derivate din acestea (nutriție, sport, suplimente)",
     "Recoltarea probei în laborator",
     "Explicarea științei în raport"
    ],
    "correct": 1
   },
   {
    "q": "Ce afirmație despre acidul folic este SIGURĂ conform ghidului de publicitate?",
    "options": [
     "„Ia metilfolat în loc de acid folic — funcționează mai bine pentru tine.\"",
     "„Afli dacă organismul tău poate activa eficient acidul folic.\"",
     "„Testul nostru înlocuiește o vizită la medic pentru întrebări legate de acidul folic.\"",
     "„Acidul folic este în general ineficient.\""
    ],
    "correct": 1
   },
   {
    "q": "Ce sunt Health Claims-urile UE?",
    "options": [
     "O listă de afirmații publicitare interzise",
     "Un cadru de afirmații de efect definite precis, permise pentru suplimente",
     "Studii privind eficacitatea clinică",
     "O autodeclarație a producătorului"
    ],
    "correct": 1
   },
   {
    "q": "Cine poartă responsabilitatea legală pentru afirmațiile publicitare ale unui revânzător?",
    "options": [
     "Novogenia este pe deplin răspunzătoare",
     "Partenerul / revânzătorul însuși — Novogenia nu își asumă nicio răspundere",
     "Asociațiile de scrisori de avertizare",
     "Nimeni nu poartă responsabilitatea"
    ],
    "correct": 1
   },
   {
    "q": "Cum ar trebui gestionată o recenzie a unui client care conține un Health Claim nepermis (de exemplu „produsul m-a vindecat\")?",
    "options": [
     "Lasă-o neschimbată — opiniile clienților sunt întotdeauna sigure din punct de vedere legal",
     "Etichetează-o clar ca opinie a clientului; pe sistemele moderabile șterge afirmația nepermisă sau atașează un răspuns corectiv",
     "Dezactivează imediat toate recenziile",
     "Raportează clientul"
    ],
    "correct": 1
   },
   {
    "q": "Ce strategie de promovare a suplimentelor personalizate este NECRITICĂ?",
    "options": [
     "Promovarea cu promisiuni concrete de vindecare care nu se află pe lista Health Claims",
     "Personalizarea pe baza stilului de viață și a valorilor sanguine — ambele fără probleme",
     "Afirmații precum „îți vindecă boala\"",
     "Promovarea fără o listă de ingrediente"
    ],
    "correct": 1
   }
  ]
 },
 "nut-report-en": {
  "topic": "Training de consiliere",
  "description": "Parcurgeți raportul genetic de nutriție capitol cu capitol împreună cu clientul dumneavoastră.",
  "longDescription": "În acest training de consiliere, Dr. Daniel Wallerstorfer explică, capitol cu capitol, cum să discutați raportul genetic de nutriție cu clienții dumneavoastră. De la structura raportului, trecând prin nutrienți individuali (Vitamina D3, acid folic, fier, seleniu, Q10 etc.) până la temele legate de metabolism, colesterol și trigliceride — toate capitolele raportului sunt parcurse pas cu pas.",
  "postVideoText": "Cu acest training sunteți pregătit să parcurgeți raportul genetic de nutriție împreună cu clienții dumneavoastră cu încredere. Broșurile demo de mai jos pot servi drept exemple de rapoarte pentru propria practică de consiliere.",
  "introQuestionsHeader": "În acest training veți învăța:",
  "bullets": [
   "Parcurgerea raportului de nutriție capitol cu capitol împreună cu clientul",
   "Explicarea diferitelor variante genetice (Vitamina D3, acid folic, fier, seleniu, cofeină, Q10 etc.)",
   "Interpretarea efectelor asupra colesterolului, trigliceridelor, tensiunii arteriale și homocisteinei",
   "Transmiterea clară a recomandărilor alimentare personalizate"
  ],
  "introQuestions": [
   "Cum este structurat raportul de nutriție",
   "Cum să explicați clar cele mai importante sensibilități la nutrienți",
   "Cum influențează genele colesterolul, trigliceridele, tensiunea arterială și homocisteina",
   "Cum să transformați recomandările alimentare în sfaturi practice"
  ],
  "questions": [
   {
    "q": "Un metabolizator lent al cofeinei (defect CYP1A2) întreabă dacă ar trebui să renunțe complet la cafea. Care este cel mai bun răspuns de consiliere?",
    "options": [
     "Da, toată cafeaua trebuie interzisă pentru totdeauna",
     "O alternativă rezonabilă este cafeaua decofeinizată — aceasta păstrează polifenolii protectori fără efectul prelungit al cofeinei. Sensibilitatea la cofeină nu trebuie să însemne abstinență totală",
     "Să bea cinci cești pe zi pentru a-și construi toleranța",
     "Este permis doar ceaiul negru"
    ],
    "correct": 1
   },
   {
    "q": "Cum îi explicați recomandarea pentru Vitamina D unui client cu o variantă VDR?",
    "options": [
     "Vitamina D acționează la fel la toată lumea",
     "O variantă VDR modifică cât de puternic răspund celulele la Vitamina D circulantă — chiar și la niveluri sanguine „normale”, efectul biologic poate fi redus. Un aport mai ridicat și țintit (sub monitorizare) are adesea sens",
     "Să evite Vitamina D — este periculoasă pentru el",
     "Doar expunerea la soare funcționează pentru el"
    ],
    "correct": 1
   },
   {
    "q": "Ce recomandare alimentară se potrivește unui client cu un defect HFE (risc de supraîncărcare cu fier)?",
    "options": [
     "Să crească aportul de fier — are nevoie de mai mult",
     "Să reducă încărcarea cu fier din alimentație: mai puțină carne roșie, fără suplimente îmbogățite cu fier decât în caz de deficit confirmat printr-o analiză de sânge. Excesul de fier se acumulează și afectează ficatul, inima și articulațiile de-a lungul deceniilor",
     "Să ia zilnic suplimente de fier ca măsură de precauție",
     "Nu este necesară nicio schimbare"
    ],
    "correct": 1
   },
   {
    "q": "Un client cu o variantă MTHFR ia tablete standard de acid folic. Ce ar trebui să îl sfătuiți?",
    "options": [
     "Să continue să ia acid folic standard — varianta nu are niciun efect",
     "Să treacă la metilfolat (forma bioactivă). În cazul unui defect MTHFR, acidul folic obișnuit este slab activat și în mare parte inutil pentru client; metilfolatul ocolește etapa de activare",
     "Să oprească complet orice folat",
     "Să mănânce doar carne"
    ],
    "correct": 1
   },
   {
    "q": "Cum i-ați explica recomandarea privind sarea unui client ACE-pozitiv (tensiune arterială sensibilă la sare)?",
    "options": [
     "Sarea nu contează — recomandarea este generică",
     "Sensibilitatea la sare este genetică. La clienții ACE-pozitivi, aportul de sare crește măsurabil tensiunea arterială. Reducerea sării este o pârghie deosebit de puternică pentru ei — mult mai mult decât pentru persoanele nesensibile",
     "Să adauge mai multă sare — stabilizează tensiunea arterială",
     "Să evite doar zahărul"
    ],
    "correct": 1
   }
  ]
 },
 "nut-faq-en": {
  "topic": "Întrebări frecvente",
  "description": "Răspunsuri la întrebările tipice ale clienților despre analiza genetică de nutriție.",
  "longDescription": "O colecție a celor mai frecvente întrebări ale clienților despre analiza genetică de nutriție — cum influențează genele metabolismul nutrienților, ce înseamnă MTHFR, CYP1A2 și alte gene și cum se derivă recomandările practice.",
  "bullets": [
   "De ce afectează același aliment oamenii în mod diferit?",
   "Care este rolul variantelor genetice?",
   "Cum se derivă recomandările?",
   "Ce îmi poate spune analiza genetică — și ce nu?"
  ]
 },
 "pg-sci-en": {
  "topic": "Baza științifică",
  "description": "Care gene determină performanța atletică, regenerarea și riscul de accidentare.",
  "longDescription": "Acest training explică baza științifică din spatele geneticii performanței. Veți învăța ce gene influențează tipul de atlet (sprint vs. anduranță), riscul la nivelul țesutului conjunctiv și capacitatea de regenerare și cum se derivă un profil individual de antrenament din acești factori.",
  "postVideoText": "Cu această bază științifică, puteți consilia atleții pe un fundament solid — despre stimulul de antrenament potrivit, timpii de regenerare și suplimentele fundamentate genetic.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "Gene pentru sprint vs. anduranță (ACTN3 & co.)",
   "Țesutul conjunctiv și riscul de accidentare (COL5A1, MMP3)",
   "Răspunsul inflamator și timpul de regenerare",
   "Implementarea practică în planificarea antrenamentului"
  ],
  "introQuestions": [
   "Cât din talentul atletic este determinat genetic?",
   "Care gene îi disting pe sprinteri de alergătorii de maraton?",
   "Cum influențează genetica riscul de accidentare și regenerarea?",
   "Cum pot atleții să se antreneze mai eficient cu aceste cunoștințe?"
  ],
  "questions": [
   {
    "q": "Care genă este cel mai cunoscut marker pentru fenotipul sprint vs. anduranță?",
    "options": [
     "MTHFR",
     "ACTN3",
     "LCT",
     "COMT"
    ],
    "correct": 1
   },
   {
    "q": "Un client are genotipul ACTN3 RR. Ce indică de obicei acest lucru?",
    "options": [
     "Doar profil de alergător de maraton",
     "Expresie puternică a fibrelor cu contracție rapidă — mai potrivit pentru sporturile de sprint, forță și explozive; anduranța pură este încă posibilă, dar nu reprezintă forța naturală",
     "Absența oricărui talent atletic",
     "Risc cardiovascular mai ridicat în orice sport"
    ],
    "correct": 1
   },
   {
    "q": "Care gene sunt esențiale pentru stabilitatea țesutului conjunctiv și riscul de accidentare?",
    "options": [
     "COL5A1, MMP3 — ele modelează calitatea și reînnoirea colagenului; variantele nefavorabile cresc riscul de accidentări ale tendoanelor și ligamentelor",
     "FTO și PPARG",
     "CYP1A2 și ADH",
     "Nicio genă nu afectează țesutul conjunctiv"
    ],
    "correct": 0
   },
   {
    "q": "Cum variază genetic răspunsul la antrenament între oameni?",
    "options": [
     "Este identic pentru toată lumea",
     "Aproximativ printr-un factor de 2-3 — unii atleți se adaptează foarte puternic la același stimul, alții abia",
     "Doar starea de spirit determină răspunsul",
     "Variază printr-un factor de 50"
    ],
    "correct": 1
   },
   {
    "q": "De ce sunt antioxidanții (Vit. C, E, polifenoli) deosebit de relevanți în sport?",
    "options": [
     "Au un gust mai bun decât apa",
     "Exercițiul intens produce cantități mari de radicali liberi; apărările antioxidante slabe genetic (activitate scăzută SOD/CAT/GPX) înseamnă regenerare mai îndelungată și risc mai mare de micro-inflamație",
     "Îmbunătățesc doar somnul",
     "Nu au niciun efect asupra atleților"
    ],
    "correct": 1
   }
  ]
 },
 "pg-faq-en": {
  "topic": "Întrebări frecvente",
  "description": "Răspunsuri la întrebările tipice ale clienților despre analiza genetică a performanței.",
  "longDescription": "O colecție a celor mai importante întrebări despre genetică în sport — talent, risc de accidentare, controlul antrenamentului. Cu răspunsuri pliabile pentru autoinstruire.",
  "bullets": [
   "Talent vs. antrenament — ce este genetic?",
   "Riscul de accidentare și genele țesutului conjunctiv",
   "Regenerare și nutriție",
   "Controlul antrenamentului în funcție de genotip"
  ]
 },
 "supp-sci-en": {
  "topic": "Baze științifice",
  "description": "Cum nevoile genetice individuale de micronutrienți fac posibilă suplimentarea personalizată — explicat științific.",
  "longDescription": "În acest training, Dr. Daniel Wallerstorfer explică de ce fiecare persoană are nevoi diferite de micronutrienți și cum funcționează suplimentarea personalizată genetic. Vei învăța tehnologia Microtransporter — cum pot fi absorbiți simultan nutrienți concurenți (de ex. calciu și zinc) și de ce eliberarea lentă (slow-release) pentru vitamina C imită un tipar semnificativ fiziologic.",
  "postVideoText": "Cu acest fundal poți discuta cu clienții tăi, pe o bază solidă, logica din spatele suplimentării personalizate și poți explica clar tehnologia Microtransporter — inclusiv aplicațiile practice în peleți și în administrarea intravenoasă.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "Nevoi genetice individuale de nutrienți",
   "Tehnologia Microtransporter",
   "Slow-release și absorbție separată (Calciu/Zinc)",
   "Biodisponibilitatea vitaminelor și mineralelor"
  ],
  "introQuestions": [
   "De ce fiecare persoană are nevoi diferite de micronutrienți?",
   "Cum rezolvă tehnologia Microtransporter problema nutrienților concurenți?",
   "De ce este eliberată vitamina C în mod slow-release?",
   "Cum pot fi absorbite simultan Calciul și Zincul în ciuda blocajului reciproc?"
  ],
  "questions": [
   {
    "q": "De ce fiecare persoană are o nevoie diferită de micronutrienți?",
    "options": [
     "Numărul de celule variază",
     "Variantele genetice modifică modul în care organismul absoarbe, metabolizează și utilizează fiecare nutrient — același aport duce la niveluri sanguine diferite",
     "Depinde doar de consumul de apă",
     "Dimensiunea stomacului variază"
    ],
    "correct": 1
   },
   {
    "q": "Care este problema centrală pe care o rezolvă tehnologia Microtransporter?",
    "options": [
     "Comprimatele sunt prea mari pentru a fi înghițite",
     "În pastilele standard mulți nutrienți se blochează reciproc la absorbție sau dispar prea repede din fluxul sanguin pentru a fi utili",
     "Vitaminele sunt scumpe de produs",
     "Suplimentele au un gust neplăcut"
    ],
    "correct": 1
   },
   {
    "q": "De ce este eliberată vitamina C în mod slow-release?",
    "options": [
     "Vitamina C este toxică în doze mari",
     "Funcționează doar în doze foarte mari",
     "Vitamina C are un timp de înjumătățire de aproximativ 30 de minute — eliberarea ei treptată pe parcursul zilei imită aportul natural din alimente și menține nivelurile sanguine stabile",
     "Slow-release este doar un termen de marketing"
    ],
    "correct": 2
   },
   {
    "q": "Cum permite tehnologia Microtransporter absorbția simultană a Calciului și Zincului, deși acestea se blochează reciproc?",
    "options": [
     "Se folosește doar unul dintre cele două",
     "Calciul și Zincul sunt combinate chimic într-un compus nou",
     "Sunt pur și simplu ambalate împreună în aceeași pastilă",
     "Zincul este eliberat imediat în intestinul superior, iar Calciul câteva ore mai târziu în intestinul inferior — administrate împreună, dar eliberate separat spațial și temporal, astfel încât nu concurează niciodată pentru aceiași transportori"
    ],
    "correct": 3
   },
   {
    "q": "Câte gene sunt analizate pentru raportul de suplimentare personalizată?",
    "options": [
     "Aproximativ 10",
     "Aproximativ 25",
     "Peste 60",
     "Exact 200"
    ],
    "correct": 2
   },
   {
    "q": "Care este avantajul cheie al suplimentării personalizate față de cea standard?",
    "options": [
     "Conține mai multe vitamine per pastilă",
     "Doza, selecția și forma de eliberare corespund nevoii genetice individuale — fără \"one size fits all\"; nutrientul ajunge efectiv în fluxul sanguin în loc să fie excretat",
     "Este întotdeauna mai ieftină",
     "Funcționează din ziua 1"
    ],
    "correct": 1
   }
  ]
 },
 "supp-faq-en": {
  "topic": "Întrebări frecvente",
  "description": "Răspunsuri la întrebările tipice ale clienților despre suplimentarea personalizată și tehnologia Microtransporter.",
  "longDescription": "O colecție a celor mai importante întrebări ale clienților despre suplimentarea personalizată — de ce nu orice pastilă funcționează, ce face cu adevărat diferit tehnologia Microtransporter și cum modelează informația genetică dozajul.",
  "bullets": [
   "Care este diferența dintre suplimentarea standard și cea personalizată?",
   "Cum funcționează tehnologia Microtransporter?",
   "Cum se adaptează dozajul la nevoile genetice?",
   "Cât costă suplimentarea personalizată în comparație?"
  ]
 },
 "beauty-sci-en": {
  "topic": "Baze științifice",
  "description": "Cum contribuie genele la îmbătrânirea pielii, formarea ridurilor, sensibilitatea la UV și hidratarea pielii — explicat științific.",
  "longDescription": "În acest training, Dr. Daniel Wallerstorfer explică fundamentele genetice ale analizei DNAbeauty Control. Ce gene controlează degradarea colagenului? De ce pielea unora se arde mai repede? Cum se leagă hidratarea pielii de filagrină și de alte gene? Și ce se poate deduce din această informație pentru o îngrijire cu adevărat personalizată a pielii?",
  "postVideoText": "Cu acest fundal științific poți discuta raportul Beauty cu clienții tăi pe o bază solidă și poți deduce strategii individuale de îngrijire din rezultatele genetice.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "Îmbătrânirea genetică a pielii și degradarea colagenului (MMP1)",
   "Sensibilitatea la UV și pigmentarea (MC1R)",
   "Hidratarea pielii și funcția de barieră (FLG)",
   "Sistemele antioxidante de apărare ale pielii (SOD, CAT, GPX)"
  ],
  "introQuestions": [
   "Ce gene controlează degradarea colagenului și, astfel, formarea ridurilor?",
   "Cum diferă sensibilitatea genetică la UV între oameni?",
   "Ce rol joacă genele antioxidante în îmbătrânirea pielii?",
   "Cum se leagă hidratarea genetică a pielii de rutina de îngrijire?"
  ],
  "questions": [
   {
    "q": "Ce enzimă / genă este centrală pentru degradarea colagenului din piele și, astfel, pentru formarea ridurilor?",
    "options": [
     "MTHFR — activarea folatului",
     "MMP1 — Matrix Metaloproteinaza 1 (descompune colagenul)",
     "CYP1A2 — descompunerea cofeinei",
     "LCT — persistența lactazei"
    ],
    "correct": 1
   },
   {
    "q": "O clientă poartă o variantă MMP1 foarte activă. Ce înseamnă asta pentru îngrijirea pielii ei?",
    "options": [
     "Nu are nevoie de măsuri anti-îmbătrânire",
     "Risc crescut de formare precoce a ridurilor — măsurile anti-îmbătrânire (antioxidanți, protecție UV, stimulatoare de colagen, fără fumat) sunt deosebit de importante pentru ea",
     "Varianta afectează doar culoarea părului",
     "Ar trebui să mănânce mai mulți carbohidrați"
    ],
    "correct": 1
   },
   {
    "q": "Care afirmație despre sensibilitatea genetică la UV (de ex. MC1R) este corectă?",
    "options": [
     "Variantele genetice nu influențează sensibilitatea la UV — contează doar tipul de piele",
     "Purtătorii variantelor nefavorabile se ard mai ușor și au un risc mai mare de îmbătrânire a pielii și cancer de piele legate de UV — protecția UV strictă este cu atât mai importantă",
     "La o sensibilitate genetică ridicată la UV, ar trebui evitat complet soarele, chiar și la umbră",
     "Crema de protecție solară funcționează doar pentru persoanele cu gene \"normale\""
    ],
    "correct": 1
   },
   {
    "q": "De ce sunt importante genele antioxidante precum SOD2, CAT și GPX pentru îmbătrânirea pielii?",
    "options": [
     "Produc radicali liberi",
     "Protejează împotriva stresului oxidativ, care provoacă leziuni ADN în celulele pielii — când aceste mecanisme de apărare sunt slabe, pielea îmbătrânește vizibil mai repede; antioxidanții (vitamina C, E, polifenoli) devin deosebit de importanți",
     "Influențează doar sistemul imunitar, nu pielea",
     "Produc pigment"
    ],
    "correct": 1
   },
   {
    "q": "Recomandarea cea mai potrivită pentru o clientă cu hidratare a pielii redusă genetic (de ex. variante FLG / filagrină nefavorabile)?",
    "options": [
     "Dușuri fierbinți și produse de curățare puternice, cu multă spumă",
     "Utilizare crescută a îngrijirii care leagă umiditatea și întărește bariera (Acid hialuronic, Ceramide, Glicerină), produse de curățare blânde, evitarea agenților care usucă",
     "Renunțarea completă la îngrijirea pielii — pielea se autoreglează",
     "Contactul pielii cu apa doar o dată pe săptămână"
    ],
    "correct": 1
   },
   {
    "q": "Ce distinge analiza genetică a pielii de o consultație pur cosmetică?",
    "options": [
     "Este mai ieftină",
     "Identifică punctele slabe genetice permanente ale pielii, în loc să evalueze doar starea actuală — îngrijirea și protecția pot fi aplicate proactiv, pe termen lung, în loc de reactiv",
     "Înlocuiește orice examen medical al pielii",
     "Este utilă doar pentru persoanele tinere"
    ],
    "correct": 1
   }
  ]
 },
 "beauty-faq-en": {
  "topic": "Întrebări frecvente",
  "description": "Răspunsuri la întrebările tipice ale clienților despre analiza genetică a pielii (DNAbeauty Control).",
  "longDescription": "O colecție a celor mai importante întrebări ale clienților despre analiza genetică a pielii: ce îți spune cu adevărat, ce gene sunt luate în considerare, cum se deduc recomandările practice de îngrijire și ce așteptări sunt realiste.",
  "bullets": [
   "Ce îți spune cu adevărat DNAbeauty Control — și ce nu",
   "Cum diferă analiza genetică a pielii de consultația cosmetică",
   "Ce gene analizăm (MMP1, MC1R, FLG, …)",
   "Cum arată recomandările practice de îngrijire"
  ]
 },
 "wm-sci-en": {
  "topic": "Baze științifice",
  "description": "Cum determină genetica creșterea în greutate, răspunsul la efort fizic și dieta potrivită — explicat științific.",
  "longDescription": "În acest training, Dr. Daniel Wallerstorfer explică de ce oamenii se îngrașă diferit din aceleași calorii, de ce efortul fizic face minuni pentru unii și nu și pentru alții și cum variantele genetice din metabolismul grăsimilor versus al carbohidraților modelează strategia de dietă potrivită.",
  "postVideoText": "Cu acest context poți discuta cu clienții tăi știința din spatele Dietei Genetice, poți distinge genotipurile sensibile la carbohidrați de cele sensibile la grăsimi și poți explica de ce o strategie personalizată depășește sfaturile generice.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "De ce aceleași calorii afectează oamenii în mod diferit",
   "Genotipuri sensibile la carbohidrați vs. sensibile la grăsimi",
   "Persoane care răspund la efort fizic vs. cele care nu răspund",
   "Strategie de dietă personalizată pornind de la genetică"
  ],
  "introQuestions": [
   "De ce unii oameni se îngrașă de la carbohidrați, iar alții de la grăsimi?",
   "De ce efortul fizic funcționează la unii, dar nu și la alții?",
   "Cum identificăm strategia de dietă potrivită pornind de la gene?",
   "Ce este Efectul Yo-Yo și cum este el genetic?"
  ],
  "questions": [
   {
    "q": "De ce două persoane cu același surplus caloric se îngrașă în ritmuri diferite?",
    "options": [
     "Este pur și simplu o chestiune de voință",
     "Variantele genetice (de ex. FABP2, PPARG, FTO) schimbă cât de eficient sunt stocate grăsimile și carbohidrații — aceleași calorii se traduc în cantități diferite de grăsime corporală",
     "Hidratarea este singurul factor",
     "Nu există o diferență reală"
    ],
    "correct": 1
   },
   {
    "q": "Cât de mult variază genetic răspunsul la efort fizic între indivizi?",
    "options": [
     "Deloc — efortul fizic funcționează la fel pentru toată lumea",
     "Cu aproximativ un factor de 2-3 — unii oameni răspund puternic la efort fizic, alții nu răspund",
     "De până la 50 de ori",
     "Doar cu 5%"
    ],
    "correct": 1
   },
   {
    "q": "Un client este genetic un tip puternic sensibil la carbohidrați. Ce strategie i se potrivește?",
    "options": [
     "Dietă standard săracă în grăsimi pentru toată lumea",
     "Să mănânce cât mai mulți carbohidrați posibil",
     "Proporție mai mică de carbohidrați, mai multe proteine, grăsimi bune moderate — și adaptarea aportului de carbohidrați la ziua de efort fizic",
     "Să elimine atât grăsimile, cât și carbohidrații"
    ],
    "correct": 2
   },
   {
    "q": "Ce este efectul Yo-Yo și de ce este el parțial genetic?",
    "options": [
     "O jucărie care afectează metabolismul",
     "Tiparul de recâștigare a greutății după o dietă — unii oameni au variante genetice (de ex. în căile adiponectinei / leptinei) care cresc revenirea apetitului și încetinesc metabolismul bazal după pierderea în greutate",
     "O problemă pur comportamentală, fără biologie",
     "Ceva ce experimentează doar femeile"
    ],
    "correct": 1
   },
   {
    "q": "De ce un program personalizat depășește sfaturile standard?",
    "options": [
     "Folosește ingrediente mai scumpe",
     "Un studiu pilot Novogenia (139 de participanți) a arătat un succes de slăbire de 2,4× mai mare cu personalizarea genetică față de consilierea standard — pentru că strategia se potrivește efectiv cu biologia subiacentă",
     "Funcționează doar pe hârtie",
     "Este identic cu sfaturile standard"
    ],
    "correct": 1
   }
  ]
 },
 "wm-report-en": {
  "topic": "Training de consultanță",
  "description": "Parcurge raportul genetic de management al greutății capitol cu capitol împreună cu clientul tău.",
  "longDescription": "Acest training de consultanță arată cum să parcurgi raportul genetic de management al greutății împreună cu clientul tău. De la tipul nutrițional și răspunsul la efort fizic, trecând prin foame/sațietate, distribuția grăsimii și efectul Yo-Yo, fiecare capitol este explicat cu exemple practice de client.",
  "postVideoText": "Cu acest training ești pregătit să parcurgi raportul genetic împreună cu clienții tăi. Broșurile demo de mai jos pot servi ca rapoarte exemplu pentru propria ta practică de consultanță.",
  "introQuestionsHeader": "În acest training vei învăța:",
  "bullets": [
   "Să parcurgi raportul genetic capitol cu capitol",
   "Să explici diferite tipuri de rezultate (sensibilitate la grăsimi/carbohidrați, răspuns la efort fizic, strategie de dietă)",
   "Să aplici meniuri zilnice, rețete și liste de alimente",
   "Să răspunzi cu încredere la întrebările tipice ale clienților"
  ],
  "introQuestions": [
   "Cum este structurat raportul și cum să îl parcurgi împreună cu clienții",
   "Cum să explici sensibilitatea la grăsimi și la carbohidrați în limbaj simplu",
   "Cum să interpretezi răspunsul la efort fizic și strategia de dietă",
   "Cum se folosesc meniurile zilnice, lista de alimente și rețetele personalizate"
  ],
  "questions": [
   {
    "q": "Ce arată pictogramele cu greutate din lista de alimente?",
    "options": [
     "Dacă alimentul este sănătos în general",
     "Dacă distribuția macronutrienților (grăsimi, carbohidrați, proteine) este favorabilă (verde) sau nefavorabilă (roșu) pentru obiectivul tău individual de greutate — luând în considerare și caloriile per porție tipică",
     "Doar conținutul caloric",
     "Doar proporția de proteine"
    ],
    "correct": 1
   },
   {
    "q": "Sunt alimentele evaluate cu roșu complet interzise?",
    "options": [
     "Da — nu le mânca niciodată",
     "Nu — alimentele roșii ar trebui să fie excepția. Cele puternic roșii (4-6 pictograme) doar rar; cele ușor roșii (1-3 pictograme) mai des. Scopul este echilibrul, nu perfecțiunea.",
     "Da, dar numai în zilele lucrătoare",
     "Doar pentru femei"
    ],
    "correct": 1
   },
   {
    "q": "Un client este un puternic „non-responder la efort fizic” (răspuns scăzut ACE / ACTN3). Care este sfatul corect?",
    "options": [
     "Efortul fizic este în general inutil — renunță la el",
     "Principala pârghie pentru slăbire este nutriția / gestionarea caloriilor. Efortul fizic rămâne valoros pentru sănătate și păstrarea masei musculare, dar nu este principalul instrument de slăbire pentru acest client",
     "Triplează volumul de antrenament — până la urmă trebuie să funcționeze",
     "Trece exclusiv la alergare de maraton"
    ],
    "correct": 1
   },
   {
    "q": "Un client de origine asiatică (defect ALDH2 frecvent) bea 1-2 pahare de vin pe săptămână și întreabă dacă este periculos. Cel mai bun răspuns?",
    "options": [
     "Nicio problemă, bea cât vrei",
     "Cel mai bine este să menții alcoolul foarte scăzut: la purtătorii ALDH2 acetaldehida toxică se acumulează vizibil, crescând riscul de cancer pe termen lung în cazul consumului cronic. Cantitățile mici ocazionale sunt tolerabile; aportul zilnic trebuie evitat",
     "Crește alcoolul — va antrena enzima",
     "Alcoolul nu interacționează deloc cu genetica"
    ],
    "correct": 1
   },
   {
    "q": "Cum i-ai explica clientului „efectul Yo-Yo” pe baza raportului genetic?",
    "options": [
     "Lipsă de voință — nimic mai mult",
     "O predispoziție genetică pentru o revenire mai puternică a apetitului și un metabolism bazal mai lent după pierderea în greutate; clientul beneficiază de o schimbare graduală și stabilă a dietei în locul dietelor drastice",
     "O eroare în raport",
     "Afectează doar persoanele peste 60 de ani"
    ],
    "correct": 1
   }
  ]
 },
 "wm-faq-en": {
  "topic": "Întrebări frecvente",
  "description": "Răspunsuri la întrebările tipice ale clienților despre Dieta Genetică și Calorie Blocker.",
  "longDescription": "O colecție a celor mai frecvente întrebări ale clienților despre programul Dietei Genetice, raportul genetic și produsul Calorie Blocker. Cu răspunsuri pliabile pentru studiu individual.",
  "bullets": [
   "Ce este Dieta Genetică?",
   "Cum funcționează analiza genetică?",
   "Cum se folosește lista de alimente?",
   "Ce este Calorie Blocker?"
  ]
 },
 "nut-sci-en": {
  "topic": "Baze științifice",
  "description": "Cum determină genele nutriția optimă pentru fiecare persoană — explicat științific.",
  "longDescription": "În acest training, Dr. Daniel Wallerstorfer explică de ce alimentele afectează diferit oameni diferiți. Vei învăța ce variații genetice controlează utilizarea nutrienților, reacția la sare, cafeină, acid folic & Co. și cum sunt folosite aceste cunoștințe în mod responsabil în consultanța nutrițională personalizată.",
  "postVideoText": "Cu înțelegerea acestor fundamente genetice, poți discuta recomandările alimentare din raport cu clienții tăi pe o bază solidă.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "Variații genetice în metabolismul nutrienților",
   "De ce același aliment afectează oamenii în mod diferit",
   "Studii despre nutrigenetică",
   "Implementare practică în consultanță"
  ],
  "introQuestions": [
   "De ce unele alimente sunt sănătoase pentru unii și nesănătoase pentru alții?",
   "Ce rol joacă gene precum MTHFR, CYP1A2 sau ACE în utilizarea nutrienților?",
   "Cum se leagă genetica de sensibilitatea la cafeină, sare și acid folic?",
   "Ce recomandări practice pot fi derivate pentru client?"
  ],
  "questions": [
   {
    "q": "Ce genă descompune cafeina în organism?",
    "options": [
     "MTHFR",
     "CYP1A2",
     "FTO",
     "COMT"
    ],
    "correct": 1
   },
   {
    "q": "Cum modifică o variantă CYP1A2 funcțională (rapidă) riscul de infarct la consumul regulat de cafea (conform studiilor epidemiologice mari)?",
    "options": [
     "Riscul rămâne neschimbat",
     "Riscul scade cu aproximativ o treime — polifenolii rămân protectori, iar cafeina este eliminată rapid",
     "Riscul se dublează",
     "Riscul crește cu două treimi"
    ],
    "correct": 1
   },
   {
    "q": "Și cum se modifică pentru cei care descompun cafeina lent (CYP1A2 defect)?",
    "options": [
     "Riscul scade și mai mult",
     "Riscul rămâne același ca la cei care o descompun rapid",
     "Riscul crește cu aproximativ două treimi — cafeina rămâne activă mai mult timp și prelungește vârfurile de tensiune arterială",
     "Nu există nicio diferență"
    ],
    "correct": 2
   },
   {
    "q": "Care este rolul genei MTHFR?",
    "options": [
     "Descompune cafeina",
     "Activează acidul folic în forma bioactivă metilfolat — fără o MTHFR funcțională, acidul folic standard din suplimente rămâne inutil",
     "Reglează descompunerea dopaminei",
     "Determină culoarea pielii"
    ],
    "correct": 1
   },
   {
    "q": "Ce NU arată un test de sânge în cazul unui defect MTHFR?",
    "options": [
     "Nivelul de acid folic din sânge",
     "Dacă acidul folic este efectiv activat și biologic eficient",
     "Nivelul de Vitamina D",
     "Nivelul de fier"
    ],
    "correct": 1
   },
   {
    "q": "Câte gene ia în considerare analiza nutrițională completă?",
    "options": [
     "Aproximativ 10",
     "Aproximativ 25",
     "Aproximativ 60",
     "Peste 200"
    ],
    "correct": 2
   }
  ]
 },
 "tx-sci-en": {
  "topic": "Baze științifice",
  "description": "Cum determină genele capacitatea individuală de detoxifiere — de la alimentele arse, prin substanțe chimice, până la alcool și metale grele.",
  "longDescription": "În acest training, Dr. Daniel Wallerstorfer explică bazele genetice ale detoxifierii. Care gene neutralizează substanțele cancerigene din alimentele arse și afumate? Cum protejează glutation-S-transferazele împotriva substanțelor chimice? Ce rol joacă seleniul și de ce alcoolul nu afectează pe toată lumea la fel?",
  "postVideoText": "Cu acest fundament științific poți discuta raportul de detoxifiere cu clienții tăi pe o bază solidă și poți deriva strategii individuale de protecție.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "Detoxifierea alimentelor arse (CYP1A1, NAT2)",
   "Detoxifierea chimică & Glutation-S-Transferazele (GST)",
   "Apărarea antioxidantă și aportul de seleniu",
   "Descompunerea alcoolului și a acetaldehidei (ADH, ALDH2)"
  ],
  "introQuestions": [
   "Care gene controlează detoxifierea alimentelor arse?",
   "Cum funcționează glutation-S-transferazele în detoxifierea chimică?",
   "Ce rol joacă seleniul în protecția împotriva stresului oxidativ?",
   "Cum diferă descompunerea genetică a alcoolului de la o persoană la alta?"
  ],
  "questions": [
   {
    "q": "Care familie de gene este centrală pentru detoxifierea substanțelor chimice și a metalelor grele?",
    "options": [
     "GST (Glutation-S-Transferaze)",
     "MTHFR (activarea folatului)",
     "LCT (lactaza)",
     "CYP1A2 (descompunerea cofeinei)"
    ],
    "correct": 0
   },
   {
    "q": "HAP-urile (hidrocarburi aromatice policiclice) se formează în alimentele arse și afumate. Ce este adevărat despre detoxifierea lor?",
    "options": [
     "HAP-urile nu pot fi descompuse deloc",
     "Detoxifierea HAP-urilor variază puternic în funcție de genotip — persoanele cu variante CYP1A1/NAT2 lente sau defecte prezintă un risc de cancer semnificativ mai mare din cauza consumului frecvent de alimente arse",
     "Toată lumea detoxifică HAP-urile la aceeași viteză",
     "HAP-urile sunt eliminate doar prin piele"
    ],
    "correct": 1
   },
   {
    "q": "O clientă are un defect genetic GST (deficit de Glutation-S-Transferază). Ce înseamnă asta în practică?",
    "options": [
     "Capacitate de detoxifiere peste medie",
     "Capacitate redusă de a neutraliza substanțele chimice din mediu (pesticide, solvenți, fum de țigară) — ar trebui să evite activ expunerea și să crească aportul de antioxidanți",
     "Niciun impact practic",
     "Ar trebui să bea mai multă cafea"
    ],
    "correct": 1
   },
   {
    "q": "Care este rolul seleniului în sistemul de apărare antioxidant?",
    "options": [
     "Leagă direct metalele grele din sânge",
     "Doar un oligoelement cosmetic",
     "Seleniul este o componentă esențială a Glutation Peroxidazei (GPX), una dintre cele mai importante enzime antioxidante — deficitul de seleniu reduce această apărare și crește stresul oxidativ",
     "Este responsabil de sănătatea oaselor"
    ],
    "correct": 2
   },
   {
    "q": "De ce diferă toleranța la alcool atât de mult de la o persoană la alta?",
    "options": [
     "Doar greutatea corporală",
     "Variantele ADH (alcool → acetaldehidă) și ALDH2 (acetaldehidă → acid acetic) diferă puternic între indivizi. Cu defecte ALDH2 — frecvente în populațiile asiatice — acetaldehida toxică se acumulează: înroșire, greață, risc de cancer semnificativ crescut la consum cronic",
     "Bărbații și femeile îl descompun identic",
     "Alcoolul este expirat de toată lumea"
    ],
    "correct": 1
   },
   {
    "q": "O clientă prezintă mai multe zone roșii în raportul de detoxifiere. Care este cea mai potrivită abordare de consultanță?",
    "options": [
     "Ignoră — detoxifierea funcționează autonom",
     "Oprește complet alimentația",
     "Încărcătura genetică nu poate fi corectată complet, dar poate fi compensată: evitarea expunerilor specifice (mai puține alimente arse, mediu interior curat), alimentație bogată în antioxidanți (Vit C/E, seleniu, precursori de glutation), fără expunere la fum și exercițiu fizic regulat pentru eliminarea prin transpirație",
     "Consultă imediat un medic — predispoziția este o boală"
    ],
    "correct": 2
   }
  ]
 },
 "tx-report-en": {
  "topic": "Training de consultanță",
  "description": "Parcurge raportul genetic de detoxifiere capitol cu capitol împreună cu clientul tău.",
  "longDescription": "Acest training de consultanță explică cum să parcurgi raportul genetic de detoxifiere împreună cu clienții tăi. De la detoxifierea alimentelor arse și a substanțelor chimice, prin protecția împotriva îmbătrânirii și aportul de seleniu, până la metabolismul alcoolului și al medicamentelor.",
  "postVideoText": "Cu acest training ești pregătit să parcurgi raportul de detoxifiere cu clienții tăi cu încredere.",
  "introQuestionsHeader": "În acest training vei învăța:",
  "bullets": [
   "Parcurgerea raportului de detoxifiere capitol cu capitol",
   "Explicarea clară a detoxifierii alimentelor arse și a substanțelor chimice",
   "Încadrarea protecției împotriva îmbătrânirii cauzate de stresul oxidativ",
   "Consilierea privind aportul de seleniu și metabolismul alcoolului/medicamentelor"
  ],
  "introQuestions": [
   "Cum este structurat raportul de detoxifiere",
   "Care gene controlează detoxifierea alimentelor arse și a substanțelor chimice",
   "Cum afectează stresul oxidativ procesul de îmbătrânire",
   "Ce recomandări rezultă pentru seleniu, alcool și medicamente"
  ],
  "questions": [
   {
    "q": "Un client adoră friptura arsă și grătarul. Raportul de detoxifiere arată o detoxifiere lentă a HAP-urilor. Care este sfatul tău?",
    "options": [
     "Nicio problemă — poate mânca oricâte alimente arse dorește",
     "Recomandă reducerea alimentelor arse / carbonizate / afumate (expunerea la HAP), preferarea metodelor de gătit mai blânde și combinarea cu alimente bogate în antioxidanți (vitaminele C, E, polifenoli)",
     "Trecerea exclusiv la o dietă crudă",
     "Consumul de mai multe alimente arse pentru a antrena enzima"
    ],
    "correct": 1
   },
   {
    "q": "Un client cu activitate GPX redusă (apărare antioxidantă slabă dependentă de seleniu) — ce se potrivește cel mai bine?",
    "options": [
     "Ignoră complet aportul de seleniu",
     "Suplimentare țintită cu seleniu în doze fiziologice (de ex. 50-100 µg/zi din selenometionină), alimentație bogată în antioxidanți și reducerea încărcăturii oxidative (fumat, alcool, soare)",
     "Seleniu în doză mare (500+ µg/zi)",
     "Doar vitamina C, fără seleniu"
    ],
    "correct": 1
   },
   {
    "q": "Cum explici o „zonă roșie” în secțiunea de detoxifiere chimică (defect GST)?",
    "options": [
     "Clientul este alergic la toate substanțele chimice",
     "Organismul neutralizează substanțele chimice din mediu mai puțin eficient decât media — reducerea practică a expunerii (aer mai curat, mai puține pesticide, mai puțini solvenți în casă) este deosebit de importantă; aportul de antioxidanți susține capacitatea de detoxifiere rămasă",
     "Este o eroare de laborator",
     "Înseamnă că clientul ar trebui să evite toate alimentele"
    ],
    "correct": 1
   },
   {
    "q": "Un client de origine asiatică prezintă un defect ALDH2. Care este punctul-cheie al consultației?",
    "options": [
     "Să bea mai mult alcool pentru a depăși varianta",
     "Acetaldehida — un carcinogen cunoscut — se acumulează. Chiar și un consum moderat și regulat de alcool crește substanțial riscul de cancer pe termen lung. Recomandare: alcool foarte puțin sau deloc",
     "Nicio îngrijorare reală",
     "Să evite doar zahărul"
    ],
    "correct": 1
   },
   {
    "q": "Cum încadrezi raportul general de detoxifiere pentru client?",
    "options": [
     "Ca un verdict — genele determină destinul",
     "Ca o foaie de parcurs — genele arată unde sistemul este mai slab; reducerea țintită a expunerilor specifice plus un stil de viață bogat în antioxidanți compensează măsurabil de-a lungul anilor",
     "Ca fiind irelevant — detoxifierea este autonomă",
     "Ca un diagnostic medical care necesită tratament"
    ],
    "correct": 1
   }
  ]
 },
 "bo-sci-en": {
  "topic": "Baze științifice",
  "description": "Cum modelează gena COMT procesarea individuală a stresului — și de ce riscul de burnout este genetic.",
  "longDescription": "În acest training, Dr. Daniel Wallerstorfer explică gena COMT și rolul ei în descompunerea dopaminei, fenotipul Warrior vs. Worrier, BDNF și neuroplasticitatea, precum și cum poate fi derivat riscul individual de burnout din profilul genetic.",
  "postVideoText": "Cu acest fundament științific poți discuta raportul de burnout cu clienții tăi pe o bază solidă și poți deriva strategii individuale de gestionare a stresului.",
  "introQuestionsHeader": "Acest training răspunde la:",
  "bullets": [
   "COMT — gena centrală pentru descompunerea dopaminei",
   "Warrior vs. Worrier — două genotipuri, două strategii de stres",
   "BDNF, neuroplasticitatea și reziliența",
   "Recomandări practice pornind de la profilul genetic"
  ],
  "introQuestions": [
   "Care genă este centrală pentru procesarea individuală a stresului?",
   "Care este diferența dintre Warrior și Worrier?",
   "Cum este riscul de burnout genetic?",
   "Ce recomandări concrete privind stilul de viață rezultă din profil?"
  ],
  "questions": [
   {
    "q": "Care genă este motorul central al procesării individuale a stresului în analiza de burnout?",
    "options": [
     "MTHFR",
     "COMT",
     "CYP1A2",
     "FTO"
    ],
    "correct": 1
   },
   {
    "q": "Ce distinge un genotip „Warrior” de unul „Worrier” în privința COMT?",
    "options": [
     "Warrior descompune dopamina mai rapid — performanță de vârf sub stres acut. Worrier o descompune mai lent — concentrare zilnică puternică, mai vulnerabil la stresul cronic",
     "Nicio diferență reală, contează doar educația",
     "Worrier descompune dopamina mai rapid",
     "Warrior-ii sunt imuni la orice formă de stres"
    ],
    "correct": 0
   },
   {
    "q": "Ce înseamnă o „zonă roșie” în raportul de burnout pentru consultație?",
    "options": [
     "Clientul are deja burnout",
     "Este o eroare tehnică",
     "Clientul are o predispoziție genetică nefavorabilă în acest aspect — măsurile privind stilul de viață sunt deosebit de importante, deoarece riscul este crescut",
     "Clientul ar trebui să evite complet subiectul"
    ],
    "correct": 2
   },
   {
    "q": "Care este cea mai potrivită recomandare pentru un client cu o variantă COMT lentă (Worrier)?",
    "options": [
     "Să caute activ stresul — îl face mai productiv",
     "Pauze conștiente de recuperare, meditație, igienă bună a somnului și evitarea multor surse simultane de stres — deoarece semnalul de stres persistă mai mult timp în sistem",
     "Creșterea drastică a cofeinei pentru a mări dopamina",
     "Evitarea oricărei forme de efort, chiar și a sportului"
    ],
    "correct": 1
   },
   {
    "q": "Cum ar trebui încadrată o predispoziție nefavorabilă la burnout în cadrul consultației?",
    "options": [
     "Ca destin — nu se poate face nimic",
     "Ca risc crescut, nu ca destin — clienții care își cunosc sensibilitatea la stres pot acționa din timp (somn, meditație, exercițiu, pauze). Informația genetică este un instrument, nu un verdict.",
     "Ca fiind irelevant — genele nu afectează stresul",
     "Ca o boală care necesită tratament imediat"
    ],
    "correct": 1
   },
   {
    "q": "De ce o descompunere lentă a dopaminei (Worrier) are și avantaje în viața de zi cu zi?",
    "options": [
     "Îi face imuni la orice stres",
     "Provoacă o rezistență la stres constant ridicată",
     "Dopamina rămâne activă mai mult timp — aceste persoane experimentează entuziasmul, bucuria și recompensa mai intens; sunt curioase și exploratoare. Dezavantajul apare doar sub stres cronic, când organismul se luptă să revină la calm.",
     "Nu are niciun avantaj, doar dezavantaje"
    ],
    "correct": 2
   }
  ]
 },
 "bo-report-en": {
  "topic": "Training de consultanță",
  "description": "Parcurge raportul de burnout pas cu pas împreună cu clientul tău.",
  "longDescription": "În acest training de consultanță, Dr. Daniel Wallerstorfer explică cum să parcurgi raportul genetic de burnout împreună cu clienții tăi și să derivi strategii individuale de gestionare a stresului.",
  "postVideoText": "Cu acest training poți discuta raportul de burnout pe o bază solidă cu clienții tăi. Broșura demo de mai jos poate servi drept raport exemplu pentru propria ta practică de consultanță.",
  "introQuestionsHeader": "În acest training vei învăța:",
  "bullets": [
   "Parcurgerea structurată a raportului de burnout",
   "Explicarea clară a predispoziției genetice la stres",
   "Derivarea unor recomandări individuale privind stilul de viață",
   "Recunoașterea din timp a semnalelor de avertizare"
  ],
  "introQuestions": [
   "Cum este structurat raportul de burnout",
   "Cum să explici clar predispoziția individuală la stres",
   "Cum să derivi recomandări concrete privind stilul de viață"
  ],
  "questions": [
   {
    "q": "Un client prezintă o variantă COMT lentă (Worrier). Care este elementul central al consultației?",
    "options": [
     "Nu este nevoie de niciun sfat special",
     "Semnalele de stres rămân mai mult timp în sistem — recomandă rutine deliberate de recuperare, prioritizarea somnului, meditație/respirație și evitarea mai multor factori de stres simultani. Informația genetică este un instrument pentru a planifica recuperarea activ, nu pentru a eticheta clientul",
     "Spune-i clientului că va face burnout",
     "Recomandă doze mari de cofeină"
    ],
    "correct": 1
   },
   {
    "q": "O clientă Worrier spune că îi place munca ei detaliată și se simte productivă — ar trebui să se schimbe?",
    "options": [
     "Da, trebuie să-și schimbe personalitatea",
     "Nu — varianta COMT lentă aduce și avantaje (concentrare ridicată, experiență intensă a recompensei, curiozitate). Recomandarea este axată pe recuperare, nu pe personalitate: să-și păstreze punctele forte, dar să planifice recuperarea pentru a se proteja de stresul cronic",
     "Să-și dea demisia",
     "Să ia imediat medicamente"
    ],
    "correct": 1
   },
   {
    "q": "Ce înseamnă o „zonă roșie” în raportul de burnout pentru discuția de consultanță?",
    "options": [
     "Clientul are deja burnout",
     "Clientul are o predispoziție genetică nefavorabilă în acest aspect — măsurile privind stilul de viață sunt deosebit de importante. Este o alertă, nu un diagnostic",
     "Eroare de laborator",
     "Clientul ar trebui să evite toate subiectele"
    ],
    "correct": 1
   },
   {
    "q": "Un client de tip Warrior spune că prosperă sub presiune — trebuie să-și facă griji în privința burnout-ului?",
    "options": [
     "Nu, Warrior-ii sunt imuni",
     "Risc acut mai mic decât Worrier, dar recuperarea rămâne importantă. O lipsă percepută a stresului poate masca sub-stimularea în fazele liniștite. Recomandă structură pentru concentrarea zilnică și somn adecvat",
     "Da, să treacă la un job cu stres redus",
     "Să crească stresul cât mai mult posibil"
    ],
    "correct": 1
   },
   {
    "q": "Cum încadrezi raportul general de burnout pentru client?",
    "options": [
     "Ca un verdict — va face burnout",
     "Ca un instrument: raportul dezvăluie profilul de stres al clientului, astfel încât recuperarea și stilul de viață să poată fi planificate deliberat. Nu este un verdict și nu este un diagnostic",
     "Ca fiind irelevant",
     "Ca o patologie medicală care necesită tratament imediat"
    ],
    "correct": 1
   }
  ]
 }
}
const clone = (o) => JSON.parse(JSON.stringify(o))
const vid = (id) => (id && VIDEOS[id]) ? VIDEOS[id] : null

export const COURSES_RO = COURSES_EN.map((en) => {
  const c = clone(en)
  c.lang = 'ro'
  c.id = en.id.replace(/-en$/, '') + '-ro'
  c.uid = en.uid + '-ro'
  c.category = CAT[en.category] || en.category
  if (TOPIC[en.topic]) c.topic = TOPIC[en.topic]
  const tx = TXT[en.id]
  if (tx) {
    for (const k of ['topic', 'description', 'longDescription', 'postVideoText', 'introQuestionsHeader'])
      if (tx[k] != null) c[k] = tx[k]
    if (tx.bullets) c.bullets = tx.bullets
    if (tx.introQuestions) c.introQuestions = tx.introQuestions
    if (Array.isArray(tx.questions) && tx.questions.length) c.questions = tx.questions
  }
  if (en.youtubeId) { const v = vid(en.youtubeId); if (v) c.youtubeId = v; else delete c.youtubeId }
  if (en.videoSegments && en.videoSegments.length) {
    c.videoSegments = en.videoSegments.map(s => { const v = vid(s.youtubeId); return v ? { ...clone(s), youtubeId: v } : null }).filter(Boolean)
    if (!c.videoSegments.length) delete c.videoSegments
  }
  return c
})

export const CATEGORIES_RO = Object.fromEntries(Object.entries(CATEGORIES_EN).map(([k, v]) => [k, CAT[v] || v]))
export const MAIN_CATEGORIES_RO = MAIN_CATEGORIES_EN.map(m => ({
  title: MAIN_TITLES[m.title] || m.title,
  sections: m.sections.map(s => CAT[s] || s),
}))
export const SECTION_PRODUCT_LABELS_RO = Object.fromEntries(
  Object.entries(SECTION_PRODUCT_LABELS_EN).map(([k, v]) => [CAT[k] || k, v])
)
