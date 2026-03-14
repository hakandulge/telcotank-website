import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { articles } from '@/data/articles'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

const LANGUAGES = ['tr', 'ar', 'es', 'pt', 'ru', 'de', 'fr'] as const
const SITE = siteMetadata.siteUrl
const TODAY = new Date().toISOString().split('T')[0]

/** Build hreflang alternates map for a given path (no leading slash) */
function langAlternates(path: string) {
  const alts: Record<string, string> = {
    en: path === '' ? `${SITE}/` : `${SITE}/${path}/`,
  }
  for (const lang of LANGUAGES) {
    alts[lang] = path === '' ? `${SITE}/${lang}/` : `${SITE}/${lang}/${path}/`
  }
  alts['x-default'] = alts.en
  return alts
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Core pages ──
  const corePages = [
    '', // homepage
    'capabilities',
    'industries',
    'case-studies',
    'about',
    'contact',
    'articles',
    'strategicintelligence',
  ]

  const coreEntries: MetadataRoute.Sitemap = []

  for (const page of corePages) {
    const priority = page === '' ? 1.0
      : ['capabilities', 'industries', 'strategicintelligence'].includes(page) ? 0.9
      : page === 'contact' ? 0.9
      : 0.8

    // English version
    coreEntries.push({
      url: page === '' ? `${SITE}/` : `${SITE}/${page}/`,
      lastModified: TODAY,
      changeFrequency: page === '' ? 'weekly' : 'monthly',
      priority,
      alternates: { languages: langAlternates(page) },
    })

    // Each language version
    for (const lang of LANGUAGES) {
      coreEntries.push({
        url: page === '' ? `${SITE}/${lang}/` : `${SITE}/${lang}/${page}/`,
        lastModified: TODAY,
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: priority * 0.95, // slightly lower than English for lang variants
        alternates: { languages: langAlternates(page) },
      })
    }
  }

  // ── Article detail pages ──
  const articleEntries: MetadataRoute.Sitemap = []

  for (const article of articles) {
    const path = `articles/${article.slug}`
    const lastMod = article.date
      ? new Date(article.date).toISOString().split('T')[0]
      : TODAY

    // English
    articleEntries.push({
      url: `${SITE}/${path}/`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: { languages: langAlternates(path) },
    })

    // Each language
    for (const lang of LANGUAGES) {
      articleEntries.push({
        url: `${SITE}/${lang}/${path}/`,
        lastModified: lastMod,
        changeFrequency: 'yearly',
        priority: 0.65,
        alternates: { languages: langAlternates(path) },
      })
    }
  }

  // ── English-only pages ──
  const enOnlyPages = ['projects', 'blog', 'tags'].map((route) => ({
    url: `${SITE}/${route}/`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // ── Blog posts (English only) ──
  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${SITE}/${post.path}/`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    }))

  return [...coreEntries, ...articleEntries, ...enOnlyPages, ...blogRoutes]
}
