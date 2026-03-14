'use client'

import Link from '@/components/Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

interface CapabilitiesLocalizedProps {
  lang: Lang
}

interface CapabilityItem {
  id: string
  title: string
  description: string
  details: string[]
}

export default function CapabilitiesLocalized({ lang }: CapabilitiesLocalizedProps) {
  const t = translations[lang]

  const getDetail = (enText: string, trText: string, arText: string, esText: string, ptText: string, ruText: string, deText: string, frText: string): string => {
    const detailMap: Record<Lang, string> = {
      en: enText,
      tr: trText,
      ar: arText,
      es: esText,
      pt: ptText,
      ru: ruText,
      de: deText,
      fr: frText,
    }
    return detailMap[lang] || enText
  }

  const capabilities: CapabilityItem[] = [
    {
      id: 'transformation-strategy',
      title: t.capabilitiesPage.transformationStrategyTitle,
      description: t.capabilitiesPage.transformationStrategyDesc,
      details: [
        getDetail(
          'Digital transformation roadmap development',
          'Dijital dönüşüm yol haritası geliştirme',
          'تطوير خريطة الطريق للتحول الرقمي',
          'Desarrollo de hoja de ruta de transformación digital',
          'Desenvolvimento de roteiro de transformação digital',
          'Разработка дорожной карты цифровой трансформации',
          'Entwicklung einer digitalen Transformationsroadmap',
          'Développement d\'une feuille de route de transformation numérique'
        ),
        getDetail(
          'Business model innovation and design',
          'İş modeli yeniliği ve tasarımı',
          'ابتكار وتصميم نموذج الأعمال',
          'Innovación y diseño de modelo de negocio',
          'Inovação e design de modelo de negócios',
          'Инновации и проектирование бизнес-модели',
          'Geschäftsmodellinnovation und -design',
          'Innovation et conception du modèle commercial'
        ),
        getDetail(
          'Organizational transformation architecture',
          'Kuruluş dönüşümü mimarisi',
          'عمارة تحويل المنظمة',
          'Arquitectura de transformación organizacional',
          'Arquitetura de transformação organizacional',
          'Архитектура трансформации организации',
          'Architektur der Organisationstransformation',
          'Architecture de transformation organisationnelle'
        ),
        getDetail(
          'Technology strategy and vendor assessment',
          'Teknoloji stratejisi ve satıcı değerlendirmesi',
          'استراتيجية التكنولوجيا وتقييم البائع',
          'Estrategia tecnológica y evaluación de proveedores',
          'Estratégia de tecnologia e avaliação de fornecedores',
          'Технологическая стратегия и оценка поставщиков',
          'Technologiestrategie und Anbieterbeurteilung',
          'Stratégie technologique et évaluation des fournisseurs'
        ),
        getDetail(
          'Change management and governance frameworks',
          'Değişim yönetimi ve yönetişim çerçeveleri',
          'أطر إدارة التغيير والحوكمة',
          'Marcos de gestión del cambio y gobernanza',
          'Estruturas de gestão de mudanças e governança',
          'Структуры управления изменениями и управления',
          'Änderungsmanagement und Governance-Frameworks',
          'Cadres de gestion du changement et de gouvernance'
        ),
      ],
    },
    {
      id: 'growth-acceleration',
      title: t.capabilitiesPage.growthAccelerationTitle,
      description: t.capabilitiesPage.growthAccelerationDesc,
      details: [
        getDetail(
          'Sales channel transformation and optimization',
          'Satış kanalı dönüşümü ve optimizasyonu',
          'تحويل وتحسين قنوات المبيعات',
          'Transformación y optimización de canales de ventas',
          'Transformação e otimização de canais de vendas',
          'Трансформация и оптимизация каналов продаж',
          'Transformation und Optimierung von Vertriebskanälen',
          'Transformation et optimisation des canaux de vente'
        ),
        getDetail(
          'Customer acquisition and retention strategy',
          'Müşteri kazanım ve elde tutma stratejisi',
          'استراتيجية اكتساب والاحتفاظ بالعملاء',
          'Estrategia de adquisición y retención de clientes',
          'Estratégia de aquisição e retenção de clientes',
          'Стратегия привлечения и удержания клиентов',
          'Kundenakquisitions- und Bindungsstrategie',
          'Stratégie d\'acquisition et de rétention de clients'
        ),
        getDetail(
          'Pricing and commercial model redesign',
          'Fiyatlandırma ve ticari model yeniden tasarımı',
          'إعادة تصميم نموذج التسعير والتجاري',
          'Rediseño de modelo de fijación de precios y comercial',
          'Redesenho de modelo de preço e comercial',
          'Переоформление модели ценообразования и коммерческой',
          'Preisgestaltung und Neugestaltung des Geschäftsmodells',
          'Reprise de conception du modèle de tarification et commercial'
        ),
        getDetail(
          'Marketing transformation and analytics',
          'Pazarlama dönüşümü ve analitikleri',
          'تحويل التسويق والتحليلات',
          'Transformación de marketing y análisis',
          'Transformação de marketing e análise',
          'Маркетинговая трансформация и аналитика',
          'Markettransformation und Analytik',
          'Transformation du marketing et analytique'
        ),
        getDetail(
          'Partnership and ecosystem development',
          'Ortaklık ve ekosistem geliştirme',
          'تطوير الشراكة والنظم البيئية',
          'Desarrollo de asociaciones y ecosistemas',
          'Desenvolvimento de parcerias e ecossistemas',
          'Развитие партнерства и экосистемы',
          'Partnerschaften und Ökosystementwicklung',
          'Développement de partenariats et d\'écosystèmes'
        ),
      ],
    },
    {
      id: 'ai-transformation',
      title: t.capabilitiesPage.aiTransformationTitle,
      description: t.capabilitiesPage.aiTransformationDesc,
      details: [
        getDetail(
          'AI strategy and roadmap development',
          'AI stratejisi ve yol haritası geliştirme',
          'تطوير استراتيجية الذكاء الاصطناعي والخريطة الطريق',
          'Desarrollo de estrategia y hoja de ruta de IA',
          'Desenvolvimento de estratégia e roteiro de IA',
          'Разработка стратегии и дорожной карты ИИ',
          'Entwicklung von KI-Strategie und Roadmap',
          'Développement de la stratégie et de la feuille de route de l\'IA'
        ),
        getDetail(
          'AI governance and ethics frameworks',
          'AI yönetimi ve etik çerçeveleri',
          'أطر حوكمة الذكاء الاصطناعي والأخلاق',
          'Marcos de gobernanza y ética de IA',
          'Estruturas de governança e ética de IA',
          'Структуры управления ИИ и этики',
          'KI-Governance und Ethik-Frameworks',
          'Cadres de gouvernance et d\'éthique de l\'IA'
        ),
        getDetail(
          'AI operating model design',
          'AI işletim modeli tasarımı',
          'تصميم نموذج التشغيل للذكاء الاصطناعي',
          'Diseño del modelo operativo de IA',
          'Design do modelo operacional de IA',
          'Проектирование операционной модели ИИ',
          'KI-Betriebsmodelldesign',
          'Conception du modèle opérationnel de l\'IA'
        ),
        getDetail(
          'AI Control Tower implementation',
          'AI Control Tower uygulaması',
          'تطبيق برج التحكم بالذكاء الاصطناعي',
          'Implementación de la Torre de Control de IA',
          'Implementação da Torre de Controle de IA',
          'Реализация центра управления ИИ',
          'Implementierung des KI Control Tower',
          'Implémentation de la Tour de Contrôle de l\'IA'
        ),
        getDetail(
          'Enterprise AI adoption and culture programs',
          'Kurumsal AI benimseme ve kültür programları',
          'برامج الاعتماد والثقافة للذكاء الاصطناعي في المؤسسات',
          'Programas de adopción y cultura de IA empresarial',
          'Programas de adoção e cultura de IA corporativa',
          'Программы корпоративного принятия и культуры ИИ',
          'Enterprise-KI-Adoptions- und Kulturprogramme',
          'Programmes d\'adoption et de culture de l\'IA entreprise'
        ),
      ],
    },
    {
      id: 'market-entry',
      title: t.capabilitiesPage.marketEntryTitle,
      description: t.capabilitiesPage.marketEntryDesc,
      details: [
        getDetail(
          'Market opportunity assessment and sizing',
          'Pazar fırsatı değerlendirmesi ve boyutlandırması',
          'تقييم فرص السوق والحجم',
          'Evaluación del tamaño de las oportunidades de mercado',
          'Avaliação e dimensionamento de oportunidades de mercado',
          'Оценка и определение размера рыночных возможностей',
          'Bewertung und Dimensionierung von Marktchancen',
          'Évaluation et dimensionnement des opportunités de marché'
        ),
        getDetail(
          'Entry strategy and business case development',
          'Giriş stratejisi ve iş durumu geliştirme',
          'استراتيجية الدخول وتطوير حالة الأعمال',
          'Estrategia de entrada y desarrollo del caso de negocio',
          'Estratégia de entrada e desenvolvimento de caso de negócio',
          'Стратегия входа и разработка обоснования',
          'Eintrittstrategie und Geschäftsfallentwicklung',
          'Stratégie d\'entrée et développement du cas commercial'
        ),
        getDetail(
          'Regulatory and licensing analysis',
          'Düzenleyici ve lisanslama analizi',
          'تحليل التنظيم والترخيص',
          'Análisis regulatorio y de licencias',
          'Análise regulatória e de licenças',
          'Нормативный анализ и анализ лицензирования',
          'Regulatorische und Lizenzierungsanalyse',
          'Analyse réglementaire et des licences'
        ),
        getDetail(
          'Local partnership identification and structuring',
          'Yerel ortaklık tanımlama ve yapılandırma',
          'تحديد وتنظيم الشراكات المحلية',
          'Identificación y estructuración de asociaciones locales',
          'Identificação e estruturação de parcerias locais',
          'Выявление и структурирование локальных партнерств',
          'Identifizierung und Strukturierung lokaler Partnerschaften',
          'Identification et structuration des partenariats locaux'
        ),
        getDetail(
          'Operational setup and launch management',
          'Operasyonel kurulum ve başlatma yönetimi',
          'إعداد التشغيل وإدارة الإطلاق',
          'Configuración operativa y gestión del lanzamiento',
          'Configuração operacional e gerenciamento de lançamento',
          'Операционная настройка и управление запуском',
          'Operatives Setup und Startmanagement',
          'Configuration opérationnelle et gestion du lancement'
        ),
      ],
    },
    {
      id: 'investment-advisory',
      title: t.capabilitiesPage.investmentAdvisoryTitle,
      description: t.capabilitiesPage.investmentAdvisoryDesc,
      details: [
        getDetail(
          'Commercial and strategic due diligence',
          'Ticari ve stratejik durum tespiti',
          'العناية الواجبة التجارية والإستراتيجية',
          'Debida diligencia comercial y estratégica',
          'Due diligence comercial e estratégica',
          'Коммерческая и стратегическая проверка',
          'Kommerzielle und strategische Due Diligence',
          'Diligence raisonnable commerciale et stratégique'
        ),
        getDetail(
          'Market and competitive analysis',
          'Pazar ve rekabet analizi',
          'تحليل السوق والمنافسة',
          'Análisis de mercado y competencia',
          'Análise de mercado e concorrência',
          'Анализ рынка и конкуренции',
          'Markt- und Wettbewerbsanalyse',
          'Analyse du marché et de la concurrence'
        ),
        getDetail(
          'Technology and operational assessment',
          'Teknoloji ve operasyonel değerlendirme',
          'تقييم التكنولوجيا والتشغيل',
          'Evaluación tecnológica y operativa',
          'Avaliação tecnológica e operacional',
          'Оценка технологии и операций',
          'Technologie- und Betriebsbewertung',
          'Évaluation technologique et opérationnelle'
        ),
        getDetail(
          'Synergy identification and value creation planning',
          'Sinerji tanımı ve değer yaratma planlaması',
          'تحديد التآزر وتخطيط خلق القيمة',
          'Identificación de sinergias y planificación de creación de valor',
          'Identificação de sinergias e planejamento de criação de valor',
          'Выявление синергии и планирование создания стоимости',
          'Synergieidentifizierung und Wertschöpfungsplanung',
          'Identification des synergies et planification de la création de valeur'
        ),
        getDetail(
          'Post-merger integration support',
          'Birleşme sonrası entegrasyon desteği',
          'دعم التكامل بعد الاندماج',
          'Soporte de integración posterior a la fusión',
          'Suporte de integração pós-fusão',
          'Поддержка интеграции после слияния',
          'Unterstützung nach der Fusionsintegration',
          'Support d\'intégration post-fusion'
        ),
      ],
    },
  ]

  const langSuffix = lang === 'en' ? '' : lang.toUpperCase()
  const V = '/static/images/visuals'

  const contactHref = lang === 'en' ? '/contact' : `/${lang}/contact`

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1628]">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px]" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl py-24">
            <div className="mb-6 h-0.5 w-12 bg-[#60A5FA]" />
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#60A5FA]">
              {t.capabilitiesPage.whatWeDo}
            </p>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              {t.capabilitiesPage.capabilitiesTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              {t.capabilitiesPage.capabilitiesSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image — white background, not cropped */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/capabilities-services-with-people${langSuffix}_small.png`} />
              <img
                src={`${V}/capabilities-services-with-people${langSuffix}.png`}
                alt="Telcotank capabilities — consulting services and team collaboration"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Capabilities Detail */}
      {capabilities.map((cap, idx) => (
        <section
          key={cap.id}
          id={cap.id}
          className={`py-20 md:py-24 ${idx % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                  {cap.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">{cap.description}</p>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {t.capabilitiesSection.whatWeDeliver}
                </h3>
                <ul className="space-y-3">
                  {cap.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2563EB]" />
                      <span className="text-base text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#0A2540] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            {t.capabilitiesPage.readyToTransform}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {t.capabilitiesPage.readyDescription}
          </p>
          <Link
            href={contactHref}
            className="mt-8 inline-block rounded-full bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            {t.nav.requestStrategyDiscussion}
          </Link>
        </div>
      </section>
    </div>
  )
}
