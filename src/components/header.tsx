'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Career Opportunities', href: '/careers' },
  { name: 'Client Satisfaction Survey', href: '/survey' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Logo image - will show when you add care-on-call-logo.png */}
              <div className="relative">
                <Image
                  src="/images/logos/care-on-call-logo.png"
                  alt="Care on Call Home Healthcare"
                  width={200}
                  height={60}
                  className="h-10 w-auto"
                  priority
                  onError={(e) => {
                    // Hide image and show text fallback if logo not found
                    e.currentTarget.style.display = 'none';
                    const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                    if (sibling) sibling.style.display = 'block';
                  }}
                />
                <div className="text-2xl font-bold text-brand hidden">
                  Care on Call
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:954-358-5001"
              className="flex items-center text-brand hover:text-brand-600 font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              (954) 358-5001
            </a>
            <Button asChild>
              <Link href="/refer">Refer a Client</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-brand"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 border-t border-gray-200 mt-2">
              <a
                href="tel:954-358-5001"
                className="flex items-center text-brand hover:text-brand-600 font-semibold mb-3"
              >
                <Phone className="h-4 w-4 mr-2" />
                (954) 358-5001
              </a>
              <Button className="w-full" asChild>
                <Link href="/refer">Refer a Client</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}