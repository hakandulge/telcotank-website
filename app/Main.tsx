import Link from '@/components/Link'
import HeroNetwork from '@/components/visuals/HeroNetwork'
import GlobalMap from '@/components/visuals/GlobalMap'
import AIModel from '@/components/visuals/AIModel'
import StrategyFramework from '@/components/visuals/StrategyFramework'
import NetworkMesh from '@/components/visuals/NetworkMesh'
import NewsletterSignup from '@/components/NewsletterSignup'

/* ─── Client Logos ─── */
const clientLogos = [
  { name: 'Microsoft', alt: 'Microsoft — Telcotank consulting client', src: '/static/images/logos/microsoft.png', maxW: 120 },
  { name: 'Vodafone', alt: 'Vodafone — telecom transformation client', src: '/static/images/logos/vodafone.png', maxW: 150 },
  { name: 'Turkcell', alt: 'Turkcell — telecom digital strategy client', src: '/static/images/logos/turkcell.png', maxW: 150 },
  { name: 'Türk Telekom', alt: 'Türk Telekom — telecom consulting client', src: '/static/images/logos/turktelekom.png', maxW: 120 },
  { name: 'Zain', alt: 'Zain — Middle East telecom consulting client', src: '/static/images/logos/zain.png', maxW: 120 },
  { name: 'Kcell', alt: 'Kcell — Central Asia telecom strategy client', src: '/static/images/logos/kcell.png', maxW: 90 },
  { name: 'Telia', alt: 'Telia Company — Nordic telecom consulting client', src: '/static/images/logos/telia.png', maxW: 120 },
  { name: 'Slalom', alt: 'Slalom Consulting — technology consulting partner', src: '/static/images/logos/slalom.png', maxW: 120 },
]

/* ─── Impact Metrics ─── */
const metrics = [
  { value: '20+', label: 'Countries' },
  { value: '25', label: 'Enterprise Clients' },
  { value: '$500M+', label: 'Market Opportunities Created' },
  { value: '300%', label: 'Enterprise Growth Potential' },
]

/* ─── Who We Help ─── */
const audiences = [
  {
    title: 'Telecom Operators',
    description: 'Revenue growth, digital transformation, and AI-driven operational excellence for mobile and fixed-line operators.',
  },
  {
    title: 'Financial Institutions',
    description: 'Digital banking transformation, fintech strategy, and technology-driven growth for banks and insurers.',
  },
  {
    title: 'Technology & AI Companies',
    description: 'Go-to-market strategy, enterprise growth acceleration, and market expansion for technology firms.',
  },
  {
    title: 'Infrastructure Investors',
    description: 'Due diligence, market assessment, and value creation strategies for digital infrastructure investments.',
  },
  {
    title: 'Consulting Firms',
    description: 'Specialized telecom and technology domain expertise to augment strategy and transformation engagements.',
  },
]

/* ─── Challenges ─── */
const challenges = [
  {
    title: 'Revenue Growth Stagnation',
    description: 'Markets saturate and traditional business models slow down. We identify new revenue streams and growth vectors.',
  },
  {
    title: 'Digital Transformation Complexity',
    description: 'Many organizations struggle to implement digital initiatives at scale. We design and execute transformation roadmaps.',
  },
  {
    title: 'AI Initiatives That Do Not Scale',
    description: 'AI pilots often fail to deliver enterprise value. We build governance frameworks and operating models that scale.',
  },
  {
    title: 'Market Entry into New Regions',
    description: 'Expanding into new markets requires deep local knowledge and strategic clarity. We provide both.',
  },
]

/* ─── Case Studies ─── */
const caseStudies = [
  {
    title: 'Telecom Digital Transformation',
    metric: '$500M+',
    description: 'Market opportunity unlocked through end-to-end digital transformation for a major telecom operator.',
    tag: 'Telecom',
  },
  {
    title: 'Sales Channel Transformation',
    metric: '1M+',
    description: 'Sales achieved through omnichannel strategy redesign and digital sales acceleration.',
    tag: 'Growth',
  },
  {
    title: 'Marketing Transformation',
    metric: '50%',
    description: 'Churn reduction through data-driven marketing transformation and customer lifecycle management.',
    tag: 'Marketing',
  },
  {
    title: 'Financial Services Transformation',
    metric: 'Major Bank',
    description: 'Digital transformation program for a major Eastern European bank across retail and corporate banking.',
    tag: 'Financial Services',
  },
]

/* ─── How We Work ─── */
const processSteps = [
  {
    step: '01',
    title: 'Diagnose',
    description: 'Deep analysis of market position, competitive landscape, and organizational capabilities.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Strategy development with clear roadmaps, business cases, and transformation architecture.',
  },
  {
    step: '03',
    title: 'Execute',
    description: 'Hands-on implementation support with program management and change management.',
  },
  {
    step: '04',
    title: 'Scale',
    description: 'Systematic scaling of successful initiatives across the organization and new markets.',
  },
]

