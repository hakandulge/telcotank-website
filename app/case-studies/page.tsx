import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'Case Studies — Transformation Success Stories Across Industries',
  description: 'Explore Telcotank transformation case studies spanning telecom growth acceleration, digital transformation, sales channel optimization, organizational restructuring, M&A advisory, greenfield launches, and startup scaling across 40 countries.',
  keywords: ['consulting case studies', 'telecom transformation case study', 'digital transformation success stories', 'M&A advisory case studies', 'growth acceleration results'],
  canonical: 'https://telcotank.com/case-studies',
})

const caseStudies = [
  {
    title: 'Telecom Digital Transformation',
    client: 'Major Telecom Operator',
    metric: '$500M+',
    metricLabel: 'Market opportunity unlocked',
    industry: 'Telecom',
    capability: 'Transformation Strategy',
    challenge: 'A major telecom operator faced declining core revenues and needed to identify and capture new growth opportunities through digital transformation.',
    approach: 'We conducted comprehensive market analysis, developed a digital transformation strategy, and created a detailed execution roadmap covering organizational design, technology architecture, and go-to-market strategy.',
    results: [
      '$500M+ market opportunity identified and strategy developed',
      'Digital transformation roadmap with clear execution milestones',
      'New organizational model designed for digital capabilities',
      'Partnership ecosystem strategy for accelerated market entry',
    ],
  },
  {
    title: 'Telco Growth Acceleration',
    client: 'Major Telecom Operator',
    metric: '300%',
    metricLabel: 'Enterprise services growth',
    industry: 'Telecom',
    capability: 'Strategic Implementation',
    challenge: 'A major telco operator was trapped in single-digit growth due to market saturation and declining ARPU. Traditional revenue streams were stagnating, and further growth in mobile and broadband penetration was nearly impossible.',
    approach: 'We repositioned the operator from a connectivity provider to a national ICT and BPO leader. Our strategy focused on monetizing enterprise services — launching Data Center Management, Cybersecurity as a Service, SaaS-based enterprise tools, AI-powered IT support, and Call Center as a Service. We secured government partnerships in cybersecurity, fintech, insurtech, and energy-tech, creating recurring high-margin revenue streams.',
    results: [
      '$500M+ market unlocked by shifting from connectivity to enterprise and government digital services',
      '40% ARPU increase reversing years of decline through ICT-based monetization',
      '300% growth in enterprise services, creating a $1B+ long-term pipeline over 5 years',
      'Strategic government partnerships secured for data center operations, cybersecurity frameworks, and energy-tech innovations',
    ],
  },
  {
    title: 'Vertex Strategy & Execution',
    client: 'Leading ICT & System Integration Company',
    metric: 'Market',
    metricLabel: 'Leadership achieved',
    industry: 'ICT & Connectivity',
    capability: 'Commercial Execution',
    challenge: 'One of the largest ICT, Connectivity, and System Integration companies in a rapidly growing economy needed strategic clarity, commercial excellence, and digital innovation to maintain its market leadership position amid intense competition.',
    approach: 'We empowered the organization to achieve strategic clarity and operational excellence through tailored business transformation initiatives. Our team drove strategic execution spanning business performance optimization, operational agility, and scalable growth strategies — aligning corporate vision with actionable execution frameworks to ensure agility, scalability, and long-term success.',
    results: [
      'Orchestrated large-scale business transformation with seamless alignment between strategic goals and execution',
      'Redefined go-to-market strategies leading to accelerated revenue growth and enhanced market penetration',
      'Restructured commercial execution frameworks, optimizing sales channels and revenue streams across enterprise and government sectors',
      'Integrated automation, AI-driven solutions, and next-generation connectivity services to enhance operational efficiency',
    ],
  },
  {
    title: 'Marketing Transformation',
    client: 'Telecom Operator',
    metric: '50%',
    metricLabel: 'Churn reduction',
    industry: 'Telecom',
    capability: 'Growth Acceleration',
    challenge: 'High customer churn was eroding the subscriber base and revenue growth. Traditional retention approaches were proving ineffective.',
    approach: 'We implemented a data-driven marketing transformation program, redesigning customer lifecycle management, predictive churn analytics, and personalized retention campaigns.',
    results: [
      '50% reduction in customer churn',
      'Data-driven customer lifecycle management implemented',
      'Predictive analytics model for churn prevention',
      'Personalized marketing campaign framework deployed',
    ],
  },
  {
    title: 'Sales Channel Optimization',
    client: 'Multi-Market Telecom Operator',
    metric: '1M+',
    metricLabel: 'Sales in first year',
    industry: 'Telecom',
    capability: 'Commercial Execution',
    challenge: 'The operator\'s channel coverage was fragmented and underperforming. Dealer networks lacked alignment with growth objectives, logistics infrastructure was insufficient to fuel acquisition and retention campaigns, and channel structures had not been reorganized to reflect evolving customer segments.',
    approach: 'We transformed the end-to-end sales channel architecture — building trustworthy dealer partnerships with efficient logistics infrastructure, designing performance-driven compensation programs to sustain channel loyalty, and reorganizing channel structures according to customer segments. We integrated sales and marketing roadmaps to accomplish AOP targets through cross-sell, up-sell, and segment-specific acquisition campaigns.',
    results: [
      'Reversed daily sales trajectory from -5,000 to +10,000 within 4 months',
      '20 new exclusive sales point agreements secured in 3 months',
      '50% increase in acquisition rate agility',
      'Over 1,000,000 sales achieved in the first year',
      '300,000 new subscribers acquired in 3 months with a single sales campaign',
    ],
  },
  {
    title: 'Corporate Marketing Services',
    client: 'Multi-Continental Service Providers',
    metric: '100s',
    metricLabel: 'Services launched across platforms',
    industry: 'Telecom & Enterprise',
    capability: 'Commercial Execution',
    challenge: 'Corporate clients represent the highest-value segment, yet the operator lacked a diversified services portfolio to retain them. Without tailored corporate solutions, high-revenue accounts were vulnerable to competitive poaching.',
    approach: 'We positioned Corporate Services as a strategic retention and growth engine. Our team developed and implemented hundreds of services across various platforms, partnering with dozens of solution providers across three continents. We designed product offerings targeting high-revenue verticals — insurance, banking, logistics, pharmaceuticals, and civil works — and built ecosystems of third-party application developers and service providers across multiple countries.',
    results: [
      'Hundreds of corporate services developed and deployed across multiple platforms',
      'Ecosystem of third-party developers and service providers built across several countries',
      'Tailored product offerings for insurance, banking, logistics, pharmaceuticals, and civil works',
      'High-value corporate client retention significantly strengthened through diversified solution partnerships',
    ],
  },
  {
    title: 'Organizational Restructuring',
    client: 'ICT & Connectivity Major Players',
    metric: '250%',
    metricLabel: 'Performance increase',
    industry: 'Telecom & ICT',
    capability: 'Strategic Implementation',
    challenge: 'Rapidly evolving technology requirements had rendered existing organizational structures obsolete. Companies needed to abandon static structures and evolve dynamically — spanning marketing, sales, and corporate services departments — to survive in increasingly competitive markets.',
    approach: 'We continuously examined work processes and company structures related to marketing and sales, optimizing existing resources through comprehensive restructuring of organizational charts, task definitions, and reporting processes. Every restructuring was aligned with current market needs, competitive conditions, and growth objectives — from startup-phase companies to multi-continent conglomerates.',
    results: [
      'Up to 250% performance increase across restructured operations',
      'Major ICT/Connectivity player restructuring completed in the Middle East',
      'Marketing, Sales, and Corporate Services departments restructured across CIS region',
      '4 outsourcing operations successfully reorganized and optimized',
    ],
  },
  {
    title: 'Turn Around Implementation',
    client: 'Market-Leading Service Provider',
    metric: '11→0',
    metricLabel: 'Months of subscriber loss reversed',
    industry: 'Telecom',
    capability: 'Strategic Implementation',
    challenge: 'A prominent company and market leader faced 11 consecutive months of losing customers to competitors. Existing approaches had failed to respond effectively to customer needs, and the declining trend was accelerating.',
    approach: 'We deployed emergency tactical maneuvers to immediately stop subscriber losses, then planned and executed strategic action points to address root-cause problem areas. Our experienced teams were sent to the field with innovative communication methods that caught competitors and the market by surprise — reversing the declining trend and restoring positive customer acquisition balance.',
    results: [
      'Reversed 11 consecutive months of subscriber decline to positive acquisition balance',
      'Emergency response deployed and losses stopped within the first phase',
      'Innovative communication strategy caught competitors off guard',
      'Sustained positive customer acquisition trend established post-intervention',
    ],
  },
  {
    title: 'Financial Services Digital Transformation',
    client: 'Major Eastern European Bank',
    metric: 'Full Scale',
    metricLabel: 'Digital transformation',
    industry: 'Financial Services',
    capability: 'Transformation Strategy',
    challenge: 'A major Eastern European bank needed to modernize its operations and customer experience to compete with emerging fintech players.',
    approach: 'We designed and supported execution of a comprehensive digital transformation program spanning retail banking, corporate banking, and operational excellence.',
    results: [
      'Comprehensive digital transformation strategy delivered',
      'Retail and corporate banking digitization roadmap',
      'New digital products and services designed',
      'Operational efficiency improvements identified and initiated',
    ],
  },
  {
    title: 'Business Entry Model',
    client: 'Multi-Sector Clients',
    metric: '$50M+',
    metricLabel: 'Annual business volume generated',
    industry: 'Cross-Industry',
    capability: 'Opportunity Creation',
    challenge: 'Businesses needed to forge collaborations with entities in complementary sectors and expand into new geographic territories. Entering new markets — from mobile solutions and financial services to ultra-luxury retail in the GCC region — required tailored entry strategies and joint venture configurations.',
    approach: 'We designed and configured optimal business models with comprehensive analysis and implementation of processes throughout the collaboration lifecycle. Our work spanned multi-sector mobile solutions for agencies and financial institutions, revenue channel enhancement strategies, convergence projects across platforms, and entry strategies for ultra-luxury retailers expanding into the GCC region and deep-tech companies entering the US and Middle East.',
    results: [
      '$10M business volume with 2 major banks within the first year of collaboration',
      '$50M+ yearly business volume established with 20 agencies',
      'GCC entry strategy delivered for a luxury retailer',
      'Deep-tech entry strategy executed for European company entering US and Middle East markets',
    ],
  },
  {
    title: 'Start-Up Booster',
    client: 'Multiple Start-Ups & Scale-Ups',
    metric: '5x',
    metricLabel: 'Digital channel revenue scaled',
    industry: 'Technology & Deep Tech',
    capability: 'Opportunity Creation',
    challenge: 'Early-stage and growth-stage companies needed to break through scaling barriers — from go-to-market strategy through execution — to reach new revenue levels and demonstrate the EBITDA multiples required for further investment.',
    approach: 'Telcotank acted as a go-to-market partner from strategy to execution, serving as a growth booster for 10+ startups. Our team brought extensive experience in scaling companies from a few million in EBITDA to multiples of tens of millions of dollars — spanning sales strategy, digital channel optimization, JV structuring, and enterprise deal facilitation.',
    results: [
      'Facilitated $6M fraud system sale for a major carrier',
      'Raised $2M for a JV in a new geography for minority share',
      'Scaled digital channel sales from $150K/month to $750K/month — a 5x increase',
      '10+ start-ups boosted and scaled to new revenue levels',
    ],
  },
  {
    title: 'Greenfield Operations',
    client: 'Global Investors & Operators',
    metric: '$8B',
    metricLabel: 'Total company worth created',
    industry: 'Telecom & ICT',
    capability: 'Opportunity Creation',
    challenge: 'Investors needed to launch new businesses in unfamiliar markets — navigating regulatory environments, cultural dynamics, socio-economic structures, and competitive landscapes from the ground up while ensuring rapid time-to-market.',
    approach: 'We designed entry strategies aligned with market conditions, short- and long-term investor expectations, and regional cultural dynamics. Our services encompassed regulatory relations, due diligence, networking, company establishments, licensing, investment structuring, and end-to-end project management — infusing regional intelligence into the DNA of each greenfield venture for long-term success.',
    results: [
      'Six company start-ups launched, three of which became market leaders with a combined worth of $8B',
      'Five due diligence projects completed across multiple geographies',
      'Full project management delivered for one greenfield operator',
      'Investment program support provided for 3 large-scale businesses',
    ],
  },
  {
    title: 'Mergers & Acquisitions',
    client: 'Institutional Investors',
    metric: '$2.5B',
    metricLabel: 'Worth of business cases',
    industry: 'Cross-Industry',
    capability: 'Opportunity Creation',
    challenge: 'Investors in the services industry required expert advisory for acquisitions in markets with limited information, complex regulatory environments, and diverse cultural dynamics across 40 countries.',
    approach: 'We served as strategic counsel to investors since 2005 — advocating eligible business plans, preparing market entrance strategies, supporting full due diligence, and executing operations in transition and post-merger periods. Our valuation models incorporated local market dynamics, industrial trends, competition environment, regulations, customer behavior, brand perception, operational efficiency, and sociocultural features. Our agile field intelligence team gathered and deployed information rapidly throughout the due diligence process.',
    results: [
      '$2.5B worth of business cases evaluated and advised',
      'Full due diligence completed for 6 businesses across 5 countries',
      'Field surveys conducted in 4 countries with M&A opportunity search across entire Africa region',
      '4 transactions finalized successfully',
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1628]">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#60A5FA]/8 blur-[80px]" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl py-24">
            <div className="mb-6 h-0.5 w-12 bg-[#60A5FA]" />
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#60A5FA]">
              Proven Results
            </p>
            <h1 className="font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              Real-world transformation results across telecom, financial services, technology, and emerging markets — spanning 40 countries and two decades of execution.
            </p>
          </div>
        </div>
        {/* Full-width image under hero text */}
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/20">
            <img
              src="/static/images/visuals/industries-sector-showcase.png"
              alt="Telcotank case studies — transformation results across industries"
              className="h-72 w-full object-cover md:h-96"
            />
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
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Challenge</h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Approach</h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-700">{cs.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Results</h3>
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
            What Could We Achieve Together?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Every transformation starts with a conversation. Let us understand your challenge and show you what is possible.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Request Strategy Discussion
          </Link>
        </div>
      </section>
    </>
  )
}
