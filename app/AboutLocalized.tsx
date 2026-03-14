'use client'

import Link from '@/components/Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

interface AboutLocalizedProps {
  lang: Lang
}

interface Milestone {
  year: string
  event: string
}

interface Value {
  title: string
  description: string
}

interface Pillar {
  title: string
  description: string
}

export default function AboutLocalized({ lang }: AboutLocalizedProps) {
  const t = translations[lang]

  const milestoneEvents: Record<Lang, string[]> = {
    en: [
      'Telcotank founded with telecom strategy focus',
      'Expanded to financial services advisory',
      'Reached 15+ country presence across EMEA',
      'Launched digital transformation practice',
      'AI Transformation & Governance capability added',
      'AI-First consulting methodology deployed',
    ],
    tr: [
      'Telcotank telekomünikasyon stratejisi odağıyla kuruldu',
      'Finansal hizmetler danışmanlığına genişledi',
      'EMEA\'da 15+ ülke varlığına ulaştı',
      'Dijital dönüşüm uygulamasını başlattı',
      'AI Dönüşümü & Yönetim yeteneği eklendi',
      'AI-First danışmanlık metodolojisi dağıtıldı',
    ],
    ar: [
      'تأسيس تيلكوتانك مع التركيز على استراتيجية الاتصالات',
      'توسعت إلى استشارات الخدمات المالية',
      'وصلت إلى حضور أكثر من 15 دولة عبر منطقة الشرق الأوسط وشمال أفريقيا',
      'أطلقت ممارسة التحول الرقمي',
      'تمت إضافة قدرة التحول والحوكمة بالذكاء الاصطناعي',
      'تم نشر منهجية الاستشارات التي تضع الذكاء الاصطناعي في المقدمة',
    ],
    es: [
      'Telcotank fundada con enfoque en estrategia de telecomunicaciones',
      'Expandido a asesoramiento de servicios financieros',
      'Alcanzó presencia en 15+ países en EMEA',
      'Lanzó práctica de transformación digital',
      'Se agregó capacidad de Transformación y Gobernanza de IA',
      'Metodología de consultoría AI-First desplegada',
    ],
    pt: [
      'Telcotank fundada com foco em estratégia de telecomunicações',
      'Expandido para consultoria de serviços financeiros',
      'Alcançou presença em 15+ países na EMEA',
      'Lançou prática de transformação digital',
      'Capacidade de Transformação e Governança de IA adicionada',
      'Metodologia de consultoria AI-First implantada',
    ],
    ru: [
      'Telcotank основана с акцентом на стратегию телекоммуникаций',
      'Расширена консультация по финансовым услугам',
      'Достигла присутствия в 15+ странах в регионе EMEA',
      'Запущена практика цифровой трансформации',
      'Добавлена возможность преобразования и управления ИИ',
      'Развернута методология консультирования, ориентированная на ИИ',
    ],
    de: [
      'Telcotank gegründet mit Fokus auf Telekommunikationsstrategie',
      'Erweitert um Finanzdienstleistungsberatung',
      'Erreichte Präsenz in 15+ Ländern in der EMEA-Region',
      'Digitale Transformationspraxis gestartet',
      'KI-Transformations- und Governance-Fähigkeit hinzugefügt',
      'KI-First-Beratungsmethodik implementiert',
    ],
    fr: [
      'Telcotank fondée avec un accent sur la stratégie des télécommunications',
      'Expansion vers le conseil en services financiers',
      'Présence établie dans 15+ pays dans la région EMEA',
      'Lancement de la pratique de transformation numérique',
      'Capacité de transformation et de gouvernance de l\'IA ajoutée',
      'Méthodologie de conseil IA-First déployée',
    ],
  }

  const milestones: Milestone[] = [
    {
      year: '2004',
      event: milestoneEvents[lang]?.[0] || milestoneEvents.en[0],
    },
    {
      year: '2008',
      event: milestoneEvents[lang]?.[1] || milestoneEvents.en[1],
    },
    {
      year: '2012',
      event: milestoneEvents[lang]?.[2] || milestoneEvents.en[2],
    },
    {
      year: '2016',
      event: milestoneEvents[lang]?.[3] || milestoneEvents.en[3],
    },
    {
      year: '2020',
      event: milestoneEvents[lang]?.[4] || milestoneEvents.en[4],
    },
    {
      year: '2024',
      event: milestoneEvents[lang]?.[5] || milestoneEvents.en[5],
    },
  ]

  const values: Value[] = [
    {
      title: t.about.executionFocus,
      description: t.about.executionDescription,
    },
    {
      title: t.about.deepIndustryExpertise,
      description: t.about.industryDescription,
    },
    {
      title: t.about.aiFirstApproach,
      description: t.about.aiApproachDescription,
    },
    {
      title: t.about.globalPerspective,
      description: t.about.globalDescription,
    },
  ]

  const pillars: Pillar[] = [
    {
      title: t.about.transformationConsultingPillar,
      description: t.about.transformationPillarDescription,
    },
    {
      title: t.about.strategicIntelligencePillar,
      description: t.about.intelligencePillarDescription,
    },
    {
      title: t.about.aiTransformationPillar,
      description: t.about.aiPillarDescription,
    },
  ]

  const contactHref = lang === 'en' ? '/contact' : `/${lang}/contact`

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold text-[#0A2540] md:text-5xl lg:text-6xl">
              {t.about.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              {t.about.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F5F7FA] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                {t.about.ourMission}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {t.about.missionDescription1}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {t.about.missionDescription2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#0A2540]">2004</div>
                <div className="mt-1 text-sm text-gray-600">{t.about.founded}</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#0A2540]">40</div>
                <div className="mt-1 text-sm text-gray-600">{t.about.countriesCount}</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#0A2540]">$500M+</div>
                <div className="mt-1 text-sm text-gray-600">{t.about.opportunitiesCreated}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
            {t.about.whatSetsUsApart}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-[#0A2540]">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F5F7FA] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
            {t.about.ourJourney}
          </h2>
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex items-start gap-6">
                <div className="w-16 flex-shrink-0 text-xl font-bold text-[#2563EB]">{m.year}</div>
                <div className="border-l-2 border-gray-300 pl-6">
                  <p className="text-base text-gray-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
            {t.about.threePillars}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-lg bg-[#F5F7FA] p-8">
                <h3 className="text-xl font-semibold text-[#0A2540]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            {t.about.workWithUs}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {t.about.workWithUsDescription}
          </p>
          <Link
            href={contactHref}
            className="mt-8 inline-block rounded-md bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            {t.nav.requestStrategyDiscussion}
          </Link>
        </div>
      </section>
    </div>
  )
}
