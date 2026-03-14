import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — المقالات',
  description: 'رؤى استراتيجية وتحليل حول الذكاء الاصطناعي والحوسبة الكمية وتحول الاتصالات ومستقبل البنية التحتية الرقمية.',
}

export default function Page() {
  return <ArticlesLocalized lang="ar" />
}
