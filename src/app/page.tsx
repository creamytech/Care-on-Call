'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Shield, Users, Phone, Award, MapPin } from 'lucide-react'

const services = [
  {
    icon: Heart,
    image: '/images/services/nursing-icon.png',
    title: 'Nursing Services',
    description: 'Registered Nurses and Licensed Practical Nurses available 24/7 for admissions and urgent situations.',
  },
  {
    icon: Users,
    image: '/images/services/therapy-icon.png',
    title: 'Home Therapy Services', 
    description: 'Physical, Occupational, and Speech Therapy to help patients regain daily living skills.',
  },
  {
    icon: Shield,
    image: '/images/services/home-care-icon.png',
    title: 'Custodial Home Care',
    description: 'Certified Nursing Assistants and Home Health Aides for assistance with daily living activities.',
  },
]

const trustFeatures = [
  'Licensed by the State of Florida',
  'Locally owned and operated',
  'Accepts Medicare, private, and custodial payments',
  'Extensive background checks and screening',
  '24/7 nurse availability for urgent situations',
  'Cost-saving care packages available',
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand to-brand-700 text-white py-20 overflow-hidden">
        {/* Background image - will show when you add homepage-hero.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/homepage-hero.jpg"
            alt="Care on Call Home Healthcare"
            fill
            className="object-cover opacity-20"
            onError={(e) => e.currentTarget.style.display = 'none'}
          />
        </div>
        <div className="relative z-10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Care on Call Home Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in [animation-delay:200ms]">
              Home Care That Exceeds Expectations
            </p>
            <p className="text-lg mb-12 text-blue-50 animate-fade-in [animation-delay:400ms]">
              Providing quality in-home care services in Broward County, Florida. 
              Licensed, trusted, and locally owned and operated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
              <Button size="lg" variant="secondary" asChild className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <a href="tel:954-358-5001">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (954) 358-5001
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-brand border-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
                <Link href="/refer">Refer a Client</Link>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive in-home healthcare services ranging from a few hours to 24/7 assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in ${index === 0 ? '[animation-delay:200ms]' : index === 1 ? '[animation-delay:400ms]' : '[animation-delay:600ms]'} group`}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 relative">
                    {/* Service image - will show when you add service icons */}
                    <Image
                      src={service.image}
                      alt={`${service.title} icon`}
                      width={64}
                      height={64}
                      className="mx-auto"
                      onError={(e) => {
                        // Hide image and show icon fallback if image not found
                        e.currentTarget.style.display = 'none';
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                        if (sibling) sibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto hidden group-hover:bg-brand/20 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-brand group-hover:text-brand-700 transition-colors duration-300" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
                Care You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Care on Call Home Healthcare is a provider of quality in-home care services 
                in Broward County, Florida. We offer credentialed healthcare professionals 
                with extensive screening including licensure verification, criminal background 
                checks, and competency testing.
              </p>
              <ul className="space-y-3">
                {trustFeatures.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Award className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand/5 p-8 rounded-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand rounded-full mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand mb-4">
                  Serving Broward County
                </h3>
                <p className="text-gray-600 mb-6">
                  Located in Fort Lauderdale, we provide live-in assistance 
                  and credentialed aides for full-time, ongoing care at reduced daily rates.
                </p>
                <div className="text-sm text-gray-500">
                  <p>211 East Prospect Road, NE 44th St.</p>
                  <p>Fort Lauderdale, FL 33334</p>
                  <p className="mt-2">License # 299993274</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand mb-4">
              Trusted & Accredited
            </h2>
            <p className="text-gray-600">
              Licensed by the State of Florida and accredited by leading healthcare organizations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* ACHC Gold Seal */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/trust/achc-seal.png"
                alt="ACHC Gold Seal of Approval"
                width={80}
                height={80}
                className="mb-2"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="text-xs text-gray-500 text-center">ACHC<br/>Accredited</span>
            </div>
            
            {/* Medicare Certified */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/trust/medicare-certified.png"
                alt="Medicare Certified"
                width={80}
                height={80}
                className="mb-2"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="text-xs text-gray-500 text-center">Medicare<br/>Certified</span>
            </div>
            
            {/* Florida Licensed */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/trust/florida-licensed.png"
                alt="Florida Licensed"
                width={80}
                height={80}
                className="mb-2"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <span className="text-xs text-gray-500 text-center">Florida<br/>Licensed</span>
            </div>
            
            {/* Fallback text badges when images not available */}
            <div className="flex gap-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-brand" />
                </div>
                <span>ACHC Accredited</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-brand" />
                </div>
                <span>Medicare Certified</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-brand" />
                </div>
                <span>FL Licensed #299993274</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand to-brand-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-blue-50 animate-fade-in [animation-delay:200ms]">
              Contact us today to learn more about our quality in-home healthcare services 
              or to refer a client to our care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
              <Button size="lg" variant="secondary" asChild className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-white text-brand hover:bg-gray-100">
                <a href="tel:877-255-9090">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Toll Free 1-877-255-9090
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}