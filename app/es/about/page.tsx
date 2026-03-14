import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Acerca de',
  description: 'Telcotank fue fundada en 2004 y ofrece servicios de consultoría de transformación.',
  alternates: {
    canonical: 'https://telcotank.com/es/about/',
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
    locale: 'es_ES',
  },
}

export default function Page() {
  return <AboutLocalized lang="es" />
}
