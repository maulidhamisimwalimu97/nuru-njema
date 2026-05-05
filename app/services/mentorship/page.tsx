import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle, ArrowRight, TrendingUp, Shield, Users, Calendar } from "lucide-react"
import Link from "next/link"

export default function YouthMentorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-4">Youth Empowerment Program</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
                Youth <span className="text-cyan-600">Mentorship</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                We empower young people through mentorship, guidance, and life skills development.
                Our program connects youth with experienced mentors to help them grow academically,
                professionally, and personally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                    Join Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
                  >
                    Become a Mentor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/23.jpeg"
                alt="Youth mentorship session"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              What Our Mentorship Covers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We focus on building confident, skilled, and responsible young leaders for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Helping youth choose the right career paths and set clear goals for their future.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Career counseling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Skills identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Goal setting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Job readiness
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-amber-500" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Life Skills Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Building essential life skills for personal growth and success.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Communication skills
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Leadership skills
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Confidence building
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                    Problem solving
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Digital Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center mb-4">
                  Training youth in modern digital and technology skills for the future job market.
                </p>
                <ul className="space-y-2 font-sans text-gray-600 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Computer basics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Web development intro
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Online freelancing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-600 mr-2" />
                    Social media skills
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              How Mentorship Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A simple step-by-step journey to guide and empower youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Registration</h3>
              <p className="text-gray-600 font-sans">
                Youth register and share their goals and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Matching</h3>
              <p className="text-gray-600 font-sans">
                We match youth with suitable mentors based on needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Mentorship</h3>
              <p className="text-gray-600 font-sans">
                Regular sessions for learning, guidance, and support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 font-sans">
                Youth gain skills, confidence, and career direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">
            Join Our Mentorship Program Today
          </h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Become part of a growing community of empowered and successful young people.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
                Empowering youth through mentorship, education, and digital skills training.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>Youth Mentorship</li>
                <li>Digital Training</li>
                <li>Life Skills</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact</h4>
              <p className="text-gray-400 font-sans">Dar es Salaam</p>
              <p className="text-gray-400 font-sans">info@foundation.org</p>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Join Us</h4>
              <p className="text-gray-400 font-sans">
                Be part of shaping the next generation.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © 2026 Nuru Njema Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}