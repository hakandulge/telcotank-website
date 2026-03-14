import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Artikel',
  description: 'Strategische Einblicke und Analysen zu KI, Quantencomputing, Telekommunikationstransformation und der Zukunft der digitalen Wirtschaft.',
  alternates: {
    canonical: 'https://telcotank.com/de/articles/',
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
    locale: 'de_DE',
  },
}

export default function Page() {
  return <ArticlesLocalized lang="de" />
}
