import { Metadata } from 'next'
import MainLocalized from '../MainLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Dönüşüm Danışmanlığı',
  description: 'AI odaklı dönüşüm danışmanlığı telekomünikasyon, finansal hizmetler ve teknoloji şirketleri için.',
  alternates: {
    canonical: 'https://telcotank.com/tr',
  },
}

export default function TRHome() {
  return <MainLocalized lang="tr" />
}