/* ─── Capabilities ─── */
const capabilities = [
  {
    title: 'Transformation Strategy',
    description: 'End-to-end strategic planning for digital transformation, organizational change, and business model innovation.',
    href: '/capabilities#transformation-strategy',
  },
  {
    title: 'Growth Acceleration',
    description: 'Revenue growth programs spanning sales transformation, marketing optimization, and customer value management.',
    href: '/capabilities#growth-acceleration',
  },
  {
    title: 'AI Transformation & Governance',
    description: 'Enterprise AI strategy, governance frameworks, operating model design, and adoption programs.',
    href: '/capabilities#ai-transformation',
  },
  {
    title: 'Market Entry & Expansion',
    description: 'Market assessment, entry strategy, partnership development, and operational setup for new geographies.',
    href: '/capabilities#market-entry',
  },
  {
    title: 'Investment & M&A Advisory',
    description: 'Due diligence, valuation support, and post-merger integration for technology and telecom investments.',
    href: '/capabilities#investment-advisory',
  },
]

/* ─── Industries ─── */
const industries = [
  {
    title: 'Telecommunications',
    description: 'Mobile operators, fixed-line providers, MVNOs, and converged service providers.',
    href: '/industries#telecommunications',
  },
  {
    title: 'Financial Services',
    description: 'Banks, insurers, payment providers, and fintech companies.',
    href: '/industries#financial-services',
  },
  {
    title: 'Technology & AI',
    description: 'Software companies, AI platforms, cloud providers, and enterprise technology firms.',
    href: '/industries#technology-ai',
  },
  {
    title: 'Digital Infrastructure',
    description: 'Tower companies, data centers, fiber networks, and connectivity providers.',
    href: '/industries#digital-infrastructure',
  },
  {
    title: 'Startups & Scaleups',
    description: 'High-growth technology companies seeking strategic guidance and market expansion.',
    href: '/industries#startups-scaleups',
  },
]

/* ─── Strategic Intelligence ─── */
const STORE_URL = 'https://strategic-frameworks.telcotank.com'
const frameworks = [
  {
    title: 'How AI Is Reshaping Global Data Center Demand',
    format: '74 Pages · 12 Markets',
    description: 'Maps the AI-driven transformation of global data center demand — hyperscaler CapEx signals, power constraints, and sovereign infrastructure plays across 12 geographies.',
    href: `${STORE_URL}/products/how-ai-is-reshaping-global-data-center-demand-strategy-framework`,
  },
  {
    title: 'The AI Semiconductor Arms Race',
    format: '95 Slides · 18 Markets',
    description: 'Capital-allocation-grade view of the AI semiconductor value chain — NVIDIA\'s GPU dominance, TSMC bottlenecks, US export controls, and $200B+ in sovereign chip investments.',
    href: `${STORE_URL}/products/the-ai-semiconductor-arms-race-strategy-framework`,
  },
  {
    title: 'The AI Productivity Shock',
    format: 'Strategy Framework',
    description: 'How AI is creating a fundamental productivity shock across industries — implications for enterprise strategy, competitive positioning, and workforce transformation.',
    href: `${STORE_URL}/products/the-ai-productivity-shock-strategy-framework`,
  },
  {
    title: 'Sovereign AI & National Strategy',
    format: 'Strategy Framework',
    description: 'National AI strategies and their implications for enterprise technology adoption, data governance, and the geopolitical premium on sovereign compute.',
    href: `${STORE_URL}/products/sovereign-ai-national-strategy-strategy-framework`,
  },
  {
    title: 'AI & The Global Fiber + Connectivity Expansion',
    format: 'Strategy Framework',
    description: 'Massive fiber and connectivity infrastructure buildout driven by AI workloads — subsea cables, metro densification, and investment implications for telecom operators.',
    href: `${STORE_URL}/products/ai-the-global-fiber-connectivity-expansion-strategy-framework`,
  },
  {
    title: 'AI-Enabled Real Asset Transformation',
    format: 'Strategy Framework',
    description: 'How AI is transforming real asset classes — data centers, telecom infrastructure, energy systems, and commercial real estate investment frameworks.',
    href: `${STORE_URL}/products/ai-enabled-real-asset-transformation-strategy-framework`,
  },
]

