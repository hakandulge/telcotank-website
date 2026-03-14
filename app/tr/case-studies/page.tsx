import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Başarı Hikayeleri',
  description: 'Telcotank başarılı dönüşüm vakaları ve danışmanlık sonuçlarını sunar.',
}

export default function Page() {
  return <CaseStudiesLocalized lang="tr" />
}
