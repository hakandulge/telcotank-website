import { Metadata } from 'next'
import MainLocalized from '../MainLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Consultoría de Transformación',
  description: 'Consultoría de transformación impulsada por IA para empresas de telecomunicaciones, servicios financieros y tecnología.',
  alternates: {
    canonical: 'https://telcotank.com/es',
  },
}

export default function ESHome() {
  return <MainLocalized lang="es" />
}
