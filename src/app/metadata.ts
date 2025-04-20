import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'AvianDesk',
    template: '%s | AvianDesk',
  },
  description: 'Technical support and help desk for Avianintek products.',
  keywords: ['Avianintek', 'product support', 'help desk', 'technical support', 'ticketing system', 'ticket'],
  authors: [{ name: 'Avianintek', url: 'https://avianintek.com' }],
  creator: 'AvianDesk',
  publisher: 'Avianintek',
  metadataBase: new URL('https://desk.avianintek.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AvianDesk',
    description: 'Technical support and help desk for Avianintek products.',
    url: 'https://desk.avianintek.com',
    siteName: 'Avianintek Support',
    images: [
      {
        url: '/assets/images/aviandesk.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AvianDesk',
    description: 'Technical support and help desk for Avianintek products',
    images: ['/assets/images/aviandesk.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo/favicon.ico',
    shortcut: '/logo/favicon-16x16.png',
    apple: '/logo/apple-touch-icon.png',
  },
}