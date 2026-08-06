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
const FAQTX = {
 "wm-report-en": {
  "videoSegmentTitles": [
   "Introducción",
   "Análisis de peso — Tipo nutricional",
   "Análisis de peso — Tipo de ejercicio y de calorías",
   "Cómo entender las tablas científicas",
   "Análisis de peso — Pérdida de masa muscular",
   "Análisis de peso — Hambre y saciedad",
   "Análisis de peso — Distribución de la grasa",
   "Análisis de peso — Efecto Yo-Yo",
   "Análisis de peso — Lista de alimentos",
   "Análisis de peso — Sistema de unidades de alimento",
   "Análisis de peso — Tablas de ejercicio",
   "Observaciones finales"
  ]
 },
 "wm-faq-en": {
  "faqGroups": [
   {
    "title": "¿Qué es la Dieta Genética?",
    "items": [
     {
      "q": "¿Qué es exactamente la Dieta Genética?",
      "a": "La Dieta Genética es un programa personalizado de pérdida de peso y nutrición basado en el análisis de tus genes. En lugar de un plan dietético estándar, recibes una recomendación individual, porque tu metabolismo reacciona genéticamente de forma distinta al de los demás: a las grasas, a los carbohidratos, al ejercicio e incluso al hambre."
     },
     {
      "q": "¿Qué recibo exactamente?",
      "a": "Recibes un informe individual con tu proporción óptima de grasas, carbohidratos y proteínas; una lista de alimentos personalizada con más de 1.500 alimentos; un plan de menús diarios para 4 semanas; un recetario; y recomendaciones concretas de ejercicio y movimiento que encajan con tu perfil genético."
     },
     {
      "q": "¿Durante cuánto tiempo son válidas mis recomendaciones?",
      "a": "Tus genes no cambian a lo largo de la vida, por lo que los resultados genéticos siguen siendo válidos de forma permanente. La evaluación, en cambio, se perfecciona continuamente con las nuevas investigaciones: desde el lanzamiento del programa se han incorporado más de 770 mejoras."
     },
     {
      "q": "¿Tengo que repetir la prueba periódicamente?",
      "a": "No. Los genes son los mismos de por vida: un gen ya analizado devuelve siempre el mismo resultado. Lo que sí sigue mejorando es la evaluación en sí, ya que los nuevos hallazgos científicos se incorporan de forma continua."
     }
    ]
   },
   {
    "title": "¿Cómo funciona el análisis genético?",
    "items": [
     {
      "q": "¿Cómo funciona el programa de la Dieta Genética?",
      "a": "A partir de tu conjunto de datos genéticos se seleccionan las variantes relevantes para el control del peso. Con ellas calculamos: ¿qué sensibilidad tiene tu cuerpo a las grasas y a los carbohidratos? ¿Qué eficacia tiene el ejercicio en tu caso? ¿Y la reducción de calorías? ¿Tiendes al efecto Yo-Yo, a la pérdida muscular o a la grasa abdominal? De estos resultados surgen tu distribución óptima de macronutrientes y un plan nutricional individual."
     },
     {
      "q": "¿Perder peso no es solo una cuestión de déficit calórico?",
      "a": "No solo. Los estudios muestran que las personas reaccionan genéticamente de forma muy distinta a las grasas y a los carbohidratos: algunas apenas engordan con un superávit calórico, otras aumentan mucho más con las mismas calorías. La eficacia del ejercicio también varía genéticamente hasta en un factor de 3."
     },
     {
      "q": "¿Existen 7 tipos nutricionales diferentes?",
      "a": "Sí: aprovechador de grasas (mayor proporción de grasa), tipo mixto I-V (distintas distribuciones mixtas) y aprovechador de carbohidratos (mayor proporción de carbohidratos). Combinados con factores individuales como el metabolismo basal, la eficacia del ejercicio y la tendencia al efecto Yo-Yo, existen más de 6.500 perfiles genéticos posibles."
     },
     {
      "q": "¿A partir de qué edad es adecuado el programa para niños?",
      "a": "En principio, el programa también se puede aplicar a niños, pero sin cálculos de calorías, recomendaciones de peso objetivo, menús diarios ni recetario: estos elementos no tienen sentido en niños en crecimiento. El recetario está bloqueado para menores de 14 años."
     }
    ]
   },
   {
    "title": "Calorie Blocker",
    "items": [
     {
      "q": "¿Qué es el Calorie Blocker?",
      "a": "El Calorie Blocker es un producto personalizado para la pérdida de peso en forma de pellets Microtransporter. Contiene una proporción individual de bloqueadores de grasas y de carbohidratos adaptada a tu análisis de ADN. Combinado con una ingesta reducida de calorías y de grasas, favorece de forma demostrable la pérdida de peso; junto con una alimentación y un estilo de vida equilibrados, ayuda a mantener el peso."
     },
     {
      "q": "¿Cómo tomo el Calorie Blocker?",
      "a": "A diario, antes del almuerzo y de la cena, con un buen trago de agua. Los pellets deben tragarse enteros, sin masticar."
     },
     {
      "q": "¿Cuáles son los principios activos?",
      "a": "El bloqueador de grasas es Opuntia ficus-indica (OFI), la fibra del nopal o higo chumbo. Esta fibra vegetal forma una matriz de tipo gel en el tracto gastrointestinal que fija la grasa de la dieta y reduce su absorción. El bloqueador de carbohidratos es la faseolamina (de frijoles blancos), que inhibe la alfa-amilasa. Ambos son totalmente de origen vegetal."
     },
     {
      "q": "¿El Calorie Blocker es vegano/vegetariano?",
      "a": "Sí. Tanto el bloqueador de grasas (Opuntia ficus-indica) como el bloqueador de carbohidratos (faseolamina de frijoles blancos) son de origen puramente vegetal. El Calorie Blocker es apto para vegetarianos y veganos, sin gluten, sin lactosa y libre de colorantes artificiales."
     }
    ]
   }
  ]
 },
 "nut-report-en": {
  "videoSegmentTitles": [
   "Análisis de nutrición — Introducción",
   "Cafeína y café",
   "Omega 3",
   "Ácido fólico",
   "Homocisteína",
   "Coenzima Q10",
   "Detoxificación — Carcinógenos",
   "Detoxificación — Productos químicos y metales pesados",
   "Radicales libres",
   "Selenio",
   "Sal y presión arterial",
   "Vitamina D (Parte 1)",
   "Vitamina D (Parte 2)",
   "Lactosa y calcio",
   "Inflamación",
   "Colesterol LDL",
   "Triglicéridos",
   "Hierro",
   "Metilación",
   "Cierre — Última parte",
   "Principio de la valoración de los alimentos",
   "Lista de alimentos"
  ]
 },
 "nut-faq-en": {
  "faqGroups": [
   {
    "title": "Fundamentos — Genes y nutrición",
    "items": [
     {
      "q": "¿Por qué el mismo alimento afecta de forma distinta a cada persona?",
      "a": "Porque metabolizamos los nutrientes de forma genéticamente distinta. El gen MTHFR, por ejemplo, determina si tu cuerpo puede activar el ácido fólico y convertirlo en su forma bioactiva. El gen CYP1A2 determina la rapidez con la que degradas la cafeína. Este tipo de variantes cambia cómo actúa un nutriente en TU cuerpo."
     },
     {
      "q": "¿Cuántos genes considera el análisis de nutrición?",
      "a": "Alrededor de 60 variantes génicas relevantes para la nutrición. Entre ellas: MTHFR (activación del folato), CYP1A2 (degradación de la cafeína), ACE (sal/presión arterial), VDR (receptor de la vitamina D), HFE (absorción del hierro), LCT (persistencia de la lactasa) y los genes de la defensa antioxidante (SOD, CAT, GPX)."
     },
     {
      "q": "¿El análisis puede decirme si debería tomar café?",
      "a": "De forma indirecta, sí. El gen CYP1A2 muestra si degradas la cafeína rápido (Warrior) o despacio. Quienes la degradan despacio tienen un mayor riesgo cardiovascular derivado de la cafeína: es preferible evitar el café o sustituirlo por descafeinado para conservar los beneficios de los polifenoles."
     },
     {
      "q": "¿El análisis sustituye a un médico o a un nutricionista?",
      "a": "No. Es una ayuda adicional para la toma de decisiones, basada en datos genéticos estables. Los síntomas agudos, las enfermedades o las dietas especiales corresponden siempre a un médico o a un nutricionista titulado."
     }
    ]
   },
   {
    "title": "Genes clave",
    "items": [
     {
      "q": "¿Qué significa para mí un defecto en MTHFR?",
      "a": "MTHFR activa el ácido fólico convirtiéndolo en metilfolato, la forma que tu cuerpo realmente puede utilizar. Con un defecto, puedes tomar mucho ácido fólico en un suplemento convencional y aun así tener una deficiencia funcional. Cambiar a metilfolato resuelve el problema."
     },
     {
      "q": "Tengo una variante en HFE: ¿es peligroso para mí suplementar hierro?",
      "a": "Puede serlo. Algunas variantes de HFE provocan una sobrecarga de hierro a lo largo de décadas: tu cuerpo absorbe demasiado de los alimentos y lo almacena en el hígado, el corazón y las articulaciones. Los suplementos de hierro solo deberían tomarse si los análisis de sangre muestran una deficiencia real."
     },
     {
      "q": "Sensibilidad a la sal (ACE): ¿significa que tengo que renunciar a la sal?",
      "a": "No del todo. Significa que tu presión arterial responde a la sal con más intensidad que la media. Reducir la sal es una palanca muy potente en tu caso, mucho más que en las personas no sensibles."
     }
    ]
   },
   {
    "title": "Preguntas prácticas",
    "items": [
     {
      "q": "¿Debo dejar de comer mis alimentos favoritos si están valorados como desfavorables?",
      "a": "No. El informe es una guía a largo plazo. Un consumo ocasional está bien. El objetivo es el equilibrio a lo largo de semanas y meses, no la perfección en un solo día."
     },
     {
      "q": "¿Con qué rapidez notaré un efecto?",
      "a": "Depende de lo que cambies. La sensibilidad a la cafeína se percibe distinta en cuestión de días. El cambio en el ácido fólico se refleja en los marcadores sanguíneos en 2-3 meses. Las recomendaciones a largo plazo, como reducir la sal o las grasas saturadas, tardan de 6 a 12 meses en traducirse en beneficios cardiovasculares medibles."
     },
     {
      "q": "¿La lista de recomendaciones es inamovible?",
      "a": "No. Las recomendaciones se derivan del consenso científico actual. A medida que avanza la investigación, el informe se actualiza periódicamente sin coste adicional."
     }
    ]
   }
  ]
 },
 "pg-faq-en": {
  "faqGroups": [
   {
    "title": "Talento y genética en el deporte",
    "items": [
     {
      "q": "¿Qué influencia tienen los genes en el rendimiento deportivo?",
      "a": "Las estimaciones varían entre el 30 y el 70 %, según la disciplina. El talento (fibras de velocidad, potencial de VO2max, estabilidad del tejido conjuntivo) está determinado predominantemente por la genética; la respuesta al entrenamiento en sí —con qué intensidad reacciona el cuerpo a un estímulo— también varía genéticamente en un factor de 2 a 3."
     },
     {
      "q": "¿Cuál es la diferencia entre volumen muscular y fuerza muscular?",
      "a": "El volumen significa más masa (objetivo del culturismo): entrenamiento con 6-12 repeticiones. La fuerza significa más rendimiento con menos masa: entrenamiento con 1-6 repeticiones y cargas elevadas. Ambos objetivos de entrenamiento requieren estrategias distintas y periodos de descanso distintos."
     },
     {
      "q": "¿Puedo llegar a ser un deportista exitoso con genes “malos”?",
      "a": "Sí. La genética determina el talento, pero el entrenamiento, la constancia y la estrategia adecuada marcan la diferencia decisiva. Conocer tus puntos débiles genéticos te permite compensarlos (por ejemplo, con una alimentación rica en antioxidantes, descansos más largos o un calentamiento cuidadoso)."
     }
    ]
   },
   {
    "title": "Riesgo de lesiones y regeneración",
    "items": [
     {
      "q": "Mi informe muestra genes desfavorables del tejido conjuntivo (COL5A1, MMP3). ¿Qué debo hacer?",
      "a": "Entrena con especial cuidado: calentamiento a fondo, menos carga explosiva hasta lograr la adaptación, mayor recuperación entre sesiones intensas y un buen aporte de proteína y vitamina C para favorecer la síntesis de colágeno. Evita los aumentos bruscos de volumen."
     },
     {
      "q": "¿Por qué el informe me recomienda antioxidantes?",
      "a": "El ejercicio intenso genera grandes cantidades de radicales libres. Si tus genes antioxidantes (SOD2, CAT, GPX) son débiles, la recuperación es más lenta y se acumula microinflamación. La vitamina C, la vitamina E, los polifenoles y el selenio apoyan directamente estos sistemas de defensa."
     },
     {
      "q": "¿Qué es un “deload” y con qué frecuencia debo hacerlo?",
      "a": "Un deload es una semana de entrenamiento más suave (por ejemplo, la primera sesión con la mitad del peso y la segunda con dos tercios). Le da al cuerpo tiempo de recuperación para repararse y supone un reinicio psicológico. Normalmente cada ~5 semanas, según tu regeneración genética y tu predisposición al estrés."
     }
    ]
   },
   {
    "title": "Nutrición para deportistas",
    "items": [
     {
      "q": "¿Cómo se relaciona el informe deportivo con el informe de nutrición?",
      "a": "Se complementan. El informe deportivo muestra tu perfil de rendimiento, el riesgo de lesiones y la regeneración. El informe de nutrición te dice qué mezcla de combustible (grasas/carbohidratos/proteínas) y qué suplementos respaldan ese perfil."
     },
     {
      "q": "¿Debería tomar proteína en polvo?",
      "a": "No necesariamente. Si cubres de 1,6 a 2,0 g de proteína por kg de peso corporal con alimentos reales y te recuperas bien entre sesiones, no necesitas ningún polvo. Si te cuesta alcanzar esas cifras, una proteína en polvo limpia puede simplificar la ingesta."
     }
    ]
   }
  ]
 },
 "tx-report-en": {
  "videoSegmentTitles": [
   "Detoxificación — Carcinógenos",
   "Detoxificación — Productos químicos y metales pesados",
   "Radicales libres (estrés oxidativo)",
   "Selenio"
  ]
 },
 "bo-faq-en": {
  "faqGroups": [
   {
    "title": "Base genética del estrés",
    "items": [
     {
      "q": "¿Qué es el gen COMT y por qué es importante?",
      "a": "COMT (catecol-O-metiltransferasa) degrada la dopamina, la adrenalina y la noradrenalina en la corteza prefrontal. Una variante frecuente (Val158Met) determina la rapidez de esa degradación, con una diferencia de un factor de 3-4 entre las variantes rápidas y las lentas. Esto regula cuánto tiempo permanece una señal de estrés en el sistema."
     },
     {
      "q": "¿Cuál es la diferencia entre Warrior y Worrier?",
      "a": "Warrior (Val/Val): la dopamina se degrada rápido; mayor resistencia al estrés agudo y buen rendimiento bajo presión. Worrier (Met/Met): la dopamina se degrada despacio; gran capacidad de concentración en el día a día, pero mayor vulnerabilidad al estrés crónico. Alrededor del 50 % son de tipo mixto."
     },
     {
      "q": "¿Y qué pasa con el BDNF?",
      "a": "El BDNF (factor neurotrófico derivado del cerebro) favorece el crecimiento neuronal y la resiliencia. La variante Met (Val66Met) reduce la secreción de BDNF; sus portadores se recuperan más lentamente del estrés y son más vulnerables a la depresión bajo una carga crónica. El BDNF puede elevarse con ejercicio, sueño, aprendizaje y ayuno intermitente."
     }
    ]
   },
   {
    "title": "Consejos prácticos",
    "items": [
     {
      "q": "Soy Worrier: ¿estoy condenado al burnout?",
      "a": "No. La variante lenta de COMT aumenta la sensibilidad, no marca un destino. Conocer la predisposición te permite actuar a tiempo: rutinas claras de recuperación, prioridad al sueño, respiración o meditación, y evitar acumular muchos factores de estrés a la vez. A lo largo de los años, esto impide que el sistema entre en una sobrecarga crónica."
     },
     {
      "q": "Soy Warrior: ¿aun así debo preocuparme por el burnout?",
      "a": "El riesgo agudo es menor, pero la recuperación sigue importando. La sensación de estar “libre de estrés” puede enmascarar una falta de estimulación en los periodos tranquilos. Planifica estructura para las fases de concentración y protege el sueño."
     },
     {
      "q": "¿Qué le ayuda a todo el mundo, sea cual sea el genotipo?",
      "a": "Dormir (7-9 h), moverse con regularidad (sobre todo ejercicio de resistencia, que eleva el BDNF y regula el cortisol), el contacto social, encontrar sentido en el trabajo y evitar el abuso de estimulantes (alcohol, exceso de cafeína)."
     }
    ]
   },
   {
    "title": "Qué hacer con el resultado",
    "items": [
     {
      "q": "En mi informe aparece una “zona roja”. ¿Debo preocuparme?",
      "a": "No. Una zona roja señala un riesgo elevado en un ámbito concreto, no un diagnóstico. Es una invitación a actuar a tiempo, justo lo contrario de un veredicto fatalista."
     },
     {
      "q": "¿Dónde encuentro recomendaciones concretas para mi genotipo?",
      "a": "En el informe de burnout: contiene recomendaciones detalladas sobre meditación, nutrición, movimiento, higiene del sueño y estrategias de afrontamiento, adaptadas a tu perfil individual de COMT y a los demás factores evaluados."
     }
    ]
   }
  ]
 },
 "ba-faq-en": {
  "faqGroups": [
   {
    "title": "Fundamentos — Telómeros y envejecimiento",
    "items": [
     {
      "q": "¿Qué son los telómeros y por qué son importantes para el envejecimiento?",
      "a": "Los telómeros son capuchones protectores situados en el extremo de cada cromosoma: no contienen genes en sí mismos, pero evitan que los genes se pierdan durante las divisiones celulares. Con cada división celular se desprende un pequeño fragmento de telómero. Después de 50-70 divisiones se agotan; la célula entra en una especie de modo de reposo (senescencia) y se acumula en el cuerpo como “célula vieja”."
     },
     {
      "q": "¿Cuál es la diferencia entre la edad cronológica y la biológica?",
      "a": "La edad cronológica es tu tiempo de vida en años: fija e inalterable. La edad biológica muestra qué edad tienen realmente tus células. Dos personas con la misma edad cronológica pueden diferir hasta en 20 años de edad biológica según su predisposición genética y su estilo de vida."
     },
     {
      "q": "¿Qué hace la telomerasa?",
      "a": "La telomerasa es una enzima capaz de reparar y reconstruir los telómeros. Su actividad es en parte genética: las personas con una actividad elevada de telomerasa conservan mejor sus telómeros, mientras que quienes tienen una actividad reducida ven cómo sus telómeros se acortan más rápido, sobre todo bajo estrés oxidativo."
     },
     {
      "q": "¿Qué genes se evalúan en el análisis?",
      "a": "Principalmente la telomerasa y genes relacionados (TERT, BICD1, PPARG) que controlan el mantenimiento de los telómeros. Muestran hasta qué punto tu cuerpo puede reparar y conservar los telómeros: una estimación aproximada de tu capacidad antienvejecimiento genética."
     }
    ]
   },
   {
    "title": "Qué aporta el estilo de vida",
    "items": [
     {
      "q": "¿La dieta mediterránea funciona para todo el mundo?",
      "a": "Sorprendentemente, no. Los estudios muestran que alarga los telómeros solo en las personas con una variante génica concreta; en las demás no se observa ningún efecto medible sobre la longitud de los telómeros. Una demostración clara de que el mismo consejo de estilo de vida no funciona igual en cada individuo."
     },
     {
      "q": "¿Qué nutrientes apoyan los telómeros?",
      "a": "Vitamina D3, Omega-3, vitamina E, resveratrol y ginkgo. Cuando el sistema de protección genético es débil, estos nutrientes pueden emplearse de forma deliberada para frenar el acortamiento de los telómeros."
     },
     {
      "q": "¿Puedo influir en los radicales libres?",
      "a": "Sí: los antioxidantes de los alimentos (vitamina C, vitamina E, polifenoles de las bayas, el té, etc.) neutralizan los radicales libres antes de que dañen las células. Cuando las defensas antioxidantes están genéticamente debilitadas, una alimentación rica en antioxidantes es especialmente importante."
     }
    ]
   },
   {
    "title": "Influencia y expectativas",
    "items": [
     {
      "q": "¿Con qué rapidez veré resultados de las medidas antienvejecimiento?",
      "a": "Los efectos sobre los telómeros son lentos: de meses a años. Algunos marcadores intermedios (estrés oxidativo, inflamación, perfil lipídico en sangre) se modifican en semanas. El mayor impacto del estilo de vida sobre la edad biológica se acumula a lo largo de décadas."
     },
     {
      "q": "¿Qué utilidad práctica tiene para mí este conocimiento?",
      "a": "Sabes si tiendes genéticamente a un envejecimiento celular más rápido o más lento, y puedes actuar de forma deliberada. Con una predisposición desfavorable, céntrate en: alimentación rica en antioxidantes, suplementos específicos (D3, Omega-3, resveratrol), ejercicio regular pero no excesivo, buen sueño y reducción del estrés."
     }
    ]
   }
  ]
 },
 "supp-faq-en": {
  "faqGroups": [
   {
    "title": "Fundamentos — ¿Por qué personalizada?",
    "items": [
     {
      "q": "¿Por qué necesito una suplementación personalizada?",
      "a": "Porque tu cuerpo aprovecha genéticamente algunos nutrientes mejor o peor que el de otra persona, y porque tu estilo de vida (ejercicio, sueño, estrés, alimentación) configura además tu necesidad individual. Las píldoras estándar parten de la “persona media” y, por tanto, cubren muchas necesidades individuales o bien de forma insuficiente o bien en exceso."
     },
     {
      "q": "¿En qué se diferencia de los multivitamínicos estándar de farmacia?",
      "a": "En tres puntos principales: (1) la selección de nutrientes y su dosificación se adaptan a tus genes; (2) la liberación está temporizada (por ejemplo, vitamina C Slow-Release) para mantener constantes los niveles en sangre; (3) los nutrientes que compiten entre sí, como el calcio y el zinc, se liberan separados en el espacio y en el tiempo para que no se bloqueen mutuamente."
     },
     {
      "q": "¿Cuántos genes considera el análisis?",
      "a": "Más de 60 variantes génicas relevantes para los nutrientes, entre ellas los genes del metabolismo de las vitaminas (folato-MTHFR, vitamina D-VDR, vitamina B12-FUT2), los genes de absorción de minerales (hierro-HFE, calcio-LCT) y los sistemas de defensa antioxidante (GST, SOD, CAT)."
     }
    ]
   },
   {
    "title": "Tecnología Microtransporter",
    "items": [
     {
      "q": "¿Qué son los Microtransporter?",
      "a": "Los Microtransporter son pellets diminutos, del orden de milímetros, que transportan cada nutriente en cubiertas protectoras específicas. Cada Microtransporter “libera” su contenido en un momento distinto y en un lugar distinto del tracto gastrointestinal, de modo que incluso nutrientes que normalmente compiten entre sí pueden tomarse juntos y absorberse por separado."
     },
     {
      "q": "¿Por qué la vitamina C se libera como Slow-Release?",
      "a": "La vitamina C tiene una vida media biológica muy corta (~30 minutos). Una única dosis alta se excreta en gran medida sin aprovecharse. La liberación Slow-Release en los Microtransporter imita la ingesta natural y continua a partir de los alimentos a lo largo del día y mantiene estables los niveles en sangre: algo mucho más razonable desde el punto de vista fisiológico."
     },
     {
      "q": "¿Cómo funciona con el calcio y el zinc, que se bloquean mutuamente?",
      "a": "El calcio y el zinc compiten por los mismos transportadores intestinales: tomarlos juntos hace que se absorba menos de ambos. Con la tecnología Microtransporter, el zinc se libera de inmediato en el intestino delgado superior y el calcio horas después, en un tramo intestinal más profundo. Ambos se toman a la vez, pero se liberan en lugares y momentos distintos: sin competencia."
     }
    ]
   },
   {
    "title": "Preguntas prácticas",
    "items": [
     {
      "q": "¿Tengo que tomar las píldoras a horas fijas?",
      "a": "Recomendamos una hora del día constante (por ejemplo, con el desayuno) para mantener estables los niveles en sangre. No hace falta mirar el minuto exacto: basta con una rutina aproximada. Lo más importante es tomarlas con regularidad."
     },
     {
      "q": "¿Con qué rapidez notaré un efecto?",
      "a": "Varía según el nutriente. Algunos efectos (por ejemplo, más energía con las vitaminas del grupo B) aparecen en días o semanas; otros (por ejemplo, el metabolismo óseo con la vitamina D) se desarrollan a lo largo de meses. La suplementación personalizada no es un medicamento de acción rápida: corrige carencias de nutrientes a largo plazo."
     },
     {
      "q": "¿Necesito suplementación para siempre?",
      "a": "En el caso de las debilidades metabólicas de origen genético, sí, porque la predisposición dura toda la vida. Las necesidades derivadas del estilo de vida (por ejemplo, una mayor necesidad durante el estrés, el ejercicio o la enfermedad) pueden cambiar. El análisis también te muestra dónde tu genética produce una necesidad permanentemente elevada y dónde basta con ajustar el estilo de vida."
     },
     {
      "q": "¿Puedo combinar la suplementación con medicamentos?",
      "a": "En general sí: todos los nutrientes están dosificados en cantidades propias de los alimentos. En caso de enfermedad crónica o medicación de larga duración, deberías consultarlo con tu médico, porque algunos nutrientes concretos (por ejemplo, la vitamina K o el hierro) pueden interactuar con determinados fármacos."
     },
     {
      "q": "¿Cómo se compara el coste de la suplementación personalizada con el de los multivitamínicos de farmacia?",
      "a": "Es bastante más elevado por día: normalmente entre 3 y 5 veces el de los productos de farmacia más baratos. A cambio obtienes una composición adaptada genéticamente que probablemente sí se absorba, en lugar de excretarse en gran parte sin aprovecharse. La comparación “por mg de vitamina” es engañosa; “por mg que realmente llega a la sangre” resulta mucho más significativa."
     }
    ]
   }
  ]
 },
 "beauty-faq-en": {
  "faqGroups": [
   {
    "title": "Fundamentos — Qué hace el análisis genético de la piel",
    "items": [
     {
      "q": "¿Qué es el análisis genético de la piel (DNAbeauty Control)?",
      "a": "Es un análisis de tus genes centrado en las áreas relevantes para la piel: degradación del colágeno, sensibilidad al UV, pigmentación, hidratación cutánea, defensa antioxidante y tendencia a la inflamación. A partir de tu conjunto de datos de ADN se evalúan más de 20 variantes génicas relevantes para la piel y se traducen en recomendaciones prácticas de cuidado y protección."
     },
     {
      "q": "¿En qué se diferencia de un análisis cosmético de la piel?",
      "a": "Los análisis cosméticos miden el estado actual de tu piel —hidratación, sebo, pigmentación, etc.— y reaccionan a él. El análisis genético de la piel te muestra qué propiedades y qué puntos débiles están anclados de forma PERMANENTE en tus genes. Puedes prevenir de forma proactiva en lugar de tratar de forma reactiva cuando los problemas ya se ven."
     },
     {
      "q": "¿Cuántos genes se analizan?",
      "a": "Más de 20 variantes génicas relevantes para la piel. Áreas principales: MMP1 (degradación del colágeno, arrugas), MC1R (sensibilidad al UV, pigmentación), FLG (filagrina, hidratación y barrera cutánea), SOD2/CAT/GPX (defensa antioxidante) y genes de la inflamación como IL6 y TNF-α."
     },
     {
      "q": "¿Durante cuánto tiempo es válido mi resultado?",
      "a": "Tus genes no cambian a lo largo de la vida, así que los resultados básicos siguen siendo válidos de forma permanente. Lo que se va perfeccionando es la evaluación en sí, a medida que se incorporan continuamente nuevas investigaciones."
     }
    ]
   },
   {
    "title": "Genética y envejecimiento cutáneo — Entender el resultado",
    "items": [
     {
      "q": "¿Qué significa una variante MMP1 “activa”?",
      "a": "MMP1 (metaloproteinasa de matriz 1) degrada el colágeno de la piel. Una variante genéticamente muy activa conduce a una degradación más rápida del colágeno: la piel pierde firmeza antes y las arrugas se forman más rápido. Contramedidas: protección UV constante, antioxidantes, no fumar y cuidado con retinoides o a base de péptidos."
     },
     {
      "q": "¿Qué me dice MC1R sobre la sensibilidad al UV?",
      "a": "MC1R controla la producción de eumelanina (pigmento oscuro, protector frente al UV) frente a la de feomelanina (pigmento rojizo, que genera radicales libres bajo la radiación UV). Variantes desfavorables: quemaduras solares más rápidas y mayor riesgo de daño por UV y de cáncer de piel; hace falta una disciplina más estricta con el protector solar."
     },
     {
      "q": "¿Por qué es importante FLG (filagrina) para mi cuidado de la piel?",
      "a": "FLG produce filagrina, una proteína que mantiene unida la barrera cutánea natural y retiene la humedad. Con una actividad de FLG genéticamente reducida, la barrera cutánea es más débil: la humedad se pierde antes y los irritantes penetran con más facilidad. Recomendación: cuidado que refuerce la barrera (ceramidas, colesterol, ácidos grasos libres), limpiadores suaves y nada de tensioactivos que resequen."
     },
     {
      "q": "¿Esto afecta realmente a mi aspecto de forma medible?",
      "a": "Sí, pero no de la noche a la mañana. Las debilidades genéticas se acumulan a lo largo de los años. Dos personas de la misma edad pueden diferir entre 10 y 15 años en términos biológicos, según lo bien que compensen sus puntos débiles genéticos con el estilo de vida."
     }
    ]
   },
   {
    "title": "Recomendaciones prácticas y expectativas",
    "items": [
     {
      "q": "¿Con qué rapidez notaré el efecto de un cuidado personalizado?",
      "a": "Algunos efectos aparecen en semanas (hidratación, luminosidad, irritación) y otros solo después de meses o años (formación de arrugas, pigmentación, estructura de la piel). El cuidado personalizado no es una solución rápida, sino una estrategia de protección a largo plazo."
     },
     {
      "q": "¿Necesito cremas caras?",
      "a": "No necesariamente. Lo que importa son los ingredientes adecuados para tu predisposición genética, y esos existen en todos los rangos de precio. Lo que cuenta es la concentración de principios activos, la formulación y la constancia en la aplicación. Un sérum de vitamina C asequible puede superar a una crema cara sin principios activos."
     },
     {
      "q": "¿Es más importante mi estilo de vida que mis genes?",
      "a": "Ambos actúan juntos. Los genes marcan el potencial y los puntos débiles; el estilo de vida decide en qué medida compensas o amplificas esos puntos débiles. Regla práctica: con una predisposición genética desfavorable, un estilo de vida constante es aún más importante que con “buenos genes”."
     }
    ]
   }
  ]
 },
 "legal-basics-en": {
  "articleSections": [
   {
    "title": "Publicidad de los productos de Novogenia",
    "paragraphs": [
     "Novogenia está a la vanguardia de las posibilidades científicas y ofrece procedimientos de análisis consolidados, como los análisis de sangre, pero también posibilidades avanzadas, como los análisis genéticos y los productos personalizados. Como nos movemos en el ámbito de la salud, existen reglas estrictas para las afirmaciones publicitarias que deben respetarse. En Alemania, en particular, hay asociaciones de requerimientos formales que buscan declaraciones poco claras o engañosas y emiten requerimientos.",
     "Estamos firmemente convencidos de que nuestras recomendaciones son eficaces y tienen en cuenta el estado más avanzado de la ciencia. Por desgracia, lo que un producto puede hacer y lo que está permitido afirmar en publicidad son, a veces, cosas distintas."
    ]
   },
   {
    "title": "Publicidad con análisis de sangre",
    "paragraphs": [
     "Los análisis de sangre están bien consolidados y solo están sujetos a restricciones publicitarias menores. Todas las afirmaciones que siguen son no críticas."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "“Analizamos sangre.”"
     },
     {
      "tone": "safe",
      "text": "“Diagnosticamos deficiencias.”"
     },
     {
      "tone": "safe",
      "text": "“Damos recomendaciones de micronutrientes y de nutrición.”"
     },
     {
      "tone": "safe",
      "text": "“Personalizamos los complementos en función del resultado.”"
     },
     {
      "tone": "safe",
      "text": "Síntomas de una deficiencia (por ejemplo, cansancio por deficiencia de hierro): mejor con una cita de la fuente (por ejemplo, una sociedad médica)."
     },
     {
      "tone": "safe",
      "text": "Testimonio: “Estaba cansado a menudo, la prueba identificó una deficiencia de hierro y eso me ayudó” — permitido."
     }
    ]
   },
   {
    "title": "Publicidad con pruebas genéticas",
    "paragraphs": [
     "Los análisis de ADN todavía no son un método estándar en cualquier consulta médica. Las asociaciones de requerimientos formales examinan con especial rigor las tecnologías que la mayoría de los expertos aún no considera práctica habitual. Por ello, el análisis de ADN está bajo observación especial.",
     "Desde el punto de vista de una asociación de requerimientos formales, un análisis de ADN tiene dos componentes: el análisis científicamente validado de las propiedades genéticas (no crítico) y el programa de actuación que se deriva de él (crítico)."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "La determinación de las propiedades genéticas, respaldada por la ciencia actual."
     },
     {
      "tone": "critical",
      "text": "Las recomendaciones concretas de nutrición, ejercicio o complementos derivadas de los genes, sin ensayos aleatorizados específicos sobre esa recomendación exacta."
     }
    ],
    "callout": {
     "tone": "safe",
     "text": "Ejemplo: “La prueba genética demuestra que el ácido fólico no es eficaz para ti” — permitido (respaldado por estudios)."
    }
   },
   {
    "title": "La variante segura: solo propiedades genéticas",
    "paragraphs": [
     "La variante segura se centra en afirmaciones limitadas a las propiedades genéticas determinadas, sin derivar de ellas recomendaciones concretas de actuación. Todas las formulaciones que siguen son no críticas desde la perspectiva de los requerimientos formales."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "“Analizamos tus genes y determinamos si engordas más fácilmente con las grasas o con los carbohidratos.”"
     },
     {
      "tone": "safe",
      "text": "“Descubres si respondes más al ejercicio o a la reducción de calorías.”"
     },
     {
      "tone": "safe",
      "text": "“Descubres si tu cuerpo puede activar eficazmente el ácido fólico.”"
     },
     {
      "tone": "safe",
      "text": "“Descubres qué talentos tiene tu cuerpo en el deporte de competición y con qué eficacia responden tus músculos al entrenamiento de fuerza.”"
     }
    ]
   },
   {
    "title": "La variante más audaz: recomendaciones con un descargo de responsabilidad",
    "paragraphs": [
     "En esta variante, la prueba se anuncia igual que antes, pero las recomendaciones de actuación se comunican como conclusiones lógicas y no como promesas científicamente confirmadas. Con un descargo de responsabilidad. Advertencia: las asociaciones de requerimientos formales no siempre aceptan los descargos de responsabilidad."
    ],
    "bullets": [
     {
      "tone": "caveat",
      "text": "“Analizamos tus genes y determinamos si engordas más fácilmente con las grasas o con los carbohidratos. A partir de ahí derivamos conclusiones lógicas y planes de nutrición para aprovechar este conocimiento.*”"
     },
     {
      "tone": "caveat",
      "text": "“Descubres si tu cuerpo puede activar el ácido fólico. A partir de ahí te recomendamos micronutrientes alternativos que tomar en su lugar.*”"
     },
     {
      "tone": "critical",
      "text": "CONTRAEJEMPLO: “Toma metilfolato en lugar de ácido fólico” — crítico sin descargo de responsabilidad, porque no existe ningún ensayo aleatorizado sobre esta recomendación concreta."
     }
    ],
    "callout": {
     "tone": "caveat",
     "text": "* Nota de descargo de responsabilidad: Las propiedades genéticas están científicamente confirmadas. Los ajustes derivados de ellas en la dosificación de micronutrientes o en las recomendaciones nutricionales todavía no alcanzan, para muchos efectos, el nivel de patrón oro (ensayos aleatorizados y controlados con placebo) y deben entenderse como experimentales."
    }
   },
   {
    "title": "Publicidad de la suplementación personalizada",
    "paragraphs": [
     "La Unión Europea ha establecido un marco regulatorio claro para las afirmaciones sobre el efecto de los complementos: las declaraciones de propiedades saludables (Health Claims). Estas definen exactamente qué efectos pueden anunciarse para cada principio activo.",
     "Con independencia de cuánta ciencia respalde un efecto, no está permitido promocionarlo en publicidad hasta que la EFSA haya aprobado el Health Claim correspondiente. Cíñete a la extensa lista de afirmaciones permitidas."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "Personalización basada en el estilo de vida y los valores sanguíneos: no problemática."
     },
     {
      "tone": "caveat",
      "text": "Personalización basada en el análisis genético: solo con un descargo de responsabilidad (véase “la variante más audaz”)."
     },
     {
      "tone": "safe",
      "text": "Ejemplo de Health Claim: “Contribuye a una piel normal” (con zinc), “Contribuye a un sistema inmunitario normal”."
     },
     {
      "tone": "safe",
      "text": "Ejemplo de testimonio: “Lo tomo porque tengo la piel seca”, combinado con el Health Claim del zinc — permitido."
     },
     {
      "tone": "critical",
      "text": "NO permitido: cualquier afirmación cuyo Health Claim no haya sido aprobado por la EFSA (por ejemplo, “cura tu enfermedad”)."
     }
    ]
   },
   {
    "title": "Reseñas y testimonios de clientes",
    "paragraphs": [
     "Si ofreces un sistema de reseñas de clientes (por ejemplo, en tu sitio web), no puedes controlar si un cliente hace afirmaciones no permitidas (por ejemplo, “el producto X me curó”). En principio está permitido, pero debe gestionarse con cuidado."
    ],
    "bullets": [
     {
      "tone": "safe",
      "text": "En tu propio sistema moderable: etiqueta con claridad las afirmaciones como opiniones de clientes e indica que no las respaldas."
     },
     {
      "tone": "safe",
      "text": "Las afirmaciones que infrinjan el Reglamento sobre declaraciones de propiedades saludables deben eliminarse."
     },
     {
      "tone": "safe",
      "text": "Ante una valoración gravemente equivocada: añade una respuesta correctiva de la empresa."
     },
     {
      "tone": "caveat",
      "text": "En sistemas externos y no moderables: decláralos con claridad y nunca promociones de forma selectiva afirmaciones falsas."
     },
     {
      "tone": "critical",
      "text": "Promocionar o destacar activamente afirmaciones falsas, incluso cuando se trate de opiniones de clientes."
     }
    ]
   }
  ]
 }
}
/* END FAQTX */
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

export const CATEGORIES_ES = Object.fromEntries(Object.entries(CATEGORIES_EN).map(([k, v]) => [k, CAT[v] || v]))
export const MAIN_CATEGORIES_ES = MAIN_CATEGORIES_EN.map(m => ({
  title: MAIN_TITLES[m.title] || m.title,
  sections: m.sections.map(s => CAT[s] || s),
}))
export const SECTION_PRODUCT_LABELS_ES = Object.fromEntries(
  Object.entries(SECTION_PRODUCT_LABELS_EN).map(([k, v]) => [CAT[k] || k, v])
)
