import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Sobre Nós',
  description: 'Telcotank foi fundada em 2004 e oferece serviços de consultoria de transformação.',
  alternates: {
    canonical: 'https://telcotank.com/pt/about/',
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
    locale: 'pt_BR',
  },
}

export default function Page() {
  return <AboutLocalized lang="pt" />
}
