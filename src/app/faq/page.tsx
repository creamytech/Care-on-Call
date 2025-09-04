import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, Phone, Mail, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Care on Call Home Healthcare',
  description: 'Find answers to common questions about our home healthcare services, Medicare coverage, and care options in Broward County, Florida.',
  keywords: 'home healthcare FAQ, Medicare coverage, nursing services questions, Fort Lauderdale healthcare',
}

const INSURANCE_PROVIDERS = [
  { 
    name: "Medicare", 
    details: "All plans accepted",
    logo: "https://logos-world.net/wp-content/uploads/2023/01/Medicare-Logo.png",
    fallbackColor: "bg-blue-50 text-blue-700"
  },
  { 
    name: "Aetna", 
    details: "Commercial and Medicare Advantage",
    logo: "https://logos-world.net/wp-content/uploads/2020/12/Aetna-Logo.png",
    fallbackColor: "bg-purple-50 text-purple-700"
  },
  { 
    name: "Cigna", 
    details: "Commercial plans only",
    logo: "https://logos-world.net/wp-content/uploads/2020/12/Cigna-Logo.png",
    fallbackColor: "bg-orange-50 text-orange-700"
  },
  { 
    name: "Oscar", 
    details: "Commercial plans only",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Oscar-Health-Logo.png",
    fallbackColor: "bg-green-50 text-green-700"
  },
  { 
    name: "Humana", 
    details: "LTC Medicaid",
    logo: "https://logos-world.net/wp-content/uploads/2020/12/Humana-Logo.png",
    fallbackColor: "bg-green-50 text-green-700"
  }
]

const OTHER_COVERAGE = [
  "Private Duty (minimum 4 hours; special live-in rates available)",
  "Most Long Term Insurances", 
  "One Call (Workman's Compensation)"
]

const faqs = [
  {
    question: 'What services does Care on Call Home Healthcare provide?',
    answer: 'We provide comprehensive home healthcare services including skilled nursing, physical therapy, occupational therapy, speech therapy, and custodial care. Our services range from a few hours to 24/7 assistance depending on your needs.'
  },
  {
    question: 'What insurances do you accept?',
    answer: '',
    isInsuranceList: true
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[hsl(var(--brand))] mb-8">
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
                    <CardTitle className="text-lg text-[hsl(var(--brand))] flex items-center">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {faq.isInsuranceList ? (
                      <div className="space-y-6">
                        {/* Major Insurance Providers */}
                        <div>
                          <h4 className="text-sm font-semibold text-[hsl(var(--brand))] mb-4 uppercase tracking-wide">Major Insurance Providers</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {INSURANCE_PROVIDERS.map((provider) => (
                              <div key={provider.name} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <div className={`flex-shrink-0 w-12 h-8 mr-3 flex items-center justify-center rounded text-xs font-bold ${provider.fallbackColor}`}>
                                  {provider.name.charAt(0)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-gray-900">{provider.name}</div>
                                  <div className="text-xs text-gray-600">{provider.details}</div>
                                </div>
                                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Other Coverage Options */}
                        <div>
                          <h4 className="text-sm font-semibold text-[hsl(var(--brand))] mb-4 uppercase tracking-wide">Other Coverage Options</h4>
                          <div className="space-y-2">
                            {OTHER_COVERAGE.map((coverage, index) => (
                              <div key={index} className="flex items-start">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-sm text-[hsl(var(--brand))]">{coverage}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact for Verification */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">Not sure about your coverage?</p>
                            <p>Call <a href="tel:+19543585001" className="font-semibold hover:underline">(954) 358-5001</a> and we'll verify for you.</p>
                            <p className="text-xs text-blue-600 mt-1">Fax: (954) 358-5008</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <CardDescription className="text-base text-[hsl(var(--brand))] leading-relaxed">
                        {faq.answer}
                      </CardDescription>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}