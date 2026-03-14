import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Casos de Estudio',
  description: 'Telcotank ofrece casos de estudio de transformación exitosa y resultados probados.',
  alternates: {
    canonical: 'https://telcotank.com/es/case-studies/',
    languages: {
      'en': 'https://telcotank.com/case-studies/',
      'tr': 'https://telcotank.com/tr/case-studies/',
      'ar': 'https://telcotank.com/ar/case-studies/',
      'es': 'https://telcotank.com/es/case-studies/',
      'pt': 'https://telcotank.com/pt/case-studies/',
      'ru': 'https://telcotank.com/ru/case-studies/',
      'x-default': 'https://telcotank.com/case-studies/',
    },
  },
  openGraph: {
    locale: 'es_ES',
  },
}

export default function Page() {
  return <CaseStudiesLocalized lang="es" />
}
