import { Metadata } from 'next'
import ContactLocalized from '../../ContactLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — Контакты',
  description: 'Свяжитесь с Telcotank и позвольте нам помочь вам с вашей стратегической задачей.',
}

export default function Page() {
  return <ContactLocalized lang="ru" />
}
