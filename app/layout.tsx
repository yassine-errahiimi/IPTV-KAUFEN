import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

const BASE_URL = 'https://iptv-kaufen.de'
const BRAND = 'IPTV Kaufen'
const OG_IMAGE = `${BASE_URL}/logo.webp`

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `IPTV Anbieter Deutschland – Live-TV & Streaming | ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description:
    'IPTV in Deutschland mit Live-TV, internationalen Sendern, Filmen und Serien auf Smart TV, Android, Fire TV und weiteren Geräten. Flexible IPTV-Abonnementpläne.',
  keywords: [
    'IPTV',
    'IPTV kaufen',
    'IPTV Anbieter',
    'IPTV Deutschland',
    'IPTV Abo',
    'IPTV Abonnement',
    'Live-TV online',
    'IPTV Sender',
    'IPTV Streaming',
    'IPTV Smart TV',
    'IPTV Fire TV',
    'IPTV Android',
    'IPTV App',
  ],
  alternates: {
    canonical: BASE_URL,
    languages: {
      'de-DE': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: BASE_URL,
    siteName: BRAND,
    title: `IPTV Anbieter Deutschland – Live-TV & Streaming | ${BRAND}`,
    description:
      'IPTV in Deutschland mit Live-TV, internationalen Sendern, Filmen und Serien auf Smart TV, Android, Fire TV und weiteren Geräten.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND} – IPTV Anbieter Deutschland`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `IPTV Anbieter Deutschland – Live-TV & Streaming | ${BRAND}`,
    description:
      'IPTV in Deutschland mit Live-TV, internationalen Sendern, Filmen und Serien auf Smart TV, Android, Fire TV und weiteren Geräten.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.webp',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: BRAND,
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.webp`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['German', 'English'],
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: BRAND,
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'de-DE',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
