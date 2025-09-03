import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Care on Call Home Healthcare - Fort Lauderdale, FL',
  description: 'Care on Call Home Healthcare is a provider of quality in-home care services in Broward County, Florida. Locally owned and operated with Medicare, private, and custodial care.',
  keywords: 'home healthcare, Fort Lauderdale, nursing, therapy, home care, Florida',
  authors: [{ name: 'Care on Call Home Healthcare' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logos/care-on-call-logo.png',
  },
  openGraph: {
    title: 'Care on Call Home Healthcare - Home Care That Exceeds Expectations',
    description: 'Quality in-home care services in Broward County, Florida',
    type: 'website',
    locale: 'en_US',
    images: ['/images/logos/care-on-call-logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}