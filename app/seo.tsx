import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  keywords?: string[]
  canonical?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({ title, description, image, keywords, canonical, ...rest }: PageSEOProps): Metadata {
  // Ensure canonical URLs have trailing slashes to match trailingSlash: true in next.config
  const canonicalUrl = canonical
    ? canonical.endsWith('/') ? canonical : `${canonical}/`
    : undefined;

  return {
    title,
    description: description || siteMetadata.description,
    ...(keywords && { keywords }),
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: canonicalUrl || './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
      description: description || siteMetadata.description,
    },
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    ...rest,
  }
}
