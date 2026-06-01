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
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

       {/* Content */}
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center">

    <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
      Our <span className="text-cyan-400">Objectives</span>
    </h1>

    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
      At Nuru Njema Foundation, our objectives are to empower young people through
      digital skills development, innovation, and sustainable opportunities for social and economic growth.
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
                The objectives of Nuru Njema Foundation are as follows:
              </p>
            </CardHeader>

            <CardContent className="space-y-5">

              <div>
                <h3 className="font-serif font-bold text-gray-900">1. Digital Empowerment</h3>
                <p className="text-gray-600 font-sans text-sm">
                  To provide accessible digital skills training and ICT education to young people.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-gray-900">2. Youth Employment Creation</h3>
                <p className="text-gray-600 font-sans text-sm">
                  To equip youth with practical skills that enable employment and self-reliance.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-gray-900">3. Innovation and Creativity</h3>
                <p className="text-gray-600 font-sans text-sm">
                  To promote innovation, creativity, and problem-solving through technology.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-gray-900">4. Community Development</h3>
                <p className="text-gray-600 font-sans text-sm">
                  To support sustainable community development through digital transformation.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-gray-900">5. Strategic Partnerships</h3>
                <p className="text-gray-600 font-sans text-sm">
                  To collaborate with government, private sector, and stakeholders in advancing youth development.
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-gray-900">6. Inclusive Development</h3>
                <p className="text-gray-600 font-sans text-sm">
                  To ensure vulnerable and marginalized groups have equal access to opportunities.
                </p>
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