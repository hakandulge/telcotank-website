import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — À propos',
  description: 'Telcotank est une entreprise de conseil en transformation depuis 2004.',
  alternates: {
    canonical: 'https://telcotank.com/fr/about/',
    languages: {
      'en': 'https://telcotank.com/about/',
      'tr': 'https://telcotank.com/tr/about/',
      'ar': 'https://telcotank.com/ar/about/',
      'es': 'https://telcotank.com/es/about/',
      'pt': 'https://telcotank.com/pt/about/',
      'ru': 'https://telcotank.com/ru/about/',
      'de': 'https://telcotank.com/de/about/',
      'fr': 'https://telcotank.com/fr/about/',
      'x-default': 'https://telcotank.com/about/',
    },
  },
  openGraph: {
    locale: 'fr_FR',
  },
}

export default function Page() {
  return <AboutLocalized lang="fr" />
}
