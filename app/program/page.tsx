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
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Our <span className="text-cyan-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Explore how Nuru Njema Foundation empowers youth through practical digital skills training,
              innovation, and career-building opportunities.
            </p>
          </div>
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
              Our training programs are designed to take you step-by-step from beginner level to professional digital skills.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Computer Basics */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <Monitor className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Computer Basics
              </h3>
              <p className="text-gray-600 font-sans">
                Learn essential computer skills including typing, internet use, and file management.
              </p>
            </div>

            {/* Web Development */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <Code className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 font-sans">
                Build modern websites using HTML, CSS, JavaScript, and React.
              </p>
            </div>

            {/* Graphic Design */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <Palette className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Graphic Design
              </h3>
              <p className="text-gray-600 font-sans">
                Create logos, posters, and digital content using professional tools.
              </p>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <Megaphone className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Digital Marketing
              </h3>
              <p className="text-gray-600 font-sans">
                Learn SEO, social media marketing, and online branding strategies.
              </p>
            </div>

            {/* Entrepreneurship */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <Lightbulb className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Entrepreneurship
              </h3>
              <p className="text-gray-600 font-sans">
                Develop business ideas and startup thinking for real-world impact.
              </p>
            </div>

            {/* ICT & Innovation */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition">
              <Cpu className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                ICT & Innovation
              </h3>
              <p className="text-gray-600 font-sans">
                Learn technology, innovation, and problem-solving skills.
              </p>
            </div>

          </div>
        </div>
      </section> 
      
      {/* Additional Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-black text-gray-900 mb-4">
              What’s NOT Included
            </h2>
            <p className="text-lg text-gray-600 font-sans">
              We believe in transparency — here are a few optional or external costs you may encounter.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Learning Materials */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                    Learning Materials
                  </h3>
                  <ul className="space-y-2 font-sans text-gray-600">
                    <li>• Personal notebooks and stationery</li>
                    <li>• Internet bundles for online learning (if studying remotely)</li>
                    <li>• Printing or project materials when required</li>
                  </ul>
                </div>

                {/* Optional Services */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                    Optional Support Services
                  </h3>
                  <ul className="space-y-2 font-sans text-gray-600">
                    <li>• Advanced mentorship sessions (if requested)</li>
                    <li>• Certification replacement or re-printing</li>
                    <li>• Special workshops and bootcamps (occasional)</li>
                  </ul>
                </div>

              </div>

              <div className="mt-8 p-4 bg-cyan-50 rounded-lg">
                <p className="text-cyan-800 font-sans text-sm">
                  <strong>Note:</strong> Most of our core training programs are free or fully supported by partners.
                  Any additional costs are always communicated clearly before participation.
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* CTA Section */}
    <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-4xl font-serif font-black text-white mb-4">
          Ready to Start Your Digital Skills Journey?
        </h2>

        <p className="text-xl text-cyan-100 mb-8 font-sans">
          Join Nuru Njema Foundation today and gain the skills, knowledge,
          and opportunities to shape your future through technology.
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