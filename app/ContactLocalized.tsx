'use client'

import ContactForm from '@/components/ContactForm'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

interface ContactLocalizedProps {
  lang: Lang
}

export default function ContactLocalized({ lang }: ContactLocalizedProps) {
  const t = translations[lang]

  const L: Record<string, Record<string, string>> = {
    scheduleLabel: { en: 'Schedule & Meet', tr: 'Programla ve Buluş', ar: 'جدول وقابل', es: 'Programar y Reunirse', pt: 'Agendar e Encontrar', ru: 'Расписание и встреча', de: 'Termin & Treffen', fr: 'Planifier & Rencontrer' },
    officeLabel: { en: 'Office', tr: 'Ofis', ar: 'مكتب', es: 'Oficina', pt: 'Escritório', ru: 'Офис', de: 'Büro', fr: 'Bureau' },
    phoneLabel: { en: 'Phone', tr: 'Telefon', ar: 'هاتف', es: 'Teléfono', pt: 'Telefone', ru: 'Телефон', de: 'Telefon', fr: 'Téléphone' },
    faxLabel: { en: 'Fax', tr: 'Faks', ar: 'فاكس', es: 'Fax', pt: 'Fax', ru: 'Факс', de: 'Fax', fr: 'Fax' },
    emailLabel: { en: 'Email', tr: 'E-posta', ar: 'بريد إلكتروني', es: 'Correo Electrónico', pt: 'E-mail', ru: 'Электронная почта', de: 'E-Mail', fr: 'E-mail' },
    linkedinLabel: { en: 'LinkedIn', tr: 'LinkedIn', ar: 'لينكدإن', es: 'LinkedIn', pt: 'LinkedIn', ru: 'LinkedIn', de: 'LinkedIn', fr: 'LinkedIn' },
    globalPresenceLabel: { en: 'Global Presence', tr: 'Küresel Varlık', ar: 'الحضور العالمي', es: 'Presencia Global', pt: 'Presença Global', ru: 'Глобальное присутствие', de: 'Globale Präsenz', fr: 'Présence Mondiale' },
    globalPresenceDescription: {
      en: 'Projects delivered across 40 countries in Americas, Europe, Middle East, Africa, and Asia.',
      tr: 'Amerika, Avrupa, Orta Doğu, Afrika ve Asya\'da 40 ülkede projeler teslim edildi.',
      ar: 'تم تسليم المشاريع عبر 40 دولة في الأمريكيتين وأوروبا والشرق الأوسط وأفريقيا وآسيا.',
      es: 'Proyectos entregados en 40 países en las Américas, Europa, Oriente Medio, África y Asia.',
      pt: 'Projetos entregues em 40 países nas Américas, Europa, Oriente Médio, África e Ásia.',
      ru: 'Проекты реализованы в 40 странах Америки, Европы, Ближнего Востока, Африки и Азии.',
      de: 'Projekte in 40 Ländern in Amerika, Europa, Naher Osten, Afrika und Asien.',
      fr: 'Projets livrés dans 40 pays en Amérique, Europe, Moyen-Orient, Afrique et Asie.',
    },
    heroTitle: {
      en: 'Discuss Your Transformation Challenge',
      tr: 'Dönüşüm Zorluğunuzu Tartışın',
      ar: 'ناقش تحديات التحول الخاصة بك',
      es: 'Discuta Su Desafío de Transformación',
      pt: 'Discuta Seu Desafio de Transformação',
      ru: 'Обсудите свой трансформационный вызов',
      de: 'Besprechen Sie Ihre Transformations-Herausforderung',
      fr: 'Discutez de votre défi de transformation',
    },
    heroDescription: {
      en: 'Whether you are navigating digital transformation, exploring new markets, or seeking strategic clarity on AI adoption, we are ready to help.',
      tr: 'Dijital dönüşümde ilerliyorsanız, yeni pazarlar keşfediyorsanız veya AI benimsemede stratejik netlik arıyorsanız, yardımcı olmaya hazırız.',
      ar: 'سواء كنت تتنقل في التحول الرقمي أو تستكشف أسواقاً جديدة أو تسعى إلى الوضوح الاستراتيجي بشأن اعتماد الذكاء الاصطناعي، فنحن مستعدون للمساعدة.',
      es: 'Ya sea que navegue la transformación digital, explore nuevos mercados o busque claridad estratégica sobre la adopción de IA, estamos listos para ayudar.',
      pt: 'Seja você navegando na transformação digital, explorando novos mercados ou buscando clareza estratégica sobre adoção de IA, estamos prontos para ajudar.',
      ru: 'Независимо от того, ориентируетесь ли вы в цифровой трансформации, изучаете новые рынки или ищете стратегическую ясность в отношении внедрения ИИ, мы готовы помочь.',
      de: 'Ob Sie digitale Transformation navigieren, neue Märkte erkunden oder strategische Klarheit über KI-Adoption suchen – wir sind bereit zu helfen.',
      fr: 'Que vous naviguiez dans la transformation numérique, exploriez de nouveaux marchés ou cherchiez une clarté stratégique sur l\'adoption de l\'IA, nous sommes prêts à vous aider.',
    },
    scheduleMeeting: { en: 'Schedule a Meeting', tr: 'Toplantı Planlayın', ar: 'جدول اجتماع', es: 'Programar una Reunión', pt: 'Agendar uma Reunião', ru: 'Запланировать встречу', de: 'Termin vereinbaren', fr: 'Planifier une réunion' },
    joinGoogleMeet: { en: 'Join Google Meet', tr: 'Google Meet\'e Katıl', ar: 'انضم إلى Google Meet', es: 'Únirse a Google Meet', pt: 'Ingressar no Google Meet', ru: 'Присоединиться к Google Meet', de: 'Google Meet beitreten', fr: 'Rejoindre Google Meet' },
  }
  const g = (key: string) => L[key]?.[lang] || L[key]?.en || ''

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column */}
            <div>
              <h1 className="font-serif text-4xl font-semibold text-[#0A2540] md:text-5xl">
                {g('heroTitle')}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {g('heroDescription')}
              </p>
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {g('scheduleLabel')}
                  </h3>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://calendar.app.google/9h45a7VnNFDGYVzG8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {g('scheduleMeeting')}
                    </a>
                    <a
                      href="https://meet.google.com/ntt-vpge-shj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0A2540] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a3a5c]"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M15.5 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53L15.5 13.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect x="2" y="6" width="13.5" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      {g('joinGoogleMeet')}
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {g('officeLabel')}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">6800 Jericho Turnpike, Suite 120W, Syosset, NY 11791</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {g('phoneLabel')}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">
                    <a href="tel:+13475147470" className="text-gray-900 hover:text-[#2563EB]">
                      +1 (347) 514-7470
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {g('faxLabel')}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">+1 (347) 514-7471</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {g('emailLabel')}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">
                    <a href="mailto:info@telcotank.com" className="text-gray-900 hover:text-[#2563EB]">
                      info@telcotank.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {g('linkedinLabel')}
                  </h3>
                  <a
                    href="https://www.linkedin.com/company/telcotank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-base text-[#2563EB] hover:text-[#1D4ED8]"
                  >
                    linkedin.com/company/telcotank
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {g('globalPresenceLabel')}
                  </h3>
                  <p className="mt-2 text-base text-gray-700">{g('globalPresenceDescription')}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>
    </div>
  )
}
