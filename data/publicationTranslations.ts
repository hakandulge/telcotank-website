// Publication translations for all 7 non-English languages
// Structure: slug -> { lang -> { title, description, format, coverage, tags } }

type PublicationTranslation = {
  title: string
  description: string
  format: string
  coverage: string
  tags: string[]
}

type LanguageCode = 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

export const publicationTranslations: Record<string, Partial<Record<LanguageCode, PublicationTranslation>>> = {
  'how-ai-is-reshaping-global-data-center-demand-strategy-framework': {
    tr: {
      title: 'AI\'nin Küresel Veri Merkezi Talebini Nasıl Yeniden Şekillendirdiği',
      description: 'AI tarafından yönlendirilen küresel veri merkezi talebinin dönüşümünü haritalandırarak, hiper ölçekli CapEx sinyalleri, güç kısıtlama gerçeklikleri ve egemen altyapı hamleleri eyleme geçirilebilir konumlandırma çerçevelerine çevrir. GPU küme güç gereksinimlerini, ızgaraya bağlantı darboğazlarını, hiper ölçekli stratejileri (Microsoft, Google, Amazon, Meta, Oracle) ve 12 coğrafya genelinde sermaye tahsis çerçevelerini kapsar.',
      format: 'Word Belge (DOCX) — 74 Sayfa',
      coverage: '12 Küresel Pazar | 2025–2030',
      tags: ['Veri Merkezleri', 'AI Altyapısı', 'Güç ve Enerji'],
    },
    ar: {
      title: 'كيف تعيد الذكاء الاصطناعي تشكيل الطلب على مراكز البيانات العالمية',
      description: 'يحدد تحويل الطلب على مراكز البيانات العالمية المدفوع بالذكاء الاصطناعي، وترجمة إشارات نفقات رأس المال لشركات الحوسبة الضخمة، وواقع قيود الطاقة، والحركات البنية التحتية السيادية إلى أطر تحديد موضع قابلة للتنفيذ. يغطي متطلبات الطاقة لمجموعات معالجات الرسومات، اختناقات الربط الشبكي، استراتيجيات شركات الحوسبة الضخمة (Microsoft و Google و Amazon و Meta و Oracle)، وأطر توزيع رأس المال عبر 12 جغرافيا.',
      format: 'مستند Word (DOCX) — 74 صفحة',
      coverage: '12 أسواق عالمية | 2025–2030',
      tags: ['مراكز البيانات', 'بنية الذكاء الاصطناعي', 'الطاقة والطاقة'],
    },
    es: {
      title: 'Cómo la IA está reformulando la demanda global de centros de datos',
      description: 'Mapea la transformación de la demanda de centros de datos impulsada por IA, traduciendo señales de CapEx de hiperscale, realidades de restricción de energía y jugadas de infraestructura soberana en marcos de posicionamiento accionables. Cubre requisitos de energía de clústeres GPU, cuellos de botella de interconexión de redes, estrategias de hiperscale (Microsoft, Google, Amazon, Meta, Oracle) y marcos de asignación de capital en 12 geografías.',
      format: 'Documento Word (DOCX) — 74 Páginas',
      coverage: '12 Mercados Globales | 2025–2030',
      tags: ['Centros de Datos', 'Infraestructura de IA', 'Energía y Recursos'],
    },
    pt: {
      title: 'Como a IA está reformulando a demanda global de centros de dados',
      description: 'Mapeia a transformação da demanda global de centros de dados impulsionada por IA, traduzindo sinais de CapEx de hiperscale, realidades de restrição de energia e movimentos de infraestrutura soberana em estruturas de posicionamento acionáveis. Cobre requisitos de energia de cluster de GPU, gargalos de interconexão de rede, estratégias de hiperscale (Microsoft, Google, Amazon, Meta, Oracle) e estruturas de alocação de capital em 12 geografias.',
      format: 'Documento Word (DOCX) — 74 Páginas',
      coverage: '12 Mercados Globais | 2025–2030',
      tags: ['Centros de Dados', 'Infraestrutura de IA', 'Energia e Recursos'],
    },
    ru: {
      title: 'Как ИИ переформирует глобальный спрос на центры обработки данных',
      description: 'Отображает преобразование глобального спроса на центры обработки данных, вызванное искусственным интеллектом, переводя сигналы CapEx гиперскейлеров, реальность ограничений мощности и ходы суверенной инфраструктуры в практические рамки позиционирования. Охватывает требования к мощности кластеров GPU, узкие места взаимосвязи сетей, стратегии гиперскейлеров (Microsoft, Google, Amazon, Meta, Oracle) и рамки распределения капитала по 12 географиям.',
      format: 'Документ Word (DOCX) — 74 Страницы',
      coverage: '12 Глобальных Рынков | 2025–2030',
      tags: ['Центры Обработки Данных', 'Инфраструктура ИИ', 'Энергия и Ресурсы'],
    },
    de: {
      title: 'Wie KI die globale Nachfrage nach Rechenzentren umgestaltet',
      description: 'Kartiert die durch KI angetriebene Umgestaltung der globalen Rechenzentrumsanforderungen und übersetzt Hyperscaler-CapEx-Signale, Stromversorgungsbeschränkungen und souveräne Infrastrukturpläne in umsetzbare Positionierungsrahmen. Umfasst GPU-Cluster-Stromanforderungen, Netzwerkverbindungsengpässe, Hyperscaler-Strategien (Microsoft, Google, Amazon, Meta, Oracle) und Kapitalallokationsrahmen über 12 Geographien.',
      format: 'Word-Dokument (DOCX) — 74 Seiten',
      coverage: '12 Globale Märkte | 2025–2030',
      tags: ['Rechenzentren', 'KI-Infrastruktur', 'Energie und Ressourcen'],
    },
    fr: {
      title: 'Comment l\'IA redéfinit la demande mondiale de centres de données',
      description: 'Cartographie la transformation de la demande mondiale de centres de données pilotée par l\'IA, traduisant les signaux de CapEx des hyperscalers, les réalités des contraintes énergétiques et les mouvements d\'infrastructure souveraine en cadres de positionnement actionnables. Couvre les besoins en énergie des clusters GPU, les goulots d\'étranglement d\'interconnexion réseau, les stratégies des hyperscalers (Microsoft, Google, Amazon, Meta, Oracle) et les cadres d\'allocation du capital dans 12 géographies.',
      format: 'Document Word (DOCX) — 74 pages',
      coverage: '12 Marchés Mondiaux | 2025–2030',
      tags: ['Centres de Données', 'Infrastructure IA', 'Énergie et Ressources'],
    },
  },

  'the-ai-semiconductor-arms-race-strategy-framework': {
    tr: {
      title: 'AI Yarışındaki Yarı İletken Silahlanması',
      description: 'Kurumsal araştırmaları sentezleyerek, AI yarı iletken değer zincirinin üstün konumlandırılmış, sermaye tahsisine uygun görünümünü sunar. NVIDIA\'nın %80+ GPU hâkimiyetini, TSMC CoWoS paketleme darboğazlarını, HBM3e bellek kıtlıklarını, ABD ihracat kontrollerinin küresel pazarı ikiye ayırmasını ve BAE, Suudi Arabistan, Hindistan ve AB\'den 200 milyar dolardan fazla egemen AI çip yatırımını kapsar.',
      format: 'PowerPoint (PPTX) — 95 Slayt',
      coverage: '18 Küresel Pazar | 2025–2030',
      tags: ['Yarı İletkenler', 'Jeopolitika', 'Tedarik Zinciri'],
    },
    ar: {
      title: 'سباق التسلح أشباه الموصلات في الذكاء الاصطناعي',
      description: 'يوحد البحث المؤسسي لتقديم رؤية موثوقة لتخصيص رأس المال حول سلسلة القيمة لأشباه الموصلات بالذكاء الاصطناعي. يغطي هيمنة NVIDIA بنسبة +80% على وحدات معالجة الرسومات، اختناقات تعبئة TSMC CoWoS، نقص ذاكرة HBM3e، تقسيم الأسواق العالمية بسبب ضوابط الصادرات الأمريكية، واستثمارات 200 مليار دولار وأكثر في رقائق الذكاء الاصطناعي السيادية من الإمارات والمملكة العربية السعودية والهند والاتحاد الأوروبي.',
      format: 'PowerPoint (PPTX) — 95 شريحة',
      coverage: '18 أسواق عالمية | 2025–2030',
      tags: ['أشباه الموصلات', 'جيوسياسة', 'سلسلة التوريد'],
    },
    es: {
      title: 'La carrera armamentista de semiconductores en IA',
      description: 'Sintetiza investigación institucional para proporcionar una vista calificada de asignación de capital sobre la cadena de valor de semiconductores de IA. Cubre el dominio del 80%+ de GPU de NVIDIA, cuellos de botella de empaque TSMC CoWoS, escasez de memoria HBM3e, bifurcación del mercado global por controles de exportación estadounidenses, e inversiones de más de $200 mil millones en chips de IA soberanos de Emiratos Árabes Unidos, Arabia Saudita, India y la UE.',
      format: 'PowerPoint (PPTX) — 95 Diapositivas',
      coverage: '18 Mercados Globales | 2025–2030',
      tags: ['Semiconductores', 'Geopolítica', 'Cadena de Suministro'],
    },
    pt: {
      title: 'A corrida armamentista de semicondutores em IA',
      description: 'Sintetiza pesquisas institucionais para fornecer uma visualização qualificada de alocação de capital sobre a cadeia de valor de semicondutores de IA. Cobre a dominância de 80%+ da GPU da NVIDIA, gargalos de empacotamento TSMC CoWoS, escassez de memória HBM3e, bifurcação do mercado global por controles de exportação dos EUA, e investimentos de mais de $200 bilhões em chips de IA soberanos dos Emirados Árabes Unidos, Arábia Saudita, Índia e UE.',
      format: 'PowerPoint (PPTX) — 95 Slides',
      coverage: '18 Mercados Globais | 2025–2030',
      tags: ['Semicondutores', 'Geopolítica', 'Cadeia de Suprimentos'],
    },
    ru: {
      title: 'Гонка вооружений полупроводников в ИИ',
      description: 'Синтезирует институциональные исследования, чтобы предоставить надёжный взгляд на распределение капитала в цепочке создания стоимости полупроводников ИИ. Охватывает 80%+ господство GPU NVIDIA, узкие места упаковки TSMC CoWoS, нехватку памяти HBM3e, раздвоение глобального рынка американским контролем экспорта и инвестиции в размере более 200 миллиардов долларов в суверенные чипы ИИ от ОАЭ, Саудовской Аравии, Индии и ЕС.',
      format: 'PowerPoint (PPTX) — 95 Слайдов',
      coverage: '18 Глобальных Рынков | 2025–2030',
      tags: ['Полупроводники', 'Геополитика', 'Цепь поставок'],
    },
    de: {
      title: 'Das Halbleiter-Wettrüsten in der KI',
      description: 'Synthetisiert institutionelle Forschung, um eine kapitalallokationsgerechte Sicht auf die KI-Halbleiterwertschöpfungskette zu liefern. Umfasst NVIDIAs 80%+ GPU-Dominanz, TSMC CoWoS-Verpackungsengpässe, HBM3e-Speicherengpässe, Aufspaltung des Weltmarkts durch US-Exportkontrollen und Investitionen von über 200 Milliarden Dollar in souveräne KI-Chips aus den VAE, Saudi-Arabien, Indien und der EU.',
      format: 'PowerPoint (PPTX) — 95 Folien',
      coverage: '18 Globale Märkte | 2025–2030',
      tags: ['Halbleiter', 'Geopolitik', 'Lieferkette'],
    },
    fr: {
      title: 'La course aux armements des semi-conducteurs en IA',
      description: 'Synthétise la recherche institutionnelle pour fournir une vision fiable d\'allocation de capital sur la chaîne de valeur des semi-conducteurs d\'IA. Couvre la dominance 80%+ des GPU de NVIDIA, les goulots d\'étranglement d\'emballage TSMC CoWoS, les pénuries de mémoire HBM3e, la bifurcation du marché mondial par les contrôles d\'exportation américains, et les investissements de plus de 200 milliards de dollars dans les puces d\'IA souveraines émanant des Émirats arabes unis, de l\'Arabie saoudite, de l\'Inde et de l\'UE.',
      format: 'PowerPoint (PPTX) — 95 Diapositives',
      coverage: '18 Marchés Mondiaux | 2025–2030',
      tags: ['Semi-conducteurs', 'Géopolitique', 'Chaîne d\'approvisionnement'],
    },
  },

  'the-ai-productivity-shock-strategy-framework': {
    tr: {
      title: 'AI Üretkenlik Şoku',
      description: 'Yapay zekanın endüstriler arasında temel bir üretkenlik şoku yarattığını analiz eder. Kurumsal strateji, rekabetçi konumlandırma, işgücü dönüşümü ve AI benimseme hızlandıkça endüstri değer zincirinin yeniden şekillendirilmesi için çıkarımları inceler.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global Kurumsal | 2025–2030',
      tags: ['AI Stratejisi', 'Kurumsal', 'Üretkenlik'],
    },
    ar: {
      title: 'صدمة الإنتاجية بالذكاء الاصطناعي',
      description: 'يحلل كيف يخلق الذكاء الاصطناعي صدمة إنتاجية أساسية في جميع الصناعات. يفحص الآثار المترتبة على استراتيجية المؤسسات، والموضع التنافسي، وتحول القوى العاملة، وإعادة تشكيل سلاسل القيمة الصناعية حيث يتسارع اعتماد الذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'مؤسسة عالمية | 2025–2030',
      tags: ['استراتيجية الذكاء الاصطناعي', 'مؤسسة', 'إنتاجية'],
    },
    es: {
      title: 'El choque de productividad de la IA',
      description: 'Analiza cómo la inteligencia artificial está creando un choque de productividad fundamental en todas las industrias. Examina las implicaciones para la estrategia empresarial, el posicionamiento competitivo, la transformación de la fuerza laboral y la reformulación de las cadenas de valor de la industria a medida que se acelera la adopción de IA.',
      format: 'Marco Estratégico',
      coverage: 'Empresa Global | 2025–2030',
      tags: ['Estrategia de IA', 'Empresa', 'Productividad'],
    },
    pt: {
      title: 'O choque de produtividade da IA',
      description: 'Analisa como a inteligência artificial está criando um choque de produtividade fundamental em toda a indústria. Examina as implicações para a estratégia empresarial, posicionamento competitivo, transformação da força de trabalho e reformulação das cadeias de valor da indústria à medida que a adoção de IA se acelera.',
      format: 'Estrutura Estratégica',
      coverage: 'Empresa Global | 2025–2030',
      tags: ['Estratégia de IA', 'Empresa', 'Produtividade'],
    },
    ru: {
      title: 'Шок производительности ИИ',
      description: 'Анализирует, как искусственный интеллект создает фундаментальный шок производительности во всех отраслях. Изучает последствия для корпоративной стратегии, конкурентного позиционирования, трансформации рабочей силы и переформирования цепочек создания стоимости отраслей по мере ускорения внедрения ИИ.',
      format: 'Стратегическая база',
      coverage: 'Глобальное Предприятие | 2025–2030',
      tags: ['Стратегия ИИ', 'Предприятие', 'Производительность'],
    },
    de: {
      title: 'Der KI-Produktivitätsschock',
      description: 'Analysiert, wie künstliche Intelligenz einen fundamentalen Produktivitätsschock in allen Branchen erzeugt. Untersucht die Auswirkungen auf Unternehmensstrategien, Wettbewerbspositionierung, Arbeitskrafttransformation und die Umgestaltung von Branchenwertschöpfungsketten bei zunehmender KI-Adoption.',
      format: 'Strategischer Rahmen',
      coverage: 'Globales Unternehmen | 2025–2030',
      tags: ['KI-Strategie', 'Unternehmen', 'Produktivität'],
    },
    fr: {
      title: 'Le choc de productivité de l\'IA',
      description: 'Analyse comment l\'intelligence artificielle crée un choc de productivité fondamental dans tous les secteurs. Examine les implications pour la stratégie d\'entreprise, le positionnement concurrentiel, la transformation de la main-d\'œuvre et la reformulation des chaînes de valeur du secteur à mesure que l\'adoption de l\'IA s\'accélère.',
      format: 'Cadre Stratégique',
      coverage: 'Entreprise Mondiale | 2025–2030',
      tags: ['Stratégie IA', 'Entreprise', 'Productivité'],
    },
  },

  'sovereign-ai-national-strategy-strategy-framework': {
    tr: {
      title: 'Egemen AI ve Ulusal Strateji',
      description: 'Ulusların egemen AI stratejileri geliştirmesini ve bunların kurumsal teknoloji benimseme, veri yönetişimi ve pazar erişimi için çıkarımlarını inceler. Devlet destekli GPU kümelerini, lokalizasyon yeterlendirmelerini ve egemen bilişim altyapısına jeopolitik primi kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Çok Ülkeli | 2025–2030',
      tags: ['Egemen AI', 'Jeopolitika', 'Politika'],
    },
    ar: {
      title: 'الذكاء الاصطناعي السيادي والاستراتيجية الوطنية',
      description: 'يفحص كيف تطور الدول استراتيجيات الذكاء الاصطناعي السيادية والآثار المترتبة على اعتماد تكنولوجيا المؤسسات وحوكمة البيانات والوصول إلى السوق. يغطي مجموعات معالجات الرسومات التي تدعمها الحكومة والتفويضات التوطين والعلاوة الجيوسياسية على البنية التحتية للحوسبة السيادية.',
      format: 'إطار الاستراتيجية',
      coverage: 'متعدد الدول | 2025–2030',
      tags: ['الذكاء الاصطناعي السيادي', 'جيوسياسة', 'السياسة'],
    },
    es: {
      title: 'IA Soberana y Estrategia Nacional',
      description: 'Examina cómo las naciones están desarrollando estrategias de IA soberana y sus implicaciones para la adopción de tecnología empresarial, la gobernanza de datos y el acceso al mercado. Cubre clústeres de GPU respaldados por el gobierno, mandatos de localización y la prima geopolítica sobre infraestructura de computación soberana.',
      format: 'Marco Estratégico',
      coverage: 'Multipaís | 2025–2030',
      tags: ['IA Soberana', 'Geopolítica', 'Política'],
    },
    pt: {
      title: 'IA Soberana e Estratégia Nacional',
      description: 'Examina como as nações estão desenvolvendo estratégias de IA soberana e suas implicações para adoção de tecnologia empresarial, governança de dados e acesso ao mercado. Cobre clusters de GPU apoiados pelo governo, mandatos de localização e o prêmio geopolítico sobre infraestrutura de computação soberana.',
      format: 'Estrutura Estratégica',
      coverage: 'Múltiplos Países | 2025–2030',
      tags: ['IA Soberana', 'Geopolítica', 'Política'],
    },
    ru: {
      title: 'Суверенный ИИ и национальная стратегия',
      description: 'Изучает, как страны разрабатывают стратегии суверенного ИИ и их последствия для внедрения корпоративных технологий, управления данными и доступа на рынок. Охватывает государственные кластеры GPU, требования локализации и геополитическую премию на суверенную вычислительную инфраструктуру.',
      format: 'Стратегическая база',
      coverage: 'Многостраны | 2025–2030',
      tags: ['Суверенный ИИ', 'Геополитика', 'Политика'],
    },
    de: {
      title: 'Souveräne KI und nationale Strategie',
      description: 'Untersucht, wie Staaten souveräne KI-Strategien entwickeln und deren Auswirkungen auf die Einführung von Unternehmenstechnologien, Datenverwaltung und Marktzugang. Umfasst von Regierungen unterstützte GPU-Cluster, Lokalisierungsmandaten und die geopolitische Prämie auf souveräne Rechnerinfrastruktur.',
      format: 'Strategischer Rahmen',
      coverage: 'Mehrländer | 2025–2030',
      tags: ['Souveräne KI', 'Geopolitik', 'Politik'],
    },
    fr: {
      title: 'IA Souveraine et Stratégie Nationale',
      description: 'Examine comment les nations développent des stratégies d\'IA souveraine et leurs implications pour l\'adoption de technologies d\'entreprise, la gouvernance des données et l\'accès au marché. Couvre les clusters GPU soutenus par l\'État, les mandats de localisation et la prime géopolitique sur l\'infrastructure informatique souveraine.',
      format: 'Cadre Stratégique',
      coverage: 'Plusieurs Pays | 2025–2030',
      tags: ['IA Souveraine', 'Géopolitique', 'Politique'],
    },
  },

  'ai-the-global-fiber-connectivity-expansion-strategy-framework': {
    tr: {
      title: 'AI ve Küresel Fiber + Bağlantı Genişlemesi',
      description: 'AI iş yükü taleberleri tarafından yönlendirilen muazzam fiber ve bağlantı altyapısı genişlemesini analiz eder. Denizaltı kablo yatırımlarını, şehir içi fiber yoğunlaştırmasını, kenar ağı gereksinimlerini ve telekomünikasyon operatörleri ve altyapı fonları için yatırım çıkarımlarını kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Fiber ve Bağlantı', 'Telekomünikasyon', 'Altyapı'],
    },
    ar: {
      title: 'الذكاء الاصطناعي والتوسع العالمي للألياف والاتصالات',
      description: 'يحلل الموسع الضخم لبنية الألياف والاتصالات الذي يدفعه الطلب على أعباء العمل من الذكاء الاصطناعي. يغطي الاستثمارات في الكبلات تحت الماء، وتكثيف الألياف الحضرية، ومتطلبات شبكات الحواف، والآثار الاستثمارية لعملاء الاتصالات وصناديق البنية التحتية.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['الألياف والاتصالات', 'الاتصالات', 'البنية التحتية'],
    },
    es: {
      title: 'IA y la Expansión Global de Fibra + Conectividad',
      description: 'Analiza la expansión masiva de la infraestructura de fibra y conectividad impulsada por las demandas de carga de trabajo de IA. Cubre inversiones en cables submarinos, densificación de fibra metropolitana, requisitos de red perimetral e implicaciones de inversión para operadores de telecomunicaciones y fondos de infraestructura.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Fibra y Conectividad', 'Telecomunicaciones', 'Infraestructura'],
    },
    pt: {
      title: 'IA e a Expansão Global de Fibra + Conectividade',
      description: 'Analisa a massiva expansão da infraestrutura de fibra e conectividade impulsionada pelas demandas de carga de trabalho de IA. Cobre investimentos em cabos submarinos, adensamento de fibra metropolitana, requisitos de rede de borda e implicações de investimento para operadores de telecomunicações e fundos de infraestrutura.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Fibra e Conectividade', 'Telecomunicações', 'Infraestrutura'],
    },
    ru: {
      title: 'ИИ и глобальное расширение волоконно-оптических сетей и подключения',
      description: 'Анализирует масштабное расширение волоконной и связной инфраструктуры, вызванное спросом на рабочие нагрузки ИИ. Охватывает инвестиции в подводные кабели, уплотнение городской волоконной сети, требования к граничной сети и инвестиционные последствия для операторов телекоммуникаций и фондов инфраструктуры.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Волоконная оптика и Связь', 'Телекоммуникации', 'Инфраструктура'],
    },
    de: {
      title: 'KI und die globale Glasfaser- und Konnektivitätserweiterung',
      description: 'Analysiert die massive Glasfaser- und Konnektivitätsinfrastrukturerweiterung, die durch KI-Workload-Anforderungen angetrieben wird. Umfasst Investitionen in Unterseekabel, Verdichtung von Stadtglasfasern, Edge-Netzwerk-Anforderungen und Investitionsauswirkungen für Telekommunikationsbetreiber und Infrastrukturfonds.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Glasfaser & Konnektivität', 'Telekommunikation', 'Infrastruktur'],
    },
    fr: {
      title: 'IA et Expansion mondiale de la fibre + connectivité',
      description: 'Analyse l\'expansion massive de l\'infrastructure de fibre et de connectivité pilotée par les demandes de charges de travail d\'IA. Couvre les investissements en câbles sous-marins, la densification de fibres métropolitaines, les exigences de réseau périphérique et les implications d\'investissement pour les opérateurs de télécommunications et les fonds d\'infrastructure.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Fibre & Connectivité', 'Télécommunications', 'Infrastructure'],
    },
  },

  'ai-enabled-real-asset-transformation-strategy-framework': {
    tr: {
      title: 'AI Tarafından Etkinleştirilen Gerçek Varlık Dönüşümü',
      description: 'AI\'nin veri merkezleri, telekomünikasyon altyapısı, enerji sistemleri ve ticari gayrimenkul de dahil olmak üzere gerçek varlık sınıflarını nasıl dönüştürdüğünü inceler. AI tarafından yönlendirilen altyapı süpersiklüsü genelinde konumlandırma için yatırım çerçeveleri sağlar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Gerçek Varlıklar', 'Altyapı', 'Yatırım'],
    },
    ar: {
      title: 'تحول الأصول الحقيقية الممكنة بالذكاء الاصطناعي',
      description: 'يفحص كيف يحول الذكاء الاصطناعي فئات الأصول الحقيقية بما في ذلك مراكز البيانات والبنية التحتية للاتصالات وأنظمة الطاقة والعقارات التجارية. يوفر أطر استثمارية للموضع عبر دورة البنية التحتية التي يدفعها الذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['الأصول الحقيقية', 'البنية التحتية', 'الاستثمار'],
    },
    es: {
      title: 'Transformación de Activos Reales Habilitada por IA',
      description: 'Examina cómo la IA está transformando clases de activos reales incluyendo centros de datos, infraestructura de telecomunicaciones, sistemas de energía y bienes raíces comerciales. Proporciona marcos de inversión para posicionarse en el superciclo de infraestructura impulsado por IA.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Activos Reales', 'Infraestructura', 'Inversión'],
    },
    pt: {
      title: 'Transformação de Ativos Reais Habilitada por IA',
      description: 'Examina como a IA está transformando classes de ativos reais incluindo centros de dados, infraestrutura de telecomunicações, sistemas de energia e imóveis comerciais. Fornece estruturas de investimento para se posicionar no superciclo de infraestrutura impulsado por IA.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Ativos Reais', 'Infraestrutura', 'Investimento'],
    },
    ru: {
      title: 'Трансформация реальных активов, поддерживаемая ИИ',
      description: 'Изучает, как ИИ преобразует классы реальных активов, включая центры обработки данных, телекоммуникационную инфраструктуру, энергосистемы и коммерческую недвижимость. Предоставляет инвестиционные рамки для позиционирования в суперцикле инфраструктуры, пусть ИИ.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Реальные активы', 'Инфраструктура', 'Инвестиции'],
    },
    de: {
      title: 'KI-gestützte Transformation von Realaktiva',
      description: 'Untersucht, wie KI echte Vermögensklassen wie Rechenzentren, Telekommunikationsinfrastruktur, Energiesysteme und Gewerbeimmobilien transformiert. Bietet Anlagrahmen zur Positionierung im durch KI angetriebenen Infrastruktursuperzyklus.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Realaktiva', 'Infrastruktur', 'Anlage'],
    },
    fr: {
      title: 'Transformation d\'Actifs Réels Activée par l\'IA',
      description: 'Examine comment l\'IA transforme les classes d\'actifs réels y compris les centres de données, les infrastructures de télécommunications, les systèmes énergétiques et l\'immobilier commercial. Fournit des cadres d\'investissement pour se positionner dans le supercycle d\'infrastructure piloté par l\'IA.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Actifs Réels', 'Infrastructure', 'Investissement'],
    },
  },

  'ai-infrastructure-financing-private-credit-strategy-framework': {
    tr: {
      title: 'AI Altyapı Finansmanı ve Özel Kredi',
      description: 'AI altyapısı inşaatından ortaya çıkan finansman yapılarını ve özel kredi fırsatlarını analiz eder. Veri merkezi proje finansmanını, hiper ölçekli kredi olanaklarını, altyapı borç piyasalarını ve kurumsal yatırımcılar için risk ayarlı getiri profillerini kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Özel Kredi', 'Finans', 'Altyapı'],
    },
    ar: {
      title: 'تمويل البنية التحتية للذكاء الاصطناعي والائتمان الخاص',
      description: 'يحلل الهياكل التمويلية وفرص الائتمان الخاص الناشئة من بناء البنية التحتية للذكاء الاصطناعي. يغطي تمويل مشاريع مراكز البيانات، وتسهيلات الائتمان الخاصة بالحوسبة الضخمة، وأسواق الديون البنية التحتية، وملفات العائد المعدلة حسب المخاطر للمستثمرين المؤسسيين.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['الائتمان الخاص', 'التمويل', 'البنية التحتية'],
    },
    es: {
      title: 'Financiamiento de Infraestructura de IA y Crédito Privado',
      description: 'Analiza las estructuras de financiamiento y oportunidades de crédito privado que emergen de la construcción de infraestructura de IA. Cubre financiamiento de proyectos de centros de datos, facilidades de crédito de hiperscale, mercados de deuda de infraestructura y perfiles de retorno ajustados al riesgo para inversores institucionales.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Crédito Privado', 'Finanzas', 'Infraestructura'],
    },
    pt: {
      title: 'Financiamento de Infraestrutura de IA e Crédito Privado',
      description: 'Analisa as estruturas de financiamento e oportunidades de crédito privado que emergem da construção de infraestrutura de IA. Cobre financiamento de projetos de centros de dados, facilidades de crédito de hiperscale, mercados de dívida de infraestrutura e perfis de retorno ajustados ao risco para investidores institucionais.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Crédito Privado', 'Finanças', 'Infraestrutura'],
    },
    ru: {
      title: 'Финансирование инфраструктуры ИИ и частный кредит',
      description: 'Анализирует финансовые структуры и возможности частного кредита, возникающие в результате строительства инфраструктуры ИИ. Охватывает финансирование проектов центров обработки данных, кредитные средства гиперскейлеров, рынки долга инфраструктуры и профили доходности с поправкой на риск для институциональных инвесторов.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Частный кредит', 'Финансы', 'Инфраструктура'],
    },
    de: {
      title: 'KI-Infrastrukturfinanzierung und Private Credit',
      description: 'Analysiert Finanzierungsstrukturen und Private-Credit-Möglichkeiten, die sich aus dem KI-Infrastrukturausbau ergeben. Umfasst Rechenzentrum-Projektfinanzierung, Hyperscaler-Kreditfazilitäten, Infrastruktur-Schuldenmärkte und risikobereinigt Renditeprofil für institutionelle Anleger.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Private Credit', 'Finanzen', 'Infrastruktur'],
    },
    fr: {
      title: 'Financement d\'Infrastructure d\'IA et Crédit Privé',
      description: 'Analyse les structures de financement et les opportunités de crédit privé émergeant de la construction d\'infrastructure d\'IA. Couvre le financement de projets de centres de données, les facilités de crédit des hyperscalers, les marchés de dettes d\'infrastructure et les profils de rendement ajustés au risque pour les investisseurs institutionnels.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Crédit Privé', 'Finances', 'Infrastructure'],
    },
  },

  'ai-the-global-power-supercycle-strategy-framework': {
    tr: {
      title: 'AI ve Küresel Güç Süpersiklüsü',
      description: 'AI veri merkezleri tarafından yönlendirilen benzeri görülmemiş güç talebini ve ortaya çıkan enerji altyapısı süpersiklüsünü haritalandırır. Nükleer taahhütleri, yenilenebilir satın alma stratejilerini, şebeke ara bağlantı darboğazlarını ve gücü AI altyapısı genişlemesi için sınırlayıcı kısıtlama olarak kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Güç ve Enerji', 'Altyapı', 'Veri Merkezleri'],
    },
    ar: {
      title: 'الذكاء الاصطناعي والدورة الفائقة للطاقة العالمية',
      description: 'يرسم الطلب على الطاقة غير المسبوق الذي تدفعه مراكز بيانات الذكاء الاصطناعي وسوبر سايكل البنية التحتية للطاقة الناتج. يغطي الالتزامات النووية واستراتيجيات الشراء المتجددة واختناقات الترابط الشبكي والقوة كقيد الربط لتوسع البنية التحتية للذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['الطاقة والطاقة', 'البنية التحتية', 'مراكز البيانات'],
    },
    es: {
      title: 'IA y el Superciclo de Energía Global',
      description: 'Mapea la demanda de energía sin precedentes impulsada por centros de datos de IA y el superciclo resultante de infraestructura energética. Cubre compromisos nucleares, estrategias de adquisición renovable, cuellos de botella de interconexión de redes y poder como la restricción vinculante para la expansión de infraestructura de IA.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Energía y Recursos', 'Infraestructura', 'Centros de Datos'],
    },
    pt: {
      title: 'IA e o Superciclo de Energia Global',
      description: 'Mapeia a demanda de energia sem precedentes impulsionada por centros de dados de IA e o superciclo de infraestrutura energética resultante. Cobre compromissos nucleares, estratégias de aquisição renovável, gargalos de interconexão de rede e energia como a restrição vinculante para expansão de infraestrutura de IA.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Energia e Recursos', 'Infraestrutura', 'Centros de Dados'],
    },
    ru: {
      title: 'ИИ и глобальный энергетический суперцикл',
      description: 'Отображает беспрецедентный спрос на энергию, вызванный центрами обработки данных ИИ, и возникающий суперцикл энергетической инфраструктуры. Охватывает ядерные обязательства, стратегии возобновляемых закупок, узкие места взаимосвязи сетей и мощность как связывающее ограничение для расширения инфраструктуры ИИ.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Энергия и Ресурсы', 'Инфраструктура', 'Центры Обработки Данных'],
    },
    de: {
      title: 'KI und der globale Energiesuperzyklus',
      description: 'Kartiert die beispiellose Stromnachfrage, die durch KI-Rechenzentren angetrieben wird, und den daraus resultierenden Energieinfrastruktur-Superzyklus. Umfasst Kernkraftverpflichtungen, Strategien für erneuerbare Beschaffung, Netzwerkverbindungsengpässe und Leistung als Bindungsbeschränkung für die KI-Infrastrukturerweiterung.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Energie & Ressourcen', 'Infrastruktur', 'Rechenzentren'],
    },
    fr: {
      title: 'IA et le Supercycle de l\'Énergie Mondiale',
      description: 'Cartographie la demande d\'énergie sans précédent pilotée par les centres de données d\'IA et le supercycle d\'infrastructure énergétique résultant. Couvre les engagements nucléaires, les stratégies d\'approvisionnement renouvelable, les goulots d\'étranglement d\'interconnexion réseau et la puissance comme contrainte de liaison pour l\'expansion de l\'infrastructure d\'IA.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Énergie & Ressources', 'Infrastructure', 'Centres de Données'],
    },
  },

  'ai-meets-physical-infrastructure-strategy-framework': {
    tr: {
      title: 'AI Fiziki Altyapı ile Karşılaşır',
      description: 'AI ve fiziki altyapının ulaştırma, enerji, su ve telekomünikasyon ağları arasındaki yakınsamasını inceler. AI tarafından yönlendirilen optimizasyonun altyapı yatırımını, operasyonlarını ve varlık değerlemesini nasıl yeniden şekillendirdiğini inceler.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Altyapı', 'AI Stratejisi', 'Gerçek Varlıklar'],
    },
    ar: {
      title: 'يلتقي الذكاء الاصطناعي بالبنية التحتية الفيزيائية',
      description: 'يستكشف تقارب الذكاء الاصطناعي والبنية التحتية الفيزيائية عبر النقل والطاقة والمياه وشبكات الاتصالات. يفحص كيف تعيد التحسينات التي يدفعها الذكاء الاصطناعي تشكيل الاستثمار في البنية التحتية والعمليات وتقييم الأصول.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['البنية التحتية', 'استراتيجية الذكاء الاصطناعي', 'الأصول الحقيقية'],
    },
    es: {
      title: 'La IA se encuentra con la Infraestructura Física',
      description: 'Explora la convergencia de IA e infraestructura física en transporte, energía, agua y redes de telecomunicaciones. Examina cómo la optimización impulsada por IA está reformulando la inversión en infraestructura, las operaciones y la valuación de activos.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Infraestructura', 'Estrategia de IA', 'Activos Reales'],
    },
    pt: {
      title: 'IA encontra Infraestrutura Física',
      description: 'Explora a convergência de IA e infraestrutura física em transporte, energia, água e redes de telecomunicações. Examina como a otimização impulsionada por IA está reformulando investimento em infraestrutura, operações e avaliação de ativos.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Infraestrutura', 'Estratégia de IA', 'Ativos Reais'],
    },
    ru: {
      title: 'ИИ встречается с физической инфраструктурой',
      description: 'Исследует сходство ИИ и физической инфраструктуры в области транспорта, энергии, водных и телекоммуникационных сетей. Изучает, как оптимизация на основе ИИ переформирует инвестиции в инфраструктуру, операции и оценку активов.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Инфраструктура', 'Стратегия ИИ', 'Реальные активы'],
    },
    de: {
      title: 'KI trifft auf Physische Infrastruktur',
      description: 'Untersucht die Konvergenz von KI und physischer Infrastruktur über Verkehr, Energie, Wasser und Telekommunikationsnetze. Untersucht, wie KI-getriebene Optimierung Infrastrukturinvestitionen, Betrieb und Vermögensbewertung umgestaltet.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Infrastruktur', 'KI-Strategie', 'Realaktiva'],
    },
    fr: {
      title: 'L\'IA rencontre l\'Infrastructure Physique',
      description: 'Explore la convergence de l\'IA et de l\'infrastructure physique dans les transports, l\'énergie, l\'eau et les réseaux de télécommunications. Examine comment l\'optimisation pilotée par l\'IA redéfinit l\'investissement en infrastructure, les opérations et l\'évaluation des actifs.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Infrastructure', 'Stratégie IA', 'Actifs Réels'],
    },
  },

  'ai-commercial-real-estate-repricing-strategy-framework': {
    tr: {
      title: 'AI ve Ticari Gayrimenkul Yeniden Fiyatlandırması',
      description: 'AI\'nin ticari gayrimenkulin temel yeniden fiyatlandırmasını nasıl yönlendirdiğini analiz eder; veri merkezi arazi primlerinden ofis pazar bozulmasına kadar. REIT değerleme çerçevelerini, bölgelendirme dinamiklerini ve AI tarafından optimize edilmiş gayrimenkulün ortaya çıkan coğrafyasını kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Gayrimenkul', 'Veri Merkezleri', 'Yatırım'],
    },
    ar: {
      title: 'الذكاء الاصطناعي وإعادة تسعير العقارات التجارية',
      description: 'يحلل كيفية تدفق الذكاء الاصطناعي لإعادة تسعير أساسية للعقارات التجارية، من أقساط أراضي مراكز البيانات إلى تعطل سوق المكاتب. يغطي أطر تقييم صناديق الاستثمار العقاري والديناميات المنطقية والجغرافيا الناشئة للعقارات المحسنة بالذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['العقارات', 'مراكز البيانات', 'الاستثمار'],
    },
    es: {
      title: 'IA y Revaluación de Bienes Raíces Comerciales',
      description: 'Analiza cómo la IA está impulsando una revaluación fundamental de los bienes raíces comerciales, desde primas de tierra de centros de datos hasta ruptura del mercado de oficinas. Cubre marcos de valuación de REIT, dinámicas de zonificación y la geografía emergente de bienes raíces optimizados por IA.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Bienes Raíces', 'Centros de Datos', 'Inversión'],
    },
    pt: {
      title: 'IA e Revalorização de Imóveis Comerciais',
      description: 'Analisa como a IA está impulsionando uma revalorização fundamental de imóveis comerciais, de prêmios de terra de centros de dados a ruptura do mercado de escritórios. Cobre marcos de avaliação de REIT, dinâmicas de zoneamento e a geografia emergente de imóveis otimizados por IA.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Imóveis', 'Centros de Dados', 'Investimento'],
    },
    ru: {
      title: 'ИИ и переоценка коммерческой недвижимости',
      description: 'Анализирует, как ИИ ведет к фундаментальной переоценке коммерческой недвижимости, от премии за земли центров обработки данных к краху рынка офисов. Охватывает рамки оценки REIT, динамику зонирования и развивающуюся географию недвижимости, оптимизированной ИИ.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Недвижимость', 'Центры Обработки Данных', 'Инвестиции'],
    },
    de: {
      title: 'KI und Gewerbeimmobilien-Neubewertung',
      description: 'Analysiert, wie KI eine grundlegende Neubewertung von Gewerbeimmobilien antreibt, von Rechenzentrum-Landprämien bis zur Büromarktzerstörung. Umfasst REIT-Bewertungsrahmen, Zonenregelungsdynamiken und die sich abzeichnende Geographie von KI-optimierten Immobilien.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Immobilien', 'Rechenzentren', 'Anlage'],
    },
    fr: {
      title: 'IA et Réévaluation de l\'Immobilier Commercial',
      description: 'Analyse comment l\'IA conduit une réévaluation fondamentale de l\'immobilier commercial, des primes de terres de centres de données à la rupture du marché de bureaux. Couvre les cadres d\'évaluation des FPI, les dynamiques de zonage et la géographie émergente des immobiliers optimisés par l\'IA.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Immobilier', 'Centres de Données', 'Investissement'],
    },
  },

  'ai-corporate-it-budget-reallocation-strategy-framework': {
    tr: {
      title: 'AI ve Kurumsal IT Bütçe Yeniden Tahsisi',
      description: 'Kuruluşların IT bütçelerini AI altyapısı, bulut bilişim ve veri yetenekleri doğrultusunda nasıl yeniden tahsis ettiğini inceler. CIO harcama önceliklerini, inşaat ve satın alma kararlarını ve AI öncelikli IT stratejilerinin örgütsel çıkarımlarını kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Kurumsal | 2025–2030',
      tags: ['Kurumsal', 'IT Stratejisi', 'AI Benimseme'],
    },
    ar: {
      title: 'الذكاء الاصطناعي وإعادة تخصيص ميزانية تكنولوجيا المعلومات للشركات',
      description: 'يفحص كيفية إعادة تخصيص المؤسسات لميزانيات تكنولوجيا المعلومات نحو بنية الذكاء الاصطناعي والحوسبة السحابية والقدرات البيانية. يغطي أولويات إنفاق مسؤول تكنولوجيا المعلومات والقرارات الداخلية مقابل الشراء والآثار التنظيمية لاستراتيجيات تكنولوجيا المعلومات ذات الأولوية الأول للذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'مؤسسة | 2025–2030',
      tags: ['مؤسسة', 'استراتيجية تكنولوجيا المعلومات', 'اعتماد الذكاء الاصطناعي'],
    },
    es: {
      title: 'IA y Reasignación de Presupuesto de TI Corporativo',
      description: 'Examina cómo las empresas están reasignando presupuestos de TI hacia infraestructura de IA, computación en la nube y capacidades de datos. Cubre prioridades de gasto de CIO, decisiones de construir versus comprar e implicaciones organizacionales de estrategias de TI con prioridad de IA.',
      format: 'Marco Estratégico',
      coverage: 'Empresa | 2025–2030',
      tags: ['Empresa', 'Estrategia de TI', 'Adopción de IA'],
    },
    pt: {
      title: 'IA e Realocação de Orçamento de TI Corporativo',
      description: 'Examina como as empresas estão realocando orçamentos de TI para infraestrutura de IA, computação na nuvem e capacidades de dados. Cobre prioridades de gastos de CIO, decisões de construção versus compra e implicações organizacionais de estratégias de TI com prioridade em IA.',
      format: 'Estrutura Estratégica',
      coverage: 'Empresa | 2025–2030',
      tags: ['Empresa', 'Estratégia de TI', 'Adoção de IA'],
    },
    ru: {
      title: 'ИИ и перераспределение корпоративного бюджета IT',
      description: 'Изучает, как корпорации переераспределяют бюджеты IT на инфраструктуру ИИ, облачные вычисления и возможности данных. Охватывает приоритеты расходов CIO, решения о разработке или закупке и организационные последствия стратегий IT с приоритетом ИИ.',
      format: 'Стратегическая база',
      coverage: 'Предприятие | 2025–2030',
      tags: ['Предприятие', 'Стратегия IT', 'Внедрение ИИ'],
    },
    de: {
      title: 'KI und Umverteilung des Unternehmens-IT-Budgets',
      description: 'Untersucht, wie Unternehmen IT-Budgets zu KI-Infrastruktur, Cloud-Computing und Datenfähigkeiten verschieben. Umfasst CIO-Ausgabenpriorit, Entscheidungen zum Selbstbau oder Zukauf und Organisationsauswirkungen von KI-First-IT-Strategien.',
      format: 'Strategischer Rahmen',
      coverage: 'Unternehmen | 2025–2030',
      tags: ['Unternehmen', 'IT-Strategie', 'KI-Einführung'],
    },
    fr: {
      title: 'IA et Réallocation du Budget Informatique Corporatif',
      description: 'Examine comment les entreprises réallouent les budgets informatiques vers l\'infrastructure d\'IA, le cloud computing et les capacités de données. Couvre les priorités de dépenses des CIO, les décisions construire-vs-acheter et les implications organisationnelles des stratégies informatiques axées sur l\'IA.',
      format: 'Cadre Stratégique',
      coverage: 'Entreprise | 2025–2030',
      tags: ['Entreprise', 'Stratégie IT', 'Adoption de l\'IA'],
    },
  },

  'ai-defense-modernization-strategy-framework': {
    tr: {
      title: 'AI ve Savunma Modernizasyonu',
      description: 'AI\'nin savunma ve ulusal güvenlik altyapısına entegrasyonunu analiz eder. Özerk sistemleri, istihbarat işlemesini, siber savunmayı ve AI bilişim gereksinimlerinin savunma endüstriyel çıkarımlarını kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Çok Ülkeli | 2025–2030',
      tags: ['Savunma', 'Jeopolitika', 'AI Stratejisi'],
    },
    ar: {
      title: 'الذكاء الاصطناعي وتحديث الدفاع',
      description: 'يحلل تكامل الذكاء الاصطناعي في البنية التحتية للدفاع والأمن الوطني. يغطي الأنظمة المستقلة ومعالجة الذكاءات والدفاع السيبراني والآثار الصناعية الدفاعية لمتطلبات الحوسبة بالذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'متعدد الدول | 2025–2030',
      tags: ['الدفاع', 'جيوسياسة', 'استراتيجية الذكاء الاصطناعي'],
    },
    es: {
      title: 'IA y Modernización de Defensa',
      description: 'Analiza la integración de IA en infraestructura de defensa y seguridad nacional. Cubre sistemas autónomos, procesamiento de inteligencia, defensa cibernética e implicaciones de defensa industrial de los requisitos de computación de IA.',
      format: 'Marco Estratégico',
      coverage: 'Multipaís | 2025–2030',
      tags: ['Defensa', 'Geopolítica', 'Estrategia de IA'],
    },
    pt: {
      title: 'IA e Modernização da Defesa',
      description: 'Analisa a integração da IA na infraestrutura de defesa e segurança nacional. Cobre sistemas autônomos, processamento de inteligência, defesa cibernética e implicações de defesa industrial dos requisitos de computação de IA.',
      format: 'Estrutura Estratégica',
      coverage: 'Múltiplos Países | 2025–2030',
      tags: ['Defesa', 'Geopolítica', 'Estratégia de IA'],
    },
    ru: {
      title: 'ИИ и модернизация обороны',
      description: 'Анализирует интеграцию ИИ в инфраструктуру обороны и национальной безопасности. Охватывает автономные системы, обработку разведданных, кибероборону и последствия оборонно-промышленного комплекса для вычислительных требований ИИ.',
      format: 'Стратегическая база',
      coverage: 'Многостраны | 2025–2030',
      tags: ['Оборона', 'Геополитика', 'Стратегия ИИ'],
    },
    de: {
      title: 'KI und Verteidigungsmodernisierung',
      description: 'Analysiert die Integration von KI in Verteidigungs- und nationale Sicherheitsinfrastruktur. Umfasst autonome Systeme, Nachrichtenverarbeitung, Cyberabwehr und Verteidigungsindustrieauswirkungen von KI-Rechenanforderungen.',
      format: 'Strategischer Rahmen',
      coverage: 'Mehrländer | 2025–2030',
      tags: ['Verteidigung', 'Geopolitik', 'KI-Strategie'],
    },
    fr: {
      title: 'IA et Modernisation de la Défense',
      description: 'Analyse l\'intégration de l\'IA dans l\'infrastructure de défense et de sécurité nationale. Couvre les systèmes autonomes, le traitement des renseignements, la défense cybernétique et les implications de défense industrielle des exigences informatiques d\'IA.',
      format: 'Cadre Stratégique',
      coverage: 'Plusieurs Pays | 2025–2030',
      tags: ['Défense', 'Géopolitique', 'Stratégie IA'],
    },
  },

  'ai-emerging-market-labor-disruption-strategy-framework': {
    tr: {
      title: 'AI ve Gelişen Pazar İşgücü Bozulması',
      description: 'AI otomasyonunun gelişen ekonomilerdeki işgücü piyasalarını nasıl yeniden şekillendirdiğini inceler. BPO bozulmasını, üretim otomasyonunu, hizmet sektörü dönüşümünü ve AI geçişinde gelişmekte olan uluslar için politika çıkarımlarını kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Gelişen Pazarlar | 2025–2030',
      tags: ['Gelişen Pazarlar', 'İşgücü', 'Politika'],
    },
    ar: {
      title: 'الذكاء الاصطناعي واضطراب العمالة في الأسواق الناشئة',
      description: 'يفحص كيفية إعادة تشكيل أتمتة الذكاء الاصطناعي أسواق العمل عبر الاقتصادات الناشئة. يغطي تعطل BPO وأتمتة التصنيع وتحول القطاع الخدمي والآثار السياسية للدول النامية التي تتنقل في الانتقال بالذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'الأسواق الناشئة | 2025–2030',
      tags: ['الأسواق الناشئة', 'العمالة', 'السياسة'],
    },
    es: {
      title: 'IA y Disrupción de Mano de Obra de Mercados Emergentes',
      description: 'Examina cómo la automatización de IA está reformulando mercados laborales en economías emergentes. Cubre la disrupción de BPO, la automatización manufacturera, la transformación del sector de servicios y las implicaciones políticas para naciones en desarrollo navegando la transición de IA.',
      format: 'Marco Estratégico',
      coverage: 'Mercados Emergentes | 2025–2030',
      tags: ['Mercados Emergentes', 'Mano de Obra', 'Política'],
    },
    pt: {
      title: 'IA e Disrupção de Mão de Obra em Mercados Emergentes',
      description: 'Examina como a automação de IA está reformulando mercados de trabalho em economias emergentes. Cobre disrupção de BPO, automação de manufatura, transformação do setor de serviços e implicações políticas para nações em desenvolvimento navegando a transição de IA.',
      format: 'Estrutura Estratégica',
      coverage: 'Mercados Emergentes | 2025–2030',
      tags: ['Mercados Emergentes', 'Mão de Obra', 'Política'],
    },
    ru: {
      title: 'ИИ и нарушение труда на развивающихся рынках',
      description: 'Изучает, как автоматизация ИИ переформирует рынки труда в развивающихся экономиках. Охватывает нарушения BPO, автоматизацию производства, трансформацию сектора услуг и политические последствия для развивающихся стран, ориентирующихся в переходе ИИ.',
      format: 'Стратегическая база',
      coverage: 'Развивающиеся Рынки | 2025–2030',
      tags: ['Развивающиеся Рынки', 'Труд', 'Политика'],
    },
    de: {
      title: 'KI und Arbeitskraftstörung auf Schwellenländern',
      description: 'Untersucht, wie KI-Automation Arbeitsmärkte in Schwellenländern umgestaltet. Umfasst BPO-Störung, Fertigungsautomation, Servicesektor-Transformation und politische Auswirkungen für Entwicklungsländer, die den KI-Übergang navigieren.',
      format: 'Strategischer Rahmen',
      coverage: 'Schwellenmärkte | 2025–2030',
      tags: ['Schwellenmärkte', 'Arbeitskraft', 'Politik'],
    },
    fr: {
      title: 'IA et Perturbation de Main-d\'œuvre des Marchés Émergents',
      description: 'Examine comment l\'automatisation par IA redéfinit les marchés du travail dans les économies émergentes. Couvre la perturbation des BPO, l\'automatisation manufacturière, la transformation du secteur des services et les implications politiques pour les pays en développement naviguant la transition de l\'IA.',
      format: 'Cadre Stratégique',
      coverage: 'Marchés Émergents | 2025–2030',
      tags: ['Marchés Émergents', 'Main-d\'œuvre', 'Politique'],
    },
  },

  'ai-financial-market-structure-strategy-framework': {
    tr: {
      title: 'AI ve Finansal Pazar Yapısı',
      description: 'AI\'nin algoritma ticareti, kredi değerlendirmesi, risk yönetimi ve düzenleyici uyum da dahil olmak üzere finansal pazar altyapısını nasıl dönüştürdüğünü analiz eder. Bankalar, varlık yöneticileri ve fintech platformları için yapısal çıkarımları kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Finansal Hizmetler', 'AI Stratejisi', 'Yatırım'],
    },
    ar: {
      title: 'الذكاء الاصطناعي وهيكل سوق مالي',
      description: 'يحلل كيف يحول الذكاء الاصطناعي البنية التحتية لسوق مالي، من التداول الخوارزمي إلى تقييم الائتمان وإدارة المخاطر والامتثال التنظيمي. يغطي الآثار الهيكلية للبنوك ومديري الأصول ومنصات fintech.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['الخدمات المالية', 'استراتيجية الذكاء الاصطناعي', 'الاستثمار'],
    },
    es: {
      title: 'IA y Estructura del Mercado Financiero',
      description: 'Analiza cómo la IA está transformando la infraestructura del mercado financiero, desde el comercio algorítmico hasta la evaluación del crédito, la gestión del riesgo y el cumplimiento normativo. Cubre las implicaciones estructurales para bancos, gestores de activos y plataformas fintech.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Servicios Financieros', 'Estrategia de IA', 'Inversión'],
    },
    pt: {
      title: 'IA e Estrutura do Mercado Financeiro',
      description: 'Analisa como a IA está transformando a infraestrutura do mercado financeiro, desde negociação algorítmica até avaliação de crédito, gestão de risco e conformidade regulatória. Cobre implicações estruturais para bancos, gestores de ativos e plataformas fintech.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Serviços Financeiros', 'Estratégia de IA', 'Investimento'],
    },
    ru: {
      title: 'ИИ и структура финансового рынка',
      description: 'Анализирует, как ИИ преобразует инфраструктуру финансового рынка, от алгоритмической торговли до оценки кредита, управления рисками и нормативного соответствия. Охватывает структурные последствия для банков, управляющих активами и платформ финтеха.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Финансовые услуги', 'Стратегия ИИ', 'Инвестиции'],
    },
    de: {
      title: 'KI und Finanzmarktstruktur',
      description: 'Analysiert, wie KI die Finanzmarktinfrastruktur transformiert, vom algorithmischen Handel bis zur Kreditbewertung, Risikomanagement und Regulierungseinhaltung. Umfasst Strukturelle Implikationen für Banken, Vermögensverwalter und Fintech-Plattformen.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Finanzdienstleistungen', 'KI-Strategie', 'Anlage'],
    },
    fr: {
      title: 'IA et Structure du Marché Financier',
      description: 'Analyse comment l\'IA transforme l\'infrastructure des marchés financiers, du trading algorithmique à l\'évaluation du crédit, la gestion des risques et la conformité réglementaire. Couvre les implications structurelles pour les banques, les gestionnaires d\'actifs et les plateformes fintech.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Services Financiers', 'Stratégie IA', 'Investissement'],
    },
  },

  'ai-healthcare-cost-compression-strategy-framework': {
    tr: {
      title: 'AI ve Sağlık Hizmetleri Maliyet Sıkıştırması',
      description: 'AI\'nin sağlık hizmetleri değer zinciri genelinde maliyet sıkıştırmasını nasıl yönlendirdiğini inceler. İlaç keşfini hızlandırmayı, tanı otomasyonunu, klinik iş akışı optimizasyonunu ve sağlık hizmetleri altyapısı için yatırım çıkarımlarını kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Sağlık', 'AI Stratejisi', 'Maliyet Optimizasyonu'],
    },
    ar: {
      title: 'الذكاء الاصطناعي وضغط تكاليف الرعاية الصحية',
      description: 'يفحص كيفية قيادة الذكاء الاصطناعي لضغط التكاليف عبر سلسلة قيمة الرعاية الصحية. يغطي تسريع اكتشاف الأدوية والأتمتة التشخيصية وتحسين سير العمل السريري والآثار الاستثمارية لبنية الرعاية الصحية.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['الرعاية الصحية', 'استراتيجية الذكاء الاصطناعي', 'تحسين التكاليف'],
    },
    es: {
      title: 'IA y Compresión de Costos de Atención Médica',
      description: 'Examina cómo la IA está impulsando la compresión de costos en toda la cadena de valor de la atención médica. Cubre la aceleración del descubrimiento de fármacos, la automatización de diagnósticos, la optimización de flujos de trabajo clínicos e implicaciones de inversión para la infraestructura de atención médica.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Sanidad', 'Estrategia de IA', 'Optimización de Costos'],
    },
    pt: {
      title: 'IA e Compressão de Custos de Saúde',
      description: 'Examina como a IA está impulsionando a compressão de custos em toda a cadeia de valor da saúde. Cobre aceleração da descoberta de medicamentos, automação de diagnósticos, otimização de fluxos de trabalho clínicos e implicações de investimento para infraestrutura de saúde.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Saúde', 'Estratégia de IA', 'Otimização de Custos'],
    },
    ru: {
      title: 'ИИ и сжатие затрат на здравоохранение',
      description: 'Изучает, как ИИ ведет к сжатию затрат во всей цепочке создания стоимости здравоохранения. Охватывает ускорение открытия лекарств, автоматизацию диагностики, оптимизацию клинических рабочих процессов и инвестиционные последствия для инфраструктуры здравоохранения.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Здравоохранение', 'Стратегия ИИ', 'Оптимизация затрат'],
    },
    de: {
      title: 'KI und Gesundheitskostenkompression',
      description: 'Untersucht, wie KI Kostenkompression über die Gesundheitswertschöpfungskette antreibt. Umfasst Arzneimittelentdeckungsbeschleunigung, Diagnoseautomation, klinische Workflow-Optimierung und Investitionsauswirkungen für Gesundheitsinfrastruktur.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Gesundheitswesen', 'KI-Strategie', 'Kostenoptimierung'],
    },
    fr: {
      title: 'IA et Compression des Coûts de Santé',
      description: 'Examine comment l\'IA conduit la compression des coûts à travers la chaîne de valeur des soins de santé. Couvre l\'accélération de la découverte de médicaments, l\'automatisation des diagnostics, l\'optimisation des flux de travail cliniques et les implications d\'investissement pour l\'infrastructure de santé.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Santé', 'Stratégie IA', 'Optimisation des Coûts'],
    },
  },

  'ai-insurance-industry-transformation-strategy-framework': {
    tr: {
      title: 'AI ve Sigorta Endüstrisi Dönüşümü',
      description: 'AI tarafından yönlendirilen sigorta endüstrisi dönüşümünü analiz eder. Sigorta sözleşmesi otomasyonu, hasar işlemesi, risk modellemesi ve AI benimseme hızlanırken sigorta piyasalarını yeniden şekillendiren rekabetçi dinamikleri kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Sigorta', 'Finansal Hizmetler', 'AI Stratejisi'],
    },
    ar: {
      title: 'الذكاء الاصطناعي وتحويل صناعة التأمين',
      description: 'يحلل تحول صناعة التأمين الذي يدفعه الذكاء الاصطناعي. يغطي أتمتة الاكتتاب وتجهيز المطالبات ونمذجة المخاطر والديناميات التنافسية إعادة تشكيل أسواق التأمين مع تسارع اعتماد الذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['التأمين', 'الخدمات المالية', 'استراتيجية الذكاء الاصطناعي'],
    },
    es: {
      title: 'IA y Transformación de la Industria de Seguros',
      description: 'Analiza la transformación de la industria de seguros impulsada por la IA. Cubre la automatización de seguros, el procesamiento de reclamaciones, el modelado de riesgos y la dinámica competitiva que reformula los mercados de seguros a medida que se acelera la adopción de IA.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Seguros', 'Servicios Financieros', 'Estrategia de IA'],
    },
    pt: {
      title: 'IA e Transformação da Indústria de Seguros',
      description: 'Analisa a transformação da indústria de seguros impulsionada por IA. Cobre automação de subscrição, processamento de sinistros, modelagem de risco e dinâmica competitiva reformulando mercados de seguros conforme a adoção de IA se acelera.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Seguros', 'Serviços Financeiros', 'Estratégia de IA'],
    },
    ru: {
      title: 'ИИ и трансформация страховой промышленности',
      description: 'Анализирует трансформацию страховой промышленности, управляемую ИИ. Охватывает автоматизацию подписки, обработку претензий, моделирование рисков и конкурентную динамику, переформирующую страховые рынки по мере ускорения внедрения ИИ.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Страховка', 'Финансовые услуги', 'Стратегия ИИ'],
    },
    de: {
      title: 'KI und Transformation der Versicherungsindustrie',
      description: 'Analysiert die KI-getriebene Transformation der Versicherungsindustrie. Umfasst Underwriting-Automation, Schadensbearbeitung, Risikomodellierung und Wettbewerbsdynamiken, die Versicherungsmärkte umgestalten, während die KI-Adoption beschleunigt.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Versicherung', 'Finanzdienstleistungen', 'KI-Strategie'],
    },
    fr: {
      title: 'IA et Transformation de l\'Industrie de l\'Assurance',
      description: 'Analyse la transformation de l\'industrie de l\'assurance pilotée par l\'IA. Couvre l\'automatisation de la souscription, le traitement des sinistres, la modélisation des risques et la dynamique concurrentielle reformulant les marchés d\'assurance à mesure que l\'adoption de l\'IA s\'accélère.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Assurance', 'Services Financiers', 'Stratégie IA'],
    },
  },

  'ai-water-infrastructure-stress-strategy-framework': {
    tr: {
      title: 'AI ve Su Altyapısı Stresi',
      description: 'AI veri merkezlerinin su altyapısı taleplerini ve ortaya çıkan su sistemleri stresini inceler. Soğutma teknolojisi gereksinimlerini, su kıt bölge kısıtlamalarını ve AI ölçek bilişim genişlemesinin çevre politikası çıkarımlarını kapsar.',
      format: 'Strateji Çerçevesi',
      coverage: 'Global | 2025–2030',
      tags: ['Su Altyapısı', 'Sürdürülebilirlik', 'Veri Merkezleri'],
    },
    ar: {
      title: 'الذكاء الاصطناعي والضغط على البنية التحتية للمياه',
      description: 'يفحص مطالب البنية التحتية للمياه بسبب مراكز بيانات الذكاء الاصطناعي والضغط الناتج على أنظمة المياه. يغطي متطلبات تكنولوجيا التبريد وقيود منطقة نقص المياه والآثار السياسية البيئية لتوسع الحوسبة على نطاق الذكاء الاصطناعي.',
      format: 'إطار الاستراتيجية',
      coverage: 'عالمي | 2025–2030',
      tags: ['البنية التحتية للمياه', 'الاستدامة', 'مراكز البيانات'],
    },
    es: {
      title: 'IA y Estrés de Infraestructura de Agua',
      description: 'Examina las demandas de infraestructura de agua de los centros de datos de IA y el estrés resultante en los sistemas de agua. Cubre requisitos de tecnología de enfriamiento, restricciones de región escasa de agua e implicaciones de política ambiental de la expansión de computación a escala de IA.',
      format: 'Marco Estratégico',
      coverage: 'Global | 2025–2030',
      tags: ['Infraestructura de Agua', 'Sostenibilidad', 'Centros de Datos'],
    },
    pt: {
      title: 'IA e Estresse de Infraestrutura de Água',
      description: 'Examina as demandas de infraestrutura de água dos centros de dados de IA e o estresse resultante nos sistemas de água. Cobre requisitos de tecnologia de resfriamento, restrições de região escassa de água e implicações de política ambiental da expansão de computação em escala de IA.',
      format: 'Estrutura Estratégica',
      coverage: 'Global | 2025–2030',
      tags: ['Infraestrutura de Água', 'Sustentabilidade', 'Centros de Dados'],
    },
    ru: {
      title: 'ИИ и стресс водной инфраструктуры',
      description: 'Изучает требования водной инфраструктуры центров обработки данных ИИ и возникающий стресс на водные системы. Охватывает требования технологии охлаждения, ограничения регионов с дефицитом воды и последствия политики окружающей среды для расширения вычислений в масштабе ИИ.',
      format: 'Стратегическая база',
      coverage: 'Глобальный | 2025–2030',
      tags: ['Водная инфраструктура', 'Устойчивость', 'Центры Обработки Данных'],
    },
    de: {
      title: 'KI und Wasserinfrastruktur-Stress',
      description: 'Untersucht die Wasserinfrastrukturanforderungen von KI-Rechenzentren und die daraus resultierende Belastung von Wassersystemen. Umfasst Kühlungstechnologieanforderungen, Wasserarmutsbeschränkungen und Umweltpolitikauswirkungen der KI-Rechnenexpansion im Maßstab.',
      format: 'Strategischer Rahmen',
      coverage: 'Global | 2025–2030',
      tags: ['Wasserinfrastruktur', 'Nachhaltigkeit', 'Rechenzentren'],
    },
    fr: {
      title: 'IA et Stress d\'Infrastructure Hydrique',
      description: 'Examine les demandes d\'infrastructure hydrique des centres de données d\'IA et le stress résultant sur les systèmes d\'eau. Couvre les exigences de technologie de refroidissement, les contraintes de région pauvre en eau et les implications de politique environnementale de l\'expansion informatique à l\'échelle d\'IA.',
      format: 'Cadre Stratégique',
      coverage: 'Mondial | 2025–2030',
      tags: ['Infrastructure Hydrique', 'Durabilité', 'Centres de Données'],
    },
  },
}

export function getLocalizedPublications(
  publications: Array<any>,
  lang: string
): Array<any> {
  // If English, return as-is
  if (lang === 'en') {
    return publications
  }

  // For other languages, merge translations
  return publications.map((pub) => {
    const translations = publicationTranslations[pub.slug]?.[lang as LanguageCode]
    if (!translations) {
      return pub // Fallback to English if no translation
    }

    return {
      ...pub,
      title: translations.title,
      description: translations.description,
      format: translations.format,
      coverage: translations.coverage,
      tags: translations.tags,
    }
  })
}
