import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'YFC-BonEagle International Inc. | ICT Solutions in Asia Pacific',
  description: 'YFC-BonEagle International Inc. connects Asia Pacific through trusted ICT products, solutions, training, and regional expertise.',
  icons: {
    icon: [
      {
        url: '/logo/YFC.webp',
        type: 'image/webp',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/logo/YFC.webp',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
