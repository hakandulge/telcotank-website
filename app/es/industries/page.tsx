import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Industrias',
  description: 'Telcotank ofrece servicios de consultoría de transformación en telecomunicaciones, servicios financieros, tecnología e infraestructura digital.',
  alternates: {
    canonical: 'https://telcotank.com/es/industries/',
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
    locale: 'es_ES',
  },
}

export default function Page() {
  return <IndustriesLocalized lang="es" />
}
