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

      {/* Full-screen overlay menu */}
      {navShow && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
          className="bg-[#0A2540]"
        >
          {/* Header row: logo + globe + close */}
          <div className="flex items-center justify-between px-6 h-[72px]">
            <Link href="/" onClick={closeNav}>
              <img
                src="/static/images/telcotank-logo.png"
                alt="Telcotank"
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>

            <div className="flex items-center gap-2">
              {/* Globe icon for language */}
              <button
                type="button"
                aria-label="Change Language"
                onClick={() => setLangOpen(!langOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </button>

              {/* Vertical divider */}
              <div className="h-5 w-px bg-white/20" />

              {/* Close button (X) */}
              <button
                type="button"
                aria-label="Close Menu"
                onClick={closeNav}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  className="h-6 w-6"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable content area */}
          <div
            className="overflow-y-auto px-6"
            style={{ height: 'calc(100vh - 72px)' }}
          >
            {/* Language selector panel — shows when globe is clicked */}
            {langOpen && (
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-colors ${
                        currentLang === lang.code
                          ? 'bg-[#2563EB] text-white'
                          : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Nav links — Slalom style: large, bold, with dividers */}
            <nav>
              {headerNavLinks.map((link, idx) => (
                <div key={link.title}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-5 text-xl font-semibold text-white"
                    onClick={closeNav}
                  >
                    <span>{link.title}</span>
                    <svg
                      className="h-5 w-5 text-white/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {idx < headerNavLinks.length - 1 && (
                    <div className="h-px bg-white/10" />
                  )}
                </div>
              ))}
            </nav>

            {/* CTA button at bottom */}
            <div className="pb-10 pt-8">
              <Link
                href="/contact"
                onClick={closeNav}
                className="block w-full rounded-full border-2 border-white/30 py-4 text-center text-sm font-semibold text-white"
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
