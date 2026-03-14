'use client'

import { useState, useEffect, useRef } from 'react'
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
  const navRef = useRef<HTMLDivElement>(null)
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
    router.push(newPath)
  }

  const onToggleNav = () => {
    setNavShow((s) => !s)
    setLangOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (navShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [navShow])

  const currentLang = getCurrentLang()
  const currentLanguage = languages.find((l) => l.code === currentLang)

  return (
    <>
      {/* Hamburger button — visible on mobile/tablet */}
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="lg:hidden relative z-[80] flex h-10 w-10 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-300 ${
          navShow ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark blue background like Slalom */}
        <div
          className={`absolute inset-0 bg-[#0A2540] transition-transform duration-400 ease-out ${
            navShow ? 'translate-y-0' : '-translate-y-full'
          }`}
        />

        {/* Header row: logo + globe + close */}
        <div className="relative z-10 flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={onToggleNav}>
            <img
              src="/static/images/telcotank-logo-white.png"
              alt="Telcotank"
              className="h-7 w-auto"
              onError={(e) => {
                // Fallback if white logo doesn't exist
                (e.target as HTMLImageElement).src = '/static/images/telcotank-logo.png'
                ;(e.target as HTMLImageElement).className = 'h-7 w-auto brightness-0 invert'
              }}
            />
          </Link>

          <div className="flex items-center gap-3">
            {/* Globe icon for language */}
            <button
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
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>

            {/* Vertical divider */}
            <div className="h-6 w-px bg-white/20" />

            {/* Close button */}
            <button
              aria-label="Close Menu"
              onClick={onToggleNav}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
              >
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation content */}
        <div
          ref={navRef}
          className="relative z-10 flex h-[calc(100vh-72px)] flex-col overflow-y-auto px-6"
        >
          {/* Language selector panel — slides down when globe is clicked */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              langOpen ? 'max-h-[400px] opacity-100 mb-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
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
            <div className="mt-4 h-px bg-white/10" />
          </div>

          {/* Nav links — Slalom style: large, bold, with dividers */}
          <nav className="flex-1">
            {headerNavLinks.map((link, idx) => (
              <div key={link.title}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-5 text-xl font-semibold text-white transition-colors hover:text-[#60A5FA]"
                  onClick={onToggleNav}
                >
                  <span>{link.title}</span>
                  <svg
                    className="h-5 w-5 text-white/30 transition-all group-hover:text-[#60A5FA] group-hover:translate-x-1"
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
          <div className="pb-10 pt-6">
            <Link
              href="/contact"
              onClick={onToggleNav}
              className="block w-full rounded-full border-2 border-white/30 py-4 text-center text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/5"
            >
              Request Strategy Discussion
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
