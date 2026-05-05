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
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Our <span className="text-cyan-600">Objectives</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              At Nuru Njema Foundation, our mission is to empower youth through digital skills training,
              innovation, and mentorship that creates opportunities for a better and sustainable future.
            </p>
          </div>
        </div>
      </section>

     {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Objectives Intro Card */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-serif font-bold text-gray-900">
                  Our Objectives
                </CardTitle>
                <p className="text-gray-600 font-sans">
                  At Nuru Njema Foundation, we aim to empower young people through digital skills,
                  innovation, and opportunities that create sustainable futures.
                </p>
              </CardHeader>

              <CardContent className="space-y-6">

                <div className="space-y-4">

                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-gray-900">1. Digital Empowerment</h3>
                    <p className="text-gray-600 font-sans text-sm">
                      Provide accessible digital skills training to youth in Tanzania and beyond.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-gray-900">2. Youth Employment</h3>
                    <p className="text-gray-600 font-sans text-sm">
                      Equip young people with practical skills that lead to jobs and self-employment.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-gray-900">3. Innovation & Creativity</h3>
                    <p className="text-gray-600 font-sans text-sm">
                      Encourage innovation, problem-solving, and technology-based solutions.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-gray-900">4. Community Development</h3>
                    <p className="text-gray-600 font-sans text-sm">
                      Support communities by reducing unemployment through digital transformation.
                    </p>
                  </div>

                </div>

                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-sans">
                  Join Our Programs
                </Button>

              </CardContent>
            </Card>

            {/* Information Section */}
            <div className="space-y-8">

              {/* What We Aim For */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    What We Aim For
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                  <p className="text-gray-600 font-sans text-sm">
                    We focus on building a generation of skilled, confident, and innovative young people
                    who can compete in the digital world.
                  </p>

                  <p className="text-gray-600 font-sans text-sm">
                    Our programs are designed to bridge the gap between education and real-world skills.
                  </p>

                  <p className="text-gray-600 font-sans text-sm">
                    We believe technology is the key to solving unemployment challenges in Africa.
                  </p>

                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    Contact Us
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">

                  <div>
                    <p className="font-serif font-bold text-gray-900">Phone</p>
                    <p className="text-gray-600 font-sans">+255 742 700 833</p>
                  </div>

                  <div>
                    <p className="font-serif font-bold text-gray-900">Email</p>
                    <p className="text-gray-600 font-sans">info@nurunjema.org</p>
                  </div>

                  <div>
                    <p className="font-serif font-bold text-gray-900">Location</p>
                    <p className="text-gray-600 font-sans">Tanzania, United Republic of</p>
                  </div>

                </CardContent>
              </Card>

              {/* Impact Stats */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-amber-50">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">

                    <h3 className="text-xl font-serif font-bold text-gray-900">
                      Our Impact
                    </h3>

                    <div className="grid grid-cols-2 gap-4 text-center">

                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">5+</div>
                        <div className="text-sm text-gray-600 font-sans">Programs</div>
                      </div>

                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">300+</div>
                        <div className="text-sm text-gray-600 font-sans">Youth Trained</div>
                      </div>

                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">10+</div>
                        <div className="text-sm text-gray-600 font-sans">Communities</div>
                      </div>

                      <div>
                        <div className="text-2xl font-serif font-black text-cyan-600">100%</div>
                        <div className="text-sm text-gray-600 font-sans">Dedication</div>
                      </div>

                    </div>

                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-black text-gray-900 mb-4">
              Our Programs FAQs
            </h2>
            <p className="text-lg text-gray-600 font-sans">
              Common questions about our digital skills training programs at Nuru Njema Foundation.
            </p>
          </div>

          <div className="space-y-6">

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Who can join Nuru Njema programs?
                </h3>
                <p className="text-gray-600 font-sans">
                  Our programs are open to all young people interested in learning digital skills,
                  regardless of their education level or background.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Do I need computer experience before joining?
                </h3>
                <p className="text-gray-600 font-sans">
                  No prior experience is required. We start from basic computer skills and guide you
                  step by step until you become confident in digital tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Is the training free?
                </h3>
                <p className="text-gray-600 font-sans">
                  Many of our programs are free or supported by partners to ensure youth have access
                  to quality digital education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  What will I be able to do after the program?
                </h3>
                <p className="text-gray-600 font-sans">
                  You will be able to create websites, design graphics, understand digital marketing,
                  and use technology to earn income or get employment opportunities.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

            {/* Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                <div>
                  <h3 className="text-2xl font-serif font-black text-cyan-400 mb-4">
                    Nuru Njema Foundation
                  </h3>
                  <p className="text-gray-400 font-sans mb-4">
                    Empowering youth through digital skills, innovation, and community transformation.
                  </p>
                  <div className="text-sm text-gray-400 font-sans">
                    <p>Youth Empowerment & Digital Skills Initiative</p>
                    <p>Registered Non-Profit Organization</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-bold mb-4">Programs</h4>
                  <ul className="space-y-2 text-gray-400 font-sans">
                    <li>
                      <Link href="/services/portfolio-management" className="hover:text-cyan-400 transition-colors">
                        Digital Skills Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/wealth-planning" className="hover:text-cyan-400 transition-colors">
                        Youth Mentorship
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/risk-assessment" className="hover:text-cyan-400 transition-colors">
                        Innovation Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/tax-optimization" className="hover:text-cyan-400 transition-colors">
                        Entrepreneurship Guidance
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-bold mb-4">Organization</h4>
                  <ul className="space-y-2 text-gray-400 font-sans">
                    <li>
                      <Link href="/about" className="hover:text-cyan-400 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/about#team" className="hover:text-cyan-400 transition-colors">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-serif font-bold mb-4">Contact Info</h4>
                  <div className="space-y-2 text-gray-400 font-sans">
                    <p>📧 info@nurunjemafoundation.org</p>
                    <p>📞 +255 700 000 000</p>
                    <p>📍 Dar es Salaam, Tanzania</p>
                  </div>
                </div>

              </div>

              <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                <p className="text-gray-400 font-sans">
                  © 2026 Nuru Njema Foundation. All rights reserved by <a href="https://codescandy.com/" target="_blank">CodesCandy</a>. Distributed by <a href="https://themewagon.com" target="_blank">ThemeWagon</a>.
                </p>
              </div>

            </div>
          </footer>
          </div>
          ) 
          }