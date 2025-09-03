'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Shield, Users, Phone, Award, MapPin, Star, Check } from 'lucide-react'

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

const testimonials = [
  {
    name: 'Maria Rodriguez',
    location: 'Fort Lauderdale, FL',
    text: 'Care on Call provided exceptional care for my mother. The nurses were professional, caring, and always available when we needed them. Highly recommend!',
    rating: 5
  },
  {
    name: 'John Thompson',
    location: 'Davie, FL',
    text: 'Outstanding service! The physical therapist helped my father regain his mobility after surgery. The entire team was compassionate and skilled.',
    rating: 5
  },
  {
    name: 'Lisa Chen',
    location: 'Plantation, FL',
    text: 'We couldn\'t be happier with Care on Call. They made it possible for my grandmother to stay at home comfortably. Professional and reliable service.',
    rating: 5
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-700))] text-white section-spacing overflow-hidden">
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
            <p className="text-xl md:text-2xl mb-8 text-white animate-fade-in [animation-delay:200ms]">
              Home Care That Exceeds Expectations
            </p>
            <p className="text-lg mb-12 text-gray-100 animate-fade-in [animation-delay:400ms]">
              Providing quality in-home care services in Broward County, Florida. 
              Licensed, trusted, and locally owned and operated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms] px-4">
              <a 
                href="tel:+19543585001" 
                className="h-12 px-8 py-3 rounded-lg bg-white text-[hsl(var(--brand))] font-bold text-base grid place-items-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <span className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">Call (954) 358-5001</span>
                  <span className="sm:hidden">Call Us</span>
                </span>
              </a>
              <Link 
                href="/refer" 
                className="h-12 px-8 py-3 rounded-lg border-2 border-white text-white font-bold text-base grid place-items-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                Refer a Client
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-[hsl(var(--muted))]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive in-home healthcare services ranging from a few hours to 24/7 assistance.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className={`group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md animate-fade-in ${index === 0 ? '[animation-delay:200ms]' : index === 1 ? '[animation-delay:400ms]' : '[animation-delay:600ms]'}`}>
                <div className="mb-4">
                  {/* Service image - will show when you add service icons */}
                  <Image
                    src={service.image}
                    alt={`${service.title} icon`}
                    width={48}
                    height={48}
                    className="mb-4"
                    onError={(e) => {
                      // Hide image and show icon fallback if image not found
                      e.currentTarget.style.display = 'none';
                      const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                      if (sibling) sibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback icon */}
                  <div className="w-12 h-12 bg-[hsl(var(--brand))]/10 rounded-lg flex items-center justify-center hidden group-hover:bg-[hsl(var(--brand))]/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-[hsl(var(--brand))] group-hover:text-[hsl(var(--brand-700))] transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[hsl(var(--brand))] font-medium">
                  Learn more <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild className="transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              What Our Families Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the families we've had the privilege to serve throughout Broward County
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in ${index === 0 ? '[animation-delay:200ms]' : index === 1 ? '[animation-delay:400ms]' : '[animation-delay:600ms]'}`}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <p className="font-semibold text-brand">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
                Care You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Care on Call Home Healthcare is a provider of quality in-home care services 
                in Broward County, Florida. We offer credentialed healthcare professionals 
                with extensive screening including licensure verification, criminal background 
                checks, and competency testing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {trustFeatures.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-800 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[hsl(var(--brand))]/5 p-8 rounded-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[hsl(var(--brand))] rounded-full mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand mb-4">
                  Serving Broward County
                </h3>
                <p className="text-gray-700 mb-6">
                  Located in Fort Lauderdale, we provide live-in assistance 
                  and credentialed aides for full-time, ongoing care at reduced daily rates.
                </p>
                <div className="text-sm text-gray-600">
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
            <p className="text-gray-700">
              Licensed by the State of Florida and accredited by leading healthcare organizations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {/* ACHC Gold Seal */}
            <div className="flex flex-col items-center group cursor-pointer">
              <Image
                src="/images/trust/achc-seal.png"
                alt="ACHC Gold Seal of Approval"
                width={80}
                height={80}
                className="mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              {/* Fallback badge */}
              <div className="w-20 h-20 bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center mb-3 hidden group-hover:bg-[hsl(var(--brand))]/20 transition-colors duration-300">
                <Award className="h-10 w-10 text-[hsl(var(--brand))]" />
              </div>
              <span className="text-sm text-gray-600 text-center font-medium">ACHC<br/>Accredited</span>
            </div>
            
            {/* Medicare Certified */}
            <div className="flex flex-col items-center group cursor-pointer">
              <Image
                src="/images/trust/medicare-certified.png"
                alt="Medicare Certified"
                width={80}
                height={80}
                className="mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              {/* Fallback badge */}
              <div className="w-20 h-20 bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center mb-3 hidden group-hover:bg-[hsl(var(--brand))]/20 transition-colors duration-300">
                <Shield className="h-10 w-10 text-[hsl(var(--brand))]" />
              </div>
              <span className="text-sm text-gray-600 text-center font-medium">Medicare<br/>Certified</span>
            </div>
            
            {/* Florida Licensed */}
            <div className="flex flex-col items-center group cursor-pointer">
              <Image
                src="/images/trust/florida-licensed.png"
                alt="Florida Licensed"
                width={80}
                height={80}
                className="mb-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              {/* Fallback badge */}
              <div className="w-20 h-20 bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center mb-3 hidden group-hover:bg-[hsl(var(--brand))]/20 transition-colors duration-300">
                <Award className="h-10 w-10 text-[hsl(var(--brand))]" />
              </div>
              <span className="text-sm text-gray-600 text-center font-medium">FL Licensed<br/>#299993274</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand-700))] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-gray-100 animate-fade-in [animation-delay:200ms]">
              Contact us today to learn more about our quality in-home healthcare services 
              or to refer a client to our care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms] px-4">
              <a 
                href="tel:+18772559090" 
                className="h-12 px-8 py-3 rounded-lg bg-white text-[hsl(var(--brand))] font-bold text-base grid place-items-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <span className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="hidden sm:inline">Call Toll Free 1-877-255-9090</span>
                  <span className="sm:hidden">Call Toll Free</span>
                </span>
              </a>
              <Link 
                href="/contact" 
                className="h-12 px-8 py-3 rounded-lg border-2 border-white text-white font-bold text-base grid place-items-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}