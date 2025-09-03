import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare, Star, Heart, Phone } from 'lucide-react'
import Link from 'next/link'

export default function SurveyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-50 to-brand-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6">
              Client Satisfaction Survey
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Your feedback helps us provide better care
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Care on Call Home Healthcare, we value your input and are committed 
              to continuously improving our services based on your feedback and suggestions.
            </p>
          </div>
        </div>
      </section>

      {/* Survey Information */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
                Help Us Serve You Better
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your satisfaction is our top priority. We regularly survey our clients 
                to ensure we're meeting your healthcare needs and exceeding your expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                The survey takes just a few minutes to complete and covers areas such as:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Quality of care received</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Professionalism of our healthcare team</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Communication and responsiveness</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-brand mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Overall satisfaction with our services</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand rounded-full mb-6">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand mb-4">
                  Your Voice Matters
                </h3>
                <p className="text-gray-600 mb-6">
                  Every response helps us understand how we can better serve you 
                  and improve the quality of our home healthcare services.
                </p>
                <Button size="lg" className="w-full">
                  Take Survey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Confidentiality */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
                Privacy & Confidentiality
              </h2>
              <p className="text-lg text-gray-600">
                Your privacy and confidentiality are completely protected
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-xl">Anonymous Responses</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Your survey responses are completely anonymous. We use the feedback 
                    to improve our services without identifying individual respondents.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-brand" />
                  </div>
                  <CardTitle className="text-xl">Constructive Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We welcome both positive feedback and constructive criticism. 
                    All responses help us maintain and improve our high standards of care.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Feedback Methods */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6">
              Other Ways to Share Feedback
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              If you prefer, you can also share your feedback through these alternative methods:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-brand mb-2">Phone</h3>
                <p className="text-gray-600 text-sm mb-3">Speak directly with our team</p>
                <div className="space-y-1 text-sm">
                  <p><a href="tel:954-358-5001" className="text-brand hover:underline">(954) 358-5001</a></p>
                  <p><a href="tel:877-255-9090" className="text-brand hover:underline">1-877-255-9090</a></p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-brand mb-2">Email</h3>
                <p className="text-gray-600 text-sm mb-3">Send us your thoughts via email</p>
                <p className="text-sm">
                  <a href="mailto:info@care-on-call.com" className="text-brand hover:underline">
                    info@care-on-call.com
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-brand mb-2">In Person</h3>
                <p className="text-gray-600 text-sm mb-3">Visit our office location</p>
                <div className="text-sm text-gray-600">
                  <p>211 East Prospect Road</p>
                  <p>NE 44th St.</p>
                  <p>Fort Lauderdale, FL 33334</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Thank You for Your Feedback
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Your input helps us continue providing exceptional home healthcare 
              services to families throughout Broward County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Complete Survey Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}