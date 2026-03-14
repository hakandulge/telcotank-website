import { Metadata } from 'next'
import ContactLocalized from '../../ContactLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — İletişim',
  description: 'Telcotank ile iletişime geçin ve dönüşüm stratejiniz hakkında konuşun.',
  alternates: {
    canonical: 'https://telcotank.com/tr/contact/',
    languages: {
      'en': 'https://telcotank.com/contact/',
      'tr': 'https://telcotank.com/tr/contact/',
      'ar': 'https://telcotank.com/ar/contact/',
      'es': 'https://telcotank.com/es/contact/',
      'pt': 'https://telcotank.com/pt/contact/',
      'ru': 'https://telcotank.com/ru/contact/',
      'de': 'https://telcotank.com/de/contact/',
      'fr': 'https://telcotank.com/fr/contact/',
      'x-default': 'https://telcotank.com/contact/',
    },
  },
  openGraph: {
    locale: 'tr_TR',
  },
}

export default function Page() {
  return <ContactLocalized lang="tr" />
}
