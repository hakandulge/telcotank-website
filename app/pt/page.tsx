import { Metadata } from 'next'
import MainLocalized from '../MainLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Consultoria de Transformação',
  description: 'Consultoria de transformação impulsada por IA para empresas de telecomunicações, serviços financeiros e tecnologia.',
  alternates: {
    canonical: 'https://telcotank.com/pt',
  },
}

export default function PTHome() {
  return <MainLocalized lang="pt" />
}
