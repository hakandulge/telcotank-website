import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'Capabilities — Transformation Strategy, AI Consulting & Growth Acceleration',
  description: 'Telcotank consulting capabilities: digital transformation strategy, AI transformation & governance, growth acceleration, market entry & expansion, and investment & M&A advisory for telecom and technology companies.',
})

const capabilities = [
  {
    id: 'transformation-strategy',
    title: 'Transformation Strategy',
    description: 'End-to-end strategic planning for digital transformation, organizational change, and business model innovation.',
    details: [
      'Digital transformation roadmap development',
      'Business model innovation and design',
      'Organizational transformation architecture',
      'Technology strategy and vendor assessment',
      'Change management and governance frameworks',
    ],
  },
  {
    id: 'growth-acceleration',
    title: 'Growth Acceleration',
    description: 'Revenue growth programs spanning sales transformation, marketing optimization, and customer value management.',
    details: [
      'Sales channel transformation and optimization',
      'Customer acquisition and retention strategy',
      'Pricing and commercial model redesign',
      'Marketing transformation and analytics',
      'Partnership and ecosystem development',
    ],
  },
  {
    id: 'ai-transformation',
    title: 'AI Transformation & Governance',
    description: 'Enterprise AI strategy, governance frameworks, operating model design, and adoption programs.',
    details: [
      'AI strategy and roadmap development',
      'AI governance and ethics frameworks',
      'AI operating model design',
      'AI Control Tower implementation',
      'Enterprise AI adoption and culture programs',
    ],
  },
  {
    id: 'market-entry',
    title: 'Market Entry & Expansion',
    description: 'Market assessment, entry strategy, partnership development, and operational setup for new geographies.',
    details: [
      'Market opportunity assessment and sizing',
      'Entry strategy and business case development',
      'Regulatory and licensing analysis',
      'Local partnership identification and structuring',
      'Operational setup and launch management',
    ],
  },
  {
    id: 'investment-advisory',
    title: 'Investment & M&A Advisory',
    description: 'Due diligence, valuation support, and post-merger integration for technology and telecom investments.',
    details: [
      'Commercial and strategic due diligence',
      'Market and competitive analysis',
      'Technology and operational assessment',
      'Synergy identification and value creation planning',
      'Post-merger integration support',
    ],
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold text-[#0A2540] md:text-5xl lg:text-6xl">
              Capabilities
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              Deep expertise across the full transformation lifecycle, from strategy development through execution and scaling.
            </p>
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
                  What we deliver
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
            Ready to Transform?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Let us help you identify the right approach for your transformation challenge.
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
