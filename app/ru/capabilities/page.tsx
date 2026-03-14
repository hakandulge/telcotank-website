import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Компетенции',
  description: 'Telcotank предоставляет услуги консультирования по стратегии трансформации, трансформации ИИ и ускорению роста.',
}

export default function Page() {
  return <CapabilitiesLocalized lang="ru" />
}
