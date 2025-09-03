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
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5 supports-[backdrop-filter]:bg-white/60 transition-all duration-300">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* Logo image - will show when you add care-on-call-logo.png */}
              <div className="relative">
                <Image
                  src="/images/logos/care-on-call-logo.png"
                  alt="Care on Call Home Healthcare"
                  width={280}
                  height={80}
                  className="h-14 w-auto"
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
          <nav id="navigation" className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand transition-all duration-300 text-sm font-medium relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+19543585001"
              className="flex items-center text-[hsl(var(--brand))] hover:text-[hsl(var(--brand-700))] font-semibold whitespace-nowrap text-sm transition-colors duration-200"
            >
              <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
              (954) 358-5001
            </a>
            <Button asChild size="sm" className="transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap">
              <Link href="/refer">Refer a Client</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-brand hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close' : 'Open'} menu</span>
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
        <div className="lg:hidden border-t border-gray-200 animate-slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 border-t border-gray-200 mt-2">
              <a
                href="tel:+19543585001"
                className="flex items-center text-[hsl(var(--brand))] hover:text-[hsl(var(--brand-700))] font-semibold mb-3 transition-colors duration-200"
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