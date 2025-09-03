'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const officeHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
  { day: 'Sunday', hours: 'On-call for emergencies' },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
        toast.success('Thank you for your message! We\'ll get back to you soon.')
      } else {
        setSubmitStatus('error')
        toast.error('There was an error sending your message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      toast.error('There was an error sending your message. Please try again.')
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're here to help with all your home healthcare needs
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact Care on Call Home Healthcare today to learn more about our services 
              or to discuss your specific healthcare needs. Our team is ready to provide 
              the quality care you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-brand mb-6">Get in Touch</h2>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-brand mr-2" />
                      <CardTitle className="text-lg">Address</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-gray-600">
                      Care on Call Home Healthcare<br />
                      211 East Prospect Road, NE 44th St.<br />
                      Fort Lauderdale, FL 33334
                    </address>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-brand mr-2" />
                      <CardTitle className="text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <div className="font-medium text-gray-900">Toll Free</div>
                      <a href="tel:1-877-255-9090" className="text-brand hover:underline">
                        1-877-255-9090
                      </a>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Local</div>
                      <a href="tel:954-358-5001" className="text-brand hover:underline">
                        (954) 358-5001
                      </a>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Fax</div>
                      <span className="text-gray-600">(954) 358-5008</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-brand mr-2" />
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@care-on-call.com" className="text-brand hover:underline">
                      info@care-on-call.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-brand mr-2" />
                      <CardTitle className="text-lg">Office Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {officeHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between">
                          <span className="font-medium text-gray-900">{schedule.day}</span>
                          <span className="text-gray-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="text-sm text-gray-500 pt-4">
                  <p>License # 299993274</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800">There was an error sending your message. Please try again or call us directly.</p>
                    </div>
                  )}

                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...form.register('name')}
                          className="mt-1"
                        />
                        {form.formState.errors.name && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register('email')}
                          className="mt-1"
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-red-600 mt-1">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...form.register('phone')}
                        className="mt-1"
                      />
                      {form.formState.errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        {...form.register('subject')}
                        className="mt-1"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        {...form.register('message')}
                        className="mt-1"
                        placeholder="Please tell us how we can help you..."
                      />
                      {form.formState.errors.message && (
                        <p className="text-sm text-red-600 mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand mb-8 text-center">Our Location</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.3844755467976!2d-80.14168168449827!3d26.155781383471707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d904c2d6d8b5f1%3A0x8b8f5f3b3f3f3f3f!2s211%20E%20Prospect%20Rd%2C%20Fort%20Lauderdale%2C%20FL%2033334!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Care on Call Home Healthcare Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}