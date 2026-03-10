'use client';

import { useState } from 'react';

const SUBSCRIBE_URL = 'https://airbridge.telcotank.com/api/subscribe';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          company,
          phone,
          segment: 'telcotankweb',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Welcome! You\'ll receive Telcotank updates and insights soon.');
        setEmail('');
        setFirstName('');
        setLastName('');
        setCompany('');
        setPhone('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

  return (
    <section className="bg-[#0A2540] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
            <svg
              className="h-8 w-8 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
          Stay Updated with Telcotank
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-10 mt-4 max-w-2xl text-lg text-gray-300">
          Sign up for strategic insights, industry analysis, and updates from Telcotank
          — delivered straight to your inbox.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div className="mx-auto max-w-xl rounded-xl border border-green-500/30 bg-green-500/10 p-6">
            <div className="flex items-center justify-center gap-2 text-green-400">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">{message}</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
            {/* Row 1: First name / Last name */}
            <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className={inputClass}
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className={inputClass}
              />
            </div>

            {/* Row 2: Company / Mobile Phone */}
            <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name (optional)"
                className={inputClass}
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile phone (optional)"
                className={inputClass}
              />
            </div>

            {/* Row 3: Email + Subscribe */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className={`flex-1 ${inputClass}`}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="whitespace-nowrap rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:bg-blue-600/50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-3 text-sm text-red-400">{message}</p>
            )}

            <p className="mt-4 text-xs text-gray-500">
              Free updates. No spam. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
