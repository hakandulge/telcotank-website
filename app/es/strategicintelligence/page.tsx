import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Inteligencia Estratégica',
  description: 'Marcos de investigación estratégica sobre transformación de IA, demanda de centros de datos, dinámica de semiconductores e infraestructura digital.',
  alternates: {
    canonical: 'https://telcotank.com/es/strategicintelligence/',
    languages: {
      'en': 'https://telcotank.com/strategicintelligence/',
      'tr': 'https://telcotank.com/tr/strategicintelligence/',
      'ar': 'https://telcotank.com/ar/strategicintelligence/',
      'es': 'https://telcotank.com/es/strategicintelligence/',
      'pt': 'https://telcotank.com/pt/strategicintelligence/',
      'ru': 'https://telcotank.com/ru/strategicintelligence/',
      'x-default': 'https://telcotank.com/strategicintelligence/',
    },
  },
  openGraph: {
    locale: 'es_ES',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="es" />
}
