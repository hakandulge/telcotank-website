import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Casos de Estudio',
  description: 'Telcotank ofrece casos de estudio de transformación exitosa y resultados probados.',
}

export default function Page() {
  return <CaseStudiesLocalized lang="es" />
}
