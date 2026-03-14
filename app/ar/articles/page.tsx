import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — المقالات',
  description: 'رؤى استراتيجية وتحليل حول الذكاء الاصطناعي والحوسبة الكمية وتحول الاتصالات ومستقبل البنية التحتية الرقمية.',
  alternates: {
    canonical: 'https://telcotank.com/ar/articles/',
    languages: {
      'en': 'https://telcotank.com/articles/',
      'tr': 'https://telcotank.com/tr/articles/',
      'ar': 'https://telcotank.com/ar/articles/',
      'es': 'https://telcotank.com/es/articles/',
      'pt': 'https://telcotank.com/pt/articles/',
      'ru': 'https://telcotank.com/ru/articles/',
      'de': 'https://telcotank.com/de/articles/',
      'fr': 'https://telcotank.com/fr/articles/',
      'x-default': 'https://telcotank.com/articles/',
    },
  },
  openGraph: {
    locale: 'ar_SA',
  },
}

export default function Page() {
  return <ArticlesLocalized lang="ar" />
}
