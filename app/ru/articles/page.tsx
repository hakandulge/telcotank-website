import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Статьи',
  description: 'Стратегические аналитические материалы по ИИ, квантовым вычислениям, трансформации телекоммуникаций и будущему цифровой инфраструктуры.',
  alternates: {
    canonical: 'https://telcotank.com/ru/articles/',
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
    locale: 'ru_RU',
  },
}

export default function Page() {
  return <ArticlesLocalized lang="ru" />
}
