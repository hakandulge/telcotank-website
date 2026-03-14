import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Inteligência Estratégica: Frameworks de IA, Telecomunicações e Economia Digital',
  description: 'Frameworks de pesquisa estratégica estilo McKinsey sobre transformação de IA, demanda de data centers, dinâmica de semicondutores, estratégia de IA soberana e infraestrutura digital para líderes empresariais e investidores.',
  keywords: ['inteligência estratégica', 'framework de estratégia de IA', 'análise de mercado de data centers', 'estratégia de semicondutores', 'IA soberana', 'pesquisa de infraestrutura digital', 'pesquisa da indústria de telecomunicações', 'investimento em infraestrutura de IA', 'consultoria empresarial de IA'],
  alternates: {
    canonical: 'https://telcotank.com/pt/strategicintelligence/',
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
    title: 'Telcotank — Inteligência Estratégica: Frameworks de IA, Telecomunicações e Economia Digital',
    description: 'Frameworks de pesquisa estratégica estilo McKinsey sobre transformação de IA, demanda de data centers, dinâmica de semicondutores e infraestrutura digital.',
    url: 'https://telcotank.com/pt/strategicintelligence/',
    siteName: 'Telcotank',
    images: ['/static/images/social-banner.png'],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    title: 'Telcotank — Inteligência Estratégica',
    card: 'summary_large_image',
    images: ['/static/images/social-banner.png'],
    description: 'Frameworks de pesquisa estratégica sobre transformação de IA, data centers e infraestrutura digital.',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="pt" />
}
