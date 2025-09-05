import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { CallBar } from '@/components/call-bar'
import { PageTransition } from '@/components/page-transition'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Care on Call Home Healthcare - Fort Lauderdale, FL',
  description: 'Providing compassionate, professional home healthcare services throughout Broward County since 2008. Your trusted partner in quality home care.',
  keywords: 'home healthcare, Fort Lauderdale, nursing, therapy, home care, Florida',
  authors: [{ name: 'Care on Call Home Healthcare' }],
  icons: {
    icon: [
      { url: '/faviconfinal.ico', sizes: '16x16 32x32', type: 'image/x-icon' },
    ],
    shortcut: '/faviconfinal.ico',
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthcareOrganization",
    "name": "Care on Call Home Healthcare",
    "alternateName": "Care on Call",
    "description": "Providing compassionate, professional home healthcare services throughout Broward County since 2008. Your trusted partner in quality home care.",
    "url": "https://www.care-on-call.com",
    "logo": "https://www.care-on-call.com/images/logos/care-on-call-logo.png",
    "image": "https://www.care-on-call.com/images/logos/care-on-call-logo.png",
    "telephone": "+1-954-358-5001",
    "email": "info@care-on-call.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "211 E Prospect Rd. (NE 44th St.)",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33334",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.1224",
      "longitude": "-80.1373"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        ],
        "opens": "08:30",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "00:00"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "26.1224",
        "longitude": "-80.1373"
      },
      "geoRadius": "50000"
    },
    "servesCuisine": "Healthcare Services",
    "medicalSpecialty": [
      "Home Health Care",
      "Nursing Services",
      "Physical Therapy",
      "Occupational Therapy", 
      "Speech Therapy",
      "Custodial Care"
    ],
    "hasCredential": "Florida License #299993274",
    "accreditation": "ACHC Accredited",
    "paymentAccepted": [
      "Medicare",
      "Private Pay",
      "Insurance"
    ],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/CareOnCallHomeHealthcare",
      "https://www.instagram.com/careoncallhomehealthcare"
    ]
  }

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/faviconfinal.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/faviconfinal.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip Links for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gray-800 text-white px-4 py-2 rounded-md z-50 focus:z-[100]"
        >
          Skip to main content
        </a>
        <a
          href="#navigation"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 bg-gray-800 text-white px-4 py-2 rounded-md z-50 focus:z-[100]"
        >
          Skip to navigation
        </a>
        
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-1 pb-16 md:pb-0">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <BackToTop />
          <CallBar />
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#10b981',
              },
            },
            error: {
              style: {
                background: '#ef4444',
              },
            },
          }}
        />
      </body>
    </html>
  )
}