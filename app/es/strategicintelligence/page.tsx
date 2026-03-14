import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Inteligencia Estratégica',
  description: 'Marcos de investigación estratégica sobre transformación de IA, demanda de centros de datos, dinámica de semiconductores e infraestructura digital.',
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="es" />
}
