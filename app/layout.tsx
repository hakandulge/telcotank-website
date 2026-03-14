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
        {/* Google Analytics 4 — Enhanced Executive Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N1GSLNGVD5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // --- Multi-Language & Content Section Detection ---
              (function() {
                var path = window.location.pathname;
                var langs = ['tr','ar','es','pt','ru','de','fr'];
                var detectedLang = 'en';
                var pathSegments = path.split('/').filter(Boolean);
                if (pathSegments.length > 0 && langs.indexOf(pathSegments[0]) !== -1) {
                  detectedLang = pathSegments[0];
                }
                var sections = ['strategicintelligence','articles','casestudies','capabilities','about','contact'];
                var detectedSection = 'home';
                for (var i = 0; i < pathSegments.length; i++) {
                  if (sections.indexOf(pathSegments[i]) !== -1) {
                    detectedSection = pathSegments[i];
                    break;
                  }
                }
                window._siteLang = detectedLang;
                window._contentSection = detectedSection;
              })();

              gtag('config', 'G-N1GSLNGVD5', {
                page_title: document.title,
                send_page_view: true,
                site_language: window._siteLang,
                content_section: window._contentSection
              });

              // --- Enhanced Engagement Tracking ---

              // 1. Scroll Depth Tracking (25%, 50%, 75%, 100%)
              (function() {
                var scrollMarks = [25, 50, 75, 100];
                var fired = {};
                window.addEventListener('scroll', function() {
                  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                  if (docHeight <= 0) return;
                  var scrollPercent = Math.round((scrollTop / docHeight) * 100);
                  scrollMarks.forEach(function(mark) {
                    if (scrollPercent >= mark && !fired[mark]) {
                      fired[mark] = true;
                      gtag('event', 'scroll_depth', {
                        event_category: 'Engagement',
                        event_label: mark + '%',
                        value: mark,
                        page_path: window.location.pathname,
                        site_language: window._siteLang,
                        content_section: window._contentSection
                      });
                    }
                  });
                });
              })();

              // 2. Time on Page Tracking (30s, 60s, 120s, 300s)
              (function() {
                var timeMarks = [30, 60, 120, 300];
                var startTime = Date.now();
                timeMarks.forEach(function(seconds) {
                  setTimeout(function() {
                    if (!document.hidden) {
                      gtag('event', 'time_on_page', {
                        event_category: 'Engagement',
                        event_label: seconds + 's',
                        value: seconds,
                        page_path: window.location.pathname,
                        site_language: window._siteLang,
                        content_section: window._contentSection
                      });
                    }
                  }, seconds * 1000);
                });
              })();

              // 3. CTA / Button Click Tracking
              document.addEventListener('click', function(e) {
                var target = e.target.closest('a, button');
                if (!target) return;
                var text = (target.innerText || '').trim().substring(0, 50);
                var href = target.getAttribute('href') || '';

                // Track contact/CTA clicks
                if (href.includes('/contact') || href.includes('mailto:') || href.includes('linkedin.com') || text.match(/contact|get in touch|schedule|book|inquire/i)) {
                  gtag('event', 'cta_click', {
                    event_category: 'Conversion',
                    event_label: text,
                    link_url: href,
                    page_path: window.location.pathname,
                    site_language: window._siteLang,
                    content_section: window._contentSection
                  });
                }

                // Track navigation clicks
                if (target.tagName === 'A' && href.startsWith('/')) {
                  gtag('event', 'internal_navigation', {
                    event_category: 'Navigation',
                    event_label: text,
                    link_url: href,
                    page_path: window.location.pathname,
                    site_language: window._siteLang,
                    content_section: window._contentSection
                  });
                }

                // Track external link clicks
                if (target.tagName === 'A' && href.startsWith('http') && !href.includes('telcotank.com')) {
                  gtag('event', 'external_link_click', {
                    event_category: 'Outbound',
                    event_label: href,
                    page_path: window.location.pathname,
                    site_language: window._siteLang,
                    content_section: window._contentSection
                  });
                }
              });

              // 4. Content Section Visibility Tracking
              if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                  entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                      var section = entry.target.getAttribute('id') || entry.target.getAttribute('data-section') || '';
                      if (section) {
                        gtag('event', 'section_view', {
                          event_category: 'Content',
                          event_label: section,
                          page_path: window.location.pathname,
                          site_language: window._siteLang,
                          content_section: window._contentSection
                        });
                        observer.unobserve(entry.target);
                      }
                    }
                  });
                }, { threshold: 0.5 });
                document.addEventListener('DOMContentLoaded', function() {
                  document.querySelectorAll('section[id], [data-section]').forEach(function(el) {
                    observer.observe(el);
                  });
                });
              }

              // 5. Exit Intent Tracking
              document.addEventListener('mouseout', function(e) {
                if (e.clientY < 5 && !window._exitFired) {
                  window._exitFired = true;
                  var timeSpent = Math.round((Date.now() - (window._pageStart || Date.now())) / 1000);
                  gtag('event', 'exit_intent', {
                    event_category: 'Engagement',
                    event_label: window.location.pathname,
                    value: timeSpent,
                    site_language: window._siteLang,
                    content_section: window._contentSection
                  });
                }
              });
              window._pageStart = Date.now();
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
