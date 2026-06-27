import { Service, CaseStudy, MethodStep, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'pr-prensa',
    title: 'Gestión de prensa & Relaciones Públicas',
    icon: 'Newspaper',
    shortDescription: 'Gestión de prensa orgánica: levantamiento argumental, desarrollo de contenido estratégico. Generación de entrevistas con medios masivos, regionales y especializados.',
    description: 'Desarrollamos campañas de comunicación que no solo anuncian, sino que crean conversación e interés real. Convertimos los objetivos de tu negocio en noticias de alto interés periodístico.',
    features: [
      'Redacción y distribución estratégica de comunicados de prensa',
      'Gestión de entrevistas exclusivas y conferencias',
      'Monitoreo exhaustivo de medios impresos, radiales y de televisión',
      'Monitoreo periódico del Share of Voice frente a competidores',
      'Lanzamientos institucionales de productos con periodistas especializados'
    ]
  },
  {
    id: 'estrategia-digital',
    title: 'Generación de contenido SEO, GEO y Posicionamiento en Inteligencia Artificial',
    icon: 'Radio',
    shortDescription: 'Generación de contenido para LinkedIn y sitio web. Columnas de opinión y piezas de alto valor para construir identidad digital y presencia positiva en buscadores.',
    description: 'Alineamos tu presencia digital para que la primera búsqueda de un cliente o inversionista genere confianza. Cuidamos el ecosistema donde vive la opinión pública.',
    features: [
      'Mayor visibilidad en Google y buscadores.',
      'Presencia en respuestas de inteligencia artificial.',
      'Incremento de autoridad y credibilidad digital.',
      'Mejor reputación online de marcas y ejecutivos.',
      'Posicionamiento como referente en tu industria.',
      'Generación de tráfico orgánico de calidad.',
      'Mayor influencia en procesos de búsqueda y decisión.'
    ]
  },
  {
    id: 'gestion-crisis',
    title: 'Gestión de Crisis, Reputación y Control de Daños',
    icon: 'ShieldAlert',
    shortDescription: 'Protegemos la reputación de empresas, marcas y líderes frente a situaciones de alta exposición pública, riesgos operacionales y crisis reputacionales. Diseñamos estrategias de prevención, preparación y respuesta que permiten actuar con rapidez, minimizar impactos y resguardar la confianza de clientes, colaboradores, inversionistas y stakeholders.',
    description: 'Trabajamos junto a directorios, equipos ejecutivos y comités de crisis para anticipar vulnerabilidades, definir protocolos de actuación y coordinar una respuesta efectiva en medios de comunicación, redes sociales y entornos digitales.',
    features: [
      'Diseño y entrenamiento de comités de crisis.',
      'Identificación de riesgos reputacionales y mapas de vulnerabilidad.',
      'Protocolos de respuesta y planes de continuidad comunicacional.',
      'Monitoreo estratégico de medios, redes sociales y Dark Social.',
      'Desarrollo de mensajes clave, statements y Q&A para escenarios críticos.',
      'Gestión de vocerías y coordinación con equipos legales, compliance y alta dirección.',
      'Implementación de War Room para la gestión de incidentes en tiempo real.',
      'Simulacros de crisis y entrenamiento para directorios y equipos ejecutivos.'
    ]
  },
  {
    id: 'media-training',
    title: 'Media Training Ejecutivo y Entrenamiento de Vocerías',
    icon: 'Mic',
    shortDescription: 'Preparamos a líderes, ejecutivos y voceros para enfrentar entrevistas, exposiciones públicas y escenarios de alta visibilidad con seguridad, credibilidad y control del mensaje.',
    description: 'A través de una metodología práctica, basada en simulaciones reales y coaching personalizado, fortalecemos las habilidades comunicacionales necesarias para transmitir mensajes clave, gestionar preguntas complejas y proteger la reputación corporativa.',
    features: [
      'Simulación de entrevistas para TV, radio, prensa y plataformas digitales.',
      'Grabación y análisis de desempeño.',
      'Desarrollo de mensajes clave y talking points.',
      'Manejo de preguntas difíciles y comunicación en situaciones sensibles o de crisis.',
      'Optimización de comunicación verbal, no verbal y presencia ejecutiva.',
      'Preparación para conferencias, vocerías corporativas y liderazgo de opinión.'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-directv',
    category: 'corporativo',
    title: 'Lanzamiento Internet Satelital Latam',
    client: 'Cliente área: Telecomunicaciones',
    year: '2024',
    description: 'Campaña Anuncio Internet satelital y su llegada simultánea a Chile y otros 6 países de LATAM, en coordinación con equipo de comunicaciones regional.',
    challenge: 'Comunicar en Chile anuncio corporativo simultáneo de compañía multinacional, en coordinación con 7 países latinoamericanos.',
    solution: 'Estrategia de prensa orgánica enfocada en medios de negocios y tecnología para maximizar el impacto regional.',
    result: 'Resultados: Más de 100 publicaciones.',
    stats: {
      label: 'Impacto Comprobado',
      value: '+100 Publicaciones'
    }
  },
  {
    id: 'cs-viva',
    category: 'crisis',
    title: 'Reposicionamiento ante Riesgo Reputacional',
    client: 'Cliente área: Grupo Inmobiliario',
    year: '2025',
    description: 'Estrategia de diferenciación positiva ante confusión de marca con grupo homónimo.',
    challenge: 'Campaña para visibilizar imagen corporativa de marca, frente al riesgo por homonimia con una empresa bajo escrutinio legal.',
    solution: 'Gestión de prensa proactiva enfocada en resaltar la trayectoria, solvencia y gobierno corporativo independiente, así como su levantamiento como referente en el mundo inmobiliario.',
    result: 'Resultados 100% favorables a la estrategia.',
    stats: {
      label: 'Impacto Comprobado',
      value: '100% Favorables'
    }
  },
  {
    id: 'cs-manquehue',
    category: 'corporativo',
    title: 'Apertura a la Bolsa de Comercio',
    client: 'Cliente área: Inmobiliaria',
    year: '2019',
    description: 'Posicionamiento previo al IPO para generar confianza financiera en el mercado bursátil.',
    challenge: 'Preparar el terreno comunicacional para una exitosa oferta pública inicial en un entorno financiero exigente.',
    solution: 'Estrategia de visibilidad financiera y posicionamiento corporativo de los principales ejecutivos en la prensa económica.',
    result: 'Resultados: Portada Economía y Negocios El Mercurio, Radio Duna, entre otros medios.',
    stats: {
      label: 'Impacto en Medios',
      value: 'Portada Economía y Negocios El Mercurio, Radio Duna, entre otros medios'
    }
  },
  {
    id: 'cs-innovagile',
    category: 'evento',
    title: 'Posicionamiento de marca y su CEO como referente en educación inmobiliaria en Chile.',
    client: 'Cliente área: Inversiones & Inmobiliario',
    year: '2025',
    description: 'Coordinación y prensa de Encuentro Smart, evento de educación en inversión inmobiliaria más importante del país.',
    challenge: 'Construir autoridad y liderazgo de opinión para marca y su CEO, como uno de los gestores de inversión inmobiliaria más relevantes en Chile, a través de una estrategia global de PR & Earned Media, colaborando en el desarrollo de podcast y evento Encuentro Inmobiliario, articulando y vinculando a líderes del sector y media partners.',
    solution: 'Plan de free publicity y gestión de entrevistas en medios nacionales. Vínculo con referentes legales, inmobiliarios, del mundo de la arquitectura, academia, diseño e inversiones, que se sumaron a la iniciativa., amplificando alcance y reputación de marca.',
    result: 'Resultado: Más de $2 millones ahorrados en free publicity, con presencia en vitrinas tier 1, 2 y 3, con más de 10 rostros claves y repercusiones como embajadores espontáneos de marca en LinkedIN e IG.',
    stats: {
      label: 'Impacto Comprobado',
      value: '+$2 Millones'
    }
  },
  {
    id: 'cs-aniversario-colegio',
    category: 'aniversario',
    title: 'Estrategia 90 años',
    client: 'Cliente área: Colegio de elite',
    year: '2024',
    description: 'Estrategia 360 para visibilizar atributos icónicos e hitos de establecimiento educacional desde aristas académicas, deportivas, sociales, arquitectónicas, formativas, entre otras.',
    challenge: 'Visibilizar de forma integral los atributos y la trayectoria de la institución en el marco de su 90 aniversario.',
    solution: 'Despliegue de una estrategia 360 abarcando las diversas aristas de la comunidad educativa.',
    result: 'Resultados: más de 60 publicaciones en primer trimestre de trabajo y construcción positiva de huella digital.',
    stats: {
      label: 'Impacto en Medios',
      value: '+60 Publicaciones'
    }
  },
  {
    id: 'cs-more-projects',
    category: 'corporativo',
    title: 'Explorar +100 proyectos confidenciales',
    client: 'Diversas Industrias',
    year: '2014-2026',
    description: 'A lo largo de más de una década hemos liderado decenas de casos protegidos bajo estrictos Acuerdos de Confidencialidad (NDA).',
    challenge: 'Nuestra experiencia histórica abarca desde el posicionamiento de startups tecnológicas hasta contención de crisis en corporaciones transnacionales.',
    solution: 'Aplicamos el rigor de nuestra Metodología adaptándola a los requerimientos únicos y confidenciales de cada socio comercial.',
    result: 'Resultados: Historial sólido de protección y potenciamiento de reputación corporativa a largo plazo con métricas reservadas.',
    stats: {
      label: 'Archivo Histórico',
      value: '+100 Proyectos'
    }
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    phase: 'Fase 01',
    title: 'Auditoría & Diagnóstico de Mensaje',
    description: 'Analizamos tu panorama mediático actual, diagnosticamos tu huella digital e identificamos fortalezas, vulnerabilidades, temas críticos y voceros estratégicos.',
    details: [
      'Análisis de la presencia actual en buscadores de internet',
      'Monitoreo inicial de Share of Voice y sentimiento de marca',
      'Reunión preliminar de diagnóstico con interlocutor de comunicaciones para programar acciones y carta gantt',
      'Identificación de temas críticos, fortalezas diferenciadoras y elaboración de brief corporativo y kit de prensa'
    ],
    duration: 'Semana 1 - 2'
  },
  {
    phase: 'Fase 02',
    title: 'Estrategia & Storytelling Corporativo',
    description: 'Diseñamos directrices estratégicas de comunicación, posicionamiento y un Storytelling robusto para impactar los canales adecuados.',
    details: [
      'Creación de la matriz de mensajes por audiencias o segmentos clave',
      'Definición estratégica de los portavoces oficiales e ideas fuerza (Talking Points)',
      'Selección fina y curaduría de canales de difusión primarios y secundarios',
      'Redacción previa de preguntas y respuestas difíciles preparatorias (Q&A)'
    ],
    duration: 'Semana 3 - 4'
  },
  {
    phase: 'Fase 03',
    title: 'Despliegue Multi-Canal & Relación de Confianza',
    description: 'Salimos al mercado. Vinculamos tu marca directamente con los líderes editoriales y creadores de opinión clave a través de exclusivas de prensa y acciones estratégicas.',
    details: [
      'Propuesta dirigida a periodistas líderes y equipos editoriales clave',
      'Coordinación técnica de eventos especiales informativos o almuerzos ejecutivos',
      'Envío de comunicados, propuestas de temas y acompañamiento presencial a entrevistas en terreno',
      'Distribución activa periódica de comunicados y notas especializadas de nuevos productos, tendencias o aportes al debate contingente.'
    ],
    duration: 'Activo / Mensual'
  },
  {
    phase: 'Fase 04',
    title: 'Monitoreo de Impacto & Share of Voice (SOV)',
    description: 'Evaluamos de manera cuantitativa y de forma mensual el retorno de inversión y la evolución reputacional del negocio.',
    details: [
      'Entrega de reportes con equivalencia publicitaria estimada (Ad Value)',
      'Medición periódica exacta del Share of Voice frente a competidores',
      'Análisis cualitativo del tono del artículo (Positivo, Neutro o Negativo)',
      'Reunión online semanal o quincenal para análisis de resultados y reprogramación de acciones'
    ],
    duration: 'Mensual / Continuo'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Ignacio Larraín',
    position: 'Director General',
    company: 'LogiTech S.A.',
    text: 'Socio estratégico fundamental para nuestra ronda de financiamiento global. El posicionamiento orgánico que diseñaron nos dio la confianza técnica que exigían los fondos globales americanos.',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Daniela Alcaide',
    position: 'VP de Asuntos Públicos',
    company: 'HyperStore LatAm',
    text: 'Su velocidad de reacción en el War Room durante la crisis de filtración de datos fue brillante. Lograron evitar un linchamiento mediático coordinando perfectamente a voceros y legal.',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Mauricio Valencia',
    position: 'Managing Partner',
    company: 'Aura Capital',
    text: 'Mejora de reputación en su máximo esplendor. No solo lograron desbancar campañas sucias e infundadas en internet, sino posicionaron de forma definitiva nuestra seriedad financiera en buscadores.',
    rating: 5
  }
];
