import { Metadata } from 'next'
import ContactLocalized from '../../ContactLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — اتصل بنا',
  description: 'تواصل مع تيلكوتانك ودعنا نساعدك في تحديك الاستراتيجي.',
}

export default function Page() {
  return <ContactLocalized lang="ar" />
}
