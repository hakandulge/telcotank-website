import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Capacidades',
  description: 'Telcotank oferece serviços de consultoria em estratégia de transformação, transformação de IA e aceleração de crescimento.',
}

export default function Page() {
  return <CapabilitiesLocalized lang="pt" />
}
