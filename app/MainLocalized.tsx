'use client'

import Link from '@/components/Link'
import NewsletterSignup from '@/components/NewsletterSignup'
import { translations } from '@/data/translations'

type Language = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

const V = '/static/images/visuals'

const clientLogos = [
  { name: 'Microsoft', alt: 'Microsoft — Telcotank consulting client', src: '/static/images/logos/microsoft.png', maxW: 120 },
  { name: 'Vodafone', alt: 'Vodafone — telecom transformation client', src: '/static/images/logos/vodafone.png', maxW: 150 },
  { name: 'Turkcell', alt: 'Turkcell — telecom digital strategy client', src: '/static/images/logos/turkcell.png', maxW: 150 },
  { name: 'Türk Telekom', alt: 'Türk Telekom — telecom consulting client', src: '/static/images/logos/turktelekom.png', maxW: 120 },
  { name: 'Zain', alt: 'Zain — Middle East telecom consulting client', src: '/static/images/logos/zain.png', maxW: 120 },
  { name: 'Kcell', alt: 'Kcell — Central Asia telecom strategy client', src: '/static/images/logos/kcell.png', maxW: 90 },
  { name: 'Telia', alt: 'Telia Company — Nordic telecom consulting client', src: '/static/images/logos/telia.png', maxW: 120 },
  { name: 'Slalom', alt: 'Slalom Consulting — technology consulting partner', src: '/static/images/logos/slalom.png', maxW: 120 },
]

