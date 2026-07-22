/* AUTO-GENERATED — ES academy (es).
   Transforms COURSES_EN: translated ES text + ES lip-sync videos + lang:'es'.
   Documents stay ENGLISH (per spec). Missing videos -> placeholder ("VIDEO COMING SOON").
   Regenerate via gen_langfile.mjs. Do not edit by hand. */
import { COURSES_EN, CATEGORIES_EN, MAIN_CATEGORIES_EN, SECTION_PRODUCT_LABELS_EN,
  TOPIC_WB_EN, TOPIC_REPORT_EN, TOPIC_FAQ_EN } from './data.en.js'

// VIDEOS: EN youtubeId -> ES lip-sync youtubeId. Empty until dubs are uploaded.
const VIDEOS = {}
const CAT = {
 "The Gene-Diet": "La dieta genética",
 "Eat Healthy by Your Genes": "Come sano según tus genes",
 "Athletic Performance": "Rendimiento deportivo",
 "Detoxification": "Detoxificación",
 "Burnout and Stress": "Burnout y estrés",
 "Biological Age": "Edad biológica",
 "Personalized Supplementation": "Suplementación personalizada",
 "Healthy Skin and Appearance": "Piel sana y apariencia",
 "Drug Intolerance": "Intolerancia a medicamentos",
 "Legally Safe Advertising with Products": "Publicidad legalmente segura con productos"
}
const TOPIC = {
 "Scientific Basis": "Base científica",
 "Consultation Training": "Formación en asesoramiento",
 "Frequently Asked Questions": "Preguntas frecuentes",
 "Advertising Guideline for Novogenia Products": "Directriz publicitaria para productos Novogenia"
}
const MAIN_TITLES = {
 "Lifestyle DNA Analyses": "Análisis de ADN de estilo de vida",
 "Personalized Supplementation": "Suplementación personalizada",
 "Beauty": "Beauty",
 "Additional Analyses": "Análisis adicionales",
 "Training for Partners and Resellers": "Formación para socios y revendedores"
}
const TXT = {
 "bo-faq-en": {
  "topic": "Preguntas Frecuentes",
  "description": "Respuestas a preguntas típicas de los clientes sobre el estrés genético y la predisposición al burnout.",
  "longDescription": "Una recopilación de las preguntas más comunes sobre el análisis genético de burnout y estrés — qué significan COMT y BDNF, en qué se diferencian los tipos Warrior y Worrier, y qué recomendaciones concretas se derivan de ello.",
  "bullets": [
   "¿Qué es el gen COMT?",
   "¿Qué significa Warrior frente a Worrier?",
   "¿Cómo es genético el riesgo de burnout?",
   "¿Qué recomendaciones se derivan del perfil?"
  ]
 },
 "ba-sci-en": {
  "topic": "Base Científica",
  "description": "Cómo se determina genéticamente la edad biológica y cómo influye en ella el estilo de vida.",
  "longDescription": "Esta formación explica la base científica detrás de la determinación de la edad biológica. Aprenderás qué genes influyen en la longitud de los telómeros y el envejecimiento celular, en qué se diferencia la edad biológica de la edad cronológica, y qué factores del estilo de vida pueden alterar de forma medible la edad biológica.",
  "postVideoText": "Con esta base científica, puedes hablar del análisis de edad biológica con tus clientes sobre una base sólida.",
  "introQuestionsHeader": "Esta formación responde a:",
  "bullets": [
   "Telómeros y envejecimiento celular — fundamentos",
   "Edad cronológica frente a biológica",
   "Factores genéticos del envejecimiento (TERT, BICD1 y Cía.)",
   "Estrategias antienvejecimiento con efecto medible"
  ],
  "introQuestions": [
   "¿Cuál es la diferencia entre edad cronológica y edad biológica?",
   "¿Cómo se miden los telómeros y qué nos indican?",
   "¿Qué genes influyen en el envejecimiento celular?",
   "¿Qué medidas de estilo de vida alteran de forma demostrable la edad biológica?"
  ],
  "questions": [
   {
    "q": "¿Cuál es la diferencia entre edad cronológica y edad biológica?",
    "options": [
     "No hay diferencia — son idénticas",
     "La edad cronológica es el tiempo transcurrido desde el nacimiento; la edad biológica describe el estado celular real — influida por el estilo de vida y la genética",
     "La edad biológica siempre es superior a la edad cronológica",
     "La edad cronológica se mide en laboratorio, la edad biológica se estima"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué estructuras celulares se acortan con cada división celular y son un indicador clave de la edad biológica?",
    "options": [
     "Mitocondrias",
     "Ribosomas",
     "Telómeros",
     "Membranas celulares"
    ],
    "correct": 2
   },
   {
    "q": "¿Cuál es la función de la enzima telomerasa?",
    "options": [
     "Descompone las células que han envejecido",
     "Puede reparar y alargar los telómeros — ralentizando su acortamiento",
     "Produce radicales libres",
     "Transporta oxígeno en la sangre"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente tiene una telomerasa genéticamente débil (\"zona roja\"). ¿Cuál es la mejor recomendación en la consulta?",
    "options": [
     "Ignorar la predisposición — los telómeros no se pueden influir",
     "Compensar la debilidad genética con el estilo de vida: dieta rica en antioxidantes, nutrientes específicos (D3, Omega-3, Resveratrol), ejercicio moderado y regular, buen sueño y reducción del estrés",
     "Dejar de hacer ejercicio por completo — genera estrés oxidativo",
     "Acudir al médico de inmediato — la variante es patológica"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué mostró la investigación sobre la dieta mediterránea y la longitud de los telómeros?",
    "options": [
     "Alarga los telómeros de forma medible en todas las personas",
     "Solo funciona en portadores de un genotipo específico — los demás no ven ningún efecto sobre los telómeros. Un claro ejemplo de que el mismo consejo de estilo de vida no funciona igual para todos",
     "Acorta los telómeros — debería evitarse",
     "No tiene ningún efecto medible en nadie"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo debería plantearse una predisposición antienvejecimiento desfavorable en la consulta?",
    "options": [
     "Como un destino inmutable — el cliente envejecerá prematuramente",
     "Como algo irrelevante — los genes no importan para el envejecimiento",
     "Como un riesgo elevado, no un destino: los clientes que conocen sus puntos débiles genéticos pueden aplicar antioxidantes, sueño, ejercicio y reducción del estrés de forma más deliberada — los efectos se acumulan a lo largo de los años",
     "Como una enfermedad que requiere tratamiento inmediato"
    ],
    "correct": 2
   }
  ]
 },
 "ba-report-en": {
  "topic": "Formación en Consultoría",
  "description": "Repasa el informe de edad biológica con tu cliente.",
  "longDescription": "En esta formación de consultoría, el Dr. Daniel Wallerstorfer explica cómo repasar el informe genético de edad biológica y del proceso de envejecimiento con tus clientes.",
  "postVideoText": "Con esta formación puedes hablar del informe de edad biológica sobre una base sólida con tus clientes. El folleto de demostración a continuación puede servir como informe de ejemplo para tu propia práctica de consultoría.",
  "introQuestionsHeader": "En esta formación aprenderás:",
  "bullets": [
   "Repasar el informe de edad biológica de forma estructurada",
   "Plantear el proceso de envejecimiento en términos genéticos",
   "Derivar recomendaciones antienvejecimiento concretas",
   "Cómo influye el estilo de vida en la edad biológica"
  ],
  "introQuestions": [
   "Cómo está estructurado el informe de edad biológica",
   "Cómo explicar el proceso de envejecimiento con claridad",
   "Qué recomendaciones concretas de estilo de vida se pueden derivar"
  ],
  "questions": [
   {
    "q": "¿Cómo le explicas la edad biológica frente a la cronológica al cliente en lenguaje sencillo?",
    "options": [
     "Son idénticas",
     "\"La edad cronológica son los años desde que naciste. La edad biológica describe qué edad tienen realmente tus células — dos personas de la misma edad pueden diferir en 10-20 años biológicamente según los genes y el estilo de vida\"",
     "La edad biológica es solo un término de marketing",
     "Es lo mismo que el CI"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente tiene una telomerasa débil (\"zona roja\"). ¿Cuál es el consejo práctico?",
    "options": [
     "No se puede hacer nada al respecto",
     "Reforzar la protección desde fuera: dieta rica en antioxidantes (Vitamina C/E, polifenoles, selenio), nutrientes específicos (Omega-3, D3, Resveratrol), ejercicio moderado y regular (no extremo), 7-9 horas de sueño, reducción del estrés. Los efectos se acumulan a lo largo de los años",
     "Tomar quimioterapia en dosis altas",
     "Comer solo carne"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente pregunta: \"¿La dieta mediterránea me ayuda a rejuvenecer biológicamente?\"",
    "options": [
     "Sí, siempre",
     "Depende de la genética: los estudios muestran que la dieta mediterránea alarga los telómeros de forma medible solo en portadores de una variante específica. Para otros, el efecto es más débil. El informe indica si este cliente está en el grupo de respondedores",
     "No, nunca",
     "Solo para mujeres"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente joven (25 años) pregunta: \"¿Me sirve de algo el informe de edad biológica?\"",
    "options": [
     "No, solo es útil a partir de los 60",
     "Sí — cuanto más joven, mejor momento para empezar. Las debilidades genéticas se acumulan a lo largo de décadas; los ajustes en el estilo de vida a los 25 tienen un efecto acumulado mucho mayor a los 60 que empezar tarde",
     "Solo es útil para deportistas",
     "No, la edad biológica es fija"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo deberías plantear el resultado de edad biológica para un cliente estresado con varias \"zonas rojas\"?",
    "options": [
     "Como un declive inevitable",
     "Como oportunidades específicas: cada zona roja es una palanca clara — Vitamina D3, Omega-3, ingesta de antioxidantes, sueño, reducción del estrés. El plan es orientado a la acción y motivador, no fatalista",
     "Como una emergencia médica",
     "Como una enfermedad intratable"
    ],
    "correct": 1
   }
  ]
 },
 "ba-faq-en": {
  "topic": "Preguntas Frecuentes",
  "description": "Respuestas a preguntas típicas de los clientes sobre el análisis de edad biológica.",
  "longDescription": "Una recopilación de las preguntas más importantes sobre el análisis de telómeros y antienvejecimiento. Con respuestas desplegables para el autoestudio.",
  "bullets": [
   "¿Qué son los telómeros y por qué envejecemos?",
   "¿Cómo afecta mi genética a la edad biológica?",
   "¿Qué nutrientes y medidas de estilo de vida ayudan?",
   "Dieta mediterránea — ¿funciona para todos?"
  ]
 },
 "pharma-sci-en": {
  "topic": "Fundamento científico",
  "description": "Cómo las variantes genéticas influyen en el metabolismo y la tolerancia a los medicamentos, explicado científicamente.",
  "longDescription": "En esta formación, el Dr. Daniel Wallerstorfer explica por qué los medicamentos actúan de forma diferente en distintas personas. Aprenderás cómo las enzimas CYP degradan los principios activos, qué significa \"metabolizador rápido\" frente a \"metabolizador lento\", y cómo este conocimiento orienta decisiones de prescripción más seguras.",
  "postVideoText": "Con estos conocimientos podrás analizar con clientes y médicos la relevancia de las pruebas farmacogenéticas, explicando por qué una dosis que funciona para la mayoría puede resultar demasiado fuerte o demasiado débil para una persona concreta según su genotipo CYP.",
  "introQuestionsHeader": "Esta formación responde a:",
  "bullets": [
   "Enzimas CYP y metabolismo de fármacos",
   "Metabolizadores rápidos y lentos",
   "Principios activos clínicamente relevantes (antidepresivos, analgésicos, anticoagulantes, …)",
   "Relevancia práctica en la consulta"
  ],
  "introQuestions": [
   "¿Por qué los medicamentos actúan de forma diferente en distintas personas?",
   "¿Qué enzimas CYP son responsables de degradar los principios activos más importantes?",
   "¿Qué significa \"metabolizador rápido\" frente a \"lento\" en la práctica clínica diaria?",
   "¿Qué medicamentos son especialmente relevantes para la consulta farmacogenética?"
  ],
  "questions": [
   {
    "q": "¿Por qué el mismo medicamento actúa de forma diferente en distintas personas?",
    "options": [
     "Es una casualidad del estado de ánimo",
     "Las variantes genéticas en las enzimas CYP modifican la velocidad a la que se degrada el fármaco: los metabolizadores rápidos lo eliminan demasiado deprisa (efecto más débil), los metabolizadores lentos lo acumulan (efecto más fuerte o tóxico)",
     "El peso corporal es el único factor",
     "No hay ninguna diferencia real"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué significa clínicamente \"metabolizador pobre\"?",
    "options": [
     "La persona no puede digerir bien los alimentos",
     "Su variante de la enzima CYP degrada el fármaco muy lentamente, por lo que el principio activo se acumula: las dosis estándar pueden provocar efectos secundarios o toxicidad",
     "Necesita una dosis mayor para notar algún efecto",
     "Solo afecta a los fármacos para la salud mental"
    ],
    "correct": 1
   },
   {
    "q": "¿Cuál es una de las enzimas CYP más relevantes clínicamente para el metabolismo de fármacos?",
    "options": [
     "CYP2D6, implicada en el metabolismo de antidepresivos, betabloqueantes, opioides y muchos otros fármacos de amplia prescripción",
     "CYP1B5",
     "CYP9Z1",
     "CYPX"
    ],
    "correct": 0
   },
   {
    "q": "¿Cómo debe utilizarse en la práctica un resultado farmacogenético?",
    "options": [
     "Como motivo para suspender toda la medicación",
     "Como orientación para el médico prescriptor, para elegir fármacos alternativos o ajustar la dosis al tipo de metabolizador del paciente, reduciendo los efectos secundarios y mejorando la eficacia",
     "Solo es útil para la investigación",
     "Sustituye al diagnóstico médico"
    ],
    "correct": 1
   },
   {
    "q": "¿Por qué es importante la farmacogenética en la consulta?",
    "options": [
     "Es principalmente un tema de ventas",
     "Alrededor del 7% de todos los medicamentos tienen directrices farmacogenéticas clínicamente accionables: conocer el genotipo antes de prescribir puede evitar efectos secundarios graves y fracasos terapéuticos",
     "Solo importa para los fármacos oncológicos",
     "Es demasiado infrecuente para tenerlo en cuenta"
    ],
    "correct": 1
   }
  ]
 },
 "legal-basics-en": {
  "topic": "Directriz publicitaria para los productos de Novogenia",
  "description": "Qué afirmaciones publicitarias sobre análisis genéticos, análisis de sangre y complementos son jurídicamente seguras, y cuáles están expuestas a requerimientos formales.",
  "longDescription": "Una formación basada en texto (sin vídeo) sobre la publicidad conforme a derecho de los productos de Novogenia. Fuente: Directriz publicitaria de Novogenia. Aprenderás cómo funcionan los requerimientos formales, qué afirmaciones son seguras, cuáles son críticas y qué buenas prácticas ha desarrollado Novogenia en 13 años de experiencia.",
  "introQuestionsHeader": "En esta formación aprenderás:",
  "bullets": [
   "Cómo funciona un requerimiento formal y cuánto cuesta",
   "Afirmaciones publicitarias seguras frente a arriesgadas para análisis de sangre, pruebas genéticas y complementos",
   "Las declaraciones de propiedades saludables (Health Claims) de la UE para complementos",
   "Cómo gestionar las reseñas y los testimonios de clientes"
  ],
  "introQuestions": [
   "Cómo funcionan las asociaciones de requerimientos formales y qué costes cabe esperar",
   "Qué afirmaciones publicitarias sobre análisis de sangre son jurídicamente seguras",
   "Por qué las propiedades genéticas pueden anunciarse de forma segura pero las recomendaciones de actuación son críticas",
   "Cómo aplicar correctamente las declaraciones de propiedades saludables para los complementos",
   "Cómo moderar las reseñas de clientes de forma jurídicamente segura"
  ],
  "questions": [
   {
    "q": "¿Cuál es una tasa inicial típica que cobra una asociación de requerimientos formales?",
    "options": [
     "Unos 50 €",
     "Unos 200 €",
     "Unos 1.000 €",
     "Unos 5.000 €"
    ],
    "correct": 1
   },
   {
    "q": "¿Cuál es la penalización típica por reutilizar una afirmación publicitaria impugnada?",
    "options": [
     "Unos 200 €",
     "Unos 1.000 €",
     "Unos 5.000 €",
     "Unos 50.000 €"
    ],
    "correct": 2
   },
   {
    "q": "¿Qué formas de publicidad suelen desencadenar requerimientos formales?",
    "options": [
     "Los materiales de venta directa y la consulta verbal",
     "La publicidad de amplia difusión, como la televisión, las revistas y las redes sociales",
     "Solo la publicidad impresa",
     "Los sitios web sin publicidad de pago"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué parte de un análisis de ADN suele ser NO CRÍTICA desde la perspectiva de una asociación de requerimientos formales?",
    "options": [
     "Los planes concretos de nutrición y deporte",
     "Las recomendaciones personalizadas de micronutrientes",
     "El análisis científico de las propiedades genéticas",
     "Todas las afirmaciones sobre pruebas de ADN son críticas"
    ],
    "correct": 2
   },
   {
    "q": "¿Qué parte de un análisis de ADN suele ser CRÍTICA?",
    "options": [
     "La determinación de las variantes génicas",
     "Los planes de actuación concretos derivados de ellas (nutrición, deporte, complementos)",
     "La toma de muestras en el laboratorio",
     "La explicación de la ciencia en el informe"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué afirmación sobre el ácido fólico es SEGURA según la directriz publicitaria?",
    "options": [
     "\"Toma metilfolato en lugar de ácido fólico: te funciona mejor.\"",
     "\"Descubres si tu cuerpo puede activar eficazmente el ácido fólico.\"",
     "\"Nuestra prueba sustituye a una visita al médico para cuestiones de ácido fólico.\"",
     "\"El ácido fólico es, en general, ineficaz.\""
    ],
    "correct": 1
   },
   {
    "q": "¿Qué son las declaraciones de propiedades saludables (Health Claims) de la UE?",
    "options": [
     "Una lista de afirmaciones publicitarias prohibidas",
     "Un marco de afirmaciones de efecto definidas con precisión y permitidas para los complementos",
     "Estudios sobre eficacia clínica",
     "Una autodeclaración del fabricante"
    ],
    "correct": 1
   },
   {
    "q": "¿Quién asume la responsabilidad legal de las afirmaciones publicitarias de un revendedor?",
    "options": [
     "Novogenia es plenamente responsable",
     "El propio socio o revendedor: Novogenia no asume responsabilidad alguna",
     "Las asociaciones de requerimientos formales",
     "Nadie asume la responsabilidad"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo debe gestionarse una reseña de cliente que contenga una declaración de propiedad saludable no permitida (p. ej. \"el producto me curó\")?",
    "options": [
     "Dejarla sin modificar: las opiniones de los clientes son siempre jurídicamente seguras",
     "Etiquetarla claramente como opinión de un cliente; en los sistemas moderables, eliminar la afirmación no permitida o adjuntar una respuesta correctiva",
     "Desactivar de inmediato todas las reseñas",
     "Denunciar al cliente"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué estrategia para anunciar complementos personalizados es NO CRÍTICA?",
    "options": [
     "Anunciar con promesas de curación concretas que no figuran en la lista de declaraciones de propiedades saludables",
     "La personalización basada en el estilo de vida y los valores sanguíneos: ambas no problemáticas",
     "Afirmaciones como \"cura tu enfermedad\"",
     "Anunciar sin una lista de ingredientes"
    ],
    "correct": 1
   }
  ]
 },
 "nut-report-en": {
  "topic": "Formación en Asesoramiento",
  "description": "Recorre el informe genético de nutrición capítulo por capítulo con tu cliente.",
  "longDescription": "En esta formación de asesoramiento, el Dr. Daniel Wallerstorfer explica capítulo por capítulo cómo abordar el informe genético de nutrición con tus clientes. Desde la estructura del informe, pasando por los nutrientes individuales (vitamina D3, ácido fólico, hierro, selenio, Q10, etc.), hasta los temas de metabolismo, colesterol y triglicéridos: todos los capítulos del informe se recorren paso a paso.",
  "postVideoText": "Con esta formación estás preparado para guiar a tus clientes por el informe genético de nutrición con confianza. Los folletos de demostración que aparecen a continuación pueden servir como informes de ejemplo para tu propia práctica de asesoramiento.",
  "introQuestionsHeader": "En esta formación aprenderás:",
  "bullets": [
   "Recorrer el informe de nutrición capítulo por capítulo con el cliente",
   "Explicar las distintas variantes génicas (vitamina D3, ácido fólico, hierro, selenio, cafeína, Q10, etc.)",
   "Interpretar los efectos sobre el colesterol, los triglicéridos, la presión arterial y la homocisteína",
   "Transmitir con claridad las recomendaciones alimentarias personalizadas"
  ],
  "introQuestions": [
   "Cómo está estructurado el informe de nutrición",
   "Cómo explicar con claridad las sensibilidades más importantes a los nutrientes",
   "Cómo influyen los genes en el colesterol, los triglicéridos, la presión arterial y la homocisteína",
   "Cómo traducir las recomendaciones alimentarias en consejos prácticos"
  ],
  "questions": [
   {
    "q": "Un metabolizador lento de la cafeína (defecto en CYP1A2) pregunta si debería renunciar por completo al café. ¿Cuál es la mejor respuesta de asesoramiento?",
    "options": [
     "Sí, hay que prohibir todo el café para siempre",
     "Una alternativa razonable es el café descafeinado: conserva los polifenoles protectores sin el efecto prolongado de la cafeína. La sensibilidad a la cafeína no tiene por qué significar abstinencia total",
     "Beber cinco tazas al día para desarrollar tolerancia",
     "Solo se permite el té negro"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo le explicas la recomendación de vitamina D a un cliente con una variante en VDR?",
    "options": [
     "La vitamina D actúa igual en todas las personas",
     "Una variante en VDR cambia la intensidad con la que las células responden a la vitamina D circulante: incluso con niveles sanguíneos \"normales\", el efecto biológico puede estar reducido. A menudo tiene sentido una ingesta más alta y dirigida (bajo control)",
     "Evitar la vitamina D: es peligrosa para ellos",
     "Solo la exposición al sol funciona en su caso"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué recomendación dietética es adecuada para un cliente con un defecto en HFE (riesgo de sobrecarga de hierro)?",
    "options": [
     "Aumentar la ingesta de hierro: necesitan más",
     "Reducir la carga de hierro en la dieta: menos carne roja, sin suplementos enriquecidos con hierro salvo que exista deficiencia confirmada por análisis de sangre. El exceso de hierro se acumula y daña el hígado, el corazón y las articulaciones a lo largo de décadas",
     "Tomar suplementos de hierro a diario como precaución",
     "No es necesario ningún cambio"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente con una variante en MTHFR toma comprimidos estándar de ácido fólico. ¿Qué deberías aconsejarle?",
    "options": [
     "Seguir tomando ácido fólico estándar: la variante no tiene ningún efecto",
     "Cambiar a metilfolato (la forma bioactiva). Con un defecto en MTHFR, el ácido fólico convencional se activa mal y resulta en gran medida inútil para el cliente; el metilfolato evita el paso de activación",
     "Suspender por completo todo el folato",
     "Comer solo carne"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo le explicarías la recomendación sobre la sal a un cliente positivo para ACE (presión arterial sensible a la sal)?",
    "options": [
     "La sal no importa: la recomendación es genérica",
     "La sensibilidad a la sal es genética. En clientes positivos para ACE, la ingesta de sal eleva de forma medible la presión arterial. Reducir la sal es una palanca especialmente potente para ellos, mucho más que para las personas no sensibles",
     "Añadir sal adicional: estabiliza la presión arterial",
     "Solo evitar el azúcar"
    ],
    "correct": 1
   }
  ]
 },
 "nut-faq-en": {
  "topic": "Preguntas Frecuentes",
  "description": "Respuestas a las preguntas habituales de los clientes sobre el análisis genético de nutrición.",
  "longDescription": "Una recopilación de las preguntas más frecuentes de los clientes sobre el análisis genético de nutrición: cómo influyen los genes en el metabolismo de los nutrientes, qué significan MTHFR, CYP1A2 y otros genes, y cómo se derivan las recomendaciones prácticas.",
  "bullets": [
   "¿Por qué el mismo alimento afecta de forma distinta a cada persona?",
   "¿Qué papel juegan las variantes genéticas?",
   "¿Cómo se derivan las recomendaciones?",
   "¿Qué puede decirme el análisis genético y qué no?"
  ]
 },
 "pg-sci-en": {
  "topic": "Base Científica",
  "description": "Qué genes determinan el rendimiento deportivo, la regeneración y el riesgo de lesiones.",
  "longDescription": "Esta formación explica la base científica que hay detrás de la genética del rendimiento. Aprenderás qué genes influyen en el tipo de atleta (velocidad frente a resistencia), el riesgo del tejido conjuntivo y la capacidad de regeneración, y cómo se deriva un perfil de entrenamiento individual a partir de estos factores.",
  "postVideoText": "Con este trasfondo científico podrás asesorar a los deportistas sobre una base sólida: acerca del estímulo de entrenamiento adecuado, los tiempos de regeneración y los suplementos con fundamento genético.",
  "introQuestionsHeader": "Esta formación responde a:",
  "bullets": [
   "Genes de velocidad frente a resistencia (ACTN3 y compañía)",
   "Tejido conjuntivo y riesgo de lesiones (COL5A1, MMP3)",
   "Respuesta inflamatoria y tiempo de regeneración",
   "Aplicación práctica en la planificación del entrenamiento"
  ],
  "introQuestions": [
   "¿Qué parte del talento deportivo está determinada genéticamente?",
   "¿Qué genes distinguen a los velocistas de los maratonianos?",
   "¿Cómo influye la genética en el riesgo de lesiones y en la regeneración?",
   "¿Cómo pueden los deportistas entrenar de forma más eficiente con este conocimiento?"
  ],
  "questions": [
   {
    "q": "¿Qué gen es el marcador más conocido para el fenotipo de velocidad frente a resistencia?",
    "options": [
     "MTHFR",
     "ACTN3",
     "LCT",
     "COMT"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente tiene el genotipo RR de ACTN3. ¿Qué indica esto normalmente?",
    "options": [
     "Únicamente un perfil de maratoniano",
     "Fuerte expresión de fibras de contracción rápida: mejor adaptado a la velocidad, la potencia y los deportes explosivos; la resistencia pura sigue siendo posible, pero no es su fortaleza natural",
     "Ningún talento deportivo en absoluto",
     "Mayor riesgo cardiovascular en cualquier deporte"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué genes son centrales para la estabilidad del tejido conjuntivo y el riesgo de lesiones?",
    "options": [
     "COL5A1, MMP3: determinan la calidad y la renovación del colágeno; las variantes desfavorables aumentan el riesgo de lesiones de tendones y ligamentos",
     "FTO y PPARG",
     "CYP1A2 y ADH",
     "Ningún gen afecta al tejido conjuntivo"
    ],
    "correct": 0
   },
   {
    "q": "¿Cómo varía genéticamente la respuesta al entrenamiento entre personas?",
    "options": [
     "Es idéntica para todos",
     "Aproximadamente en un factor de 2-3: algunos atletas se adaptan muy intensamente al mismo estímulo, otros apenas",
     "Solo el estado de ánimo determina la respuesta",
     "Varía en un factor de 50"
    ],
    "correct": 1
   },
   {
    "q": "¿Por qué los antioxidantes (vitamina C, E, polifenoles) son especialmente relevantes en el deporte?",
    "options": [
     "Saben mejor que el agua",
     "El ejercicio intenso produce grandes cantidades de radicales libres; unas defensas antioxidantes genéticamente débiles (baja actividad de SOD/CAT/GPX) implican una regeneración más larga y un mayor riesgo de microinflamación",
     "Solo mejoran el sueño",
     "No tienen ningún efecto en los deportistas"
    ],
    "correct": 1
   }
  ]
 },
 "pg-faq-en": {
  "topic": "Preguntas Frecuentes",
  "description": "Respuestas a las preguntas habituales de los clientes sobre el análisis genético del rendimiento.",
  "longDescription": "Una recopilación de las preguntas más importantes sobre la genética en el deporte: talento, riesgo de lesiones, control del entrenamiento. Con respuestas desplegables para el autoaprendizaje.",
  "bullets": [
   "Talento frente a entrenamiento: ¿qué es genético?",
   "Riesgo de lesiones y genes del tejido conjuntivo",
   "Regeneración y nutrición",
   "Control del entrenamiento según el genotipo"
  ]
 },
 "supp-sci-en": {
  "topic": "Base científica",
  "description": "Cómo las necesidades genéticas individuales de micronutrientes hacen posible una suplementación personalizada, explicado científicamente.",
  "longDescription": "En esta formación, el Dr. Daniel Wallerstorfer explica por qué cada persona tiene necesidades diferentes de micronutrientes y cómo funciona la suplementación genéticamente personalizada. Conocerás la tecnología Microtransporter: cómo nutrientes que compiten entre sí (por ejemplo, calcio y zinc) pueden absorberse simultáneamente y por qué la liberación lenta de la Vitamina C imita un patrón fisiológicamente significativo.",
  "postVideoText": "Con estos antecedentes podrás hablar con tus clientes sobre la lógica de la suplementación personalizada con una base sólida y explicar con claridad la tecnología Microtransporter, incluidas sus aplicaciones prácticas en pellets y en la administración intravenosa.",
  "introQuestionsHeader": "Esta formación responde:",
  "bullets": [
   "Necesidades genéticas individuales de nutrientes",
   "Tecnología Microtransporter",
   "Liberación lenta y absorción separada (calcio/zinc)",
   "Biodisponibilidad de vitaminas y minerales"
  ],
  "introQuestions": [
   "¿Por qué cada persona tiene necesidades diferentes de micronutrientes?",
   "¿Cómo resuelve la tecnología Microtransporter el problema de los nutrientes que compiten?",
   "¿Por qué la Vitamina C se libera de forma lenta?",
   "¿Cómo pueden absorberse simultáneamente el calcio y el zinc a pesar de su bloqueo mutuo?"
  ],
  "questions": [
   {
    "q": "¿Por qué cada persona tiene una necesidad diferente de micronutrientes?",
    "options": [
     "El número de células varía",
     "Las variantes genéticas modifican cómo el cuerpo absorbe, metaboliza y utiliza cada nutriente; la misma ingesta produce niveles diferentes en sangre",
     "Depende únicamente del consumo de agua",
     "El tamaño del estómago varía"
    ],
    "correct": 1
   },
   {
    "q": "¿Cuál es el problema central que resuelve la tecnología Microtransporter?",
    "options": [
     "Comprimidos demasiado grandes para tragar",
     "En las píldoras estándar muchos nutrientes se bloquean entre sí durante la absorción, o desaparecen del torrente sanguíneo demasiado rápido para ser útiles",
     "Las vitaminas son caras de producir",
     "Los suplementos tienen mal sabor"
    ],
    "correct": 1
   },
   {
    "q": "¿Por qué la Vitamina C se libera de forma lenta?",
    "options": [
     "La Vitamina C es tóxica en dosis altas",
     "Solo funciona en dosis muy altas",
     "La Vitamina C tiene una vida media de unos 30 minutos; liberarla gradualmente a lo largo del día imita la ingesta natural a partir de los alimentos y mantiene estables los niveles en sangre",
     "La liberación lenta es solo un término de marketing"
    ],
    "correct": 2
   },
   {
    "q": "¿Cómo permite la tecnología Microtransporter que el calcio y el zinc se absorban simultáneamente a pesar de bloquearse entre sí?",
    "options": [
     "Solo se utiliza uno de los dos",
     "El calcio y el zinc se combinan químicamente en un nuevo compuesto",
     "Simplemente se empaquetan juntos en la misma píldora",
     "El zinc se libera de inmediato en el intestino superior y el calcio horas después en el intestino inferior; se toman juntos pero se liberan separados en el espacio y en el tiempo, de modo que nunca compiten por los mismos transportadores"
    ],
    "correct": 3
   },
   {
    "q": "¿Cuántos genes se analizan para el informe de suplementación personalizada?",
    "options": [
     "Alrededor de 10",
     "Alrededor de 25",
     "Más de 60",
     "Exactamente 200"
    ],
    "correct": 2
   },
   {
    "q": "¿Cuál es la ventaja clave de la suplementación personalizada frente a la estándar?",
    "options": [
     "Contiene más vitaminas por píldora",
     "La dosis, la selección y la forma de liberación se ajustan a la necesidad genética individual, sin un enfoque de \"talla única\"; el nutriente realmente llega al torrente sanguíneo en lugar de ser excretado",
     "Siempre es más barata",
     "Funciona desde el primer día"
    ],
    "correct": 1
   }
  ]
 },
 "supp-faq-en": {
  "topic": "Preguntas frecuentes",
  "description": "Respuestas a las preguntas típicas de los clientes sobre la suplementación personalizada y la tecnología Microtransporter.",
  "longDescription": "Una recopilación de las preguntas más importantes de los clientes en torno a la suplementación personalizada: por qué no toda píldora funciona, qué hace realmente de forma diferente la tecnología Microtransporter y cómo la información genética determina la dosificación.",
  "bullets": [
   "¿Cuál es la diferencia entre la suplementación estándar y la personalizada?",
   "¿Cómo funciona la tecnología Microtransporter?",
   "¿Cómo se adapta la dosis a las necesidades genéticas?",
   "¿Cuánto cuesta la suplementación personalizada en comparación?"
  ]
 },
 "beauty-sci-en": {
  "topic": "Base científica",
  "description": "Cómo los genes contribuyen a determinar el envejecimiento de la piel, la formación de arrugas, la sensibilidad al UV y la hidratación cutánea, explicado científicamente.",
  "longDescription": "En esta formación, el Dr. Daniel Wallerstorfer explica los fundamentos genéticos del análisis DNAbeauty Control. ¿Qué genes controlan la degradación del colágeno? ¿Por qué la piel se quema más rápido en algunas personas? ¿Cómo se relaciona la hidratación de la piel con la filagrina y otros genes? ¿Y qué se puede deducir de esta información para un cuidado de la piel verdaderamente personalizado?",
  "postVideoText": "Con estos fundamentos científicos podrás hablar con tus clientes sobre el informe Beauty con una base sólida y derivar estrategias de cuidado individuales a partir de los resultados genéticos.",
  "introQuestionsHeader": "Esta formación responde:",
  "bullets": [
   "Envejecimiento genético de la piel y degradación del colágeno (MMP1)",
   "Sensibilidad al UV y pigmentación (MC1R)",
   "Hidratación cutánea y función de barrera (FLG)",
   "Sistemas antioxidantes de defensa de la piel (SOD, CAT, GPX)"
  ],
  "introQuestions": [
   "¿Qué genes controlan la degradación del colágeno y, por tanto, la formación de arrugas?",
   "¿En qué se diferencia la sensibilidad genética al UV entre personas?",
   "¿Qué papel desempeñan los genes antioxidantes en el envejecimiento de la piel?",
   "¿Cómo se relaciona la hidratación genética de la piel con la rutina de cuidado?"
  ],
  "questions": [
   {
    "q": "¿Qué enzima / gen es central en la degradación del colágeno de la piel y, por tanto, en la formación de arrugas?",
    "options": [
     "MTHFR — activación del folato",
     "MMP1 — Metaloproteinasa de matriz 1 (degrada el colágeno)",
     "CYP1A2 — degradación de la cafeína",
     "LCT — persistencia de la lactasa"
    ],
    "correct": 1
   },
   {
    "q": "Una clienta porta una variante MMP1 muy activa. ¿Qué significa esto para su cuidado de la piel?",
    "options": [
     "No necesita ninguna medida antienvejecimiento",
     "Mayor riesgo de formación temprana de arrugas; las medidas antienvejecimiento (antioxidantes, protección UV, potenciadores del colágeno, no fumar) son especialmente importantes para ella",
     "La variante solo afecta al color del cabello",
     "Debería comer más carbohidratos"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué afirmación sobre la sensibilidad genética al UV (por ejemplo, MC1R) es correcta?",
    "options": [
     "Las variantes genéticas no influyen en la sensibilidad al UV; solo importa el tipo de piel",
     "Los portadores de variantes desfavorables se queman con más facilidad y tienen mayor riesgo de envejecimiento cutáneo relacionado con el UV y de cáncer de piel; una protección UV estricta es aún más importante",
     "Con alta sensibilidad genética al UV se debería evitar el sol por completo, incluso a la sombra",
     "El protector solar solo funciona en personas con genes \"normales\""
    ],
    "correct": 1
   },
   {
    "q": "¿Por qué son importantes para el envejecimiento de la piel los genes antioxidantes como SOD2, CAT y GPX?",
    "options": [
     "Producen radicales libres",
     "Protegen frente al estrés oxidativo, que causa daño en el ADN de las células cutáneas; cuando estas defensas son débiles la piel envejece de forma medible más rápido, y los antioxidantes (vitamina C, E, polifenoles) cobran especial importancia",
     "Solo influyen en el sistema inmunitario, no en la piel",
     "Producen pigmento"
    ],
    "correct": 1
   },
   {
    "q": "¿Cuál es la recomendación más adecuada para una clienta con hidratación cutánea genéticamente reducida (por ejemplo, variantes desfavorables de FLG / filagrina)?",
    "options": [
     "Duchas calientes y limpiadores jabonosos fuertes",
     "Mayor uso de cuidado que retenga la humedad y refuerce la barrera (ácido hialurónico, ceramidas, glicerina), limpiadores suaves y evitar agentes que resequen",
     "Prescindir por completo del cuidado de la piel; la piel se regula sola",
     "Dejar que el agua toque la piel solo una vez por semana"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué distingue el análisis genético de la piel de una consulta puramente cosmética?",
    "options": [
     "Es más barato",
     "Identifica puntos débiles genéticos permanentes de la piel en lugar de solo evaluar el estado actual; el cuidado y la protección pueden aplicarse de forma proactiva y a largo plazo en vez de reactiva",
     "Sustituye cualquier examen médico de la piel",
     "Solo es útil para personas jóvenes"
    ],
    "correct": 1
   }
  ]
 },
 "beauty-faq-en": {
  "topic": "Preguntas frecuentes",
  "description": "Respuestas a las preguntas típicas de los clientes sobre el análisis genético de la piel (DNAbeauty Control).",
  "longDescription": "Una recopilación de las preguntas más importantes de los clientes en torno al análisis genético de la piel: qué te dice realmente, qué genes se consideran, cómo se derivan recomendaciones prácticas de cuidado y qué expectativas son realistas.",
  "bullets": [
   "Qué te dice realmente DNAbeauty Control, y qué no",
   "En qué se diferencia el análisis genético de la piel de una consulta cosmética",
   "Qué genes analizamos (MMP1, MC1R, FLG, …)",
   "Cómo son las recomendaciones prácticas de cuidado"
  ]
 },
 "wm-sci-en": {
  "topic": "Base Científica",
  "description": "Cómo la genética determina el aumento de peso, la respuesta al ejercicio y la dieta adecuada — explicado científicamente.",
  "longDescription": "En esta formación, el Dr. Daniel Wallerstorfer explica por qué las personas aumentan de peso de forma diferente con las mismas calorías, por qué el ejercicio hace maravillas para algunos y no para otros, y cómo las variantes genéticas en el metabolismo de las grasas frente al de los carbohidratos determinan la estrategia dietética adecuada.",
  "postVideoText": "Con estos conocimientos podrás hablar con tus clientes sobre la ciencia que hay detrás de la Dieta Genética, distinguir los genotipos sensibles a los carbohidratos de los sensibles a las grasas, y explicar por qué una estrategia personalizada supera a los consejos genéricos.",
  "introQuestionsHeader": "Esta formación responde a:",
  "bullets": [
   "Por qué las mismas calorías afectan de forma distinta a cada persona",
   "Genotipos sensibles a carbohidratos frente a sensibles a grasas",
   "Personas que responden al ejercicio frente a las que no responden",
   "Estrategia dietética personalizada a partir de la genética"
  ],
  "introQuestions": [
   "¿Por qué algunas personas engordan con los carbohidratos y otras con las grasas?",
   "¿Por qué el ejercicio funciona para algunos pero no para otros?",
   "¿Cómo identificamos la estrategia dietética adecuada a partir de los genes?",
   "¿Qué es el efecto Yo-Yo y por qué es genético?"
  ],
  "questions": [
   {
    "q": "¿Por qué dos personas con el mismo superávit calórico aumentan de peso a ritmos diferentes?",
    "options": [
     "Es puramente una cuestión de fuerza de voluntad",
     "Las variantes genéticas (p. ej. FABP2, PPARG, FTO) modifican la eficiencia con la que se almacenan las grasas y los carbohidratos — las mismas calorías se traducen en distintas cantidades de grasa corporal",
     "La hidratación es el único factor",
     "No existe una diferencia real"
    ],
    "correct": 1
   },
   {
    "q": "¿Cuánto varía genéticamente la respuesta al ejercicio entre individuos?",
    "options": [
     "Nada — el ejercicio funciona igual para todos",
     "Aproximadamente por un factor de 2-3 — algunas personas responden fuertemente al ejercicio, otras no responden",
     "Hasta 50 veces",
     "Solo un 5%"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente es genéticamente de un tipo fuertemente sensible a los carbohidratos. ¿Qué estrategia le conviene?",
    "options": [
     "Dieta estándar baja en grasas para todos",
     "Comer tantos carbohidratos como sea posible",
     "Menor proporción de carbohidratos, más proteína, grasas buenas moderadas — y ajustar la carga de carbohidratos al día de ejercicio",
     "Eliminar tanto las grasas como los carbohidratos"
    ],
    "correct": 2
   },
   {
    "q": "¿Qué es el efecto Yo-Yo y por qué es en parte genético?",
    "options": [
     "Un juguete que afecta al metabolismo",
     "El patrón de recuperar peso después de una dieta — algunas personas tienen variantes genéticas (p. ej. en las vías de la adiponectina / leptina) que aumentan el rebote del apetito y ralentizan el metabolismo basal tras la pérdida de peso",
     "Una cuestión puramente conductual sin base biológica",
     "Algo que solo experimentan las mujeres"
    ],
    "correct": 1
   },
   {
    "q": "¿Por qué un programa personalizado supera a los consejos estándar?",
    "options": [
     "Utiliza ingredientes más caros",
     "Un estudio piloto de Novogenia (139 participantes) mostró un éxito de pérdida de peso 2,4× mayor con personalización genética frente al asesoramiento estándar — porque la estrategia se ajusta realmente a la biología subyacente",
     "Solo funciona en teoría",
     "Es idéntico a los consejos estándar"
    ],
    "correct": 1
   }
  ]
 },
 "wm-report-en": {
  "topic": "Formación en Consultoría",
  "description": "Recorre con tu cliente el informe genético de control de peso capítulo por capítulo.",
  "longDescription": "Esta formación en consultoría muestra cómo recorrer el informe genético de control de peso con tu cliente. Desde el tipo nutricional y la respuesta al ejercicio hasta el hambre/saciedad, la distribución de la grasa y el efecto Yo-Yo, cada capítulo se explica con ejemplos prácticos de clientes.",
  "postVideoText": "Con esta formación estás preparado para recorrer el informe genético con tus clientes. Los cuadernillos de demostración que aparecen a continuación pueden servir como informes de ejemplo para tu propia práctica de consultoría.",
  "introQuestionsHeader": "En esta formación aprenderás a:",
  "bullets": [
   "Recorrer el informe genético capítulo por capítulo",
   "Explicar distintos tipos de resultados (sensibilidad a grasas/carbohidratos, respuesta al ejercicio, estrategia dietética)",
   "Aplicar menús diarios, recetas y listas de alimentos",
   "Responder con seguridad a las preguntas habituales de los clientes"
  ],
  "introQuestions": [
   "Cómo está estructurado el informe y cómo recorrerlo con los clientes",
   "Cómo explicar la sensibilidad a las grasas y a los carbohidratos en un lenguaje sencillo",
   "Cómo interpretar la respuesta al ejercicio y la estrategia dietética",
   "Cómo se utilizan los menús diarios, la lista de alimentos y las recetas personalizadas"
  ],
  "questions": [
   {
    "q": "¿Qué muestran los iconos de peso en la lista de alimentos?",
    "options": [
     "Si el alimento es saludable en general",
     "Si la distribución de macronutrientes (grasas, carbohidratos, proteínas) es favorable (verde) o desfavorable (rojo) para tu objetivo de peso individual — teniendo también en cuenta las calorías por porción típica",
     "Solo el contenido calórico",
     "Solo la proporción de proteína"
    ],
    "correct": 1
   },
   {
    "q": "¿Están completamente prohibidos los alimentos marcados en rojo?",
    "options": [
     "Sí — nunca los comas",
     "No — los alimentos rojos deben ser la excepción. Los muy rojos (4-6 iconos) solo en raras ocasiones; los ligeramente rojos (1-3 iconos) con más frecuencia. El objetivo es el equilibrio, no la perfección.",
     "Sí, pero solo entre semana",
     "Solo para las mujeres"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente responde muy poco al ejercicio (baja respuesta de ACE / ACTN3). ¿Cuál es el consejo correcto?",
    "options": [
     "El ejercicio no sirve para nada — que lo abandone",
     "La principal palanca para perder peso es la nutrición / el control de calorías. El ejercicio sigue siendo valioso para la salud y la conservación muscular, pero no es la herramienta principal de pérdida de peso para este cliente",
     "Triplicar el volumen de entrenamiento — al final tendrá que funcionar",
     "Cambiar a correr solo maratones"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente de ascendencia asiática (defecto frecuente de ALDH2) bebe 1-2 copas de vino por semana y pregunta si es peligroso. ¿La mejor respuesta?",
    "options": [
     "Ningún problema, bebe todo lo que quieras",
     "Lo mejor es mantener el alcohol muy bajo: en los portadores de ALDH2 el acetaldehído tóxico se acumula de forma notable, aumentando el riesgo de cáncer a largo plazo con el consumo crónico. Cantidades pequeñas ocasionales son tolerables; el consumo diario debe evitarse",
     "Aumentar el alcohol — así se entrena la enzima",
     "El alcohol no interactúa en absoluto con la genética"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo explicarías el \"efecto Yo-Yo\" al cliente basándote en el informe genético?",
    "options": [
     "Falta de fuerza de voluntad — nada más",
     "Una predisposición genética a un mayor rebote del apetito y un metabolismo basal más lento tras la pérdida de peso; el cliente se beneficia de un cambio dietético gradual y estable en lugar de dietas relámpago",
     "Un error en el informe",
     "Solo afecta a personas mayores de 60 años"
    ],
    "correct": 1
   }
  ]
 },
 "wm-faq-en": {
  "topic": "Preguntas Frecuentes",
  "description": "Respuestas a las preguntas habituales de los clientes sobre la Dieta Genética y el Calorie Blocker.",
  "longDescription": "Una recopilación de las preguntas más frecuentes de los clientes sobre el programa de la Dieta Genética, el informe genético y el producto Calorie Blocker. Con respuestas desplegables para el autoestudio.",
  "bullets": [
   "¿Qué es la Dieta Genética?",
   "¿Cómo funciona el análisis genético?",
   "¿Cómo se utiliza la lista de alimentos?",
   "¿Qué es el Calorie Blocker?"
  ]
 },
 "nut-sci-en": {
  "topic": "Base Científica",
  "description": "Cómo los genes determinan la nutrición óptima para cada persona — explicado científicamente.",
  "longDescription": "En esta formación, el Dr. Daniel Wallerstorfer explica por qué los alimentos afectan de forma diferente a cada persona. Aprenderás qué variaciones genéticas controlan el aprovechamiento de los nutrientes, la reacción a la sal, la cafeína, el ácido fólico y demás, y cómo se aplican estos conocimientos de forma responsable en la consultoría de nutrición personalizada.",
  "postVideoText": "Con la comprensión de estas bases genéticas, podrás hablar sobre las recomendaciones alimentarias del informe con tus clientes sobre una base sólida.",
  "introQuestionsHeader": "Esta formación responde a:",
  "bullets": [
   "Variaciones genéticas en el metabolismo de los nutrientes",
   "Por qué el mismo alimento afecta de forma distinta a cada persona",
   "Estudios sobre nutrigenética",
   "Aplicación práctica en la consultoría"
  ],
  "introQuestions": [
   "¿Por qué algunos alimentos son saludables para unos y perjudiciales para otros?",
   "¿Qué papel desempeñan genes como MTHFR, CYP1A2 o ACE en el aprovechamiento de los nutrientes?",
   "¿Cómo se relaciona la genética con la sensibilidad a la cafeína, la sal y el ácido fólico?",
   "¿Qué recomendaciones prácticas pueden derivarse para el cliente?"
  ],
  "questions": [
   {
    "q": "¿Qué gen descompone la cafeína en el cuerpo?",
    "options": [
     "MTHFR",
     "CYP1A2",
     "FTO",
     "COMT"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo modifica una variante funcional (rápida) de CYP1A2 el riesgo de infarto con el consumo regular de café (según grandes estudios epidemiológicos)?",
    "options": [
     "El riesgo permanece invariable",
     "El riesgo baja aproximadamente un tercio — los polifenoles siguen siendo protectores y la cafeína se elimina rápidamente",
     "El riesgo se duplica",
     "El riesgo aumenta dos tercios"
    ],
    "correct": 1
   },
   {
    "q": "¿Y cómo cambia para los metabolizadores lentos de cafeína (CYP1A2 defectuoso)?",
    "options": [
     "El riesgo baja aún más",
     "El riesgo se mantiene igual que para los metabolizadores rápidos",
     "El riesgo aumenta aproximadamente dos tercios — la cafeína permanece activa más tiempo y prolonga los picos de presión arterial",
     "No hay diferencia"
    ],
    "correct": 2
   },
   {
    "q": "¿Cuál es la función del gen MTHFR?",
    "options": [
     "Descompone la cafeína",
     "Activa el ácido fólico convirtiéndolo en la forma bioactiva metilfolato — sin un MTHFR funcional, el ácido fólico estándar de los suplementos resulta inútil",
     "Regula la degradación de la dopamina",
     "Determina el color de la piel"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué NO muestra un análisis de sangre en caso de un defecto de MTHFR?",
    "options": [
     "El nivel de ácido fólico en sangre",
     "Si el ácido fólico está realmente activado y es biológicamente eficaz",
     "El nivel de vitamina D",
     "El nivel de hierro"
    ],
    "correct": 1
   },
   {
    "q": "¿Cuántos genes considera el análisis nutricional completo?",
    "options": [
     "Unos 10",
     "Unos 25",
     "Unos 60",
     "Más de 200"
    ],
    "correct": 2
   }
  ]
 },
 "tx-sci-en": {
  "topic": "Base científica",
  "description": "Cómo los genes determinan la capacidad individual de desintoxicación — desde los alimentos quemados hasta los productos químicos, el alcohol y los metales pesados.",
  "longDescription": "En esta formación, el Dr. Daniel Wallerstorfer explica los fundamentos genéticos de la desintoxicación. ¿Qué genes neutralizan los carcinógenos de los alimentos quemados y ahumados? ¿Cómo protegen las glutatión-S-transferasas frente a los productos químicos? ¿Qué papel desempeña el selenio y por qué el alcohol no afecta a todos por igual?",
  "postVideoText": "Con este contexto científico podrás analizar el informe de desintoxicación con tus clientes sobre una base sólida y deducir estrategias de protección individuales.",
  "introQuestionsHeader": "Esta formación responde a:",
  "bullets": [
   "Desintoxicación de alimentos quemados (CYP1A1, NAT2)",
   "Desintoxicación química y glutatión-S-transferasas (GST)",
   "Defensa antioxidante y aporte de selenio",
   "Descomposición del alcohol y del acetaldehído (ADH, ALDH2)"
  ],
  "introQuestions": [
   "¿Qué genes controlan la desintoxicación de los alimentos quemados?",
   "¿Cómo actúan las glutatión-S-transferasas en la desintoxicación química?",
   "¿Qué papel desempeña el selenio en la protección frente al estrés oxidativo?",
   "¿En qué se diferencia entre personas la descomposición genética del alcohol?"
  ],
  "questions": [
   {
    "q": "¿Qué familia de genes es central para la desintoxicación de productos químicos y metales pesados?",
    "options": [
     "GST (glutatión-S-transferasas)",
     "MTHFR (activación del folato)",
     "LCT (lactasa)",
     "CYP1A2 (descomposición de la cafeína)"
    ],
    "correct": 0
   },
   {
    "q": "Los HAP (hidrocarburos aromáticos policíclicos) se forman en los alimentos quemados y ahumados. ¿Qué es cierto sobre su desintoxicación?",
    "options": [
     "Los HAP no pueden descomponerse en absoluto",
     "La desintoxicación de los HAP varía mucho según el genotipo — las personas con variantes CYP1A1/NAT2 lentas o defectuosas presentan un riesgo de cáncer notablemente mayor por el consumo frecuente de alimentos quemados",
     "Todos desintoxican los HAP a la misma velocidad",
     "Los HAP se excretan únicamente a través de la piel"
    ],
    "correct": 1
   },
   {
    "q": "Una clienta tiene un defecto genético de GST (deficiencia de glutatión-S-transferasa). ¿Qué significa en la práctica?",
    "options": [
     "Capacidad de desintoxicación superior a la media",
     "Menor capacidad para neutralizar productos químicos ambientales (pesticidas, disolventes, humo de cigarrillo) — debería evitar activamente la exposición y aumentar el aporte de antioxidantes",
     "Ningún impacto práctico",
     "Debería beber más café"
    ],
    "correct": 1
   },
   {
    "q": "¿Cuál es el papel del selenio en el sistema de defensa antioxidante?",
    "options": [
     "Se une directamente a los metales pesados en la sangre",
     "Solo un oligoelemento cosmético",
     "El selenio es un componente esencial de la glutatión peroxidasa (GPX), una de las enzimas antioxidantes más importantes — la deficiencia de selenio reduce esta defensa y aumenta el estrés oxidativo",
     "Es responsable de la salud ósea"
    ],
    "correct": 2
   },
   {
    "q": "¿Por qué la tolerancia al alcohol difiere tanto entre las personas?",
    "options": [
     "Solo por el peso corporal",
     "Las variantes de ADH (alcohol → acetaldehído) y ALDH2 (acetaldehído → ácido acético) difieren mucho entre individuos. Con defectos de ALDH2 — frecuentes en poblaciones asiáticas — el acetaldehído tóxico se acumula: rubor, náuseas, riesgo de cáncer notablemente elevado con el consumo crónico",
     "Hombres y mujeres lo descomponen de forma idéntica",
     "Todos exhalan el alcohol"
    ],
    "correct": 1
   },
   {
    "q": "Una clienta muestra varias zonas rojas en el informe de desintoxicación. ¿Qué enfoque de asesoramiento es el más adecuado?",
    "options": [
     "Ignorarlo — la desintoxicación funciona de forma autónoma",
     "Dejar de comer por completo",
     "La carga genética no puede corregirse por completo, pero sí compensarse: evitar exposiciones específicas (menos alimentos quemados, ambiente interior limpio), dieta rica en antioxidantes (vit. C/E, selenio, precursores del glutatión), sin exposición al tabaco y ejercicio regular para la excreción a través del sudor",
     "Acudir de inmediato al médico — la predisposición es una enfermedad"
    ],
    "correct": 2
   }
  ]
 },
 "tx-report-en": {
  "topic": "Formación en asesoramiento",
  "description": "Recorre el informe genético de desintoxicación capítulo a capítulo con tu cliente.",
  "longDescription": "Esta formación en asesoramiento explica cómo recorrer el informe genético de desintoxicación con tus clientes. Desde la desintoxicación de alimentos quemados y productos químicos, pasando por la protección frente al envejecimiento y el aporte de selenio, hasta el metabolismo del alcohol y de los fármacos.",
  "postVideoText": "Con esta formación estás preparado para guiar a tus clientes por el informe de desintoxicación con confianza.",
  "introQuestionsHeader": "En esta formación aprenderás:",
  "bullets": [
   "Recorrer el informe de desintoxicación capítulo a capítulo",
   "Explicar con claridad la desintoxicación de alimentos quemados y productos químicos",
   "Enmarcar la protección frente al envejecimiento por estrés oxidativo",
   "Asesorar sobre el aporte de selenio y el metabolismo del alcohol y de los fármacos"
  ],
  "introQuestions": [
   "Cómo está estructurado el informe de desintoxicación",
   "Qué genes controlan la desintoxicación de alimentos quemados y productos químicos",
   "Cómo afecta el estrés oxidativo al proceso de envejecimiento",
   "Qué recomendaciones se derivan para el selenio, el alcohol y los fármacos"
  ],
  "questions": [
   {
    "q": "A un cliente le gusta el filete quemado y la barbacoa. El informe de desintoxicación muestra una desintoxicación lenta de los HAP. ¿Cuál es tu consejo?",
    "options": [
     "Ningún problema — que coma tantos alimentos quemados como quiera",
     "Recomendar reducir los alimentos quemados, carbonizados o ahumados (exposición a HAP), preferir métodos de cocción más suaves y combinarlos con alimentos ricos en antioxidantes (vitaminas C, E, polifenoles)",
     "Cambiar únicamente a una dieta de alimentos crudos",
     "Comer más alimentos quemados para entrenar la enzima"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente con actividad reducida de GPX (defensa antioxidante dependiente del selenio deficiente) — ¿qué es lo más adecuado?",
    "options": [
     "Ignorar por completo el aporte de selenio",
     "Suplementación específica de selenio en dosis fisiológicas (p. ej. 50-100 µg/día de selenometionina), dieta rica en antioxidantes y reducción de la carga oxidativa (tabaco, alcohol, sol)",
     "Selenio en dosis altas (500+ µg/día)",
     "Solo vitamina C, sin selenio"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo explicas una \"zona roja\" en la sección de desintoxicación química (defecto de GST)?",
    "options": [
     "El cliente es alérgico a todos los productos químicos",
     "El organismo neutraliza los productos químicos ambientales de forma menos eficiente que la media — es especialmente importante reducir en la práctica la exposición (aire más limpio, menos pesticidas, menos disolventes en el hogar); el aporte de antioxidantes apoya la capacidad de desintoxicación restante",
     "Es un error de laboratorio",
     "Significa que el cliente debe evitar todos los alimentos"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente de ascendencia asiática muestra un defecto de ALDH2. ¿Cuál es el punto clave del asesoramiento?",
    "options": [
     "Beber más alcohol para superar la variante",
     "El acetaldehído — un carcinógeno conocido — se acumula. Incluso un consumo moderado y regular de alcohol aumenta sustancialmente el riesgo de cáncer a largo plazo. Recomendación: alcohol muy bajo o nulo",
     "Ninguna preocupación real",
     "Solo evitar el azúcar"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo enmarcas el informe general de desintoxicación para el cliente?",
    "options": [
     "Como un veredicto — los genes determinan el destino",
     "Como una hoja de ruta — los genes muestran dónde el sistema es más débil; la reducción específica de exposiciones concretas junto con un estilo de vida rico en antioxidantes compensa de forma medible a lo largo de los años",
     "Como algo irrelevante — la desintoxicación es autónoma",
     "Como un diagnóstico médico que requiere tratamiento"
    ],
    "correct": 1
   }
  ]
 },
 "bo-sci-en": {
  "topic": "Base científica",
  "description": "Cómo el gen COMT determina el procesamiento individual del estrés — y por qué el riesgo de burnout es genético.",
  "longDescription": "En esta formación, el Dr. Daniel Wallerstorfer explica el gen COMT y su papel en la descomposición de la dopamina, el fenotipo Guerrero frente a Preocupado, el BDNF y la neuroplasticidad, y cómo puede deducirse el riesgo individual de burnout a partir del perfil genético.",
  "postVideoText": "Con este contexto científico podrás analizar el informe de burnout con tus clientes sobre una base sólida y deducir estrategias individuales de gestión del estrés.",
  "introQuestionsHeader": "Esta formación responde a:",
  "bullets": [
   "COMT — gen central para la descomposición de la dopamina",
   "Guerrero frente a Preocupado — dos genotipos, dos estrategias de estrés",
   "BDNF, neuroplasticidad y resiliencia",
   "Recomendaciones prácticas a partir del perfil genético"
  ],
  "introQuestions": [
   "¿Qué gen es central para el procesamiento individual del estrés?",
   "¿Cuál es la diferencia entre Guerrero y Preocupado?",
   "¿Cómo es genético el riesgo de burnout?",
   "¿Qué recomendaciones concretas de estilo de vida se derivan del perfil?"
  ],
  "questions": [
   {
    "q": "¿Qué gen es el impulsor central del procesamiento individual del estrés en el análisis de burnout?",
    "options": [
     "MTHFR",
     "COMT",
     "CYP1A2",
     "FTO"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué distingue a un genotipo \"Guerrero\" de uno \"Preocupado\" respecto al COMT?",
    "options": [
     "El Guerrero descompone la dopamina más rápido — máximo rendimiento bajo estrés agudo. El Preocupado la descompone más lento — gran concentración diaria, más vulnerable al estrés crónico",
     "Ninguna diferencia real, solo importa la educación",
     "El Preocupado descompone la dopamina más rápido",
     "Los Guerreros son inmunes a toda forma de estrés"
    ],
    "correct": 0
   },
   {
    "q": "¿Qué significa una \"zona roja\" en el informe de burnout para el asesoramiento?",
    "options": [
     "El cliente ya tiene burnout",
     "Es un error técnico",
     "El cliente tiene una predisposición genética desfavorable en este aspecto — las medidas de estilo de vida son especialmente importantes porque el riesgo está elevado",
     "El cliente debería evitar todo el tema"
    ],
    "correct": 2
   },
   {
    "q": "¿Cuál es la recomendación más adecuada para un cliente con una variante lenta de COMT (Preocupado)?",
    "options": [
     "Buscar activamente el estrés — lo hace más productivo",
     "Pausas conscientes de recuperación, meditación, buena higiene del sueño y evitar muchas fuentes de estrés simultáneas — porque la señal de estrés permanece más tiempo en el sistema",
     "Aumentar drásticamente la cafeína para elevar la dopamina",
     "Evitar toda forma de esfuerzo, incluso el deporte"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo debería enmarcarse una predisposición desfavorable al burnout en el asesoramiento?",
    "options": [
     "Como un destino — no se puede hacer nada",
     "Como un riesgo elevado, no como un destino — los clientes que conocen su sensibilidad al estrés pueden actuar a tiempo (sueño, meditación, ejercicio, pausas). La información genética es una herramienta, no un veredicto.",
     "Como algo irrelevante — los genes no afectan al estrés",
     "Como una enfermedad que requiere tratamiento inmediato"
    ],
    "correct": 1
   },
   {
    "q": "¿Por qué una descomposición lenta de la dopamina (Preocupado) también tiene ventajas en el día a día?",
    "options": [
     "Los hace inmunes a todo estrés",
     "Provoca una resistencia al estrés constantemente alta",
     "La dopamina permanece activa más tiempo — estas personas experimentan la emoción, la alegría y la recompensa de forma más intensa; son curiosas y exploradoras. El inconveniente solo aparece bajo estrés crónico, cuando al organismo le cuesta volver a la calma.",
     "No tiene ventajas, solo desventajas"
    ],
    "correct": 2
   }
  ]
 },
 "bo-report-en": {
  "topic": "Formación en asesoramiento",
  "description": "Recorre el informe de burnout paso a paso con tu cliente.",
  "longDescription": "En esta formación en asesoramiento, el Dr. Daniel Wallerstorfer explica cómo recorrer el informe genético de burnout con tus clientes y deducir estrategias individuales de gestión del estrés.",
  "postVideoText": "Con esta formación podrás analizar el informe de burnout con tus clientes sobre una base sólida. El folleto de demostración que aparece a continuación puede servir como informe de ejemplo para tu propia práctica de asesoramiento.",
  "introQuestionsHeader": "En esta formación aprenderás:",
  "bullets": [
   "Recorrer el informe de burnout de forma estructurada",
   "Explicar con claridad la predisposición genética al estrés",
   "Deducir recomendaciones individuales de estilo de vida",
   "Reconocer a tiempo las señales de alerta"
  ],
  "introQuestions": [
   "Cómo está estructurado el informe de burnout",
   "Cómo explicar con claridad la predisposición individual al estrés",
   "Cómo deducir recomendaciones concretas de estilo de vida"
  ],
  "questions": [
   {
    "q": "Una clienta muestra una variante lenta de COMT (Preocupado). ¿Cuál es el punto central del asesoramiento?",
    "options": [
     "No se necesita ningún consejo especial",
     "Las señales de estrés permanecen más tiempo en el sistema — recomendar rutinas deliberadas de recuperación, priorizar el sueño, meditación/respiración y evitar varios factores de estrés simultáneos. La información genética es una herramienta para planificar la recuperación de forma activa, no para etiquetar al cliente",
     "Decirle a la clienta que sufrirá burnout",
     "Recomendar dosis altas de cafeína"
    ],
    "correct": 1
   },
   {
    "q": "Una clienta Preocupada dice que disfruta de su trabajo detallista y se siente productiva — ¿debería cambiar?",
    "options": [
     "Sí, debe cambiar de personalidad",
     "No — la variante lenta de COMT también aporta ventajas (alta concentración, experiencia intensa de recompensa, curiosidad). La recomendación se centra en la recuperación, no en la personalidad: mantener las fortalezas pero planificar la recuperación para protegerse frente al estrés crónico",
     "Dejar su trabajo",
     "Tomar medicación de inmediato"
    ],
    "correct": 1
   },
   {
    "q": "¿Qué significa una \"zona roja\" en el informe de burnout para la conversación de asesoramiento?",
    "options": [
     "El cliente ya tiene burnout",
     "El cliente tiene una predisposición genética desfavorable en este aspecto — las medidas de estilo de vida son especialmente importantes. Es una alerta, no un diagnóstico",
     "Error de laboratorio",
     "El cliente debería evitar todos los temas"
    ],
    "correct": 1
   },
   {
    "q": "Un cliente de tipo Guerrero dice que rinde bajo presión — ¿debe preocuparse por el burnout?",
    "options": [
     "No, los Guerreros son inmunes",
     "Menor riesgo agudo que el Preocupado, pero la recuperación sigue siendo importante. Una percepción de ausencia de estrés puede enmascarar una falta de estimulación en las fases tranquilas. Recomendar estructura para la concentración diaria y un sueño adecuado",
     "Sí, cambiar a un trabajo de bajo estrés",
     "Aumentar el estrés tanto como sea posible"
    ],
    "correct": 1
   },
   {
    "q": "¿Cómo enmarcas el informe general de burnout para el cliente?",
    "options": [
     "Como un veredicto — sufrirá burnout",
     "Como una herramienta: el informe revela el perfil de estrés del cliente para que la recuperación y el estilo de vida puedan planificarse de forma deliberada. No es un veredicto ni un diagnóstico",
     "Como algo irrelevante",
     "Como una patología médica que requiere tratamiento inmediato"
    ],
    "correct": 1
   }
  ]
 }
}
const clone = (o) => JSON.parse(JSON.stringify(o))
const vid = (id) => (id && VIDEOS[id]) ? VIDEOS[id] : null

export const COURSES_ES = COURSES_EN.map((en) => {
  const c = clone(en)
  c.lang = 'es'
  c.id = en.id.replace(/-en$/, '') + '-es'
  c.uid = en.uid + '-es'
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

export const CATEGORIES_ES = Object.fromEntries(Object.entries(CATEGORIES_EN).map(([k, v]) => [k, CAT[v] || v]))
export const MAIN_CATEGORIES_ES = MAIN_CATEGORIES_EN.map(m => ({
  title: MAIN_TITLES[m.title] || m.title,
  sections: m.sections.map(s => CAT[s] || s),
}))
export const SECTION_PRODUCT_LABELS_ES = Object.fromEntries(
  Object.entries(SECTION_PRODUCT_LABELS_EN).map(([k, v]) => [CAT[k] || k, v])
)
