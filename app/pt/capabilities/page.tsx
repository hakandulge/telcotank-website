import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Capacidades',
  description: 'Telcotank oferece serviços de consultoria em estratégia de transformação, transformação de IA e aceleração de crescimento.',
  alternates: {
    canonical: 'https://telcotank.com/pt/capabilities/',
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
    locale: 'pt_BR',
  },
}

export default function Page() {
  return <CapabilitiesLocalized lang="pt" />
}
