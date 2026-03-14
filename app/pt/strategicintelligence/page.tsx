import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Inteligência Estratégica',
  description: 'Frameworks de pesquisa estratégica sobre transformação de IA, demanda de data centers, dinâmica de semicondutores e infraestrutura digital.',
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="pt" />
}
