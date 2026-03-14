import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Capacidades',
  description: 'Telcotank ofrece servicios de consultoría en estrategia de transformación, transformación de IA y aceleración del crecimiento.',
}

export default function Page() {
  return <CapabilitiesLocalized lang="es" />
}
