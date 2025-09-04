import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Care on Call Home Healthcare',
  description: 'Find answers to common questions about our home healthcare services, Medicare coverage, and care options in Broward County, Florida.',
  keywords: 'home healthcare FAQ, Medicare coverage, nursing services questions, Fort Lauderdale healthcare',
}

const INSURANCE_BRANDS = [
  { name: "Medicare", src: "/logos/medicare.svg", alt: "Medicare" },
  { name: "Aetna", src: "/logos/aetna.svg", alt: "Aetna" },
  { name: "Cigna", src: "/logos/cigna.svg", alt: "Cigna" },
  { name: "Oscar", src: "/logos/oscar.svg", alt: "Oscar" },
]

const faqs = [
  {
    question: 'What services does Care on Call Home Healthcare provide?',
    answer: 'We provide comprehensive home healthcare services including skilled nursing, physical therapy, occupational therapy, speech therapy, and custodial care. Our services range from a few hours to 24/7 assistance depending on your needs.'
  },
  {
    question: 'What insurances do you accept?',
    answer: 'We accept: Medicare, Aetna (Commercial and Medicare Advantage), Cigna (Commercial plans only), Oscar (Commercial plans only), Private Duty (minimum 4 hours; special live-in rates - ask about requirements), Most Long Term Insurances, Humana (LTC Medicaid), and One Call (Workman\'s Comp). Not sure about your coverage? Call (954) 358-5001 and we\'ll verify for you. Fax: (954) 358-5008.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of Broward County, Florida, including Fort Lauderdale, Davie, Plantation, Sunrise, Coral Springs, and surrounding communities.'
  },
  {
    question: 'How quickly can you start services?',
    answer: 'We can often start services within 24-48 hours of your initial assessment, depending on your specific needs and care requirements.'
  },
  {
    question: 'Are your caregivers licensed and screened?',
    answer: 'Yes, all our healthcare professionals are licensed, bonded, and insured. They undergo extensive background checks, licensure verification, and competency testing before joining our team.'
  },
  {
    question: 'Can I choose my caregiver?',
    answer: 'Absolutely! We work with you to match you with a caregiver who meets your specific needs and preferences. If you\'re not completely satisfied, we\'ll work to find a better match.'
  },
  {
    question: 'What is the difference between skilled nursing and custodial care?',
    answer: 'Skilled nursing involves medical care provided by licensed nurses (RNs/LPNs) for conditions requiring clinical expertise. Custodial care includes assistance with daily living activities like bathing, dressing, and meal preparation.'
  },
  {
    question: 'Do you provide 24/7 care?',
    answer: 'Yes, we offer 24/7 nursing availability for urgent situations and can provide round-the-clock care when needed. We also offer flexible scheduling for a few hours of care per day.'
  },
  {
    question: 'How do I get started with your services?',
    answer: 'Simply call us at (954) 358-5001 or fill out our contact form. We\'ll schedule a free consultation to assess your needs and develop a personalized care plan.'
  },
  {
    question: 'What makes Care on Call different from other agencies?',
    answer: 'We\'re locally owned and operated in Fort Lauderdale, providing personalized care with 24/7 nurse availability. We offer competitive rates, accept various payment options, and focus on exceeding expectations for both clients and families.'
  }
]

export default function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Find answers to common questions about our home healthcare services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-l-4 border-l-brand hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-700 flex items-center">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </CardDescription>
                    {faq.question === 'What insurances do you accept?' && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                          {INSURANCE_BRANDS.map((brand) => (
                            <div key={brand.name} className="flex flex-col items-center min-w-[44px]">
                              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-lg flex items-center justify-center p-2 hover:bg-gray-100 transition-colors duration-200">
                                <span className="text-xs font-medium text-gray-700 text-center px-2 py-1 bg-gray-200 rounded-full">
                                  {brand.name}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team is here to help. Contact us for personalized answers to your specific healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                <a href="tel:954-358-5001" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (954) 358-5001
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                <Link href="/contact" className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}