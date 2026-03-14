import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Стратегическая Разведка',
  description: 'Стратегические исследовательские фреймворки по трансформации ИИ, спросу на дата-центры, динамике полупроводников и цифровой инфраструктуре.',
  alternates: {
    canonical: 'https://telcotank.com/ru/strategicintelligence/',
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
    locale: 'ru_RU',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="ru" />
}
