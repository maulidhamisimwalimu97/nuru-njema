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
            Explore how Nuru Njema Foundation empowers youth through practical digital skills training,
            innovation, and career-building opportunities.
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
              Our training programs are designed to take you step-by-step from beginner level to professional digital skills.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Computer Basics */}
            <Link href="/services/digital">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                <Monitor className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Computer Basics
                </h3>
                <p className="text-gray-600 font-sans">
                  Learn essential computer skills including typing, internet use, and file management.
                </p>
              </div>
            </Link>

            {/* Web Development */}
            <Link href="/services/digital">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                <Code className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Web Development
                </h3>
                <p className="text-gray-600 font-sans">
                  Build modern websites using HTML, CSS, JavaScript, and React.
                </p>
              </div>
            </Link>

            {/* Graphic Design */}
            <Link href="/services/digital">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                <Palette className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Graphic Design
                </h3>
                <p className="text-gray-600 font-sans">
                  Create logos, posters, and digital content using professional tools.
                </p>
              </div>
            </Link>

            {/* Digital Marketing */}
            <Link href="/services/digital">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                <Megaphone className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 font-sans">
                  Learn SEO, social media marketing, and online branding strategies.
                </p>
              </div>
            </Link>

            {/* Entrepreneurship */}
            <Link href="/services/entrepreneurship">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                <Lightbulb className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Entrepreneurship
                </h3>
                <p className="text-gray-600 font-sans">
                  Develop business ideas and startup thinking for real-world impact.
                </p>
              </div>
            </Link>

            {/* ICT & Innovation */}
            <Link href="/services/innovation">
              <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                <Cpu className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  ICT & Innovation
                </h3>
                <p className="text-gray-600 font-sans">
                  Learn technology, innovation, and problem-solving skills.
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
      </div>
      ) 
      }