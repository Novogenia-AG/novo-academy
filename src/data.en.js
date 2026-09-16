/* English translations of all NOVO ACADEMY courses.
   Mirrors data.js — same 22 courses, each with `lang: 'en'` and a fresh
   UID. Categories and topic labels are translated to English.

   Video IDs come from the Novogenia English YouTube channel content
   (Playlist_Genetic_Test_Consultation_Training_ENGLISH + 170-video list).
   Where no English equivalent video exists, `youtubeId` is omitted and the
   course becomes content-only until an English recording is available.

   Exception — AI lip-sync: the four burnout and biological-age courses
   (bo-sci-en, bo-report-en, ba-sci-en, ba-report-en) have no English
   recording. They get AI lip-sync versions (HeyGen) of the German original
   videos instead and carry `aiDub: true`, so the app shows the AI disclosure
   (Art. 50(4) EU AI Act). Their YouTube IDs are added after the upload; until
   then these courses show the “Video coming soon” placeholder. Their tests
   are based on the content of the German originals, not on the older EN
   drafts. */

// T helper — same numbered-thumbnail helper as data.js
const T = (n) => `/thumbnails/${String(n).padStart(2, '0')}.jpg`

/* ---- English category labels (must match the keys used in MAIN_CATEGORIES_EN) ---- */
export const CATEGORIES_EN = {
  WEIGHT: 'The Gene-Diet',
  NUTRITION: 'Eat Healthy by Your Genes',
  PERFORMANCE: 'Athletic Performance',
  DETOX: 'Detoxification',
  BURNOUT: 'Burnout and Stress',
  BIOAGE: 'Biological Age',
  SUPP: 'Personalized Supplementation',
  BEAUTY: 'Healthy Skin and Appearance',
  PHARMA: 'Drug Intolerance',
  LEGAL: 'Legally Safe Advertising with Products',
}

export const TOPIC_WB_EN     = 'Scientific Basis'
export const TOPIC_REPORT_EN = 'Consultation Training'
export const TOPIC_FAQ_EN    = 'Frequently Asked Questions'

