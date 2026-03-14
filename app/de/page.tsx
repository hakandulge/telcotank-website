import { Metadata } from 'next'
import MainLocalized from '../MainLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Wo Strategie auf menschengeführte Transformation trifft',
  description: 'KI-gesteuerte Transformationsberatung für Telekommunikations-, Finanzdienstleistungs- und Technologieunternehmen.',
  alternates: {
    canonical: 'https://telcotank.com/de',
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
    locale: 'de_DE',
  },
}

export default function DEHome() {
  return <MainLocalized lang="de" />
}
