import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Articles',
  description: 'Perspectives stratégiques et analyses sur l\'IA, l\'informatique quantique, la transformation des télécommunications et l\'avenir de l\'économie numérique.',
  alternates: {
    canonical: 'https://telcotank.com/fr/articles/',
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
    locale: 'fr_FR',
  },
}

export default function Page() {
  return <ArticlesLocalized lang="fr" />
}
