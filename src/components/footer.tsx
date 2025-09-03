import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Non-Discrimination Policy', href: '/nondiscrimination' },
  { name: 'Privacy Policy', href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm">Care on Call Home Healthcare</p>
                  <p className="text-sm">211 East Prospect Road, NE 44th St.</p>
                  <p className="text-sm">Fort Lauderdale, FL 33334</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand mr-3 flex-shrink-0" />
                <div className="text-sm">
                  <p>Toll Free: <a href="tel:1-877-255-9090" className="hover:text-brand transition-colors">1-877-255-9090</a></p>
                  <p>Phone: <a href="tel:954-358-5001" className="hover:text-brand transition-colors">(954) 358-5001</a></p>
                  <p>Fax: (954) 358-5008</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@care-on-call.com"
                  className="text-sm hover:text-brand transition-colors"
                >
                  info@care-on-call.com
                </a>
              </div>
              
              <p className="text-sm text-gray-400">License # 299993274</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-brand transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Registered Nurses</li>
              <li>Licensed Practical Nurses</li>
              <li>Physical Therapy</li>
              <li>Occupational Therapy</li>
              <li>Speech Therapy</li>
              <li>Certified Nursing Assistants</li>
              <li>Home Health Aides</li>
              <li>Homemaker/Companions</li>
              <li>Medical Social Workers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              <p>&copy; {new Date().getFullYear()} Care on Call Home Healthcare. All rights reserved.</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p>Locally owned and operated in Fort Lauderdale, Florida</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}