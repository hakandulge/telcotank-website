import { Metadata } from 'next'
import MainLocalized from '../MainLocalized'

export const metadata: Metadata = {
  title: 'تيلكوتانك — استشارات التحول',
  description: 'استشارات تحول مدعومة بالذكاء الاصطناعي للشركات في قطاع الاتصالات والخدمات المالية والتكنولوجيا.',
  alternates: {
    canonical: 'https://telcotank.com/ar',
  },
}

export default function ARHome() {
  return <MainLocalized lang="ar" />
}