export const COURSES_EN = [

  /* ======== Weight Management ======== */
  {
    id: 'wm-sci-en',
    uid: 'e8c9a2f1-3b4d-4567-8901-2345abcdef01',
    lang: 'en',
    category: CATEGORIES_EN.WEIGHT,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'How genetics determines weight gain, exercise response, and the right diet — explained scientifically.',
    longDescription:
      'In this training, Dr. Daniel Wallerstorfer explains why people gain weight differently from the same calories, why exercise works wonders for some and not for others, and how genetic variants in fat vs. carb metabolism shape the right diet strategy.',
    bullets: [
      'Why the same calories affect people differently',
      'Carb-sensitive vs. fat-sensitive genotypes',
      'Exercise responders vs. non-responders',
      'Personalized diet strategy from genetics',
    ],
    thumbnail: '/thumbnails/course-nutrition.jpg',
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'Why do some people gain weight on carbs, others on fat?',
      'Why does exercise work for some but not others?',
      'How do we identify the right diet strategy from genes?',
      'What is the Jo-Yo Effect and how is it genetic?',
    ],
    brandNoticeAboveVideos: true,
    youtubeId: 'p02EmbTNRqE',
    postVideoText:
      'With this background you can discuss the science behind the Gene-Diet with your clients, distinguish carb-sensitive from fat-sensitive genotypes, and explain why a personalized strategy outperforms generic advice.',
    questions: [
      {
        q: 'Why do two people on the same calorie surplus gain weight at different rates?',
        options: [
          'It is purely a matter of willpower',
          'Genetic variants (e.g. FABP2, PPARG, FTO) change how efficiently fat and carbs are stored — the same calories translate into different amounts of body fat',
          'Hydration is the only factor',
          'There is no real difference',
        ],
        correct: 1,
      },
      {
        q: 'How much does the response to exercise genetically vary between individuals?',
        options: [
          'Not at all — exercise works equally for everyone',
          'By roughly a factor of 2-3 — some people are strong exercise-responders, others are non-responders',
          'By up to 50 times',
          'Only by 5%',
        ],
        correct: 1,
      },
      {
        q: 'A client is genetically a strong carb-sensitive type. Which strategy fits?',
        options: [
          'Standard low-fat diet for everyone',
          'Eat as many carbs as possible',
          'Lower carb share, higher protein, moderate good fats — and match the carb load to the exercise day',
          'Skip both fat and carbs',
        ],
        correct: 2,
      },
      {
        q: 'What is the Yo-Yo effect and why is it partly genetic?',
        options: [
          'A toy that affects metabolism',
          'The pattern of regaining weight after a diet — some people have genetic variants (e.g. in adiponectin / leptin pathways) that increase appetite rebound and slow basal metabolism after weight loss',
          'A purely behavioural issue with no biology',
          'Something only women experience',
        ],
        correct: 1,
      },
      {
        q: 'Why does a personalized program outperform standard advice?',
        options: [
          'It uses more expensive ingredients',
          'A Novogenia pilot study (139 participants) showed a 2.4× higher weight-loss success with genetic personalization versus standard counselling — because the strategy actually matches the underlying biology',
          'It works only on paper',
          'It is identical to standard advice',
        ],
        correct: 1,
      },
    ],
    hasDownload: true, hasText: false,
    documents: [
      // Slides + sample reports exist only in German — hidden in EN until translated.
      {
        title: 'NovoAcademy Science PDF - 2.4× More Weight Loss with Genetic Program',
        size: '610 KB',
        type: 'pdf',
        url: '/course-materials/scientific-reviews/Genetic_Weight_Loss_Study_2,4x.pdf',
      },
    ],
    brandNoticeAboveDownloads: true,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Gene-Diet — Consultation Training (multi-video) ===== */
  {
    id: 'wm-report-en',
    uid: 'a2b3c4d5-e6f7-4890-1234-5678abcdef02',
    lang: 'en',
    category: CATEGORIES_EN.WEIGHT,
    topic: TOPIC_REPORT_EN,
    contentType: 'course',
    description: 'Walk through the genetic weight-management report chapter by chapter with your client.',
    longDescription:
      'This consultation training shows how to walk through the genetic weight-management report with your client. From nutritional type and exercise response through hunger/satiety, fat distribution and Jo-Yo effect, every chapter is explained with practical client examples.',
    bullets: [
      'Walk through the genetic report chapter by chapter',
      'Explain different result types (fat/carb sensitivity, exercise response, diet strategy)',
      'Apply daily menus, recipes, and food lists',
      'Answer typical client questions confidently',
    ],
    thumbnail: '/thumbnails/wm-report-cover.jpg',
    introQuestionsHeader: 'In this training you will learn:',
    introQuestions: [
      'How the report is structured and how to walk through it with clients',
      'How to explain fat and carb sensitivity in plain language',
      'How to interpret exercise response and diet strategy',
      'How daily menus, food list, and personalized recipes are used',
    ],
    brandNoticeAboveVideos: true,
    videoSegments: [
      { title: 'Introduction', youtubeId: 'mJ5joZYBtmk' },
      { title: 'Weight Analysis — Nutritional Type', youtubeId: 'iDJz6WEHLOw' },
      { title: 'Weight Analysis — Exercise and Calorie Type', youtubeId: 'sI73pZ0bPF4' },
      { title: 'Understanding the Science Tables', youtubeId: 'Fd8renx2EwE' },
      { title: 'Weight Analysis — Muscle Mass Loss', youtubeId: '1UFjgQppgMA' },
      { title: 'Weight Analysis — Hunger and Satiety', youtubeId: '2HgTRooIjaU' },
      { title: 'Weight Analysis — Fat Distribution', youtubeId: 'Ky-yFxo7lEs' },
      { title: 'Weight Analysis — Yo-Yo Effect', youtubeId: 'TSoBij5Drn4' },
      { title: 'Weight Analysis — Food List', youtubeId: 'BJ0sWv3bpVs' },
      { title: 'Weight Analysis — Food Item System', youtubeId: 'KhwgUetPahI' },
      { title: 'Weight Analysis — Exercise Tables', youtubeId: 'QCgqCo4Qqfk' },
      { title: 'Concluding Remarks', youtubeId: '425Pv9mfFmk' },
    ],
    postVideoText:
      'With this training you are ready to walk through the genetic report with your clients. The demo booklets below can serve as example reports for your own consultation practice.',
    questions: [
      {
        q: 'What do the weight icons in the food list show?',
        options: [
          'Whether the food is healthy in general',
          'Whether the macronutrient distribution (fat, carbs, protein) is favourable (green) or unfavourable (red) for your individual weight goal — also taking into account the calories per typical portion',
          'Only the calorie content',
          'Only the protein share',
        ],
        correct: 1,
      },
      {
        q: 'Are red-rated foods completely forbidden?',
        options: [
          'Yes — never eat them',
          'No — red foods should be the exception. Strongly red (4-6 icons) only rarely; mildly red (1-3 icons) more often. The goal is balance, not perfection.',
          'Yes, but only on weekdays',
          'Only for women',
        ],
        correct: 1,
      },
      {
        q: 'A client is a strong "exercise non-responder" (low ACE / ACTN3 response). What is the right advice?',
        options: [
          'Exercise is generally useless — give it up',
          'The main weight-loss lever is nutrition / calorie management. Exercise stays valuable for health and muscle preservation but is not the main weight-loss tool for this client',
          'Triple the training volume — eventually it must work',
          'Switch to only marathon running',
        ],
        correct: 1,
      },
      {
        q: 'A client of Asian descent (frequent ALDH2 defect) drinks 1-2 glasses of wine per week and asks if it is dangerous. Best answer?',
        options: [
          'No issue, drink as much as you like',
          'It is best to keep alcohol very low: in ALDH2 carriers the toxic acetaldehyde accumulates noticeably, raising long-term cancer risk on chronic consumption. Occasional small amounts are tolerable; daily intake is to be avoided',
          'Increase alcohol — it will train the enzyme',
          'Alcohol does not interact with genetics at all',
        ],
        correct: 1,
      },
      {
        q: 'How would you explain the "Yo-Yo effect" to the client based on the genetic report?',
        options: [
          'Lack of willpower — nothing more',
          'A genetic predisposition for stronger appetite rebound and slower basal metabolism after weight loss; the client benefits from gradual, stable diet change instead of crash diets',
          'A bug in the report',
          'Only affects people over 60',
        ],
        correct: 1,
      },
    ],
    // Demo reports exist only in German — hidden in EN until translated.
    documents: [],
    hasDownload: false, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Gene-Diet — FAQ ===== */
  {
    id: 'wm-faq-en',
    uid: 'b3c4d5e6-f7a8-4901-2345-6789abcdef03',
    lang: 'en',
    category: CATEGORIES_EN.WEIGHT,
    topic: TOPIC_FAQ_EN,
    contentType: 'faq',
    description: 'Answers to typical client questions about the Gene-Diet and the Calorie Blocker.',
    longDescription:
      'A collection of the most common client questions about the Gene-Diet program, the genetic report, and the Calorie Blocker product. With collapsible answers for self-study.',
    bullets: [
      'What is the Gene-Diet?',
      'How does the genetic analysis work?',
      'How is the food list used?',
      'What is the Calorie Blocker?',
    ],
    thumbnail: T(5),
    faqGroups: [
      {
        title: 'What is the Gene-Diet?',
        items: [
          { q: 'What exactly is the Gene-Diet?', a: 'The Gene-Diet is a personalized weight-loss and nutrition program based on an analysis of your genes. Instead of a standard diet plan, you get an individual recommendation because your metabolism reacts genetically differently than others — to fat, carbohydrates, exercise, and even hunger.' },
          { q: 'What do I actually get?', a: 'You receive an individual report with your optimal ratio of fat, carbohydrates, and protein; a personalized food list with over 1,500 foods; a 4-week daily meal plan; a recipe book; and concrete exercise and movement recommendations that match your genetic profile.' },
          { q: 'How long are my recommendations valid?', a: 'Your genes do not change throughout your life, so the genetic results remain permanently valid. The evaluation, however, is continuously refined based on new research — over 770 improvements have been incorporated since program launch.' },
          { q: 'Do I need to repeat the test regularly?', a: 'No. Genes stay the same for life — an already-analyzed gene always returns the same result. What does keep improving is the evaluation itself, as new scientific findings are continuously incorporated.' },
        ],
      },
      {
        title: 'How does the genetic analysis work?',
        items: [
          { q: 'How does the Gene-Diet program work?', a: 'From your genetic dataset, the variants relevant for weight control are selected. From these, we calculate: how sensitive is your body to fat and carbohydrates? How effective is exercise for you? How effective is calorie reduction? Do you tend toward Yo-Yo effect, muscle loss, or belly fat? From these results, your optimal macro distribution and an individual nutrition plan emerge.' },
          { q: 'Isn\'t losing weight just about calorie deficit?', a: 'Not just. Studies show that people react genetically very differently to fat and carbohydrates — some hardly gain weight at a calorie surplus, others on the same calories gain much more. The effectiveness of exercise also varies genetically by a factor of 3.' },
          { q: 'Are there 7 different nutritional types?', a: 'Yes: Fat utilizer (higher fat share), Mixed type I-V (different mixed distributions), and Carb utilizer (higher carb share). Combined with individual factors like basal metabolic rate, exercise effectiveness, and Jo-Yo tendency, there are over 6,500 possible genetic profiles.' },
          { q: 'From what age is the program suitable for children?', a: 'The program is basically also applicable to children, but without calorie calculations, target-weight recommendations, daily menus, or recipe book — these are not meaningful for growing children. The recipe book is locked for children under 14.' },
        ],
      },
      {
        title: 'Calorie Blocker',
        items: [
          { q: 'What is the Calorie Blocker?', a: 'The Calorie Blocker is a personalized weight-loss product in microtransporter-pellet form. It contains an individual ratio of fat and carbohydrate blockers tailored to your DNA analysis. Combined with reduced calorie and fat intake, it demonstrably supports weight loss — combined with balanced diet and lifestyle it helps maintain weight.' },
          { q: 'How do I take the Calorie Blocker?', a: 'Daily before lunch and dinner with a large sip of water. The pellets should be swallowed whole, not chewed.' },
          { q: 'What are the active ingredients?', a: 'The fat blocker is Opuntia ficus-indica (OFI) — the fiber of the prickly pear cactus. This plant fiber forms a gel-like matrix in the GI tract that binds dietary fat and reduces its absorption. The carbohydrate blocker is Phaseolamin (from white beans) which inhibits alpha-amylase. Both are fully plant-based.' },
          { q: 'Is the Calorie Blocker vegan/vegetarian?', a: 'Yes. Both the fat blocker (Opuntia ficus-indica) and the carbohydrate blocker (Phaseolamin from white beans) are purely plant-based. The Calorie Blocker is suitable for vegetarians and vegans, gluten-free, lactose-free, and free of artificial colourings.' },
        ],
      },
    ],
    documents: [
      {
        title: 'NovoAcademy FAQ PDF - The Gene-Diet',
        size: '120 KB',
        type: 'pdf',
        url: '/course-materials/gene-diet/faq/Novogenia_FAQ_Gene_Diet_EN.pdf',
      },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Eat Healthy by Your Genes ======== */
  {
    id: 'nut-sci-en',
    uid: 'c4d5e6f7-a8b9-4012-3456-789abcdef004',
    lang: 'en',
    category: CATEGORIES_EN.NUTRITION,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'How genes determine the optimal nutrition for each person — explained scientifically.',
    longDescription:
      'In this training, Dr. Daniel Wallerstorfer explains why foods affect different people differently. You will learn which genetic variations control nutrient utilization, the reaction to salt, caffeine, folic acid & Co., and how these insights are used responsibly in personalized nutrition consultation.',
    bullets: [
      'Genetic variations in nutrient metabolism',
      'Why the same food affects people differently',
      'Studies on nutrigenetics',
      'Practical implementation in consultation',
    ],
    thumbnail: '/thumbnails/course-nutrition.jpg',
    youtubeId: 'pRU2p2Banno',
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'Why are some foods healthy for some and unhealthy for others?',
      'What role do genes like MTHFR, CYP1A2, or ACE play in nutrient utilization?',
      'How does genetics relate to caffeine, salt, and folic acid sensitivity?',
      'What practical recommendations can be derived for the client?',
    ],
    postVideoText:
      'With understanding of these genetic foundations, you can discuss the food recommendations in the report with your clients on solid ground.',
    questions: [
      {
        q: 'Which gene breaks down caffeine in the body?',
        options: ['MTHFR', 'CYP1A2', 'FTO', 'COMT'],
        correct: 1,
      },
      {
        q: 'How does a functioning (fast) CYP1A2 variant change heart-attack risk with regular coffee consumption (according to large epidemiological studies)?',
        options: [
          'Risk remains unchanged',
          'Risk drops by roughly one third — the polyphenols stay protective and the caffeine clears quickly',
          'Risk doubles',
          'Risk rises by two thirds',
        ],
        correct: 1,
      },
      {
        q: 'And how does it change for slow caffeine-breakers (defective CYP1A2)?',
        options: [
          'Risk drops even more',
          'Risk stays the same as for fast breakers',
          'Risk rises by roughly two thirds — caffeine stays active longer and prolongs blood-pressure peaks',
          'There is no difference',
        ],
        correct: 2,
      },
      {
        q: 'What is the role of the MTHFR gene?',
        options: [
          'It breaks down caffeine',
          'It activates folic acid into the bioactive form methylfolate — without a working MTHFR the standard folic acid in supplements stays useless',
          'It regulates dopamine breakdown',
          'It determines skin colour',
        ],
        correct: 1,
      },
      {
        q: 'What does a blood test NOT show in case of an MTHFR defect?',
        options: [
          'The folic-acid level in blood',
          'Whether the folic acid is actually activated and biologically effective',
          'The Vitamin D level',
          'The iron level',
        ],
        correct: 1,
      },
      {
        q: 'How many genes does the full nutrition analysis consider?',
        options: ['About 10', 'About 25', 'About 60', 'Over 200'],
        correct: 2,
      },
    ],
    documents: [
      // Slides + Demo Reports exist only in German — hidden in EN until translated.
      { title: 'NovoAcademy Science PDF - Caffeine & CYP1A2 Variant', size: '244 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Caffeine_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Folic Acid & MTHFR Activation', size: '257 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Folic_Acid_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Vitamin D & VDR Gene', size: '368 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Vitamin_D_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Lactose Intolerance & Genetics', size: '259 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Lactose_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Salt, Blood Pressure & ACE Gene', size: '309 KB', type: 'pdf', url: '/course-materials/scientific-reviews/NaCl_Salt_Review.pdf' },
      { title: 'NovoAcademy Science PDF - HDL Cholesterol & Omega-3', size: '255 KB', type: 'pdf', url: '/course-materials/scientific-reviews/HDL_Omega3_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Homocysteine & Heart Health', size: '271 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Homocysteine_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Iron Absorption & Genetics', size: '337 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Iron_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Selenium Requirement', size: '231 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Selenium_Review.pdf' },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Nutrition Consultation Training ===== */
  {
    id: 'nut-report-en',
    uid: 'd5e6f7a8-b9c0-4123-4567-89abcdef0005',
    lang: 'en',
    category: CATEGORIES_EN.NUTRITION,
    topic: TOPIC_REPORT_EN,
    contentType: 'course',
    description: 'Walk through the genetic nutrition report chapter by chapter with your client.',
    longDescription:
      'In this consultation training, Dr. Daniel Wallerstorfer explains chapter by chapter how to discuss the genetic nutrition report with your clients. From the structure of the report through individual nutrients (Vitamin D3, folic acid, iron, selenium, Q10, etc.) to metabolism, cholesterol, and triglyceride topics — all chapters of the report are walked through step by step.',
    bullets: [
      'Walk through the nutrition report chapter by chapter with the client',
      'Explain different gene variants (Vitamin D3, folic acid, iron, selenium, caffeine, Q10, etc.)',
      'Interpret effects on cholesterol, triglycerides, blood pressure & homocysteine',
      'Convey personalized food recommendations clearly',
    ],
    thumbnail: '/thumbnails/nut-report-cover.jpg',
    introQuestionsHeader: 'In this training you will learn:',
    introQuestions: [
      'How the nutrition report is structured',
      'How to explain the most important nutrient sensitivities clearly',
      'How genes influence cholesterol, triglycerides, blood pressure, and homocysteine',
      'How to translate food recommendations into practical advice',
    ],
    brandNoticeAboveVideos: true,
    videoSegments: [
      { title: 'Nutrition Analysis — Introduction', youtubeId: 'vIJroun2h-I' },
      { title: 'Caffeine and Coffee', youtubeId: 'IPIr-XoKIHM' },
      { title: 'Omega 3', youtubeId: 'Lfh3oYtMSDA' },
      { title: 'Folic Acid', youtubeId: '-C9O5SrbdZQ' },
      { title: 'Homocysteine', youtubeId: 'pYLWY_5frwQ' },
      { title: 'Coenzyme Q10', youtubeId: 'iS1W947McFs' },
      { title: 'Detox — Carcinogens', youtubeId: 'CxcnY6fnz5s' },
      { title: 'Detox — Chemicals and Heavy Metals', youtubeId: 'CyUqDSeZbJI' },
      { title: 'Free Radicals', youtubeId: 'PA73Rg4iP7k' },
      { title: 'Selenium', youtubeId: 'ikDamq8-8yo' },
      { title: 'Salt and Blood Pressure', youtubeId: 'pzF004M4ErE' },
      { title: 'Vitamin D (Part 1)', youtubeId: '8OyIc_fcdYg' },
      { title: 'Vitamin D (Part 2)', youtubeId: 'g5GKYyH11hc' },
      { title: 'Lactose and Calcium', youtubeId: 'zMb8ebBNGzA' },
      { title: 'Inflammation', youtubeId: 'dHuDD3Us238' },
      { title: 'LDL Cholesterol', youtubeId: 'PTvmWu1Rxrg' },
      { title: 'Triglycerides', youtubeId: 'mgfbGW-QKC4' },
      { title: 'Iron', youtubeId: '6dJMl02X9Tw' },
      { title: 'Methylation', youtubeId: 'wE834vw4aAs' },
      { title: 'Closing — Last Part', youtubeId: 'ofA7l21tMvQ' },
      { title: 'Principle of Food Rating', youtubeId: 'Y9lSzTXj72c' },
      { title: 'Food List', youtubeId: 'q8RNXZE5t5A' },
    ],
    postVideoText:
      'With this training you are ready to walk your clients through the genetic nutrition report with confidence. The demo booklets below can serve as example reports for your own consultation practice.',
    questions: [
      {
        q: 'A slow caffeine breaker (CYP1A2 defect) asks whether they should give up coffee entirely. Best consultation answer?',
        options: [
          'Yes, all coffee must be banned forever',
          'A reasonable alternative is decaffeinated coffee — it preserves the protective polyphenols without the prolonged caffeine effect. Caffeine sensitivity does not have to mean total abstinence',
          'Drink five cups a day to build tolerance',
          'Only black tea is allowed',
        ],
        correct: 1,
      },
      {
        q: 'How do you explain the Vitamin D recommendation to a client with a VDR variant?',
        options: [
          'Vitamin D works the same in everyone',
          'A VDR variant changes how strongly the cells respond to circulating Vitamin D — even at "normal" blood levels the biological effect can be reduced. Higher targeted intake (under monitoring) often makes sense',
          'Avoid Vitamin D — it is dangerous for them',
          'Only sun exposure works for them',
        ],
        correct: 1,
      },
      {
        q: 'Which dietary recommendation fits a client with a HFE-defect (iron-overload risk)?',
        options: [
          'Increase iron intake — they need more',
          'Reduce dietary iron load: less red meat, no iron-enriched supplements unless deficient by blood test. Excess iron accumulates and damages liver, heart, joints over decades',
          'Take iron supplements daily as a precaution',
          'No change needed',
        ],
        correct: 1,
      },
      {
        q: 'A client with an MTHFR variant takes standard folic acid tablets. What should you advise?',
        options: [
          'Keep taking standard folic acid — the variant has no effect',
          'Switch to methylfolate (the bioactive form). With an MTHFR defect, regular folic acid is poorly activated and largely useless for the client; methylfolate bypasses the activation step',
          'Stop all folate completely',
          'Eat only meat',
        ],
        correct: 1,
      },
      {
        q: 'How would you explain the salt recommendation to an ACE-positive client (salt-sensitive blood pressure)?',
        options: [
          'Salt does not matter — the recommendation is generic',
          'Salt sensitivity is genetic. In ACE-positive clients, salt intake measurably raises blood pressure. Reducing salt is a particularly powerful lever for them — much more so than for non-sensitive people',
          'Add extra salt — it stabilises blood pressure',
          'Only avoid sugar',
        ],
        correct: 1,
      },
    ],
    // Demo reports exist only in German — hidden in EN until translated.
    documents: [],
    hasDownload: false, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Nutrition FAQ ===== */
  {
    id: 'nut-faq-en',
    uid: 'e6f7a8b9-c0d1-4234-5678-9abcdef00006',
    lang: 'en',
    category: CATEGORIES_EN.NUTRITION,
    topic: TOPIC_FAQ_EN,
    contentType: 'faq',
    description: 'Answers to typical client questions about the genetic nutrition analysis.',
    longDescription:
      'A collection of the most common client questions about the genetic nutrition analysis — how genes influence nutrient metabolism, what MTHFR, CYP1A2, and other genes mean, and how practical recommendations are derived.',
    bullets: [
      'Why does the same food affect people differently?',
      'What is the role of genetic variants?',
      'How are recommendations derived?',
      'What can the genetic analysis tell me — and what not?',
    ],
    thumbnail: T(7),
    faqGroups: [
      {
        title: 'Basics — Genes and Nutrition',
        items: [
          { q: 'Why does the same food affect people differently?', a: 'Because we metabolize nutrients genetically differently. The MTHFR gene, for example, determines whether your body can activate folic acid into the bioactive form. The CYP1A2 gene determines how fast you break down caffeine. Such variants change how a nutrient acts in YOUR body.' },
          { q: 'How many genes does the nutrition analysis consider?', a: 'About 60 nutrition-relevant gene variants. Among them: MTHFR (folate activation), CYP1A2 (caffeine breakdown), ACE (salt/blood pressure), VDR (vitamin D receptor), HFE (iron uptake), LCT (lactase persistence), and antioxidant defense genes (SOD, CAT, GPX).' },
          { q: 'Can the analysis tell me whether I should drink coffee?', a: 'Indirectly yes. The CYP1A2 gene shows whether you break down caffeine fast (Warrior) or slow. Slow breakers carry higher cardiovascular risk from caffeine — coffee is better avoided or replaced with decaf for the polyphenol benefits.' },
          { q: 'Is the analysis a substitute for a doctor or nutritionist?', a: 'No. It is an additional decision-making aid based on stable genetic data. Acute symptoms, diseases, or special diets always belong in the hands of an MD or registered dietitian.' },
        ],
      },
      {
        title: 'Key gene topics',
        items: [
          { q: 'What does an MTHFR defect mean for me?', a: 'MTHFR activates folic acid into methylfolate, the form your body can actually use. With a defect, you can take a lot of folic acid in a regular supplement and still have functional deficiency. Switching to methylfolate solves the problem.' },
          { q: 'I have an HFE variant — is iron supplementation dangerous for me?', a: 'It can be. Some HFE variants cause iron overload over decades — your body absorbs too much from food and stores it in liver, heart, joints. Iron supplements should only be taken if blood tests show a real deficiency.' },
          { q: 'Salt sensitivity (ACE) — does that mean I have to give up salt?', a: 'Not entirely. It means your blood pressure responds more strongly to salt than average. Reducing salt is a powerful lever in your case — much more so than for non-sensitive people.' },
        ],
      },
      {
        title: 'Practical questions',
        items: [
          { q: 'Should I stop eating my favourite foods if they are rated unfavourable?', a: 'No. The report is a long-term guide. Occasional consumption is fine. The goal is balance over weeks and months, not perfection on a single day.' },
          { q: 'How fast will I notice an effect?', a: 'It depends on what you change. Caffeine sensitivity feels different within days. Folic-acid switching shows in 2-3 months on blood markers. Long-term recommendations like reducing salt or sat. fats take 6-12 months to translate into measurable cardiovascular benefits.' },
          { q: 'Is the recommendation list set in stone?', a: 'No. The recommendations are derived from current scientific consensus. As research progresses, the report is updated periodically with no extra cost.' },
        ],
      },
    ],
    documents: [
      {
        title: 'NovoAcademy FAQ PDF - Eat Healthy by Your Genes',
        size: '118 KB',
        type: 'pdf',
        url: '/course-materials/nutrition/Novogenia_FAQ_Nutrition_EN.pdf',
      },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Athletic Performance ======== */
  {
    id: 'pg-sci-en',
    uid: 'f7a8b9c0-d1e2-4345-6789-abcdef000007',
    lang: 'en',
    category: CATEGORIES_EN.PERFORMANCE,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'Which genes determine athletic performance, regeneration, and injury risk.',
    longDescription:
      'This training explains the scientific basis behind performance genetics. You will learn which genes influence athlete type (sprint vs. endurance), connective tissue risk, and regeneration ability, and how an individual training profile is derived from these factors.',
    bullets: [
      'Sprint vs. endurance genes (ACTN3 & Co.)',
      'Connective tissue and injury risk (COL5A1, MMP3)',
      'Inflammation response and regeneration time',
      'Practical implementation in training planning',
    ],
    thumbnail: '/thumbnails/course-performance.jpg',
    youtubeId: 'cdsMJEPUv5A',
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'How much of athletic talent is genetically determined?',
      'Which genes distinguish sprinters from marathon runners?',
      'How does genetics influence injury risk and regeneration?',
      'How can athletes train more efficiently with this knowledge?',
    ],
    postVideoText:
      'With this scientific background, you can advise athletes on a solid basis — about the right training stimulus, regeneration times, and genetically grounded supplements.',
    questions: [
      {
        q: 'Which gene is the best-known marker for sprint vs. endurance phenotype?',
        options: ['MTHFR', 'ACTN3', 'LCT', 'COMT'],
        correct: 1,
      },
      {
        q: 'A client has the ACTN3 RR genotype. What does this typically indicate?',
        options: [
          'Marathon-runner profile only',
          'Strong fast-twitch fibre expression — better suited to sprint, power, and explosive sports; pure endurance is still possible but not the natural strength',
          'No athletic talent at all',
          'Higher cardiovascular risk in any sport',
        ],
        correct: 1,
      },
      {
        q: 'Which genes are central for connective tissue stability and injury risk?',
        options: [
          'COL5A1, MMP3 — they shape collagen quality and turnover; unfavourable variants raise the risk of tendon and ligament injuries',
          'FTO and PPARG',
          'CYP1A2 and ADH',
          'No gene affects connective tissue',
        ],
        correct: 0,
      },
      {
        q: 'How does the training response between people genetically vary?',
        options: [
          'It is identical for everyone',
          'Roughly by a factor of 2-3 — some athletes adapt very strongly to the same stimulus, others barely',
          'Only mood determines the response',
          'It varies by a factor of 50',
        ],
        correct: 1,
      },
      {
        q: 'Why are antioxidants (Vit C, E, polyphenols) particularly relevant in sports?',
        options: [
          'They taste better than water',
          'Intense exercise produces large amounts of free radicals; genetically weak antioxidant defences (low SOD/CAT/GPX activity) mean longer regeneration and higher risk of micro-inflammation',
          'They only improve sleep',
          'They have no effect on athletes',
        ],
        correct: 1,
      },
    ],
    documents: [
      // Slides + Demo Reports exist only in German — hidden in EN until translated.
      { title: 'NovoAcademy Science PDF - Free Radicals & Oxidative Stress in Sports', size: '289 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Free_Radicals_Review.pdf' },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Athletic Performance FAQ ===== */
  {
    id: 'pg-faq-en',
    uid: 'a8b9c0d1-e2f3-4456-789a-bcdef0000008',
    lang: 'en',
    category: CATEGORIES_EN.PERFORMANCE,
    topic: TOPIC_FAQ_EN,
    contentType: 'faq',
    description: 'Answers to typical client questions about the genetic performance analysis.',
    longDescription:
      'A collection of the most important questions about genetics in sports — talent, injury risk, training control. With collapsible answers for self-study.',
    bullets: [
      'Talent vs. training — what is genetic?',
      'Injury risk and connective tissue genes',
      'Regeneration and nutrition',
      'Training control by genotype',
    ],
    thumbnail: T(11),
    faqGroups: [
      {
        title: 'Talent & Genetics in Sports',
        items: [
          { q: 'How large is the influence of genes on athletic performance?', a: 'Estimates vary between 30 and 70%, depending on the discipline. Talent (sprint fibers, VO2max potential, connective tissue stability) is predominantly genetically determined; the training response itself — how strongly the body reacts to a stimulus — also varies genetically by a factor of 2 to 3.' },
          { q: 'What is the difference between muscle volume and muscle strength?', a: 'Volume means more mass (bodybuilder goal) — training with 6-12 reps. Strength means more performance with less mass — training with 1-6 reps at heavy loads. Both training goals require different strategies and different rest periods.' },
          { q: 'Can I become a successful athlete with "bad" genes?', a: 'Yes. Genetics determines talent, but training, consistency and the right strategy make the decisive difference. Knowing your genetic weak points lets you compensate (e.g. antioxidant-rich nutrition, longer rest, careful warm-up).' },
        ],
      },
      {
        title: 'Injury risk & regeneration',
        items: [
          { q: 'My report shows unfavourable connective-tissue genes (COL5A1, MMP3). What should I do?', a: 'Train with extra care: thorough warm-up, less explosive loading until adapted, longer recovery between intense sessions, and good protein/Vit-C intake to support collagen synthesis. Avoid sudden volume jumps.' },
          { q: 'Why does the report recommend antioxidants for me?', a: 'Intense exercise generates large amounts of free radicals. If your antioxidant genes (SOD2, CAT, GPX) are weak, recovery is slower and micro-inflammation accumulates. Vitamin C, E, polyphenols and selenium directly support these defense systems.' },
          { q: 'What is a "deload" and how often should I do it?', a: 'A deload is a week of gentler training (e.g. first session at half the weight, second at two-thirds). It gives the body recovery time for repair and psychological reset. Typically every ~5 weeks, depending on your genetic regeneration and stress predisposition.' },
        ],
      },
      {
        title: 'Nutrition for athletes',
        items: [
          { q: 'How does the sport report relate to the nutrition report?', a: 'They complement each other. The sport report shows your performance profile, injury risk, and regeneration. The nutrition report tells you which fuel mix (fat/carb/protein) and which supplements support that profile.' },
          { q: 'Should I take protein powder?', a: 'Not necessarily. If you cover 1.6-2.0 g protein per kg body weight through real food and recover well between sessions, no powder is needed. If you struggle to hit those numbers, a clean protein powder can simplify intake.' },
        ],
      },
    ],
    documents: [
      {
        title: 'NovoAcademy FAQ PDF - Athletic Performance',
        size: '118 KB',
        type: 'pdf',
        url: '/course-materials/performance/Novogenia_FAQ_Performance_EN.pdf',
      },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Detoxification ======== */
  {
    id: 'tx-sci-en',
    uid: 'b9c0d1e2-f3a4-4567-89ab-cdef00000009',
    lang: 'en',
    category: CATEGORIES_EN.DETOX,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'How genes determine individual detoxification ability — from burnt foods through chemicals to alcohol and heavy metals.',
    longDescription:
      'In this training, Dr. Daniel Wallerstorfer explains the genetic foundations of detoxification. Which genes neutralize carcinogens from burnt and smoked foods? How do glutathione-S-transferases protect against chemicals? What role does selenium play, and why doesn\'t alcohol affect everyone the same?',
    bullets: [
      'Detoxification of burnt foods (CYP1A1, NAT2)',
      'Chemical detoxification & Glutathione-S-Transferases (GST)',
      'Antioxidant defense and selenium intake',
      'Alcohol and acetaldehyde breakdown (ADH, ALDH2)',
    ],
    thumbnail: T(27),
    youtubeId: 'DbRx4Kjqkes',
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'Which genes control detoxification of burnt foods?',
      'How do glutathione-S-transferases work in chemical detoxification?',
      'What role does selenium play in oxidative stress protection?',
      'How does genetic alcohol breakdown differ between people?',
    ],
    postVideoText:
      'With this scientific background you can discuss the detoxification report with your clients on solid ground and derive individual protective strategies.',
    questions: [
      {
        q: 'Which gene family is central for detoxification of chemicals and heavy metals?',
        options: [
          'GST (Glutathione-S-Transferases)',
          'MTHFR (folate activation)',
          'LCT (lactase)',
          'CYP1A2 (caffeine breakdown)',
        ],
        correct: 0,
      },
      {
        q: 'PAHs (polycyclic aromatic hydrocarbons) form in burnt and smoked foods. What is true about their detoxification?',
        options: [
          'PAHs cannot be broken down at all',
          'PAH detoxification varies strongly by genotype — people with slow or defective CYP1A1/NAT2 variants carry a notably higher cancer risk from frequent burnt foods',
          'Everyone detoxifies PAHs at the same speed',
          'PAHs are excreted only through the skin',
        ],
        correct: 1,
      },
      {
        q: 'A client has a genetic GST defect (Glutathione-S-Transferase deficiency). What does it mean in practice?',
        options: [
          'Above-average detox capacity',
          'Reduced ability to neutralise environmental chemicals (pesticides, solvents, cigarette smoke) — she should actively avoid exposure and increase antioxidant intake',
          'No practical impact',
          'She should drink more coffee',
        ],
        correct: 1,
      },
      {
        q: 'What is the role of selenium in the antioxidant defense system?',
        options: [
          'It directly binds heavy metals in the blood',
          'Just a cosmetic trace element',
          'Selenium is an essential building block of Glutathione Peroxidase (GPX), one of the most important antioxidant enzymes — selenium deficiency reduces this defense and raises oxidative stress',
          'It is responsible for bone health',
        ],
        correct: 2,
      },
      {
        q: 'Why does alcohol tolerance differ so much between people?',
        options: [
          'Body weight alone',
          'ADH (alcohol → acetaldehyde) and ALDH2 (acetaldehyde → acetic acid) variants differ strongly between individuals. With ALDH2 defects — frequent in Asian populations — the toxic acetaldehyde accumulates: flush, nausea, markedly elevated cancer risk on chronic consumption',
          'Men and women break it down identically',
          'Alcohol is exhaled by everyone',
        ],
        correct: 1,
      },
      {
        q: 'A client shows several red zones in the detox report. Best fitting consultation approach?',
        options: [
          'Ignore — detox runs autonomously',
          'Stop eating altogether',
          'The genetic load cannot be fully corrected but can be compensated: avoid specific exposures (less burnt food, clean indoor environment), antioxidant-rich diet (Vit C/E, selenium, glutathione precursors), no smoking exposure, and regular exercise for sweat-based excretion',
          'Immediately see a doctor — the predisposition is a disease',
        ],
        correct: 2,
      },
    ],
    documents: [
      // Slides + NovoDaily Lifestyle Demo exist only in German — hidden in EN until translated.
      { title: 'NovoAcademy Science PDF - Genetic Detoxification Overview', size: '264 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Detoxification_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Chemical Detoxification & GST Variants', size: '281 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Chemicals_Detox_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Oxidative Stress & Antioxidant Genetics', size: '348 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Oxidative_Stress_Review.pdf' },
      { title: 'NovoAcademy Science PDF - Selenium Need & Protection', size: '231 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Selenium_Review.pdf' },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Detox — Consultation ===== */
  {
    id: 'tx-report-en',
    uid: 'c0d1e2f3-a4b5-4678-9abc-def000000010',
    lang: 'en',
    category: CATEGORIES_EN.DETOX,
    topic: TOPIC_REPORT_EN,
    contentType: 'course',
    description: 'Walk through the genetic detoxification report chapter by chapter with your client.',
    longDescription:
      'This consultation training explains how to walk through the genetic detoxification report with your clients. From detoxification of burnt foods and chemicals through aging protection and selenium supply to alcohol and drug metabolism.',
    bullets: [
      'Walk through the detoxification report chapter by chapter',
      'Explain detox of burnt foods & chemicals clearly',
      'Frame aging protection against oxidative stress',
      'Advise on selenium supply and alcohol/drug metabolism',
    ],
    thumbnail: '/thumbnails/tx-report-cover.jpg',
    introQuestionsHeader: 'In this training you will learn:',
    introQuestions: [
      'How the detoxification report is structured',
      'Which genes control detox of burnt foods and chemicals',
      'How oxidative stress affects the aging process',
      'What recommendations result for selenium, alcohol, and drugs',
    ],
    brandNoticeAboveVideos: true,
    videoSegments: [
      { title: 'Detox — Carcinogens', youtubeId: 'CxcnY6fnz5s' },
      { title: 'Detox — Chemicals and Heavy Metals', youtubeId: 'CyUqDSeZbJI' },
      { title: 'Free Radicals (Oxidative Stress)', youtubeId: 'PA73Rg4iP7k' },
      { title: 'Selenium', youtubeId: 'ikDamq8-8yo' },
    ],
    postVideoText:
      'With this training you are ready to walk your clients through the detoxification report with confidence.',
    questions: [
      {
        q: 'A client likes burnt steak and BBQ. The detox report shows slow PAH detoxification. Your advice?',
        options: [
          'No issue — eat as much burnt food as desired',
          'Recommend reducing burnt / charred / smoked foods (PAH exposure), prefer gentler cooking methods, and pair with antioxidant-rich foods (vitamins C, E, polyphenols)',
          'Switch to a raw-food diet only',
          'Take more burnt food to train the enzyme',
        ],
        correct: 1,
      },
      {
        q: 'A client with reduced GPX activity (poor selenium-dependent antioxidant defense) — what fits best?',
        options: [
          'Ignore selenium intake entirely',
          'Targeted selenium supplementation in physiological doses (e.g. 50-100 µg/day from selenomethionine), antioxidant-rich diet, and reduction of oxidative load (smoking, alcohol, sun)',
          'High-dose selenium (500+ µg/day)',
          'Only Vitamin C, no selenium',
        ],
        correct: 1,
      },
      {
        q: 'How do you explain a "red zone" in the chemical detox section (GST defect)?',
        options: [
          'The client is allergic to all chemicals',
          'The body neutralises environmental chemicals less efficiently than average — practical reduction of exposure (cleaner air, fewer pesticides, fewer solvents at home) is especially important; antioxidant supply supports the remaining detox capacity',
          'It is a lab error',
          'Means the client should avoid all foods',
        ],
        correct: 1,
      },
      {
        q: 'A client of Asian descent shows ALDH2 defect. What is the consultation key point?',
        options: [
          'Drink more alcohol to overcome the variant',
          'Acetaldehyde — a known carcinogen — accumulates. Even moderate regular alcohol intake substantially raises long-term cancer risk. Recommendation: very low or zero alcohol',
          'No real concern',
          'Only avoid sugar',
        ],
        correct: 1,
      },
      {
        q: 'How do you frame the overall detoxification report for the client?',
        options: [
          'As a verdict — the genes determine fate',
          'As a roadmap — the genes show where the system is weaker; targeted reduction of specific exposures plus antioxidant-rich lifestyle compensates measurably over years',
          'As irrelevant — detoxification is autonomous',
          'As a medical diagnosis requiring treatment',
        ],
        correct: 1,
      },
    ],
    // NovoDaily Lifestyle Demo exists only in German — hidden in EN until translated.
    documents: [],
    hasDownload: false, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ======== Burnout and Stress ======== */
  {
    id: 'bo-sci-en',
    uid: 'd1e2f3a4-b5c6-4789-abcd-ef0000000011',
    lang: 'en',
    category: CATEGORIES_EN.BURNOUT,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'Why the same stress affects people differently — and what the COMT gene has to do with burnout risk.',
    longDescription:
      'In this training, Dr. Daniel Wallerstorfer explains why massive, continuous stress leads to burnout in some people but not in others. You will learn which three genetic traits the analysis looks at, how the COMT gene breaks down dopamine after exciting or stressful situations, why about 15% of people are especially prone to stress — and why the right lifestyle matters all the more when the genes are less favourable.',
    bullets: [
      'Three genetic traits: performance under stress, emotional resilience, impulsivity',
      'COMT — the central gene for dopamine breakdown',
      'Dopamine breakdown: why 15% are especially stress-prone',
      'Lifestyle recommendations based on the genetic profile',
    ],
    thumbnail: '/thumbnails/course-burnout.jpg',
    /* Video: AI lip-sync version (HeyGen) of the German original eOqrJicdJZM
       (“BURNOUT SENSOR”). The EN youtubeId is added after the upload; until
       then the course shows the “Video coming soon” placeholder.
       Questions follow the content of this video. */
    aiDub: true,
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'Which gene is central to individual stress processing?',
      'Why does the same stress affect people differently — and what does COMT have to do with it?',
      'How do genes influence the risk of burnout?',
      'Which lifestyle measures help — and why do they matter more with an unfavourable profile?',
    ],
    postVideoText:
      'With this scientific background, you can discuss the burnout report with your clients on solid ground and derive individual stress management strategies.',
    questions: [
      {
        q: 'According to the training, what causes burnout?',
        options: [
          'A single, short stressful situation such as an exam',
          'Genetics alone — lifestyle plays no role',
          'Massive, continuous stress over a long period',
          'Too much physical exercise',
        ],
        correct: 2,
      },
      {
        q: 'Which genetic traits does the stress analysis look at?',
        options: [
          'Caffeine sensitivity, sleep duration and alcohol tolerance',
          'Memory, concentration and reaction time',
          'Resting heart rate, blood pressure and cortisol levels',
          'Performance under stress, emotional resilience and impulsivity',
        ],
        correct: 3,
      },
      {
        q: 'Which gene breaks down dopamine once an exciting situation is over?',
        options: ['COMT', 'MTHFR', 'FTO', 'ACTN3'],
        correct: 0,
      },
      {
        q: 'What happens under repeated stress in someone whose COMT gene works poorly?',
        options: [
          'Dopamine is broken down faster, so the brain calms down more quickly',
          'The brain does not return to baseline, so new stress causes overload',
          'The brain gets used to stress and reacts less with every episode',
          'No dopamine is released at all, so the stress goes unnoticed',
        ],
        correct: 1,
      },
      {
        q: 'What is a paradoxical advantage of slow dopamine breakdown?',
        options: [
          'A calmer reaction to stressful situations in everyday life',
          'Faster physical recovery after intensive exercise',
          'A lower risk of heart attack',
          'More intense positive feelings and greater curiosity',
        ],
        correct: 3,
      },
      {
        q: 'Roughly what percentage of people have two well-functioning copies of the COMT gene?',
        options: ['About 5%', 'About 15%', 'About 40%', 'About 80%'],
        correct: 2,
      },
      {
        q: 'Roughly what percentage of people have two defective copies and are especially prone to stress?',
        options: ['About 5%', 'About 15%', 'About 40%', 'About 60%'],
        correct: 1,
      },
      {
        q: 'The less favourable the genetic stress traits, the more important the right lifestyle. What does the report recommend?',
        options: [
          'Meditation, a low-stress lifestyle, nutrition and exercise',
          'More caffeine to stay alert and perform under pressure',
          'Avoiding all sport so the body is not put under extra strain',
          'Medication only, because genetics cannot be counteracted',
        ],
        correct: 0,
      },
      {
        q: 'According to the training, what are people with a poorly functioning COMT gene also more prone to?',
        options: [
          'Caffeine dependence',
          'Sleep disorders',
          'Sugar cravings',
          'Gambling',
        ],
        correct: 3,
      },
      {
        q: 'What does the red zone of a stress trait indicate in the report?',
        options: [
          'Very favourable genetics — no action needed',
          'An unfavourable predisposition — a higher risk of burnout',
          'The person already has burnout and needs treatment',
          'A standard recommendation that applies to everyone',
        ],
        correct: 1,
      },
    ],
    // NovoDaily Lifestyle Demo exists only in German — hidden in EN until translated.
    documents: [],
    hasDownload: false, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Burnout — Consultation ===== */
  {
    id: 'bo-report-en',
    uid: 'e2f3a4b5-c6d7-4890-bcde-f00000000012',
    lang: 'en',
    category: CATEGORIES_EN.BURNOUT,
    topic: TOPIC_REPORT_EN,
    contentType: 'course',
    description: 'Walk through the burnout report step by step with your client.',
    longDescription:
      'In this consultation training, Dr. Daniel Wallerstorfer uses the example client Maria to show how to read the burnout section of the report: the COMT gene, the three stress traits on the scale from red through the middle to green, and why lifestyle matters for clients in the red zone and in the middle.',
    bullets: [
      'Walk through the burnout report in a structured way',
      'Explain genetic stress predisposition clearly',
      'Read the three stress traits on the red–middle–green scale',
      'Explain why lifestyle matters in the red zone and in the middle',
    ],
    thumbnail: '/thumbnails/bo-report-cover.jpg',
    introQuestionsHeader: 'In this training you will learn:',
    introQuestions: [
      'How the burnout section of the report is structured',
      'How to explain individual stress predisposition clearly',
      'What the result means for your client’s lifestyle',
    ],
    brandNoticeAboveVideos: true,
    /* Video: AI lip-sync version (HeyGen) of the German original eU5n2iseSdA
       (“ANALYSEBERATUNG – Teil 33 – Burnout”, 79 s). The EN youtubeId is added
       after the upload, then as
         videoSegments: [{ title: 'Burnout — Individual Approach to Stress', youtubeId: '<EN dub ID>' }]
       Until then the course runs without a video block.
       Questions follow the content of this video (example client Maria). */
    aiDub: true,
    postVideoText:
      'With this training you can discuss the burnout report on solid ground with your clients.',
    questions: [
      {
        q: 'Which gene is the focus of the burnout section, and what does it influence?',
        options: [
          'CYP1A2 — how quickly caffeine is broken down in the liver',
          'FTO — appetite regulation and the feeling of fullness',
          'COMT — the balance of certain neurotransmitters in the brain',
          'MTHFR — how the body activates folate',
        ],
        correct: 2,
      },
      {
        q: 'Which three traits does the burnout section of the report show?',
        options: [
          'Performance under stress, emotional resilience and impulsivity',
          'Sleep quality, sensitivity to caffeine and the cortisol response to stress',
          'Concentration, memory and motivation',
          'Blood pressure, heart rate and breathing rate',
        ],
        correct: 0,
      },
      {
        q: 'Maria has one functioning and one defective copy of the COMT gene. What does her result look like?',
        options: [
          'All three traits in the red zone — she is highly prone to burnout',
          'All three traits in the green zone — burnout is not a concern for her',
          'Performance under stress in the red zone, the other two traits in the green zone',
          'All three traits in the middle — moderately good stress resistance',
        ],
        correct: 3,
      },
      {
        q: 'People who suffer from burnout often combine the wrong lifestyle with their genetics. Where do their results usually fall, and what should they do?',
        options: [
          'In the green zone — they simply need to reduce their workload',
          'Mostly in the red zone — they should live in a way that avoids stress',
          'In the middle — their lifestyle has little influence',
          'Mostly in the red zone — changing their lifestyle no longer makes a difference',
        ],
        correct: 1,
      },
      {
        q: 'Maria’s results are in the middle for all three traits. Does her lifestyle matter?',
        options: [
          'Yes — avoiding stress through her lifestyle matters for her too',
          'No — only clients in the red zone need to change their lifestyle',
          'No — a result in the middle has no practical relevance',
          'Only once she shows the first signs of burnout',
        ],
        correct: 0,
      },
      {
        q: 'What does it mean if a client is in the green zone for all three traits?',
        options: [
          'Burnout is impossible for this client, whatever their lifestyle',
          'The client is especially prone to burnout',
          'Burnout is not such a big danger for this client',
          'The analysis could not be evaluated',
        ],
        correct: 2,
      },
    ],
    // NovoDaily Lifestyle Demo exists only in German — hidden in EN until translated.
    documents: [],
    hasDownload: false, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Burnout FAQ ===== */
  {
    id: 'bo-faq-en',
    uid: 'f3a4b5c6-d7e8-4901-cdef-000000000013',
    lang: 'en',
    category: CATEGORIES_EN.BURNOUT,
    topic: TOPIC_FAQ_EN,
    contentType: 'faq',
    description: 'Answers to typical client questions about genetic stress and burnout predisposition.',
    longDescription:
      'A collection of the most common questions about the genetic burnout and stress analysis — what the COMT gene does, which three stress traits the report shows, and what concrete recommendations follow.',
    bullets: [
      'What is the COMT gene?',
      'Which three stress traits does the report show?',
      'How is burnout risk genetic?',
      'What recommendations follow from the profile?',
    ],
    thumbnail: T(15),
    faqGroups: [
      {
        title: 'Genetic basis of stress',
        items: [
          { q: 'What is the COMT gene and why is it important?', a: 'COMT (catechol-O-methyltransferase) breaks down the neurotransmitter dopamine once an exciting or stressful situation is over, so the brain can return to its baseline. If the gene works poorly, dopamine is broken down much more slowly: the brain stays in an aroused state for longer, and when new stress comes along before it is back at baseline, it can become overloaded. Slower breakdown also has upsides — positive feelings are experienced more intensely and people tend to be more curious, but also more prone to gambling. Studies describe a common variant (Val158Met) with clearly different enzyme activity between the fast and the slow form.' },
          { q: 'Which three traits does the burnout analysis evaluate?', a: 'Performance under stress (how well you perform in stressful situations), emotional resilience (how strongly negative feelings weigh on you) and impulsivity. Each trait is shown on a scale from red through the middle to green: green is favourable, red means a greater risk of burnout.' },
          { q: 'How many people are genetically especially prone to stress?', a: 'About 40% of people have two well-functioning copies of the COMT gene: they tend to perform better under stress, have higher emotional resilience and are less impulsive. About 15% have two defective copies, with exactly the opposite effect — they are the ones who suffer most under stress. The remaining ~45% have one functioning and one defective copy.' },
        ],
      },
      {
        title: 'Practical advice',
        items: [
          { q: 'I have two defective copies of the COMT gene — am I doomed to burn out?', a: 'No. A less favourable COMT profile increases sensitivity to stress, but it is not destiny. The less favourable the genes, the more important the right lifestyle: meditation, a low-stress way of life, nutrition and exercise. Knowing your predisposition lets you act early, before stress builds up.' },
          { q: 'All three traits are in the green zone — do I still need to think about burnout?', a: 'For you, burnout is not such a big danger — but the risk is not zero: massive, continuous stress can still take its toll over time. Recovery phases and a balanced lifestyle remain important.' },
          { q: 'What helps everyone, regardless of genotype?', a: 'The measures recommended in the report — meditation, a low-stress way of life, a balanced diet and regular exercise — help everyone reduce stress; they simply matter more the less favourable the genetic profile is. Enough sleep, social contact and moderate consumption of caffeine and alcohol are also commonly recommended.' },
        ],
      },
      {
        title: 'What to do with the result',
        items: [
          { q: 'A “red zone” came up in my report. Should I be worried?', a: 'It is no reason to panic, but it is a reason to act. A red zone marks an unfavourable genetic predisposition in one specific area — a greater risk of burnout, not a diagnosis. The more of your traits are in the red zone, the more important it is to adapt your lifestyle to avoid stress. Even with results in the middle, a low-stress lifestyle remains important.' },
          { q: 'Where do I find concrete recommendations for my genotype?', a: 'In the burnout report — it contains recommendations on meditation, a low-stress lifestyle, nutrition and exercise, tailored to your genetic stress profile.' },
        ],
      },
    ],
    documents: [
      {
        title: 'NovoAcademy FAQ PDF - Burnout and Stress',
        size: '118 KB',
        type: 'pdf',
        url: '/course-materials/burnout/Novogenia_FAQ_Burnout_Stress_EN.pdf',
      },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Biological Age ======== */
  {
    id: 'ba-sci-en',
    uid: 'a4b5c6d7-e8f9-4012-def0-000000000014',
    lang: 'en',
    category: CATEGORIES_EN.BIOAGE,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'Why telomeres shorten, how the telomerase gene affects biological age — and which nutrients can help.',
    longDescription:
      'This training explains the scientific basis of the biological age analysis. You will learn why telomeres — the protective ends of our chromosomes — get shorter with every cell division, what happens to a cell once they are used up, how the telomerase gene influences this process, and which nutrients can support telomere maintenance when the genes work less well.',
    bullets: [
      'Telomeres and cell aging — the basics',
      'Senescence: when cells switch to sleep mode',
      'Genetic factors of aging: the telomerase gene',
      'Supporting nutrients and the genotype-dependent Mediterranean diet',
    ],
    thumbnail: '/thumbnails/course-bioage.jpg',
    /* Video: AI lip-sync version (HeyGen) of the German original gwmVcvbaNgE
       (“BIOLOGISCHES ALTER”). The EN youtubeId is added after the upload; until
       then the course shows the “Video coming soon” placeholder. (The earlier EN
       clip udTodouyDsA — “free radicals & aging” — was the wrong video for this
       module.) Questions follow the content of the German original. */
    aiDub: true,
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'What are telomeres and why do they shorten with every cell division?',
      'What happens to a cell once its telomeres are used up?',
      'What does the telomerase gene do?',
      'Which nutrients support telomere maintenance — and why doesn’t the Mediterranean diet work for everyone?',
    ],
    postVideoText:
      'With this scientific basis, you can discuss the biological age analysis with your clients on solid ground.',
    questions: [
      {
        q: 'What are telomeres?',
        options: [
          'Genes at the start of each chromosome that control cell division',
          'Proteins that repair damaged DNA',
          'Structures inside the cell that produce energy',
          'Protective ends of the chromosomes that contain no genes',
        ],
        correct: 3,
      },
      {
        q: 'What happens to the telomeres with every cell division?',
        options: [
          'They grow slightly longer each time',
          'A small piece breaks off and they get shorter',
          'They are rebuilt from scratch in the new cell',
          'They stay exactly the same length',
        ],
        correct: 1,
      },
      {
        q: 'After roughly how many cell divisions are the telomeres used up?',
        options: ['About 5 to 10', 'About 20 to 30', 'About 50 to 70', 'About 500 to 700'],
        correct: 2,
      },
      {
        q: 'What happens to a cell whose telomeres are used up?',
        options: [
          'It enters a sleep mode (senescence) and stops doing its job',
          'It keeps dividing, but more slowly',
          'It turns back into a young stem cell',
          'It is broken down and removed by the body straight away',
        ],
        correct: 0,
      },
      {
        q: 'Which gene helps maintain the telomeres?',
        options: ['MTHFR', 'COMT', 'Telomerase', 'FTO'],
        correct: 2,
      },
      {
        q: 'Which nutrients can support telomere maintenance when the protective gene works less well?',
        options: [
          'Vitamin C, Zinc, Selenium, Iron and Magnesium',
          'Vitamin D3, Omega-3, Vitamin E, Resveratrol and Ginkgo',
          'Vitamin B12, Folic Acid, Iron, Iodine and Calcium',
          'Caffeine, Taurine, Creatine, L-Carnitine and Green Tea',
        ],
        correct: 1,
      },
      {
        q: 'Does a Mediterranean diet have the same effect on telomeres in everyone?',
        options: [
          'Yes — it keeps telomeres longer in everyone',
          'No — it shortens the telomeres in most people',
          'Its effect on telomeres has never been studied',
          'No — it only works with a specific gene variant',
        ],
        correct: 3,
      },
      {
        q: 'How large can the difference in biological age be between people with two defective and two functioning copies of the telomerase gene?',
        options: ['Up to 20 years', 'At most 1 to 2 years', 'At most 5 years', 'There is no measurable difference'],
        correct: 0,
      },
      {
        q: 'What role do free radicals play in aging?',
        options: [
          'They protect the chromosome ends from breaking off during cell division',
          'They continuously damage cells; antioxidants help counter this',
          'They only play a role in people over the age of 70',
          'They repair damaged cells during sleep',
        ],
        correct: 1,
      },
      {
        q: 'What is the right strategy for a client with a defect in the telomerase gene?',
        options: [
          'Ignore it — telomeres cannot be influenced anyway',
          'Exercise more — nutrition makes no difference',
          'Increase supporting nutrients to slow telomere shortening',
          'Switch to a Mediterranean diet — it works for everyone',
        ],
        correct: 2,
      },
    ],
    documents: [
      // NovoDaily Lifestyle Demo exists only in German — hidden in EN until translated.
      { title: 'NovoAcademy Science PDF - Telomeres and Biological Age', size: '299 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Telomeres_Biological_Age_Review.pdf' },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Biological Age — Consultation ===== */
  {
    id: 'ba-report-en',
    uid: 'b5c6d7e8-f9a0-4123-ef00-000000000015',
    lang: 'en',
    category: CATEGORIES_EN.BIOAGE,
    topic: TOPIC_REPORT_EN,
    contentType: 'course',
    description: 'Walk through the biological age report with your client.',
    longDescription:
      'In this consultation training, Dr. Daniel Wallerstorfer explains the aging process in plain language — from chromosomes and telomeres to cells in sleep mode — and uses the example client Maria to show how to read the telomere result, the Mediterranean diet finding and the nutrient recommendations in the report.',
    bullets: [
      'Walk through the biological age report in a structured way',
      'Explain telomeres and the aging process in plain language',
      'Read the telomere result using the example of Maria',
      'Nutrient recommendations and the Mediterranean diet finding',
    ],
    thumbnail: '/thumbnails/ba-report-cover.jpg',
    introQuestionsHeader: 'In this training you will learn:',
    introQuestions: [
      'How the biological age report is structured',
      'How to explain the aging process clearly',
      'Which nutrient recommendations follow from the result',
    ],
    brandNoticeAboveVideos: true,
    /* Video: AI lip-sync version (HeyGen) of the German original kk5aXYY1sWQ
       (“ANALYSEBERATUNG – Teil 32 – Alterungsprozess”). The EN youtubeId is
       added after the upload, then as
         videoSegments: [{ title: 'Aging Process', youtubeId: '<EN dub ID>' }]
       Until then the course runs without a video block.
       Questions follow the content of this video (example client Maria). */
    aiDub: true,
    postVideoText:
      'With this training you can discuss the biological age report on solid ground with your clients.',
    questions: [
      {
        q: 'The training compares telomeres to the plastic tips at the ends of shoelaces. What does this comparison illustrate?',
        options: [
          'They hold the two halves of the chromosome together',
          'They carry no genes and simply protect the chromosome',
          'They carry the most important genes of the chromosome',
          'They grow back after every cell division',
        ],
        correct: 1,
      },
      {
        q: 'Why does a cell go into sleep mode after about 50 to 70 divisions?',
        options: [
          'It has used up its nutrient reserves and needs to recover',
          'The immune system has marked it as damaged and switches it off',
          'It has reached its maximum size and can no longer divide',
          'Its telomeres are used up and genes begin to break off',
        ],
        correct: 3,
      },
      {
        q: 'Can the genes that maintain telomeres reverse telomere loss?',
        options: [
          'Yes — they rebuild the telomeres to their original length',
          'No — they have no influence on telomere length at all',
          'Not completely — but they slow the process down',
          'Only in childhood, while the body is still growing',
        ],
        correct: 2,
      },
      {
        q: 'Maria’s result for telomere maintenance lies in the middle range. How is this interpreted?',
        options: [
          'As impaired — telomere maintenance does not work as well for her',
          'As normal — no action is needed',
          'As above average — her telomeres are maintained particularly well',
          'As inconclusive — the analysis has to be repeated',
        ],
        correct: 0,
      },
      {
        q: 'Does a Mediterranean diet help Maria maintain her telomeres?',
        options: [
          'Yes — it helps everyone maintain their telomeres',
          'Yes — but only in combination with more Vitamin E',
          'No — it shortens the telomeres in most people',
          'No — with her gene variants it has no effect',
        ],
        correct: 3,
      },
      {
        q: 'In Maria’s report, Vitamin D3, Omega-3, Vitamin E, Resveratrol and Ginkgo are marked with green arrows. What does this mean?',
        options: [
          'Her levels of these nutrients are already sufficient',
          'She should reduce her intake of these nutrients',
          'She should eat more foods that contain these nutrients',
          'She needs a blood test for these nutrients first',
        ],
        correct: 2,
      },
    ],
    // NovoDaily Lifestyle Demo exists only in German — hidden in EN until translated.
    documents: [],
    hasDownload: false, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Biological Age FAQ ===== */
  {
    id: 'ba-faq-en',
    uid: 'c6d7e8f9-a0b1-4234-f000-000000000016',
    lang: 'en',
    category: CATEGORIES_EN.BIOAGE,
    topic: TOPIC_FAQ_EN,
    contentType: 'faq',
    description: 'Answers to typical client questions about the biological age analysis.',
    longDescription:
      'A collection of the most important questions about the telomere and anti-aging analysis. With collapsible answers for self-study.',
    bullets: [
      'What are telomeres and why do we age?',
      'How does my genetics affect biological age?',
      'Which nutrients and lifestyle measures help?',
      'Mediterranean diet — does it work for everyone?',
    ],
    thumbnail: '/thumbnails/ba-faq-cover.jpg',
    faqGroups: [
      {
        title: 'Basics — Telomeres & Aging',
        items: [
          { q: 'What are telomeres and why are they important for aging?', a: 'Telomeres are protective caps at the end of each chromosome — they contain no genes themselves, but protect genes from being lost during cell divisions. With each cell division, a small piece of telomere breaks off. After 50-70 divisions, they are used up; the cell goes into a sleep mode (senescence) and accumulates as an "old cell" in the body.' },
          { q: 'What is the difference between chronological and biological age?', a: 'Chronological age is the time you have lived, in years — fixed and unchangeable. Biological age describes how “old” your cells actually are, and telomeres are one of the factors behind it: babies have long telomeres, 90-year-olds short ones. People with two defective copies of the telomerase gene are already born with shorter telomeres — the difference in biological age can be up to 20 years.' },
          { q: 'What does telomerase do?', a: 'The telomerase gene helps maintain the telomeres. It cannot completely stop or reverse their shortening, but it slows it down: with well-functioning genes, telomeres get shorter more slowly with age; with a gene defect, they are lost faster. How well this protection works is partly genetic — and that is what the analysis looks at.' },
          { q: 'Which genes are evaluated in the analysis?', a: 'The analysis looks at two things: first, your genetic ability to maintain your telomeres, which depends mainly on the telomerase gene; second, whether a Mediterranean diet has an effect on your telomeres, which also depends on certain gene variants. It shows your genetic predisposition — not how long your telomeres actually are.' },
        ],
      },
      {
        title: 'What lifestyle does',
        items: [
          { q: 'Does a Mediterranean diet help maintain telomeres in everyone?', a: 'Surprisingly, no. Studies have shown that a Mediterranean diet helps keep telomeres longer only in people with certain gene variants — in everyone else, it has no effect on the telomeres. Your report shows which group you belong to. This refers only to the telomeres, not to other effects of the diet — and it is a clear example that the same lifestyle advice does not work the same way for everyone.' },
          { q: 'Which nutrients support telomeres?', a: 'Vitamin D3, Omega-3, Vitamin E, Resveratrol and Ginkgo. When the genetic protection system works less well, increasing these nutrients — for example by eating more foods that contain them — can help slow telomere shortening. They cannot reverse it.' },
          { q: 'Can I influence free radicals?', a: 'Yes, to a degree. Free radicals continuously damage our cells and are one of the reasons we age. Antioxidants help counter this; they are found, for example, in foods rich in Vitamin C and Vitamin E or in polyphenols from berries and tea. An antioxidant-rich diet can therefore support healthy aging.' },
        ],
      },
      {
        title: 'Influence & expectations',
        items: [
          { q: 'How quickly will I see results from anti-aging measures?', a: 'Not overnight. The recommended measures cannot make telomeres grow back — they help slow down their shortening, so the benefit builds up gradually over many years. Note that the genetic analysis shows your predisposition, not the current length of your telomeres, so the analysis result itself does not change through these measures.' },
          { q: 'What practical use does this knowledge give me?', a: 'You know how well your genes maintain your telomeres — and whether a Mediterranean diet helps you in this respect. If telomere maintenance is impaired, you can respond deliberately by increasing Vitamin D3, Omega-3, Vitamin E, Resveratrol and Ginkgo, for example through foods that contain them. A generally healthy lifestyle with an antioxidant-rich diet, regular exercise and enough sleep is also sensible.' },
        ],
      },
    ],
    documents: [
      {
        title: 'NovoAcademy FAQ PDF - Biological Age',
        size: '118 KB',
        type: 'pdf',
        url: '/course-materials/bioage/Novogenia_FAQ_Biological_Age_EN.pdf',
      },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Personalized Supplementation ======== */
  {
    id: 'supp-sci-en',
    uid: 'd7e8f9a0-b1c2-4345-0000-000000000017',
    lang: 'en',
    category: CATEGORIES_EN.SUPP,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'How genetic individual micronutrient needs make personalized supplementation possible — explained scientifically.',
    longDescription:
      'In this training, Dr. Daniel Wallerstorfer explains why every person has different micronutrient needs and how genetically personalized supplementation works. You will learn the microtransporter technology — how competing nutrients (e.g., calcium and zinc) can be absorbed simultaneously and why slow-release for Vitamin C mimics a physiologically meaningful pattern.',
    bullets: [
      'Genetic individual nutrient needs',
      'Microtransporter technology',
      'Slow-release & separated absorption (Calcium/Zinc)',
      'Bioavailability of vitamins and minerals',
    ],
    thumbnail: T(15),
    /* No coverImage on purpose: /thumbnails/supp-sci-cover.jpg carries German
       text. Without it, the video still falls back to the YouTube thumbnail of
       TIHnA7J6EP4. */
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'Why does every person have different micronutrient needs?',
      'How does microtransporter technology solve competing nutrients?',
      'Why is Vitamin C released slow-release?',
      'How can Calcium and Zinc be absorbed simultaneously despite mutual blockade?',
    ],
    brandNoticeAboveVideos: true,
    youtubeId: 'TIHnA7J6EP4',
    postVideoText:
      'With this background you can discuss the logic behind personalized supplementation on solid ground with your clients and explain microtransporter technology clearly — including the practical applications in pellets and IV-based delivery.',
    questions: [
      {
        q: 'Why does every person have a different micronutrient need?',
        options: [
          'Cell counts vary',
          'Genetic variants change how the body absorbs, metabolises and uses each nutrient — the same intake leads to different blood levels',
          'It depends only on water consumption',
          'Stomach size varies',
        ],
        correct: 1,
      },
      {
        q: 'What is the core problem the microtransporter technology solves?',
        options: [
          'Tablets too large to swallow',
          'In standard pills many nutrients block each other on absorption, or disappear from the bloodstream too quickly to be useful',
          'Vitamins are expensive to produce',
          'Supplements taste bad',
        ],
        correct: 1,
      },
      {
        q: 'Why is Vitamin C released as slow-release?',
        options: [
          'Vitamin C is toxic in high doses',
          'It only works at very high doses',
          'Vitamin C has a half-life of about 30 minutes — releasing it gradually through the day mimics natural intake from food and keeps blood levels stable',
          'Slow-release is just a marketing term',
        ],
        correct: 2,
      },
      {
        q: 'How does microtransporter technology let Calcium and Zinc be absorbed simultaneously despite blocking each other?',
        options: [
          'Only one of the two is used',
          'Calcium and Zinc are chemically combined into a new compound',
          'They are simply packed into the same pill together',
          'Zinc is released in the upper intestine immediately, Calcium hours later in the lower intestine — taken together but released spatially and temporally separated, so they never compete for the same transporters',
        ],
        correct: 3,
      },
      {
        q: 'How many genes are analysed for the personalized supplementation report?',
        options: ['About 10', 'About 25', 'Over 60', 'Exactly 200'],
        correct: 2,
      },
      {
        q: 'What is the key advantage of personalized over standard supplementation?',
        options: [
          'It contains more vitamins per pill',
          'Dose, selection and release form match the individual genetic need — no "one size fits all"; the nutrient actually reaches the bloodstream instead of being excreted',
          'It is always cheaper',
          'It works on day 1',
        ],
        correct: 1,
      },
    ],
    documents: [
      // Slides exist only in German — hidden in EN until translated.
      { title: 'NovoAcademy Science PDF - Slow-Release Microtransporters — Pellet Technology', size: '305 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Slow_Release_Pellets_Review.pdf' },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Personalized Supplementation FAQ ===== */
  {
    id: 'supp-faq-en',
    uid: 'e8f9a0b1-c2d3-4456-0000-000000000018',
    lang: 'en',
    category: CATEGORIES_EN.SUPP,
    topic: TOPIC_FAQ_EN,
    contentType: 'faq',
    description: 'Answers to typical client questions about personalized supplementation and microtransporter technology.',
    longDescription:
      'A collection of the most important client questions around personalized supplementation — why not every pill works, what microtransporter technology really does differently, and how genetic information shapes the dosage.',
    bullets: [
      'What is the difference between standard and personalized supplementation?',
      'How does microtransporter technology work?',
      'How does the dosage adapt to genetic needs?',
      'What does personalized supplementation cost in comparison?',
    ],
    thumbnail: T(15),
    faqGroups: [
      {
        title: 'Basics — Why personalized?',
        items: [
          { q: 'Why do I need personalized supplementation at all?', a: 'Because your body genetically utilizes some nutrients better or worse than another person — and because your lifestyle (exercise, sleep, stress, nutrition) additionally shapes your individual need. Standard pills assume the "average person" and therefore cover many individual needs either too little or too much.' },
          { q: 'What is the difference from standard multivitamins from the drugstore?', a: 'Three main points: (1) The selection of nutrients and their dosage is tailored to your genes; (2) the release is timed (e.g., Slow-Release Vitamin C) to keep blood levels constant; (3) competing nutrients like Calcium and Zinc are released spatially and temporally separated so they don\'t block each other.' },
          { q: 'How many genes does the analysis consider?', a: 'Over 60 nutrient-relevant gene variants — including vitamin-metabolism genes (folate-MTHFR, Vit-D-VDR, Vit-B12-FUT2), mineral-absorption genes (iron-HFE, calcium-LCT), and antioxidant defense systems (GST, SOD, CAT).' },
        ],
      },
      {
        title: 'Microtransporter Technology',
        items: [
          { q: 'What are microtransporters?', a: 'Microtransporters are tiny pellets in the millimetre range, each carrying individual nutrients in specific protective shells. Each microtransporter "releases" at a different time and a different location in the GI tract — so even normally competing nutrients can be taken together but absorbed separately.' },
          { q: 'Why is Vitamin C released as slow-release?', a: 'Vitamin C has a very short biological half-life (~30 minutes). A single high dose is largely excreted unused. Slow-Release in the microtransporters mimics the natural, continuous intake from food across the day and keeps blood levels stable — physiologically much more sensible.' },
          { q: 'How does it work with Calcium and Zinc that block each other?', a: 'Calcium and Zinc compete for the same intestinal transporters — taking both together yields less of both. In the microtransporter technology, Zinc is released in the upper small intestine immediately, Calcium hours later in the deeper intestinal segment. Both are taken at once, but released at different places and times — no competition.' },
        ],
      },
      {
        title: 'Practical questions',
        items: [
          { q: 'Do I have to take the pills at fixed times?', a: 'We recommend a consistent time of day (e.g. with breakfast) to keep blood levels stable. You don\'t have to watch the minute — a rough routine is enough. The most important thing is taking them regularly at all.' },
          { q: 'How fast will I notice an effect?', a: 'It varies by nutrient. Some effects (e.g. better energy with B-vitamins) appear within days to weeks; others (e.g. bone metabolism with Vitamin D) develop over months. Personalized supplementation is not a fast-acting medication — it corrects long-term nutrient gaps.' },
          { q: 'Do I need supplementation forever?', a: 'For genetically caused metabolic weaknesses yes, because the predisposition lasts a lifetime. Lifestyle-driven needs (e.g. higher need during stress, exercise, illness) can change. The analysis also shows you where your genetics produce a permanently elevated need and where lifestyle adjustment alone is sufficient.' },
          { q: 'Can I combine supplementation with medications?', a: 'Generally yes — all nutrients are dosed in food-typical amounts. With chronic disease or long-term medication you should discuss this with your physician, because individual nutrients (e.g. Vitamin K, iron) can interact with certain drugs.' },
          { q: 'How does personalized cost compare to drugstore multivitamins?', a: 'Significantly more per day — typically 3-5× the cheapest drugstore products. In return you get a genetically tailored composition that probably actually gets absorbed instead of being largely excreted unused. The "per mg of vitamin" comparison is misleading; "per mg that actually reaches the blood" is more meaningful.' },
        ],
      },
    ],
    documents: [
      {
        title: 'NovoAcademy FAQ PDF - Personalized Supplementation',
        size: '120 KB',
        type: 'pdf',
        url: '/course-materials/supplements/Novogenia_FAQ_Personalized_Supplementation_EN.pdf',
      },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Beauty ======== */
  {
    id: 'beauty-sci-en',
    uid: 'f9a0b1c2-d3e4-4567-0000-000000000019',
    lang: 'en',
    category: CATEGORIES_EN.BEAUTY,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'How genes co-determine skin aging, wrinkle formation, UV sensitivity, and skin hydration — explained scientifically.',
    longDescription:
      'In this training, Dr. Daniel Wallerstorfer explains the genetic foundations of the DNAbeauty Control analysis. Which genes control collagen breakdown? Why does skin burn faster for some people? How does skin hydration relate to filaggrin and other genes? And what can be derived from this information for truly personalized skincare?',
    bullets: [
      'Genetic skin aging & collagen breakdown (MMP1)',
      'UV sensitivity and pigmentation (MC1R)',
      'Skin hydration & barrier function (FLG)',
      'Antioxidant defense systems of the skin (SOD, CAT, GPX)',
    ],
    thumbnail: T(1),
    youtubeId: 'IgNeWJ6tTng',
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'Which genes control collagen breakdown and thus wrinkle formation?',
      'How does genetic UV sensitivity differ between people?',
      'What role do antioxidant genes play in skin aging?',
      'How does genetic skin hydration relate to the skincare routine?',
    ],
    postVideoText:
      'With this scientific background you can discuss the Beauty report on solid ground with your clients and derive individual care strategies from the genetic results.',
    questions: [
      {
        q: 'Which enzyme / gene is central for the breakdown of collagen in the skin and thus for wrinkle formation?',
        options: [
          'MTHFR — folate activation',
          'MMP1 — Matrix Metalloproteinase 1 (breaks down collagen)',
          'CYP1A2 — caffeine breakdown',
          'LCT — lactase persistence',
        ],
        correct: 1,
      },
      {
        q: 'A client carries a very active MMP1 variant. What does this mean for her skincare?',
        options: [
          'She needs no anti-aging measures',
          'Increased risk of early wrinkle formation — anti-aging measures (antioxidants, UV protection, collagen boosters, no smoking) are particularly important for her',
          'The variant only affects hair colour',
          'She should eat more carbs',
        ],
        correct: 1,
      },
      {
        q: 'Which statement about genetic UV sensitivity (e.g. MC1R) is correct?',
        options: [
          'Genetic variants do not influence UV sensitivity — only skin type matters',
          'Carriers of unfavourable variants burn more easily and have a higher risk of UV-related skin aging and skin cancer — strict UV protection is even more important',
          'At high genetic UV sensitivity, one should avoid sun completely, even in the shade',
          'Sunscreen works only for people with "normal" genes',
        ],
        correct: 1,
      },
      {
        q: 'Why are antioxidant genes like SOD2, CAT and GPX important for skin aging?',
        options: [
          'They produce free radicals',
          'They protect against oxidative stress, which causes DNA damage in skin cells — when these defenses are weak the skin ages measurably faster; antioxidants (vitamin C, E, polyphenols) become especially important',
          'They only influence the immune system, not the skin',
          'They produce pigment',
        ],
        correct: 1,
      },
      {
        q: 'Best fitting recommendation for a client with genetically reduced skin hydration (e.g. unfavourable FLG / filaggrin variants)?',
        options: [
          'Hot showers and strong soapy cleansers',
          'Increased use of moisture-binding and barrier-strengthening care (Hyaluronic acid, Ceramides, Glycerin), mild cleansers, avoid drying agents',
          'Skip skincare entirely — the skin regulates itself',
          'Only let water touch the skin once a week',
        ],
        correct: 1,
      },
      {
        q: 'What distinguishes the genetic skin analysis from a purely cosmetic consultation?',
        options: [
          'It is cheaper',
          'It identifies permanent genetic weak points of the skin instead of merely judging the current state — care and protection can be applied proactively for the long term rather than reactively',
          'It replaces every medical skin exam',
          'It is only useful for young people',
        ],
        correct: 1,
      },
    ],
    documents: [
      // Slides + Beauty Sensor Demo exist only in German — hidden in EN until translated.
      { title: 'NovoAcademy Science PDF - Telomeres & Skin Aging', size: '299 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Telomeres_Biological_Age_Review.pdf' },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false, initialTestPassed: false,
  },

  /* ===== Beauty FAQ ===== */
  {
    id: 'beauty-faq-en',
    uid: 'a0b1c2d3-e4f5-4678-0000-000000000020',
    lang: 'en',
    category: CATEGORIES_EN.BEAUTY,
    topic: TOPIC_FAQ_EN,
    contentType: 'faq',
    description: 'Answers to typical client questions about the genetically founded skin analysis (DNAbeauty Control).',
    longDescription:
      'A collection of the most important client questions around the genetic skin analysis: what it really tells you, which genes are considered, how practical care recommendations are derived, and what expectations are realistic.',
    bullets: [
      'What DNAbeauty Control really tells you — and what not',
      'How genetic skin analysis differs from cosmetic consultation',
      'Which genes we look at (MMP1, MC1R, FLG, …)',
      'What practical care recommendations look like',
    ],
    thumbnail: '/thumbnails/beauty-faq-cover.jpg',
    faqGroups: [
      {
        title: 'Basics — What the genetic skin analysis does',
        items: [
          { q: 'What is the genetic skin analysis (DNAbeauty Control)?', a: 'An analysis of your genes focusing on skin-relevant areas: collagen breakdown, UV sensitivity, pigmentation, skin hydration, antioxidant defense, and inflammation tendency. From your DNA dataset, over 20 skin-relevant gene variants are evaluated and translated into practical care and protection recommendations.' },
          { q: 'What is the difference from a cosmetic skin analysis?', a: 'Cosmetic skin analyses measure your skin\'s current state — hydration, sebum, pigmentation, etc. — and react to it. The genetic skin analysis shows you which properties and weaknesses are PERMANENTLY anchored in your genes. You can proactively prevent, instead of reactively treating when problems become visible.' },
          { q: 'How many genes are analysed?', a: 'Over 20 skin-relevant gene variants. Main areas: MMP1 (collagen breakdown, wrinkles), MC1R (UV sensitivity, pigmentation), FLG (filaggrin, skin hydration / barrier), SOD2/CAT/GPX (antioxidant defense), inflammation genes like IL6 and TNF-α.' },
          { q: 'How long is my result valid?', a: 'Your genes do not change throughout life — so the core results stay permanently valid. What gets refined: the evaluation itself, as new research is continuously incorporated.' },
        ],
      },
      {
        title: 'Genetics & Skin Aging — Understanding the result',
        items: [
          { q: 'What does an "active" MMP1 variant mean?', a: 'MMP1 (Matrix-Metalloproteinase 1) breaks down collagen in the skin. A genetically highly active variant leads to faster collagen breakdown — the skin loses firmness earlier, wrinkles form faster. Countermeasures: consistent UV protection, antioxidants, no smoking, retinoids or peptide-based care.' },
          { q: 'What does MC1R tell me about UV sensitivity?', a: 'MC1R controls production of Eumelanin (dark pigment, protective against UV) vs. Pheomelanin (reddish pigment, generates free radicals under UV). Unfavourable variants: faster sunburn, higher risk of UV damage and skin cancer — stricter sunscreen discipline needed.' },
          { q: 'Why is FLG (filaggrin) important for my skincare?', a: 'FLG produces filaggrin, a protein that holds the natural skin barrier together and binds moisture. With genetically reduced FLG activity, the skin barrier is weaker — moisture is lost faster, irritants penetrate more easily. Recommendation: barrier-strengthening care (Ceramides, Cholesterol, free fatty acids), mild cleansers, no drying surfactants.' },
          { q: 'Does this really affect my appearance measurably?', a: 'Yes, but not overnight. Genetic weaknesses compound over years. Two people of the same age can differ by 10-15 years biologically — depending on how well they compensate genetic weak spots with lifestyle.' },
        ],
      },
      {
        title: 'Practical recommendations & expectations',
        items: [
          { q: 'How quickly will I notice an effect from personalized care?', a: 'Some effects appear in weeks (hydration, glow, irritation), others only after months to years (wrinkle formation, pigmentation, skin structure). Personalized care is not a quick fix but a long-term protective strategy.' },
          { q: 'Do I need expensive creams?', a: 'Not necessarily. What matters is the right ingredients for your genetic predisposition — and those exist at every price point. What counts: active-ingredient concentration, formulation, and consistency of application. An affordable Vitamin C serum can outperform an expensive cream without active ingredients.' },
          { q: 'Is my lifestyle more important than my genes?', a: 'Both work together. Genes set the potential and the weak spots — lifestyle decides how much you compensate or amplify those weak spots. Rule of thumb: with genetically unfavourable predisposition, consistent lifestyle becomes even more important than with "lucky genes".' },
        ],
      },
    ],
    documents: [
      {
        title: 'NovoAcademy FAQ PDF - Healthy Skin and Appearance',
        size: '120 KB',
        type: 'pdf',
        url: '/course-materials/beauty/Novogenia_FAQ_Healthy_Skin_EN.pdf',
      },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Drug Intolerance / Pharmacogenetics ======== */
  {
    id: 'pharma-sci-en',
    uid: 'b1c2d3e4-f5a6-4789-0000-000000000021',
    lang: 'en',
    category: CATEGORIES_EN.PHARMA,
    topic: TOPIC_WB_EN,
    contentType: 'course',
    description: 'How genetic variants influence drug metabolism and tolerance — explained scientifically.',
    longDescription:
      'In this training, Dr. Daniel Wallerstorfer explains why medications work differently in different people. You will learn how CYP enzymes break down active substances, what "fast" vs. "slow metabolizer" means, and how this knowledge guides safer prescribing decisions.',
    bullets: [
      'CYP enzymes & drug metabolism',
      'Fast and slow metabolizers',
      'Clinically relevant active substances (antidepressants, analgesics, anticoagulants, …)',
      'Practical relevance in consultation',
    ],
    thumbnail: T(24),
    youtubeId: 'SgzAZyUIx-0',
    introQuestionsHeader: 'This training answers:',
    introQuestions: [
      'Why do medications work differently in different people?',
      'Which CYP enzymes are responsible for breaking down the most important active substances?',
      'What does "fast" vs. "slow metabolizer" mean in clinical everyday life?',
      'Which medications are particularly relevant for pharmacogenetic consultation?',
    ],
    postVideoText:
      'With this background you can discuss the relevance of pharmacogenetic testing with clients and physicians — explaining why a dose that works for most can be too strong or too weak for a given individual depending on their CYP genotype.',
    questions: [
      {
        q: 'Why does the same medication work differently in different people?',
        options: [
          'It is a coincidence of mood',
          'Genetic variants in CYP enzymes change the speed at which the drug is broken down — fast metabolizers clear it too quickly (weaker effect), slow metabolizers accumulate it (stronger / toxic effect)',
          'Body weight is the only factor',
          'There is no real difference',
        ],
        correct: 1,
      },
      {
        q: 'What does "poor metabolizer" mean clinically?',
        options: [
          'The person cannot digest food properly',
          'Their CYP enzyme variant breaks down the drug very slowly, so the active substance accumulates — standard doses can lead to side effects or toxicity',
          'They need a larger dose to feel any effect',
          'It only affects mental health drugs',
        ],
        correct: 1,
      },
      {
        q: 'Which CYP enzyme is one of the most clinically relevant for drug metabolism?',
        options: [
          'CYP2D6 — involved in metabolizing antidepressants, beta-blockers, opioids and many other widely prescribed drugs',
          'CYP1B5',
          'CYP9Z1',
          'CYPX',
        ],
        correct: 0,
      },
      {
        q: 'How should a pharmacogenetic finding be used in practice?',
        options: [
          'As a reason to stop all medication',
          'As guidance for the prescribing physician — to choose alternative drugs or adjust dosing for the patient\'s metabolizer type, reducing side effects and improving efficacy',
          'It is only useful for research',
          'It replaces medical diagnosis',
        ],
        correct: 1,
      },
      {
        q: 'Why is pharmacogenetics important in consultation?',
        options: [
          'It is mainly a sales topic',
          'About 7% of all medications have clinically actionable pharmacogenetic guidelines — knowing the genotype before prescribing can prevent severe side effects and treatment failure',
          'It only matters for cancer drugs',
          'It is too rare to consider',
        ],
        correct: 1,
      },
    ],
    documents: [
      // Slides + Pharmaco Sensor Demo exist only in German — hidden in EN until translated.
      { title: 'NovoAcademy Science PDF - Caffeine & CYP1A2 Variant (Pharmacogenetics example)', size: '244 KB', type: 'pdf', url: '/course-materials/scientific-reviews/Caffeine_Review.pdf' },
    ],
    hasDownload: true, hasText: false,
    initialWatched: false,
  },

  /* ======== Legally Safe Advertising ======== */
  {
    id: 'legal-basics-en',
    uid: 'c2d3e4f5-a6b7-4890-0000-000000000022',
    lang: 'en',
    category: CATEGORIES_EN.LEGAL,
    topic: 'Advertising Guideline for Novogenia Products',
    contentType: 'training',
    description: 'Which advertising claims for gene analyses, blood tests, and supplements are legally safe — and which are subject to warning letters.',
    longDescription:
      'A text-based training (no video) on legally compliant advertising of Novogenia products. Source: Novogenia Advertising Guideline. You will learn how warning letters work, which statements are safe, which are critical — and which best practices Novogenia has developed in 13 years of practice.',
    bullets: [
      'How a warning letter works and what it costs',
      'Safe vs. risky advertising claims for blood tests, gene tests, and supplements',
      'The EU Health Claims for supplements',
      'Handling customer reviews and testimonials',
    ],
    thumbnail: T(24),
    introQuestionsHeader: 'In this training you will learn:',
    introQuestions: [
      'How warning-letter associations work and what costs to expect',
      'Which advertising claims for blood tests are legally safe',
      'Why genetic properties can be advertised safely but action recommendations are critical',
      'How to correctly apply Health Claims for supplements',
      'How to moderate customer reviews legally safely',
    ],
    articleSections: [
      {
        title: 'Advertising Novogenia products',
        paragraphs: [
          'Novogenia is at the forefront of scientific possibilities and offers established analysis procedures like blood tests but also advanced possibilities like gene analyses and personalized products. Since we are in the health sector, there are strict rules for advertising claims that must be observed. Particularly in Germany, there are warning-letter associations that look for unclear or misleading statements and issue warnings.',
          'We are firmly convinced that our recommendations are effective and consider the most advanced state of science. Unfortunately, what a product can do and what one is allowed to claim in advertising are sometimes different.',
        ],
      },
      {
        title: 'Advertising with blood tests',
        paragraphs: [
          'Blood tests are well established and only subject to minor advertising restrictions. The statements below are all uncritical.',
        ],
        bullets: [
          { tone: 'safe', text: '"We test blood."' },
          { tone: 'safe', text: '"We diagnose deficiencies."' },
          { tone: 'safe', text: '"We give micronutrient and nutrition recommendations."' },
          { tone: 'safe', text: '"We personalize supplements based on the result."' },
          { tone: 'safe', text: 'Symptoms of a deficiency (e.g. fatigue from iron deficiency) — best with a source citation (e.g. a medical association).' },
          { tone: 'safe', text: 'Testimonial: "I was often tired, the test identified iron deficiency, and it helped me" — permitted.' },
        ],
      },
      {
        title: 'Advertising with genetic tests',
        paragraphs: [
          'DNA analyses are not yet a standard method in every doctor\'s office. Warning-letter associations critically scrutinize technologies that are not yet considered standard practice by the majority of experts. DNA analysis is therefore under special observation.',
          'From the warning-letter association\'s view, a DNA analysis has two components: the scientifically validated analysis of the genetic properties (uncritical) and the action programme derived from it (critical).',
        ],
        bullets: [
          { tone: 'safe', text: 'Determination of the genetic properties — backed by current science.' },
          { tone: 'critical', text: 'Concrete nutrition, exercise or supplement recommendations derived from the genes — without specific randomized trials on that exact recommendation.' },
        ],
        callout: { tone: 'safe', text: 'Example: "Gene test proves that folic acid is ineffective for you" — permitted (study-backed).' },
      },
      {
        title: 'The safe variant — genetic properties only',
        paragraphs: [
          'The safe variant focuses on statements limited to the determined genetic properties — without deriving concrete action recommendations. All the formulations below are uncritical from the warning-letter perspective.',
        ],
        bullets: [
          { tone: 'safe', text: '"We analyse your genes and determine whether you gain weight more easily on fat or on carbohydrates."' },
          { tone: 'safe', text: '"You find out whether you respond more to exercise or to calorie reduction."' },
          { tone: 'safe', text: '"You learn whether your body can activate folic acid effectively."' },
          { tone: 'safe', text: '"You learn which talents your body has in competitive sports and how well your muscles respond to resistance training."' },
        ],
      },
      {
        title: 'The bolder variant — recommendations with a disclaimer',
        paragraphs: [
          'In this variant, the test is advertised as above — but action recommendations are communicated as logical conclusions, not as scientifically confirmed promises. With a disclaimer. Caveat: warning-letter associations do not always accept disclaimers.',
        ],
        bullets: [
          { tone: 'caveat', text: '"We analyse your genes and determine whether you gain weight more easily on fat or on carbohydrates. Based on this we derive logical conclusions and nutrition plans to use this insight.*"' },
          { tone: 'caveat', text: '"You learn whether your body can activate folic acid. Based on this, we recommend alternative micronutrients to take instead.*"' },
          { tone: 'critical', text: 'COUNTER-EXAMPLE: "Take methylfolate instead of folic acid" — critical without disclaimer, because there is no randomized trial on this exact specific recommendation.' },
        ],
        callout: { tone: 'caveat', text: '* Disclaimer note: The genetic properties are scientifically confirmed. The derived adjustments to micronutrient dosing or nutrition recommendations are not yet at the gold-standard level (randomized, placebo-controlled trials) for many effects and should be understood as experimental.' },
      },
      {
        title: 'Advertising personalized supplementation',
        paragraphs: [
          'The European Union has set up a clear regulatory framework for claims about the effect of supplements — the "Health Claims". These define exactly which effects can be advertised for each active ingredient.',
          'Regardless of how much science backs an effect, it is not allowed to promote it in advertising until the Health Claim has been approved by EFSA. Stick to the extensive list of permitted claims.',
        ],
        bullets: [
          { tone: 'safe', text: 'Personalization based on lifestyle and blood values — unproblematic.' },
          { tone: 'caveat', text: 'Personalization based on genetic analysis — only with a disclaimer (see "bolder variant").' },
          { tone: 'safe', text: 'Example health claim: "Contributes to normal skin" (with zinc), "Contributes to a normal immune system".' },
          { tone: 'safe', text: 'Example testimonial: "I take it because I have dry skin" — combined with the zinc Health Claim — permitted.' },
          { tone: 'critical', text: 'NOT permitted: any claim whose Health Claim has not been approved by EFSA (e.g. "heals your disease").' },
        ],
      },
      {
        title: 'Customer reviews and testimonials',
        paragraphs: [
          'If you offer a customer review system (e.g. on your website), you cannot control whether a customer makes impermissible statements (e.g. "Product X cured me"). This is permitted in principle but must be handled carefully.',
        ],
        bullets: [
          { tone: 'safe', text: 'On your own moderable system: clearly label statements as customer opinions and that you do not endorse them.' },
          { tone: 'safe', text: 'Statements that violate the Health Claims Regulation should be deleted.' },
          { tone: 'safe', text: 'For a massively wrong rating: add a corrective reply from the company.' },
          { tone: 'caveat', text: 'On external, non-moderable systems: declare them clearly and never selectively promote false statements.' },
          { tone: 'critical', text: 'Actively promoting or highlighting false statements — even when they are customer voices.' },
        ],
      },
    ],
    questions: [
      {
        q: 'What is a typical initial fee charged by a warning-letter association?',
        options: ['About 50 €', 'About 200 €', 'About 1,000 €', 'About 5,000 €'],
        correct: 1,
      },
      {
        q: 'What is the typical penalty for re-using a contested advertising claim?',
        options: ['About 200 €', 'About 1,000 €', 'About 5,000 €', 'About 50,000 €'],
        correct: 2,
      },
      {
        q: 'Which forms of advertising typically trigger warning letters?',
        options: [
          'Direct-sales materials and verbal consultation',
          'Broadly distributed advertising such as TV, magazines, and social media',
          'Print advertising only',
          'Websites without paid advertising',
        ],
        correct: 1,
      },
      {
        q: 'Which part of a DNA analysis is typically UNCRITICAL from a warning-letter association\'s view?',
        options: [
          'The concrete nutrition and sport plans',
          'The personalized micronutrient recommendations',
          'The scientific analysis of the genetic properties',
          'All statements about DNA tests are critical',
        ],
        correct: 2,
      },
      {
        q: 'Which part of a DNA analysis is typically CRITICAL?',
        options: [
          'Determining the gene variants',
          'The concrete action plans derived from them (nutrition, sport, supplements)',
          'Sample collection in the lab',
          'Explaining the science in the report',
        ],
        correct: 1,
      },
      {
        q: 'Which folic acid statement is SAFE under the advertising guideline?',
        options: [
          '"Take methylfolate instead of folic acid — it works better for you."',
          '"You learn whether your body can activate folic acid effectively."',
          '"Our test replaces a doctor\'s visit for folic acid questions."',
          '"Folic acid is generally ineffective."',
        ],
        correct: 1,
      },
      {
        q: 'What are EU Health Claims?',
        options: [
          'A list of forbidden advertising claims',
          'A framework of precisely defined effect claims permitted for supplements',
          'Studies on clinical efficacy',
          'A self-declaration by the manufacturer',
        ],
        correct: 1,
      },
      {
        q: 'Who carries legal responsibility for a reseller\'s advertising claims?',
        options: [
          'Novogenia is fully liable',
          'The partner / reseller themselves — Novogenia accepts no liability',
          'The warning-letter associations',
          'No one carries responsibility',
        ],
        correct: 1,
      },
      {
        q: 'How should a customer review containing an impermissible Health Claim (e.g. "the product cured me") be handled?',
        options: [
          'Leave it unchanged — customer opinions are always legally safe',
          'Clearly label it as a customer opinion; on moderable systems delete the impermissible statement or attach a corrective reply',
          'Disable all reviews immediately',
          'Report the customer',
        ],
        correct: 1,
      },
      {
        q: 'Which strategy for advertising personalized supplements is UNCRITICAL?',
        options: [
          'Advertising with concrete healing promises that are not in the Health Claims list',
          'Personalization based on lifestyle and blood values — both unproblematic',
          'Statements like "heals your disease"',
          'Advertising without an ingredient list',
        ],
        correct: 1,
      },
    ],
    // Advertising Guideline PDF exists only in German — hidden in EN until translated.
    documents: [],
    hasDownload: false, hasText: true,
    initialWatched: false, initialTestPassed: false,
  },

]

/* ---- English MAIN_CATEGORIES (display grouping) ---- */
export const MAIN_CATEGORIES_EN = [
  {
    title: 'Lifestyle DNA Analyses',
    sections: [
      CATEGORIES_EN.WEIGHT,
      CATEGORIES_EN.NUTRITION,
      CATEGORIES_EN.PERFORMANCE,
      CATEGORIES_EN.DETOX,
      CATEGORIES_EN.BURNOUT,
      CATEGORIES_EN.BIOAGE,
    ],
  },
  {
    title: 'Personalized Supplementation',
    sections: [CATEGORIES_EN.SUPP],
  },
  {
    title: 'Beauty',
    sections: [CATEGORIES_EN.BEAUTY],
  },
  {
    title: 'Additional Analyses',
    sections: [CATEGORIES_EN.PHARMA],
  },
  {
    title: 'Training for Partners and Resellers',
    sections: [CATEGORIES_EN.LEGAL],
  },
]

/* ---- English SECTION_PRODUCT_LABELS ---- */
export const SECTION_PRODUCT_LABELS_EN = {
  [CATEGORIES_EN.WEIGHT]:      'Shape, Weight Sensor',
  [CATEGORIES_EN.NUTRITION]:   'Nutrition, Nutrition Sensor',
  [CATEGORIES_EN.PERFORMANCE]: 'Performance, Performance Sensor',
  [CATEGORIES_EN.DETOX]:       'Detox, Toxo Sensor',
  [CATEGORIES_EN.BURNOUT]:     'Burnout',
  [CATEGORIES_EN.BIOAGE]:      'Bio Age, Biological Age Sensor',
  [CATEGORIES_EN.SUPP]:        'Novodailies, Nutrime Complete',
  [CATEGORIES_EN.BEAUTY]:      'Beauty, Beauty Sensor',
  [CATEGORIES_EN.PHARMA]:      'Pharmaco Sensor, Drug Response',
}
