'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Phone, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-6">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <span className="text-4xl font-bold text-gray-700">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It may have been moved or no longer exists.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="flex-1">
              <Link href="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
          
          <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            <p className="mb-2">Need immediate assistance?</p>
            <div className="space-y-1">
              <p>
                <a href="tel:954-358-5001" className="text-gray-700 hover:underline font-medium">
                  (954) 358-5001
                </a>
              </p>
              <p>
                <a href="tel:877-255-9090" className="text-gray-700 hover:underline font-medium">
                  1-877-255-9090
                </a>
              </p>
              <p>
                <a href="mailto:info@care-on-call.com" className="text-gray-700 hover:underline font-medium">
                  info@care-on-call.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}