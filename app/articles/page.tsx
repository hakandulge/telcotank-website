import { Metadata } from 'next'
import Link from '@/components/Link'
import { articles } from '@/data/articles'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Articles — Strategic Insights on AI, Telecom & Digital Economy',
  description:
    'Strategic insights and analysis on AI, quantum computing, telecom transformation, and the future of digital infrastructure by Telcotank.',
  keywords: ['AI articles', 'telecom strategy insights', 'quantum computing analysis', 'digital infrastructure articles', 'technology strategy blog'],
  canonical: 'https://telcotank.com/articles',
})

function ThemeTag({ theme }: { theme: string }) {
  const colors: Record<string, string> = {
    'AI & Quantum Computing': 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Emerging Technology': 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'Telecom Industry Strategy':
      'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  }
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${colors[theme] || 'bg-gray-100 text-gray-600'}`}
    >
      {theme}
    </span>
  )
}

export default function ArticlesPage() {
  const featuredArticle = articles[0]
  const remainingArticles = articles.slice(1)

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0A2540] py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 25%, #2563EB 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1D4ED8 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Telcotank Articles
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Strategic Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              In-depth analysis on the forces reshaping telecommunications, artificial intelligence,
              quantum computing, and the global digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Featured
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Latest Article
          </h2>
        </div>

        <Link href={`/articles/${featuredArticle.slug}`} className="group relative grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 lg:aspect-auto lg:min-h-[400px]">
            <img
              src={featuredArticle.heroImage}
              alt={featuredArticle.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <ThemeTag theme={featuredArticle.theme} />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {featuredArticle.readTime}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-gray-900 group-hover:text-blue-600 dark:text-white lg:text-4xl">
              {featuredArticle.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {featuredArticle.date}
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              {featuredArticle.summary}
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                Read full article
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-200 dark:border-gray-800" />
      </div>

      {/* All Articles Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            All Articles
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Analysis & Commentary
          </h2>
          <p className="mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-400">
            Original research and strategic analysis on the technologies, business models, and
            market forces transforming global industries.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {remainingArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <ThemeTag theme={article.theme} />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-gray-900 group-hover:text-blue-600 dark:text-white">
                  {article.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{article.date}</p>
                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {article.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Read article
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2540]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Access Our Strategic Frameworks
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-300">
              Go deeper with our comprehensive strategy publications — detailed analyses spanning 50
              to 100 pages of original research, market data, and actionable frameworks.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/strategicintelligence"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
              >
                View Publications
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
