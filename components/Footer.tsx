'use client'

import { usePathname } from 'next/navigation'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru'

function getLang(pathname: string): Lang {
  const p = pathname.split('/')[1]
  if (['tr', 'ar', 'es', 'pt', 'ru'].includes(p)) return p as Lang
  return 'en'
}

function lhref(href: string, lang: Lang): string {
  if (lang === 'en') return href
  return `/${lang}${href}`
}

export default function Footer() {
  const pathname = usePathname()
  const lang = getLang(pathname)
  const t = translations[lang].footer

  const footerLinks = {
    [t.capabilities]: [
      { title: t.transformationStrategy, href: '/capabilities#transformation-strategy' },
      { title: t.growthAcceleration, href: '/capabilities#growth-acceleration' },
      { title: t.aiTransformation, href: '/capabilities#ai-transformation' },
      { title: t.marketEntry, href: '/capabilities#market-entry' },
      { title: t.investmentAdvisory, href: '/capabilities#investment-advisory' },
    ],
    [t.industries]: [
      { title: t.telecommunications, href: '/industries#telecommunications' },
      { title: t.financialServices, href: '/industries#financial-services' },
      { title: t.technologyAI, href: '/industries#technology-ai' },
      { title: t.digitalInfrastructure, href: '/industries#digital-infrastructure' },
      { title: t.startupsScaleups, href: '/industries#startups-scaleups' },
    ],
    [t.company]: [
      { title: t.aboutLink, href: '/about' },
      { title: t.caseStudiesLink, href: '/case-studies' },
      { title: t.strategicIntelligenceLink, href: '/strategicintelligence' },
      { title: t.articlesLink, href: '/articles' },
      { title: t.contactLink, href: '/contact' },
    ],
  }

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
            <p className="text-sm leading-6 text-gray-400">{t.tagline}</p>
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
                      href={lhref(link.href, lang)}
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
              &copy; {new Date().getFullYear()} Telcotank. {t.allRightsReserved}.
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
