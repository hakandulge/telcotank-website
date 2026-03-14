import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Études de cas',
  description: 'Telcotank présente des cas de transformation réussis et des résultats de conseil.',
  alternates: {
    canonical: 'https://telcotank.com/fr/case-studies/',
    languages: {
      'en': 'https://telcotank.com/case-studies/',
      'tr': 'https://telcotank.com/tr/case-studies/',
      'ar': 'https://telcotank.com/ar/case-studies/',
      'es': 'https://telcotank.com/es/case-studies/',
      'pt': 'https://telcotank.com/pt/case-studies/',
      'ru': 'https://telcotank.com/ru/case-studies/',
      'de': 'https://telcotank.com/de/case-studies/',
      'fr': 'https://telcotank.com/fr/case-studies/',
      'x-default': 'https://telcotank.com/case-studies/',
    },
  },
  openGraph: {
    locale: 'fr_FR',
  },
}

export default function Page() {
  return <CaseStudiesLocalized lang="fr" />
}
