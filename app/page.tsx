import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import Main from './Main'

export const metadata = genPageMetadata({
  title: 'Telcotank | Transformation Strategy & Consulting for Telecom, AI & Digital Economy',
  description: 'Telcotank is a transformation strategy and management consulting firm. Since 2004, we help telecom operators, financial institutions, technology companies and investors with digital transformation, AI strategy, growth acceleration and market entry across 20+ countries.',
  keywords: [
    'transformation consulting',
    'telecom consulting firm',
    'AI strategy consulting',
    'digital transformation',
    'management consulting',
    'growth acceleration',
    'market entry strategy',
    'M&A advisory telecom',
    'enterprise AI governance',
    'Telcotank',
  ],
  canonical: 'https://telcotank.com',
})

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
