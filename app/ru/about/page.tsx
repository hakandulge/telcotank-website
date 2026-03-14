import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — О нас',
  description: 'Telcotank была основана в 2004 году и предоставляет услуги консультирования по трансформации.',
  alternates: {
    canonical: 'https://telcotank.com/ru/about/',
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
    locale: 'ru_RU',
  },
}

export default function Page() {
  return <AboutLocalized lang="ru" />
}
