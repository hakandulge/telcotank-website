import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Artigos',
  description: 'Perspectivas estratégicas e análise sobre IA, computação quântica, transformação de telecomunicações e o futuro da infraestrutura digital.',
}

export default function Page() {
  return <ArticlesLocalized lang="pt" />
}
