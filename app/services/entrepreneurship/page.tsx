import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Lightbulb,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Rocket,
  Target,
  Users,
  Briefcase,
  Compass,
} from "lucide-react"
import Link from "next/link"

export default function EntrepreneurshipGuidancePage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-600 text-white mb-4">Startup & Innovation Support</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
                Entrepreneurship <span className="text-cyan-600">Guidance</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
                Turn your ideas into successful businesses with expert mentorship, strategic planning, and practical
                guidance. We help entrepreneurs build, scale, and sustain impactful ventures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
                  >
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/23.jpeg"
                alt="Entrepreneurship mentoring session"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Support Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              What We Help You Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              From idea validation to scaling operations, we guide you through every stage of your entrepreneurial
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Lightbulb className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Idea Validation</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 font-sans">
                Test and refine your business idea before investing resources.
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Rocket className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Startup Launch</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 font-sans">
                Build strong foundations for a successful market entry.
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <TrendingUp className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Business Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 font-sans">
                Scale operations and increase revenue sustainably.
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Users className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Team Building</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 font-sans">
                Recruit and manage high-performing teams.
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Briefcase className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Business Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 font-sans">
                Develop clear and actionable growth strategies.
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <Target className="h-10 w-10 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="font-serif font-bold">Market Positioning</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 font-sans">
                Stand out in competitive markets with strong branding.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentorship Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Our Mentorship Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A structured roadmap to transform your idea into a thriving business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Ideation",
                desc: "Refine your business idea and identify opportunities.",
              },
              {
                step: "2",
                title: "Planning",
                desc: "Build a solid business model and strategy.",
              },
              {
                step: "3",
                title: "Execution",
                desc: "Launch your startup with guided support.",
              },
              {
                step: "4",
                title: "Scaling",
                desc: "Expand operations and grow sustainably.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                  {item.step}
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-black text-white mb-6">
            Build Your Startup with Confidence
          </h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Get expert mentorship and turn your entrepreneurial vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg bg-transparent"
              >
                Talk to Mentor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}