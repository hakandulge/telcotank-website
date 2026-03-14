import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Отрасли',
  description: 'Telcotank предоставляет услуги консультирования по трансформации в телекоммуникациях, финансовых услугах, технологиях и цифровой инфраструктуре.',
}

export default function Page() {
  return <IndustriesLocalized lang="ru" />
}
