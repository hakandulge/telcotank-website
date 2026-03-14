'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const languages = [
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'tr', name: 'TR', flag: '🇹🇷' },
  { code: 'ar', name: 'AR', flag: '🇸🇦' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'pt', name: 'PT', flag: '🇧🇷' },
  { code: 'ru', name: 'RU', flag: '🇷🇺' },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentLang = () => {
    const parts = pathname.split('/')
    const secondPart = parts[1]
    if (['en', 'tr', 'ar', 'es', 'pt', 'ru'].includes(secondPart)) {
      return secondPart
    }
    return 'en'
  }

  const getNewPath = (lang: string) => {
    const currentLang = getCurrentLang()
    const parts = pathname.split('/')

    if (currentLang === 'en') {
      // Homepage (/)
      if (pathname === '/') {
        return lang === 'en' ? '/' : `/${lang}`
      }
      // Page (e.g., /about)
      return lang === 'en' ? pathname : `/${lang}${pathname}`
    } else {
      // Currently on language route
      if (pathname === `/${currentLang}`) {
        return lang === 'en' ? '/' : `/${lang}`
      }
      // Currently on language-prefixed page (e.g., /tr/about)
      const remainingPath = pathname.slice(currentLang.length + 1)
      return lang === 'en' ? remainingPath : `/${lang}${remainingPath}`
    }
  }

  const handleLanguageChange = (lang: string) => {
    const newPath = getNewPath(lang)
    setIsOpen(false)
    router.push(newPath)
  }

  const currentLang = getCurrentLang()
  const currentLanguage = languages.find((l) => l.code === currentLang)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
      >
        <span>{currentLanguage?.flag}</span>
        <span>{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                currentLang === lang.code ? 'bg-[#2563EB]/5' : ''
              } ${lang.code !== languages[languages.length - 1].code ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">{lang.name}</div>
              </div>
              {currentLang === lang.code && (
                <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
