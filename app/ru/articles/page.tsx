import { Metadata } from 'next'
import ArticlesLocalized from '../../ArticlesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Статьи',
  description: 'Стратегические аналитические материалы по ИИ, квантовым вычислениям, трансформации телекоммуникаций и будущему цифровой инфраструктуры.',
}

export default function Page() {
  return <ArticlesLocalized lang="ru" />
}
