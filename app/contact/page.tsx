import { genPageMetadata } from 'app/seo'
import ContactForm from '@/components/ContactForm'

export const metadata = genPageMetadata({
  title: 'Contact Telcotank — Request a Strategy Discussion',
  description: 'Get in touch with Telcotank to discuss your digital transformation, AI strategy, or market expansion challenge. We work with telecom operators, financial institutions and technology companies globally.',
})

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column */}
            <div>
              <h1 className="font-serif text-4xl font-semibold text-[#0A2540] md:text-5xl">
                Discuss Your Transformation Challenge
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Whether you are navigating digital transformation, exploring new markets, or
                seeking strategic clarity on AI adoption, we are ready to help.
              </p>
              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Office</h3>
                  <p className="mt-2 text-base text-gray-900">6800 Jericho Turnpike, Suite 120W, Syosset, NY 11791</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Phone</h3>
                  <p className="mt-2 text-base text-gray-900">
                    <a href="tel:+13475147470" className="text-gray-900 hover:text-[#2563EB]">
                      +1 (347) 514-7470
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Fax</h3>
                  <p className="mt-2 text-base text-gray-900">+1 (347) 514-7471</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Email</h3>
                  <p className="mt-2 text-base text-gray-900">
                    <a href="mailto:info@telcotank.com" className="text-gray-900 hover:text-[#2563EB]">
                      info@telcotank.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Meeting Link
                  </h3>
                  <a
                    href="https://meet.google.com/ntt-vpge-shj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#0A2540] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a3a5c]"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <path d="M15.5 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53L15.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="6" width="13.5" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    Join Google Meet
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/company/telcotank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-base text-[#2563EB] hover:text-[#1D4ED8]"
                  >
                    linkedin.com/company/telcotank
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Global Presence
                  </h3>
                  <p className="mt-2 text-base text-gray-700">
                    Projects delivered across 20+ countries in Americas, Europe, Middle East, Africa, and Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
