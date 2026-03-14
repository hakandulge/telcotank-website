import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — القدرات',
  description: 'تقدم تيلكوتانك خدمات استشارات إستراتيجية التحول والتحول بالذكاء الاصطناعي وتسريع النمو.',
}

export default function Page() {
  return <CapabilitiesLocalized lang="ar" />
}
