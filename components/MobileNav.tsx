'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const languages = [
  { code: 'en', name: 'English', short: 'EN', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', short: 'TR', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', short: 'AR', flag: '🇸🇦' },
  { code: 'es', name: 'Español', short: 'ES', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', short: 'PT', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', short: 'RU', flag: '🇷🇺' },
]

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentLang = () => {
    const secondPart = pathname.split('/')[1]
    if (['en', 'tr', 'ar', 'es', 'pt', 'ru'].includes(secondPart)) return secondPart
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
    const newPath = getNewPath(lang)
    setLangOpen(false)
    setNavShow(false)
    document.body.style.overflow = ''
    router.push(newPath)
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

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const currentLang = getCurrentLang()

  return (
    <>
      {/* Hamburger button — visible below lg breakpoint */}
      <button
        type="button"
        aria-label="Toggle Menu"
        onClick={openNav}
        className="lg:hidden flex h-10 w-10 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>

      {/* Full-screen overlay menu — 100% opaque solid background */}
      {navShow && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: '#0A2540',
          }}
        >
          {/* Header row: logo + globe + close */}
          <div
            style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}
          >
            <Link href="/" onClick={closeNav}>
              <img
                src="/static/images/telcotank-logo.png"
                alt="Telcotank"
                style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Globe icon for language */}
              <button
                type="button"
                aria-label="Change Language"
                onClick={() => setLangOpen(!langOpen)}
                style={{
                  display: 'flex',
                  height: '40px',
                  width: '40px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  color: 'rgba(255,255,255,0.8)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  style={{ height: '22px', width: '22px' }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </button>

              {/* Vertical divider */}
              <div style={{ height: '20px', width: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />

              {/* Close button (X) */}
              <button
                type="button"
                aria-label="Close Menu"
                onClick={closeNav}
                style={{
                  display: 'flex',
                  height: '40px',
                  width: '40px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  color: 'rgba(255,255,255,0.8)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  style={{ height: '24px', width: '24px' }}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable content area */}
          <div
            style={{
              height: 'calc(100vh - 72px)',
              overflowY: 'auto',
              padding: '0 24px',
            }}
          >
            {/* Language selector panel — shows when globe is clicked */}
            {langOpen && (
              <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        borderRadius: '12px',
                        padding: '14px 16px',
                        textAlign: 'left',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: currentLang === lang.code ? '#2563EB' : 'rgba(255,255,255,0.05)',
                        color: currentLang === lang.code ? '#fff' : 'rgba(255,255,255,0.8)',
                      }}
                    >
                      <span style={{ fontSize: '18px' }}>{lang.flag}</span>
                      <span style={{ fontSize: '14px', fontWeight: 500 }}>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Nav links — Slalom style */}
            <nav>
              {headerNavLinks.map((link, idx) => (
                <div key={link.title}>
                  <Link
                    href={link.href}
                    onClick={closeNav}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 0',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{link.title}</span>
                    <svg
                      style={{ height: '20px', width: '20px', color: 'rgba(255,255,255,0.3)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {idx < headerNavLinks.length - 1 && (
                    <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                  )}
                </div>
              ))}
            </nav>

            {/* CTA button at bottom */}
            <div style={{ paddingTop: '32px', paddingBottom: '40px' }}>
              <Link
                href="/contact"
                onClick={closeNav}
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '9999px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  padding: '16px 0',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Request Strategy Discussion
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNav
