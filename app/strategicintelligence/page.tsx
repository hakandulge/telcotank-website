import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'Strategic Intelligence — AI, Telecom & Digital Economy Frameworks',
  description: 'Telcotank Strategic Intelligence: McKinsey-style research frameworks on AI transformation, data center demand, semiconductor dynamics, sovereign AI strategy, and digital infrastructure for enterprise leaders and investors.',
})

const STORE_URL = 'https://strategic-frameworks.telcotank.com'

const publications = [
  {
    title: 'How AI Is Reshaping Global Data Center Demand',
    slug: 'how-ai-is-reshaping-global-data-center-demand-strategy-framework',
    format: 'Word Document (DOCX) — 74 Pages',
    coverage: '12 Global Markets | 2025–2030',
    description: 'Maps the AI-driven transformation of global data center demand, translating hyperscaler CapEx signals, power constraint realities, and sovereign infrastructure plays into actionable positioning frameworks. Covers GPU cluster power requirements, grid interconnection bottlenecks, hyperscaler strategies (Microsoft, Google, Amazon, Meta, Oracle), and capital allocation frameworks across 12 geographies.',
    tags: ['Data Centers', 'AI Infrastructure', 'Power & Energy'],
    featured: true,
  },
  {
    title: 'The AI Semiconductor Arms Race',
    slug: 'the-ai-semiconductor-arms-race-strategy-framework',
    format: 'PowerPoint (PPTX) — 95 Slides',
    coverage: '18 Global Markets | 2025–2030',
    description: 'Synthesizes institutional research to deliver a capital-allocation-grade view of the AI semiconductor value chain. Covers NVIDIA\'s 80%+ GPU dominance, TSMC CoWoS packaging bottlenecks, HBM3e memory shortages, US export controls bifurcating the global market, and $200B+ in sovereign AI chip investments from UAE, Saudi Arabia, India, and the EU.',
    tags: ['Semiconductors', 'Geopolitics', 'Supply Chain'],
    featured: true,
  },
  {
    title: 'The AI Productivity Shock',
    slug: 'the-ai-productivity-shock-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global Enterprise | 2025–2030',
    description: 'Analyzes how artificial intelligence is creating a fundamental productivity shock across industries. Examines the implications for enterprise strategy, competitive positioning, workforce transformation, and the reshaping of industry value chains as AI adoption accelerates.',
    tags: ['AI Strategy', 'Enterprise', 'Productivity'],
    featured: true,
  },
  {
    title: 'Sovereign AI & National Strategy',
    slug: 'sovereign-ai-national-strategy-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Multi-Country | 2025–2030',
    description: 'Examines how nations are developing sovereign AI strategies and their implications for enterprise technology adoption, data governance, and market access. Covers government-backed GPU clusters, localization mandates, and the geopolitical premium on sovereign compute infrastructure.',
    tags: ['Sovereign AI', 'Geopolitics', 'Policy'],
    featured: true,
  },
  {
    title: 'AI & The Global Fiber + Connectivity Expansion',
    slug: 'ai-the-global-fiber-connectivity-expansion-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Analyzes the massive fiber and connectivity infrastructure buildout driven by AI workload demands. Covers subsea cable investments, metro fiber densification, edge network requirements, and the investment implications for telecom operators and infrastructure funds.',
    tags: ['Fiber & Connectivity', 'Telecom', 'Infrastructure'],
    featured: true,
  },
  {
    title: 'AI-Enabled Real Asset Transformation',
    slug: 'ai-enabled-real-asset-transformation-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Examines how AI is transforming real asset classes including data centers, telecommunications infrastructure, energy systems, and commercial real estate. Provides investment frameworks for positioning across the AI-driven infrastructure supercycle.',
    tags: ['Real Assets', 'Infrastructure', 'Investment'],
    featured: true,
  },
  {
    title: 'AI Infrastructure Financing & Private Credit',
    slug: 'ai-infrastructure-financing-private-credit-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Analyzes the financing structures and private credit opportunities emerging from the AI infrastructure buildout. Covers data center project finance, hyperscaler credit facilities, infrastructure debt markets, and risk-adjusted return profiles for institutional investors.',
    tags: ['Private Credit', 'Finance', 'Infrastructure'],
  },
  {
    title: 'AI & The Global Power Supercycle',
    slug: 'ai-the-global-power-supercycle-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Maps the unprecedented power demand driven by AI data centers and the resulting energy infrastructure supercycle. Covers nuclear commitments, renewable procurement strategies, grid interconnection bottlenecks, and power as the binding constraint for AI infrastructure expansion.',
    tags: ['Power & Energy', 'Infrastructure', 'Data Centers'],
  },
  {
    title: 'AI Meets Physical Infrastructure',
    slug: 'ai-meets-physical-infrastructure-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Explores the convergence of AI and physical infrastructure across transportation, energy, water, and telecommunications networks. Examines how AI-driven optimization is reshaping infrastructure investment, operations, and asset valuation.',
    tags: ['Infrastructure', 'AI Strategy', 'Real Assets'],
  },
  {
    title: 'AI & Commercial Real Estate Repricing',
    slug: 'ai-commercial-real-estate-repricing-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Analyzes how AI is driving a fundamental repricing of commercial real estate, from data center land premiums to office market disruption. Covers REIT valuation frameworks, zoning dynamics, and the emerging geography of AI-optimized real estate.',
    tags: ['Real Estate', 'Data Centers', 'Investment'],
  },
  {
    title: 'AI & Corporate IT Budget Reallocation',
    slug: 'ai-corporate-it-budget-reallocation-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Enterprise | 2025–2030',
    description: 'Examines how enterprises are reallocating IT budgets toward AI infrastructure, cloud compute, and data capabilities. Covers CIO spending priorities, build-vs-buy decisions, and the organizational implications of AI-first IT strategies.',
    tags: ['Enterprise', 'IT Strategy', 'AI Adoption'],
  },
  {
    title: 'AI & Defense Modernization',
    slug: 'ai-defense-modernization-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Multi-Country | 2025–2030',
    description: 'Analyzes the integration of AI into defense and national security infrastructure. Covers autonomous systems, intelligence processing, cyber defense, and the defense-industrial implications of AI compute requirements.',
    tags: ['Defense', 'Geopolitics', 'AI Strategy'],
  },
  {
    title: 'AI & Emerging Market Labor Disruption',
    slug: 'ai-emerging-market-labor-disruption-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Emerging Markets | 2025–2030',
    description: 'Examines how AI automation is reshaping labor markets across emerging economies. Covers BPO disruption, manufacturing automation, service sector transformation, and the policy implications for developing nations navigating the AI transition.',
    tags: ['Emerging Markets', 'Labor', 'Policy'],
  },
  {
    title: 'AI & Financial Market Structure',
    slug: 'ai-financial-market-structure-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Analyzes how AI is transforming financial market infrastructure, from algorithmic trading to credit assessment, risk management, and regulatory compliance. Covers the structural implications for banks, asset managers, and fintech platforms.',
    tags: ['Financial Services', 'AI Strategy', 'Investment'],
  },
  {
    title: 'AI & Healthcare Cost Compression',
    slug: 'ai-healthcare-cost-compression-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Examines how AI is driving cost compression across the healthcare value chain. Covers drug discovery acceleration, diagnostic automation, clinical workflow optimization, and the investment implications for healthcare infrastructure.',
    tags: ['Healthcare', 'AI Strategy', 'Cost Optimization'],
  },
  {
    title: 'AI & Insurance Industry Transformation',
    slug: 'ai-insurance-industry-transformation-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Analyzes the AI-driven transformation of the insurance industry. Covers underwriting automation, claims processing, risk modeling, and the competitive dynamics reshaping insurance markets as AI adoption accelerates.',
    tags: ['Insurance', 'Financial Services', 'AI Strategy'],
  },
  {
    title: 'AI & Water Infrastructure Stress',
    slug: 'ai-water-infrastructure-stress-strategy-framework',
    format: 'Strategy Framework',
    coverage: 'Global | 2025–2030',
    description: 'Examines the water infrastructure demands of AI data centers and the resulting stress on water systems. Covers cooling technology requirements, water-scarce region constraints, and the environmental policy implications of AI-scale compute expansion.',
    tags: ['Water Infrastructure', 'Sustainability', 'Data Centers'],
  },
]

