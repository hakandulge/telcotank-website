import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Capacités',
  description: 'Telcotank propose du conseil en stratégie de transformation, transformation de l\'IA et accélération de la croissance.',
  alternates: {
    canonical: 'https://telcotank.com/fr/capabilities/',
    languages: {
      'en': 'https://telcotank.com/capabilities/',
      'tr': 'https://telcotank.com/tr/capabilities/',
      'ar': 'https://telcotank.com/ar/capabilities/',
      'es': 'https://telcotank.com/es/capabilities/',
      'pt': 'https://telcotank.com/pt/capabilities/',
      'ru': 'https://telcotank.com/ru/capabilities/',
      'de': 'https://telcotank.com/de/capabilities/',
      'fr': 'https://telcotank.com/fr/capabilities/',
      'x-default': 'https://telcotank.com/capabilities/',
    },
  },
  openGraph: {
    locale: 'fr_FR',
  },
}

export default function Page() {
  return <CapabilitiesLocalized lang="fr" />
}
