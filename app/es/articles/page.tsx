import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Artículos',
  description: 'Perspectivas estratégicas y análisis sobre IA, computación cuántica, transformación de telecomunicaciones y el futuro de la infraestructura digital.',
}

export default function Page() {
  return <ArticlesLocalized lang="es" />
}
