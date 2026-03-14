'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
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
    setIsOpen(false)
    router.push(getNewPath(lang))
  }

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const currentLang = getCurrentLang()

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Globe button */}
      <button
        type="button"
        aria-label="Change Language"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          height: '36px',
          width: '36px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          color: '#6b7280',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          style={{ height: '20px', width: '20px' }}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: '8px',
            width: '200px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            backgroundColor: '#ffffff',
            padding: '8px 0',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            zIndex: 9999,
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 16px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
                backgroundColor: currentLang === lang.code ? 'rgba(37,99,235,0.05)' : 'transparent',
                color: currentLang === lang.code ? '#2563EB' : '#374151',
                fontWeight: currentLang === lang.code ? 600 : 400,
              }}
            >
              <span style={{ fontSize: '16px' }}>{lang.flag}</span>
              <span style={{ flex: 1 }}>{lang.name}</span>
              {currentLang === lang.code && (
                <svg style={{ height: '16px', width: '16px', color: '#2563EB' }} fill="currentColor" viewBox="0 0 20 20">
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
