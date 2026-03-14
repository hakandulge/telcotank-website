'use client'

import Link from '@/components/Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru'

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

export default function StrategicIntelligenceLocalized({ lang }: { lang: Lang }) {
  const t = translations[lang].strategicIntelligencePage
  const isRTL = lang === 'ar'
  const lhref = (href: string) => lang === 'en' ? href : `/${lang}${href}`

  const featuredPubs = publications.filter((p) => p.featured)
  const allPubs = publications

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1628] py-28 md:py-36">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className={`mb-6 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#60A5FA] to-[#2563EB]" />
              <div className="h-0.5 w-4 bg-[#60A5FA]/40" />
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#60A5FA]">{t.heroLabel}</p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300/90 md:text-xl">{t.heroDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-gray-300 backdrop-blur-sm">{t.badgeFrameworks}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-gray-300 backdrop-blur-sm">{t.badgePrice}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-gray-300 backdrop-blur-sm">{t.badgeHorizon}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">{t.provenBestsellers}</p>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">{t.featuredFrameworks}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPubs.map((pub) => (
              <a key={pub.slug} href={`${STORE_URL}/products/${pub.slug}`} target="_blank" rel="noopener noreferrer" className="card-lift gradient-border group rounded-xl border border-gray-200 bg-white p-7">
                <div className="mb-3 flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#2563EB]/8 px-2.5 py-0.5 text-xs font-semibold text-[#2563EB]">{tag}</span>
                  ))}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">{pub.title}</h3>
                <p className="mb-3 text-xs font-medium text-[#2563EB]/60">{pub.format} · {pub.coverage}</p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{pub.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-[#2563EB] transition-transform group-hover:translate-x-1">
                  {t.viewFramework} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <div className={`mb-4 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">{t.allStrategicFrameworks}</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {allPubs.map((pub) => (
              <a key={pub.slug} href={`${STORE_URL}/products/${pub.slug}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-4 rounded-lg px-4 py-6 -mx-4 transition-colors hover:bg-[#F5F7FA]/60 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">{pub.title}</h3>
                  <p className="mt-1 text-xs font-medium text-[#2563EB]/60">{pub.format} · {pub.coverage}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{pub.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-[#2563EB]/8 px-2 py-0.5 text-xs font-medium text-[#2563EB]/70">{tag}</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-semibold text-[#2563EB] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    {t.view} &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0A2540] py-28 md:py-36">
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-[#60A5FA]/8 blur-[80px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300/90">{t.ctaDescription}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#2563EB] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30">
              {t.browseAllFrameworks}
            </a>
            <Link href={lhref('/contact')} className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10">
              {t.requestExecutiveBriefing}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
