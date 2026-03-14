import { Metadata } from 'next'
import MainLocalized from '../MainLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Консультирование по трансформации',
  description: 'Консультирование по трансформации на базе ИИ для компаний в областях телекоммуникаций, финансовых услуг и технологий.',
  alternates: {
    canonical: 'https://telcotank.com/ru',
  },
}

export default function RUHome() {
  return <MainLocalized lang="ru" />
}
