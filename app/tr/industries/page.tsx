import { Metadata } from 'next'
import IndustriesLocalized from '../../IndustriesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Sektörler',
  description: 'Telcotank telekomünikasyon, finansal hizmetler, teknoloji ve dijital altyapı sektörlerinde dönüşüm danışmanlığı sunar.',
}

export default function Page() {
  return <IndustriesLocalized lang="tr" />
}
