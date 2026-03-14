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

  const capabilities: CapabilityItem[] = [
    {
      id: 'transformation-strategy',
      title: t.capabilitiesPage.transformationStrategyTitle,
      description: t.capabilitiesPage.transformationStrategyDesc,
      details: [
        lang === 'en'
          ? 'Digital transformation roadmap development'
          : lang === 'tr'
            ? 'Dijital dönüşüm yol haritası geliştirme'
            : lang === 'ar'
              ? 'تطوير خريطة الطريق للتحول الرقمي'
              : lang === 'es'
                ? 'Desarrollo de hoja de ruta de transformación digital'
                : lang === 'pt'
                  ? 'Desenvolvimento de roteiro de transformação digital'
                  : 'Разработка дорожной карты цифровой трансформации',
        lang === 'en'
          ? 'Business model innovation and design'
          : lang === 'tr'
            ? 'İş modeli yeniliği ve tasarımı'
            : lang === 'ar'
              ? 'ابتكار وتصميم نموذج الأعمال'
              : lang === 'es'
                ? 'Innovación y diseño de modelo de negocio'
                : lang === 'pt'
                  ? 'Inovação e design de modelo de negócios'
                  : 'Инновации и проектирование бизнес-модели',
        lang === 'en'
          ? 'Organizational transformation architecture'
          : lang === 'tr'
            ? 'Kuruluş dönüşümü mimarisi'
            : lang === 'ar'
              ? 'عمارة تحويل المنظمة'
              : lang === 'es'
                ? 'Arquitectura de transformación organizacional'
                : lang === 'pt'
                  ? 'Arquitetura de transformação organizacional'
                  : 'Архитектура трансформации организации',
        lang === 'en'
          ? 'Technology strategy and vendor assessment'
          : lang === 'tr'
            ? 'Teknoloji stratejisi ve satıcı değerlendirmesi'
            : lang === 'ar'
              ? 'استراتيجية التكنولوجيا وتقييم البائع'
              : lang === 'es'
                ? 'Estrategia tecnológica y evaluación de proveedores'
                : lang === 'pt'
                  ? 'Estratégia de tecnologia e avaliação de fornecedores'
                  : 'Технологическая стратегия и оценка поставщиков',
        lang === 'en'
          ? 'Change management and governance frameworks'
          : lang === 'tr'
            ? 'Değişim yönetimi ve yönetişim çerçeveleri'
            : lang === 'ar'
              ? 'أطر إدارة التغيير والحوكمة'
              : lang === 'es'
                ? 'Marcos de gestión del cambio y gobernanza'
                : lang === 'pt'
                  ? 'Estruturas de gestão de mudanças e governança'
                  : 'Структуры управления изменениями и управления',
      ],
    },
    {
      id: 'growth-acceleration',
      title: t.capabilitiesPage.growthAccelerationTitle,
      description: t.capabilitiesPage.growthAccelerationDesc,
      details: [
        lang === 'en'
          ? 'Sales channel transformation and optimization'
          : lang === 'tr'
            ? 'Satış kanalı dönüşümü ve optimizasyonu'
            : lang === 'ar'
              ? 'تحويل وتحسين قنوات المبيعات'
              : lang === 'es'
                ? 'Transformación y optimización de canales de ventas'
                : lang === 'pt'
                  ? 'Transformação e otimização de canais de vendas'
                  : 'Трансформация и оптимизация каналов продаж',
        lang === 'en'
          ? 'Customer acquisition and retention strategy'
          : lang === 'tr'
            ? 'Müşteri kazanım ve elde tutma stratejisi'
            : lang === 'ar'
              ? 'استراتيجية اكتساب والاحتفاظ بالعملاء'
              : lang === 'es'
                ? 'Estrategia de adquisición y retención de clientes'
                : lang === 'pt'
                  ? 'Estratégia de aquisição e retenção de clientes'
                  : 'Стратегия привлечения и удержания клиентов',
        lang === 'en'
          ? 'Pricing and commercial model redesign'
          : lang === 'tr'
            ? 'Fiyatlandırma ve ticari model yeniden tasarımı'
            : lang === 'ar'
              ? 'إعادة تصميم نموذج التسعير والتجاري'
              : lang === 'es'
                ? 'Rediseño de modelo de fijación de precios y comercial'
                : lang === 'pt'
                  ? 'Redesenho de modelo de preço e comercial'
                  : 'Переоформление модели ценообразования и коммерческой',
        lang === 'en'
          ? 'Marketing transformation and analytics'
          : lang === 'tr'
            ? 'Pazarlama dönüşümü ve analitikleri'
            : lang === 'ar'
              ? 'تحويل التسويق والتحليلات'
              : lang === 'es'
                ? 'Transformación de marketing y análisis'
                : lang === 'pt'
                  ? 'Transformação de marketing e análise'
                  : 'Маркетинговая трансформация и аналитика',
        lang === 'en'
          ? 'Partnership and ecosystem development'
          : lang === 'tr'
            ? 'Ortaklık ve ekosistem geliştirme'
            : lang === 'ar'
              ? 'تطوير الشراكة والنظم البيئية'
              : lang === 'es'
                ? 'Desarrollo de asociaciones y ecosistemas'
                : lang === 'pt'
                  ? 'Desenvolvimento de parcerias e ecossistemas'
                  : 'Развитие партнерства и экосистемы',
      ],
    },
    {
      id: 'ai-transformation',
      title: t.capabilitiesPage.aiTransformationTitle,
      description: t.capabilitiesPage.aiTransformationDesc,
      details: [
        lang === 'en'
          ? 'AI strategy and roadmap development'
          : lang === 'tr'
            ? 'AI stratejisi ve yol haritası geliştirme'
            : lang === 'ar'
              ? 'تطوير استراتيجية الذكاء الاصطناعي والخريطة الطريق'
              : lang === 'es'
                ? 'Desarrollo de estrategia y hoja de ruta de IA'
                : lang === 'pt'
                  ? 'Desenvolvimento de estratégia e roteiro de IA'
                  : 'Разработка стратегии и дорожной карты ИИ',
        lang === 'en'
          ? 'AI governance and ethics frameworks'
          : lang === 'tr'
            ? 'AI yönetimi ve etik çerçeveleri'
            : lang === 'ar'
              ? 'أطر حوكمة الذكاء الاصطناعي والأخلاق'
              : lang === 'es'
                ? 'Marcos de gobernanza y ética de IA'
                : lang === 'pt'
                  ? 'Estruturas de governança e ética de IA'
                  : 'Структуры управления ИИ и этики',
        lang === 'en'
          ? 'AI operating model design'
          : lang === 'tr'
            ? 'AI işletim modeli tasarımı'
            : lang === 'ar'
              ? 'تصميم نموذج التشغيل للذكاء الاصطناعي'
              : lang === 'es'
                ? 'Diseño del modelo operativo de IA'
                : lang === 'pt'
                  ? 'Design do modelo operacional de IA'
                  : 'Проектирование операционной модели ИИ',
        lang === 'en'
          ? 'AI Control Tower implementation'
          : lang === 'tr'
            ? 'AI Control Tower uygulaması'
            : lang === 'ar'
              ? 'تطبيق برج التحكم بالذكاء الاصطناعي'
              : lang === 'es'
                ? 'Implementación de la Torre de Control de IA'
                : lang === 'pt'
                  ? 'Implementação da Torre de Controle de IA'
                  : 'Реализация центра управления ИИ',
        lang === 'en'
          ? 'Enterprise AI adoption and culture programs'
          : lang === 'tr'
            ? 'Kurumsal AI benimseme ve kültür programları'
            : lang === 'ar'
              ? 'برامج الاعتماد والثقافة للذكاء الاصطناعي في المؤسسات'
              : lang === 'es'
                ? 'Programas de adopción y cultura de IA empresarial'
                : lang === 'pt'
                  ? 'Programas de adoção e cultura de IA corporativa'
                  : 'Программы корпоративного принятия и культуры ИИ',
      ],
    },
    {
      id: 'market-entry',
      title: t.capabilitiesPage.marketEntryTitle,
      description: t.capabilitiesPage.marketEntryDesc,
      details: [
        lang === 'en'
          ? 'Market opportunity assessment and sizing'
          : lang === 'tr'
            ? 'Pazar fırsatı değerlendirmesi ve boyutlandırması'
            : lang === 'ar'
              ? 'تقييم فرص السوق والحجم'
              : lang === 'es'
                ? 'Evaluación del tamaño de las oportunidades de mercado'
                : lang === 'pt'
                  ? 'Avaliação e dimensionamento de oportunidades de mercado'
                  : 'Оценка и определение размера рыночных возможностей',
        lang === 'en'
          ? 'Entry strategy and business case development'
          : lang === 'tr'
            ? 'Giriş stratejisi ve iş durumu geliştirme'
            : lang === 'ar'
              ? 'استراتيجية الدخول وتطوير حالة الأعمال'
              : lang === 'es'
                ? 'Estrategia de entrada y desarrollo del caso de negocio'
                : lang === 'pt'
                  ? 'Estratégia de entrada e desenvolvimento de caso de negócio'
                  : 'Стратегия входа и разработка обоснования',
        lang === 'en'
          ? 'Regulatory and licensing analysis'
          : lang === 'tr'
            ? 'Düzenleyici ve lisanslama analizi'
            : lang === 'ar'
              ? 'تحليل التنظيم والترخيص'
              : lang === 'es'
                ? 'Análisis regulatorio y de licencias'
                : lang === 'pt'
                  ? 'Análise regulatória e de licenças'
                  : 'Нормативный анализ и анализ лицензирования',
        lang === 'en'
          ? 'Local partnership identification and structuring'
          : lang === 'tr'
            ? 'Yerel ortaklık tanımlama ve yapılandırma'
            : lang === 'ar'
              ? 'تحديد وتنظيم الشراكات المحلية'
              : lang === 'es'
                ? 'Identificación y estructuración de asociaciones locales'
                : lang === 'pt'
                  ? 'Identificação e estruturação de parcerias locais'
                  : 'Выявление и структурирование локальных партнерств',
        lang === 'en'
          ? 'Operational setup and launch management'
          : lang === 'tr'
            ? 'Operasyonel kurulum ve başlatma yönetimi'
            : lang === 'ar'
              ? 'إعداد التشغيل وإدارة الإطلاق'
              : lang === 'es'
                ? 'Configuración operativa y gestión del lanzamiento'
                : lang === 'pt'
                  ? 'Configuração operacional e gerenciamento de lançamento'
                  : 'Операционная настройка и управление запуском',
      ],
    },
    {
      id: 'investment-advisory',
      title: t.capabilitiesPage.investmentAdvisoryTitle,
      description: t.capabilitiesPage.investmentAdvisoryDesc,
      details: [
        lang === 'en'
          ? 'Commercial and strategic due diligence'
          : lang === 'tr'
            ? 'Ticari ve stratejik durum tespiti'
            : lang === 'ar'
              ? 'العناية الواجبة التجارية والإستراتيجية'
              : lang === 'es'
                ? 'Debida diligencia comercial y estratégica'
                : lang === 'pt'
                  ? 'Due diligence comercial e estratégica'
                  : 'Коммерческая и стратегическая проверка',
        lang === 'en'
          ? 'Market and competitive analysis'
          : lang === 'tr'
            ? 'Pazar ve rekabet analizi'
            : lang === 'ar'
              ? 'تحليل السوق والمنافسة'
              : lang === 'es'
                ? 'Análisis de mercado y competencia'
                : lang === 'pt'
                  ? 'Análise de mercado e concorrência'
                  : 'Анализ рынка и конкуренции',
        lang === 'en'
          ? 'Technology and operational assessment'
          : lang === 'tr'
            ? 'Teknoloji ve operasyonel değerlendirme'
            : lang === 'ar'
              ? 'تقييم التكنولوجيا والتشغيل'
              : lang === 'es'
                ? 'Evaluación tecnológica y operativa'
                : lang === 'pt'
                  ? 'Avaliação tecnológica e operacional'
                  : 'Оценка технологии и операций',
        lang === 'en'
          ? 'Synergy identification and value creation planning'
          : lang === 'tr'
            ? 'Sinerji tanımı ve değer yaratma planlaması'
            : lang === 'ar'
              ? 'تحديد التآزر وتخطيط خلق القيمة'
              : lang === 'es'
                ? 'Identificación de sinergias y planificación de creación de valor'
                : lang === 'pt'
                  ? 'Identificação de sinergias e planejamento de criação de valor'
                  : 'Выявление синергии и планирование создания стоимости',
        lang === 'en'
          ? 'Post-merger integration support'
          : lang === 'tr'
            ? 'Birleşme sonrası entegrasyon desteği'
            : lang === 'ar'
              ? 'دعم التكامل بعد الاندماج'
              : lang === 'es'
                ? 'Soporte de integración posterior a la fusión'
                : lang === 'pt'
                  ? 'Suporte de integração pós-fusão'
                  : 'Поддержка интеграции после слияния',
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
