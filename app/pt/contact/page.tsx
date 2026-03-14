import { Metadata } from 'next'
import ContactLocalized from '../../ContactLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Contato',
  description: 'Entre em contato com Telcotank e deixe-nos ajudá-lo com seu desafio estratégico.',
}

export default function Page() {
  return <ContactLocalized lang="pt" />
}
