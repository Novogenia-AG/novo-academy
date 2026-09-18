/* AUTO-GENERATED — SR academy (sr).
   Transforms COURSES_EN: translated SR text + SR lip-sync videos + lang:'sr'.
   Documents stay ENGLISH (per spec). Missing videos -> placeholder ("VIDEO COMING SOON").
   Regenerate via gen_langfile.mjs. Do not edit by hand. */
import { COURSES_EN, CATEGORIES_EN, MAIN_CATEGORIES_EN, SECTION_PRODUCT_LABELS_EN,
  TOPIC_WB_EN, TOPIC_REPORT_EN, TOPIC_FAQ_EN } from './data.en.js'

// VIDEOS: EN youtubeId -> SR lip-sync youtubeId. Empty until dubs are uploaded.
const VIDEOS = {
 "vIJroun2h-I": "nC4KMeYVU5Y",
 "IPIr-XoKIHM": "CzRRj36W09I",
 "Lfh3oYtMSDA": "0HmuB7oreNU",
 "-C9O5SrbdZQ": "rSYpuYc5kLA",
 "pYLWY_5frwQ": "c5zHbKt_V6g",
 "iS1W947McFs": "A__AzVn2suA",
 "CxcnY6fnz5s": "jh5s8sCXSPM",
 "CyUqDSeZbJI": "JJs2ifRSpUw",
 "PA73Rg4iP7k": "QqDm6-yiCzg",
 "ikDamq8-8yo": "n3AKv2pvsWc",
 "pzF004M4ErE": "TKhwgJiriHc",
 "8OyIc_fcdYg": "giW85tpf_6o",
 "g5GKYyH11hc": "BfE41sq_S3g",
 "zMb8ebBNGzA": "TdEPfNElsQQ",
 "dHuDD3Us238": "RiurOOH1rxc",
 "PTvmWu1Rxrg": "jO5oOMOlymw",
 "mgfbGW-QKC4": "-rJgwi-YF5E",
 "6dJMl02X9Tw": "xE76Q3xHBKU",
 "wE834vw4aAs": "HY_4bdEUNPg",
 "ofA7l21tMvQ": "OgBD-2FO5E8",
 "Y9lSzTXj72c": "vJ3D6c4Rssg",
 "q8RNXZE5t5A": "vtIm6HS2L_s",
 "DbRx4Kjqkes": "7Swa5M-pWI8",
 "IgNeWJ6tTng": "T1fp26KXLoI",
 "SgzAZyUIx-0": "Vr9yO_4VshI"
}
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
  "longDescription": "Zbirka najčešćih pitanja o genetskoj analizi burnouta i stresa — šta radi gen COMT, koje tri osobine vezane za stres prikazuje izveštaj i koje konkretne preporuke iz toga proizlaze.",
  "bullets": [
   "Šta je gen COMT?",
   "Koje tri osobine vezane za stres prikazuje izveštaj?",
   "Kako je rizik od burnouta genetski uslovljen?",
   "Koje preporuke proizlaze iz profila?"
  ]
 },
 "ba-sci-en": {
  "topic": "Naučna osnova",
  "description": "Zašto se telomere skraćuju, kako gen za telomerazu utiče na biološku starost — i koji nutrijenti mogu da pomognu.",
  "longDescription": "Ova obuka objašnjava naučnu osnovu analize biološke starosti. Saznaćeš zašto se telomere — zaštitni krajevi naših hromozoma — skraćuju sa svakom deobom ćelije, šta se dešava sa ćelijom kada se one potroše, kako gen za telomerazu utiče na taj proces i koji nutrijenti mogu da podrže održavanje telomera kada geni rade slabije.",
  "postVideoText": "Uz ovu naučnu osnovu možeš sa sigurnošću da razgovaraš sa svojim klijentima o analizi biološke starosti.",
  "introQuestionsHeader": "Ova obuka odgovara na pitanja:",
  "bullets": [
   "Telomere i starenje ćelija — osnove",
   "Senescencija: kada ćelije pređu u režim spavanja",
   "Genetski faktori starenja: gen za telomerazu",
   "Nutrijenti koji pomažu i mediteranska ishrana čiji efekat zavisi od genotipa"
  ],
  "introQuestions": [
   "Šta su telomere i zašto se skraćuju sa svakom deobom ćelije?",
   "Šta se dešava sa ćelijom kada se njene telomere potroše?",
   "Šta radi gen za telomerazu?",
   "Koji nutrijenti podržavaju održavanje telomera — i zašto mediteranska ishrana ne deluje kod svih?"
  ],
  "questions": [
   {
    "q": "Šta su telomere?",
    "options": [
     "Geni na početku svakog hromozoma koji upravljaju deobom ćelije",
     "Proteini koji popravljaju oštećenu DNK",
     "Strukture u ćeliji koje proizvode energiju",
     "Zaštitni krajevi hromozoma koji ne sadrže gene"
    ],
    "correct": 3
   },
   {
    "q": "Šta se dešava sa telomerama pri svakoj deobi ćelije?",
    "options": [
     "Svaki put se malo produže",
     "Odlomi se mali komadić, pa postaju kraće",
     "U novoj ćeliji se svaki put grade potpuno iznova",
     "Ostaju potpuno iste dužine"
    ],
    "correct": 1
   },
   {
    "q": "Posle otprilike koliko deoba ćelije su telomere potrošene?",
    "options": [
     "Oko 5 do 10",
     "Oko 20 do 30",
     "Oko 50 do 70",
     "Oko 500 do 700"
    ],
    "correct": 2
   },
   {
    "q": "Šta se dešava sa ćelijom čije su telomere potrošene?",
    "options": [
     "Prelazi u režim spavanja (senescencija) i prestaje da radi",
     "Nastavlja da se deli, ali znatno sporije",
     "Ponovo postaje mlada matična ćelija",
     "Telo je odmah razgrađuje i u potpunosti uklanja"
    ],
    "correct": 0
   },
   {
    "q": "Koji gen pomaže u održavanju telomera?",
    "options": [
     "MTHFR",
     "COMT",
     "Telomeraza",
     "FTO"
    ],
    "correct": 2
   },
   {
    "q": "Koji nutrijenti mogu da podrže održavanje telomera kada zaštitni gen radi slabije?",
    "options": [
     "Vitamin C, cink, selen, gvožđe i magnezijum",
     "Vitamin D3, omega-3, vitamin E, resveratrol i ginko",
     "Vitamin B12, folna kiselina, gvožđe, jod i kalcijum",
     "Kofein, taurin, kreatin, L-karnitin i zeleni čaj"
    ],
    "correct": 1
   },
   {
    "q": "Da li mediteranska ishrana ima isti efekat na telomere kod svih ljudi?",
    "options": [
     "Da — kod svih održava telomere dužim",
     "Ne — kod većine ljudi skraćuje telomere",
     "Njen efekat na telomere još nikada nije ispitivan",
     "Ne — deluje samo kod određene genske varijante"
    ],
    "correct": 3
   },
   {
    "q": "Kolika može biti razlika u biološkoj starosti između ljudi sa dve defektne i ljudi sa dve funkcionalne kopije gena za telomerazu?",
    "options": [
     "Do 20 godina",
     "Najviše 1 do 2 godine",
     "Najviše 5 godina",
     "Nema merljive razlike"
    ],
    "correct": 0
   },
   {
    "q": "Kakvu ulogu slobodni radikali imaju u starenju?",
    "options": [
     "Štite krajeve hromozoma da se ne odlome tokom deobe ćelije",
     "Stalno oštećuju ćelije, a antioksidansi deluju protiv toga",
     "Imaju ulogu samo kod ljudi starijih od 70 godina",
     "Tokom sna popravljaju oštećene ćelije"
    ],
    "correct": 1
   },
   {
    "q": "Koja je prava strategija za klijenta sa defektom u genu za telomerazu?",
    "options": [
     "Zanemariti defekt — na telomere se ionako ne može uticati",
     "Više vežbati — ishrana tu ne pravi nikakvu razliku",
     "Unositi više nutrijenata koji usporavaju skraćivanje telomera",
     "Preći na mediteransku ishranu — ona deluje kod svih ljudi"
    ],
    "correct": 2
   }
  ]
 },
 "ba-report-en": {
  "topic": "Obuka za savetovanje",
  "description": "Prođi sa svojim klijentom kroz izveštaj o biološkoj starosti.",
  "longDescription": "U ovoj obuci za savetovanje dr Daniel Wallerstorfer jednostavnim jezikom objašnjava proces starenja — od hromozoma i telomera do ćelija u režimu spavanja — i na primeru klijentkinje Marije pokazuje kako se u izveštaju čitaju rezultat za telomere, nalaz o mediteranskoj ishrani i preporuke za nutrijente.",
  "postVideoText": "Uz ovu obuku možeš sa sigurnošću da razgovaraš sa svojim klijentima o izveštaju o biološkoj starosti.",
  "introQuestionsHeader": "U ovoj obuci naučićeš:",
  "bullets": [
   "Strukturisano proći kroz izveštaj o biološkoj starosti",
   "Jednostavnim jezikom objasniti telomere i proces starenja",
   "Protumačiti rezultat za telomere na primeru Marije",
   "Preporuke za nutrijente i nalaz o mediteranskoj ishrani"
  ],
  "introQuestions": [
   "Kako je strukturisan izveštaj o biološkoj starosti",
   "Kako jasno da objasniš proces starenja",
   "Koje preporuke za nutrijente proizlaze iz rezultata"
  ],
  "questions": [
   {
    "q": "Obuka poredi telomere sa plastičnim završecima pertli. Šta ilustruje ovo poređenje?",
    "options": [
     "Da drže dve polovine hromozoma zajedno",
     "Da ne nose gene, već samo štite hromozom",
     "Da nose najvažnije gene hromozoma",
     "Da ponovo izrastu posle svake deobe ćelije"
    ],
    "correct": 1
   },
   {
    "q": "Zašto ćelija posle otprilike 50 do 70 deoba prelazi u režim spavanja?",
    "options": [
     "Potrošila je rezerve hranljivih materija i mora da se oporavi",
     "Imunski sistem ju je označio kao oštećenu i isključio je",
     "Dostigla je maksimalnu veličinu i više ne može da se deli",
     "Njene telomere su potrošene i geni počinju da se odlamaju"
    ],
    "correct": 3
   },
   {
    "q": "Da li geni koji održavaju telomere mogu da ponište gubitak telomera?",
    "options": [
     "Da — ponovo izgrađuju telomere do prvobitne dužine",
     "Ne — uopšte ne utiču na dužinu telomera",
     "Ne u potpunosti — ali usporavaju taj proces",
     "Samo u detinjstvu, dok telo još raste"
    ],
    "correct": 2
   },
   {
    "q": "Marijin rezultat za održavanje telomera nalazi se u srednjem opsegu. Kako se to tumači?",
    "options": [
     "Kao oslabljeno — telomere se kod nje ne održavaju tako dobro",
     "Kao normalno — nije potrebno ništa preduzimati",
     "Kao natprosečno — telomere se kod nje održavaju posebno dobro",
     "Kao neodređeno — analizu treba ponoviti"
    ],
    "correct": 0
   },
   {
    "q": "Da li mediteranska ishrana pomaže Mariji da održi telomere?",
    "options": [
     "Da — svima pomaže da održe telomere",
     "Da — ali samo u kombinaciji sa više vitamina E",
     "Ne — kod većine ljudi skraćuje telomere",
     "Ne — uz njene genske varijante nema efekta"
    ],
    "correct": 3
   },
   {
    "q": "U Marijinom izveštaju su vitamin D3, omega-3, vitamin E, resveratrol i ginko označeni zelenim strelicama. Šta to znači?",
    "options": [
     "Nivoi ovih nutrijenata kod nje su već sasvim dovoljni",
     "Treba da smanji unos ovih nutrijenata",
     "Treba da jede više namirnica sa ovim nutrijentima",
     "Prvo mora da uradi analizu krvi za ove nutrijente"
    ],
    "correct": 2
   }
  ]
 },
 "ba-faq-en": {
  "topic": "Često postavljana pitanja",
  "description": "Odgovori na tipična pitanja klijenata o analizi biološke starosti.",
  "longDescription": "Zbirka najvažnijih pitanja o analizi telomera i anti-agingu. Sa sklopivim odgovorima za samostalno učenje.",
  "bullets": [
   "Šta su telomere i zašto starimo?",
   "Kako moja genetika utiče na biološku starost?",
   "Koji nutrijenti i mere u načinu života pomažu?",
   "Mediteranska ishrana — da li deluje kod svih?"
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
  "description": "Zašto isti stres različito deluje na različite ljude — i kakve veze gen COMT ima sa rizikom od burnouta.",
  "longDescription": "U ovoj obuci dr Daniel Wallerstorfer objašnjava zašto snažan, neprekidan stres kod nekih ljudi dovodi do burnouta, a kod drugih ne. Saznaćeš koje tri genetske osobine analiza posmatra, kako gen COMT razgrađuje dopamin posle uzbudljivih ili stresnih situacija, zašto je oko 15% ljudi posebno podložno stresu — i zašto je pravi način života utoliko važniji što su geni nepovoljniji.",
  "postVideoText": "Uz ovu naučnu osnovu možeš sa sigurnošću da razgovaraš sa svojim klijentima o izveštaju o burnoutu i da izvedeš individualne strategije za upravljanje stresom.",
  "introQuestionsHeader": "Ova obuka odgovara na pitanja:",
  "bullets": [
   "Tri genetske osobine: učinak pod stresom, emocionalna otpornost, impulsivnost",
   "COMT — ključni gen za razgradnju dopamina",
   "Razgradnja dopamina: zašto je 15% ljudi posebno podložno stresu",
   "Preporuke za način života na osnovu genetskog profila"
  ],
  "introQuestions": [
   "Koji gen je ključan za individualnu obradu stresa?",
   "Zašto isti stres različito deluje na ljude — i kakve veze s tim ima COMT?",
   "Kako geni utiču na rizik od burnouta?",
   "Koje mere u načinu života pomažu — i zašto su važnije kod nepovoljnog profila?"
  ],
  "questions": [
   {
    "q": "Šta je, prema obuci, uzrok burnouta?",
    "options": [
     "Jedna kratka stresna situacija, na primer ispit",
     "Isključivo genetika — način života ne igra nikakvu ulogu",
     "Snažan, neprekidan stres tokom dužeg perioda",
     "Previše fizičke aktivnosti"
    ],
    "correct": 2
   },
   {
    "q": "Koje genetske osobine posmatra analiza stresa?",
    "options": [
     "Osetljivost na kofein, trajanje sna i toleranciju na alkohol",
     "Pamćenje, koncentraciju i vreme reakcije",
     "Puls u mirovanju, krvni pritisak i nivo kortizola",
     "Učinak pod stresom, emocionalnu otpornost i impulsivnost"
    ],
    "correct": 3
   },
   {
    "q": "Koji gen razgrađuje dopamin kada se uzbudljiva situacija završi?",
    "options": [
     "COMT",
     "MTHFR",
     "FTO",
     "ACTN3"
    ],
    "correct": 0
   },
   {
    "q": "Šta se pri ponovljenom stresu dešava kod osobe čiji gen COMT slabo funkcioniše?",
    "options": [
     "Dopamin se brže razgrađuje, pa se mozak brže smiruje",
     "Mozak se ne vraća u osnovno stanje, pa ga novi stres preopterećuje",
     "Mozak se navikava na stres i sa svakom novom epizodom reaguje sve slabije",
     "Dopamin se uopšte ne oslobađa, pa stres prolazi neprimećeno"
    ],
    "correct": 1
   },
   {
    "q": "Koja je paradoksalna prednost spore razgradnje dopamina?",
    "options": [
     "Smirenija reakcija na stresne situacije u svakodnevnom životu",
     "Brži fizički oporavak posle intenzivnog treninga",
     "Manji rizik od srčanog udara",
     "Intenzivnija pozitivna osećanja i veća radoznalost"
    ],
    "correct": 3
   },
   {
    "q": "Koliki je otprilike udeo ljudi koji imaju dve kopije gena COMT koje dobro funkcionišu?",
    "options": [
     "Oko 5%",
     "Oko 15%",
     "Oko 40%",
     "Oko 80%"
    ],
    "correct": 2
   },
   {
    "q": "Koliki je otprilike udeo ljudi koji imaju dve defektne kopije i posebno su podložni stresu?",
    "options": [
     "Oko 5%",
     "Oko 15%",
     "Oko 40%",
     "Oko 60%"
    ],
    "correct": 1
   },
   {
    "q": "Što su genetske osobine vezane za stres nepovoljnije, to je pravi način života važniji. Šta preporučuje izveštaj?",
    "options": [
     "Meditaciju, život sa malo stresa, ishranu i fizičku aktivnost",
     "Više kofeina za budnost i bolji učinak pod pritiskom",
     "Izbegavanje svakog sporta, da telo ne bi bilo dodatno opterećeno",
     "Samo lekove, jer se protiv genetike ne može delovati"
    ],
    "correct": 0
   },
   {
    "q": "Prema obuci, čemu su ljudi čiji gen COMT slabo funkcioniše takođe skloniji?",
    "options": [
     "Zavisnosti od kofeina",
     "Poremećajima sna",
     "Žudnji za šećerom",
     "Kockanju"
    ],
    "correct": 3
   },
   {
    "q": "Šta u izveštaju označava crvena zona kod neke osobine vezane za stres?",
    "options": [
     "Veoma povoljnu genetiku — nije potrebno ništa preduzimati",
     "Nepovoljnu predispoziciju — veći rizik od burnouta",
     "Da osoba već ima burnout i treba joj lečenje",
     "Standardnu preporuku koja važi za sve"
    ],
    "correct": 1
   }
  ]
 },
 "bo-report-en": {
  "topic": "Obuka za savetovanje",
  "description": "Prođi sa svojim klijentom korak po korak kroz izveštaj o burnoutu.",
  "longDescription": "U ovoj obuci za savetovanje dr Daniel Wallerstorfer na primeru klijentkinje Marije pokazuje kako se čita deo izveštaja o burnoutu: gen COMT, tri osobine vezane za stres na skali crveno–sredina–zeleno i zašto je način života važan za klijente u crvenoj zoni i u sredini.",
  "postVideoText": "Uz ovu obuku možeš sa sigurnošću da razgovaraš sa svojim klijentima o izveštaju o burnoutu.",
  "introQuestionsHeader": "U ovoj obuci naučićeš:",
  "bullets": [
   "Strukturisano proći kroz izveštaj o burnoutu",
   "Jasno objasniti genetsku predispoziciju za stres",
   "Protumačiti tri osobine vezane za stres na skali crveno–sredina–zeleno",
   "Objasniti zašto je način života važan u crvenoj zoni i u sredini"
  ],
  "introQuestions": [
   "Kako je strukturisan deo izveštaja o burnoutu",
   "Kako jasno da objasniš individualnu predispoziciju za stres",
   "Šta rezultat znači za način života tvog klijenta"
  ],
  "questions": [
   {
    "q": "Koji gen je u središtu dela izveštaja o burnoutu i na šta utiče?",
    "options": [
     "CYP1A2 — brzinu kojom se kofein razgrađuje u jetri",
     "FTO — regulaciju apetita i osećaj sitosti",
     "COMT — ravnotežu određenih neurotransmitera u mozgu",
     "MTHFR — način na koji telo aktivira folat"
    ],
    "correct": 2
   },
   {
    "q": "Koje tri osobine prikazuje deo izveštaja o burnoutu?",
    "options": [
     "Učinak pod stresom, emocionalnu otpornost i impulsivnost",
     "Kvalitet sna, osetljivost na kofein i reakciju kortizola na stres",
     "Koncentraciju, pamćenje i motivaciju",
     "Krvni pritisak, puls i brzinu disanja"
    ],
    "correct": 0
   },
   {
    "q": "Marija ima jednu funkcionalnu i jednu defektnu kopiju gena COMT. Kako izgleda njen rezultat?",
    "options": [
     "Sve tri osobine su u crvenoj zoni — veoma je podložna burnoutu",
     "Sve tri osobine su u zelenoj zoni — burnout za nju nije problem",
     "Učinak pod stresom je u crvenoj zoni, a druge dve osobine u zelenoj",
     "Sve tri osobine su u sredini — umereno dobra otpornost na stres"
    ],
    "correct": 3
   },
   {
    "q": "Ljudi koji pate od burnouta često kombinuju pogrešan način života sa svojom genetikom. Gde se obično nalaze njihovi rezultati i šta bi trebalo da urade?",
    "options": [
     "U zelenoj zoni — treba samo da smanje obim posla",
     "Uglavnom u crvenoj zoni — treba da žive tako da izbegavaju stres",
     "U sredini — njihov način života ima mali uticaj",
     "Uglavnom u crvenoj zoni — promena načina života više ništa ne menja"
    ],
    "correct": 1
   },
   {
    "q": "Marijini rezultati su kod sve tri osobine u sredini. Da li je njen način života važan?",
    "options": [
     "Da — i za nju je važno da načinom života izbegava stres",
     "Ne — samo klijenti u crvenoj zoni treba da promene način života",
     "Ne — rezultat u sredini nema praktičan značaj",
     "Tek kada se kod nje pojave prvi znaci burnouta"
    ],
    "correct": 0
   },
   {
    "q": "Šta znači kada je klijent kod sve tri osobine u zelenoj zoni?",
    "options": [
     "Burnout je kod ovog klijenta nemoguć, bez obzira na način života",
     "Klijent je posebno podložan burnoutu",
     "Burnout za ovog klijenta nije tako velika opasnost",
     "Analizu nije bilo moguće obraditi"
    ],
    "correct": 2
   }
  ]
 }
}
const FAQTX = {
 "wm-report-en": {
  "videoSegmentTitles": [
   "Uvod",
   "Analiza težine — nutritivni tip",
   "Analiza težine — tip vježbanja i kalorija",
   "Razumijevanje naučnih tabela",
   "Analiza težine — gubitak mišićne mase",
   "Analiza težine — glad i sitost",
   "Analiza težine — raspodjela masti",
   "Analiza težine — jo-jo efekat",
   "Analiza težine — lista namirnica",
   "Analiza težine — sistem ocjenjivanja namirnica",
   "Analiza težine — tabele vježbanja",
   "Završne napomene"
  ]
 },
 "wm-faq-en": {
  "faqGroups": [
   {
    "title": "Šta je Gen-dijeta?",
    "items": [
     {
      "q": "Šta je tačno Gen-dijeta?",
      "a": "Gen-dijeta je personalizovan program mršavljenja i ishrane zasnovan na analizi tvojih gena. Umjesto standardnog plana ishrane dobijaš individualnu preporuku, jer tvoj metabolizam genetski reaguje drugačije nego kod drugih — na masti, ugljikohidrate, vježbanje, pa čak i na glad."
     },
     {
      "q": "Šta zapravo dobijam?",
      "a": "Dobijaš individualni izvještaj sa svojim optimalnim odnosom masti, ugljikohidrata i proteina; personalizovanu listu namirnica sa preko 1.500 namirnica; 4-sedmični dnevni plan obroka; knjigu recepata; i konkretne preporuke za vježbanje i kretanje koje odgovaraju tvom genetskom profilu."
     },
     {
      "q": "Koliko dugo važe moje preporuke?",
      "a": "Tvoji geni se ne mijenjaju tokom života, pa genetski rezultati ostaju trajno važeći. Sama procjena se, međutim, kontinuirano usavršava na osnovu novih istraživanja — od pokretanja programa ugrađeno je preko 770 poboljšanja."
     },
     {
      "q": "Moram li redovno ponavljati test?",
      "a": "Ne. Geni ostaju isti cijeli život — već analiziran gen uvijek daje isti rezultat. Ono što se stalno poboljšava jeste sama procjena, jer se novi naučni nalazi kontinuirano ugrađuju."
     }
    ]
   },
   {
    "title": "Kako funkcioniše genetska analiza?",
    "items": [
     {
      "q": "Kako funkcioniše program Gen-dijete?",
      "a": "Iz tvog genetskog skupa podataka biraju se varijante relevantne za kontrolu težine. Iz njih računamo: koliko je tvoje tijelo osjetljivo na masti i ugljikohidrate? Koliko je vježbanje djelotvorno za tebe? Koliko je djelotvorno smanjenje kalorija? Imaš li sklonost ka jo-jo efektu, gubitku mišića ili masnoći na stomaku? Iz ovih rezultata proizlazi tvoja optimalna raspodjela makronutrijenata i individualni plan ishrane."
     },
     {
      "q": "Zar mršavljenje nije samo pitanje kalorijskog deficita?",
      "a": "Ne samo. Studije pokazuju da ljudi genetski vrlo različito reaguju na masti i ugljikohidrate — neki se pri kalorijskom višku jedva ugoje, dok se drugi pri istom broju kalorija ugoje mnogo više. I djelotvornost vježbanja genetski varira za faktor 3."
     },
     {
      "q": "Postoji li 7 različitih nutritivnih tipova?",
      "a": "Da: iskorištavač masti (veći udio masti), mješoviti tip I-V (različite mješovite raspodjele) i iskorištavač ugljikohidrata (veći udio ugljikohidrata). U kombinaciji sa individualnim faktorima poput bazalnog metabolizma, djelotvornosti vježbanja i sklonosti jo-jo efektu, postoji preko 6.500 mogućih genetskih profila."
     },
     {
      "q": "Od kog uzrasta je program pogodan za djecu?",
      "a": "Program je u načelu primjenjiv i kod djece, ali bez izračuna kalorija, preporuka ciljane težine, dnevnih jelovnika i knjige recepata — oni za djecu u razvoju nemaju smisla. Knjiga recepata je zaključana za djecu mlađu od 14 godina."
     }
    ]
   },
   {
    "title": "Calorie Blocker",
    "items": [
     {
      "q": "Šta je Calorie Blocker?",
      "a": "Calorie Blocker je personalizovan proizvod za mršavljenje u obliku Microtransporter peleta. Sadrži individualni odnos blokatora masti i ugljikohidrata prilagođen tvojoj DNK analizi. U kombinaciji sa smanjenim unosom kalorija i masti dokazano podržava mršavljenje — u kombinaciji sa uravnoteženom ishranom i načinom života pomaže u održavanju težine."
     },
     {
      "q": "Kako se uzima Calorie Blocker?",
      "a": "Svakodnevno prije ručka i večere, sa velikim gutljajem vode. Pelete treba progutati cijele, ne žvakati ih."
     },
     {
      "q": "Koje su aktivne supstance?",
      "a": "Blokator masti je Opuntia ficus-indica (OFI) — vlakno kaktusa opuncije. To biljno vlakno u probavnom traktu stvara matricu nalik gelu koja veže masti iz hrane i smanjuje njihovu apsorpciju. Blokator ugljikohidrata je fazolamin (iz bijelog graha) koji inhibira alfa-amilazu. Oba su potpuno biljnog porijekla."
     },
     {
      "q": "Da li je Calorie Blocker veganski/vegetarijanski?",
      "a": "Da. I blokator masti (Opuntia ficus-indica) i blokator ugljikohidrata (fazolamin iz bijelog graha) su čisto biljnog porijekla. Calorie Blocker je pogodan za vegetarijance i vegane, bez glutena, bez laktoze i bez vještačkih boja."
     }
    ]
   }
  ]
 },
 "nut-report-en": {
  "videoSegmentTitles": [
   "Analiza ishrane — uvod",
   "Kofein i kafa",
   "Omega 3",
   "Folna kiselina",
   "Homocistein",
   "Koenzim Q10",
   "Detoksikacija — kancerogene materije",
   "Detoksikacija — hemikalije i teški metali",
   "Slobodni radikali",
   "Selen",
   "So i krvni pritisak",
   "Vitamin D (1. dio)",
   "Vitamin D (2. dio)",
   "Laktoza i kalcij",
   "Upala",
   "LDL holesterol",
   "Trigliceridi",
   "Željezo",
   "Metilacija",
   "Zaključak — posljednji dio",
   "Princip ocjenjivanja namirnica",
   "Lista namirnica"
  ]
 },
 "nut-faq-en": {
  "faqGroups": [
   {
    "title": "Osnove — geni i ishrana",
    "items": [
     {
      "q": "Zašto ista hrana različito djeluje na ljude?",
      "a": "Zato što nutrijente metabolišemo genetski različito. Gen MTHFR, na primjer, određuje može li tvoje tijelo aktivirati folnu kiselinu u bioaktivni oblik. Gen CYP1A2 određuje koliko brzo razgrađuješ kofein. Takve varijante mijenjaju kako nutrijent djeluje u TVOM tijelu."
     },
     {
      "q": "Koliko gena razmatra analiza ishrane?",
      "a": "Oko 60 genskih varijanti relevantnih za ishranu. Među njima: MTHFR (aktivacija folata), CYP1A2 (razgradnja kofeina), ACE (so/krvni pritisak), VDR (receptor za vitamin D), HFE (unos željeza), LCT (perzistencija laktaze) i geni antioksidativne odbrane (SOD, CAT, GPX)."
     },
     {
      "q": "Može li mi analiza reći treba li da pijem kafu?",
      "a": "Posredno da. Gen CYP1A2 pokazuje razgrađuješ li kofein brzo (Warrior) ili sporo. Spori razgrađivači nose veći kardiovaskularni rizik od kofeina — kafu je bolje izbjegavati ili je zamijeniti kafom bez kofeina, kako bi se zadržale koristi polifenola."
     },
     {
      "q": "Zamjenjuje li analiza ljekara ili nutricionistu?",
      "a": "Ne. Ona je dodatna pomoć pri odlučivanju, zasnovana na stabilnim genetskim podacima. Akutni simptomi, bolesti ili posebne dijete uvijek pripadaju u ruke ljekara ili diplomiranog nutricioniste."
     }
    ]
   },
   {
    "title": "Ključne genske teme",
    "items": [
     {
      "q": "Šta za mene znači MTHFR defekt?",
      "a": "MTHFR aktivira folnu kiselinu u metilfolat, oblik koji tvoje tijelo zaista može koristiti. Uz defekt možeš uzimati mnogo folne kiseline u običnom dodatku i i dalje imati funkcionalni manjak. Prelazak na metilfolat rješava taj problem."
     },
     {
      "q": "Imam HFE varijantu — je li suplementacija željezom opasna za mene?",
      "a": "Može biti. Neke HFE varijante decenijama izazivaju preopterećenje željezom — tvoje tijelo apsorbira previše željeza iz hrane i skladišti ga u jetri, srcu i zglobovima. Suplemente željeza treba uzimati samo ako krvni nalaz pokaže stvarni manjak."
     },
     {
      "q": "Osjetljivost na so (ACE) — znači li to da moram odustati od soli?",
      "a": "Ne potpuno. To znači da tvoj krvni pritisak snažnije reaguje na so nego kod prosjeka. Smanjenje soli je u tvom slučaju moćna poluga — mnogo više nego kod osoba koje nisu osjetljive."
     }
    ]
   },
   {
    "title": "Praktična pitanja",
    "items": [
     {
      "q": "Trebam li prestati jesti omiljene namirnice ako su ocijenjene nepovoljno?",
      "a": "Ne. Izvještaj je dugoročni vodič. Povremena konzumacija je u redu. Cilj je ravnoteža tokom sedmica i mjeseci, a ne savršenstvo u jednom danu."
     },
     {
      "q": "Koliko brzo ću primijetiti učinak?",
      "a": "Zavisi od toga šta mijenjaš. Osjetljivost na kofein osjetiš već za nekoliko dana. Prelazak na drugi oblik folne kiseline vidi se na krvnim markerima za 2-3 mjeseca. Dugoročne preporuke poput smanjenja soli ili zasićenih masti trebaju 6-12 mjeseci da se pretvore u mjerljivu korist za srce i krvne sudove."
     },
     {
      "q": "Je li lista preporuka uklesana u kamen?",
      "a": "Ne. Preporuke su izvedene iz aktuelnog naučnog konsenzusa. Kako istraživanja napreduju, izvještaj se periodično ažurira, bez dodatnih troškova."
     }
    ]
   }
  ]
 },
 "pg-faq-en": {
  "faqGroups": [
   {
    "title": "Talenat i genetika u sportu",
    "items": [
     {
      "q": "Koliko je velik uticaj gena na sportsku sposobnost?",
      "a": "Procjene se kreću između 30 i 70%, ovisno o disciplini. Talenat (sprinterska mišićna vlakna, potencijal za VO2max, stabilnost vezivnog tkiva) pretežno je genetski određen; i sama reakcija na trening — koliko snažno tijelo reaguje na podražaj — genetski varira za faktor 2 do 3."
     },
     {
      "q": "Koja je razlika između mišićnog volumena i mišićne snage?",
      "a": "Volumen znači više mase (cilj bodibildera) — trening sa 6-12 ponavljanja. Snaga znači veći učinak uz manje mase — trening sa 1-6 ponavljanja pri velikim opterećenjima. Oba ciljna pravca treninga zahtijevaju različite strategije i različite pauze za odmor."
     },
     {
      "q": "Mogu li postati uspješan sportista sa „lošim“ genima?",
      "a": "Da. Genetika određuje talenat, ali trening, dosljednost i prava strategija čine odlučujuću razliku. Poznavanje svojih genetskih slabih tačaka omogućava ti da ih kompenzuješ (npr. ishranom bogatom antioksidansima, dužim odmorom, pažljivim zagrijavanjem)."
     }
    ]
   },
   {
    "title": "Rizik od povreda i regeneracija",
    "items": [
     {
      "q": "Moj izvještaj pokazuje nepovoljne gene vezivnog tkiva (COL5A1, MMP3). Šta da radim?",
      "a": "Treniraj sa posebnim oprezom: temeljito zagrijavanje, manje eksplozivnih opterećenja dok se tijelo ne prilagodi, duži oporavak između intenzivnih treninga i dobar unos proteina i vitamina C kao podrška sintezi kolagena. Izbjegavaj nagle skokove u obimu treninga."
     },
     {
      "q": "Zašto mi izvještaj preporučuje antioksidanse?",
      "a": "Intenzivno vježbanje stvara velike količine slobodnih radikala. Ako su tvoji antioksidativni geni (SOD2, CAT, GPX) slabi, oporavak je sporiji, a mikroupale se nakupljaju. Vitamin C, vitamin E, polifenoli i selen direktno podržavaju te odbrambene sisteme."
     },
     {
      "q": "Šta je „deload“ i koliko često ga treba raditi?",
      "a": "Deload je sedmica blažeg treninga (npr. prvi trening sa polovinom težine, drugi sa dvije trećine). Tijelu daje vrijeme za popravku i psihološki reset. Tipično svakih ~5 sedmica, ovisno o tvojoj genetskoj regeneraciji i predispoziciji za stres."
     }
    ]
   },
   {
    "title": "Ishrana za sportiste",
    "items": [
     {
      "q": "Kako je sportski izvještaj povezan sa izvještajem o ishrani?",
      "a": "Oni se dopunjuju. Sportski izvještaj pokazuje tvoj profil sposobnosti, rizik od povreda i regeneraciju. Izvještaj o ishrani govori ti koja mješavina goriva (masti/ugljikohidrati/proteini) i koji suplementi podržavaju taj profil."
     },
     {
      "q": "Treba li da uzimam proteinski prah?",
      "a": "Ne nužno. Ako pravom hranom pokrivaš 1,6-2,0 g proteina po kilogramu tjelesne težine i dobro se oporavljaš između treninga, prah nije potreban. Ako ti je teško dostići te brojke, kvalitetan proteinski prah može olakšati unos."
     }
    ]
   }
  ]
 },
 "tx-report-en": {
  "videoSegmentTitles": [
   "Detoksikacija — kancerogene materije",
   "Detoksikacija — hemikalije i teški metali",
   "Slobodni radikali (oksidativni stres)",
   "Selen"
  ]
 },
 "bo-report-en": {
  "videoSegmentTitles": [
   "Burnout — individualni pristup stresu"
  ]
 },
 "bo-faq-en": {
  "faqGroups": [
   {
    "title": "Genetska osnova stresa",
    "items": [
     {
      "q": "Šta je gen COMT i zašto je važan?",
      "a": "COMT (katehol-O-metiltransferaza) razgrađuje neurotransmiter dopamin kada se uzbudljiva ili stresna situacija završi, kako bi mozak mogao da se vrati u osnovno stanje. Ako gen slabo funkcioniše, dopamin se razgrađuje mnogo sporije: mozak duže ostaje u stanju pobuđenosti, a ako novi stres naiđe pre nego što se on vrati u osnovno stanje, može da dođe do preopterećenja. Sporija razgradnja ima i dobre strane — pozitivna osećanja se doživljavaju intenzivnije i takvi ljudi su obično radoznaliji, ali i skloniji kockanju. Studije opisuju čestu varijantu (Val158Met) kod koje se aktivnost enzima jasno razlikuje između brzog i sporog oblika."
     },
     {
      "q": "Koje tri osobine procenjuje analiza burnouta?",
      "a": "Učinak pod stresom (koliko dobro funkcionišeš u stresnim situacijama), emocionalna otpornost (koliko te opterećuju negativna osećanja) i impulsivnost. Svaka osobina je prikazana na skali od crvene zone preko sredine do zelene: zelena je povoljna, a crvena znači veći rizik od burnouta."
     },
     {
      "q": "Koliko je ljudi genetski posebno podložno stresu?",
      "a": "Oko 40% ljudi ima dve kopije gena COMT koje dobro funkcionišu: oni obično imaju bolji učinak pod stresom i veću emocionalnu otpornost, a manje su impulsivni. Oko 15% ima dve defektne kopije, sa upravo suprotnim efektom — to su oni koji najviše pate pod stresom. Preostalih ~45% ima jednu funkcionalnu i jednu defektnu kopiju."
     }
    ]
   },
   {
    "title": "Praktični saveti",
    "items": [
     {
      "q": "Imam dve defektne kopije gena COMT — da li je burnout neizbežan za mene?",
      "a": "Ne. Nepovoljniji COMT profil povećava osetljivost na stres, ali nije sudbina. Što su geni nepovoljniji, to je pravi način života važniji: meditacija, život sa što manje stresa, ishrana i fizička aktivnost. Kada znaš svoju predispoziciju, možeš da reaguješ na vreme, pre nego što se stres nagomila."
     },
     {
      "q": "Kod mene su sve tri osobine u zelenoj zoni — da li ipak treba da razmišljam o burnoutu?",
      "a": "Za tebe burnout nije tako velika opasnost — ali rizik nije nula: snažan, neprekidan stres vremenom i dalje može da ostavi posledice. Faze oporavka i uravnotežen način života ostaju važni."
     },
     {
      "q": "Šta pomaže svima, bez obzira na genotip?",
      "a": "Mere koje preporučuje izveštaj — meditacija, život sa malo stresa, uravnotežena ishrana i redovna fizička aktivnost — pomažu svakome da smanji stres; samo su utoliko važnije što je genetski profil nepovoljniji. Često se preporučuju i dovoljno sna, društveni kontakti i umeren unos kofeina i alkohola."
     }
    ]
   },
   {
    "title": "Šta uraditi sa rezultatom",
    "items": [
     {
      "q": "U mom izveštaju se pojavila „crvena zona“. Da li treba da brinem?",
      "a": "Nema razloga za paniku, ali ima razloga da nešto preduzmeš. Crvena zona označava nepovoljnu genetsku predispoziciju u jednoj određenoj oblasti — veći rizik od burnouta, a ne dijagnozu. Što je više tvojih osobina u crvenoj zoni, to je važnije da način života prilagodiš tako da izbegavaš stres. I kod rezultata u sredini život sa malo stresa ostaje važan."
     },
     {
      "q": "Gde mogu da pronađem konkretne preporuke za svoj genotip?",
      "a": "U izveštaju o burnoutu — on sadrži preporuke o meditaciji, načinu života sa malo stresa, ishrani i fizičkoj aktivnosti, prilagođene tvom genetskom profilu stresa."
     }
    ]
   }
  ]
 },
 "ba-report-en": {
  "videoSegmentTitles": [
   "Proces starenja"
  ]
 },
 "ba-faq-en": {
  "faqGroups": [
   {
    "title": "Osnove — telomere i starenje",
    "items": [
     {
      "q": "Šta su telomere i zašto su važne za starenje?",
      "a": "Telomere su zaštitne kapice na kraju svakog hromozoma — same ne sadrže gene, ali štite gene od gubitka tokom deoba ćelija. Pri svakoj deobi ćelije odlomi se mali komadić telomera. Posle 50 do 70 deoba one su potrošene; ćelija prelazi u režim spavanja (senescencija), a takve „stare ćelije“ se nagomilavaju u telu."
     },
     {
      "q": "Koja je razlika između hronološke i biološke starosti?",
      "a": "Hronološka starost je vreme proteklo od tvog rođenja, izraženo u godinama — ona je fiksna i nepromenljiva. Biološka starost opisuje koliko su tvoje ćelije zaista „stare“, a telomere su jedan od faktora koji na to utiču: bebe imaju duge telomere, a devedesetogodišnjaci kratke. Ljudi sa dve defektne kopije gena za telomerazu već se rađaju sa kraćim telomerama — razlika u biološkoj starosti može da iznosi i do 20 godina."
     },
     {
      "q": "Šta radi telomeraza?",
      "a": "Gen za telomerazu pomaže u održavanju telomera. Ne može potpuno da zaustavi niti da poništi njihovo skraćivanje, ali ga usporava: kada geni dobro funkcionišu, telomere se sa godinama sporije skraćuju; kod defekta gena brže se gube. Koliko dobro ova zaštita funkcioniše delimično je genetski određeno — i upravo to analiza posmatra."
     },
     {
      "q": "Koji geni se procenjuju u analizi?",
      "a": "Analiza posmatra dve stvari: prvo, tvoju genetsku sposobnost da održavaš telomere, koja uglavnom zavisi od gena za telomerazu; drugo, da li mediteranska ishrana utiče na tvoje telomere, što takođe zavisi od određenih genskih varijanti. Ona pokazuje tvoju genetsku predispoziciju — a ne koliko su tvoje telomere zaista duge."
     }
    ]
   },
   {
    "title": "Šta postiže način života",
    "items": [
     {
      "q": "Da li mediteranska ishrana kod svih pomaže u održavanju telomera?",
      "a": "Iznenađujuće, ne. Studije su pokazale da mediteranska ishrana pomaže da se telomere održe dužim samo kod ljudi sa određenim genskim varijantama — kod svih ostalih nema efekta na telomere. Tvoj izveštaj pokazuje kojoj grupi pripadaš. To se odnosi samo na telomere, a ne i na druge efekte ove ishrane — i ujedno je jasan primer da isti savet o načinu života ne deluje jednako kod svih."
     },
     {
      "q": "Koji nutrijenti podržavaju telomere?",
      "a": "Vitamin D3, omega-3, vitamin E, resveratrol i ginko. Kada genetski sistem zaštite slabije funkcioniše, veći unos ovih nutrijenata — na primer tako što jedeš više namirnica koje ih sadrže — može da pomogne da se skraćivanje telomera uspori. Ti nutrijenti ne mogu da ponište skraćivanje."
     },
     {
      "q": "Mogu li da utičem na slobodne radikale?",
      "a": "Da, do određene mere. Slobodni radikali neprestano oštećuju naše ćelije i jedan su od razloga zašto starimo. Antioksidansi deluju protiv toga; ima ih, na primer, u namirnicama bogatim vitaminom C i vitaminom E, a u antioksidanse spadaju i polifenoli iz bobičastog voća i čaja. Ishrana bogata antioksidansima zato može da podrži zdravo starenje."
     }
    ]
   },
   {
    "title": "Uticaj i očekivanja",
    "items": [
     {
      "q": "Koliko brzo ću videti rezultate anti-aging mera?",
      "a": "Ne preko noći. Preporučene mere ne mogu da vrate izgubljenu dužinu telomera — one pomažu da se njihovo skraćivanje uspori, pa se korist postepeno sabira tokom mnogo godina. Imaj u vidu da genetska analiza pokazuje tvoju predispoziciju, a ne trenutnu dužinu tvojih telomera, pa se sam rezultat analize ovim merama ne menja."
     },
     {
      "q": "Kakvu praktičnu korist mi donosi ovo znanje?",
      "a": "Znaš koliko dobro tvoji geni održavaju telomere — i da li ti mediteranska ishrana u tome pomaže. Ako je održavanje telomera oslabljeno, možeš ciljano da reaguješ tako što ćeš povećati unos vitamina D3, omega-3, vitamina E, resveratrola i ginka, na primer kroz namirnice koje ih sadrže. Pored toga, ima smisla i zdrav način života uopšte: ishrana bogata antioksidansima, redovna fizička aktivnost i dovoljno sna."
     }
    ]
   }
  ]
 },
 "supp-faq-en": {
  "faqGroups": [
   {
    "title": "Osnove — zašto personalizirano?",
    "items": [
     {
      "q": "Zašto mi je uopšte potrebna personalizirana suplementacija?",
      "a": "Zato što tvoje tijelo genetski neke nutrijente iskorištava bolje ili lošije od druge osobe — i zato što tvoj način života (kretanje, san, stres, ishrana) dodatno oblikuje tvoju individualnu potrebu. Standardne pilule polaze od „prosječne osobe“ i zato mnoge individualne potrebe pokrivaju ili premalo ili previše."
     },
     {
      "q": "Koja je razlika u odnosu na standardne multivitamine iz drogerije?",
      "a": "Tri glavne tačke: (1) izbor nutrijenata i njihovo doziranje prilagođeni su tvojim genima; (2) oslobađanje je vremenski usklađeno (npr. Slow-Release vitamin C) kako bi nivoi u krvi ostali konstantni; (3) nutrijenti koji se međusobno takmiče, poput kalcija i cinka, oslobađaju se prostorno i vremenski odvojeno kako se ne bi blokirali."
     },
     {
      "q": "Koliko gena razmatra analiza?",
      "a": "Preko 60 genskih varijanti relevantnih za nutrijente — među njima geni metabolizma vitamina (folat-MTHFR, vitamin D-VDR, vitamin B12-FUT2), geni apsorpcije minerala (željezo-HFE, kalcij-LCT) i antioksidativni odbrambeni sistemi (GST, SOD, CAT)."
     }
    ]
   },
   {
    "title": "Microtransporter tehnologija",
    "items": [
     {
      "q": "Šta su Microtransporteri?",
      "a": "Microtransporteri su sićušne pelete veličine milimetra, od kojih svaka nosi pojedinačne nutrijente u posebnim zaštitnim omotačima. Svaki Microtransporter „oslobađa“ svoj sadržaj u drugo vrijeme i na drugom mjestu u probavnom traktu — tako se čak i nutrijenti koji se inače takmiče mogu uzeti zajedno, a apsorbirati odvojeno."
     },
     {
      "q": "Zašto se vitamin C oslobađa kao slow-release?",
      "a": "Vitamin C ima vrlo kratko biološko poluvrijeme (~30 minuta). Jedna visoka doza se najvećim dijelom neiskorištena izluči. Slow-Release u Microtransporterima oponaša prirodan, kontinuiran unos iz hrane tokom dana i održava nivoe u krvi stabilnima — fiziološki mnogo smislenije."
     },
     {
      "q": "Kako to funkcioniše sa kalcijem i cinkom koji se međusobno blokiraju?",
      "a": "Kalcij i cink se takmiče za iste transportere u crijevu — kada se uzmu zajedno, apsorbira se manje i jednog i drugog. U Microtransporter tehnologiji cink se odmah oslobađa u gornjem dijelu tankog crijeva, a kalcij satima kasnije u dubljem dijelu crijeva. Oba se uzimaju odjednom, ali se oslobađaju na različitim mjestima i u različito vrijeme — bez konkurencije."
     }
    ]
   },
   {
    "title": "Praktična pitanja",
    "items": [
     {
      "q": "Moram li uzimati pilule u tačno određeno vrijeme?",
      "a": "Preporučujemo ustaljeno doba dana (npr. uz doručak) kako bi nivoi u krvi ostali stabilni. Ne moraš gledati na minutu — dovoljna je okvirna rutina. Najvažnije je da ih uopšte uzimaš redovno."
     },
     {
      "q": "Koliko brzo ću primijetiti učinak?",
      "a": "Zavisi od nutrijenta. Neki učinci (npr. bolja energija uz vitamine B grupe) javljaju se za nekoliko dana do sedmica; drugi (npr. metabolizam kostiju uz vitamin D) razvijaju se mjesecima. Personalizirana suplementacija nije brzodjelujući lijek — ona ispravlja dugoročne praznine u opskrbi nutrijentima."
     },
     {
      "q": "Treba li mi suplementacija zauvijek?",
      "a": "Kod genetski uzrokovanih slabosti metabolizma da, jer predispozicija traje cijeli život. Potrebe uslovljene načinom života (npr. povećana potreba tokom stresa, vježbanja, bolesti) mogu se mijenjati. Analiza ti također pokazuje gdje tvoja genetika stvara trajno povišenu potrebu, a gdje je dovoljna sama prilagodba načina života."
     },
     {
      "q": "Mogu li kombinovati suplementaciju s lijekovima?",
      "a": "Načelno da — svi nutrijenti su dozirani u količinama tipičnim za hranu. Kod hronične bolesti ili dugotrajne terapije lijekovima to bi trebalo dogovoriti sa svojim ljekarom, jer pojedini nutrijenti (npr. vitamin K, željezo) mogu stupiti u interakciju s određenim lijekovima."
     },
     {
      "q": "Kako se cijena personalizirane suplementacije odnosi prema multivitaminima iz drogerije?",
      "a": "Znatno je viša po danu — tipično 3-5× više od najjeftinijih drogerijskih proizvoda. Zauzvrat dobijaš genetski prilagođen sastav koji se vjerovatno zaista i apsorbira, umjesto da se najvećim dijelom neiskorišten izluči. Poređenje „po miligramu vitamina“ je varljivo; „po miligramu koji zaista dođe do krvi“ je smislenije."
     }
    ]
   }
  ]
 },
 "beauty-faq-en": {
  "faqGroups": [
   {
    "title": "Osnove — šta radi genetska analiza kože",
    "items": [
     {
      "q": "Šta je genetska analiza kože (DNAbeauty Control)?",
      "a": "Analiza tvojih gena s fokusom na područja relevantna za kožu: razgradnja kolagena, UV osjetljivost, pigmentacija, hidratacija kože, antioksidativna odbrana i sklonost upalama. Iz tvog DNK skupa podataka procjenjuje se preko 20 genskih varijanti relevantnih za kožu i prevodi u praktične preporuke za njegu i zaštitu."
     },
     {
      "q": "Koja je razlika u odnosu na kozmetičku analizu kože?",
      "a": "Kozmetičke analize kože mjere trenutno stanje tvoje kože — hidrataciju, sebum, pigmentaciju itd. — i reaguju na njega. Genetska analiza kože pokazuje ti koja su svojstva i slabosti TRAJNO usidreni u tvojim genima. Možeš proaktivno sprječavati umjesto da reaktivno liječiš kada problemi već postanu vidljivi."
     },
     {
      "q": "Koliko se gena analizira?",
      "a": "Preko 20 genskih varijanti relevantnih za kožu. Glavna područja: MMP1 (razgradnja kolagena, bore), MC1R (UV osjetljivost, pigmentacija), FLG (filagrin, hidratacija kože / barijera), SOD2/CAT/GPX (antioksidativna odbrana), geni upale poput IL6 i TNF-α."
     },
     {
      "q": "Koliko dugo važi moj rezultat?",
      "a": "Tvoji geni se ne mijenjaju tokom života — pa ključni rezultati ostaju trajno važeći. Ono što se dorađuje jeste sama procjena, jer se nova istraživanja kontinuirano ugrađuju."
     }
    ]
   },
   {
    "title": "Genetika i starenje kože — razumijevanje rezultata",
    "items": [
     {
      "q": "Šta znači „aktivna“ MMP1 varijanta?",
      "a": "MMP1 (matriks metaloproteinaza 1) razgrađuje kolagen u koži. Genetski vrlo aktivna varijanta vodi ka bržoj razgradnji kolagena — koža ranije gubi čvrstoću, bore nastaju brže. Protumjere: dosljedna UV zaštita, antioksidansi, nepušenje, retinoidi ili njega na bazi peptida."
     },
     {
      "q": "Šta mi MC1R govori o UV osjetljivosti?",
      "a": "MC1R kontroliše proizvodnju eumelanina (tamni pigment, štiti od UV zračenja) naspram feomelanina (crvenkasti pigment, koji pod UV zračenjem stvara slobodne radikale). Nepovoljne varijante: brže izgaranje na suncu, veći rizik od UV oštećenja i raka kože — potrebna je stroža disciplina u zaštiti od sunca."
     },
     {
      "q": "Zašto je FLG (filagrin) važan za moju njegu kože?",
      "a": "FLG proizvodi filagrin, protein koji drži prirodnu kožnu barijeru na okupu i veže vlagu. Kod genetski smanjene aktivnosti FLG kožna barijera je slabija — vlaga se brže gubi, a iritansi lakše prodiru. Preporuka: njega koja jača barijeru (ceramidi, holesterol, slobodne masne kiseline), blaga sredstva za čišćenje, bez isušujućih tenzida."
     },
     {
      "q": "Utiče li to zaista mjerljivo na moj izgled?",
      "a": "Da, ali ne preko noći. Genetske slabosti se zbrajaju tokom godina. Dvije osobe iste dobi mogu se biološki razlikovati za 10-15 godina — ovisno o tome koliko dobro načinom života kompenzuju genetske slabe tačke."
     }
    ]
   },
   {
    "title": "Praktične preporuke i očekivanja",
    "items": [
     {
      "q": "Koliko brzo ću primijetiti učinak personalizirane njege?",
      "a": "Neki učinci javljaju se za nekoliko sedmica (hidratacija, sjaj, iritacije), drugi tek nakon mjeseci do godina (nastanak bora, pigmentacija, struktura kože). Personalizirana njega nije brzo rješenje, nego dugoročna strategija zaštite."
     },
     {
      "q": "Trebaju li mi skupe kreme?",
      "a": "Ne nužno. Važni su pravi sastojci za tvoju genetsku predispoziciju — a oni postoje u svakom cjenovnom rangu. Ono što se računa: koncentracija aktivnih sastojaka, formulacija i dosljednost primjene. Pristupačan serum sa vitaminom C može nadmašiti skupu kremu bez aktivnih sastojaka."
     },
     {
      "q": "Je li moj način života važniji od mojih gena?",
      "a": "Oboje djeluje zajedno. Geni postavljaju potencijal i slabe tačke — način života odlučuje koliko te slabe tačke kompenzuješ ili pojačavaš. Pravilo palca: kod genetski nepovoljne predispozicije dosljedan način života postaje još važniji nego kod „sretnih gena“."
     }
    ]
   }
  ]
 },
 "legal-basics-en": {
  "articleSections": [
   {
    "title": "Oglašavanje Novogenia proizvoda",
    "paragraphs": [
     "Novogenia je na samom vrhu naučnih mogućnosti i nudi etablirane analitičke postupke poput krvnih testova, ali i napredne mogućnosti poput genskih analiza i personalizovanih proizvoda. Budući da poslujemo u zdravstvenom sektoru, postoje stroga pravila za reklamne tvrdnje kojih se moramo pridržavati. Naročito u Njemačkoj postoje udruženja za opomene koja traže nejasne ili obmanjujuće izjave i izdaju opomene.",
     "Čvrsto smo uvjereni da su naše preporuke djelotvorne i da uzimaju u obzir najnapredniji nivo nauke. Nažalost, ono što proizvod može učiniti i ono što se smije tvrditi u oglašavanju ponekad su dvije različite stvari."
    ]
   },
   {
    "title": "Oglašavanje krvnim testovima",
    "paragraphs": [
     "Krvni testovi su dobro etablirani i podliježu tek manjim ograničenjima u oglašavanju. Sve izjave navedene ispod su nekritične."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "„Testiramo krv.“"
     },
     {
      "tone": "safe",
      "text": "„Dijagnostikujemo manjkove.“"
     },
     {
      "tone": "safe",
      "text": "„Dajemo preporuke za mikronutrijente i ishranu.“"
     },
     {
      "tone": "safe",
      "text": "„Na osnovu rezultata personalizujemo suplemente.“"
     },
     {
      "tone": "safe",
      "text": "Simptomi manjka (npr. umor zbog nedostatka željeza) — najbolje uz navođenje izvora (npr. ljekarskog udruženja)."
     },
     {
      "tone": "safe",
      "text": "Preporuka kupca: „Često sam bio umoran, test je otkrio nedostatak željeza i to mi je pomoglo“ — dozvoljeno."
     }
    ]
   },
   {
    "title": "Oglašavanje genskim testovima",
    "paragraphs": [
     "DNK analize još nisu standardna metoda u svakoj ljekarskoj ordinaciji. Udruženja za opomene kritički ispituju tehnologije koje većina stručnjaka još ne smatra standardnom praksom. DNK analiza je zbog toga pod posebnim nadzorom.",
     "Sa stanovišta udruženja za opomene, DNK analiza ima dvije komponente: naučno validiranu analizu genetskih osobina (nekritično) i program djelovanja koji se iz nje izvodi (kritično)."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "Utvrđivanje genetskih osobina — potkrijepljeno aktuelnom naukom."
     },
     {
      "tone": "critical",
      "text": "Konkretne preporuke za ishranu, vježbanje ili suplemente izvedene iz gena — bez specifičnih randomizovanih studija upravo o toj preporuci."
     }
    ],
    "callout": {
     "tone": "safe",
     "text": "Primjer: „Genski test dokazuje da je folna kiselina za tebe nedjelotvorna“ — dozvoljeno (potkrijepljeno studijama)."
    }
   },
   {
    "title": "Sigurna varijanta — samo genetske osobine",
    "paragraphs": [
     "Sigurna varijanta se ograničava na izjave o utvrđenim genetskim osobinama — bez izvođenja konkretnih preporuka za djelovanje. Sve formulacije navedene ispod su nekritične sa stanovišta udruženja za opomene."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "„Analiziramo tvoje gene i utvrđujemo da li se lakše debljaš od masti ili od ugljikohidrata.“"
     },
     {
      "tone": "safe",
      "text": "„Saznaješ reaguješ li više na vježbanje ili na smanjenje kalorija.“"
     },
     {
      "tone": "safe",
      "text": "„Saznaješ može li tvoje tijelo učinkovito aktivirati folnu kiselinu.“"
     },
     {
      "tone": "safe",
      "text": "„Saznaješ koje talente tvoje tijelo ima u takmičarskom sportu i koliko dobro tvoji mišići reaguju na trening sa opterećenjem.“"
     }
    ]
   },
   {
    "title": "Hrabrija varijanta — preporuke uz ogradu",
    "paragraphs": [
     "U ovoj varijanti test se oglašava kao gore — ali se preporuke za djelovanje prenose kao logični zaključci, a ne kao naučno potvrđena obećanja. Uz ogradu. Napomena: udruženja za opomene ne prihvataju uvijek ograde."
    ],
    "bullets": [
     {
      "tone": "caveat",
      "text": "„Analiziramo tvoje gene i utvrđujemo da li se lakše debljaš od masti ili od ugljikohidrata. Na osnovu toga izvodimo logične zaključke i planove ishrane kako bi taj uvid mogao iskoristiti.*“"
     },
     {
      "tone": "caveat",
      "text": "„Saznaješ može li tvoje tijelo aktivirati folnu kiselinu. Na osnovu toga preporučujemo alternativne mikronutrijente koje možeš uzimati umjesto nje.*“"
     },
     {
      "tone": "critical",
      "text": "PROTUPRIMJER: „Uzimaj metilfolat umjesto folne kiseline“ — kritično bez ograde, jer ne postoji randomizovana studija upravo o toj konkretnoj preporuci."
     }
    ],
    "callout": {
     "tone": "caveat",
     "text": "* Napomena uz ogradu: Genetske osobine su naučno potvrđene. Iz njih izvedene prilagodbe doziranja mikronutrijenata ili preporuka za ishranu za mnoge učinke još nisu na nivou zlatnog standarda (randomizovane, placebom kontrolisane studije) i treba ih shvatiti kao eksperimentalne."
    }
   },
   {
    "title": "Oglašavanje personalizirane suplementacije",
    "paragraphs": [
     "Evropska unija je uspostavila jasan regulatorni okvir za tvrdnje o učinku suplemenata — takozvane „Health Claims“. One tačno definišu koji se učinci smiju oglašavati za svaku aktivnu supstancu.",
     "Bez obzira na to koliko nauke stoji iza nekog učinka, nije ga dozvoljeno promovisati u oglašavanju dok EFSA ne odobri odgovarajući Health Claim. Drži se opsežne liste dozvoljenih tvrdnji."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "Personalizacija na osnovu životnog stila i krvnih vrijednosti — bez problema."
     },
     {
      "tone": "caveat",
      "text": "Personalizacija na osnovu genetske analize — samo uz ogradu (vidi „hrabriju varijantu“)."
     },
     {
      "tone": "safe",
      "text": "Primjer zdravstvene tvrdnje: „Doprinosi normalnom stanju kože“ (uz cink), „Doprinosi normalnom radu imunološkog sistema“."
     },
     {
      "tone": "safe",
      "text": "Primjer preporuke kupca: „Uzimam to jer imam suhu kožu“ — u kombinaciji sa Health Claim za cink — dozvoljeno."
     },
     {
      "tone": "critical",
      "text": "NIJE dozvoljeno: svaka tvrdnja čiji Health Claim EFSA nije odobrila (npr. „liječi vašu bolest“)."
     }
    ]
   },
   {
    "title": "Recenzije i preporuke kupaca",
    "paragraphs": [
     "Ako nudiš sistem za recenzije kupaca (npr. na svojoj web stranici), ne možeš kontrolisati hoće li kupac iznijeti nedozvoljenu izjavu (npr. „Proizvod X me je izliječio“). To je u načelu dozvoljeno, ali se s tim mora pažljivo postupati."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "Na vlastitom sistemu koji dozvoljava moderaciju: jasno označi izjave kao mišljenja kupaca i naznači da ih ne prisvajaš kao svoja."
     },
     {
      "tone": "safe",
      "text": "Izjave koje krše Uredbu o zdravstvenim tvrdnjama (Health Claims) treba obrisati."
     },
     {
      "tone": "safe",
      "text": "Kod izrazito pogrešne ocjene: dodaj korektivni odgovor firme."
     },
     {
      "tone": "caveat",
      "text": "Na eksternim sistemima koji ne dozvoljavaju moderaciju: jasno ih deklariši i nikada selektivno ne promoviši netačne izjave."
     },
     {
      "tone": "critical",
      "text": "Aktivno promovisanje ili isticanje netačnih izjava — čak i kada su to glasovi kupaca."
     }
    ]
   }
  ]
 }
}
/* END FAQTX */
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
  /* FAQ/Artikel/Segment-Titel */
  const ftx = FAQTX[en.id]
  if (ftx) {
    if (ftx.faqGroups) c.faqGroups = clone(ftx.faqGroups)
    if (ftx.articleSections) c.articleSections = clone(ftx.articleSections)
  }
  if (en.youtubeId) { const v = vid(en.youtubeId); if (v) c.youtubeId = v; else delete c.youtubeId }
  if (en.videoSegments && en.videoSegments.length) {
    const segTitles = (FAQTX[en.id] || {}).videoSegmentTitles || []
    c.videoSegments = en.videoSegments.map((s, i) => { const v = vid(s.youtubeId); return v ? { ...clone(s), youtubeId: v, title: segTitles[i] || s.title } : null }).filter(Boolean)
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
