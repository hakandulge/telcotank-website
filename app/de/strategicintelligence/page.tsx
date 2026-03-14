import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Strategische Intelligenz: KI-, Telekommunikations- und Digitalwirtschafts-Frameworks',
  description: 'Strategische Forschungsrahmen im McKinsey-Stil zu KI-Transformation, Rechenzentrumsnachfrage, Halbleiterdynamik, souveräner KI-Strategie und digitaler Infrastruktur für Unternehmensführer und Investoren.',
  keywords: ['strategische Intelligenz', 'KI-Strategie-Framework', 'Rechenzentrum-Marktanalyse', 'Halbleiterstrategie', 'souveräne KI', 'digitale Infrastrukturforschung', 'Telekommunikationsbranchenforschung', 'KI-Infrastruktur-Investition', 'Unternehmens-KI-Beratung'],
  alternates: {
    canonical: 'https://telcotank.com/de/strategicintelligence/',
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
    title: 'Telcotank — Strategische Intelligenz: KI-, Telekommunikations- und Digitalwirtschafts-Frameworks',
    description: 'Strategische Forschungsrahmen im McKinsey-Stil zu KI-Transformation, Rechenzentrumsnachfrage, Halbleiterdynamik und digitaler Infrastruktur.',
    url: 'https://telcotank.com/de/strategicintelligence/',
    siteName: 'Telcotank',
    images: ['/static/images/social-banner.png'],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    title: 'Telcotank — Strategische Intelligenz',
    card: 'summary_large_image',
    images: ['/static/images/social-banner.png'],
    description: 'Strategische Forschungsrahmen zu KI-Transformation, Rechenzentren und digitaler Infrastruktur.',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="de" />
}
