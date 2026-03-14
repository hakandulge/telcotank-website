import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Yetenekler',
  description: 'Telcotank dönüşüm stratejisi, AI dönüşümü ve büyüme hızlandırması danışmanlığı hizmetleri sunar.',
  alternates: {
    canonical: 'https://telcotank.com/tr/capabilities/',
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
    locale: 'tr_TR',
  },
}

export default function Page() {
  return <CapabilitiesLocalized lang="tr" />
}
