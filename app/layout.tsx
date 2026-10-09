import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { site } from '@/content/site'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import './globals.css'

// Fonts are self-hosted (OFL licences in app/fonts), so builds never depend on Google Fonts.
const sans = localFont({
  src: './fonts/schibsted-grotesk-latin-wght-normal.woff2',
  variable: '--font-sans',
  weight: '400 900',
  display: 'swap',
})

const serif = localFont({
  src: './fonts/literata-latin-standard-normal.woff2',
  variable: '--font-serif',
  weight: '200 900',
  display: 'swap',
})

const mono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500' },
  ],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
})

const defaultTitle = `${site.name} | ${site.role}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: defaultTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image', title: defaultTitle, description: site.description },
}

export const viewport: Viewport = {
  themeColor: '#F4F4EF',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
