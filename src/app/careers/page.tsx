import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Heart, Award, Briefcase, DollarSign, Clock } from 'lucide-react'
import { CareerApplicationForm } from '@/components/career-application-form'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Healthcare Careers - Join Our Team | Care on Call Home Healthcare',
  description: 'Join Care on Call Home Healthcare team in Fort Lauderdale, FL. We offer competitive compensation, flexible schedules, and rewarding healthcare careers. RN, LPN, CNA, and HHA positions available.',
  keywords: 'healthcare careers, nursing jobs Florida, home healthcare jobs, RN jobs, LPN jobs, CNA jobs, HHA jobs, Fort Lauderdale healthcare careers',
}

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'We offer competitive wages and regular performance-based increases'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Various shifts available including part-time, full-time, and live-in positions'
  },
  {
    icon: Award,
    title: 'Professional Development',
    description: 'Ongoing training opportunities and continuing education support'
  },
  {
    icon: Heart,
    title: 'Meaningful Work',
    description: 'Make a real difference in the lives of patients and their families'
  }
]

const positions = [
  {
    title: 'Registered Nurses (RN)',
    description: 'Provide professional nursing care and work collaboratively with physicians',
    requirements: [
      'Current Florida RN license',
      'Minimum 1 year home healthcare experience preferred',
      'Current CPR certification',
      'Reliable transportation and valid driver\'s license'
    ]
  },
  {
    title: 'Licensed Practical Nurses (LPN)',
    description: 'Deliver skilled nursing care under the supervision of registered nurses',
    requirements: [
      'Current Florida LPN license',
      'Home healthcare experience preferred',
      'Current CPR certification',
      'Excellent communication and documentation skills'
    ]
  },
  {
    title: 'Physical Therapists',
    description: 'Provide therapeutic exercises and mobility training in patients\' homes',
    requirements: [
      'Current Florida PT license',
      'Master\'s or Doctorate degree in Physical Therapy',
      'Home healthcare experience preferred',
      'Strong assessment and treatment planning skills'
    ]
  },
  {
    title: 'Occupational Therapists',
    description: 'Help patients regain daily living skills and independence',
    requirements: [
      'Current Florida OT license',
      'Master\'s degree in Occupational Therapy',
      'Experience with adaptive equipment',
      'Excellent patient education skills'
    ]
  },
  {
    title: 'Speech Therapists',
    description: 'Treat communication and swallowing disorders in the home setting',
    requirements: [
      'Current Florida SLP license',
      'Master\'s degree in Speech-Language Pathology',
      'Experience with dysphagia treatment preferred',
      'Strong diagnostic and treatment skills'
    ]
  },
  {
    title: 'Certified Nursing Assistants (CNA)',
    description: 'Provide personal care assistance and support daily living activities',
    requirements: [
      'Current Florida CNA certification',
      'Minimum 6 months experience preferred',
      'Compassionate and patient demeanor',
      'Physical ability to assist with patient mobility'
    ]
  },
  {
    title: 'Home Health Aides (HHA)',
    description: 'Assist with personal care, mobility, and basic household tasks',
    requirements: [
      'Current Florida HHA certification',
      'Background in personal care preferred',
      'Reliable and dependable',
      'Good communication skills'
    ]
  },
  {
    title: 'Medical Social Workers',
    description: 'Help patients and families cope with illness and injury challenges',
    requirements: [
      'Master\'s degree in Social Work',
      'Current Florida social work license',
      'Healthcare social work experience preferred',
      'Strong counseling and resource coordination skills'
    ]
  }
]

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-50 to-brand-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              Career Opportunities
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              There may be a career waiting for you at Care on Call Home Healthcare
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join our team of dedicated healthcare professionals and make a meaningful 
              difference in the lives of patients and families throughout Broward County, Florida.
            </p>
            <Button size="lg" asChild>
              <Link href="#application">Apply Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Why Choose Care on Call?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing a supportive work environment where 
              healthcare professionals can thrive and grow in their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're always looking for qualified healthcare professionals to join our growing team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position) => (
              <Card key={position.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Briefcase className="h-5 w-5 text-brand mr-2" />
                    <CardTitle className="text-lg">{position.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-brand mb-3">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
                Join Our Team of Professionals
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Care on Call Home Healthcare, we believe in providing exceptional 
                care while maintaining the highest professional standards. Our team 
                members are carefully screened and continuously supported.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive background checks and screening</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing training and professional development</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Supportive work environment focused on patient care</span>
                </li>
              </ul>
            </div>
            <div className="bg-brand/5 p-8 rounded-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand mb-4">
                  Ready to Apply?
                </h3>
                <p className="text-gray-600 mb-6">
                  Send your application online and become part of our dedicated 
                  healthcare team serving the Broward County community.
                </p>
                <Button size="lg" asChild>
                  <Link href="#application">Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <CareerApplicationForm />
    </div>
  )
}