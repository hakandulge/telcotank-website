import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Кейсы',
  description: 'Telcotank предоставляет успешные кейсы трансформации и доказанные результаты.',
}

export default function Page() {
  return <CaseStudiesLocalized lang="ru" />
}
