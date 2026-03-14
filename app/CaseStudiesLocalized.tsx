'use client'

import Link from '@/components/Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

interface CaseStudiesLocalizedProps {
  lang: Lang
}

interface CaseStudy {
  title: string
  client: string
  metric: string
  metricLabel: string
  industry: string
  capability: string
  challenge: string
  approach: string
  results: string[]
}

export default function CaseStudiesLocalized({ lang }: CaseStudiesLocalizedProps) {
  const t = translations[lang]

  // Case studies data - keeping English for case-specific content
  const caseStudies: CaseStudy[] = [
    {
      title:
        lang === 'en'
          ? 'Telecom Digital Transformation'
          : lang === 'tr'
            ? 'Telekomünikasyon Dijital Dönüşümü'
            : lang === 'ar'
              ? 'التحول الرقمي للاتصالات'
              : lang === 'es'
                ? 'Transformación Digital de Telecomunicaciones'
                : lang === 'pt'
                  ? 'Transformação Digital de Telecomunicações'
                  : 'Цифровая трансформация телекоммуникаций',
      client: 'Major Telecom Operator',
      metric: '$500M+',
      metricLabel:
        lang === 'en'
          ? 'Market opportunity unlocked'
          : lang === 'tr'
            ? 'Açığa çıkarılan pazar fırsatı'
            : lang === 'ar'
              ? 'فرص السوق المفتوحة'
              : lang === 'es'
                ? 'Oportunidad de mercado desbloqueada'
                : lang === 'pt'
                  ? 'Oportunidade de mercado desbloqueada'
                  : 'Раскрытая рыночная возможность',
      industry: 'Telecom',
      capability: 'Transformation Strategy',
      challenge:
        lang === 'en'
          ? 'A major telecom operator faced declining core revenues and needed to identify and capture new growth opportunities through digital transformation.'
          : lang === 'tr'
            ? 'Büyük bir telekomünikasyon operatörü, çekirdek gelirlerde düşüş yaşadı ve dijital dönüşüm yoluyla yeni büyüme fırsatlarını belirleme ve yakalama ihtiyacı duydu.'
            : lang === 'ar'
              ? 'واجهت شركة اتصالات كبرى انخفاضاً في الإيرادات الأساسية واحتاجت إلى تحديد والتقاط فرص نمو جديدة من خلال التحول الرقمي.'
              : lang === 'es'
                ? 'Un operador de telecomunicaciones importante enfrentaba ingresos principales en declive y necesitaba identificar y capturar nuevas oportunidades de crecimiento a través de la transformación digital.'
                : lang === 'pt'
                  ? 'Uma grande operadora de telecomunicações enfrentava declínio de receitas principais e precisava identificar e capturar novas oportunidades de crescimento por meio da transformação digital.'
                  : 'Крупный оператор телекоммуникаций столкнулся со снижением основных доходов и нуждался в определении и захвате новых возможностей роста посредством цифровой трансформации.',
      approach:
        lang === 'en'
          ? 'We conducted comprehensive market analysis, developed a digital transformation strategy, and created a detailed execution roadmap covering organizational design, technology architecture, and go-to-market strategy.'
          : lang === 'tr'
            ? 'Kapsamlı pazar analizi yaparak, dijital dönüşüm stratejisi geliştirdik ve kuruluş tasarımı, teknoloji mimarisi ve pazar sunumu stratejisini kapsayan ayrıntılı bir uygulama yol haritası oluşturduk.'
            : lang === 'ar'
              ? 'أجرينا تحليلاً شاملاً للسوق، وطورنا استراتيجية التحول الرقمي، وأنشأنا خريطة طريق تنفيذ مفصلة تغطي تصميم المنظمة وعمارة التكنولوجيا واستراتيجية الدخول إلى السوق.'
              : lang === 'es'
                ? 'Realizamos un análisis integral del mercado, desarrollamos una estrategia de transformación digital y creamos una hoja de ruta de ejecución detallada que cubre el diseño organizacional, la arquitectura tecnológica y la estrategia de entrada al mercado.'
                : lang === 'pt'
                  ? 'Realizamos uma análise abrangente do mercado, desenvolvemos uma estratégia de transformação digital e criamos um roteiro de execução detalhado cobrindo design organizacional, arquitetura tecnológica e estratégia de entrada no mercado.'
                  : 'Мы провели комплексный анализ рынка, разработали стратегию цифровой трансформации и создали подробную дорожную карту реализации, охватывающую организационный дизайн, архитектуру технологии и стратегию выхода на рынок.',
      results: [
        lang === 'en'
          ? '$500M+ market opportunity identified and strategy developed'
          : lang === 'tr'
            ? '500 млн. долл.+ рыночная возможность выявлена и стратегия разработана'
            : lang === 'ar'
              ? 'تم تحديد فرصة سوق بقيمة 500 مليون دولار+ وتطوير الإستراتيجية'
              : lang === 'es'
                ? 'Oportunidad de mercado de $500M+ identificada y estrategia desarrollada'
                : lang === 'pt'
                  ? 'Oportunidade de mercado de $500M+ identificada e estratégia desenvolvida'
                  : '$500M+ рыночная возможность выявлена и стратегия разработана',
        lang === 'en'
          ? 'Digital transformation roadmap with clear execution milestones'
          : lang === 'tr'
            ? 'Açık uygulama kilometre taşlarıyla dijital dönüşüm yol haritası'
            : lang === 'ar'
              ? 'خريطة طريق التحول الرقمي مع معالم تنفيذ واضحة'
              : lang === 'es'
                ? 'Hoja de ruta de transformación digital con hitos de ejecución claros'
                : lang === 'pt'
                  ? 'Roteiro de transformação digital com marcos de execução claros'
                  : 'Дорожная карта цифровой трансформации с четкими этапами реализации',
        lang === 'en'
          ? 'New organizational model designed for digital capabilities'
          : lang === 'tr'
            ? 'Dijital yetenekler için tasarlanan yeni kuruluş modeli'
            : lang === 'ar'
              ? 'نموذج تنظيمي جديد مصمم للقدرات الرقمية'
              : lang === 'es'
                ? 'Nuevo modelo organizacional diseñado para capacidades digitales'
                : lang === 'pt'
                  ? 'Novo modelo organizacional projetado para capacidades digitais'
                  : 'Новая организационная модель, разработанная для цифровых возможностей',
        lang === 'en'
          ? 'Partnership ecosystem strategy for accelerated market entry'
          : lang === 'tr'
            ? 'Hızlandırılmış pazar giriş için ortaklık ekosistemi stratejisi'
            : lang === 'ar'
              ? 'استراتيجية نظام الشراكات للدخول السريع إلى السوق'
              : lang === 'es'
                ? 'Estrategia de ecosistema de asociaciones para entrada acelerada al mercado'
                : lang === 'pt'
                  ? 'Estratégia de ecossistema de parceria para entrada acelerada ao mercado'
                  : 'Стратегия экосистемы партнерства для ускоренного входа на рынок',
      ],
    },
    {
      title:
        lang === 'en'
          ? 'Telco Growth Acceleration'
          : lang === 'tr'
            ? 'Telko Büyüme Hızlandırması'
            : lang === 'ar'
              ? 'تسريع نمو شركات الاتصالات'
              : lang === 'es'
                ? 'Aceleración del Crecimiento de Telco'
                : lang === 'pt'
                  ? 'Aceleração do Crescimento de Telco'
                  : 'Ускорение роста телеком',
      client: 'Major Telecom Operator',
      metric: '300%',
      metricLabel:
        lang === 'en'
          ? 'Enterprise services growth'
          : lang === 'tr'
            ? 'Kurumsal hizmetler büyümesi'
            : lang === 'ar'
              ? 'نمو الخدمات المؤسسية'
              : lang === 'es'
                ? 'Crecimiento de servicios empresariales'
                : lang === 'pt'
                  ? 'Crescimento dos serviços corporativos'
                  : 'Рост корпоративных услуг',
      industry: 'Telecom',
      capability: 'Strategic Implementation',
      challenge:
        lang === 'en'
          ? 'A major telco operator was trapped in single-digit growth due to market saturation and declining ARPU. Traditional revenue streams were stagnating, and further growth in mobile and broadband penetration was nearly impossible.'
          : lang === 'tr'
            ? 'Büyük bir telko operatörü pazar doygunluğu ve düşen ARPU nedeniyle tek haneli büyümeye sıkışmıştı. Geleneksel gelir akışları durağanlaşıyor ve mobil ve geniş bant penetrasyonunda daha fazla büyüme neredeyse imkansızdı.'
            : lang === 'ar'
              ? 'كانت شركة تشغيل telco كبيرة عالقة في نمو أحادي الرقم بسبب تشبع السوق وانخفاض ARPU. كانت تدفقات الإيرادات التقليدية ركودية، وكان النمو الإضافي في اختراق الهاتف المحمول والإنترنت عريض النطاق شبه مستحيل.'
              : lang === 'es'
                ? 'Un operador de telco importante estaba atrapado en un crecimiento de un dígito debido a la saturación del mercado y el declive del ARPU. Los flujos de ingresos tradicionales se estancaban y un crecimiento adicional en la penetración móvil y de banda ancha era casi imposible.'
                : lang === 'pt'
                  ? 'Um operador de telco importante estava preso ao crescimento de um dígito devido à saturação do mercado e ao declínio do ARPU. Os fluxos de receita tradicionais estavam estagnados e o crescimento adicional na penetração móvel e banda larga era quase impossível.'
                  : 'Крупный оператор telco был в ловушке однозначного роста из-за насыщения рынка и снижения ARPU. Традиционные потоки доходов стагнировали, и дальнейший рост мобильной и широкополосной проникновения был практически невозможен.',
      approach:
        lang === 'en'
          ? 'We repositioned the operator from a connectivity provider to a national ICT and BPO leader. Our strategy focused on monetizing enterprise services — launching Data Center Management, Cybersecurity as a Service, SaaS-based enterprise tools, AI-powered IT support, and Call Center as a Service. We secured government partnerships in cybersecurity, fintech, insurtech, and energy-tech, creating recurring high-margin revenue streams.'
          : lang === 'tr'
            ? 'Operatörü bir bağlantı sağlayıcısından ulusal bir ICT ve BPO liderine konumlandırdık. Stratejimiz kurumsal hizmetleri para kazanmaya odaklandı—Veri Merkezi Yönetimi, Hizmet Olarak Siber Güvenlik, SaaS tabanlı kurumsal araçlar, AI destekli BT desteği ve Hizmet Olarak Çağrı Merkezi başlatma. Siber güvenlik, fintech, insurtech ve enerji-teknikde hükümet ortaklıkları sağladık ve yinelenen yüksek marj gelir akışları oluşturduk.'
            : lang === 'ar'
              ? 'أعدنا موضع المشغل من موفر اتصالات إلى قائد ICT و BPO وطني. ركزت إستراتيجيتنا على تحقيق الإيرادات من الخدمات المؤسسية—إطلاق إدارة مركز البيانات والأمن السيبراني كخدمة والأدوات المؤسسية المستندة إلى SaaS ودعم تكنولوجيا المعلومات المدعوم بالذكاء الاصطناعي ومركز الاتصال كخدمة. لقد حققنا شراكات حكومية في الأمن السيبراني و fintech و insurtech و energy-tech، مما خلق تدفقات إيرادات متكررة بهامش عالي.'
              : lang === 'es'
                ? 'Reposicionamos al operador de proveedor de conectividad a líder nacional de ICT y BPO. Nuestra estrategia se enfocó en monetizar servicios empresariales—lanzamiento de gestión de centros de datos, ciberseguridad como servicio, herramientas empresariales basadas en SaaS, soporte de TI impulsado por IA y centro de llamadas como servicio. Aseguramos asociaciones gubernamentales en ciberseguridad, fintech, insurtech y energy-tech, creando flujos de ingresos recurrentes de alto margen.'
                : lang === 'pt'
                  ? 'Reposicionamos o operador de provedor de conectividade para líder nacional de ICT e BPO. Nossa estratégia focou em monetizar serviços corporativos—lançamento de gerenciamento de centros de dados, cibersegurança como serviço, ferramentas corporativas baseadas em SaaS, suporte de TI alimentado por IA e centro de chamadas como serviço. Garantimos parcerias governamentais em cibersegurança, fintech, insurtech e energy-tech, criando fluxos de receita recorrentes de alto margem.'
                  : 'Мы переположили оператора от поставщика подключения к национальному лидеру ИКТ и BPO. Наша стратегия была сосредоточена на монетизации корпоративных услуг—запуск управления центром обработки данных, кибербезопасность как услуга, корпоративные инструменты на основе SaaS, поддержка ИТ на основе ИИ и центр обработки вызовов как услуга. Мы обеспечили государственные партнерства в области кибербезопасности, fintech, insurtech и energy-tech, создав повторяющиеся потоки доходов с высокой маржей.',
      results: [
        lang === 'en'
          ? '$500M+ market unlocked by shifting from connectivity to enterprise and government digital services'
          : lang === 'tr'
            ? 'Bağlantıdan kurumsal ve hükümet dijital hizmetlerine kaymakla açığa çıkarılan 500 млн. dolл.+ pazar'
            : lang === 'ar'
              ? 'تم فتح سوق بقيمة $500M+ من خلال التحول من الاتصالات إلى الخدمات الرقمية للمؤسسات والحكومة'
              : lang === 'es'
                ? 'Mercado de $500M+ desbloqueado al cambiar de conectividad a servicios digitales empresariales y gubernamentales'
                : lang === 'pt'
                  ? 'Mercado de $500M+ desbloqueado ao mudar de conectividade para serviços digitais corporativos e governamentais'
                  : 'Рынок на сумму 500 млн. долларов+ открыт благодаря переходу от подключения к корпоративным и государственным цифровым услугам',
        lang === 'en'
          ? '40% ARPU increase reversing years of decline through ICT-based monetization'
          : lang === 'tr'
            ? 'ICT tabanlı para kazanma aracılığıyla yıllar içinde düşüş geri alan %40 ARPU artışı'
            : lang === 'ar'
              ? 'زيادة ARPU بنسبة 40% عكس سنوات من الانخفاض من خلال تحقيق الإيرادات المستندة إلى ICT'
              : lang === 'es'
                ? 'Aumento de ARPU del 40% invirtiendo años de declive a través de la monetización basada en ICT'
                : lang === 'pt'
                  ? 'Aumento de ARPU de 40% revertendo anos de declínio por meio de monetização baseada em ICT'
                  : 'Увеличение ARPU на 40%, обращающее вспять многолетний спад благодаря монетизации на основе ИКТ',
        lang === 'en'
          ? '300% growth in enterprise services, creating a $1B+ long-term pipeline over 5 years'
          : lang === 'tr'
            ? '5 yıl içinde 1 млрд дол.+ uzun vadeli boru hattı oluşturan kurumsal hizmetlerde %300 büyüme'
            : lang === 'ar'
              ? 'نمو 300% في الخدمات المؤسسية، مما يخلق خط أنابيب طويل الأجل بقيمة 1 مليار دولار+ على مدى 5 سنوات'
              : lang === 'es'
                ? 'Crecimiento del 300% en servicios empresariales, creando una canalización a largo plazo de $1B+ en 5 años'
                : lang === 'pt'
                  ? 'Crescimento de 300% nos serviços corporativos, criando um pipeline de longo prazo de $1B+ em 5 anos'
                  : 'Рост на 300% в корпоративных услугах, создав долгосрочный конвейер на сумму 1 млрд. долларов+ за 5 лет',
        lang === 'en'
          ? 'Strategic government partnerships secured for data center operations, cybersecurity frameworks, and energy-tech innovations'
          : lang === 'tr'
            ? 'Veri merkezi operasyonları, siber güvenlik çerçeveleri ve enerji-teknik yenilikleri için stratejik hükümet ortaklıkları sağlandı'
            : lang === 'ar'
              ? 'تم تأمين شراكات حكومية استراتيجية لعمليات مراكز البيانات وأطر الأمن السيبراني وابتكارات energy-tech'
              : lang === 'es'
                ? 'Asociaciones gubernamentales estratégicas aseguradas para operaciones de centros de datos, marcos de ciberseguridad e innovaciones de energy-tech'
                : lang === 'pt'
                  ? 'Parcerias governamentais estratégicas garantidas para operações de centros de dados, estruturas de cibersegurança e inovações de energy-tech'
                  : 'Обеспечены стратегические государственные партнерства для операций центров обработки данных, структур кибербезопасности и инноваций energy-tech',
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
              {t.caseStudiesPage.provenResults}
            </p>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              {t.caseStudiesPage.caseStudiesTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              {t.caseStudiesPage.caseStudiesSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image — white background, not cropped */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/industries-sector-showcase${langSuffix}_small.png`} />
              <img
                src={`${V}/industries-sector-showcase${langSuffix}.png`}
                alt="Telcotank case studies — transformation results across industries"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {caseStudies.map((cs, idx) => (
        <section
          key={cs.title}
          className={`py-20 md:py-24 ${idx % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Sidebar */}
              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
                    {cs.industry}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
                    {cs.capability}
                  </span>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="text-4xl font-bold text-[#2563EB]">{cs.metric}</div>
                  <div className="mt-1 text-sm text-gray-600">{cs.metricLabel}</div>
                </div>
                <p className="mt-4 text-sm text-gray-500">{cs.client}</p>
              </div>
              {/* Content */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-semibold text-[#0A2540]">{cs.title}</h2>
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {lang === 'en'
                        ? 'Challenge'
                        : lang === 'tr'
                          ? 'Zorluk'
                          : lang === 'ar'
                            ? 'التحدي'
                            : lang === 'es'
                              ? 'Desafío'
                              : lang === 'pt'
                                ? 'Desafio'
                                : 'Вызов'}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {lang === 'en'
                        ? 'Approach'
                        : lang === 'tr'
                          ? 'Yaklaşım'
                          : lang === 'ar'
                            ? 'النهج'
                            : lang === 'es'
                              ? 'Enfoque'
                              : lang === 'pt'
                                ? 'Abordagem'
                                : 'Подход'}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{cs.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {lang === 'en'
                        ? 'Results'
                        : lang === 'tr'
                          ? 'Sonuçlar'
                          : lang === 'ar'
                            ? 'النتائج'
                            : lang === 'es'
                              ? 'Resultados'
                              : lang === 'pt'
                                ? 'Resultados'
                                : 'Результаты'}
                    </h3>
                    <ul className="mt-2 space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2563EB]" />
                          <span className="text-base text-gray-700">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
            {t.caseStudiesSection.whatCouldWeAchieve}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            {t.caseStudiesSection.everyTransformation}
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
