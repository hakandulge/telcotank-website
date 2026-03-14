import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Sobre Nós',
  description: 'Telcotank foi fundada em 2004 e oferece serviços de consultoria de transformação.',
}

export default function Page() {
  return <AboutLocalized lang="pt" />
}
