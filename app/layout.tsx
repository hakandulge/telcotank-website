import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | Telcotank`,
  },
  description: siteMetadata.description,
  keywords: [
    'transformation consulting',
    'telecom consulting',
    'digital transformation strategy',
    'AI transformation',
    'management consulting',
    'telecom strategy',
    'growth acceleration',
    'market entry consulting',
    'M&A advisory telecom',
    'enterprise AI governance',
    'Telcotank',
  ],
  icons: {
    apple: [{ url: '/static/favicons/apple-touch-icon.png', sizes: '76x76' }],
    icon: [
      { url: '/static/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/static/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/static/favicons/safari-pinned-tab.svg', color: '#0A2540' },
    ],
  },
  manifest: '/static/favicons/site.webmanifest',
  verification: {
    google: 'eqGCTg0YbBKp4lD-EfLp_Fl-51sqZwTb6PziVTsptqE',
  },
  other: {
    'msapplication-TileColor': '#0A2540',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: 'Telcotank',
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N1GSLNGVD5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N1GSLNGVD5', {
                page_title: document.title,
                send_page_view: true
              });
            `,
          }}
        />
      </head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <body className="bg-white pl-[calc(100vw-100%)] text-gray-900 antialiased dark:bg-gray-950 dark:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://telcotank.com/#organization',
                  name: 'Telcotank',
                  url: 'https://telcotank.com',
                  logo: 'https://telcotank.com/static/images/telcotank-logo.png',
                  foundingDate: '2004',
                  description: siteMetadata.description,
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'info@telcotank.com',
                    contactType: 'customer service',
                  },
                  sameAs: ['https://www.linkedin.com/company/telcotank'],
                  knowsAbout: [
                    'Digital Transformation',
                    'Telecom Consulting',
                    'AI Strategy',
                    'Management Consulting',
                    'Growth Acceleration',
                    'Market Entry Strategy',
                    'M&A Advisory',
                  ],
                  areaServed: 'Worldwide',
                  numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-50' },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://telcotank.com/#website',
                  url: 'https://telcotank.com',
                  name: 'Telcotank',
                  publisher: { '@id': 'https://telcotank.com/#organization' },
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://telcotank.com/#service',
                  name: 'Telcotank Consulting',
                  provider: { '@id': 'https://telcotank.com/#organization' },
                  serviceType: [
                    'Transformation Strategy Consulting',
                    'AI Transformation & Governance',
                    'Growth Acceleration',
                    'Market Entry & Expansion',
                    'Investment & M&A Advisory',
                  ],
                  areaServed: 'Worldwide',
                },
              ],
            }),
          }}
        />
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
            <Header />
            <main>{children}</main>
          </SearchProvider>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
