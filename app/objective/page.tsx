import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Phone, Mail, MapPin, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/23.jpeg"
            alt="Nuru Njema Objectives"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
              Our <span className="text-cyan-400">Objectives</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
              At Nuru Njema Foundation, our objectives are strictly guided by our Constitution
              to empower communities through digital transformation, innovation, and sustainable development.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Objectives Card */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif font-bold text-gray-900">
                  Objectives of the Organization
                </CardTitle>
                <p className="text-gray-600 font-sans">
                  The objectives of Nuru Njema Foundation as stated in the Constitution:
                </p>
              </CardHeader>

              <CardContent className="space-y-6 font-sans text-gray-700">

                <div>
                  <h3 className="font-serif font-bold text-gray-900">
                    1. Integrated Digital Literacy & STEAM Education
                  </h3>
                  <p className="text-sm text-gray-600">
                    To integrate digital literacy and access to STEAM education and emerging technologies into educational programs,
                    preparing young people for real-world opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-gray-900">
                    2. Agricultural Digital Transformation
                  </h3>
                  <p className="text-sm text-gray-600">
                    To enhance the agricultural sector through digital transformation and entrepreneurial capacity building in both rural and urban areas.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-gray-900">
                    3. Climate, Food & Biodiversity Collaboration
                  </h3>
                  <p className="text-sm text-gray-600">
                    To foster collaborative efforts in digital transformation technologies through inclusive discussions,
                    ensuring unified action on food security, climate change, and biodiversity for lasting impact.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-gray-900">
                    4. Youth Participation in Innovation & Leadership
                  </h3>
                  <p className="text-sm text-gray-600">
                    To promote youth participation in innovation, research, policy-making, and leadership for economic and social transformation.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-gray-900">
                    5. Strategic Partnerships & Collaboration
                  </h3>
                  <p className="text-sm text-gray-600">
                    To develop partnerships, linkages, and collaborations with stakeholders including government and private sectors,
                    to advocate for policies and programs that improve societal welfare.
                  </p>
                </div>

                {/* ACTIVITIES SECTION (ADDED) */}
                <div className="pt-6 border-t border-gray-200 space-y-4">

                  <h3 className="font-serif font-bold text-gray-900 text-lg">
                    Organization Activities
                  </h3>

                  <p className="text-sm text-gray-600">
                    This organization carries out the following activities:
                  </p>

                  <div className="space-y-3 text-sm text-gray-700">

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        1. Women and Youth Empowerment
                      </h4>
                      <p className="text-gray-600">
                        Providing education, entrepreneurship training, and life skills.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        2. Public Resource Tracking
                      </h4>
                      <p className="text-gray-600">
                        Using methods such as the Public Expenditure Tracking System (PETS) to promote transparency and accountability.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        3. Inclusive Education
                      </h4>
                      <p className="text-gray-600">
                        Supporting groups with special needs and their teachers to ensure inclusive access to education.
                      </p>
                    </div>

                  </div>

                </div>

              </CardContent>
            </Card>



            {/* Side Info Card */}
            <div className="space-y-8">

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    Purpose Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-sans text-sm">
                    The organization exists to bridge the digital skills gap among youth
                    and create sustainable opportunities for economic empowerment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-600 font-sans">
                  <p><span className="font-bold text-gray-900">Phone:</span> +255 742 700 833</p>
                  <p><span className="font-bold text-gray-900">Email:</span> info@nurunjema.org</p>
                  <p><span className="font-bold text-gray-900">Location:</span> Tanzania</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-cyan-50">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    Our Impact
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-serif font-black text-cyan-600">5+</div>
                      <div className="text-sm text-gray-600">Programs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-black text-cyan-600">300+</div>
                      <div className="text-sm text-gray-600">Youth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-black text-cyan-600">10+</div>
                      <div className="text-sm text-gray-600">Communities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-black text-cyan-600">100%</div>
                      <div className="text-sm text-gray-600">Commitment</div>
                    </div>
                  </div>

                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}