'use client'

import Link from '@/components/Link'
import { articles } from '@/data/articles'
import { articlesTR, articlesAR, articlesES } from '@/data/articlesTranslated'
import { articlesPT, articlesRU } from '@/data/articlesTranslatedPtRu'
import { articlesDE, articlesFR } from '@/data/articlesTranslatedDeFr'
import { translations } from '@/data/translations'

type Lang = 'en' | 'tr' | 'ar' | 'es' | 'pt' | 'ru' | 'de' | 'fr'

const translatedArticles: Record<string, typeof articles> = {
  tr: articlesTR,
  ar: articlesAR,
  es: articlesES,
  pt: articlesPT,
  ru: articlesRU,
  de: articlesDE,
  fr: articlesFR,
}

function getArticles(lang: Lang) {
  if (lang === 'en') return articles
  return translatedArticles[lang] || articles
}

export default function ArticleDetailLocalized({ lang, slug }: { lang: Lang; slug: string }) {
  const langArticles = getArticles(lang)
  const article = langArticles.find((a) => a.slug === slug)
  const t = translations[lang].articlesPage
  const isRTL = lang === 'ar'
  const lhref = (href: string) => (lang === 'en' ? href : `/${lang}${href}`)

  if (!article) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article Not Found</h1>
          <Link href={lhref('/articles')} className="mt-4 inline-block text-blue-600 hover:text-blue-500">
            &larr; {t.allArticles}
          </Link>
        </div>
      </div>
    )
  }

  const currentIndex = langArticles.findIndex((a) => a.slug === slug)
  const prevArticle = currentIndex > 0 ? langArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < langArticles.length - 1 ? langArticles[currentIndex + 1] : null

  const themeMap: Record<string, string> = {
    'AI & Quantum Computing': t.themeAIQuantum,
    'Emerging Technology': t.themeEmergingTech,
    'Telecom Industry Strategy': t.themeTelecom,
  }

  const translateReadTime = (readTime: string) => {
    const num = readTime.match(/\d+/)
    return num ? `${num[0]} ${t.minRead}` : readTime
  }

  // UI labels
  const byLabelMap: Record<string, string> = { en: 'By', tr: 'Yazan', ar: 'بقلم', es: 'Por', pt: 'Por', ru: 'Автор', de: 'Von', fr: 'Par' }
  const byLabel = byLabelMap[lang] || 'By'
  const keyTakeawayMap: Record<string, string> = { en: 'Key Takeaway', tr: 'Önemli Çıkarım', ar: 'النقطة الرئيسية', es: 'Conclusión Clave', pt: 'Conclusão Principal', ru: 'Ключевой Вывод', de: 'Kernaussage', fr: 'Point Clé' }
  const keyTakeaway = keyTakeawayMap[lang] || 'Key Takeaway'
  const authorBioMap: Record<string, string> = {
    en: 'Founder & Managing Director, Telcotank. 20+ years in telecom transformation, AI strategy, and digital infrastructure advisory.',
    tr: 'Kurucu & Genel Müdür, Telcotank. Telekomünikasyon dönüşümü, AI stratejisi ve dijital altyapı danışmanlığında 20+ yıl deneyim.',
    ar: 'المؤسس والمدير العام، Telcotank. أكثر من 20 عاماً في تحول الاتصالات واستراتيجية الذكاء الاصطناعي واستشارات البنية التحتية الرقمية.',
    es: 'Fundador y Director General, Telcotank. Más de 20 años en transformación de telecomunicaciones, estrategia de IA y asesoría de infraestructura digital.',
    pt: 'Fundador e Diretor Geral, Telcotank. Mais de 20 anos em transformação de telecomunicações, estratégia de IA e assessoria de infraestrutura digital.',
    ru: 'Основатель и управляющий директор, Telcotank. Более 20 лет в трансформации телекоммуникаций, стратегии ИИ и консультировании цифровой инфраструктуры.',
    de: 'Gründer & Geschäftsführer, Telcotank. Über 20 Jahre Erfahrung in Telekommunikationstransformation, KI-Strategie und Beratung für digitale Infrastruktur.',
    fr: 'Fondateur & Directeur Général, Telcotank. Plus de 20 ans dans la transformation des télécommunications, la stratégie IA et le conseil en infrastructure numérique.',
  }
  const authorBio = authorBioMap[lang] || authorBioMap.en
  const prevLabelMap: Record<string, string> = { en: '← Previous', tr: '← Önceki', ar: '→ السابق', es: '← Anterior', pt: '← Anterior', ru: '← Предыдущая', de: '← Zurück', fr: '← Précédent' }
  const prevLabel = prevLabelMap[lang] || '← Previous'
  const nextLabelMap: Record<string, string> = { en: 'Next →', tr: 'Sonraki →', ar: 'التالي ←', es: 'Siguiente →', pt: 'Próximo →', ru: 'Следующая →', de: 'Weiter →', fr: 'Suivant →' }
  const nextLabel = nextLabelMap[lang] || 'Next →'
  const backToArticlesMap: Record<string, string> = { en: '← Back to all articles', tr: '← Tüm makalelere dön', ar: '→ العودة إلى جميع المقالات', es: '← Volver a todos los artículos', pt: '← Voltar a todos os artigos', ru: '← Назад ко всем статьям', de: '← Zurück zu allen Artikeln', fr: '← Retour à tous les articles' }
  const backToArticles = backToArticlesMap[lang] || '← Back to all articles'
  const exploreFrameworksMap: Record<string, string> = { en: 'Explore Our Strategic Frameworks', tr: 'Stratejik Çerçevelerimizi Keşfedin', ar: 'استكشف أطرنا الاستراتيجية', es: 'Explore Nuestros Marcos Estratégicos', pt: 'Explore Nossos Frameworks Estratégicos', ru: 'Изучите Наши Стратегические Фреймворки', de: 'Entdecken Sie unsere strategischen Frameworks', fr: 'Découvrez nos cadres stratégiques' }
  const exploreFrameworks = exploreFrameworksMap[lang] || 'Explore Our Strategic Frameworks'
  const goDeeperMap: Record<string, string> = {
    en: 'Go deeper with comprehensive strategy publications spanning 50 to 100 pages of original research, market data, and actionable frameworks.',
    tr: '50 ila 100 sayfalık özgün araştırma, pazar verileri ve uygulanabilir çerçevelerden oluşan kapsamlı strateji yayınlarımızla daha derine inin.',
    ar: 'تعمق أكثر مع منشورات استراتيجية شاملة تمتد من 50 إلى 100 صفحة من البحث الأصيل وبيانات السوق والأطر العملية.',
    es: 'Profundice con publicaciones de estrategia integral de 50 a 100 páginas de investigación original, datos de mercado y marcos prácticos.',
    pt: 'Aprofunde-se com publicações de estratégia abrangentes de 50 a 100 páginas de pesquisa original, dados de mercado e frameworks práticos.',
    ru: 'Углубитесь с комплексными стратегическими публикациями от 50 до 100 страниц оригинальных исследований, рыночных данных и практических фреймворков.',
    de: 'Vertiefen Sie sich mit umfassenden Strategiepublikationen von 50 bis 100 Seiten originaler Forschung, Marktdaten und umsetzbaren Frameworks.',
    fr: 'Approfondissez avec des publications stratégiques complètes de 50 à 100 pages de recherche originale, données de marché et cadres d\'action.',
  }
  const goDeeper = goDeeperMap[lang] || goDeeperMap.en

  return (
    <div className="bg-white dark:bg-gray-950" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative">
        <div className="aspect-[21/9] w-full overflow-hidden bg-gray-100 sm:aspect-[3/1]">
          <img src={article.heroImage} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-6 pb-12 lg:px-8">
            <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
              {themeMap[article.theme] || article.theme}
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
              <span>{byLabel} {article.author}</span>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <span>{article.date}</span>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <span>{translateReadTime(article.readTime)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="mb-12 rounded-xl border border-blue-100 bg-blue-50/50 p-6 dark:border-blue-900/30 dark:bg-blue-900/10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            {keyTakeaway}
          </p>
          <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-300">
            {article.summary}
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-p:text-gray-600 prose-p:leading-8 dark:prose-p:text-gray-300">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {article.images.length > 1 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {article.images.slice(1).map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl">
                <img src={img} alt={`${article.title} — ${idx + 2}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{article.author}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{authorBio}</p>
        </div>

        <div className="mt-12 grid gap-4 border-t border-gray-200 pt-8 sm:grid-cols-2 dark:border-gray-800">
          {prevArticle ? (
            <Link href={lhref(`/articles/${prevArticle.slug}`)} className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-200 hover:shadow-sm dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400">{prevLabel}</p>
              <p className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">{prevArticle.title}</p>
            </Link>
          ) : <div />}
          {nextArticle ? (
            <Link href={lhref(`/articles/${nextArticle.slug}`)} className="group rounded-lg border border-gray-200 p-4 text-right transition-all hover:border-blue-200 hover:shadow-sm dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400">{nextLabel}</p>
              <p className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white">{nextArticle.title}</p>
            </Link>
          ) : <div />}
        </div>

        <div className="mt-8 text-center">
          <Link href={lhref('/articles')} className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
            {backToArticles}
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#0A2540]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">{exploreFrameworks}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-300">{goDeeper}</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href={lhref('/strategicintelligence')} className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                {t.viewPublications}
              </Link>
              <Link href={lhref('/contact')} className="rounded-lg border border-gray-600 px-5 py-2.5 text-sm font-semibold text-white hover:border-white hover:bg-white/5">
                {t.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
