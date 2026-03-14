import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Makaleler',
  description: 'AI, kuantum bilişim, telekomünikasyon dönüşümü ve dijital ekonominin geleceği hakkında stratejik içgörüler ve analiz.',
  alternates: {
    canonical: 'https://telcotank.com/tr/articles/',
    languages: {
      'en': 'https://telcotank.com/articles/',
      'tr': 'https://telcotank.com/tr/articles/',
      'ar': 'https://telcotank.com/ar/articles/',
      'es': 'https://telcotank.com/es/articles/',
      'pt': 'https://telcotank.com/pt/articles/',
      'ru': 'https://telcotank.com/ru/articles/',
      'x-default': 'https://telcotank.com/articles/',
    },
  },
  openGraph: {
    locale: 'tr_TR',
  },
}

export default function Page() {
  return <ArticlesLocalized lang="tr" />
}
