import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Monitor, Code, Palette, Megaphone, Lightbulb, Cpu } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section with Background Image */}
      <section className="relative py-24">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/2.jpg"
            alt="Programs background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
            Our <span className="text-cyan-400">Programs</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
            Nuru Njema Foundation implements structured programs designed to empower youth,
            women, children, and marginalized groups through digital skills, STEAM education,
            innovation, and entrepreneurship development in collaboration with stakeholders.
          </p>

        </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">
                What You Will <span className="text-cyan-600">Learn</span>
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
                Our programs are designed to provide practical, competency-based training
                that equips learners with skills for employment, innovation, and sustainable development.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Card 1 */}
              <Link href="/services/digital" className="group">
                <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">

                  <Monitor className="h-10 w-10 text-cyan-600 mb-4" />

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 min-h-[56px]">
                    Computer Literacy & Digital Skills
                  </h3>

                  <p className="text-gray-600 font-sans flex-1">
                    Basic ICT training including computer use, internet skills, and digital literacy
                    for everyday and professional use.
                  </p>

                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/services/digital" className="group">
                <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">

                  <Code className="h-10 w-10 text-cyan-600 mb-4" />

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 min-h-[56px]">
                    Web Development & Programming
                  </h3>

                  <p className="text-gray-600 font-sans flex-1">
                    Training in modern web technologies including HTML, CSS, JavaScript,
                    and frameworks for building digital solutions.
                  </p>

                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/services/digital" className="group">
                <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">

                  <Palette className="h-10 w-10 text-cyan-600 mb-4" />

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 min-h-[56px]">
                    Digital & Graphic Design
                  </h3>

                  <p className="text-gray-600 font-sans flex-1">
                    Creative skills in branding, design, and digital content creation for
                    communication and business development.
                  </p>

                </div>
              </Link>

              {/* Card 4 */}
              <Link href="/services/digital" className="group">
                <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">

                  <Megaphone className="h-10 w-10 text-cyan-600 mb-4" />

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 min-h-[56px]">
                    Digital Marketing & Online Business
                  </h3>

                  <p className="text-gray-600 font-sans flex-1">
                    Skills in online branding, social media marketing, SEO, and digital
                    entrepreneurship strategies.
                  </p>

                </div>
              </Link>

              {/* Card 5 */}
              <Link href="/services/entrepreneurship" className="group">
                <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">

                  <Lightbulb className="h-10 w-10 text-cyan-600 mb-4" />

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 min-h-[56px]">
                    Entrepreneurship & Innovation
                  </h3>

                  <p className="text-gray-600 font-sans flex-1">
                    Business development, startup skills, and innovation training to support
                    youth-led enterprises and economic empowerment.
                  </p>

                </div>
              </Link>

              {/* Card 6 */}
              <Link href="/services/innovation" className="group">
                <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">

                  <Cpu className="h-10 w-10 text-cyan-600 mb-4" />

                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 min-h-[56px]">
                    ICT, Research & Innovation
                  </h3>

                  <p className="text-gray-600 font-sans flex-1">
                    Advanced ICT training, research, and innovation programs focused on solving
                    community challenges through technology.
                  </p>

                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            <h2 className="text-4xl font-serif font-black text-white mb-4">
              Join Our Digital Empowerment Programs
            </h2>

            <p className="text-xl text-cyan-100 mb-8 font-sans">
              Become part of a registered NGO empowering youth, women, children,
              and marginalized groups through STEAM education, innovation,
              and sustainable development opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link href="/join">
                <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
                  Join the Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg font-sans bg-transparent"
                >
                  Get Involved
                </Button>
              </Link>

            </div>

          </div>
        </section>
      </div>
      ) 
      }