import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — О нас',
  description: 'Telcotank была основана в 2004 году и предоставляет услуги консультирования по трансформации.',
}

export default function Page() {
  return <AboutLocalized lang="ru" />
}
