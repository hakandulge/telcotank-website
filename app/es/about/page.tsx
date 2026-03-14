import { Metadata } from 'next'
import AboutLocalized from '../../AboutLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Acerca de',
  description: 'Telcotank fue fundada en 2004 y ofrece servicios de consultoría de transformación.',
}

export default function Page() {
  return <AboutLocalized lang="es" />
}
