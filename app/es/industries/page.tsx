import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Industrias',
  description: 'Telcotank ofrece servicios de consultoría de transformación en telecomunicaciones, servicios financieros, tecnología e infraestructura digital.',
}

export default function Page() {
  return <IndustriesLocalized lang="es" />
}
