'use client'

import Link from '@/components/Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru'

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

  const milestones: Milestone[] = [
    {
      year: '2004',
      event:
        lang === 'en'
          ? 'Telcotank founded with telecom strategy focus'
          : lang === 'tr'
            ? 'Telcotank telekomünikasyon stratejisi odağıyla kuruldu'
            : lang === 'ar'
              ? 'تأسيس تيلكوتانك مع التركيز على استراتيجية الاتصالات'
              : lang === 'es'
                ? 'Telcotank fundada con enfoque en estrategia de telecomunicaciones'
                : lang === 'pt'
                  ? 'Telcotank fundada com foco em estratégia de telecomunicações'
                  : 'Telcotank основана с акцентом на стратегию телекоммуникаций',
    },
    {
      year: '2008',
      event:
        lang === 'en'
          ? 'Expanded to financial services advisory'
          : lang === 'tr'
            ? 'Finansal hizmetler danışmanlığına genişledi'
            : lang === 'ar'
              ? 'توسعت إلى استشارات الخدمات المالية'
              : lang === 'es'
                ? 'Expandido a asesoramiento de servicios financieros'
                : lang === 'pt'
                  ? 'Expandido para consultoria de serviços financeiros'
                  : 'Расширена консультация по финансовым услугам',
    },
    {
      year: '2012',
      event:
        lang === 'en'
          ? 'Reached 15+ country presence across EMEA'
          : lang === 'tr'
            ? 'EMEA\'da 15+ ülke varlığına ulaştı'
            : lang === 'ar'
              ? 'وصلت إلى حضور أكثر من 15 دولة عبر منطقة الشرق الأوسط وشمال أفريقيا'
              : lang === 'es'
                ? 'Alcanzó presencia en 15+ países en EMEA'
                : lang === 'pt'
                  ? 'Alcançou presença em 15+ países na EMEA'
                  : 'Достигла присутствия в 15+ странах в регионе EMEA',
    },
    {
      year: '2016',
      event:
        lang === 'en'
          ? 'Launched digital transformation practice'
          : lang === 'tr'
            ? 'Dijital dönüşüm uygulamasını başlattı'
            : lang === 'ar'
              ? 'أطلقت ممارسة التحول الرقمي'
              : lang === 'es'
                ? 'Lanzó práctica de transformación digital'
                : lang === 'pt'
                  ? 'Lançou prática de transformação digital'
                  : 'Запущена практика цифровой трансформации',
    },
    {
      year: '2020',
      event:
        lang === 'en'
          ? 'AI Transformation & Governance capability added'
          : lang === 'tr'
            ? 'AI Dönüşümü & Yönetim yeteneği eklendi'
            : lang === 'ar'
              ? 'تمت إضافة قدرة التحول والحوكمة بالذكاء الاصطناعي'
              : lang === 'es'
                ? 'Se agregó capacidad de Transformación y Gobernanza de IA'
                : lang === 'pt'
                  ? 'Capacidade de Transformação e Governança de IA adicionada'
                  : 'Добавлена возможность преобразования и управления ИИ',
    },
    {
      year: '2024',
      event:
        lang === 'en'
          ? 'AI-First consulting methodology deployed'
          : lang === 'tr'
            ? 'AI-First danışmanlık metodolojisi dağıtıldı'
            : lang === 'ar'
              ? 'تم نشر منهجية الاستشارات التي تضع الذكاء الاصطناعي في المقدمة'
              : lang === 'es'
                ? 'Metodología de consultoría AI-First desplegada'
                : lang === 'pt'
                  ? 'Metodologia de consultoria AI-First implantada'
                  : 'Развернута методология консультирования, ориентированная на ИИ',
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
