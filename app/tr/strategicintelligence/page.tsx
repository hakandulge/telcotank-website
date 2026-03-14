import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Stratejik İstihbarat: Yapay Zeka, Telekom ve Dijital Ekonomi Çerçeveleri',
  description: 'Yapay zeka dönüşümü, veri merkezi talebi, yarı iletken dinamikleri, egemen yapay zeka stratejisi ve dijital altyapı üzerine McKinsey tarzı stratejik araştırma çerçeveleri. Kurumsal liderler ve yatırımcılar için.',
  keywords: ['stratejik istihbarat', 'yapay zeka strateji çerçevesi', 'veri merkezi pazar analizi', 'yarı iletken stratejisi', 'egemen yapay zeka', 'dijital altyapı araştırması', 'telekom sektör araştırması', 'yapay zeka altyapı yatırımı', 'kurumsal yapay zeka danışmanlığı'],
  alternates: {
    canonical: 'https://telcotank.com/tr/strategicintelligence/',
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
    title: 'Telcotank — Stratejik İstihbarat: Yapay Zeka, Telekom ve Dijital Ekonomi Çerçeveleri',
    description: 'Yapay zeka dönüşümü, veri merkezi talebi, yarı iletken dinamikleri ve dijital altyapı üzerine McKinsey tarzı stratejik araştırma çerçeveleri.',
    url: 'https://telcotank.com/tr/strategicintelligence/',
    siteName: 'Telcotank',
    images: ['/static/images/social-banner.png'],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    title: 'Telcotank — Stratejik İstihbarat',
    card: 'summary_large_image',
    images: ['/static/images/social-banner.png'],
    description: 'Yapay zeka dönüşümü, veri merkezi talebi ve dijital altyapı üzerine stratejik araştırma çerçeveleri.',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="tr" />
}