const countriesMap: Record<string, string[]> = {
  en: [
    'Canada', 'USA', 'Portugal', 'Spain', 'United Kingdom', 'Burkina Faso',
    'Netherlands', 'Switzerland', 'Nigeria', 'Slovenia', 'Libya', 'Slovakia',
    'Montenegro', 'Serbia', 'North Macedonia', 'Greece', 'South Africa',
    'Bulgaria', 'Romania', 'Moldova', 'Egypt', 'Ukraine', 'Northern Cyprus',
    'Turkey', 'Lebanon', 'Tanzania', 'Kenya', 'Georgia', 'Iraq',
    'Saudi Arabia', 'Kuwait', 'Azerbaijan', 'United Arab Emirates',
    'Uzbekistan', 'Kazakhstan', 'Afghanistan', 'Tajikistan', 'Kyrgyzstan',
    'India', 'Malaysia', 'Indonesia',
  ],
  tr: [
    'Kanada', 'ABD', 'Portekiz', 'İspanya', 'Birleşik Krallık', 'Burkina Faso',
    'Hollanda', 'İsviçre', 'Nijerya', 'Slovenya', 'Libya', 'Slovakya',
    'Karadağ', 'Sırbistan', 'Kuzey Makedonya', 'Yunanistan', 'Güney Afrika',
    'Bulgaristan', 'Romanya', 'Moldova', 'Mısır', 'Ukrayna', 'Kuzey Kıbrıs',
    'Türkiye', 'Lübnan', 'Tanzanya', 'Kenya', 'Gürcistan', 'Irak',
    'Suudi Arabistan', 'Kuveyt', 'Azerbaycan', 'Birleşik Arap Emirlikleri',
    'Özbekistan', 'Kazakistan', 'Afganistan', 'Tacikistan', 'Kırgızistan',
    'Hindistan', 'Malezya', 'Endonezya',
  ],
  ar: [
    'كندا', 'الولايات المتحدة', 'البرتغال', 'إسبانيا', 'المملكة المتحدة', 'بوركينا فاسو',
    'هولندا', 'سويسرا', 'نيجيريا', 'سلوفينيا', 'ليبيا', 'سلوفاكيا',
    'الجبل الأسود', 'صربيا', 'مقدونيا الشمالية', 'اليونان', 'جنوب أفريقيا',
    'بلغاريا', 'رومانيا', 'مولدوفا', 'مصر', 'أوكرانيا', 'قبرص الشمالية',
    'تركيا', 'لبنان', 'تنزانيا', 'كينيا', 'جورجيا', 'العراق',
    'المملكة العربية السعودية', 'الكويت', 'أذربيجان', 'الإمارات العربية المتحدة',
    'أوزبكستان', 'كازاخستان', 'أفغانستان', 'طاجيكستان', 'قيرغيزستان',
    'الهند', 'ماليزيا', 'إندونيسيا',
  ],
  es: [
    'Canadá', 'EE.UU.', 'Portugal', 'España', 'Reino Unido', 'Burkina Faso',
    'Países Bajos', 'Suiza', 'Nigeria', 'Eslovenia', 'Libia', 'Eslovaquia',
    'Montenegro', 'Serbia', 'Macedonia del Norte', 'Grecia', 'Sudáfrica',
    'Bulgaria', 'Rumanía', 'Moldavia', 'Egipto', 'Ucrania', 'Chipre del Norte',
    'Turquía', 'Líbano', 'Tanzania', 'Kenia', 'Georgia', 'Irak',
    'Arabia Saudita', 'Kuwait', 'Azerbaiyán', 'Emiratos Árabes Unidos',
    'Uzbekistán', 'Kazajistán', 'Afganistán', 'Tayikistán', 'Kirguistán',
    'India', 'Malasia', 'Indonesia',
  ],
  pt: [
    'Canadá', 'EUA', 'Portugal', 'Espanha', 'Reino Unido', 'Burkina Faso',
    'Países Baixos', 'Suíça', 'Nigéria', 'Eslovênia', 'Líbia', 'Eslováquia',
    'Montenegro', 'Sérvia', 'Macedônia do Norte', 'Grécia', 'África do Sul',
    'Bulgária', 'Romênia', 'Moldávia', 'Egito', 'Ucrânia', 'Chipre do Norte',
    'Turquia', 'Líbano', 'Tanzânia', 'Quênia', 'Geórgia', 'Iraque',
    'Arábia Saudita', 'Kuwait', 'Azerbaijão', 'Emirados Árabes Unidos',
    'Uzbequistão', 'Cazaquistão', 'Afeganistão', 'Tajiquistão', 'Quirguistão',
    'Índia', 'Malásia', 'Indonésia',
  ],
  ru: [
    'Канада', 'США', 'Португалия', 'Испания', 'Великобритания', 'Буркина-Фасо',
    'Нидерланды', 'Швейцария', 'Нигерия', 'Словения', 'Ливия', 'Словакия',
    'Черногория', 'Сербия', 'Северная Македония', 'Греция', 'Южная Африка',
    'Болгария', 'Румыния', 'Молдова', 'Египет', 'Украина', 'Северный Кипр',
    'Турция', 'Ливан', 'Танзания', 'Кения', 'Грузия', 'Ирак',
    'Саудовская Аравия', 'Кувейт', 'Азербайджан', 'Объединённые Арабские Эмираты',
    'Узбекистан', 'Казахстан', 'Афганистан', 'Таджикистан', 'Кыргызстан',
    'Индия', 'Малайзия', 'Индонезия',
  ],
  de: [
    'Kanada', 'USA', 'Portugal', 'Spanien', 'Vereinigtes Königreich', 'Burkina Faso',
    'Niederlande', 'Schweiz', 'Nigeria', 'Slowenien', 'Libyen', 'Slowakei',
    'Montenegro', 'Serbien', 'Nordmazedonien', 'Griechenland', 'Südafrika',
    'Bulgarien', 'Rumänien', 'Moldawien', 'Ägypten', 'Ukraine', 'Nordzypern',
    'Türkei', 'Libanon', 'Tansania', 'Kenia', 'Georgien', 'Irak',
    'Saudi-Arabien', 'Kuwait', 'Aserbaidschan', 'Vereinigte Arabische Emirate',
    'Usbekistan', 'Kasachstan', 'Afghanistan', 'Tadschikistan', 'Kirgisistan',
    'Indien', 'Malaysia', 'Indonesien',
  ],
  fr: [
    'Canada', 'États-Unis', 'Portugal', 'Espagne', 'Royaume-Uni', 'Burkina Faso',
    'Pays-Bas', 'Suisse', 'Nigeria', 'Slovénie', 'Libye', 'Slovaquie',
    'Monténégro', 'Serbie', 'Macédoine du Nord', 'Grèce', 'Afrique du Sud',
    'Bulgarie', 'Roumanie', 'Moldavie', 'Égypte', 'Ukraine', 'Chypre du Nord',
    'Turquie', 'Liban', 'Tanzanie', 'Kenya', 'Géorgie', 'Irak',
    'Arabie saoudite', 'Koweït', 'Azerbaïdjan', 'Émirats arabes unis',
    'Ouzbékistan', 'Kazakhstan', 'Afghanistan', 'Tadjikistan', 'Kirghizistan',
    'Inde', 'Malaisie', 'Indonésie',
  ],
}

