import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Sektörler',
  description: 'Telcotank telekomünikasyon, finansal hizmetler, teknoloji ve dijital altyapı sektörlerinde dönüşüm danışmanlığı sunar.',
  alternates: {
    canonical: 'https://telcotank.com/tr/industries/',
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
    locale: 'tr_TR',
  },
}

export default function Page() {
  return <IndustriesLocalized lang="tr" />
}
