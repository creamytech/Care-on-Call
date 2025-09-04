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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthcareOrganization",
    "name": "Care on Call Home Healthcare",
    "alternateName": "Care on Call",
    "description": "Quality in-home care services in Broward County, Florida. Licensed, trusted, and locally owned and operated healthcare provider.",
    "url": "https://www.care-on-call.com",
    "logo": "https://www.care-on-call.com/images/logos/care-on-call-logo.png",
    "image": "https://www.care-on-call.com/images/logos/care-on-call-logo.png",
    "telephone": "+1-954-358-5001",
    "email": "info@care-on-call.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "211 East Prospect Road, NE 44th St.",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
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