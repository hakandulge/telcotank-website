import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Artigos',
  description: 'Perspectivas estratégicas e análise sobre IA, computação quântica, transformação de telecomunicações e o futuro da infraestrutura digital.',
  alternates: {
    canonical: 'https://telcotank.com/pt/articles/',
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
    locale: 'pt_BR',
  },
}

export default function Page() {
  return <ArticlesLocalized lang="pt" />
}
