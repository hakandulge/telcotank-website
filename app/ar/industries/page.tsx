import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — القطاعات',
  description: 'يقدم تيلكوتانك خدمات استشارات التحول في قطاعات الاتصالات والخدمات المالية والتكنولوجيا والبنية التحتية الرقمية.',
}

export default function Page() {
  return <IndustriesLocalized lang="ar" />
}
