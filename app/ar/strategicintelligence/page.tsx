import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — الاستخبارات الاستراتيجية',
  description: 'أطر بحثية استراتيجية حول تحول الذكاء الاصطناعي وطلب مراكز البيانات وديناميكيات أشباه الموصلات والبنية التحتية الرقمية.',
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="ar" />
}
