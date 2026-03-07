import { Metadata } from 'next'
import Link from '@/components/Link'
import { articles } from '@/data/articles'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: 'Article Not Found — Telcotank' }
  return {
    title: `${article.title} — Telcotank`,
    description: article.summary,
    keywords: [article.theme, 'Telcotank', 'strategic analysis', 'consulting insights'].filter(Boolean),
    openGraph: {
      title: `${article.title} — Telcotank`,
      description: article.summary,
      url: `https://telcotank.com/articles/${slug}`,
      siteName: 'Telcotank',
      locale: 'en_US',
      type: 'article',
      ...(article.image && { images: [article.image] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} — Telcotank`,
      description: article.summary,
    },
    alternates: {
      canonical: `https://telcotank.com/articles/${slug}`,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = articles.findIndex((a) => a.slug === slug)
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/9] w-full overflow-hidden bg-gray-100 sm:aspect-[3/1]">
          <img
            src={article.heroImage}
            alt={article.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-6 pb-12 lg:px-8">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
              {article.theme}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
              <span>By {article.author}</span>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <span>{article.date}</span>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-20">
        {/* Summary box */}
        <div className="mb-12 rounded-xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Key Takeaway
          </p>
          <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
            {article.summary}
          </p>
        </div>

        {/* Body */}
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-p:text-gray-600 prose-p:leading-8 dark:prose-p:text-gray-300">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Additional images */}
        {article.images.length > 1 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {article.images.slice(1).map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`${article.title} — illustration ${idx + 2}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Author */}
        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{article.author}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Founder & Managing Director, Telcotank. 20+ years in telecom transformation, AI
            strategy, and digital infrastructure advisory.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 grid gap-4 border-t border-gray-200 pt-8 sm:grid-cols-2 dark:border-gray-800">
          {prevArticle ? (
            <Link
              href={`/articles/${prevArticle.slug}`}
              className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-200 hover:shadow-sm dark:border-gray-800"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">&larr; Previous</p>
              <p className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">
                {prevArticle.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/articles/${nextArticle.slug}`}
              className="group rounded-lg border border-gray-200 p-4 text-right transition-all hover:border-blue-200 hover:shadow-sm dark:border-gray-800"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Next &rarr;</p>
              <p className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">
                {nextArticle.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to articles */}
        <div className="mt-8 text-center">
          <Link
            href="/articles"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#0A2540]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Explore Our Strategic Frameworks
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-300">
              Go deeper with comprehensive strategy publications spanning 50 to 100 pages of
              original research, market data, and actionable frameworks.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/strategicintelligence"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                View Publications
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
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
