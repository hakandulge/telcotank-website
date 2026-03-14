import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Casos de Sucesso',
  description: 'Telcotank oferece casos de estudo de transformação bem-sucedida e resultados comprovados.',
}

export default function Page() {
  return <CaseStudiesLocalized lang="pt" />
}
