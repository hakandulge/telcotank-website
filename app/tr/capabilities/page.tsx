import { Metadata } from 'next'
import CapabilitiesLocalized from '../../CapabilitiesLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Yetenekler',
  description: 'Telcotank dönüşüm stratejisi, AI dönüşümü ve büyüme hızlandırması danışmanlığı hizmetleri sunar.',
}

export default function Page() {
  return <CapabilitiesLocalized lang="tr" />
}
