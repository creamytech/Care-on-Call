'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Heart, Users, Shield, Loader2, Phone, Mail } from 'lucide-react'

const referralSchema = z.object({
  // Referrer information
  referrerName: z.string().min(2, 'Name must be at least 2 characters'),
  referrerEmail: z.string().email('Please enter a valid email address'),
  referrerPhone: z.string().optional(),
  
  // Patient information
  patientName: z.string().min(2, 'Patient name must be at least 2 characters'),
  patientPhone: z.string().min(10, 'Please enter a valid phone number'),
  patientAddress: z.string().min(10, 'Please enter a complete address'),
  
  // Care details
  servicesNeeded: z.string().min(5, 'Please specify services needed'),
  urgency: z.enum(['immediate', 'within_week', 'within_month', 'flexible']),
  insuranceInfo: z.string().min(5, 'Please provide insurance information'),
  additionalInfo: z.string().optional(),
})

type ReferralFormData = z.infer<typeof referralSchema>

const urgencyOptions = [
  { value: 'immediate', label: 'Immediate (within 24 hours)' },
  { value: 'within_week', label: 'Within a week' },
  { value: 'within_month', label: 'Within a month' },
  { value: 'flexible', label: 'Flexible timing' },
]

const benefitsOfReferring = [
  {
    icon: Heart,
    title: 'Quality Care',
    description: 'Professional, compassionate healthcare services in the comfort of home',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'State of Florida licensed with comprehensive screening of all staff',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: '24/7 availability with registered nurses and skilled healthcare professionals',
  },
]

export default function ReferralPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const form = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referrerName: '',
      referrerEmail: '',
      referrerPhone: '',
      patientName: '',
      patientPhone: '',
      patientAddress: '',
      servicesNeeded: '',
      urgency: 'flexible',
      insuranceInfo: '',
      additionalInfo: '',
    },
  })

  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-50 to-brand-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              Refer a Client
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Help someone receive the quality home healthcare they deserve
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If you know someone who could benefit from our professional home healthcare services, 
              we'd be honored to help. Complete the referral form below and we'll contact them 
              promptly to discuss their care needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Refer Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Why Refer to Care on Call?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional care that gives families peace of mind 
              and helps patients maintain their independence at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefitsOfReferring.map((benefit) => (
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

      {/* Referral Form */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Client Referral Form</CardTitle>
                <CardDescription>
                  Please provide the following information about the patient and their care needs.
                  All information will be kept confidential.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">Thank you for the referral! We'll contact the patient within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">There was an error submitting the referral. Please try again or call us directly.</p>
                  </div>
                )}

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Referrer Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-brand mb-4">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="referrerName">Your Name *</Label>
                        <Input
                          id="referrerName"
                          {...form.register('referrerName')}
                          className="mt-1"
                        />
                        {form.formState.errors.referrerName && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.referrerName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="referrerEmail">Your Email *</Label>
                        <Input
                          id="referrerEmail"
                          type="email"
                          {...form.register('referrerEmail')}
                          className="mt-1"
                        />
                        {form.formState.errors.referrerEmail && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.referrerEmail.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="referrerPhone">Your Phone (Optional)</Label>
                      <Input
                        id="referrerPhone"
                        type="tel"
                        {...form.register('referrerPhone')}
                        className="mt-1"
                      />
                      {form.formState.errors.referrerPhone && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.referrerPhone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Patient Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-brand mb-4">Patient Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="patientName">Patient Name *</Label>
                        <Input
                          id="patientName"
                          {...form.register('patientName')}
                          className="mt-1"
                        />
                        {form.formState.errors.patientName && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.patientName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="patientPhone">Patient Phone *</Label>
                        <Input
                          id="patientPhone"
                          type="tel"
                          {...form.register('patientPhone')}
                          className="mt-1"
                        />
                        {form.formState.errors.patientPhone && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.patientPhone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="patientAddress">Patient Address *</Label>
                      <Textarea
                        id="patientAddress"
                        rows={3}
                        {...form.register('patientAddress')}
                        className="mt-1"
                        placeholder="Street address, city, state, zip code"
                      />
                      {form.formState.errors.patientAddress && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.patientAddress.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Care Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-brand mb-4">Care Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="servicesNeeded">Services Needed *</Label>
                        <Textarea
                          id="servicesNeeded"
                          rows={3}
                          {...form.register('servicesNeeded')}
                          className="mt-1"
                          placeholder="Please describe the type of care needed (nursing, therapy, personal care, etc.)"
                        />
                        {form.formState.errors.servicesNeeded && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.servicesNeeded.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="urgency">Timeline for Care *</Label>
                        <select
                          id="urgency"
                          {...form.register('urgency')}
                          className="mt-1 w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-brand"
                        >
                          {urgencyOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {form.formState.errors.urgency && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.urgency.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="insuranceInfo">Insurance Information *</Label>
                        <Textarea
                          id="insuranceInfo"
                          rows={2}
                          {...form.register('insuranceInfo')}
                          className="mt-1"
                          placeholder="Medicare, Medicaid, private insurance, self-pay, etc."
                        />
                        {form.formState.errors.insuranceInfo && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.insuranceInfo.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                        <Textarea
                          id="additionalInfo"
                          rows={3}
                          {...form.register('additionalInfo')}
                          className="mt-1"
                          placeholder="Any additional information that would help us provide better care"
                        />
                        {form.formState.errors.additionalInfo && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.additionalInfo.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting Referral...
                        </>
                      ) : (
                        'Submit Referral'
                      )}
                    </Button>

                    <div className="text-sm text-gray-600 flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      All information is kept strictly confidential
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-brand text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Referrals?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Our team is here to help you understand our services and answer any questions 
              about the referral process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:877-255-9090">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Toll Free 1-877-255-9090
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand" asChild>
                <a href="mailto:info@care-on-call.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}