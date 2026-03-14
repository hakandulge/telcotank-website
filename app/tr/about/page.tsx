import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Hakkımızda',
  description: 'Telcotank 2004 yılından beri dönüşüm danışmanlığı hizmetleri sunan firmadır.',
  alternates: {
    canonical: 'https://telcotank.com/tr/about/',
    languages: {
      'en': 'https://telcotank.com/about/',
      'tr': 'https://telcotank.com/tr/about/',
      'ar': 'https://telcotank.com/ar/about/',
      'es': 'https://telcotank.com/es/about/',
      'pt': 'https://telcotank.com/pt/about/',
      'ru': 'https://telcotank.com/ru/about/',
      'x-default': 'https://telcotank.com/about/',
    },
  },
  openGraph: {
    locale: 'tr_TR',
  },
}

export default function Page() {
  return <AboutLocalized lang="tr" />
}
