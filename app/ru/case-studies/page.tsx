import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Кейсы',
  description: 'Telcotank предоставляет успешные кейсы трансформации и доказанные результаты.',
  alternates: {
    canonical: 'https://telcotank.com/ru/case-studies/',
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
    locale: 'ru_RU',
  },
}

export default function Page() {
  return <CaseStudiesLocalized lang="ru" />
}
