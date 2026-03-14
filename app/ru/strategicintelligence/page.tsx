import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Стратегическая Разведка',
  description: 'Стратегические исследовательские фреймворки по трансформации ИИ, спросу на дата-центры, динамике полупроводников и цифровой инфраструктуре.',
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="ru" />
}
