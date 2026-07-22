/* AUTO-GENERATED — SR academy (sr).
   Transforms COURSES_EN: translated SR text + SR lip-sync videos + lang:'sr'.
   Documents stay ENGLISH (per spec). Missing videos -> placeholder ("VIDEO COMING SOON").
   Regenerate via gen_langfile.mjs. Do not edit by hand. */
import { COURSES_EN, CATEGORIES_EN, MAIN_CATEGORIES_EN, SECTION_PRODUCT_LABELS_EN,
  TOPIC_WB_EN, TOPIC_REPORT_EN, TOPIC_FAQ_EN } from './data.en.js'

// VIDEOS: EN youtubeId -> SR lip-sync youtubeId. Empty until dubs are uploaded.
const VIDEOS = {}
const CAT = {
 "The Gene-Diet": "Gen-dijeta",
 "Eat Healthy by Your Genes": "Jedi zdravo u skladu sa svojim genima",
 "Athletic Performance": "Sportske performanse",
 "Detoxification": "Detoksikacija",
 "Burnout and Stress": "Burnout i stres",
 "Biological Age": "Biološka dob",
 "Personalized Supplementation": "Personalizirana suplementacija",
 "Healthy Skin and Appearance": "Zdrava koža i izgled",
 "Drug Intolerance": "Nepodnošljivost lijekova",
 "Legally Safe Advertising with Products": "Pravno sigurno oglašavanje proizvodima"
}
const TOPIC = {
 "Scientific Basis": "Naučna osnova",
 "Consultation Training": "Obuka za savjetovanje",
 "Frequently Asked Questions": "Često postavljana pitanja",
 "Advertising Guideline for Novogenia Products": "Smjernica za oglašavanje Novogenia proizvoda"
}
const MAIN_TITLES = {
 "Lifestyle DNA Analyses": "Lifestyle DNK analize",
 "Personalized Supplementation": "Personalizirana suplementacija",
 "Beauty": "Ljepota",
 "Additional Analyses": "Dodatne analize",
 "Training for Partners and Resellers": "Obuka za partnere i preprodavače"
}
const TXT = {
 "nut-report-en": {
  "topic": "Trening za savjetovanje",
  "description": "Prođite kroz genetski nutricioni izvještaj poglavlje po poglavlje sa svojim klijentom.",
  "longDescription": "U ovom treningu za savjetovanje dr. Daniel Wallerstorfer objašnjava poglavlje po poglavlje kako s klijentima razgovarati o genetskom nutricionom izvještaju. Od strukture izvještaja preko pojedinačnih nutrijenata (Vitamin D3, folna kiselina, željezo, selen, Q10, itd.) do tema metabolizma, holesterola i triglicerida — svako poglavlje izvještaja obrađuje se korak po korak.",
  "postVideoText": "Uz ovaj trening spremni ste da svoje klijente sa sigurnošću provedete kroz genetski nutricioni izvještaj. Demo brošure ispod mogu poslužiti kao primjeri izvještaja za vašu vlastitu praksu savjetovanja.",
  "introQuestionsHeader": "U ovom treningu ćete naučiti:",
  "bullets": [
   "Proći kroz nutricioni izvještaj poglavlje po poglavlje s klijentom",
   "Objasniti različite genske varijante (Vitamin D3, folna kiselina, željezo, selen, kofein, Q10, itd.)",
   "Protumačiti učinke na holesterol, trigliceride, krvni pritisak i homocistein",
   "Jasno prenijeti personalizovane preporuke za ishranu"
  ],
  "introQuestions": [
   "Kako je nutricioni izvještaj strukturisan",
   "Kako jasno objasniti najvažnije osjetljivosti na nutrijente",
   "Kako geni utiču na holesterol, trigliceride, krvni pritisak i homocistein",
   "Kako preporuke za ishranu pretvoriti u praktičan savjet"
  ],
  "questions": [
   {
    "q": "Spori razgrađivač kofeina (CYP1A2 defekt) pita treba li potpuno prestati s kafom. Najbolji odgovor u savjetovanju?",
    "options": [
     "Da, sva kafa mora biti zauvijek zabranjena",
     "Razumna alternativa je kafa bez kofeina — ona zadržava zaštitne polifenole bez produženog djelovanja kofeina. Osjetljivost na kofein ne mora značiti potpunu apstinenciju",
     "Pijte pet šoljica dnevno da izgradite toleranciju",
     "Dozvoljen je samo crni čaj"
    ],
    "correct": 1
   },
   {
    "q": "Kako objašnjavate preporuku za Vitamin D klijentu s VDR varijantom?",
    "options": [
     "Vitamin D djeluje isto kod svih",
     "VDR varijanta mijenja koliko snažno ćelije reaguju na cirkulišući Vitamin D — čak i pri \"normalnim\" nivoima u krvi biološki učinak može biti smanjen. Viši ciljani unos (uz nadzor) često ima smisla",
     "Izbjegavajte Vitamin D — opasan je za njih",
     "Kod njih djeluje samo izlaganje suncu"
    ],
    "correct": 1
   },
   {
    "q": "Koja preporuka u ishrani odgovara klijentu s HFE-defektom (rizik od preopterećenja željezom)?",
    "options": [
     "Povećati unos željeza — treba im više",
     "Smanjiti unos željeza iz hrane: manje crvenog mesa, bez suplemenata obogaćenih željezom osim ako krvni nalaz pokaže manjak. Višak željeza se nakuplja i decenijama oštećuje jetru, srce i zglobove",
     "Uzimati suplemente željeza svakodnevno kao mjeru opreza",
     "Nije potrebna promjena"
    ],
    "correct": 1
   },
   {
    "q": "Klijent s MTHFR varijantom uzima standardne tablete folne kiseline. Šta biste savjetovali?",
    "options": [
     "Nastaviti uzimati standardnu folnu kiselinu — varijanta nema učinka",
     "Prijeći na metilfolat (bioaktivni oblik). Kod MTHFR defekta obična folna kiselina se slabo aktivira i uglavnom je beskorisna za klijenta; metilfolat zaobilazi korak aktivacije",
     "Potpuno prestati sa svim folatom",
     "Jesti samo meso"
    ],
    "correct": 1
   },
   {
    "q": "Kako biste objasnili preporuku o soli klijentu koji je ACE-pozitivan (krvni pritisak osjetljiv na so)?",
    "options": [
     "So nije bitna — preporuka je opšta",
     "Osjetljivost na so je genetska. Kod ACE-pozitivnih klijenata unos soli mjerljivo povećava krvni pritisak. Smanjenje soli je za njih posebno moćna poluga — mnogo više nego za osobe koje nisu osjetljive",
     "Dodati dodatnu so — ona stabilizuje krvni pritisak",
     "Izbjegavati samo šećer"
    ],
    "correct": 1
   }
  ]
 },
 "nut-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o genetskoj analizi ishrane.",
  "longDescription": "Zbirka najčešćih pitanja klijenata o genetskoj analizi ishrane — kako geni utiču na metabolizam nutrijenata, šta znače MTHFR, CYP1A2 i drugi geni, te kako se izvode praktične preporuke.",
  "bullets": [
   "Zašto ista hrana različito djeluje na ljude?",
   "Koja je uloga genetskih varijanti?",
   "Kako se izvode preporuke?",
   "Šta mi genetska analiza može reći — a šta ne?"
  ]
 },
 "pg-sci-en": {
  "topic": "Naučna osnova",
  "description": "Koji geni određuju sportsku sposobnost, regeneraciju i rizik od povreda.",
  "longDescription": "Ovaj trening objašnjava naučnu osnovu iza genetike sportske sposobnosti. Naučit ćete koji geni utiču na tip sportiste (sprint naspram izdržljivosti), rizik za vezivno tkivo i sposobnost regeneracije, te kako se iz tih faktora izvodi individualni trening profil.",
  "postVideoText": "Uz ovu naučnu pozadinu možete savjetovati sportiste na čvrstim temeljima — o pravom trening stimulusu, vremenu regeneracije i genetski utemeljenim suplementima.",
  "introQuestionsHeader": "Ovaj trening odgovara na:",
  "bullets": [
   "Geni za sprint naspram izdržljivosti (ACTN3 i drugi)",
   "Vezivno tkivo i rizik od povreda (COL5A1, MMP3)",
   "Upalni odgovor i vrijeme regeneracije",
   "Praktična primjena u planiranju treninga"
  ],
  "introQuestions": [
   "Koliko je sportskog talenta genetski određeno?",
   "Koji geni razlikuju sprintere od maratonaca?",
   "Kako genetika utiče na rizik od povreda i regeneraciju?",
   "Kako sportisti mogu efikasnije trenirati uz ovo znanje?"
  ],
  "questions": [
   {
    "q": "Koji gen je najpoznatiji marker za fenotip sprinta naspram izdržljivosti?",
    "options": [
     "MTHFR",
     "ACTN3",
     "LCT",
     "COMT"
    ],
    "correct": 1
   },
   {
    "q": "Klijent ima ACTN3 RR genotip. Šta to obično ukazuje?",
    "options": [
     "Samo profil maratonca",
     "Snažna ekspresija brzih mišićnih vlakana — pogodniji za sprint, snagu i eksplozivne sportove; čista izdržljivost je i dalje moguća, ali nije prirodna snaga",
     "Nikakav sportski talenat",
     "Viši kardiovaskularni rizik u bilo kojem sportu"
    ],
    "correct": 1
   },
   {
    "q": "Koji su geni ključni za stabilnost vezivnog tkiva i rizik od povreda?",
    "options": [
     "COL5A1, MMP3 — oni oblikuju kvalitet i obnovu kolagena; nepovoljne varijante povećavaju rizik od povreda tetiva i ligamenata",
     "FTO i PPARG",
     "CYP1A2 i ADH",
     "Nijedan gen ne utiče na vezivno tkivo"
    ],
    "correct": 0
   },
   {
    "q": "Kako se odgovor na trening genetski razlikuje između ljudi?",
    "options": [
     "Identičan je za sve",
     "Otprilike za faktor 2-3 — neki sportisti se veoma snažno prilagođavaju istom stimulusu, drugi jedva",
     "Samo raspoloženje određuje odgovor",
     "Varira za faktor 50"
    ],
    "correct": 1
   },
   {
    "q": "Zašto su antioksidansi (Vit C, E, polifenoli) posebno relevantni u sportu?",
    "options": [
     "Bolji su ukusa od vode",
     "Intenzivna fizička aktivnost proizvodi velike količine slobodnih radikala; genetski slaba antioksidativna odbrana (niska aktivnost SOD/CAT/GPX) znači dužu regeneraciju i veći rizik od mikro-upala",
     "Poboljšavaju samo san",
     "Nemaju učinka na sportiste"
    ],
    "correct": 1
   }
  ]
 },
 "pg-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o genetskoj analizi sportske sposobnosti.",
  "longDescription": "Zbirka najvažnijih pitanja o genetici u sportu — talenat, rizik od povreda, upravljanje treningom. Sa sklopivim odgovorima za samostalno učenje.",
  "bullets": [
   "Talenat naspram treninga — šta je genetsko?",
   "Rizik od povreda i geni vezivnog tkiva",
   "Regeneracija i ishrana",
   "Upravljanje treningom prema genotipu"
  ]
 },
 "bo-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o genetskom stresu i predispoziciji za burnout.",
  "longDescription": "Zbirka najčešćih pitanja o genetskoj analizi burnouta i stresa — što znače COMT i BDNF, kako se razlikuju tipovi Warrior i Worrier te koje konkretne preporuke iz toga proizlaze.",
  "bullets": [
   "Što je gen COMT?",
   "Što znači Warrior vs. Worrier?",
   "Kako je rizik od burnouta genetski uvjetovan?",
   "Koje preporuke proizlaze iz profila?"
  ]
 },
 "ba-sci-en": {
  "topic": "Znanstvena osnova",
  "description": "Kako je biološka dob genetski određena i pod utjecajem načina života.",
  "longDescription": "Ovaj trening objašnjava znanstvenu osnovu iza određivanja biološke dobi. Naučit ćete koji geni utječu na duljinu telomera i starenje stanica, kako se biološka dob razlikuje od kronološke te koji faktori načina života mogu mjerljivo promijeniti biološku dob.",
  "postVideoText": "S ovom znanstvenom osnovom možete sa svojim klijentima razgovarati o analizi biološke dobi na čvrstim temeljima.",
  "introQuestionsHeader": "Ovaj trening odgovara na:",
  "bullets": [
   "Telomeri i starenje stanica — osnove",
   "Kronološka vs. biološka dob",
   "Genetski faktori starenja (TERT, BICD1 i dr.)",
   "Anti-aging strategije s mjerljivim učinkom"
  ],
  "introQuestions": [
   "Koja je razlika između kronološke i biološke dobi?",
   "Kako se telomeri mjere i što nam govore?",
   "Koji geni utječu na starenje stanica?",
   "Koje mjere načina života dokazano mijenjaju biološku dob?"
  ],
  "questions": [
   {
    "q": "Koja je razlika između kronološke i biološke dobi?",
    "options": [
     "Nema razlike — one su identične",
     "Kronološka dob je vrijeme od rođenja; biološka dob opisuje stvarno stanje stanica — pod utjecajem načina života i genetike",
     "Biološka dob je uvijek veća od kronološke",
     "Kronološka dob se mjeri u laboratoriju, biološka se procjenjuje"
    ],
    "correct": 1
   },
   {
    "q": "Koje se stanične strukture skraćuju sa svakom staničnom diobom i ključni su pokazatelj biološke dobi?",
    "options": [
     "Mitohondriji",
     "Ribosomi",
     "Telomeri",
     "Stanične membrane"
    ],
    "correct": 2
   },
   {
    "q": "Koja je uloga enzima telomeraze?",
    "options": [
     "Razgrađuje stanice koje su ostarjele",
     "Može popraviti i produžiti telomere — usporavajući njihovo skraćivanje",
     "Proizvodi slobodne radikale",
     "Prenosi kisik u krvi"
    ],
    "correct": 1
   },
   {
    "q": "Klijent ima genetski slabu telomerazu (\"crvena zona\"). Najbolja preporuka u savjetovanju?",
    "options": [
     "Ignorirati predispoziciju — na telomere se ne može utjecati",
     "Nadoknaditi genetsku slabost načinom života: prehrana bogata antioksidansima, ciljani nutrijenti (D3, Omega-3, Resveratrol), umjerena redovita tjelovježba, dobar san i smanjenje stresa",
     "Potpuno prestati s tjelovježbom — ona stvara oksidativni stres",
     "Odmah otići liječniku — varijanta je patološka"
    ],
    "correct": 1
   },
   {
    "q": "Što je istraživanje pokazalo o mediteranskoj prehrani i duljini telomera?",
    "options": [
     "Mjerljivo produžuje telomere kod svih",
     "Djeluje samo kod nositelja određenog genotipa — kod ostalih nema učinka na telomere. Jasan primjer da isti savjet o načinu života ne djeluje jednako kod svih",
     "Skraćuje telomere — treba je izbjegavati",
     "Nema mjerljiv učinak ni na koga"
    ],
    "correct": 1
   },
   {
    "q": "Kako u savjetovanju uokviriti nepovoljnu anti-aging predispoziciju?",
    "options": [
     "Kao nepromjenjivu sudbinu — klijent će prijevremeno ostarjeti",
     "Kao nevažnu — geni nisu bitni za starenje",
     "Kao povišen rizik, ne sudbinu: klijenti koji poznaju svoje genetske slabe točke mogu svjesnije primjenjivati antioksidanse, san, tjelovježbu i smanjenje stresa — učinci se zbrajaju tijekom godina",
     "Kao bolest koja zahtijeva hitno liječenje"
    ],
    "correct": 2
   }
  ]
 },
 "ba-report-en": {
  "topic": "Trening savjetovanja",
  "description": "Prođite kroz izvještaj o biološkoj dobi sa svojim klijentom.",
  "longDescription": "U ovom treningu savjetovanja dr. Daniel Wallerstorfer objašnjava kako sa svojim klijentima proći kroz izvještaj o genetskoj biološkoj dobi i procesu starenja.",
  "postVideoText": "S ovim treningom možete sa svojim klijentima razgovarati o izvještaju o biološkoj dobi na čvrstim temeljima. Demo brošura ispod može poslužiti kao primjer izvještaja za vašu vlastitu praksu savjetovanja.",
  "introQuestionsHeader": "U ovom treningu naučit ćete:",
  "bullets": [
   "Strukturirano proći kroz izvještaj o biološkoj dobi",
   "Uokviriti proces starenja u genetskim pojmovima",
   "Izvesti konkretne anti-aging preporuke",
   "Kako način života utječe na biološku dob"
  ],
  "introQuestions": [
   "Kako je strukturiran izvještaj o biološkoj dobi",
   "Kako jasno objasniti proces starenja",
   "Koje konkretne preporuke o načinu života se mogu izvesti"
  ],
  "questions": [
   {
    "q": "Kako klijentu jednostavnim jezikom objasniti biološku vs. kronološku dob?",
    "options": [
     "One su identične",
     "\"Kronološka dob su godine otkako ste rođeni. Biološka dob opisuje koliko su vaše stanice zapravo stare — dvije osobe iste dobi mogu se biološki razlikovati za 10-20 godina ovisno o genima i načinu života\"",
     "Biološka dob je samo marketinški pojam",
     "Isto je što i IQ"
    ],
    "correct": 1
   },
   {
    "q": "Klijent ima slabu telomerazu (\"crvena zona\"). Koji je praktičan savjet?",
    "options": [
     "Ništa se ne može učiniti",
     "Ojačati zaštitu izvana: prehrana bogata antioksidansima (Vitamin C/E, polifenoli, selen), ciljani nutrijenti (Omega-3, D3, Resveratrol), umjerena redovita tjelovježba (ne ekstremna), 7-9 sati sna, smanjenje stresa. Učinci se zbrajaju tijekom godina",
     "Uzimati visoke doze kemoterapije",
     "Jesti samo meso"
    ],
    "correct": 1
   },
   {
    "q": "Klijent pita: \"Pomaže li mi mediteranska prehrana da biološki postanem mlađi?\"",
    "options": [
     "Da, uvijek",
     "Ovisi o genetici: studije pokazuju da mediteranska prehrana mjerljivo produžuje telomere samo kod nositelja određene varijante. Kod ostalih je učinak slabiji. Izvještaj pokazuje je li ovaj klijent u skupini koja reagira",
     "Ne, nikad",
     "Samo kod žena"
    ],
    "correct": 1
   },
   {
    "q": "Mlad klijent (25 g.) pita: \"Je li izvještaj o biološkoj dobi uopće koristan za mene?\"",
    "options": [
     "Ne, koristan tek nakon 60. godine",
     "Da — mlađa dob je bolji trenutak za početak. Genetske slabosti se zbrajaju kroz desetljeća; prilagodbe načina života s 25 godina imaju mnogo veći kumulativni učinak do 60. nego ako se počne kasno",
     "Koristan samo za sportaše",
     "Ne, biološka dob je nepromjenjiva"
    ],
    "correct": 1
   },
   {
    "q": "Kako uokviriti rezultat biološke dobi za stresiranog klijenta s nekoliko \"crvenih zona\"?",
    "options": [
     "Kao neizbježno propadanje",
     "Kao ciljane prilike: svaka crvena zona je jasna poluga — Vit D3, Omega-3, unos antioksidansa, san, smanjenje stresa. Plan je usmjeren na djelovanje i motivirajuć, ne fatalistički",
     "Kao medicinsku hitnost",
     "Kao neizlječivu bolest"
    ],
    "correct": 1
   }
  ]
 },
 "ba-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o analizi biološke dobi.",
  "longDescription": "Zbirka najvažnijih pitanja o analizi telomera i anti-aginga. S odgovorima koji se mogu proširiti za samostalno učenje.",
  "bullets": [
   "Što su telomeri i zašto starimo?",
   "Kako moja genetika utječe na biološku dob?",
   "Koji nutrijenti i mjere načina života pomažu?",
   "Mediteranska prehrana — djeluje li za sve?"
  ]
 },
 "pharma-sci-en": {
  "topic": "Naučna osnova",
  "description": "Kako genetske varijante utiču na metabolizam i podnošljivost lijekova — objašnjeno naučno.",
  "longDescription": "U ovoj obuci dr. Daniel Wallerstorfer objašnjava zašto lijekovi djeluju različito kod različitih ljudi. Naučit ćete kako CYP enzimi razgrađuju aktivne supstance, šta znači \"brzi\" naspram \"sporog metabolizatora\", i kako to znanje usmjerava sigurnije odluke pri propisivanju.",
  "postVideoText": "S ovim znanjem možete s klijentima i ljekarima razgovarati o relevantnosti farmakogenetskog testiranja — objašnjavajući zašto doza koja odgovara većini može biti prejaka ili preslaba za pojedinca, ovisno o njegovom CYP genotipu.",
  "introQuestionsHeader": "Ova obuka odgovara na:",
  "bullets": [
   "CYP enzimi i metabolizam lijekova",
   "Brzi i spori metabolizatori",
   "Klinički relevantne aktivne supstance (antidepresivi, analgetici, antikoagulansi, …)",
   "Praktična relevantnost u savjetovanju"
  ],
  "introQuestions": [
   "Zašto lijekovi djeluju različito kod različitih ljudi?",
   "Koji su CYP enzimi odgovorni za razgradnju najvažnijih aktivnih supstanci?",
   "Šta znači \"brzi\" naspram \"sporog metabolizatora\" u kliničkoj svakodnevici?",
   "Koji su lijekovi posebno relevantni za farmakogenetsko savjetovanje?"
  ],
  "questions": [
   {
    "q": "Zašto isti lijek djeluje različito kod različitih ljudi?",
    "options": [
     "To je slučajnost raspoloženja",
     "Genetske varijante u CYP enzimima mijenjaju brzinu kojom se lijek razgrađuje — brzi metabolizatori ga uklanjaju prebrzo (slabiji učinak), spori metabolizatori ga akumuliraju (jači / toksični učinak)",
     "Tjelesna težina je jedini faktor",
     "Nema stvarne razlike"
    ],
    "correct": 1
   },
   {
    "q": "Šta klinički znači \"slab metabolizator\" (poor metabolizer)?",
    "options": [
     "Osoba ne može pravilno probavljati hranu",
     "Njegova varijanta CYP enzima razgrađuje lijek vrlo sporo, pa se aktivna supstanca akumulira — standardne doze mogu dovesti do nuspojava ili toksičnosti",
     "Potrebna mu je veća doza da osjeti bilo kakav učinak",
     "Utiče samo na lijekove za mentalno zdravlje"
    ],
    "correct": 1
   },
   {
    "q": "Koji je CYP enzim jedan od klinički najrelevantnijih za metabolizam lijekova?",
    "options": [
     "CYP2D6 — uključen u metabolizam antidepresiva, beta-blokatora, opioida i mnogih drugih često propisivanih lijekova",
     "CYP1B5",
     "CYP9Z1",
     "CYPX"
    ],
    "correct": 0
   },
   {
    "q": "Kako bi se farmakogenetski nalaz trebao koristiti u praksi?",
    "options": [
     "Kao razlog za prekid svih lijekova",
     "Kao smjernica za ljekara koji propisuje — za odabir alternativnih lijekova ili prilagodbu doze prema tipu metabolizatora pacijenta, smanjujući nuspojave i poboljšavajući djelotvornost",
     "Koristan je samo za istraživanje",
     "Zamjenjuje medicinsku dijagnozu"
    ],
    "correct": 1
   },
   {
    "q": "Zašto je farmakogenetika važna u savjetovanju?",
    "options": [
     "To je uglavnom prodajna tema",
     "Oko 7% svih lijekova ima klinički primjenjive farmakogenetske smjernice — poznavanje genotipa prije propisivanja može spriječiti teške nuspojave i neuspjeh liječenja",
     "Bitno je samo za lijekove protiv raka",
     "Prerijetko je da bi se uzelo u obzir"
    ],
    "correct": 1
   }
  ]
 },
 "legal-basics-en": {
  "topic": "Smjernica za oglašavanje Novogenia proizvoda",
  "description": "Koje reklamne tvrdnje za genske analize, krvne testove i suplemente su pravno sigurne — a koje podliježu opomenama.",
  "longDescription": "Tekstualna obuka (bez videa) o pravno usklađenom oglašavanju Novogenia proizvoda. Izvor: Novogenia Smjernica za oglašavanje. Naučit ćete kako funkcionišu opomene, koje su izjave sigurne, koje su kritične — i koje je najbolje prakse Novogenia razvila u 13 godina rada.",
  "introQuestionsHeader": "U ovoj obuci naučit ćete:",
  "bullets": [
   "Kako funkcioniše opomena i koliko košta",
   "Sigurne naspram rizičnih reklamnih tvrdnji za krvne testove, genske testove i suplemente",
   "EU zdravstvene tvrdnje (Health Claims) za suplemente",
   "Postupanje s recenzijama i preporukama kupaca"
  ],
  "introQuestions": [
   "Kako funkcionišu udruženja za opomene i koje troškove očekivati",
   "Koje su reklamne tvrdnje za krvne testove pravno sigurne",
   "Zašto se genetske osobine mogu sigurno oglašavati, ali su preporuke za djelovanje kritične",
   "Kako pravilno primijeniti zdravstvene tvrdnje (Health Claims) za suplemente",
   "Kako pravno sigurno moderirati recenzije kupaca"
  ],
  "questions": [
   {
    "q": "Koja je tipična početna naknada koju naplaćuje udruženje za opomene?",
    "options": [
     "Oko 50 €",
     "Oko 200 €",
     "Oko 1.000 €",
     "Oko 5.000 €"
    ],
    "correct": 1
   },
   {
    "q": "Kolika je tipična kazna za ponovnu upotrebu osporene reklamne tvrdnje?",
    "options": [
     "Oko 200 €",
     "Oko 1.000 €",
     "Oko 5.000 €",
     "Oko 50.000 €"
    ],
    "correct": 2
   },
   {
    "q": "Koji oblici oglašavanja tipično izazivaju opomene?",
    "options": [
     "Materijali za direktnu prodaju i usmeno savjetovanje",
     "Široko distribuirano oglašavanje poput TV-a, časopisa i društvenih mreža",
     "Samo štampano oglašavanje",
     "Web stranice bez plaćenog oglašavanja"
    ],
    "correct": 1
   },
   {
    "q": "Koji je dio DNK analize tipično NEKRITIČAN sa stanovišta udruženja za opomene?",
    "options": [
     "Konkretni planovi ishrane i sporta",
     "Personalizirane preporuke mikronutrijenata",
     "Naučna analiza genetskih osobina",
     "Sve izjave o DNK testovima su kritične"
    ],
    "correct": 2
   },
   {
    "q": "Koji je dio DNK analize tipično KRITIČAN?",
    "options": [
     "Utvrđivanje genskih varijanti",
     "Konkretni planovi djelovanja izvedeni iz njih (ishrana, sport, suplementi)",
     "Uzimanje uzorka u laboratoriju",
     "Objašnjenje nauke u izvještaju"
    ],
    "correct": 1
   },
   {
    "q": "Koja je izjava o folnoj kiselini SIGURNA prema smjernici za oglašavanje?",
    "options": [
     "\"Uzimajte metilfolat umjesto folne kiseline — djeluje bolje za vas.\"",
     "\"Saznajete može li vaše tijelo učinkovito aktivirati folnu kiselinu.\"",
     "\"Naš test zamjenjuje posjet ljekaru za pitanja o folnoj kiselini.\"",
     "\"Folna kiselina je općenito nedjelotvorna.\""
    ],
    "correct": 1
   },
   {
    "q": "Šta su EU zdravstvene tvrdnje (Health Claims)?",
    "options": [
     "Popis zabranjenih reklamnih tvrdnji",
     "Okvir precizno definisanih tvrdnji o učinku dozvoljenih za suplemente",
     "Studije o kliničkoj djelotvornosti",
     "Samoizjava proizvođača"
    ],
    "correct": 1
   },
   {
    "q": "Ko snosi pravnu odgovornost za reklamne tvrdnje preprodavača?",
    "options": [
     "Novogenia je potpuno odgovorna",
     "Sam partner / preprodavač — Novogenia ne prihvata nikakvu odgovornost",
     "Udruženja za opomene",
     "Niko ne snosi odgovornost"
    ],
    "correct": 1
   },
   {
    "q": "Kako treba postupiti s recenzijom kupca koja sadrži nedozvoljenu zdravstvenu tvrdnju (npr. \"proizvod me je izliječio\")?",
    "options": [
     "Ostaviti je nepromijenjenom — mišljenja kupaca su uvijek pravno sigurna",
     "Jasno je označiti kao mišljenje kupca; na sistemima koji dozvoljavaju moderaciju obrisati nedozvoljenu izjavu ili priložiti korektivni odgovor",
     "Odmah onemogućiti sve recenzije",
     "Prijaviti kupca"
    ],
    "correct": 1
   },
   {
    "q": "Koja je strategija oglašavanja personaliziranih suplemenata NEKRITIČNA?",
    "options": [
     "Oglašavanje konkretnim obećanjima o izlječenju koja nisu na popisu zdravstvenih tvrdnji",
     "Personalizacija na osnovu životnog stila i krvnih vrijednosti — oboje bez problema",
     "Izjave poput \"liječi vašu bolest\"",
     "Oglašavanje bez popisa sastojaka"
    ],
    "correct": 1
   }
  ]
 },
 "wm-sci-en": {
  "topic": "Naučna osnova",
  "description": "Kako genetika određuje debljanje, reakciju na vježbanje i pravilnu ishranu — objašnjeno naučno.",
  "longDescription": "U ovoj obuci dr. Daniel Wallerstorfer objašnjava zašto se ljudi različito debljaju od istog broja kalorija, zašto vježbanje kod jednih čini čuda a kod drugih ne, i kako genetske varijante u metabolizmu masti naspram ugljikohidrata oblikuju pravilnu strategiju ishrane.",
  "postVideoText": "Sa ovim znanjem možete sa svojim klijentima razgovarati o nauci koja stoji iza Gen-dijete, razlikovati genotipove osjetljive na ugljikohidrate od onih osjetljivih na masti, i objasniti zašto personalizovana strategija nadmašuje opšte savjete.",
  "introQuestionsHeader": "Ova obuka odgovara na pitanja:",
  "bullets": [
   "Zašto isti broj kalorija različito djeluje na ljude",
   "Genotipovi osjetljivi na ugljikohidrate naspram onih osjetljivih na masti",
   "Osobe koje reaguju na vježbanje naspram onih koje ne reaguju",
   "Personalizovana strategija ishrane na osnovu genetike"
  ],
  "introQuestions": [
   "Zašto se neki ljudi debljaju od ugljikohidrata, a drugi od masti?",
   "Zašto vježbanje djeluje kod jednih a kod drugih ne?",
   "Kako iz gena prepoznajemo pravilnu strategiju ishrane?",
   "Šta je jo-jo efekat i kako je genetski uslovljen?"
  ],
  "questions": [
   {
    "q": "Zašto se dvije osobe sa istim kalorijskim viškom debljaju različitom brzinom?",
    "options": [
     "To je isključivo pitanje snage volje",
     "Genetske varijante (npr. FABP2, PPARG, FTO) mijenjaju koliko se efikasno skladište masti i ugljikohidrati — isti broj kalorija pretvara se u različite količine tjelesne masti",
     "Hidratacija je jedini faktor",
     "Nema stvarne razlike"
    ],
    "correct": 1
   },
   {
    "q": "Koliko genetski varira reakcija na vježbanje između pojedinaca?",
    "options": [
     "Nimalo — vježbanje djeluje jednako na sve",
     "Otprilike za faktor 2-3 — neki ljudi snažno reaguju na vježbanje, drugi ne reaguju",
     "Do 50 puta",
     "Samo za 5%"
    ],
    "correct": 1
   },
   {
    "q": "Klijent je genetski izrazito osjetljiv na ugljikohidrate. Koja strategija odgovara?",
    "options": [
     "Standardna niskomasna dijeta za sve",
     "Jesti što više ugljikohidrata",
     "Manji udio ugljikohidrata, više proteina, umjereno dobrih masti — i uskladiti unos ugljikohidrata sa danom vježbanja",
     "Izbaciti i masti i ugljikohidrate"
    ],
    "correct": 2
   },
   {
    "q": "Šta je jo-jo efekat i zašto je djelimično genetski uslovljen?",
    "options": [
     "Igračka koja utiče na metabolizam",
     "Obrazac ponovnog debljanja nakon dijete — neki ljudi imaju genetske varijante (npr. u putevima adiponektina / leptina) koje pojačavaju povratak apetita i usporavaju bazalni metabolizam nakon gubitka težine",
     "Isključivo pitanje ponašanja bez biološke osnove",
     "Nešto što doživljavaju samo žene"
    ],
    "correct": 1
   },
   {
    "q": "Zašto personalizovani program nadmašuje standardne savjete?",
    "options": [
     "Koristi skuplje sastojke",
     "Novogenia pilot studija (139 učesnika) pokazala je 2,4× veći uspjeh u mršavljenju uz genetsku personalizaciju u poređenju sa standardnim savjetovanjem — jer strategija zaista odgovara osnovnoj biologiji",
     "Djeluje samo na papiru",
     "Identičan je standardnim savjetima"
    ],
    "correct": 1
   }
  ]
 },
 "wm-report-en": {
  "topic": "Obuka za savjetovanje",
  "description": "Prođite kroz genetski izvještaj o upravljanju težinom poglavlje po poglavlje sa svojim klijentom.",
  "longDescription": "Ova obuka za savjetovanje pokazuje kako proći kroz genetski izvještaj o upravljanju težinom sa svojim klijentom. Od nutritivnog tipa i reakcije na vježbanje, preko gladi/sitosti, raspodjele masti i jo-jo efekta, svako poglavlje je objašnjeno uz praktične primjere klijenata.",
  "postVideoText": "Sa ovom obukom spremni ste da prođete kroz genetski izvještaj sa svojim klijentima. Demo brošure ispod mogu poslužiti kao primjeri izvještaja za vašu vlastitu savjetodavnu praksu.",
  "introQuestionsHeader": "U ovoj obuci ćete naučiti:",
  "bullets": [
   "Kako proći kroz genetski izvještaj poglavlje po poglavlje",
   "Objasniti različite vrste rezultata (osjetljivost na masti/ugljikohidrate, reakcija na vježbanje, strategija ishrane)",
   "Primijeniti dnevne jelovnike, recepte i liste namirnica",
   "Samouvjereno odgovoriti na tipična pitanja klijenata"
  ],
  "introQuestions": [
   "Kako je izvještaj strukturisan i kako proći kroz njega sa klijentima",
   "Kako jednostavnim jezikom objasniti osjetljivost na masti i ugljikohidrate",
   "Kako protumačiti reakciju na vježbanje i strategiju ishrane",
   "Kako se koriste dnevni jelovnici, lista namirnica i personalizovani recepti"
  ],
  "questions": [
   {
    "q": "Šta prikazuju ikonice sa težinom u listi namirnica?",
    "options": [
     "Da li je namirnica generalno zdrava",
     "Da li je raspodjela makronutrijenata (masti, ugljikohidrati, proteini) povoljna (zelena) ili nepovoljna (crvena) za vaš individualni cilj u pogledu težine — uzimajući u obzir i kalorije po tipičnoj porciji",
     "Samo kalorijsku vrijednost",
     "Samo udio proteina"
    ],
    "correct": 1
   },
   {
    "q": "Jesu li namirnice ocijenjene crvenom bojom potpuno zabranjene?",
    "options": [
     "Da — nikad ih ne jesti",
     "Ne — crvene namirnice trebaju biti izuzetak. Izrazito crvene (4-6 ikonica) samo rijetko; blago crvene (1-3 ikonice) češće. Cilj je ravnoteža, a ne savršenstvo.",
     "Da, ali samo radnim danima",
     "Samo za žene"
    ],
    "correct": 1
   },
   {
    "q": "Klijent izrazito „ne reaguje na vježbanje“ (slaba ACE / ACTN3 reakcija). Koji je pravilan savjet?",
    "options": [
     "Vježbanje je generalno beskorisno — odustanite od njega",
     "Glavna poluga za mršavljenje je ishrana / upravljanje kalorijama. Vježbanje ostaje vrijedno za zdravlje i očuvanje mišića, ali nije glavni alat za mršavljenje za ovog klijenta",
     "Utrostručite obim treninga — na kraju mora upaliti",
     "Pređite samo na maratonsko trčanje"
    ],
    "correct": 1
   },
   {
    "q": "Klijent azijskog porijekla (čest ALDH2 defekt) pije 1-2 čaše vina sedmično i pita da li je to opasno. Najbolji odgovor?",
    "options": [
     "Nema problema, pijte koliko god želite",
     "Najbolje je alkohol držati na vrlo niskom nivou: kod nosilaca ALDH2 toksični acetaldehid se primjetno nakuplja, povećavajući dugoročni rizik od raka pri hroničnoj konzumaciji. Povremene male količine su podnošljive; svakodnevni unos treba izbjegavati",
     "Povećajte unos alkohola — to će istrenirati enzim",
     "Alkohol uopšte ne stupa u interakciju sa genetikom"
    ],
    "correct": 1
   },
   {
    "q": "Kako biste klijentu objasnili „jo-jo efekat“ na osnovu genetskog izvještaja?",
    "options": [
     "Nedostatak snage volje — ništa više",
     "Genetska predispozicija za jači povratak apetita i sporiji bazalni metabolizam nakon gubitka težine; klijentu koristi postepena, stabilna promjena ishrane umjesto drastičnih dijeta",
     "Greška u izvještaju",
     "Pogađa samo ljude starije od 60 godina"
    ],
    "correct": 1
   }
  ]
 },
 "wm-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o Gen-dijeti i Calorie Blocker-u.",
  "longDescription": "Zbirka najčešćih pitanja klijenata o programu Gen-dijete, genetskom izvještaju i proizvodu Calorie Blocker. Sa odgovorima koji se mogu proširiti za samostalno učenje.",
  "bullets": [
   "Šta je Gen-dijeta?",
   "Kako funkcioniše genetska analiza?",
   "Kako se koristi lista namirnica?",
   "Šta je Calorie Blocker?"
  ]
 },
 "nut-sci-en": {
  "topic": "Naučna osnova",
  "description": "Kako geni određuju optimalnu ishranu za svaku osobu — objašnjeno naučno.",
  "longDescription": "U ovoj obuci dr. Daniel Wallerstorfer objašnjava zašto namirnice različito djeluju na različite ljude. Naučit ćete koje genetske varijacije kontrolišu iskorištavanje hranjivih materija, reakciju na so, kofein, folnu kiselinu i sl., te kako se ovi uvidi odgovorno koriste u personalizovanom savjetovanju o ishrani.",
  "postVideoText": "Sa razumijevanjem ovih genetskih osnova možete sa svojim klijentima na čvrstim temeljima razgovarati o preporukama za ishranu iz izvještaja.",
  "introQuestionsHeader": "Ova obuka odgovara na pitanja:",
  "bullets": [
   "Genetske varijacije u metabolizmu hranjivih materija",
   "Zašto ista namirnica različito djeluje na ljude",
   "Studije o nutrigenetici",
   "Praktična primjena u savjetovanju"
  ],
  "introQuestions": [
   "Zašto su neke namirnice zdrave za jedne, a nezdrave za druge?",
   "Kakvu ulogu geni poput MTHFR, CYP1A2 ili ACE imaju u iskorištavanju hranjivih materija?",
   "Kako je genetika povezana sa osjetljivošću na kofein, so i folnu kiselinu?",
   "Koje se praktične preporuke mogu izvesti za klijenta?"
  ],
  "questions": [
   {
    "q": "Koji gen razgrađuje kofein u tijelu?",
    "options": [
     "MTHFR",
     "CYP1A2",
     "FTO",
     "COMT"
    ],
    "correct": 1
   },
   {
    "q": "Kako funkcionalna (brza) varijanta CYP1A2 mijenja rizik od srčanog udara pri redovnoj konzumaciji kafe (prema velikim epidemiološkim studijama)?",
    "options": [
     "Rizik ostaje nepromijenjen",
     "Rizik pada za otprilike jednu trećinu — polifenoli ostaju zaštitni, a kofein se brzo eliminiše",
     "Rizik se udvostručuje",
     "Rizik raste za dvije trećine"
    ],
    "correct": 1
   },
   {
    "q": "A kako se mijenja kod sporih razgrađivača kofeina (defektni CYP1A2)?",
    "options": [
     "Rizik pada još više",
     "Rizik ostaje isti kao kod brzih razgrađivača",
     "Rizik raste za otprilike dvije trećine — kofein duže ostaje aktivan i produžava skokove krvnog pritiska",
     "Nema razlike"
    ],
    "correct": 2
   },
   {
    "q": "Koja je uloga gena MTHFR?",
    "options": [
     "Razgrađuje kofein",
     "Aktivira folnu kiselinu u bioaktivni oblik metilfolat — bez funkcionalnog MTHFR standardna folna kiselina u dodacima ostaje beskorisna",
     "Reguliše razgradnju dopamina",
     "Određuje boju kože"
    ],
    "correct": 1
   },
   {
    "q": "Šta krvni test NE pokazuje u slučaju MTHFR defekta?",
    "options": [
     "Nivo folne kiseline u krvi",
     "Da li je folna kiselina zaista aktivirana i biološki djelotvorna",
     "Nivo vitamina D",
     "Nivo željeza"
    ],
    "correct": 1
   },
   {
    "q": "Koliko gena razmatra kompletna analiza ishrane?",
    "options": [
     "Oko 10",
     "Oko 25",
     "Oko 60",
     "Preko 200"
    ],
    "correct": 2
   }
  ]
 },
 "supp-sci-en": {
  "topic": "Naučne osnove",
  "description": "Kako genetski individualne potrebe za mikronutrijentima omogućuju personaliziranu suplementaciju — objašnjeno naučno.",
  "longDescription": "U ovoj obuci dr. Daniel Wallerstorfer objašnjava zašto svaka osoba ima različite potrebe za mikronutrijentima i kako funkcioniše genetski personalizirana suplementacija. Naučit ćeš o Microtransporter tehnologiji — kako se nutrijenti koji se međusobno takmiče (npr. kalcij i cink) mogu istovremeno apsorbirati i zašto slow-release za vitamin C oponaša fiziološki smislen obrazac.",
  "postVideoText": "Sa ovim znanjem u pozadini možeš sa svojim klijentima na čvrstoj osnovi raspravljati o logici koja stoji iza personalizirane suplementacije i jasno objasniti Microtransporter tehnologiju — uključujući praktičnu primjenu u peletama i intravenskoj primjeni.",
  "introQuestionsHeader": "Ova obuka odgovara na:",
  "bullets": [
   "Genetski individualne potrebe za nutrijentima",
   "Microtransporter tehnologija",
   "Slow-release i razdvojena apsorpcija (kalcij/cink)",
   "Bioraspoloživost vitamina i minerala"
  ],
  "introQuestions": [
   "Zašto svaka osoba ima različite potrebe za mikronutrijentima?",
   "Kako Microtransporter tehnologija rješava problem konkurentnih nutrijenata?",
   "Zašto se vitamin C oslobađa kao slow-release?",
   "Kako se kalcij i cink mogu istovremeno apsorbirati uprkos međusobnom blokiranju?"
  ],
  "questions": [
   {
    "q": "Zašto svaka osoba ima različitu potrebu za mikronutrijentima?",
    "options": [
     "Broj ćelija se razlikuje",
     "Genetske varijante mijenjaju kako tijelo apsorbira, metabolizira i koristi svaki nutrijent — isti unos dovodi do različitih nivoa u krvi",
     "Zavisi samo od unosa vode",
     "Veličina želuca se razlikuje"
    ],
    "correct": 1
   },
   {
    "q": "Koji je ključni problem koji Microtransporter tehnologija rješava?",
    "options": [
     "Tablete prevelike za gutanje",
     "U standardnim pilulama mnogi nutrijenti se međusobno blokiraju pri apsorpciji, ili prebrzo nestaju iz krvotoka da bi bili korisni",
     "Vitamini su skupi za proizvodnju",
     "Suplementi imaju loš ukus"
    ],
    "correct": 1
   },
   {
    "q": "Zašto se vitamin C oslobađa kao slow-release?",
    "options": [
     "Vitamin C je toksičan u visokim dozama",
     "Djeluje samo u vrlo visokim dozama",
     "Vitamin C ima poluvrijeme od oko 30 minuta — postepeno oslobađanje tokom dana oponaša prirodni unos iz hrane i održava nivoe u krvi stabilnima",
     "Slow-release je samo marketinški termin"
    ],
    "correct": 2
   },
   {
    "q": "Kako Microtransporter tehnologija omogućava da se kalcij i cink apsorbiraju istovremeno uprkos tome što se međusobno blokiraju?",
    "options": [
     "Koristi se samo jedan od dva",
     "Kalcij i cink se hemijski spajaju u novo jedinjenje",
     "Jednostavno se zajedno pakuju u istu pilulu",
     "Cink se oslobađa odmah u gornjem dijelu crijeva, kalcij satima kasnije u donjem dijelu crijeva — uzimaju se zajedno ali se oslobađaju prostorno i vremenski odvojeno, tako da se nikada ne takmiče za iste transportere"
    ],
    "correct": 3
   },
   {
    "q": "Koliko gena se analizira za izvještaj o personaliziranoj suplementaciji?",
    "options": [
     "Oko 10",
     "Oko 25",
     "Preko 60",
     "Tačno 200"
    ],
    "correct": 2
   },
   {
    "q": "Koja je ključna prednost personalizirane u odnosu na standardnu suplementaciju?",
    "options": [
     "Sadrži više vitamina po piluli",
     "Doza, izbor i oblik oslobađanja odgovaraju individualnoj genetskoj potrebi — nema \"jedno rješenje za sve\"; nutrijent zaista dolazi do krvotoka umjesto da bude izlučen",
     "Uvijek je jeftinija",
     "Djeluje već prvog dana"
    ],
    "correct": 1
   }
  ]
 },
 "supp-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o personaliziranoj suplementaciji i Microtransporter tehnologiji.",
  "longDescription": "Zbirka najvažnijih pitanja klijenata o personaliziranoj suplementaciji — zašto ne djeluje svaka pilula, šta Microtransporter tehnologija zaista radi drugačije, i kako genetske informacije oblikuju doziranje.",
  "bullets": [
   "Koja je razlika između standardne i personalizirane suplementacije?",
   "Kako funkcioniše Microtransporter tehnologija?",
   "Kako se doziranje prilagođava genetskim potrebama?",
   "Koliko košta personalizirana suplementacija u poređenju?"
  ]
 },
 "beauty-sci-en": {
  "topic": "Naučne osnove",
  "description": "Kako geni suodređuju starenje kože, stvaranje bora, UV osjetljivost i hidrataciju kože — objašnjeno naučno.",
  "longDescription": "U ovoj obuci dr. Daniel Wallerstorfer objašnjava genetske osnove DNAbeauty Control analize. Koji geni kontroliraju razgradnju kolagena? Zašto koža kod nekih ljudi brže izgori? Kako je hidratacija kože povezana sa filagrinom i drugim genima? I šta se iz ovih informacija može izvesti za istinski personaliziranu njegu kože?",
  "postVideoText": "Sa ovom naučnom pozadinom možeš sa svojim klijentima na čvrstoj osnovi raspravljati o Beauty izvještaju i iz genetskih rezultata izvesti individualne strategije njege.",
  "introQuestionsHeader": "Ova obuka odgovara na:",
  "bullets": [
   "Genetsko starenje kože i razgradnja kolagena (MMP1)",
   "UV osjetljivost i pigmentacija (MC1R)",
   "Hidratacija kože i barijerna funkcija (FLG)",
   "Antioksidativni odbrambeni sistemi kože (SOD, CAT, GPX)"
  ],
  "introQuestions": [
   "Koji geni kontroliraju razgradnju kolagena i time stvaranje bora?",
   "Kako se genetska UV osjetljivost razlikuje između ljudi?",
   "Kakvu ulogu antioksidativni geni imaju u starenju kože?",
   "Kako je genetska hidratacija kože povezana sa rutinom njege kože?"
  ],
  "questions": [
   {
    "q": "Koji je enzim / gen centralan za razgradnju kolagena u koži i time za stvaranje bora?",
    "options": [
     "MTHFR — aktivacija folata",
     "MMP1 — Matriks metaloproteinaza 1 (razgrađuje kolagen)",
     "CYP1A2 — razgradnja kofeina",
     "LCT — perzistencija laktaze"
    ],
    "correct": 1
   },
   {
    "q": "Klijentica nosi vrlo aktivnu MMP1 varijantu. Šta to znači za njenu njegu kože?",
    "options": [
     "Ne treba joj nikakve anti-aging mjere",
     "Povećan rizik od ranog stvaranja bora — anti-aging mjere (antioksidansi, UV zaštita, pojačivači kolagena, nepušenje) su za nju posebno važne",
     "Varijanta utiče samo na boju kose",
     "Trebala bi jesti više ugljikohidrata"
    ],
    "correct": 1
   },
   {
    "q": "Koja tvrdnja o genetskoj UV osjetljivosti (npr. MC1R) je tačna?",
    "options": [
     "Genetske varijante ne utiču na UV osjetljivost — bitan je samo tip kože",
     "Nosioci nepovoljnih varijanti lakše izgore i imaju veći rizik od starenja kože i raka kože povezanih sa UV zračenjem — stroga UV zaštita je još važnija",
     "Kod visoke genetske UV osjetljivosti treba potpuno izbjegavati sunce, čak i u hladu",
     "Krema za sunčanje djeluje samo kod ljudi sa \"normalnim\" genima"
    ],
    "correct": 1
   },
   {
    "q": "Zašto su antioksidativni geni poput SOD2, CAT i GPX važni za starenje kože?",
    "options": [
     "Oni proizvode slobodne radikale",
     "Štite od oksidativnog stresa, koji uzrokuje oštećenje DNK u ćelijama kože — kada su ove odbrane slabe, koža stari mjerljivo brže; antioksidansi (vitamin C, E, polifenoli) postaju posebno važni",
     "Utiču samo na imunološki sistem, ne na kožu",
     "Oni proizvode pigment"
    ],
    "correct": 1
   },
   {
    "q": "Najbolja preporuka za klijenta sa genetski smanjenom hidratacijom kože (npr. nepovoljne FLG / filagrin varijante)?",
    "options": [
     "Vrući tuševi i jaki sapunasti sredstva za čišćenje",
     "Pojačana upotreba njege koja veže vlagu i jača barijeru (hijaluronska kiselina, ceramidi, glicerin), blaga sredstva za čišćenje, izbjegavanje isušujućih sredstava",
     "Potpuno preskočiti njegu kože — koža se sama regulira",
     "Dopustiti da voda dotakne kožu samo jednom sedmično"
    ],
    "correct": 1
   },
   {
    "q": "Šta razlikuje genetsku analizu kože od čisto kozmetičkog savjetovanja?",
    "options": [
     "Jeftinija je",
     "Identificira trajne genetske slabe tačke kože umjesto da samo procjenjuje trenutno stanje — njega i zaštita se mogu primijeniti proaktivno na duge staze umjesto reaktivno",
     "Zamjenjuje svaki medicinski pregled kože",
     "Korisna je samo za mlade ljude"
    ],
    "correct": 1
   }
  ]
 },
 "beauty-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o genetski utemeljenoj analizi kože (DNAbeauty Control).",
  "longDescription": "Zbirka najvažnijih pitanja klijenata o genetskoj analizi kože: šta ti ona zaista govori, koji se geni razmatraju, kako se izvode praktične preporuke za njegu, i koja su očekivanja realna.",
  "bullets": [
   "Šta ti DNAbeauty Control zaista govori — a šta ne",
   "Kako se genetska analiza kože razlikuje od kozmetičkog savjetovanja",
   "Koje gene razmatramo (MMP1, MC1R, FLG, …)",
   "Kako izgledaju praktične preporuke za njegu"
  ]
 },
 "tx-sci-en": {
  "topic": "Naučna osnova",
  "description": "Kako geni određuju individualnu sposobnost detoksikacije — od zagorjele hrane preko hemikalija do alkohola i teških metala.",
  "longDescription": "U ovoj obuci dr. Daniel Wallerstorfer objašnjava genetske osnove detoksikacije. Koji geni neutrališu kancerogene materije iz zagorjele i dimljene hrane? Kako glutation-S-transferaze štite od hemikalija? Koju ulogu igra selen i zašto alkohol ne djeluje na sve jednako?",
  "postVideoText": "S ovom naučnom pozadinom možeš sa svojim klijentima razgovarati o izvještaju o detoksikaciji na čvrstim temeljima i izvesti individualne zaštitne strategije.",
  "introQuestionsHeader": "Ova obuka odgovara na:",
  "bullets": [
   "Detoksikacija zagorjele hrane (CYP1A1, NAT2)",
   "Detoksikacija hemikalija i glutation-S-transferaze (GST)",
   "Antioksidativna odbrana i unos selena",
   "Razgradnja alkohola i acetaldehida (ADH, ALDH2)"
  ],
  "introQuestions": [
   "Koji geni kontrolišu detoksikaciju zagorjele hrane?",
   "Kako glutation-S-transferaze djeluju u detoksikaciji hemikalija?",
   "Koju ulogu igra selen u zaštiti od oksidativnog stresa?",
   "Kako se genetska razgradnja alkohola razlikuje između ljudi?"
  ],
  "questions": [
   {
    "q": "Koja porodica gena je centralna za detoksikaciju hemikalija i teških metala?",
    "options": [
     "GST (glutation-S-transferaze)",
     "MTHFR (aktivacija folata)",
     "LCT (laktaza)",
     "CYP1A2 (razgradnja kofeina)"
    ],
    "correct": 0
   },
   {
    "q": "PAH-ovi (policiklični aromatični ugljovodonici) nastaju u zagorjeloj i dimljenoj hrani. Šta je tačno u vezi s njihovom detoksikacijom?",
    "options": [
     "PAH-ovi se uopšte ne mogu razgraditi",
     "Detoksikacija PAH-ova jako varira ovisno o genotipu — ljudi sa sporim ili defektnim varijantama CYP1A1/NAT2 nose primjetno viši rizik od raka pri čestom unosu zagorjele hrane",
     "Svi detoksikuju PAH-ove istom brzinom",
     "PAH-ovi se izlučuju samo kroz kožu"
    ],
    "correct": 1
   },
   {
    "q": "Klijentkinja ima genetski defekt GST (nedostatak glutation-S-transferaze). Šta to znači u praksi?",
    "options": [
     "Iznadprosječan kapacitet detoksikacije",
     "Smanjena sposobnost neutralizacije hemikalija iz okoline (pesticidi, rastvarači, duhanski dim) — trebalo bi da aktivno izbjegava izloženost i poveća unos antioksidansa",
     "Nema praktičnog uticaja",
     "Trebalo bi da pije više kafe"
    ],
    "correct": 1
   },
   {
    "q": "Koja je uloga selena u antioksidativnom odbrambenom sistemu?",
    "options": [
     "Direktno veže teške metale u krvi",
     "Samo kozmetički element u tragovima",
     "Selen je esencijalni gradivni element glutation-peroksidaze (GPX), jednog od najvažnijih antioksidativnih enzima — nedostatak selena smanjuje ovu odbranu i povećava oksidativni stres",
     "Odgovoran je za zdravlje kostiju"
    ],
    "correct": 2
   },
   {
    "q": "Zašto se tolerancija na alkohol toliko razlikuje između ljudi?",
    "options": [
     "Samo tjelesna težina",
     "Varijante ADH (alkohol → acetaldehid) i ALDH2 (acetaldehid → sirćetna kiselina) jako se razlikuju među pojedincima. Kod defekata ALDH2 — čestih u azijskim populacijama — toksični acetaldehid se nakuplja: crvenilo, mučnina, izrazito povišen rizik od raka pri hroničnoj konzumaciji",
     "Muškarci i žene ga razgrađuju identično",
     "Alkohol svi izdišu"
    ],
    "correct": 1
   },
   {
    "q": "Klijent pokazuje nekoliko crvenih zona u izvještaju o detoksikaciji. Koji je najbolji pristup savjetovanju?",
    "options": [
     "Ignorisati — detoksikacija se odvija samostalno",
     "Potpuno prestati jesti",
     "Genetsko opterećenje se ne može potpuno ispraviti, ali se može kompenzovati: izbjegavanje specifičnih izloženosti (manje zagorjele hrane, čist unutrašnji prostor), ishrana bogata antioksidansima (vit. C/E, selen, prekursori glutationa), bez izloženosti dimu, i redovna fizička aktivnost radi izlučivanja putem znoja",
     "Odmah otići kod ljekara — predispozicija je bolest"
    ],
    "correct": 2
   }
  ]
 },
 "tx-report-en": {
  "topic": "Obuka za savjetovanje",
  "description": "Prođi kroz genetski izvještaj o detoksikaciji poglavlje po poglavlje sa svojim klijentom.",
  "longDescription": "Ova obuka za savjetovanje objašnjava kako proći kroz genetski izvještaj o detoksikaciji sa svojim klijentima. Od detoksikacije zagorjele hrane i hemikalija preko zaštite od starenja i opskrbe selenom do metabolizma alkohola i lijekova.",
  "postVideoText": "S ovom obukom spreman si da svoje klijente sa sigurnošću provedeš kroz izvještaj o detoksikaciji.",
  "introQuestionsHeader": "U ovoj obuci ćeš naučiti:",
  "bullets": [
   "Prolazak kroz izvještaj o detoksikaciji poglavlje po poglavlje",
   "Jasno objasniti detoksikaciju zagorjele hrane i hemikalija",
   "Uokviriti zaštitu od starenja protiv oksidativnog stresa",
   "Savjetovati o opskrbi selenom i metabolizmu alkohola/lijekova"
  ],
  "introQuestions": [
   "Kako je strukturiran izvještaj o detoksikaciji",
   "Koji geni kontrolišu detoksikaciju zagorjele hrane i hemikalija",
   "Kako oksidativni stres utiče na proces starenja",
   "Koje preporuke proizlaze za selen, alkohol i lijekove"
  ],
  "questions": [
   {
    "q": "Klijent voli zagorjeli odrezak i roštilj. Izvještaj o detoksikaciji pokazuje sporu detoksikaciju PAH-ova. Tvoj savjet?",
    "options": [
     "Nema problema — jesti zagorjele hrane koliko god želi",
     "Preporučiti smanjenje zagorjele/ugljenisane/dimljene hrane (izloženost PAH-ovima), preferirati blaže metode kuvanja i kombinovati s hranom bogatom antioksidansima (vitamini C, E, polifenoli)",
     "Preći isključivo na sirovu ishranu",
     "Uzimati više zagorjele hrane da bi se enzim istrenirao"
    ],
    "correct": 1
   },
   {
    "q": "Klijent sa smanjenom aktivnošću GPX (slaba antioksidativna odbrana ovisna o selenu) — šta najbolje odgovara?",
    "options": [
     "Potpuno ignorisati unos selena",
     "Ciljana suplementacija selenom u fiziološkim dozama (npr. 50-100 µg/dan iz selenometionina), ishrana bogata antioksidansima i smanjenje oksidativnog opterećenja (pušenje, alkohol, sunce)",
     "Selen u visokim dozama (500+ µg/dan)",
     "Samo vitamin C, bez selena"
    ],
    "correct": 1
   },
   {
    "q": "Kako objašnjavaš \"crvenu zonu\" u dijelu o detoksikaciji hemikalija (defekt GST)?",
    "options": [
     "Klijent je alergičan na sve hemikalije",
     "Tijelo neutrališe hemikalije iz okoline manje efikasno od prosjeka — praktično smanjenje izloženosti (čistiji vazduh, manje pesticida, manje rastvarača u kući) je posebno važno; opskrba antioksidansima podržava preostali kapacitet detoksikacije",
     "To je laboratorijska greška",
     "Znači da klijent treba da izbjegava svu hranu"
    ],
    "correct": 1
   },
   {
    "q": "Klijent azijskog porijekla pokazuje defekt ALDH2. Šta je ključna tačka savjetovanja?",
    "options": [
     "Piti više alkohola da bi se prevazišla varijanta",
     "Acetaldehid — poznati kancerogen — se nakuplja. Čak i umjeren redovan unos alkohola značajno povećava dugoročni rizik od raka. Preporuka: vrlo malo ili nimalo alkohola",
     "Nema stvarne zabrinutosti",
     "Samo izbjegavati šećer"
    ],
    "correct": 1
   },
   {
    "q": "Kako uokviruješ cjelokupni izvještaj o detoksikaciji za klijenta?",
    "options": [
     "Kao presudu — geni određuju sudbinu",
     "Kao putokaz — geni pokazuju gdje je sistem slabiji; ciljano smanjenje specifičnih izloženosti uz način života bogat antioksidansima mjerljivo kompenzuje tokom godina",
     "Kao nebitno — detoksikacija je autonomna",
     "Kao medicinsku dijagnozu koja zahtijeva liječenje"
    ],
    "correct": 1
   }
  ]
 },
 "bo-sci-en": {
  "topic": "Naučna osnova",
  "description": "Kako gen COMT oblikuje individualnu obradu stresa — i zašto je rizik od burnouta genetski.",
  "longDescription": "U ovoj obuci dr. Daniel Wallerstorfer objašnjava gen COMT i njegovu ulogu u razgradnji dopamina, fenotip Warrior naspram Worrier, BDNF i neuroplastičnost, te kako se individualni rizik od burnouta može izvesti iz genetskog profila.",
  "postVideoText": "S ovom naučnom pozadinom možeš sa svojim klijentima razgovarati o izvještaju o burnoutu na čvrstim temeljima i izvesti individualne strategije upravljanja stresom.",
  "introQuestionsHeader": "Ova obuka odgovara na:",
  "bullets": [
   "COMT — centralni gen za razgradnju dopamina",
   "Warrior naspram Worrier — dva genotipa, dvije strategije za stres",
   "BDNF, neuroplastičnost i otpornost",
   "Praktične preporuke iz genetskog profila"
  ],
  "introQuestions": [
   "Koji gen je centralan za individualnu obradu stresa?",
   "Koja je razlika između Warrior i Worrier?",
   "Kako je rizik od burnouta genetski?",
   "Koje konkretne preporuke za način života proizlaze iz profila?"
  ],
  "questions": [
   {
    "q": "Koji gen je centralni pokretač individualne obrade stresa u analizi burnouta?",
    "options": [
     "MTHFR",
     "COMT",
     "CYP1A2",
     "FTO"
    ],
    "correct": 1
   },
   {
    "q": "Šta razlikuje genotip \"Warrior\" od \"Worrier\" u pogledu COMT?",
    "options": [
     "Warrior brže razgrađuje dopamin — vrhunski učinak pod akutnim stresom. Worrier razgrađuje sporije — jaka svakodnevna koncentracija, ranjiviji na hronični stres",
     "Nema stvarne razlike, važan je samo odgoj",
     "Worrier brže razgrađuje dopamin",
     "Warrior-i su imuni na svaki oblik stresa"
    ],
    "correct": 0
   },
   {
    "q": "Šta \"crvena zona\" u izvještaju o burnoutu znači za savjetovanje?",
    "options": [
     "Klijent već ima burnout",
     "To je tehnička greška",
     "Klijent ima nepovoljnu genetsku predispoziciju u ovom aspektu — mjere načina života su posebno važne jer je rizik povišen",
     "Klijent treba da izbjegava čitavu temu"
    ],
    "correct": 2
   },
   {
    "q": "Najbolja preporuka za klijenta sa sporom varijantom COMT (Worrier)?",
    "options": [
     "Aktivno tražiti stres — čini ga produktivnijim",
     "Svjesne pauze za oporavak, meditacija, dobra higijena sna i izbjegavanje mnogih istovremenih izvora stresa — jer signal stresa duže ostaje u sistemu",
     "Drastično povećati kofein da bi se podigao dopamin",
     "Izbjegavati svaki oblik napora, čak i sport"
    ],
    "correct": 1
   },
   {
    "q": "Kako treba uokviriti nepovoljnu predispoziciju za burnout u savjetovanju?",
    "options": [
     "Kao sudbinu — ništa se ne može učiniti",
     "Kao povišen rizik, ne sudbinu — klijenti koji znaju svoju osjetljivost na stres mogu djelovati rano (san, meditacija, vježba, pauze). Genetska informacija je alat, a ne presuda.",
     "Kao nebitno — geni ne utiču na stres",
     "Kao bolest koja zahtijeva hitno liječenje"
    ],
    "correct": 1
   },
   {
    "q": "Zašto spora razgradnja dopamina (Worrier) ima i svakodnevne prednosti?",
    "options": [
     "Čini ih imunim na svaki stres",
     "Uzrokuje stalno visoku otpornost na stres",
     "Dopamin ostaje duže aktivan — ti ljudi intenzivnije doživljavaju uzbuđenje, radost i nagradu; radoznali su i skloni istraživanju. Nedostatak se javlja tek pod hroničnim stresom kada se tijelo teško vraća u smiraj.",
     "Nema prednosti, samo nedostatke"
    ],
    "correct": 2
   }
  ]
 },
 "bo-report-en": {
  "topic": "Obuka za savjetovanje",
  "description": "Prođi kroz izvještaj o burnoutu korak po korak sa svojim klijentom.",
  "longDescription": "U ovoj obuci za savjetovanje dr. Daniel Wallerstorfer objašnjava kako proći kroz genetski izvještaj o burnoutu sa svojim klijentima i izvesti individualne strategije upravljanja stresom.",
  "postVideoText": "S ovom obukom možeš na čvrstim temeljima sa svojim klijentima razgovarati o izvještaju o burnoutu. Demo brošura ispod može poslužiti kao primjer izvještaja za tvoju vlastitu praksu savjetovanja.",
  "introQuestionsHeader": "U ovoj obuci ćeš naučiti:",
  "bullets": [
   "Strukturiran prolazak kroz izvještaj o burnoutu",
   "Jasno objasniti genetsku predispoziciju za stres",
   "Izvesti individualne preporuke za način života",
   "Rano prepoznati znakove upozorenja"
  ],
  "introQuestions": [
   "Kako je strukturiran izvještaj o burnoutu",
   "Kako jasno objasniti individualnu predispoziciju za stres",
   "Kako izvesti konkretne preporuke za način života"
  ],
  "questions": [
   {
    "q": "Klijentkinja pokazuje sporu varijantu COMT (Worrier). Šta je centralni dio savjetovanja?",
    "options": [
     "Nije potreban poseban savjet",
     "Signali stresa duže ostaju u sistemu — preporučiti namjerne rutine oporavka, prioritet sna, meditaciju/disanje i izbjegavanje više istovremenih stresora. Genetska informacija je alat za aktivno planiranje oporavka, a ne za etiketiranje klijenta",
     "Reći klijentkinji da će doživjeti burnout",
     "Preporučiti visoke doze kofeina"
    ],
    "correct": 1
   },
   {
    "q": "Klijentkinja tipa Worrier kaže da uživa u svom detaljnom radu i osjeća se produktivno — treba li da se mijenja?",
    "options": [
     "Da, mora promijeniti ličnost",
     "Ne — spora varijanta COMT donosi i prednosti (visoka koncentracija, intenzivan doživljaj nagrade, radoznalost). Preporuka je usmjerena na oporavak, a ne na ličnost: zadržati snage, ali planirati oporavak radi zaštite od hroničnog stresa",
     "Dati otkaz na poslu",
     "Odmah uzeti lijekove"
    ],
    "correct": 1
   },
   {
    "q": "Šta \"crvena zona\" u izvještaju o burnoutu znači za razgovor u savjetovanju?",
    "options": [
     "Klijent već ima burnout",
     "Klijent ima nepovoljnu genetsku predispoziciju u ovom aspektu — mjere načina života su posebno važne. To je upozorenje, a ne dijagnoza",
     "Laboratorijska greška",
     "Klijent treba da izbjegava sve teme"
    ],
    "correct": 1
   },
   {
    "q": "Klijent tipa Warrior kaže da napreduje pod pritiskom — treba li da brine o burnoutu?",
    "options": [
     "Ne, Warrior-i su imuni",
     "Manji akutni rizik nego Worrier, ali oporavak i dalje je važan. Percipirani nedostatak stresa može prikriti nedovoljnu stimulaciju u mirnim fazama. Preporučiti strukturu za svakodnevnu koncentraciju i dovoljno sna",
     "Da, preći na posao s malo stresa",
     "Povećati stres što je više moguće"
    ],
    "correct": 1
   },
   {
    "q": "Kako uokviruješ cjelokupni izvještaj o burnoutu za klijenta?",
    "options": [
     "Kao presudu — doživjet će burnout",
     "Kao alat: izvještaj otkriva klijentov profil stresa kako bi se oporavak i način života mogli namjerno planirati. Nije presuda niti dijagnoza",
     "Kao nebitno",
     "Kao medicinsku patologiju koja zahtijeva hitno liječenje"
    ],
    "correct": 1
   }
  ]
 }
}
const clone = (o) => JSON.parse(JSON.stringify(o))
const vid = (id) => (id && VIDEOS[id]) ? VIDEOS[id] : null

export const COURSES_SR = COURSES_EN.map((en) => {
  const c = clone(en)
  c.lang = 'sr'
  c.id = en.id.replace(/-en$/, '') + '-sr'
  c.uid = en.uid + '-sr'
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

export const CATEGORIES_SR = Object.fromEntries(Object.entries(CATEGORIES_EN).map(([k, v]) => [k, CAT[v] || v]))
export const MAIN_CATEGORIES_SR = MAIN_CATEGORIES_EN.map(m => ({
  title: MAIN_TITLES[m.title] || m.title,
  sections: m.sections.map(s => CAT[s] || s),
}))
export const SECTION_PRODUCT_LABELS_SR = Object.fromEntries(
  Object.entries(SECTION_PRODUCT_LABELS_EN).map(([k, v]) => [CAT[k] || k, v])
)