const STORE_URL = 'https://strategic-frameworks.telcotank.com'

export default function MainLocalized({ lang }: { lang: Language }) {
  const t = translations[lang]
  const isRTL = lang === 'ar'
  const langSuffix = lang === 'en' ? '' : lang.toUpperCase()

  const metrics = [
    { value: '40', label: t.metrics.countries },
    { value: '$500M+', label: t.metrics.marketOpportunitiesCreated },
    { value: '300%', label: t.metrics.enterpriseGrowthPotential },
    { value: 'AI-First', label: t.metrics.aiFirstConsultingMethodology },
  ]

  const audiences = [
    { title: t.whoWeHelp.telecomOperators, description: t.whoWeHelp.telecomDescription },
    { title: t.whoWeHelp.financialInstitutions, description: t.whoWeHelp.financialDescription },
    { title: t.whoWeHelp.technologyAICompanies, description: t.whoWeHelp.techDescription },
    { title: t.whoWeHelp.infrastructureInvestors, description: t.whoWeHelp.investorsDescription },
    { title: t.whoWeHelp.consultingFirms, description: t.whoWeHelp.consultingDescription },
  ]

  const challenges = [
    { title: t.challenges.revenueGrowth, description: t.challenges.revenueDescription },
    { title: t.challenges.digitalTransformation, description: t.challenges.digitalDescription },
    { title: t.challenges.aiInitiatives, description: t.challenges.aiDescription },
    { title: t.challenges.marketEntry, description: t.challenges.marketDescription },
  ]

  const caseStudies = [
    { title: 'Telecom Digital Transformation', metric: '$500M+', description: 'Market opportunity unlocked through end-to-end digital transformation for a major telecom operator.', tag: 'Telecom' },
    { title: 'Sales Channel Transformation', metric: '1M+', description: 'Sales achieved through omnichannel strategy redesign and digital sales acceleration.', tag: 'Growth' },
    { title: 'Marketing Transformation', metric: '50%', description: 'Churn reduction through data-driven marketing transformation and customer lifecycle management.', tag: 'Marketing' },
    { title: 'Financial Services Transformation', metric: 'Major Bank', description: 'Digital transformation program for a major Eastern European bank across retail and corporate banking.', tag: 'Financial Services' },
  ]

  const processSteps = [
    { step: '01', title: t.howWeWork.diagnose, description: t.howWeWork.diagnoseDescription },
    { step: '02', title: t.howWeWork.design, description: t.howWeWork.designDescription },
    { step: '03', title: t.howWeWork.execute, description: t.howWeWork.executeDescription },
    { step: '04', title: t.howWeWork.scale, description: t.howWeWork.scaleDescription },
  ]

  const capabilities = [
    { title: t.capabilitiesSection.transformationStrategy, description: t.capabilitiesSection.transformationDescription, href: lang === 'en' ? '/capabilities#transformation-strategy' : `/${lang}/capabilities#transformation-strategy` },
    { title: t.capabilitiesSection.growthAcceleration, description: t.capabilitiesSection.growthDescription, href: lang === 'en' ? '/capabilities#growth-acceleration' : `/${lang}/capabilities#growth-acceleration` },
    { title: t.capabilitiesSection.aiTransformation, description: t.capabilitiesSection.aiGovernanceDescription, href: lang === 'en' ? '/capabilities#ai-transformation' : `/${lang}/capabilities#ai-transformation` },
    { title: t.capabilitiesSection.marketEntry, description: t.capabilitiesSection.marketEntryDescription, href: lang === 'en' ? '/capabilities#market-entry' : `/${lang}/capabilities#market-entry` },
    { title: t.capabilitiesSection.investmentAdvisory, description: t.capabilitiesSection.investmentDescription, href: lang === 'en' ? '/capabilities#investment-advisory' : `/${lang}/capabilities#investment-advisory` },
  ]

  const industries = [
    { title: t.industriesSection.telecommunications, description: t.industriesSection.telecomDescription, href: lang === 'en' ? '/industries#telecommunications' : `/${lang}/industries#telecommunications` },
    { title: t.industriesSection.financialServices, description: t.industriesSection.financialServicesDescription, href: lang === 'en' ? '/industries#financial-services' : `/${lang}/industries#financial-services` },
    { title: t.industriesSection.technologyAI, description: t.industriesSection.technologyDescription, href: lang === 'en' ? '/industries#technology-ai' : `/${lang}/industries#technology-ai` },
    { title: t.industriesSection.digitalInfrastructure, description: t.industriesSection.infrastructureDescription, href: lang === 'en' ? '/industries#digital-infrastructure' : `/${lang}/industries#digital-infrastructure` },
    { title: t.industriesSection.startupsScaleups, description: t.industriesSection.startupsDescription, href: lang === 'en' ? '/industries#startups-scaleups' : `/${lang}/industries#startups-scaleups` },
  ]

  const frameworks = [
    {
      title: 'How AI Is Reshaping Global Data Center Demand',
      format: '74 Pages · 12 Markets',
      description: 'Maps the AI-driven transformation of global data center demand — hyperscaler CapEx signals, power constraints, and sovereign infrastructure plays across 12 geographies.',
      href: `${STORE_URL}/products/how-ai-is-reshaping-global-data-center-demand-strategy-framework`,
    },
    {
      title: 'The AI Semiconductor Arms Race',
      format: '95 Slides · 18 Markets',
      description: 'Capital-allocation-grade view of the AI semiconductor value chain — NVIDIA\'s GPU dominance, TSMC bottlenecks, US export controls, and $200B+ in sovereign chip investments.',
      href: `${STORE_URL}/products/the-ai-semiconductor-arms-race-strategy-framework`,
    },
    {
      title: 'The AI Productivity Shock',
      format: 'Strategy Framework',
      description: 'How AI is creating a fundamental productivity shock across industries — implications for enterprise strategy, competitive positioning, and workforce transformation.',
      href: `${STORE_URL}/products/the-ai-productivity-shock-strategy-framework`,
    },
    {
      title: 'Sovereign AI & National Strategy',
      format: 'Strategy Framework',
      description: 'National AI strategies and their implications for enterprise technology adoption, data governance, and the geopolitical premium on sovereign compute.',
      href: `${STORE_URL}/products/sovereign-ai-national-strategy-strategy-framework`,
    },
    {
      title: 'AI & The Global Fiber + Connectivity Expansion',
      format: 'Strategy Framework',
      description: 'Massive fiber and connectivity infrastructure buildout driven by AI workloads — subsea cables, metro densification, and investment implications for telecom operators.',
      href: `${STORE_URL}/products/ai-the-global-fiber-connectivity-expansion-strategy-framework`,
    },
    {
      title: 'AI-Enabled Real Asset Transformation',
      format: 'Strategy Framework',
      description: 'How AI is transforming real asset classes — data centers, telecom infrastructure, energy systems, and commercial real estate investment frameworks.',
      href: `${STORE_URL}/products/ai-enabled-real-asset-transformation-strategy-framework`,
    },
  ]

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] overflow-hidden bg-[#0A1628]">
        <picture>
          <source media="(max-width: 768px)" srcSet={`${V}/home-hero-transformation-team${langSuffix}_small.png`} />
          <img
            src={`${V}/home-hero-transformation-team${langSuffix}.png`}
            alt="Telcotank consulting team collaborating on transformation strategy"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/30" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px] animate-pulse-soft" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px] animate-pulse-soft delay-200" />
        <div className="relative mx-auto flex min-h-[60vh] md:min-h-[85vh] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl py-32 animate-fade-in-up">
            <div className={`mb-6 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#60A5FA] to-[#2563EB]" />
              <div className="h-0.5 w-4 bg-[#60A5FA]/40" />
            </div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#60A5FA]">
              {t.hero.tagline}
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[1.08] text-white md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300/90 md:text-xl">
              {t.hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={lang === 'en' ? '/case-studies' : `/${lang}/case-studies`}
                className="group rounded-full bg-[#2563EB] px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
              >
                {t.hero.exploreOurWork}
              </Link>
              <Link
                href={lang === 'en' ? '/contact' : `/${lang}/contact`}
                className="rounded-full border-2 border-white/20 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                {t.hero.letsTalkStrategy}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#0A1628]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl justify-around px-6 py-6 lg:px-8">
            {metrics.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white md:text-3xl">{item.value}</div>
                  <div className="mt-1 text-xs text-gray-400 md:text-sm">{item.label}</div>
                </div>
                {idx < metrics.length - 1 && (
                  <div className="hidden h-10 w-px bg-gradient-to-b from-transparent via-[#2563EB]/30 to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT LOGOS ═══ */}
      <section className="border-y border-gray-200/80 bg-[#F5F7FA] py-14 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            {t.clientLogos.tagline}
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F7FA] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F7FA] to-transparent" />
          <div className="flex animate-marquee">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-12 min-w-[180px] items-center justify-center px-8"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 max-w-[130px] object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COUNTRIES ═══ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            {t.countries.tagline}
          </p>
          <p className="mx-auto max-w-5xl text-center text-sm leading-relaxed text-gray-500">
            {(countriesMap[lang] || countriesMap.en).join(' · ')}
          </p>
        </div>
      </section>

      {/* ═══ IMPACT METRICS ═══ */}
      <section className="relative overflow-hidden bg-[#0A1628] py-28 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#60A5FA]">
              {t.metrics.reach}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              {t.metrics.globalImpact}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="group text-center">
                <div className="text-5xl font-bold text-gradient-blue md:text-6xl">{item.value}</div>
                <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent transition-all group-hover:w-20 group-hover:via-[#2563EB]/70" />
                <div className="mt-4 text-sm text-gray-300 md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO WE HELP ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/home-who-we-help-people${langSuffix}_small.png`} />
              <img
                src={`${V}/home-who-we-help-people${langSuffix}.png`}
                alt="Enterprise leaders collaborating on transformation strategy"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="mb-10">
            <div className={`mb-6 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              {t.whoWeHelp.title}
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              {t.whoWeHelp.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="card-lift gradient-border group/item rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-[#0A2540] transition-colors group-hover/item:text-[#2563EB]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI-FIRST CONSULTING ═══ */}
      <section className="relative bg-[#0A2540] py-28 md:py-36 overflow-hidden">
        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#2563EB]/8 blur-[100px]" />
        <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#60A5FA]/5 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
              {t.aiFirstConsulting.approach}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              {t.aiFirstConsulting.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300/90">
              {t.aiFirstConsulting.description1}
            </p>
          </div>
          <div className="my-10 overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/capabilities-ai-first-human-tech${langSuffix}_small.png`} />
              <img
                src={`${V}/capabilities-ai-first-human-tech${langSuffix}.png`}
                alt="AI-first consulting methodology combining human expertise with technology"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-300/90">
              {t.aiFirstConsulting.description2}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { val: '3x', label: t.aiFirstConsulting.fasterAnalysis },
                { val: '10x', label: t.aiFirstConsulting.moreDataPoints },
                { val: '50%', label: t.aiFirstConsulting.fasterInsight },
                { val: 'AI+Human', label: t.aiFirstConsulting.aiPlusHuman },
              ].map((stat) => (
                <div key={stat.val} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-[#2563EB]/30 hover:bg-white/10">
                  <div className="text-2xl font-bold text-gradient-blue">{stat.val}</div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              {t.challenges.title}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((item, idx) => (
              <div key={item.title} className="card-lift gradient-border rounded-xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/10 text-sm font-bold text-[#2563EB]">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-2xl">
              <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                <div className="h-0.5 w-4 bg-[#2563EB]/20" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                {t.caseStudiesSection.title}
              </h2>
            </div>
            <Link
              href={lang === 'en' ? '/case-studies' : `/${lang}/case-studies`}
              className="hidden text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8] md:block"
            >
              {t.caseStudiesSection.viewAllCases}
            </Link>
          </div>
          <Link href={lang === 'en' ? '/case-studies' : `/${lang}/case-studies`} className="group mb-8 block overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/casestudies-featured-stories${langSuffix}_small.png`} />
              <img
                src={`${V}/casestudies-featured-stories${langSuffix}.png`}
                alt="Telcotank transformation case studies and client success stories"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </Link>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(1).map((item) => (
              <Link
                key={item.title}
                href={lang === 'en' ? '/case-studies' : `/${lang}/case-studies`}
                className="card-lift gradient-border group rounded-xl border border-gray-200 p-8"
              >
                <span className="inline-block rounded-full bg-[#2563EB]/8 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <div className="mt-2 text-3xl font-bold text-gradient-blue">{item.metric}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#2563EB] transition-all group-hover:translate-x-1">
                  {t.caseStudiesSection.readCaseStudy}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href={lang === 'en' ? '/case-studies' : `/${lang}/case-studies`}
              className="text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8]"
            >
              {t.caseStudiesSection.viewAllCases}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              {t.howWeWork.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.howWeWork.description}
            </p>
          </div>
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/home-our-process-human${langSuffix}_small.png`} />
              <img
                src={`${V}/home-our-process-human${langSuffix}.png`}
                alt="Telcotank consulting process — diagnose, design, execute, scale"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.title} className="card-lift group rounded-xl bg-white p-8 shadow-sm">
                <div className="mb-4 text-4xl font-bold text-gradient-blue opacity-40 transition-opacity group-hover:opacity-100">{item.step}</div>
                <h3 className="text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              {t.capabilitiesSection.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.capabilitiesSection.description}
            </p>
          </div>
          <div className="mb-12 overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/capabilities-services-with-people${langSuffix}_small.png`} />
              <img
                src={`${V}/capabilities-services-with-people${langSuffix}.png`}
                alt="Telcotank consulting team delivering transformation services"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card-lift gradient-border group rounded-xl border border-gray-200 p-8"
              >
                <h3 className="text-lg font-semibold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#2563EB] transition-transform group-hover:translate-x-1">
                  {t.capabilitiesSection.learnMore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              {t.industriesSection.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.industriesSection.description}
            </p>
          </div>
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/industries-hero-global-reach${langSuffix}_small.png`} />
              <img
                src={`${V}/industries-hero-global-reach${langSuffix}.png`}
                alt="Telcotank industry sectors — telecom, financial services, technology, infrastructure"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card-lift gradient-border group rounded-xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#2563EB] transition-transform group-hover:translate-x-1">
                  {t.industriesSection.explore}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC INTELLIGENCE ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
              {t.strategicIntelligence.provenBestsellers}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Strategic Intelligence
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              McKinsey-style strategic research frameworks used by telecom operators, infrastructure
              investors, sovereign wealth funds, and corporate strategy teams. 17 frameworks
              available — each $12,000.
            </p>
          </div>
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift gradient-border group rounded-xl border border-gray-200 p-7"
              >
                <h3 className="text-lg font-bold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#2563EB]/60">{item.format}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-[#2563EB] transition-transform group-hover:translate-x-1">
                  View framework →
                </span>
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#2563EB] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
            >
              Browse All 17 Frameworks
            </a>
            <Link
              href={lang === 'en' ? '/strategicintelligence' : `/${lang}/strategicintelligence`}
              className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ARTICLES ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
              Latest Insights
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Original analysis on the forces reshaping telecommunications, artificial intelligence,
              quantum computing, and the digital economy.
            </p>
          </div>
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'AI Left the Screen and Entered the Physical World',
                date: 'January 13, 2026',
                theme: 'AI & Quantum Computing',
                image: '/static/images/articles/Jan132026/image_1.jpg',
                summary:
                  'The emergence of Physical AI represents a structural shift from digital-first to embodied intelligence systems, with applications across robotics and autonomous vehicles.',
              },
              {
                title: 'The Oppenheimer Moment: Why Advanced AI Poses Profound Threats',
                date: 'November 17, 2025',
                theme: 'AI & Quantum Computing',
                image: '/static/images/articles/Nov172025/image_1.jpg',
                summary:
                  'Superintelligent systems present both transformative opportunity and irreversible risk — demanding immediate action on ethical governance and international cooperation.',
              },
              {
                title: 'Why Vibe Coding Is the New Big Thing',
                date: 'November 1, 2025',
                theme: 'Emerging Technology',
                image: '/static/images/articles/Nov012025/image_1.jpg',
                summary:
                  'Generative AI is compressing software development timelines from months to days, fundamentally democratizing startup formation.',
              },
            ].map((article) => (
              <Link
                key={article.title}
                href={lang === 'en' ? '/articles' : `/${lang}/articles`}
                className="card-lift group overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {article.theme}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-[#0A2540] group-hover:text-[#2563EB]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                    {article.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={lang === 'en' ? '/articles' : `/${lang}/articles`}
              className="rounded-md border border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                <div className="h-0.5 w-4 bg-[#2563EB]/20" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                {t.about.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Founded in 2004, Telcotank has delivered transformation strategy and execution
                across 40 countries, working with global telecom operators, financial institutions,
                and technology companies.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our AI-First consulting methodology enables faster strategic analysis and
                transformation execution, combining deep industry expertise with cutting-edge
                analytical capabilities.
              </p>
              <Link
                href={lang === 'en' ? '/about' : `/${lang}/about`}
                className="mt-8 inline-block text-sm font-medium text-[#2563EB] transition-all hover:text-[#1D4ED8] hover:translate-x-1"
              >
                Learn more about us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">2004</div>
                <div className="mt-1 text-sm text-gray-600">{t.about.founded}</div>
              </div>
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">40</div>
                <div className="mt-1 text-sm text-gray-600">{t.about.countriesCount}</div>
              </div>
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">$500M+</div>
                <div className="mt-1 text-sm text-gray-600">{t.about.opportunitiesCreated}</div>
              </div>
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">AI-First</div>
                <div className="mt-1 text-sm text-gray-600">Methodology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AIRBRIDGE ═══ */}
      <section className="relative overflow-hidden bg-[#0A1628] py-28 md:py-36">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#60A5FA]">
                New from Telcotank
              </span>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                AirBridge
              </h2>
              <p className="mt-2 text-lg font-medium text-[#60A5FA]">
                Aviation Disruption Intelligence Platform
              </p>
              <p className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg">
                Real-time monitoring of flight disruptions across 30+ airports in the Middle East,
                Europe, and global hubs. AirBridge combines live flight data with weather intelligence
                to provide actionable situational awareness for travelers, airlines, and logistics teams.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://airbridge.telcotank.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#2563EB] px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
                >
                  Launch AirBridge →
                </a>
                <a
                  href="https://airbridge.telcotank.com/airports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  View Airport Dashboard
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '30+', label: 'Airports Monitored' },
                { val: '8', label: 'Regions Covered' },
                { val: 'Live', label: 'Flight Scraping' },
                { val: 'Free', label: 'Open Access' },
              ].map((stat) => (
                <div key={stat.val} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl font-bold text-white">{stat.val}</div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <NewsletterSignup />

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden bg-[#0A2540] py-32 md:py-40">
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[100px] animate-pulse-soft" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-[#60A5FA]/8 blur-[80px] animate-pulse-soft delay-200" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            Discuss Your Transformation Challenge
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300/90 md:text-xl">
            Whether you are navigating digital transformation, exploring new markets, or seeking
            strategic clarity on AI adoption, we are ready to help.
          </p>
          <Link
            href={lang === 'en' ? '/contact' : `/${lang}/contact`}
            className="mt-12 inline-block rounded-full bg-[#2563EB] px-10 py-5 text-base font-semibold text-white shadow-xl shadow-[#2563EB]/30 transition-all hover:bg-[#1D4ED8] hover:shadow-2xl hover:shadow-[#2563EB]/40"
          >
            {t.nav.requestStrategyDiscussion}
          </Link>
        </div>
      </section>
    </div>
  )
}
