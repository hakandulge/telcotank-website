import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Artículos',
  description: 'Perspectivas estratégicas y análisis sobre IA, computación cuántica, transformación de telecomunicaciones y el futuro de la infraestructura digital.',
  alternates: {
    canonical: 'https://telcotank.com/es/articles/',
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
    locale: 'es_ES',
  },
}

export default function Page() {
  return <ArticlesLocalized lang="es" />
}
