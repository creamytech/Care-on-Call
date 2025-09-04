import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
]

const legalLinks = [
  { name: 'Non-Discrimination Policy', href: '/nondiscrimination' },
  { name: 'Privacy Policy', href: '/privacy' },
]

const services = [
  'Skilled Nursing Care',
  'Physical Therapy',
  'Occupational Therapy',
  'Speech Therapy',
  'Personal Care Services',
  'Homemaker Services',
]

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Call-to-Action Banner */}
      <div className="bg-[hsl(var(--brand))] py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience Quality Home Healthcare?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and learn how we can help you 
              or your loved one receive the best care in the comfort of home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild
                className="bg-white text-[hsl(var(--brand))] hover:bg-white/90 font-semibold"
              >
                <a href="tel:+19543585001" className="inline-flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (954) 358-5001
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[hsl(var(--brand))] transition-colors duration-200 font-semibold" 
                asChild
              >
                <Link href="/contact" className="inline-flex items-center">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Care on Call</h3>
              <p className="text-gray-100 text-sm leading-relaxed">
                Providing compassionate, professional home healthcare services 
                throughout Broward County since our founding. Your trusted partner 
                in quality home care.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-sm text-gray-100">
                  <p>211 East Prospect Road, NE 44th St.</p>
                  <p>Fort Lauderdale, FL 33334</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <div className="text-sm text-gray-100">
                  <a href="tel:+19543585001" className="text-gray-100 hover:text-gray-300 transition-colors">
                    (954) 358-5001
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@care-on-call.com"
                  className="text-sm text-gray-100 hover:text-gray-300 transition-colors"
                >
                  info@care-on-call.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-100 hover:text-gray-300 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-700">
                <p className="text-xs font-medium text-gray-400 mb-2">Legal</p>
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-xs text-gray-300 hover:text-gray-200 transition-colors duration-200 mb-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-100 flex items-start">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {service}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link 
                href="/services" 
                className="inline-flex items-center text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                View All Services
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Credentials & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Credentials</h3>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <div className="text-sm">
                  <p className="font-medium text-gray-300 mb-1">Licensed & Insured</p>
                  <p className="text-gray-200 text-xs">Florida License # 299993274</p>
                  <p className="text-gray-200 text-xs">ACHC Accredited</p>
                </div>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <div className="text-sm">
                  <p className="font-medium text-gray-300 mb-1">24/7 Availability</p>
                  <p className="text-gray-200 text-xs">Emergency on-call services</p>
                  <p className="text-gray-200 text-xs">Broward County coverage</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-white mb-4">Follow Us</p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/CareOnCallHomeHealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] hover:bg-[#166FE5] p-4 rounded-xl text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-7 w-7" />
                  <span className="sr-only">Follow Care on Call on Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/careoncallhomehealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#405DE6] via-[#5851DB] via-[#833AB4] via-[#C13584] via-[#E1306C] to-[#FD1D1D] hover:opacity-90 p-4 rounded-xl text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-7 w-7" />
                  <span className="sr-only">Follow Care on Call on Instagram</span>
                </a>
              </div>
              <p className="text-xs text-gray-300 mt-3 text-center">Stay connected for health tips & updates</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Care on Call Home Healthcare. All rights reserved.</p>
            </div>
            
            <div className="mt-3 md:mt-0 text-center md:text-right">
              <p>Locally owned and operated • Serving Broward County, Florida</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}