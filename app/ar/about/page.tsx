import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — من نحن',
  description: 'تأسست تيلكوتانك في عام 2004 وتقدم خدمات استشارات التحول.',
}

export default function Page() {
  return <AboutLocalized lang="ar" />
}
