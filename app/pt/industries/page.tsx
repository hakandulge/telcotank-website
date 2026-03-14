import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Indústrias',
  description: 'Telcotank oferece serviços de consultoria de transformação em telecomunicações, serviços financieros, tecnologia e infraestrutura digital.',
}

export default function Page() {
  return <IndustriesLocalized lang="pt" />
}
