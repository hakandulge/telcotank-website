import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Fähigkeiten',
  description: 'Telcotank bietet Beratung in Transformationsstrategie, KI-Transformation und Wachstumsbeschleunigung.',
  alternates: {
    canonical: 'https://telcotank.com/de/capabilities/',
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
    locale: 'de_DE',
  },
}

export default function Page() {
  return <CapabilitiesLocalized lang="de" />
}
