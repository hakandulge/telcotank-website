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
      title: (() => {
        const titleMap: Record<Lang, string> = {
          en: 'Telecom Digital Transformation',
          tr: 'Telekomünikasyon Dijital Dönüşümü',
          ar: 'التحول الرقمي للاتصالات',
          es: 'Transformación Digital de Telecomunicaciones',
          pt: 'Transformação Digital de Telecomunicações',
          ru: 'Цифровая трансформация телекоммуникаций',
          de: 'Digitale Transformation im Telekommbereich',
          fr: 'Transformation numérique des télécommunications',
        }
        return titleMap[lang] || titleMap.en
      })(),
      client: 'Major Telecom Operator',
      metric: '$500M+',
      metricLabel: (() => {
        const labelMap: Record<Lang, string> = {
          en: 'Market opportunity unlocked',
          tr: 'Açığa çıkarılan pazar fırsatı',
          ar: 'فرص السوق المفتوحة',
          es: 'Oportunidad de mercado desbloqueada',
          pt: 'Oportunidade de mercado desbloqueada',
          ru: 'Раскрытая рыночная возможность',
          de: 'Marktchancen erschlossen',
          fr: 'Opportunités de marché débloquées',
        }
        return labelMap[lang] || labelMap.en
      })(),
      industry: 'Telecom',
      capability: 'Transformation Strategy',
      challenge: (() => {
        const challengeMap: Record<Lang, string> = {
          en: 'A major telecom operator faced declining core revenues and needed to identify and capture new growth opportunities through digital transformation.',
          tr: 'Büyük bir telekomünikasyon operatörü, çekirdek gelirlerde düşüş yaşadı ve dijital dönüşüm yoluyla yeni büyüme fırsatlarını belirleme ve yakalama ihtiyacı duydu.',
          ar: 'واجهت شركة اتصالات كبرى انخفاضاً في الإيرادات الأساسية واحتاجت إلى تحديد والتقاط فرص نمو جديدة من خلال التحول الرقمي.',
          es: 'Un operador de telecomunicaciones importante enfrentaba ingresos principales en declive y necesitaba identificar y capturar nuevas oportunidades de crecimiento a través de la transformación digital.',
          pt: 'Uma grande operadora de telecomunicações enfrentava declínio de receitas principais e precisava identificar e capturar novas oportunidades de crescimento por meio da transformação digital.',
          ru: 'Крупный оператор телекоммуникаций столкнулся со снижением основных доходов и нуждался в определении и захвате новых возможностей роста посредством цифровой трансформации.',
          de: 'Ein großer Telekommunikationsbetreiber war mit sinkenden Kerneinkünften konfrontiert und musste neue Wachstumschancen durch digitale Transformation identifizieren und nutzen.',
          fr: 'Un grand opérateur de télécommunications a été confronté au déclin des revenus de base et avait besoin d\'identifier et de capturer les nouvelles opportunités de croissance grâce à la transformation numérique.',
        }
        return challengeMap[lang] || challengeMap.en
      })(),
      approach: (() => {
        const approachMap: Record<Lang, string> = {
          en: 'We conducted comprehensive market analysis, developed a digital transformation strategy, and created a detailed execution roadmap covering organizational design, technology architecture, and go-to-market strategy.',
          tr: 'Kapsamlı pazar analizi yaparak, dijital dönüşüm stratejisi geliştirdik ve kuruluş tasarımı, teknoloji mimarisi ve pazar sunumu stratejisini kapsayan ayrıntılı bir uygulama yol haritası oluşturduk.',
          ar: 'أجرينا تحليلاً شاملاً للسوق، وطورنا استراتيجية التحول الرقمي، وأنشأنا خريطة طريق تنفيذ مفصلة تغطي تصميم المنظمة وعمارة التكنولوجيا واستراتيجية الدخول إلى السوق.',
          es: 'Realizamos un análisis integral del mercado, desarrollamos una estrategia de transformación digital y creamos una hoja de ruta de ejecución detallada que cubre el diseño organizacional, la arquitectura tecnológica y la estrategia de entrada al mercado.',
          pt: 'Realizamos uma análise abrangente do mercado, desenvolvemos uma estratégia de transformação digital e criamos um roteiro de execução detalhado cobrindo design organizacional, arquitetura tecnológica e estratégia de entrada no mercado.',
          ru: 'Мы провели комплексный анализ рынка, разработали стратегию цифровой трансформации и создали подробную дорожную карту реализации, охватывающую организационный дизайн, архитектуру технологии и стратегию выхода на рынок.',
          de: 'Wir führten eine umfassende Marktanalyse durch, entwickelten eine Strategie zur digitalen Transformation und erstellten eine detaillierte Umsetzungs-Roadmap, die Organisationsdesign, Technologiearchitektur und Go-to-Market-Strategie abdeckt.',
          fr: 'Nous avons mené une analyse de marché complète, développé une stratégie de transformation numérique et créé une feuille de route d\'exécution détaillée couvrant la conception organisationnelle, l\'architecture technologique et la stratégie d\'entrée sur le marché.',
        }
        return approachMap[lang] || approachMap.en
      })(),
      results: (() => {
        const resultsMap: Record<Lang, string[]> = {
          en: [
            '$500M+ market opportunity identified and strategy developed',
            'Digital transformation roadmap with clear execution milestones',
            'New organizational model designed for digital capabilities',
            'Partnership ecosystem strategy for accelerated market entry',
          ],
          tr: [
            '$500M+ pazar fırsatı tanımlandı ve strateji geliştirildi',
            'Açık uygulama kilometre taşlarıyla dijital dönüşüm yol haritası',
            'Dijital yetenekler için tasarlanan yeni kuruluş modeli',
            'Hızlandırılmış pazar girişi için ortaklık ekosistemi stratejisi',
          ],
          ar: [
            'تم تحديد فرصة سوق بقيمة 500 مليون دولار+ وتطوير الإستراتيجية',
            'خريطة طريق التحول الرقمي مع معالم تنفيذ واضحة',
            'نموذج تنظيمي جديد مصمم للقدرات الرقمية',
            'استراتيجية نظام الشراكات للدخول السريع إلى السوق',
          ],
          es: [
            'Oportunidad de mercado de $500M+ identificada y estrategia desarrollada',
            'Hoja de ruta de transformación digital con hitos de ejecución claros',
            'Nuevo modelo organizacional diseñado para capacidades digitales',
            'Estrategia de ecosistema de asociaciones para entrada acelerada al mercado',
          ],
          pt: [
            'Oportunidade de mercado de $500M+ identificada e estratégia desenvolvida',
            'Roteiro de transformação digital com marcos de execução claros',
            'Novo modelo organizacional projetado para capacidades digitais',
            'Estratégia de ecossistema de parceria para entrada acelerada ao mercado',
          ],
          ru: [
            '$500M+ рыночная возможность выявлена и стратегия разработана',
            'Дорожная карта цифровой трансформации с четкими этапами реализации',
            'Новая организационная модель, разработанная для цифровых возможностей',
            'Стратегия экосистемы партнерства для ускоренного входа на рынок',
          ],
          de: [
            'Marktchance von über 500 Mio. USD identifiziert und Strategie entwickelt',
            'Digitale Transformations-Roadmap mit klaren Umsetzungsmeilensteinen',
            'Neues Organisationsmodell für digitale Fähigkeiten konzipiert',
            'Partnerschafts-Ökosystem-Strategie für beschleunigten Markteintritt',
          ],
          fr: [
            'Opportunité de marché de 500 M$ + identifiée et stratégie développée',
            'Feuille de route de transformation numérique avec jalons d\'exécution clairs',
            'Nouveau modèle organisationnel conçu pour les capacités numériques',
            'Stratégie d\'écosystème de partenariat pour une entrée accélérée sur le marché',
          ],
        }
        return resultsMap[lang] || resultsMap.en
      })(),
    },
    {
      title: (() => {
        const titleMap: Record<Lang, string> = {
          en: 'Telco Growth Acceleration',
          tr: 'Telko Büyüme Hızlandırması',
          ar: 'تسريع نمو شركات الاتصالات',
          es: 'Aceleración del Crecimiento de Telco',
          pt: 'Aceleração do Crescimento de Telco',
          ru: 'Ускорение роста телеком',
          de: 'Beschleunigung des Telco-Wachstums',
          fr: 'Accélération de la croissance Telco',
        }
        return titleMap[lang] || titleMap.en
      })(),
      client: 'Major Telecom Operator',
      metric: '300%',
      metricLabel: (() => {
        const labelMap: Record<Lang, string> = {
          en: 'Enterprise services growth',
          tr: 'Kurumsal hizmetler büyümesi',
          ar: 'نمو الخدمات المؤسسية',
          es: 'Crecimiento de servicios empresariales',
          pt: 'Crescimento dos serviços corporativos',
          ru: 'Рост корпоративных услуг',
          de: 'Wachstum der Unternehmensdienstleistungen',
          fr: 'Croissance des services aux entreprises',
        }
        return labelMap[lang] || labelMap.en
      })(),
      industry: 'Telecom',
      capability: 'Strategic Implementation',
      challenge: (() => {
        const challengeMap: Record<Lang, string> = {
          en: 'A major telco operator was trapped in single-digit growth due to market saturation and declining ARPU. Traditional revenue streams were stagnating, and further growth in mobile and broadband penetration was nearly impossible.',
          tr: 'Büyük bir telko operatörü pazar doygunluğu ve düşen ARPU nedeniyle tek haneli büyümeye sıkışmıştı. Geleneksel gelir akışları durağanlaşıyor ve mobil ve geniş bant penetrasyonunda daha fazla büyüme neredeyse imkansızdı.',
          ar: 'كانت شركة تشغيل telco كبيرة عالقة في نمو أحادي الرقم بسبب تشبع السوق وانخفاض ARPU. كانت تدفقات الإيرادات التقليدية ركودية، وكان النمو الإضافي في اختراق الهاتف المحمول والإنترنت عريض النطاق شبه مستحيل.',
          es: 'Un operador de telco importante estaba atrapado en un crecimiento de un dígito debido a la saturación del mercado y el declive del ARPU. Los flujos de ingresos tradicionales se estancaban y un crecimiento adicional en la penetración móvil y de banda ancha era casi imposible.',
          pt: 'Um operador de telco importante estava preso ao crescimento de um dígito devido à saturação do mercado e ao declínio do ARPU. Os fluxos de receita tradicionais estavam estagnados e o crescimento adicional na penetração móvel e banda larga era quase impossível.',
          ru: 'Крупный оператор telco был в ловушке однозначного роста из-за насыщения рынка и снижения ARPU. Традиционные потоки доходов стагнировали, и дальнейший рост мобильной и широкополосной проникновения был практически невозможен.',
          de: 'Ein großer Telco-Betreiber war im einstelligen Wachstum gefangen, da der Markt gesättigt war und der ARPU sank. Traditionelle Einnahmequellen stagnieren, und weiteres Wachstum bei der Durchdringung von Mobilfunk und Breitband war nahezu unmöglich.',
          fr: 'Un grand opérateur telco était piégé dans une croissance d\'un seul chiffre en raison de la saturation du marché et du déclin de l\'ARPU. Les flux de revenus traditionnels stagnaient et une croissance supplémentaire de la pénétration mobile et haut débit était pratiquement impossible.',
        }
        return challengeMap[lang] || challengeMap.en
      })(),
      approach: (() => {
        const approachMap: Record<Lang, string> = {
          en: 'We repositioned the operator from a connectivity provider to a national ICT and BPO leader. Our strategy focused on monetizing enterprise services — launching Data Center Management, Cybersecurity as a Service, SaaS-based enterprise tools, AI-powered IT support, and Call Center as a Service. We secured government partnerships in cybersecurity, fintech, insurtech, and energy-tech, creating recurring high-margin revenue streams.',
          tr: 'Operatörü bir bağlantı sağlayıcısından ulusal bir ICT ve BPO liderine konumlandırdık. Stratejimiz kurumsal hizmetleri para kazanmaya odaklandı—Veri Merkezi Yönetimi, Hizmet Olarak Siber Güvenlik, SaaS tabanlı kurumsal araçlar, AI destekli BT desteği ve Hizmet Olarak Çağrı Merkezi başlatma. Siber güvenlik, fintech, insurtech ve enerji-teknikde hükümet ortaklıkları sağladık ve yinelenen yüksek marj gelir akışları oluşturduk.',
          ar: 'أعدنا موضع المشغل من موفر اتصالات إلى قائد ICT و BPO وطني. ركزت إستراتيجيتنا على تحقيق الإيرادات من الخدمات المؤسسية—إطلاق إدارة مركز البيانات والأمن السيبراني كخدمة والأدوات المؤسسية المستندة إلى SaaS ودعم تكنولوجيا المعلومات المدعوم بالذكاء الاصطناعي ومركز الاتصال كخدمة. لقد حققنا شراكات حكومية في الأمن السيبراني و fintech و insurtech و energy-tech، مما خلق تدفقات إيرادات متكررة بهامش عالي.',
          es: 'Reposicionamos al operador de proveedor de conectividad a líder nacional de ICT y BPO. Nuestra estrategia se enfocó en monetizar servicios empresariales—lanzamiento de gestión de centros de datos, ciberseguridad como servicio, herramientas empresariales basadas en SaaS, soporte de TI impulsado por IA y centro de llamadas como servicio. Aseguramos asociaciones gubernamentales en ciberseguridad, fintech, insurtech y energy-tech, creando flujos de ingresos recurrentes de alto margen.',
          pt: 'Reposicionamos o operador de provedor de conectividade para líder nacional de ICT e BPO. Nossa estratégia focou em monetizar serviços corporativos—lançamento de gerenciamento de centros de dados, cibersegurança como serviço, ferramentas corporativas baseadas em SaaS, suporte de TI alimentado por IA e centro de chamadas como serviço. Garantimos parcerias governamentais em cibersegurança, fintech, insurtech e energy-tech, criando fluxos de receita recorrentes de alto margem.',
          ru: 'Мы переположили оператора от поставщика подключения к национальному лидеру ИКТ и BPO. Наша стратегия была сосредоточена на монетизации корпоративных услуг—запуск управления центром обработки данных, кибербезопасность как услуга, корпоративные инструменты на основе SaaS, поддержка ИТ на основе ИИ и центр обработки вызовов как услуга. Мы обеспечили государственные партнерства в области кибербезопасности, fintech, insurtech и energy-tech, создав повторяющиеся потоки доходов с высокой маржей.',
          de: 'Wir positionierten den Betreiber von einem Konnektivitätsanbieter zu einem nationalen ICT- und BPO-Anführer um. Unsere Strategie konzentrierte sich auf die Monetarisierung von Unternehmensdiensten – Start von Datencenter-Management, Cybersicherheit als Service, SaaS-basierte Unternehmenstools, KI-gestützte IT-Unterstützung und Call Center als Service. Wir sicherten Regierungspartnerschaften in Cybersicherheit, Fintech, Insurtech und Energy-Tech und schufen wiederkehrende hochmargige Einnahmequellen.',
          fr: 'Nous avons repositionné l\'opérateur d\'un fournisseur de connectivité à un leader national des TIC et du BPO. Notre stratégie s\'est concentrée sur la monétisation des services d\'entreprise – lancement de la gestion des centres de données, cybersécurité en tant que service, outils d\'entreprise basés sur le cloud, support informatique alimenté par l\'IA et centre d\'appels en tant que service. Nous avons sécurisé des partenariats gouvernementaux en cybersécurité, fintech, insurtech et energy-tech, créant des flux de revenus récurrents à haut rendement.',
        }
        return approachMap[lang] || approachMap.en
      })(),
      results: (() => {
        const resultsMap: Record<Lang, string[]> = {
          en: [
            '$500M+ market unlocked by shifting from connectivity to enterprise and government digital services',
            '40% ARPU increase reversing years of decline through ICT-based monetization',
            '300% growth in enterprise services, creating a $1B+ long-term pipeline over 5 years',
            'Strategic government partnerships secured for data center operations, cybersecurity frameworks, and energy-tech innovations',
          ],
          tr: [
            'Bağlantıdan kurumsal ve devlet dijital hizmetlerine geçişle $500M+ pazar açıldı',
            'ICT tabanlı monetizasyon yoluyla yıllardır süren düşüşü tersine çeviren %40 ARPU artışı',
            '5 yıl içinde $1B+ uzun vadeli iş hattı oluşturan kurumsal hizmetlerde %300 büyüme',
            'Veri merkezi operasyonları, siber güvenlik çerçeveleri ve enerji-teknoloji yenilikleri için stratejik devlet ortaklıkları sağlandı',
          ],
          ar: [
            'تم فتح سوق بقيمة $500M+ من خلال التحول من الاتصالات إلى الخدمات الرقمية للمؤسسات والحكومة',
            'زيادة ARPU بنسبة 40% عكس سنوات من الانخفاض من خلال تحقيق الإيرادات المستندة إلى ICT',
            'نمو 300% في الخدمات المؤسسية، مما يخلق خط أنابيب طويل الأجل بقيمة 1 مليار دولار+ على مدى 5 سنوات',
            'تم تأمين شراكات حكومية استراتيجية لعمليات مراكز البيانات وأطر الأمن السيبراني وابتكارات energy-tech',
          ],
          es: [
            'Mercado de $500M+ desbloqueado al cambiar de conectividad a servicios digitales empresariales y gubernamentales',
            'Aumento de ARPU del 40% invirtiendo años de declive a través de la monetización basada en ICT',
            'Crecimiento del 300% en servicios empresariales, creando una canalización a largo plazo de $1B+ en 5 años',
            'Asociaciones gubernamentales estratégicas aseguradas para operaciones de centros de datos, marcos de ciberseguridad e innovaciones de energy-tech',
          ],
          pt: [
            'Mercado de $500M+ desbloqueado ao mudar de conectividade para serviços digitais corporativos e governamentais',
            'Aumento de ARPU de 40% revertendo anos de declínio por meio de monetização baseada em ICT',
            'Crescimento de 300% nos serviços corporativos, criando um pipeline de longo prazo de $1B+ em 5 anos',
            'Parcerias governamentais estratégicas garantidas para operações de centros de dados, estruturas de cibersegurança e inovações de energy-tech',
          ],
          ru: [
            'Рынок на сумму 500 млн. долларов+ открыт благодаря переходу от подключения к корпоративным и государственным цифровым услугам',
            'Увеличение ARPU на 40%, обращающее вспять многолетний спад благодаря монетизации на основе ИКТ',
            'Рост на 300% в корпоративных услугах, создав долгосрочный конвейер на сумму 1 млрд. долларов+ за 5 лет',
            'Обеспечены стратегические государственные партнерства для операций центров обработки данных, структур кибербезопасности и инноваций energy-tech',
          ],
          de: [
            'Markt von über 500 Mio. USD erschlossen durch Verlagerung von Konnektivität auf Enterprise- und Government-Dienste',
            '40% ARPU-Steigerung, die jahrelangen Rückgang durch ICT-basierte Monetarisierung rückgängig macht',
            '300% Wachstum in Unternehmensdiensten, schaffung einer langfristigen Pipeline von über 1 Milliarde US-Dollar über 5 Jahre',
            'Strategische Regierungspartnerschaften für Rechenzentrumsbetrieb, Cybersicherheits-Frameworks und Energy-Tech-Innovationen gesichert',
          ],
          fr: [
            'Marché de 500 M$ + débloqué en passant de la connectivité aux services numériques d\'entreprise et gouvernementaux',
            'Augmentation de 40% de l\'ARPU, inversant le déclin pluriannuel grâce à la monétisation basée sur les TIC',
            'Croissance de 300% dans les services d\'entreprise, créant un pipeline à long terme de plus de 1 milliard de dollars sur 5 ans',
            'Partenariats gouvernementaux stratégiques sécurisés pour les opérations des centres de données, les cadres de cybersécurité et les innovations energy-tech',
          ],
        }
        return resultsMap[lang] || resultsMap.en
      })(),
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
                      {(() => {
                        const labelMap: Record<Lang, string> = {
                          en: 'Challenge',
                          tr: 'Zorluk',
                          ar: 'التحدي',
                          es: 'Desafío',
                          pt: 'Desafio',
                          ru: 'Вызов',
                          de: 'Herausforderung',
                          fr: 'Défi',
                        }
                        return labelMap[lang] || labelMap.en
                      })()}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {(() => {
                        const labelMap: Record<Lang, string> = {
                          en: 'Approach',
                          tr: 'Yaklaşım',
                          ar: 'النهج',
                          es: 'Enfoque',
                          pt: 'Abordagem',
                          ru: 'Подход',
                          de: 'Ansatz',
                          fr: 'Approche',
                        }
                        return labelMap[lang] || labelMap.en
                      })()}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{cs.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      {(() => {
                        const labelMap: Record<Lang, string> = {
                          en: 'Results',
                          tr: 'Sonuçlar',
                          ar: 'النتائج',
                          es: 'Resultados',
                          pt: 'Resultados',
                          ru: 'Результаты',
                          de: 'Ergebnisse',
                          fr: 'Résultats',
                        }
                        return labelMap[lang] || labelMap.en
                      })()}
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
