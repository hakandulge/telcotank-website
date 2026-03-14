import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Стратегическая Разведка: Фреймворки ИИ, Телекоммуникаций и Цифровой Экономики',
  description: 'Стратегические исследовательские фреймворки в стиле McKinsey по трансформации ИИ, спросу на дата-центры, динамике полупроводников, стратегии суверенного ИИ и цифровой инфраструктуре для корпоративных лидеров и инвесторов.',
  keywords: ['стратегическая разведка', 'фреймворк стратегии ИИ', 'анализ рынка дата-центров', 'стратегия полупроводников', 'суверенный ИИ', 'исследование цифровой инфраструктуры', 'исследование телекоммуникационной отрасли', 'инвестиции в инфраструктуру ИИ', 'корпоративный ИИ консалтинг'],
  alternates: {
    canonical: 'https://telcotank.com/ru/strategicintelligence/',
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
    title: 'Telcotank — Стратегическая Разведка: Фреймворки ИИ, Телекоммуникаций и Цифровой Экономики',
    description: 'Стратегические исследовательские фреймворки в стиле McKinsey по трансформации ИИ, спросу на дата-центры, динамике полупроводников и цифровой инфраструктуре.',
    url: 'https://telcotank.com/ru/strategicintelligence/',
    siteName: 'Telcotank',
    images: ['/static/images/social-banner.png'],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    title: 'Telcotank — Стратегическая Разведка',
    card: 'summary_large_image',
    images: ['/static/images/social-banner.png'],
    description: 'Стратегические исследовательские фреймворки по трансформации ИИ, дата-центрам и цифровой инфраструктуре.',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="ru" />
}
