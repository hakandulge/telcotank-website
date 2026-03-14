import { Metadata } from 'next'
import ContactLocalized from '../../ContactLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Contacto',
  description: 'Póngase en contacto con Telcotank y permitamos ayudarle con su desafío estratégico.',
}

export default function Page() {
  return <ContactLocalized lang="es" />
}
