'use client'

import Link from '@/components/Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

interface IndustriesLocalizedProps {
  lang: Lang
}

interface IndustryItem {
  id: string
  title: string
  description: string
  challenges: string[]
  stats: { clients: string; label: string }
}

export default function IndustriesLocalized({ lang }: IndustriesLocalizedProps) {
  const t = translations[lang]

  const getChallenge = (enText: string, trText: string, arText: string, esText: string, ptText: string, ruText: string, deText: string, frText: string): string => {
    const challengeMap: Record<Lang, string> = {
      en: enText,
      tr: trText,
      ar: arText,
      es: esText,
      pt: ptText,
      ru: ruText,
      de: deText,
      fr: frText,
    }
    return challengeMap[lang] || enText
  }

  // Industry data with translations
  const industries: IndustryItem[] = [
    {
      id: 'telecommunications',
      title: t.industriesSection.telecommunications,
      description: t.industriesSection.telecomDescription,
      challenges: [
        getChallenge(
          'Declining traditional revenue streams',
          'Geleneksel gelir akışlarında düşüş',
          'تراجع تدفقات الإيرادات التقليدية',
          'Flujos de ingresos tradicionales en declive',
          'Declínio dos fluxos de receita tradicionais',
          'Снижение традиционных потоков доходов',
          'Rückgang traditioneller Einnahmequellen',
          'Déclin des flux de revenus traditionnels'
        ),
        getChallenge(
          'Digital transformation at enterprise scale',
          'Kurumsal ölçekte dijital dönüşüm',
          'التحول الرقمي على نطاق المؤسسة',
          'Transformación digital a escala empresarial',
          'Transformação digital em escala empresarial',
          'Цифровая трансформация в масштабе предприятия',
          'Digitale Transformation im Unternehmensmaßstab',
          'Transformation numérique à l\'échelle de l\'entreprise'
        ),
        getChallenge(
          'Network modernization and 5G monetization',
          'Ağ modernizasyonu ve 5G para kazanma',
          'تحديث الشبكات وتحقيق الإيرادات من 5G',
          'Modernización de redes y monetización de 5G',
          'Modernização de redes e monetização 5G',
          'Модернизация сетей и монетизация 5G',
          'Netzmodernisierung und 5G-Monetarisierung',
          'Modernisation du réseau et monétisation 5G'
        ),
        getChallenge(
          'Customer experience and retention',
          'Müşteri deneyimi ve elde tutma',
          'تجربة العملاء والاحتفاظ بهم',
          'Experiencia del cliente y retención',
          'Experiência do cliente e retenção',
          'Опыт клиента и удержание',
          'Kundenerlebnis und Kundenbindung',
          'Expérience client et rétention'
        ),
        getChallenge(
          'New business model development',
          'Yeni iş modeli geliştirme',
          'تطوير نماذج أعمال جديدة',
          'Desarrollo de nuevos modelos de negocio',
          'Desenvolvimento de novos modelos de negócio',
          'Разработка новых бизнес-моделей',
          'Entwicklung neuer Geschäftsmodelle',
          'Développement de nouveaux modèles commerciaux'
        ),
      ],
      stats: { clients: '21', label: t.industriesSection.telecommunications },
    },
    {
      id: 'financial-services',
      title: t.industriesSection.financialServices,
      description: t.industriesSection.financialServicesDescription,
      challenges: [
        getChallenge(
          'Digital banking transformation',
          'Dijital bankacılık dönüşümü',
          'التحول الرقمي للبنوك',
          'Transformación de la banca digital',
          'Transformação bancária digital',
          'Трансформация цифрового банкинга',
          'Digitale Bankentransformation',
          'Transformation bancaire numérique'
        ),
        getChallenge(
          'Fintech competition and collaboration',
          'Fintech rekabeti ve işbirliği',
          'المنافسة والتعاون في التكنولوجيا المالية',
          'Competencia y colaboración de Fintech',
          'Competição e colaboração de Fintech',
          'Конкуренция и сотрудничество Fintech',
          'Fintech-Wettbewerb und Zusammenarbeit',
          'Concurrence et collaboration Fintech'
        ),
        getChallenge(
          'Regulatory technology compliance',
          'Düzenleyici teknoloji uyumluluğu',
          'الامتثال التكنولوجي التنظيمي',
          'Cumplimiento tecnológico regulatorio',
          'Conformidade com tecnologia regulatória',
          'Соответствие нормативным требованиям технологии',
          'Einhaltung der regulatorischen Technologie',
          'Conformité technologique réglementaire'
        ),
        getChallenge(
          'Customer acquisition cost optimization',
          'Müşteri kazanım maliyeti optimizasyonu',
          'تحسين تكلفة اكتساب العملاء',
          'Optimización del costo de adquisición de clientes',
          'Otimização de custo de aquisição de clientes',
          'Оптимизация стоимости привлечения клиентов',
          'Optimierung der Kundenakquisitionskosten',
          'Optimisation du coût d\'acquisition des clients'
        ),
        getChallenge(
          'Data and AI-driven decision making',
          'Veri ve AI destekli karar alma',
          'اتخاذ القرارات المدفوعة بالبيانات والذكاء الاصطناعي',
          'Toma de decisiones impulsada por datos e IA',
          'Tomada de decisão impulsionada por dados e IA',
          'Принятие решений на основе данных и ИИ',
          'Daten- und KI-gestützte Entscheidungsfindung',
          'Prise de décision pilotée par les données et l\'IA'
        ),
      ],
      stats: { clients: 'Major Banks', label: t.industriesSection.financialServices },
    },
    {
      id: 'technology-ai',
      title: t.industriesSection.technologyAI,
      description: t.industriesSection.technologyDescription,
      challenges: [
        getChallenge(
          'Enterprise go-to-market strategy',
          'Kurumsal pazar sunumu stratejisi',
          'استراتيجية الدخول إلى السوق للمؤسسات',
          'Estrategia de entrada al mercado empresarial',
          'Estratégia de entrada no mercado corporativo',
          'Корпоративная стратегия выхода на рынок',
          'Enterprise-Go-to-Market-Strategie',
          'Stratégie d\'entrée sur le marché entreprise'
        ),
        getChallenge(
          'Product-market fit optimization',
          'Ürün pazar uyumu optimizasyonu',
          'تحسين توافق المنتج والسوق',
          'Optimización del ajuste producto-mercado',
          'Otimização de ajuste produto-mercado',
          'Оптимизация соответствия продукта рынку',
          'Optimierung der Produkt-Markt-Passung',
          'Optimisation de l\'adéquation produit-marché'
        ),
        getChallenge(
          'AI integration and monetization',
          'AI entegrasyonu ve para kazanma',
          'تكامل الذكاء الاصطناعي والتحقيق من الإيرادات',
          'Integración y monetización de IA',
          'Integração e monetização de IA',
          'Интеграция ИИ и получение прибыли',
          'KI-Integration und Monetarisierung',
          'Intégration et monétisation de l\'IA'
        ),
        getChallenge(
          'International market expansion',
          'Uluslararası pazar genişlemesi',
          'توسع السوق الدولية',
          'Expansión del mercado internacional',
          'Expansão do mercado internacional',
          'Расширение на международные рынки',
          'Internationale Marktexpansion',
          'Expansion du marché international'
        ),
        getChallenge(
          'Strategic partnerships and ecosystems',
          'Stratejik ortaklıklar ve ekosistemler',
          'الشراكات الإستراتيجية والنظم البيئية',
          'Asociaciones estratégicas y ecosistemas',
          'Parcerias estratégicas e ecossistemas',
          'Стратегические партнерства и экосистемы',
          'Strategische Partnerschaften und Ökosysteme',
          'Partenariats stratégiques et écosystèmes'
        ),
      ],
      stats: { clients: 'Global', label: t.industriesSection.technologyAI },
    },
    {
      id: 'digital-infrastructure',
      title: t.industriesSection.digitalInfrastructure,
      description: t.industriesSection.infrastructureDescription,
      challenges: [
        getChallenge(
          'Infrastructure investment strategy',
          'Altyapı yatırım stratejisi',
          'استراتيجية الاستثمار في البنية التحتية',
          'Estrategia de inversión en infraestructura',
          'Estratégia de investimento em infraestrutura',
          'Стратегия инвестирования в инфраструктуру',
          'Infrastruktur-Investitionsstrategie',
          'Stratégie d\'investissement en infrastructures'
        ),
        getChallenge(
          'Market entry and expansion planning',
          'Pazar girişi ve genişleme planlaması',
          'تخطيط الدخول والتوسع في السوق',
          'Planificación de entrada y expansión del mercado',
          'Planejamento de entrada e expansão do mercado',
          'Планирование входа на рынок и расширения',
          'Markteintritts- und Expansionsplanung',
          'Planification d\'entrée et d\'expansion du marché'
        ),
        getChallenge(
          'Competitive landscape analysis',
          'Rekabet ortamı analizi',
          'تحليل المشهد التنافسي',
          'Análisis del panorama competitivo',
          'Análise da paisagem competitiva',
          'Анализ конкурентной среды',
          'Wettbewerbslandschaftsanalyse',
          'Analyse du paysage concurrentiel'
        ),
        getChallenge(
          'Regulatory and licensing framework navigation',
          'Düzenleyici ve lisanslama çerçevesi navigasyonu',
          'الملاحة في إطار العمل التنظيمي والترخيص',
          'Navegación de marco normativo y de licencias',
          'Navegação de estrutura regulatória e de licenças',
          'Навигация по нормативно-правовой базе и лицензированию',
          'Navigation im Regulierungs- und Lizenzierungsrahmen',
          'Navigation du cadre réglementaire et de licences'
        ),
        getChallenge(
          'Value creation for investors',
          'Yatırımcılar için değer yaratma',
          'خلق القيمة للمستثمرين',
          'Creación de valor para los inversores',
          'Criação de valor para investidores',
          'Создание стоимости для инвесторов',
          'Wertschaffung für Investoren',
          'Création de valeur pour les investisseurs'
        ),
      ],
      stats: { clients: '40', label: t.industriesSection.digitalInfrastructure },
    },
    {
      id: 'startups-scaleups',
      title: t.industriesSection.startupsScaleups,
      description: t.industriesSection.startupsDescription,
      challenges: [
        getChallenge(
          'Market expansion strategy',
          'Pazar genişleme stratejisi',
          'استراتيجية توسع السوق',
          'Estrategia de expansión de mercado',
          'Estratégia de expansão de mercado',
          'Стратегия расширения рынка',
          'Marktexpansionsstrategie',
          'Stratégie d\'expansion du marché'
        ),
        getChallenge(
          'Enterprise sales readiness',
          'Kurumsal satış hazırlığı',
          'جاهزية المبيعات على مستوى المؤسسة',
          'Preparación para ventas empresariales',
          'Preparação de vendas corporativas',
          'Готовность корпоративных продаж',
          'Enterprise-Sales-Bereitschaft',
          'Préparation des ventes d\'entreprise'
        ),
        getChallenge(
          'Fundraising and investor positioning',
          'Bütçe toplama ve yatırımcı konumlandırması',
          'جمع التبرعات وموضع المستثمرين',
          'Recaudación de fondos y posicionamiento de inversores',
          'Captação de recursos e posicionamento de investidores',
          'Привлечение капитала и позиционирование инвесторов',
          'Fundraising und Investor-Positioning',
          'Levée de fonds et positionnement des investisseurs'
        ),
        getChallenge(
          'Go-to-market optimization',
          'Pazar sunumu optimizasyonu',
          'تحسين الدخول إلى السوق',
          'Optimización de entrada al mercado',
          'Otimização de entrada no mercado',
          'Оптимизация выхода на рынок',
          'Go-to-Market-Optimierung',
          'Optimisation de la mise en marché'
        ),
        getChallenge(
          'Strategic partnership development',
          'Stratejik ortaklık geliştirme',
          'تطوير الشراكات الإستراتيجية',
          'Desarrollo de asociaciones estratégicas',
          'Desenvolvimento de parcerias estratégicas',
          'Развитие стратегических партнерств',
          'Entwicklung strategischer Partnerschaften',
          'Développement de partenariats stratégiques'
        ),
      ],
      stats: { clients: 'Multiple', label: t.industriesSection.startupsScaleups },
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
              {t.industriesSection.sectorExpertise}
            </p>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              {t.industriesPage.industriesTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              {t.industriesPage.industriesSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image — white background, not cropped */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/industries-hero-global-reach${langSuffix}_small.png`} />
              <img
                src={`${V}/industries-hero-global-reach${langSuffix}.png`}
                alt="Telcotank global industry reach across telecom, financial services, and technology sectors"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {industries.map((industry, idx) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-20 md:py-24 ${idx % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                  {industry.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">{industry.description}</p>
                <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {t.industriesSection.keyChallengements}
                </h3>
                <ul className="space-y-3">
                  {industry.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2563EB]" />
                      <span className="text-base text-gray-700">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-lg bg-white p-8 shadow-sm lg:mt-4">
                  <div className="text-4xl font-bold text-[#0A2540]">{industry.stats.clients}</div>
                  <div className="mt-2 text-sm text-gray-600">{industry.stats.label}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#0A2540] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            {t.industriesSection.discussIndustryChallenge}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {t.industriesSection.everyIndustry}
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
