import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'Industries — Telecommunications, Financial Services, AI & Digital Infrastructure',
  description: 'Telcotank serves telecom operators, financial institutions, technology & AI companies, digital infrastructure investors, and high-growth startups with deep industry-specific transformation consulting.',
})

const industries = [
  {
    id: 'telecommunications',
    title: 'Telecommunications',
    description: 'We help mobile operators, fixed-line providers, MVNOs, and converged service providers navigate digital transformation, drive revenue growth, and build competitive advantage.',
    challenges: [
      'Declining traditional revenue streams',
      'Digital transformation at enterprise scale',
      'Network modernization and 5G monetization',
      'Customer experience and retention',
      'New business model development',
    ],
    stats: { clients: '21', label: 'Mobile Operators Served' },
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    description: 'We support banks, insurers, and payment providers in their digital transformation journeys, from strategy through execution.',
    challenges: [
      'Digital banking transformation',
      'Fintech competition and collaboration',
      'Regulatory technology compliance',
      'Customer acquisition cost optimization',
      'Data and AI-driven decision making',
    ],
    stats: { clients: 'Major Banks', label: 'Across Eastern Europe' },
  },
  {
    id: 'technology-ai',
    title: 'Technology & AI',
    description: 'We advise software companies, AI platforms, cloud providers, and enterprise technology firms on growth strategy and market expansion.',
    challenges: [
      'Enterprise go-to-market strategy',
      'Product-market fit optimization',
      'AI integration and monetization',
      'International market expansion',
      'Strategic partnerships and ecosystems',
    ],
    stats: { clients: 'Global', label: 'Technology Companies Advised' },
  },
  {
    id: 'digital-infrastructure',
    title: 'Digital Infrastructure',
    description: 'We advise tower companies, data centers, fiber networks, and connectivity providers on investment strategy and value creation.',
    challenges: [
      'Infrastructure investment strategy',
      'Market entry and expansion planning',
      'Competitive landscape analysis',
      'Regulatory and licensing framework navigation',
      'Value creation for investors',
    ],
    stats: { clients: '20+', label: 'Countries Covered' },
  },
  {
    id: 'startups-scaleups',
    title: 'Startups & Scaleups',
    description: 'We provide strategic guidance to high-growth technology companies seeking market expansion, enterprise positioning, and investment readiness.',
    challenges: [
      'Market expansion strategy',
      'Enterprise sales readiness',
      'Fundraising and investor positioning',
      'Go-to-market optimization',
      'Strategic partnership development',
    ],
    stats: { clients: 'Multiple', label: 'Scaleups Supported' },
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold text-[#0A2540] md:text-5xl lg:text-6xl">
              Industries
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              Focused expertise in technology-intensive industries undergoing fundamental transformation.
            </p>
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
                  Key Challenges We Address
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

      <section className="bg-[#0A2540] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Discuss Your Industry Challenge
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Every industry has unique transformation dynamics. Let us bring our deep sector expertise to your specific challenge.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Request Strategy Discussion
          </Link>
        </div>
      </section>
    </>
  )
}
