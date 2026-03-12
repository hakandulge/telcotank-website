import Link from '@/components/Link'
import NewsletterSignup from '@/components/NewsletterSignup'

/* ─── Visual asset paths ─── */
const V = '/static/images/visuals'

/* ─── Client Logos (duplicated for marquee) ─── */
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
  { value: '40', label: 'Countries' },
  { value: '$500M+', label: 'Market Opportunities Created' },
  { value: '300%', label: 'Enterprise Growth Potential' },
  { value: 'AI-First', label: 'Consulting Methodology' },
]

/* ─── Countries of Operation ─── */
const countries = [
  'Canada', 'USA', 'Portugal', 'Spain', 'United Kingdom', 'Burkina Faso',
  'Netherlands', 'Switzerland', 'Nigeria', 'Slovenia', 'Libya', 'Slovakia',
  'Montenegro', 'Serbia', 'North Macedonia', 'Greece', 'South Africa',
  'Bulgaria', 'Romania', 'Moldova', 'Egypt', 'Ukraine', 'Northern Cyprus',
  'Turkey', 'Lebanon', 'Tanzania', 'Kenya', 'Georgia', 'Iraq',
  'Saudi Arabia', 'Kuwait', 'Azerbaijan', 'United Arab Emirates',
  'Uzbekistan', 'Kazakhstan', 'Afghanistan', 'Tajikistan', 'Kyrgyzstan',
  'India', 'Malaysia', 'Indonesia',
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
      {/* ═══ HERO — Cinematic photo background ═══ */}
      <section className="relative min-h-[85vh] overflow-hidden bg-[#0A1628]">
        <img
          src={`${V}/home-hero-transformation-team.png`}
          alt="Telcotank consulting team collaborating on transformation strategy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-[#0A1628]/30" />
        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px] animate-pulse-soft" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px] animate-pulse-soft delay-200" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl py-32 animate-fade-in-up">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#60A5FA] to-[#2563EB]" />
              <div className="h-0.5 w-4 bg-[#60A5FA]/40" />
            </div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#60A5FA]">
              Transformation Strategy &amp; Execution
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[1.08] text-white md:text-6xl lg:text-7xl">
              Where <em className="not-italic text-gradient-blue">strategy</em> meets human-led transformation
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300/90 md:text-xl">
              We partner with enterprise leaders to unlock growth through AI-powered consulting — with people at the center.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/case-studies"
                className="group rounded-full bg-[#2563EB] px-8 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
              >
                Explore Our Work &rarr;
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white/20 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                Let&apos;s Talk Strategy
              </Link>
            </div>
          </div>
        </div>
        {/* Stats bar at bottom — glass effect */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#0A1628]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl justify-around px-6 py-6 lg:px-8">
            {metrics.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white md:text-3xl">{item.value}</div>
                  <div className="mt-1 text-xs text-gray-400 md:text-sm">{item.label}</div>
                </div>
                {idx < metrics.length - 1 && (
                  <div className="hidden h-10 w-px bg-gradient-to-b from-transparent via-[#2563EB]/30 to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT LOGOS — infinite marquee ═══ */}
      <section className="border-y border-gray-200/80 bg-[#F5F7FA] py-14 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            Trusted by Global Technology and Telecom Leaders
          </p>
        </div>
        {/* Marquee container */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F7FA] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F7FA] to-transparent" />
          <div className="flex animate-marquee">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-12 min-w-[180px] items-center justify-center px-8"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 max-w-[130px] object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COUNTRIES OF OPERATION ═══ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            Countries Telcotank and the Team Have Operated In
          </p>
          <p className="mx-auto max-w-5xl text-center text-sm leading-relaxed text-gray-500">
            {countries.join(' · ')}
          </p>
        </div>
      </section>

      {/* ═══ IMPACT METRICS — photo background ═══ */}
      <section className="relative overflow-hidden bg-[#0A1628] py-28 md:py-32">
        <img
          src={`${V}/industries-global-team-presence.png`}
          alt="Telcotank global presence across 40 countries"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]/70" />
        {/* Decorative grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#60A5FA]">
              Our Reach
            </p>
            <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Global Impact
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="group text-center">
                <div className="text-5xl font-bold text-gradient-blue md:text-6xl">{item.value}</div>
                <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent transition-all group-hover:w-20 group-hover:via-[#2563EB]/70" />
                <div className="mt-4 text-sm text-gray-300 md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO WE HELP — photo panel ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-[#0A2540]/10">
              <img
                src={`${V}/home-who-we-help-people.png`}
                alt="Enterprise leaders collaborating on transformation strategy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 to-transparent" />
            </div>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                <div className="h-0.5 w-4 bg-[#2563EB]/20" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                Who We Help
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We work with organizations navigating complex transformation challenges across technology-intensive industries.
              </p>
              <div className="mt-10 space-y-5">
                {audiences.map((item) => (
                  <div
                    key={item.title}
                    className="group/item rounded-lg border-l-2 border-[#2563EB]/20 py-3 pl-6 transition-all hover:border-[#2563EB] hover:bg-[#F5F7FA]/60 hover:pl-8"
                  >
                    <h3 className="text-lg font-semibold text-[#0A2540] transition-colors group-hover/item:text-[#2563EB]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AI-FIRST CONSULTING with AI Model ═══ */}
      <section className="relative bg-[#0A2540] py-28 md:py-36 overflow-hidden">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#2563EB]/8 blur-[100px]" />
        <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#60A5FA]/5 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                AI-First Consulting
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300/90">
                Telcotank applies AI across research, modeling, and analysis to accelerate strategic
                insights and transformation delivery. This enables faster decision cycles and
                measurably better outcomes for clients.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300/90">
                From market sizing to competitive analysis to transformation roadmaps, AI amplifies
                every phase of our consulting process — without replacing the human judgment that
                drives strategic decisions.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { val: '3x', label: 'Faster strategic analysis' },
                  { val: '10x', label: 'More data points processed' },
                  { val: '50%', label: 'Faster time to insight' },
                  { val: 'AI+Human', label: 'Strategic judgment preserved' },
                ].map((stat) => (
                  <div key={stat.val} className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-[#2563EB]/30 hover:bg-white/10">
                    <div className="text-2xl font-bold text-gradient-blue">{stat.val}</div>
                    <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* AI + Human visual */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
              <img
                src={`${V}/capabilities-ai-first-human-tech.png`}
                alt="AI-first consulting methodology combining human expertise with technology"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES WE SOLVE ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
              Challenges We Solve
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((item, idx) => (
              <div key={item.title} className="card-lift gradient-border rounded-xl bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563EB]/10 text-sm font-bold text-[#2563EB]">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES — editorial cards ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                <div className="h-0.5 w-4 bg-[#2563EB]/20" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                Featured Transformation Cases
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="hidden text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8] md:block"
            >
              View all cases &rarr;
            </Link>
          </div>
          {/* Featured hero case */}
          <div className="mb-8 overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
            <Link href="/case-studies" className="group relative block">
              <img
                src={`${V}/casestudies-featured-stories.png`}
                alt="Telcotank transformation case studies and client success stories"
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <span className="inline-block rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-[#2563EB]/30">
                  Featured
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-white md:text-3xl">
                  Telecom Digital Transformation — $500M+ Market Opportunity
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-300 md:text-base">
                  End-to-end digital transformation for a major telecom operator, unlocking new revenue streams and enterprise growth.
                </p>
              </div>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(1).map((item) => (
              <div
                key={item.title}
                className="card-lift gradient-border group rounded-xl border border-gray-200 p-8"
              >
                <span className="inline-block rounded-full bg-[#2563EB]/8 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                <div className="mt-2 text-3xl font-bold text-gradient-blue">{item.metric}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#2563EB] transition-all group-hover:translate-x-1">
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

      {/* ═══ HOW WE WORK — with photo strip ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                <div className="h-0.5 w-4 bg-[#2563EB]/20" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                How We Work
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A proven methodology honed across 40 countries and two decades of transformation delivery.
              </p>
              <div className="mt-8 group overflow-hidden rounded-2xl shadow-lg shadow-[#0A2540]/10">
                <img
                  src={`${V}/home-our-process-human.png`}
                  alt="Telcotank consulting process — diagnose, design, execute, scale"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="grid gap-6 sm:grid-cols-2">
                {processSteps.map((item) => (
                  <div key={item.title} className="card-lift group rounded-xl bg-white p-8 shadow-sm">
                    <div className="mb-4 text-4xl font-bold text-gradient-blue opacity-40 transition-opacity group-hover:opacity-100">{item.step}</div>
                    <h3 className="text-xl font-semibold text-[#0A2540]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — photo accent ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-12 max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                  <div className="h-0.5 w-4 bg-[#2563EB]/20" />
                </div>
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
                    className="card-lift gradient-border group rounded-xl border border-gray-200 p-8"
                  >
                    <h3 className="text-lg font-semibold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    <span className="mt-6 inline-block text-sm font-medium text-[#2563EB] transition-transform group-hover:translate-x-1">
                      Learn more &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Strategy visual */}
            <div className="hidden lg:block">
              <div className="sticky top-24 group overflow-hidden rounded-2xl shadow-xl shadow-[#0A2540]/10">
                <img
                  src={`${V}/capabilities-services-with-people.png`}
                  alt="Telcotank consulting team delivering transformation services"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
              <div className="h-0.5 w-4 bg-[#2563EB]/20" />
            </div>
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
                className="card-lift gradient-border group rounded-xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-6 inline-block text-sm font-medium text-[#2563EB] transition-transform group-hover:translate-x-1">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGIC INTELLIGENCE ═══ */}
      <section className="bg-white py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
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
                className="card-lift gradient-border group rounded-xl border border-gray-200 p-7"
              >
                <h3 className="text-lg font-bold text-[#0A2540] transition-colors group-hover:text-[#2563EB]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#2563EB]/60">{item.format}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-[#2563EB] transition-transform group-hover:translate-x-1">
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
              className="rounded-full bg-[#2563EB] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition-all hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30"
            >
              Browse All 17 Frameworks
            </a>
            <Link
              href="/strategicintelligence"
              className="rounded-full border border-gray-300 px-7 py-3.5 text-sm font-semibold text-[#0A2540] transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ARTICLES ═══ */}
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#60A5FA]">
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
                className="card-lift group overflow-hidden rounded-xl border border-gray-200 bg-white"
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
      <section className="bg-[#F5F7FA] py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                <div className="h-0.5 w-4 bg-[#2563EB]/20" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                About Telcotank
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Founded in 2004, Telcotank has delivered transformation strategy and execution
                across 40 countries, working with global telecom operators, financial institutions,
                and technology companies.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our AI-First consulting methodology enables faster strategic analysis and
                transformation execution, combining deep industry expertise with cutting-edge
                analytical capabilities.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-sm font-medium text-[#2563EB] transition-all hover:text-[#1D4ED8] hover:translate-x-1"
              >
                Learn more about us &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">2004</div>
                <div className="mt-1 text-sm text-gray-600">Founded</div>
              </div>
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">40</div>
                <div className="mt-1 text-sm text-gray-600">Countries</div>
              </div>
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">$500M+</div>
                <div className="mt-1 text-sm text-gray-600">Opportunities Created</div>
              </div>
              <div className="card-lift rounded-xl bg-white p-6 shadow-sm">
                <div className="text-3xl font-bold text-gradient-blue">AI-First</div>
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

      {/* ═══ FINAL CTA — cinematic photo background ═══ */}
      <section className="relative overflow-hidden bg-[#0A2540] py-32 md:py-40">
        <img
          src={`${V}/shared-cta-lets-talk.png`}
          alt="Start a conversation with Telcotank about your transformation challenge"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/80 to-[#0A2540]/60" />
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[100px] animate-pulse-soft" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-[#60A5FA]/8 blur-[80px] animate-pulse-soft delay-200" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            Discuss Your Transformation Challenge
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300/90 md:text-xl">
            Whether you are navigating digital transformation, exploring new markets, or seeking
            strategic clarity on AI adoption, we are ready to help.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-full bg-[#2563EB] px-10 py-5 text-base font-semibold text-white shadow-xl shadow-[#2563EB]/30 transition-all hover:bg-[#1D4ED8] hover:shadow-2xl hover:shadow-[#2563EB]/40"
          >
            Request Strategy Discussion
          </Link>
        </div>
      </section>
    </>
  )
}
