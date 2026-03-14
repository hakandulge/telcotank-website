import { Metadata } from 'next'
import CaseStudiesLocalized from '../../CaseStudiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — دراسات الحالة',
  description: 'تقدم تيلكوتانك دراسات حالات التحول الناجحة والنتائج المثبتة.',
}

export default function Page() {
  return <CaseStudiesLocalized lang="ar" />
}
