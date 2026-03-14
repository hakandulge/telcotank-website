'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

const Header = () => {
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
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
    setLangOpen(false)
    router.push(getNewPath(lang))
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    if (langOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [langOpen])

  const currentLang = getCurrentLang()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/95">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <img
            src="/static/images/telcotank-logo.png"
            alt="Telcotank"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-x-8 lg:flex">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#0A2540] dark:text-gray-300 dark:hover:text-white"
            >
              {link.title}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Request Strategy Discussion
          </Link>

          {/* Desktop Globe / Language Switcher */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              aria-label="Change Language"
              onClick={() => setLangOpen(!langOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:text-[#0A2540] hover:bg-gray-100 transition-colors dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
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

            {/* Dropdown */}
            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-2 shadow-xl dark:border-gray-700 dark:bg-gray-900"
                   style={{ zIndex: 60 }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      currentLang === lang.code
                        ? 'bg-[#2563EB]/5 font-semibold text-[#2563EB]'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {currentLang === lang.code && (
                      <svg className="ml-auto h-4 w-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Tablet Navigation — hamburger + full-screen overlay */}
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header
