import { Metadata } from 'next'
import ContactLocalized from '../../ContactLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Contacto',
  description: 'Póngase en contacto con Telcotank y permitamos ayudarle con su desafío estratégico.',
  alternates: {
    canonical: 'https://telcotank.com/es/contact/',
    languages: {
      'en': 'https://telcotank.com/contact/',
      'tr': 'https://telcotank.com/tr/contact/',
      'ar': 'https://telcotank.com/ar/contact/',
      'es': 'https://telcotank.com/es/contact/',
      'pt': 'https://telcotank.com/pt/contact/',
      'ru': 'https://telcotank.com/ru/contact/',
      'x-default': 'https://telcotank.com/contact/',
    },
  },
  openGraph: {
    locale: 'es_ES',
  },
}

export default function Page() {
  return <ContactLocalized lang="es" />
}
