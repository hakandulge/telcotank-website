import { Metadata } from 'next'
import MainLocalized from '../MainLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Là où la stratégie rencontre la transformation menée par l\'homme',
  description: 'Conseil en transformation dirigé par l\'IA pour les entreprises de télécommunications, de services financiers et de technologie.',
  alternates: {
    canonical: 'https://telcotank.com/fr',
    languages: {
      'en': 'https://telcotank.com/',
      'tr': 'https://telcotank.com/tr/',
      'ar': 'https://telcotank.com/ar/',
      'es': 'https://telcotank.com/es/',
      'pt': 'https://telcotank.com/pt/',
      'ru': 'https://telcotank.com/ru/',
      'de': 'https://telcotank.com/de/',
      'fr': 'https://telcotank.com/fr/',
      'x-default': 'https://telcotank.com/',
    },
  },
  openGraph: {
    locale: 'fr_FR',
  },
}

export default function FRHome() {
  return <MainLocalized lang="fr" />
}
