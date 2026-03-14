import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Branchen',
  description: 'Telcotank bietet Transformationsberatung in Telekommunikation, Finanzdienstleistungen, Technologie und digitaler Infrastruktur.',
  alternates: {
    canonical: 'https://telcotank.com/de/industries/',
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
    locale: 'de_DE',
  },
}

export default function Page() {
  return <IndustriesLocalized lang="de" />
}
