import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'

export const metadata = genPageMetadata({
  title: 'About Telcotank — Transformation Consulting Since 2004',
  description: 'Founded in 2004, Telcotank is an AI-first transformation consulting firm operating across 20+ countries. We combine deep telecom and technology expertise with proprietary strategic intelligence frameworks.',
  keywords: ['about Telcotank', 'transformation consulting firm', 'telecom consulting company', 'management consulting since 2004', 'AI-first consulting'],
  canonical: 'https://telcotank.com/about',
})

const milestones = [
  { year: '2004', event: 'Telcotank founded with telecom strategy focus' },
  { year: '2008', event: 'Expanded to financial services advisory' },
  { year: '2012', event: 'Reached 15+ country presence across EMEA' },
  { year: '2016', event: 'Launched digital transformation practice' },
  { year: '2020', event: 'AI Transformation & Governance capability added' },
  { year: '2024', event: 'AI-First consulting methodology deployed' },
]

const values = [
  {
    title: 'Execution Focus',
    description: 'We do not just advise. We work alongside leadership teams to deliver measurable transformation outcomes.',
  },
  {
    title: 'Deep Industry Expertise',
    description: 'Two decades of concentrated experience in telecom, financial services, and technology gives us unmatched sector knowledge.',
  },
  {
    title: 'AI-First Approach',
    description: 'We use AI to accelerate every phase of our work, from strategic analysis to transformation execution.',
  },
  {
    title: 'Global Perspective',
    description: 'Projects across 20+ countries give us the ability to bring global best practices to local challenges.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold text-[#0A2540] md:text-5xl lg:text-6xl">
              About Telcotank
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              Founded in 2004, Telcotank is a transformation advisory firm helping organizations
              across the digital economy navigate complex strategic challenges and deliver
              measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F5F7FA] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We exist to help organizations unlock growth through transformation. Our work
                spans strategy development, execution support, and strategic intelligence across
                telecom, financial services, technology, and digital infrastructure.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                With projects delivered across 20+ countries and 25 enterprise clients, we bring
                a unique combination of global perspective and deep sector expertise to every
                engagement.
              </p>
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
                <div className="text-3xl font-bold text-[#0A2540]">$500M+</div>
                <div className="mt-1 text-sm text-gray-600">Opportunities Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
            What Sets Us Apart
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-[#0A2540]">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F5F7FA] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex items-start gap-6">
                <div className="w-16 flex-shrink-0 text-xl font-bold text-[#2563EB]">{m.year}</div>
                <div className="border-l-2 border-gray-300 pl-6">
                  <p className="text-base text-gray-700">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 font-serif text-3xl font-semibold text-[#0A2540] md:text-4xl">
            Three Pillars of Our Practice
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-[#F5F7FA] p-8">
              <h3 className="text-xl font-semibold text-[#0A2540]">Transformation Consulting</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                End-to-end strategy and execution for digital transformation, growth acceleration,
                and organizational change.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F7FA] p-8">
              <h3 className="text-xl font-semibold text-[#0A2540]">Strategic Intelligence</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Proprietary frameworks and analysis on AI, technology, and competitive dynamics
                reshaping the digital economy.
              </p>
            </div>
            <div className="rounded-lg bg-[#F5F7FA] p-8">
              <h3 className="text-xl font-semibold text-[#0A2540]">AI Transformation</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Enterprise AI strategy, governance, operating model design, and adoption programs
                that deliver scalable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A2540] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Work With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Let us bring our two decades of transformation expertise to your most important strategic challenges.
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
