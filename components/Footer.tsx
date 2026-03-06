import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

const footerLinks = {
  Capabilities: [
    { title: 'Transformation Strategy', href: '/capabilities#transformation-strategy' },
    { title: 'Growth Acceleration', href: '/capabilities#growth-acceleration' },
    { title: 'AI Transformation', href: '/capabilities#ai-transformation' },
    { title: 'Market Entry & Expansion', href: '/capabilities#market-entry' },
    { title: 'Investment & M&A Advisory', href: '/capabilities#investment-advisory' },
  ],
  Industries: [
    { title: 'Telecommunications', href: '/industries#telecommunications' },
    { title: 'Financial Services', href: '/industries#financial-services' },
    { title: 'Technology & AI', href: '/industries#technology-ai' },
    { title: 'Digital Infrastructure', href: '/industries#digital-infrastructure' },
    { title: 'Startups & Scaleups', href: '/industries#startups-scaleups' },
  ],
  Company: [
    { title: 'About', href: '/about' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Strategic Intelligence', href: '/strategicintelligence' },
    { title: 'Articles', href: '/articles' },
    { title: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <img
              src="/static/images/telcotank-logo.png"
              alt="Telcotank"
              className="mb-6 h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-6 text-gray-400">
              Transformation Strategy & Execution for the Digital Economy. Advising telecom
              operators, financial institutions, technology companies and investors since 2004.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Telcotank. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {siteMetadata.linkedin && (
                <Link
                  href={siteMetadata.linkedin}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  LinkedIn
                </Link>
              )}
              <Link
                href={`mailto:${siteMetadata.email}`}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {siteMetadata.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
