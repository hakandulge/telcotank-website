'use client'

import Link from '@/components/Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru'

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

  // Industry data with translations
  const industries: IndustryItem[] = [
    {
      id: 'telecommunications',
      title: t.industriesSection.telecommunications,
      description: t.industriesSection.telecomDescription,
      challenges: [
        lang === 'en'
          ? 'Declining traditional revenue streams'
          : lang === 'tr'
            ? 'Geleneksel gelir akışlarında düşüş'
            : lang === 'ar'
              ? 'تراجع تدفقات الإيرادات التقليدية'
              : lang === 'es'
                ? 'Flujos de ingresos tradicionales en declive'
                : lang === 'pt'
                  ? 'Declínio dos fluxos de receita tradicionais'
                  : 'Снижение традиционных потоков доходов',
        lang === 'en'
          ? 'Digital transformation at enterprise scale'
          : lang === 'tr'
            ? 'Kurumsal ölçekte dijital dönüşüm'
            : lang === 'ar'
              ? 'التحول الرقمي على نطاق المؤسسة'
              : lang === 'es'
                ? 'Transformación digital a escala empresarial'
                : lang === 'pt'
                  ? 'Transformação digital em escala empresarial'
                  : 'Цифровая трансформация в масштабе предприятия',
        lang === 'en'
          ? 'Network modernization and 5G monetization'
          : lang === 'tr'
            ? 'Ağ modernizasyonu ve 5G para kazanma'
            : lang === 'ar'
              ? 'تحديث الشبكات وتحقيق الإيرادات من 5G'
              : lang === 'es'
                ? 'Modernización de redes y monetización de 5G'
                : lang === 'pt'
                  ? 'Modernização de redes e monetização 5G'
                  : 'Модернизация сетей и монетизация 5G',
        lang === 'en'
          ? 'Customer experience and retention'
          : lang === 'tr'
            ? 'Müşteri deneyimi ve elde tutma'
            : lang === 'ar'
              ? 'تجربة العملاء والاحتفاظ بهم'
              : lang === 'es'
                ? 'Experiencia del cliente y retención'
                : lang === 'pt'
                  ? 'Experiência do cliente e retenção'
                  : 'Опыт клиента и удержание',
        lang === 'en'
          ? 'New business model development'
          : lang === 'tr'
            ? 'Yeni iş modeli geliştirme'
            : lang === 'ar'
              ? 'تطوير نماذج أعمال جديدة'
              : lang === 'es'
                ? 'Desarrollo de nuevos modelos de negocio'
                : lang === 'pt'
                  ? 'Desenvolvimento de novos modelos de negócio'
                  : 'Разработка новых бизнес-моделей',
      ],
      stats: { clients: '21', label: t.industriesSection.telecommunications },
    },
    {
      id: 'financial-services',
      title: t.industriesSection.financialServices,
      description: t.industriesSection.financialServicesDescription,
      challenges: [
        lang === 'en'
          ? 'Digital banking transformation'
          : lang === 'tr'
            ? 'Dijital bankacılık dönüşümü'
            : lang === 'ar'
              ? 'التحول الرقمي للبنوك'
              : lang === 'es'
                ? 'Transformación de la banca digital'
                : lang === 'pt'
                  ? 'Transformação bancária digital'
                  : 'Трансформация цифрового банкинга',
        lang === 'en'
          ? 'Fintech competition and collaboration'
          : lang === 'tr'
            ? 'Fintech rekabeti ve işbirliği'
            : lang === 'ar'
              ? 'المنافسة والتعاون في التكنولوجيا المالية'
              : lang === 'es'
                ? 'Competencia y colaboración de Fintech'
                : lang === 'pt'
                  ? 'Competição e colaboração de Fintech'
                  : 'Конкуренция и сотрудничество Fintech',
        lang === 'en'
          ? 'Regulatory technology compliance'
          : lang === 'tr'
            ? 'Düzenleyici teknoloji uyumluluğu'
            : lang === 'ar'
              ? 'الامتثال التكنولوجي التنظيمي'
              : lang === 'es'
                ? 'Cumplimiento tecnológico regulatorio'
                : lang === 'pt'
                  ? 'Conformidade com tecnologia regulatória'
                  : 'Соответствие нормативным требованиям технологии',
        lang === 'en'
          ? 'Customer acquisition cost optimization'
          : lang === 'tr'
            ? 'Müşteri kazanım maliyeti optimizasyonu'
            : lang === 'ar'
              ? 'تحسين تكلفة اكتساب العملاء'
              : lang === 'es'
                ? 'Optimización del costo de adquisición de clientes'
                : lang === 'pt'
                  ? 'Otimização de custo de aquisição de clientes'
                  : 'Оптимизация стоимости привлечения клиентов',
        lang === 'en'
          ? 'Data and AI-driven decision making'
          : lang === 'tr'
            ? 'Veri ve AI destekli karar alma'
            : lang === 'ar'
              ? 'اتخاذ القرارات المدفوعة بالبيانات والذكاء الاصطناعي'
              : lang === 'es'
                ? 'Toma de decisiones impulsada por datos e IA'
                : lang === 'pt'
                  ? 'Tomada de decisão impulsionada por dados e IA'
                  : 'Принятие решений на основе данных и ИИ',
      ],
      stats: { clients: 'Major Banks', label: t.industriesSection.financialServices },
    },
    {
      id: 'technology-ai',
      title: t.industriesSection.technologyAI,
      description: t.industriesSection.technologyDescription,
      challenges: [
        lang === 'en'
          ? 'Enterprise go-to-market strategy'
          : lang === 'tr'
            ? 'Kurumsal pazar sunumu stratejisi'
            : lang === 'ar'
              ? 'استراتيجية الدخول إلى السوق للمؤسسات'
              : lang === 'es'
                ? 'Estrategia de entrada al mercado empresarial'
                : lang === 'pt'
                  ? 'Estratégia de entrada no mercado corporativo'
                  : 'Корпоративная стратегия выхода на рынок',
        lang === 'en'
          ? 'Product-market fit optimization'
          : lang === 'tr'
            ? 'Ürün pazar uyumu optimizasyonu'
            : lang === 'ar'
              ? 'تحسين توافق المنتج والسوق'
              : lang === 'es'
                ? 'Optimización del ajuste producto-mercado'
                : lang === 'pt'
                  ? 'Otimização de ajuste produto-mercado'
                  : 'Оптимизация соответствия продукта рынку',
        lang === 'en'
          ? 'AI integration and monetization'
          : lang === 'tr'
            ? 'AI entegrasyonu ve para kazanma'
            : lang === 'ar'
              ? 'تكامل الذكاء الاصطناعي والتحقيق من الإيرادات'
              : lang === 'es'
                ? 'Integración y monetización de IA'
                : lang === 'pt'
                  ? 'Integração e monetização de IA'
                  : 'Интеграция ИИ и получение прибыли',
        lang === 'en'
          ? 'International market expansion'
          : lang === 'tr'
            ? 'Uluslararası pazar genişlemesi'
            : lang === 'ar'
              ? 'توسع السوق الدولية'
              : lang === 'es'
                ? 'Expansión del mercado internacional'
                : lang === 'pt'
                  ? 'Expansão do mercado internacional'
                  : 'Расширение на международные рынки',
        lang === 'en'
          ? 'Strategic partnerships and ecosystems'
          : lang === 'tr'
            ? 'Stratejik ortaklıklar ve ekosistemler'
            : lang === 'ar'
              ? 'الشراكات الإستراتيجية والنظم البيئية'
              : lang === 'es'
                ? 'Asociaciones estratégicas y ecosistemas'
                : lang === 'pt'
                  ? 'Parcerias estratégicas e ecossistemas'
                  : 'Стратегические партнерства и экосистемы',
      ],
      stats: { clients: 'Global', label: t.industriesSection.technologyAI },
    },
    {
      id: 'digital-infrastructure',
      title: t.industriesSection.digitalInfrastructure,
      description: t.industriesSection.infrastructureDescription,
      challenges: [
        lang === 'en'
          ? 'Infrastructure investment strategy'
          : lang === 'tr'
            ? 'Altyapı yatırım stratejisi'
            : lang === 'ar'
              ? 'استراتيجية الاستثمار في البنية التحتية'
              : lang === 'es'
                ? 'Estrategia de inversión en infraestructura'
                : lang === 'pt'
                  ? 'Estratégia de investimento em infraestrutura'
                  : 'Стратегия инвестирования в инфраструктуру',
        lang === 'en'
          ? 'Market entry and expansion planning'
          : lang === 'tr'
            ? 'Pazar girişi ve genişleme planlaması'
            : lang === 'ar'
              ? 'تخطيط الدخول والتوسع في السوق'
              : lang === 'es'
                ? 'Planificación de entrada y expansión del mercado'
                : lang === 'pt'
                  ? 'Planejamento de entrada e expansão do mercado'
                  : 'Планирование входа на рынок и расширения',
        lang === 'en'
          ? 'Competitive landscape analysis'
          : lang === 'tr'
            ? 'Rekabet ortamı analizi'
            : lang === 'ar'
              ? 'تحليل المشهد التنافسي'
              : lang === 'es'
                ? 'Análisis del panorama competitivo'
                : lang === 'pt'
                  ? 'Análise da paisagem competitiva'
                  : 'Анализ конкурентной среды',
        lang === 'en'
          ? 'Regulatory and licensing framework navigation'
          : lang === 'tr'
            ? 'Düzenleyici ve lisanslama çerçevesi navigasyonu'
            : lang === 'ar'
              ? 'الملاحة في إطار العمل التنظيمي والترخيص'
              : lang === 'es'
                ? 'Navegación de marco normativo y de licencias'
                : lang === 'pt'
                  ? 'Navegação de estrutura regulatória e de licenças'
                  : 'Навигация по нормативно-правовой базе и лицензированию',
        lang === 'en'
          ? 'Value creation for investors'
          : lang === 'tr'
            ? 'Yatırımcılar için değer yaratma'
            : lang === 'ar'
              ? 'خلق القيمة للمستثمرين'
              : lang === 'es'
                ? 'Creación de valor para los inversores'
                : lang === 'pt'
                  ? 'Criação de valor para investidores'
                  : 'Создание стоимости для инвесторов',
      ],
      stats: { clients: '40', label: t.industriesSection.digitalInfrastructure },
    },
    {
      id: 'startups-scaleups',
      title: t.industriesSection.startupsScaleups,
      description: t.industriesSection.startupsDescription,
      challenges: [
        lang === 'en'
          ? 'Market expansion strategy'
          : lang === 'tr'
            ? 'Pazar genişleme stratejisi'
            : lang === 'ar'
              ? 'استراتيجية توسع السوق'
              : lang === 'es'
                ? 'Estrategia de expansión de mercado'
                : lang === 'pt'
                  ? 'Estratégia de expansão de mercado'
                  : 'Стратегия расширения рынка',
        lang === 'en'
          ? 'Enterprise sales readiness'
          : lang === 'tr'
            ? 'Kurumsal satış hazırlığı'
            : lang === 'ar'
              ? 'جاهزية المبيعات على مستوى المؤسسة'
              : lang === 'es'
                ? 'Preparación para ventas empresariales'
                : lang === 'pt'
                  ? 'Preparação de vendas corporativas'
                  : 'Готовность корпоративных продаж',
        lang === 'en'
          ? 'Fundraising and investor positioning'
          : lang === 'tr'
            ? 'Bütçe toplama ve yatırımcı konumlandırması'
            : lang === 'ar'
              ? 'جمع التبرعات وموضع المستثمرين'
              : lang === 'es'
                ? 'Recaudación de fondos y posicionamiento de inversores'
                : lang === 'pt'
                  ? 'Captação de recursos e posicionamento de investidores'
                  : 'Привлечение капитала и позиционирование инвесторов',
        lang === 'en'
          ? 'Go-to-market optimization'
          : lang === 'tr'
            ? 'Pazar sunumu optimizasyonu'
            : lang === 'ar'
              ? 'تحسين الدخول إلى السوق'
              : lang === 'es'
                ? 'Optimización de entrada al mercado'
                : lang === 'pt'
                  ? 'Otimização de entrada no mercado'
                  : 'Оптимизация выхода на рынок',
        lang === 'en'
          ? 'Strategic partnership development'
          : lang === 'tr'
            ? 'Stratejik ortaklık geliştirme'
            : lang === 'ar'
              ? 'تطوير الشراكات الإستراتيجية'
              : lang === 'es'
                ? 'Desarrollo de asociaciones estratégicas'
                : lang === 'pt'
                  ? 'Desenvolvimento de parcerias estratégicas'
                  : 'Развитие стратегических партнерств',
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
