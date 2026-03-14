import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Capacidades',
  description: 'Telcotank ofrece servicios de consultoría en estrategia de transformación, transformación de IA y aceleración del crecimiento.',
  alternates: {
    canonical: 'https://telcotank.com/es/capabilities/',
    languages: {
      'en': 'https://telcotank.com/capabilities/',
      'tr': 'https://telcotank.com/tr/capabilities/',
      'ar': 'https://telcotank.com/ar/capabilities/',
      'es': 'https://telcotank.com/es/capabilities/',
      'pt': 'https://telcotank.com/pt/capabilities/',
      'ru': 'https://telcotank.com/ru/capabilities/',
      'x-default': 'https://telcotank.com/capabilities/',
    },
  },
  openGraph: {
    locale: 'es_ES',
  },
}

export default function Page() {
  return <CapabilitiesLocalized lang="es" />
}
