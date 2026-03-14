import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Intelligence Stratégique : Cadres IA, Télécommunications et Économie Numérique',
  description: 'Cadres de recherche stratégique style McKinsey sur la transformation de l\'IA, la demande de centres de données, la dynamique des semi-conducteurs, la stratégie d\'IA souveraine et l\'infrastructure numérique pour les dirigeants et investisseurs.',
  keywords: ['intelligence stratégique', 'cadre stratégique IA', 'analyse du marché des centres de données', 'stratégie des semi-conducteurs', 'IA souveraine', 'recherche infrastructure numérique', 'recherche industrie des télécommunications', 'investissement infrastructure IA', 'conseil IA entreprise'],
  alternates: {
    canonical: 'https://telcotank.com/fr/strategicintelligence/',
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
    title: 'Telcotank — Intelligence Stratégique : Cadres IA, Télécommunications et Économie Numérique',
    description: 'Cadres de recherche stratégique style McKinsey sur la transformation de l\'IA, la demande de centres de données, la dynamique des semi-conducteurs et l\'infrastructure numérique.',
    url: 'https://telcotank.com/fr/strategicintelligence/',
    siteName: 'Telcotank',
    images: ['/static/images/social-banner.png'],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    title: 'Telcotank — Intelligence Stratégique',
    card: 'summary_large_image',
    images: ['/static/images/social-banner.png'],
    description: 'Cadres de recherche stratégique sur la transformation de l\'IA, les centres de données et l\'infrastructure numérique.',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="fr" />
}
