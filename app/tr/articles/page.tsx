import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Makaleler',
  description: 'AI, kuantum bilişim, telekomünikasyon dönüşümü ve dijital ekonominin geleceği hakkında stratejik içgörüler ve analiz.',
}

export default function Page() {
  return <ArticlesLocalized lang="tr" />
}
