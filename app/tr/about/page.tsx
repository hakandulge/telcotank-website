import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Hakkımızda',
  description: 'Telcotank 2004 yılından beri dönüşüm danışmanlığı hizmetleri sunan firmadır.',
}

export default function Page() {
  return <AboutLocalized lang="tr" />
}