export default function StrategicIntelligencePage() {
  const featuredPubs = publications.filter((p) => p.featured)
  const allPubs = publications

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-[#0A2540] md:text-5xl">
          Strategic Intelligence
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          McKinsey-style strategic research frameworks used by telecom operators, infrastructure
          investors, sovereign wealth funds, and corporate strategy teams. Each framework delivers
          capital-allocation-grade analysis with institutional data sources and actionable
          positioning recommendations.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
          <span className="rounded-full bg-gray-100 px-3 py-1">17 Frameworks</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">$12,000 each</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">2025–2030 Horizon</span>
        </div>
      </div>

      {/* Featured Publications */}
      <div className="mb-20">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
          Proven Bestsellers
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPubs.map((pub) => (
            <a
              key={pub.slug}
              href={`${STORE_URL}/products/${pub.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-[#2563EB]/30 hover:shadow-lg"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#2563EB]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#0A2540] group-hover:text-[#2563EB]">
                {pub.title}
              </h3>
              <p className="mb-3 text-xs font-medium text-gray-400">
                {pub.format} · {pub.coverage}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">{pub.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-[#2563EB] group-hover:underline">
                View framework →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* All Publications */}
      <div className="mb-16">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
          All Strategic Frameworks
        </h2>
        <div className="divide-y divide-gray-100">
          {allPubs.map((pub) => (
            <a
              key={pub.slug}
              href={`${STORE_URL}/products/${pub.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 py-6 transition-colors hover:bg-gray-50 sm:flex-row sm:items-start sm:gap-8 rounded-lg px-4 -mx-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#2563EB]">
                  {pub.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-400">
                  {pub.format} · {pub.coverage}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{pub.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm font-semibold text-[#2563EB] opacity-0 transition-opacity group-hover:opacity-100">
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-[#0A2540] px-8 py-12 text-center">
        <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
          Need a Custom Strategic Briefing?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Request an executive walkthrough of any framework for your leadership team, or commission
          a custom research framework tailored to your strategic priorities.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Browse All Frameworks
          </a>
          <Link
            href="/contact"
            className="rounded-md border border-gray-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            Request Executive Briefing
          </Link>
        </div>
      </div>
    </div>
  )
}
