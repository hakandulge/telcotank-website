import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — من نحن',
  description: 'تأسست تيلكوتانك في عام 2004 وتقدم خدمات استشارات التحول.',
  alternates: {
    canonical: 'https://telcotank.com/ar/about/',
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
    locale: 'ar_SA',
  },
}

export default function Page() {
  return <AboutLocalized lang="ar" />
}
