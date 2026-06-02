"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Phone,
  Users,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-24">

        <div className="absolute inset-0">
          <img
            src="/images/2.jpg"
            alt="Programs background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
            Our <span className="text-cyan-400">Programs</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
            Nuru Njema Foundation implements structured community empowerment programs
            focused on digital inclusion, entrepreneurship, transparency, and supporting
            vulnerable groups facing digital and economic challenges.
          </p>

        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-4">
              Our <span className="text-cyan-600">Programs</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Community-based empowerment programs designed to build economic independence,
              digital resilience, transparency, and inclusive development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                <TrendingUp className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Women & Youth Empowerment
                </h3>
                <p className="text-gray-600 font-sans flex-1">
                  Entrepreneurship training, life skills, and income-generating support
                  to help women and youth become economically independent.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                <Phone className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Digital Inclusion & ICT Access
                </h3>
                <p className="text-gray-600 font-sans flex-1">
                  Bridging the digital divide by improving access to ICT tools,
                  internet literacy, and digital opportunities.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                <CheckCircle className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Public Expenditure Tracking (PETS)
                </h3>
                <p className="text-gray-600 font-sans flex-1">
                  Promoting transparency and accountability in public resources
                  through community monitoring systems.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                <TrendingUp className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Entrepreneurship Development
                </h3>
                <p className="text-gray-600 font-sans flex-1">
                  Supporting youth-led businesses and startups to create sustainable
                  self-employment opportunities.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                <Users className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Inclusive Development
                </h3>
                <p className="text-gray-600 font-sans flex-1">
                  Ensuring equal access to opportunities for women, youth,
                  children, and people with disabilities.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group">
              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition h-full flex flex-col">
                <Clock className="h-10 w-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Community Innovation
                </h3>
                <p className="text-gray-600 font-sans flex-1">
                  Supporting local solutions to social and digital challenges
                  through innovation and collaboration.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-serif font-black text-white mb-4">
            Get Involved in Creating Lasting Impact
          </h2>

          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Partner with Nuru Njema Foundation as a donor, development partner,
            volunteer, or supporter.
          </p>

          <Link href="/get-involved">
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Become a Partner or Supporter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

        </div>
      </section>

    </div>
  )
}