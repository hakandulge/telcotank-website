import { Metadata } from 'next'
import StrategicIntelligenceLocalized from '../../StrategicIntelligenceLocalized'

export const metadata: Metadata = {
  title: 'Telcotank — الاستخبارات الاستراتيجية: أطر الذكاء الاصطناعي والاتصالات والاقتصاد الرقمي',
  description: 'أطر بحثية استراتيجية بأسلوب ماكنزي حول تحول الذكاء الاصطناعي، طلب مراكز البيانات، ديناميكيات أشباه الموصلات، استراتيجية الذكاء الاصطناعي السيادي والبنية التحتية الرقمية. للقادة المؤسسيين والمستثمرين.',
  keywords: ['الاستخبارات الاستراتيجية', 'إطار استراتيجية الذكاء الاصطناعي', 'تحليل سوق مراكز البيانات', 'استراتيجية أشباه الموصلات', 'الذكاء الاصطناعي السيادي', 'بحث البنية التحتية الرقمية', 'بحث صناعة الاتصالات', 'استثمار البنية التحتية للذكاء الاصطناعي'],
  alternates: {
    canonical: 'https://telcotank.com/ar/strategicintelligence/',
    languages: {
      'en': 'https://telcotank.com/strategicintelligence/',
      'tr': 'https://telcotank.com/tr/strategicintelligence/',
      'ar': 'https://telcotank.com/ar/strategicintelligence/',
      'es': 'https://telcotank.com/es/strategicintelligence/',
      'pt': 'https://telcotank.com/pt/strategicintelligence/',
      'ru': 'https://telcotank.com/ru/strategicintelligence/',
      'de': 'https://telcotank.com/de/strategicintelligence/',
      'fr': 'https://telcotank.com/fr/strategicintelligence/',
      'x-default': 'https://telcotank.com/strategicintelligence/',
    },
  },
  openGraph: {
    title: 'Telcotank — الاستخبارات الاستراتيجية: أطر الذكاء الاصطناعي والاتصالات والاقتصاد الرقمي',
    description: 'أطر بحثية استراتيجية بأسلوب ماكنزي حول تحول الذكاء الاصطناعي وطلب مراكز البيانات وديناميكيات أشباه الموصلات والبنية التحتية الرقمية.',
    url: 'https://telcotank.com/ar/strategicintelligence/',
    siteName: 'Telcotank',
    images: ['/static/images/social-banner.png'],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    title: 'Telcotank — الاستخبارات الاستراتيجية',
    card: 'summary_large_image',
    images: ['/static/images/social-banner.png'],
    description: 'أطر بحثية استراتيجية حول تحول الذكاء الاصطناعي وطلب مراكز البيانات والبنية التحتية الرقمية.',
  },
}

export default function Page() {
  return <StrategicIntelligenceLocalized lang="ar" />
}
