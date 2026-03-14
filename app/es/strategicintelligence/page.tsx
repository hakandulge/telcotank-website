import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Inteligencia Estratégica: Marcos de IA, Telecomunicaciones y Economía Digital',
  description: 'Marcos de investigación estratégica estilo McKinsey sobre transformación de IA, demanda de centros de datos, dinámica de semiconductores, estrategia de IA soberana e infraestructura digital para líderes empresariales e inversores.',
  keywords: ['inteligencia estratégica', 'marco estratégico de IA', 'análisis de mercado de centros de datos', 'estrategia de semiconductores', 'IA soberana', 'investigación de infraestructura digital', 'investigación de la industria de telecomunicaciones', 'inversión en infraestructura de IA', 'consultoría empresarial de IA'],
  alternates: {
    canonical: 'https://telcotank.com/es/strategicintelligence/',
    languages: {
      'en': 'https://telcotank.com/strategicintelligence/',
      'tr': 'https://telcotank.com/tr/strategicintelligence/',
      'ar': 'https://telcotank.com/ar/strategicintelligence/',
      'es': 'https://telcotank.com/es/strategicintelligence/',
      'pt': 'https://telcotank.com/pt/strategicintelligence/',
      'ru': 'https://telcotank.com/ru/strategicintelligence/',
      'de': 'https://telcotank.com/de/strategicintelligence/',
      'fr': 'https://telcotank.com/fr/strategicintelligence/',
      'x-default': 'https://telcotank.com/strategicintelligence/',
    },
  },
  openGraph: {
    title: 'Telcotank — Inteligencia Estratégica: Marcos de IA, Telecomunicaciones y Economía Digital',
    description: 'Marcos de investigación estratégica estilo McKinsey sobre transformación de IA, demanda de centros de datos, dinámica de semiconductores e infraestructura digital.',
    url: 'https://telcotank.com/es/strategicintelligence/',
    siteName: 'Telcotank',
    images: ['/static/images/social-banner.png'],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    title: 'Telcotank — Inteligencia Estratégica',
    card: 'summary_large_image',
    images: ['/static/images/social-banner.png'],
    description: 'Marcos de investigación estratégica sobre transformación de IA, centros de datos e infraestructura digital.',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="es" />
}
