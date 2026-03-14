'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

function getLang(pathname: string): Lang {
  const p = pathname.split('/')[1]
  if (['tr', 'ar', 'es', 'pt', 'ru', 'de', 'fr'].includes(p)) return p as Lang
  return 'en'
}

function lhref(href: string, lang: Lang): string {
  if (lang === 'en') return href
  return `/${lang}${href}`
}

const Header = () => {
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const lang = getLang(pathname)
  const t = translations[lang]

  const navLinks = [
    { href: '/', title: t.nav.home },
    { href: '/capabilities', title: t.nav.capabilities },
    { href: '/industries', title: t.nav.industries },
    { href: '/case-studies', title: t.nav.caseStudies },
    { href: '/strategicintelligence', title: t.nav.strategicIntelligence },
    { href: '/articles', title: t.nav.articles },
    { href: '/about', title: t.nav.about },
    { href: '/contact', title: t.nav.contact },
  ]

  const getNewPath = (newLang: string) => {
    if (lang === 'en') {
      if (pathname === '/') return newLang === 'en' ? '/' : `/${newLang}`
      return newLang === 'en' ? pathname : `/${newLang}${pathname}`
    } else {
      if (pathname === `/${lang}`) return newLang === 'en' ? '/' : `/${newLang}`
      const rest = pathname.slice(lang.length + 1)
      return newLang === 'en' ? rest : `/${newLang}${rest}`
    }
  }

  const handleLanguageChange = (newLang: string) => {
    setLangOpen(false)
    router.push(getNewPath(newLang))
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href={lhref('/', lang)} aria-label={siteMetadata.headerTitle}>
          <img src="/static/images/telcotank-logo.png" alt="Telcotank" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-x-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={lhref(link.href, lang)}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#0A2540] dark:text-gray-300 dark:hover:text-white"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href={lhref('/contact', lang)}
            className="rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            {t.nav.requestStrategyDiscussion}
          </Link>

          {/* Globe / Language Switcher */}
          <div ref={langRef} style={{ position: 'relative' }}>
            <button
              type="button"
              aria-label="Change Language"
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: 'flex', height: '36px', width: '36px',
                alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%', border: 'none',
                background: 'transparent', cursor: 'pointer', color: '#6b7280',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ height: '20px', width: '20px' }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
            {langOpen && (
              <div style={{
                position: 'absolute', right: 0, top: '100%', marginTop: '8px',
                width: '200px', borderRadius: '12px', border: '1px solid #e5e7eb',
                backgroundColor: '#ffffff', padding: '8px 0',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)', zIndex: 9999,
              }}>
                {languages.map((l) => (
                  <button key={l.code} type="button" onClick={() => handleLanguageChange(l.code)}
                    style={{
                      display: 'flex', width: '100%', alignItems: 'center', gap: '12px',
                      padding: '10px 16px', border: 'none', cursor: 'pointer', textAlign: 'left',
                      fontSize: '14px',
                      backgroundColor: lang === l.code ? 'rgba(37,99,235,0.05)' : 'transparent',
                      color: lang === l.code ? '#2563EB' : '#374151',
                      fontWeight: lang === l.code ? 600 : 400,
                    }}>
                    <span style={{ fontSize: '16px' }}>{l.flag}</span>
                    <span style={{ flex: 1 }}>{l.name}</span>
                    {lang === l.code && (
                      <svg style={{ height: '16px', width: '16px', color: '#2563EB' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header
