import { Metadata } from 'next'
import Link from '@/components/Link'
import { translations } from '@/data/translations'

export const metadata: Metadata = {
  title: 'القدرات — تيلكوتانك لاستشارات التحول',
  description: 'خدمات استشارية متخصصة في التحول الرقمي والنمو والذكاء الاصطناعي والعولمة.',
  alternates: {
    canonical: 'https://telcotank.com/ar/capabilities',
  },
}

const capabilities = [
  { id: 'transformation-strategy', title: 'Transformation Strategy', description: 'End-to-end strategic planning', details: ['Digital transformation roadmap', 'Business model innovation', 'Organizational transformation', 'Technology strategy', 'Change management'] },
  { id: 'growth-acceleration', title: 'Growth Acceleration', description: 'Revenue growth programs', details: ['Sales channel transformation', 'Customer acquisition strategy', 'Pricing model redesign', 'Marketing transformation', 'Partnership development'] },
  { id: 'ai-transformation', title: 'AI Transformation & Governance', description: 'Enterprise AI strategy', details: ['AI strategy development', 'AI governance frameworks', 'AI operating model', 'AI Control Tower', 'Enterprise AI adoption'] },
  { id: 'market-entry', title: 'Market Entry & Expansion', description: 'Market assessment and entry strategy', details: ['Market opportunity assessment', 'Entry strategy development', 'Regulatory analysis', 'Partnership identification', 'Launch management'] },
  { id: 'investment-advisory', title: 'Investment & M&A Advisory', description: 'Due diligence and integration support', details: ['Commercial due diligence', 'Market analysis', 'Technology assessment', 'Synergy identification', 'Post-merger integration'] },
]

const t = translations['ar']
const V = '/static/images/visuals'

export default function CapabilitiesPageAR() {
  return (
    <div dir="rtl">
      <section className="relative overflow-hidden bg-[#0A1628]">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px]" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl py-24">
            <div className="mb-6 h-0.5 w-12 bg-[#60A5FA]" />
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#60A5FA]">ما نفعله</p>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">القدرات</h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">خبرة عميقة في جميع مراحل دورة حياة التحول</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
            <picture>
              <source media="(max-width: 768px)" srcSet={`${V}/capabilities-services-with-people_small.png`} />
              <img src={`${V}/capabilities-services-with-people.png`} alt="Telcotank" className="w-full" loading="lazy" />
            </picture>
          </div>
        </div>
      </section>

      {capabilities.map((cap, idx) => (
        <section key={cap.id} id={cap.id} className={`py-20 md:py-24 ${idx % 2 === 0 ? 'bg-[#F5F7FA]' : 'bg-white'}`}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">{cap.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">{cap.description}</p>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">ما نسلمه</h3>
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

      <section className="bg-[#0A2540] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">هل أنت مستعد للتحول؟</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">دعنا نساعدك على تحديد النهج الصحيح</p>
          <Link href="/ar/contact" className="mt-8 inline-block rounded-full bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]">
            اطلب استشارة
          </Link>
        </div>
      </section>
    </div>
  )
}
