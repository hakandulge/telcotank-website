import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — الاستخبارات الاستراتيجية',
  description: 'أطر بحثية استراتيجية حول تحول الذكاء الاصطناعي وطلب مراكز البيانات وديناميكيات أشباه الموصلات والبنية التحتية الرقمية.',
  alternates: {
    canonical: 'https://telcotank.com/ar/strategicintelligence/',
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
    locale: 'ar_SA',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="ar" />
}
