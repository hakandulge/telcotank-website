import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Secteurs',
  description: 'Telcotank propose du conseil en transformation dans les secteurs des télécommunications, des services financiers, de la technologie et de l\'infrastructure numérique.',
  alternates: {
    canonical: 'https://telcotank.com/fr/industries/',
    languages: {
      'en': 'https://telcotank.com/industries/',
      'tr': 'https://telcotank.com/tr/industries/',
      'ar': 'https://telcotank.com/ar/industries/',
      'es': 'https://telcotank.com/es/industries/',
      'pt': 'https://telcotank.com/pt/industries/',
      'ru': 'https://telcotank.com/ru/industries/',
      'de': 'https://telcotank.com/de/industries/',
      'fr': 'https://telcotank.com/fr/industries/',
      'x-default': 'https://telcotank.com/industries/',
    },
  },
  openGraph: {
    locale: 'fr_FR',
  },
}

export default function Page() {
  return <IndustriesLocalized lang="fr" />
}
