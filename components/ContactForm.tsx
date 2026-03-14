'use client'

import { useState, FormEvent } from 'react'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru'

export default function ContactForm({ lang = 'en' as Lang }: { lang?: Lang }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const t = translations[lang].contactForm

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      topic: formData.get('topic'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json()
        throw new Error(result.error || 'Something went wrong.')
      }

      setStatus('success')
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err.message || 'Failed to send message. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
        <div className="flex flex-col items-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[#0A2540]">{t.messageSent}</h2>
          <p className="mt-3 text-gray-600">{t.thankYou}</p>
          <p className="mt-2 text-sm text-gray-500">{t.confirmationEmail}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
      <h2 className="text-xl font-semibold text-[#0A2540]">{t.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{t.subtitle}</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              {t.firstName} <span className="text-red-500">*</span>
            </label>
            <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2563EB] focus:ring-[#2563EB]" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t.lastName}</label>
            <input type="text" id="lastName" name="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2563EB] focus:ring-[#2563EB]" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t.email} <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2563EB] focus:ring-[#2563EB]" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t.company}</label>
          <input type="text" id="company" name="company" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2563EB] focus:ring-[#2563EB]" />
        </div>
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">{t.topicOfInterest}</label>
          <select id="topic" name="topic" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2563EB] focus:ring-[#2563EB]">
            <option value="">{t.selectTopic}</option>
            <option>{t.topicTransformation}</option>
            <option>{t.topicGrowth}</option>
            <option>{t.topicAI}</option>
            <option>{t.topicMarketEntry}</option>
            <option>{t.topicInvestment}</option>
            <option>{t.topicOther}</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {t.message} <span className="text-red-500">*</span>
          </label>
          <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2563EB] focus:ring-[#2563EB]" placeholder={t.messagePlaceholder} />
        </div>

        {status === 'error' && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-700">{errorMessage}</p>
          </div>
        )}

        <button type="submit" disabled={status === 'sending'} className="w-full rounded-md bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60">
          {status === 'sending' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t.sending}
            </span>
          ) : (
            t.sendMessage
          )}
        </button>
      </form>
    </div>
  )
}
