import { articles } from '@/data/articles'
import ArticleDetailLocalized from '../../../ArticleDetailLocalized'

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <ArticleDetailLocalized lang="pt" slug={slug} />
}
