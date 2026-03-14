import { Metadata } from 'next'
import ContactLocalized from '../../ContactLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — İletişim',
  description: 'Telcotank ile iletişime geçin ve dönüşüm stratejiniz hakkında konuşun.',
}

export default function Page() {
  return <ContactLocalized lang="tr" />
}
