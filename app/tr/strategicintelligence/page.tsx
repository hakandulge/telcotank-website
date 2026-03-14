import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Stratejik İstihbarat',
  description: 'AI dönüşümü, veri merkezi talebi, yarı iletken dinamikleri ve dijital altyapı hakkında stratejik araştırma çerçeveleri.',
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="tr" />
}
