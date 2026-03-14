'use client'

import ContactForm from '@/components/ContactForm'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

interface ContactLocalizedProps {
  lang: Lang
}

export default function ContactLocalized({ lang }: ContactLocalizedProps) {
  const t = translations[lang]

  const scheduleLabel =
    lang === 'en'
      ? 'Schedule & Meet'
      : lang === 'tr'
        ? 'Programla ve Buluş'
        : lang === 'ar'
          ? 'جدول وقابل'
          : lang === 'es'
            ? 'Programar y Reunirse'
            : lang === 'pt'
              ? 'Agendar e Encontrar'
              : 'Расписание и встреча'

  const officeLabel =
    lang === 'en'
      ? 'Office'
      : lang === 'tr'
        ? 'Ofis'
        : lang === 'ar'
          ? 'مكتب'
          : lang === 'es'
            ? 'Oficina'
            : lang === 'pt'
              ? 'Escritório'
              : 'Офис'

  const phoneLabel =
    lang === 'en'
      ? 'Phone'
      : lang === 'tr'
        ? 'Telefon'
        : lang === 'ar'
          ? 'هاتف'
          : lang === 'es'
            ? 'Teléfono'
            : lang === 'pt'
              ? 'Telefone'
              : 'Телефон'

  const faxLabel =
    lang === 'en'
      ? 'Fax'
      : lang === 'tr'
        ? 'Faks'
        : lang === 'ar'
          ? 'فاكس'
          : lang === 'es'
            ? 'Fax'
            : lang === 'pt'
              ? 'Fax'
              : 'Факс'

  const emailLabel =
    lang === 'en'
      ? 'Email'
      : lang === 'tr'
        ? 'E-posta'
        : lang === 'ar'
          ? 'بريد إلكتروني'
          : lang === 'es'
            ? 'Correo Electrónico'
            : lang === 'pt'
              ? 'E-mail'
              : 'Электронная почта'

  const linkedinLabel =
    lang === 'en'
      ? 'LinkedIn'
      : lang === 'tr'
        ? 'LinkedIn'
        : lang === 'ar'
          ? 'لينكدإن'
          : lang === 'es'
            ? 'LinkedIn'
            : lang === 'pt'
              ? 'LinkedIn'
              : 'LinkedIn'

  const globalPresenceLabel =
    lang === 'en'
      ? 'Global Presence'
      : lang === 'tr'
        ? 'Küresel Varlık'
        : lang === 'ar'
          ? 'الحضور العالمي'
          : lang === 'es'
            ? 'Presencia Global'
            : lang === 'pt'
              ? 'Presença Global'
              : 'Глобальное присутствие'

  const globalPresenceDescription =
    lang === 'en'
      ? 'Projects delivered across 40 countries in Americas, Europe, Middle East, Africa, and Asia.'
      : lang === 'tr'
        ? 'Proje Americas, Avrupa, Orta Doğu, Afrika ve Asya\'da 40 ülkede teslim edildi.'
        : lang === 'ar'
          ? 'تم تسليم المشاريع عبر 40 دولة في الأمريكيتين وأوروبا والشرق الأوسط وأفريقيا وآسيا.'
          : lang === 'es'
            ? 'Proyectos entregados en 40 países en las Américas, Europa, Oriente Medio, África y Asia.'
            : lang === 'pt'
              ? 'Projetos entregados em 40 países nas Américas, Europa, Oriente Médio, África e Ásia.'
              : 'Проекты реализованы в 40 странах Америки, Европы, Ближнего Востока, Африки и Азии.'

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column */}
            <div>
              <h1 className="font-serif text-4xl font-semibold text-[#0A2540] md:text-5xl">
                {t.nav.contact === 'Contact'
                  ? 'Discuss Your Transformation Challenge'
                  : t.nav.contact === 'İletişim'
                    ? 'Dönüşüm Zorlunuzu Tartışın'
                    : t.nav.contact === 'اتصل بنا'
                      ? 'ناقش تحديات التحول الخاصة بك'
                      : t.nav.contact === 'Contacto'
                        ? 'Discuta Su Desafío de Transformación'
                        : t.nav.contact === 'Contato'
                          ? 'Discuta Seu Desafio de Transformação'
                          : 'Обсудите свой трансформационный вызов'}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {lang === 'en'
                  ? 'Whether you are navigating digital transformation, exploring new markets, or seeking strategic clarity on AI adoption, we are ready to help.'
                  : lang === 'tr'
                    ? 'Dijital dönüşümde gezinirseniz, yeni pazarları keşfediyorsanız veya AI benimsemede stratejik netlik arıyorsanız, yardımcı olmaya hazırız.'
                    : lang === 'ar'
                      ? 'سواء كنت تتنقل في التحول الرقمي أو تستكشف أسواقاً جديدة أو تسعى إلى الوضوح الاستراتيجي بشأن اعتماد الذكاء الاصطناعي، فنحن مستعدون للمساعدة.'
                      : lang === 'es'
                        ? 'Ya sea que navegue la transformación digital, explore nuevos mercados o busque claridad estratégica sobre la adopción de IA, estamos listos para ayudar.'
                        : lang === 'pt'
                          ? 'Seja você navegando na transformação digital, explorando novos mercados ou buscando clareza estratégica sobre adoção de IA, estamos prontos para ajudar.'
                          : 'Независимо от того, ориентируетесь ли вы в цифровой трансформации, изучаете новые рынки или ищете стратегическую ясность в отношении внедрения ИИ, мы готовы помочь.'}
              </p>
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {scheduleLabel}
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
                      {lang === 'en'
                        ? 'Schedule a Meeting'
                        : lang === 'tr'
                          ? 'Toplantı Planlayın'
                          : lang === 'ar'
                            ? 'جدول اجتماع'
                            : lang === 'es'
                              ? 'Programar una Reunión'
                              : lang === 'pt'
                                ? 'Agendar uma Reunião'
                                : 'Запланировать встречу'}
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
                      {lang === 'en'
                        ? 'Join Google Meet'
                        : lang === 'tr'
                          ? 'Google Meet\'e Katıl'
                          : lang === 'ar'
                            ? 'انضم إلى Google Meet'
                            : lang === 'es'
                              ? 'Únirse a Google Meet'
                              : lang === 'pt'
                                ? 'Ingressar no Google Meet'
                                : 'Присоединиться к Google Meet'}
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {officeLabel}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">6800 Jericho Turnpike, Suite 120W, Syosset, NY 11791</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {phoneLabel}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">
                    <a href="tel:+13475147470" className="text-gray-900 hover:text-[#2563EB]">
                      +1 (347) 514-7470
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {faxLabel}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">+1 (347) 514-7471</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {emailLabel}
                  </h3>
                  <p className="mt-2 text-base text-gray-900">
                    <a href="mailto:info@telcotank.com" className="text-gray-900 hover:text-[#2563EB]">
                      info@telcotank.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    {linkedinLabel}
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
                    {globalPresenceLabel}
                  </h3>
                  <p className="mt-2 text-base text-gray-700">{globalPresenceDescription}</p>
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
