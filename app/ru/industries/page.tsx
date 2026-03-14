import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Отрасли',
  description: 'Telcotank предоставляет услуги консультирования по трансформации в телекоммуникациях, финансовых услугах, технологиях и цифровой инфраструктуре.',
  alternates: {
    canonical: 'https://telcotank.com/ru/industries/',
    languages: {
      'en': 'https://telcotank.com/industries/',
      'tr': 'https://telcotank.com/tr/industries/',
      'ar': 'https://telcotank.com/ar/industries/',
      'es': 'https://telcotank.com/es/industries/',
      'pt': 'https://telcotank.com/pt/industries/',
      'ru': 'https://telcotank.com/ru/industries/',
      'x-default': 'https://telcotank.com/industries/',
    },
  },
  openGraph: {
    locale: 'ru_RU',
  },
}

export default function Page() {
  return <IndustriesLocalized lang="ru" />
}
