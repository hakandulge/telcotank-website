import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const routes = [
    '',
    'capabilities',
    'industries',
    'case-studies',
    'about',
    'contact',
    'articles',
    'strategicintelligence',
    'projects',
    'blog',
    'tags',
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : ['capabilities', 'industries', 'strategicintelligence'].includes(route) ? 0.9 : route === 'contact' ? 0.9 : 0.8,
  }))

  return [...routes, ...blogRoutes]
}