export default function Home({ posts }: { posts: any[] }) {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-white py-32 md:py-40">
        {/* Background network visual */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <HeroNetwork className="h-full w-full max-w-5xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-[#0A2540] md:text-6xl lg:text-7xl">
              Transformation Strategy &amp; Execution for the Digital Economy
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-gray-600 md:text-xl">
              Helping telecom operators, financial institutions, technology companies and investors unlock growth.
            </p>
            <p className="mt-4 text-base text-gray-500">
              20+ years of transformation programs across telecom, financial services, technology and digital infrastructure.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/case-studies"
                className="rounded-md border border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Explore Our Work
              </Link>
              <Link
                href="/contact"
                className="rounded-md bg-[#2563EB] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
              >
                Request Strategy Discussion
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLIENT LOGOS ═══ */}
      <section className="border-y border-gray-200 bg-[#F5F7FA] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
            Trusted by Global Technology and Telecom Leaders
          </p>
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-12 items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 max-w-[100px] object-contain grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100 sm:max-w-[120px] lg:max-w-[140px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMPACT METRICS with Global Map ═══ */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
          <GlobalMap className="h-full w-full max-w-4xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-5xl font-bold text-[#0A2540] md:text-6xl">{item.value}</div>
                <div className="mt-3 text-sm text-gray-600 md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO WE HELP ═══ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Who We Help
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We work with organizations navigating complex transformation challenges across technology-intensive industries.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI-FIRST CONSULTING with AI Model ═══ */}
      <section className="bg-[#0A2540] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                AI-First Consulting
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Telcotank applies AI across research, modeling, and analysis to accelerate strategic
                insights and transformation delivery. This enables faster decision cycles and
                measurably better outcomes for clients.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                From market sizing to competitive analysis to transformation roadmaps, AI amplifies
                every phase of our consulting process — without replacing the human judgment that
                drives strategic decisions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">3x</div>
                  <div className="mt-1 text-sm text-gray-400">Faster strategic analysis</div>
                </div>
                <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">10x</div>
                  <div className="mt-1 text-sm text-gray-400">More data points processed</div>
                </div>
                <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">50%</div>
                  <div className="mt-1 text-sm text-gray-400">Faster time to insight</div>
                </div>
                <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">AI+Human</div>
                  <div className="mt-1 text-sm text-gray-400">Strategic judgment preserved</div>
                </div>
              </div>
            </div>
            {/* AI Transformation Model diagram */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-xl bg-white/5 p-6 backdrop-blur-sm">
                <AIModel className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES WE SOLVE ═══ */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <NetworkMesh className="h-full w-full" opacity={0.03} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Challenges We Solve
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {challenges.map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES ═══ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                Featured Transformation Cases
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="hidden text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8] md:block"
            >
              View all cases &rarr;
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-gray-200 p-8 transition-shadow hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-[#F5F7FA] px-3 py-1 text-xs font-medium text-gray-600">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <div className="mt-2 text-3xl font-bold text-[#2563EB]">{item.metric}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#2563EB] group-hover:underline">
                  Read case study &rarr;
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/case-studies"
              className="text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8]"
            >
              View all cases &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK ═══ */}
      <section className="bg-[#F5F7FA] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              How We Work
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((item, idx) => (
              <div key={item.title} className="relative">
                <div className="mb-4 text-5xl font-bold text-[#2563EB]/20">{item.step}</div>
                <h3 className="text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden text-2xl text-gray-300 lg:block">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES with Framework Visual ═══ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-12 max-w-2xl">
                <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                  Capabilities
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Deep expertise across the full transformation lifecycle, from strategy through execution.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {capabilities.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-lg border border-gray-200 p-8 transition-all hover:border-[#2563EB]/30 hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-[#0A2540] group-hover:text-[#2563EB]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    <span className="mt-6 inline-block text-sm font-medium text-[#2563EB]">
                      Learn more &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Strategy Framework diagram */}
            <div className="hidden lg:block">
              <div className="sticky top-24 rounded-xl border border-gray-100 bg-[#F5F7FA] p-6">
                <StrategyFramework className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <NetworkMesh className="h-full w-full" opacity={0.025} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Industries
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Focused expertise in technology-intensive industries undergoing fundamental transformation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#0A2540] group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#2563EB]">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC INTELLIGENCE ═══ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Proven Bestsellers
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Strategic Intelligence
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              McKinsey-style strategic research frameworks used by telecom operators, infrastructure
              investors, sovereign wealth funds, and corporate strategy teams. 17 frameworks
              available — each $12,000.
            </p>
          </div>
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-200 p-7 transition-all hover:border-[#2563EB]/30 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-400">{item.format}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-[#2563EB]">
                  View framework &rarr;
                </span>
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#2563EB] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Browse All 17 Frameworks
            </a>
            <Link
              href="/strategicintelligence"
              className="rounded-md border border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ARTICLES ═══ */}
      <section className="bg-[#F5F7FA] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Latest Insights
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Original analysis on the forces reshaping telecommunications, artificial intelligence,
              quantum computing, and the digital economy.
            </p>
          </div>
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'AI Left the Screen and Entered the Physical World',
                date: 'January 13, 2026',
                theme: 'AI & Quantum Computing',
                image: '/static/images/articles/Jan132026/image_1.jpg',
                summary:
                  'The emergence of Physical AI represents a structural shift from digital-first to embodied intelligence systems, with applications across robotics and autonomous vehicles.',
              },
              {
                title: 'The Oppenheimer Moment: Why Advanced AI Poses Profound Threats',
                date: 'November 17, 2025',
                theme: 'AI & Quantum Computing',
                image: '/static/images/articles/Nov172025/image_1.jpg',
                summary:
                  'Superintelligent systems present both transformative opportunity and irreversible risk — demanding immediate action on ethical governance and international cooperation.',
              },
              {
                title: 'Why Vibe Coding Is the New Big Thing',
                date: 'November 1, 2025',
                theme: 'Emerging Technology',
                image: '/static/images/articles/Nov012025/image_1.jpg',
                summary:
                  'Generative AI is compressing software development timelines from months to days, fundamentally democratizing startup formation.',
              },
            ].map((article) => (
              <Link
                key={article.title}
                href="/articles"
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {article.theme}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-[#0A2540] group-hover:text-[#2563EB]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                    {article.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/articles"
              className="rounded-md border border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="bg-[#F5F7FA] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                About Telcotank
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Founded in 2004, Telcotank has delivered transformation strategy and execution
                across 20+ countries, working with 25 enterprise clients including global telecom
                operators, financial institutions, and technology companies.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our AI-First consulting methodology enables faster strategic analysis and
                transformation execution, combining deep industry expertise with cutting-edge
                analytical capabilities.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8]"
              >
                Learn more about us &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#0A2540]">2004</div>
                <div className="mt-1 text-sm text-gray-600">Founded</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#0A2540]">20+</div>
                <div className="mt-1 text-sm text-gray-600">Countries</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#0A2540]">25</div>
                <div className="mt-1 text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-[#0A2540]">AI-First</div>
                <div className="mt-1 text-sm text-gray-600">Methodology</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AIRBRIDGE ANNOUNCEMENT ═══ */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] p-10 md:p-16">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-block rounded-full bg-[#2563EB]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#60a5fa]">
                  New from Telcotank
                </span>
                <h2 className="mt-5 font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                  AirBridge
                </h2>
                <p className="mt-2 text-lg font-medium text-[#60a5fa]">
                  Aviation Disruption Intelligence Platform
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
                  Real-time monitoring of flight disruptions across 30+ airports in the Middle East,
                  Europe, and global hubs. AirBridge combines live flight data with weather intelligence
                  to provide actionable situational awareness for travelers, airlines, and logistics teams.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">30+</div>
                    <div className="mt-1 text-xs text-gray-400">Airports Monitored</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">8</div>
                    <div className="mt-1 text-xs text-gray-400">Regions Covered</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">Live</div>
                    <div className="mt-1 text-xs text-gray-400">Flight Scraping</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">Free</div>
                    <div className="mt-1 text-xs text-gray-400">Open Access</div>
                  </div>
                </div>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://airbridge.telcotank.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-[#2563EB] px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                  >
                    Launch AirBridge &rarr;
                  </a>
                  <a
                    href="https://airbridge.telcotank.com/airports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/30 px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
                  >
                    View Airport Dashboard
                  </a>
                </div>
              </div>

              {/* Decorative plane/radar icon */}
              <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                  className="h-40 w-40 text-[#2563EB]/30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="60" cy="60" r="55" strokeDasharray="4 4" />
                  <circle cx="60" cy="60" r="38" strokeDasharray="4 4" />
                  <circle cx="60" cy="60" r="20" />
                  <line x1="60" y1="5" x2="60" y2="115" opacity="0.3" />
                  <line x1="5" y1="60" x2="115" y2="60" opacity="0.3" />
                  {/* Plane */}
                  <g transform="translate(70, 35) rotate(45)">
                    <path
                      d="M0 0 L-4 12 L0 10 L4 12 Z"
                      fill="currentColor"
                      stroke="none"
                      className="text-[#60a5fa]"
                    />
                    <path
                      d="M-10 8 L0 5 L10 8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-[#60a5fa]"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER SIGNUP ═══ */}
      <NewsletterSignup />

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative overflow-hidden bg-[#0A2540] py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <NetworkMesh className="h-full w-full" opacity={0.06} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            Discuss Your Transformation Challenge
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Whether you are navigating digital transformation, exploring new markets, or seeking
            strategic clarity on AI adoption, we are ready to help.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-md bg-[#2563EB] px-10 py-5 text-base font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Request Strategy Discussion
          </Link>
        </div>
      </section>
    </>
  )
}
