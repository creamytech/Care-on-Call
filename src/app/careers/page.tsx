'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Heart, Award, Briefcase, DollarSign, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { CareerApplicationForm } from '@/components/career-application-form'
import Link from 'next/link'

// Metadata is handled by the parent layout for client components

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
  const [expandedPositions, setExpandedPositions] = useState<{[key: string]: boolean}>({})

  const togglePosition = (positionTitle: string) => {
    setExpandedPositions(prev => ({
      ...prev,
      [positionTitle]: !prev[positionTitle]
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 section-spacing">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Career Opportunities
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              There may be a career waiting for you at Care on Call Home Healthcare
            </p>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto mb-8">
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
      <section className="section-spacing">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Why Choose Care on Call?
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              We're committed to providing a supportive work environment where 
              healthcare professionals can thrive and grow in their careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-black/10">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-[hsl(var(--brand))]/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-[hsl(var(--brand))]" />
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
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              We're always looking for qualified healthcare professionals to join our growing team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {positions.map((position) => (
              <div key={position.title} className="bg-white rounded-2xl border border-black/10 shadow-sm">
                <button
                  onClick={() => togglePosition(position.title)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 rounded-t-2xl"
                  aria-expanded={expandedPositions[position.title]}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[hsl(var(--brand))]/10 rounded-lg flex items-center justify-center mr-4">
                      <Briefcase className="h-5 w-5 text-[hsl(var(--brand))]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(var(--brand))]">{position.title}</h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{position.description}</p>
                    </div>
                  </div>
                  {expandedPositions[position.title] ? (
                    <ChevronUp className="h-5 w-5 text-[hsl(var(--brand))]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[hsl(var(--brand))]" />
                  )}
                </button>
                
                {expandedPositions[position.title] && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-semibold text-[hsl(var(--brand))] mb-3">Requirements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {position.requirements.map((req) => (
                          <div key={req} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-[hsl(var(--brand))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{req}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Button size="sm" asChild>
                          <Link href="#application">Apply for this Position</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">
                Join Our Team of Professionals
              </h2>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
                At Care on Call Home Healthcare, we believe in providing exceptional 
                care while maintaining the highest professional standards. Our team 
                members are carefully screened and continuously supported.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-[hsl(var(--brand))] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive background checks and screening</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-[hsl(var(--brand))] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing training and professional development</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-[hsl(var(--brand))] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Supportive work environment focused on patient care</span>
                </li>
              </ul>
            </div>
            <div className="bg-[hsl(var(--brand))]/5 p-8 rounded-2xl border border-black/10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[hsl(var(--brand))] rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--brand))] mb-4">
                  Ready to Apply?
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-6">
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