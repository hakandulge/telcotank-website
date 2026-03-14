'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRouter, usePathname } from 'next/navigation'
import Link from './Link'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

const languages = [
  { code: 'en', name: 'English', short: 'EN' },
  { code: 'tr', name: 'Türkçe', short: 'TR' },
  { code: 'ar', name: 'العربية', short: 'AR' },
  { code: 'es', name: 'Español', short: 'ES' },
  { code: 'pt', name: 'Português', short: 'PT' },
  { code: 'ru', name: 'Русский', short: 'RU' },
  { code: 'de', name: 'Deutsch', short: 'DE' },
  { code: 'fr', name: 'Français', short: 'FR' },
]

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    return () => { document.body.style.overflow = '' }
  }, [])

  const getCurrentLang = (): Lang => {
    const secondPart = pathname.split('/')[1]
    if (['tr', 'ar', 'es', 'pt', 'ru', 'de', 'fr'].includes(secondPart)) return secondPart as Lang
    return 'en'
  }

  const getNewPath = (lang: string) => {
    const currentLang = getCurrentLang()
    if (currentLang === 'en') {
      if (pathname === '/') return lang === 'en' ? '/' : `/${lang}`
      return lang === 'en' ? pathname : `/${lang}${pathname}`
    } else {
      if (pathname === `/${currentLang}`) return lang === 'en' ? '/' : `/${lang}`
      const remainingPath = pathname.slice(currentLang.length + 1)
      return lang === 'en' ? remainingPath : `/${lang}${remainingPath}`
    }
  }

  const handleLanguageChange = (lang: string) => {
    setLangOpen(false)
    setNavShow(false)
    document.body.style.overflow = ''
    router.push(getNewPath(lang))
  }

  const openNav = () => {
    setNavShow(true)
    setLangOpen(false)
    document.body.style.overflow = 'hidden'
  }

  const closeNav = () => {
    setNavShow(false)
    setLangOpen(false)
    document.body.style.overflow = ''
  }

  const currentLang = getCurrentLang()
  const t = translations[currentLang]
  const lhref = (href: string) => currentLang === 'en' ? href : `/${currentLang}${href}`

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

  // The overlay content — rendered via portal to escape header's stacking context
  const overlayContent = navShow ? (
    <div
      id="mobile-nav-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        background: '#0A2540',
        opacity: 1,
        isolation: 'isolate',
      }}
    >
      {/* Header row */}
      <div style={{
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#0A2540',
      }}>
        <Link href={lhref('/')} onClick={closeNav}>
          <img
            src="/static/images/telcotank-logo.png"
            alt="Telcotank"
            style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button type="button" aria-label="Change Language" onClick={() => setLangOpen(!langOpen)}
            style={{ display: 'flex', height: '40px', width: '40px', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ height: '22px', width: '22px' }}>
              <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>
          <div style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <button type="button" aria-label="Close Menu" onClick={closeNav}
            style={{ display: 'flex', height: '40px', width: '40px', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" style={{ height: '24px', width: '24px' }}>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ height: 'calc(100vh - 72px)', overflowY: 'auto', padding: '0 24px', background: '#0A2540' }}>
        {/* Language grid */}
        {langOpen && (
          <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: '#0A2540' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {languages.map((lang) => (
                <button key={lang.code} type="button" onClick={() => handleLanguageChange(lang.code)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px', borderRadius: '12px',
                    padding: '14px 16px', textAlign: 'left', border: 'none', cursor: 'pointer',
                    background: currentLang === lang.code ? '#2563EB' : '#0F3460',
                    color: '#ffffff', fontFamily: 'inherit',
                  }}>
                  <span style={{ fontSize: '14px', fontWeight: 500 }}>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Nav links */}
        <nav style={{ background: '#0A2540' }}>
          {navLinks.map((link, idx) => (
            <div key={link.href}>
              <Link href={lhref(link.href)} onClick={closeNav}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', fontSize: '20px', fontWeight: 600, color: '#ffffff', textDecoration: 'none', background: '#0A2540' }}>
                <span>{link.title}</span>
                <svg style={{ height: '20px', width: '20px', color: 'rgba(255,255,255,0.3)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              {idx < navLinks.length - 1 && (
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ paddingTop: '32px', paddingBottom: '40px', background: '#0A2540' }}>
          <Link href={lhref('/contact')} onClick={closeNav}
            style={{ display: 'block', width: '100%', borderRadius: '9999px', border: '2px solid rgba(255,255,255,0.3)', padding: '16px 0', textAlign: 'center', fontSize: '14px', fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>
            {t.nav.requestStrategyDiscussion}
          </Link>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <button type="button" aria-label="Toggle Menu" onClick={openNav}
        className="lg:hidden flex h-10 w-10 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-6 w-6 text-gray-900 dark:text-gray-100">
          <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
      {mounted && overlayContent && createPortal(overlayContent, document.body)}
    </>
  )
}

export default MobileNav
