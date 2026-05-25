import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://annavolkova.com'

export function generateMetadata({
  title,
  description,
  path = '',
  ogImage,
}: {
  title: string
  description: string
  path?: string
  ogImage?: string
}): Metadata {
  const fullTitle = `${title} | Anna Volkova — Language Teacher`
  const url = `${siteUrl}${path}`
  const image = ogImage || `${siteUrl}/og-default.jpg`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Anna Volkova',
      images: [{ url: image, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}
