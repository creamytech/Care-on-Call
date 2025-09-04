'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Stethoscope, Activity, Users, Heart, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

// Metadata is handled by the parent layout for client components

const nursingServices = {
  icon: Stethoscope,
  title: 'Nursing Services',
  description: 'Professional nursing care in the comfort of your home',
  services: [
    'Registered Nurses (RNs)',
    'Licensed Practical Nurses (LPNs)', 
    '24/7 nurse availability for admissions and urgent situations',
    'Collaborative care with your physician',
    'Medication management and monitoring',
    'Wound care and treatment',
    'IV therapy and injections',
    'Disease management and education'
  ]
}

const therapyServices = {
  icon: Activity,
  title: 'Home Therapy Services',
  description: 'Rehabilitation services to help you regain independence',
  services: [
    'Physical Therapy: Therapeutic exercises and mobility training',
    'Occupational Therapy: Daily living skills and adaptive techniques', 
    'Speech Therapy: Communication and swallowing problem treatment',
    'In-home equipment assessment and recommendations',
    'Fall prevention and safety training',
    'Customized treatment plans',
    'Progress monitoring and adjustments',
    'Family education and support'
  ]
}

const custodialServices = {
  icon: Users,
  title: 'Custodial Home Care Services',
  description: 'Personal care assistance for daily living activities',
  services: [
    'Certified Nursing Assistants (CNAs)',
    'Home Health Aides (HHAs)',
    'Bathing and personal hygiene assistance',
    'Dressing and grooming support',
    'Toileting and incontinence care',
    'Ambulation and transfer assistance',
    'Simple physical exercises and mobility support',
    'Medication reminders'
  ]
}

const companionServices = {
  icon: Heart,
  title: 'Homemaker/Companion Services',
  description: 'Household support and companionship services',
  services: [
    'Light housekeeping and cleaning',
    'Meal planning and preparation',
    'Grocery shopping and errands',
    'Transportation to appointments',
    'Companionship and social interaction',
    'Safety monitoring and supervision',
    'Laundry and linen care',
    'Pet care assistance'
  ]
}

const socialServices = {
  icon: Shield,
  title: 'Medical Social Services',
  description: 'Professional support for healthcare challenges',
  services: [
    'Helping patients and families understand illness-related challenges',
    'Coping strategies for injury and recovery',
    'Resource identification and coordination',
    'Insurance and benefits assistance',
    'Community resource connections',
    'Family counseling and support',
    'Discharge planning assistance',
    'Care coordination with healthcare providers'
  ]
}

const serviceCategories = [
  nursingServices,
  therapyServices, 
  custodialServices,
  companionServices,
  socialServices
]

const careOptions = [
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Care ranging from a few hours to 24/7 assistance based on your needs'
  },
  {
    icon: Heart,
    title: 'Live-In Care',
    description: 'Credentialed aides provide full-time, ongoing care at reduced daily rates'
  },
  {
    icon: Shield,
    title: 'All Payment Types',
    description: 'We accept Medicare, private insurance, and custodial payment options'
  }
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string>('nursing')

  const scrollToService = (serviceId: string) => {
    setActiveService(serviceId)
    const element = document.getElementById(serviceId)
    if (element) {
      const offset = 120
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Our Healthcare Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive in-home care services in Broward County, Florida
            </p>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
              From skilled nursing to personal care assistance, we provide professional 
              healthcare services in the comfort and privacy of your own home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-black/10 py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {serviceCategories.map((category, index) => {
              const serviceId = category.title.toLowerCase().replace(/\s+/g, '-').replace('/', '-')
              return (
                <button
                  key={category.title}
                  onClick={() => scrollToService(serviceId)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeService === serviceId
                      ? 'bg-[hsl(var(--brand))] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title.replace(' Services', '')}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Care Options */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careOptions.map((option) => (
              <Card key={option.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <option.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => {
              const serviceId = category.title.toLowerCase().replace(/\s+/g, '-').replace('/', '-')
              return (
                <div 
                  key={category.title} 
                  id={serviceId}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[hsl(var(--brand))] rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2>
                          {category.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
                      {category.description}
                    </p>
                    <Button asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                  <div className={`bg-white rounded-2xl border border-black/10 shadow-sm p-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-lg font-semibold text-[hsl(var(--brand))] mb-4">Services Include:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      {category.services.map((service) => (
                        <div key={service} className="flex items-start">
                          <div className="w-2 h-2 bg-[hsl(var(--brand))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              Quality Care You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              All our healthcare professionals undergo extensive screening including 
              licensure verification, criminal background checks, professional reference 
              checks, and competency testing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">State of Florida License # 299993274</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">24/7 Availability</h3>
                <p className="text-gray-600 text-sm">Nurses available for admissions and urgent situations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Compassionate Care</h3>
                <p className="text-gray-600 text-sm">Tailored to meet your individual needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-[hsl(var(--brand))] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2>
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today to discuss your healthcare needs and learn how 
              we can provide the quality care you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="bg-white text-[hsl(var(--brand))] hover:bg-white/90"
              >
                <a href="tel:+19543585001">Call (954) 358-5001</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[hsl(var(--brand))] transition-colors duration-200" 
                asChild
              >
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}