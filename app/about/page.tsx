import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              About <span className="text-cyan-600">Nuru Njema Foundation</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              A youth-driven organization committed to empowering communities through digital skills,
              education, innovation, and sustainable opportunities for growth.
            </p>

          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
                Our Story
              </h2>

              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                Nuru Njema Foundation was established with a vision to empower young people
                through access to digital skills, education, and innovation opportunities.
                We believe that technology is a powerful tool for transforming lives and communities.
              </p>

              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                Starting as a small initiative driven by passionate individuals, the foundation
                has grown into a platform that supports youth in learning practical skills such as
                web development, design, and digital literacy to prepare them for the modern world.
              </p>

              <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
                Today, Nuru Njema Foundation continues to impact lives by training and mentoring
                young people, helping them build careers, start projects, and contribute positively
                to society through technology.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/23.jpeg"
                alt="Nuru Njema Foundation activities"
                className="rounded-lg shadow-xl"
              />
            </div>

          </div>

        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              The principles that guide how we empower youth and build stronger communities through digital skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Value 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We act with honesty and transparency in all our programs,
                  ensuring trust with the youth and communities we serve.
                </p>
              </CardContent>
            </Card>

            {/* Value 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We are committed to delivering high-quality training,
                  mentorship, and opportunities that meet global standards.
                </p>
              </CardContent>
            </Card>

            {/* Value 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We focus on equipping young people with practical digital skills
                  that help them build careers, innovate, and create change.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

     {/* Leadership Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Meet the dedicated leadership team guiding Nuru Njema Foundation
              in empowering youth through digital skills and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Member 1 */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img src="/images/2.jpeg" alt="Abraham Jackson Mwankenja"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Abraham Jackson Mwankenja
                </h3>
                <p className="text-cyan-600 font-sans mb-4">Chairperson</p>
                <p className="text-gray-600 font-sans text-sm">
                  Leads the foundation’s vision and strategic direction in empowering youth
                  through digital education and community development.
                </p>
              </CardContent>
            </Card>

            {/* Member 2 */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img src="/images/2.jpeg" alt="Marcelina Charles Kibena"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Marcelina Charles Kibena
                </h3>
                <p className="text-cyan-600 font-sans mb-4">Member</p>
                <p className="text-gray-600 font-sans text-sm">
                  Supports community outreach programs and helps coordinate youth empowerment initiatives.
                </p>
              </CardContent>
            </Card>

            {/* Member 3 */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img src="/images/2.jpeg" alt="Halima Joseph Kihaka"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Halima Joseph Kihaka
                </h3>
                <p className="text-cyan-600 font-sans mb-4">Member</p>
                <p className="text-gray-600 font-sans text-sm">
                  Focuses on education programs and ensures inclusivity in digital skills training.
                </p>
              </CardContent>
            </Card>

            {/* Member 4 */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img src="/images/2.jpeg" alt="Fazali James Sikawakwe"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Fazali James Sikawakwe
                </h3>
                <p className="text-cyan-600 font-sans mb-4">Executive Secretary</p>
                <p className="text-gray-600 font-sans text-sm">
                  Oversees daily operations and ensures smooth coordination of all foundation activities.
                </p>
              </CardContent>
            </Card>

            {/* Member 5 */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img src="/images/2.jpeg" alt="Tito Charles Kunambi"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Tito Charles Kunambi
                </h3>
                <p className="text-cyan-600 font-sans mb-4">Member</p>
                <p className="text-gray-600 font-sans text-sm">
                  Contributes to strategic planning and supports youth development programs.
                </p>
              </CardContent>
            </Card>

            {/* Member 6 */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-6">
                <img src="/images/2.jpeg" alt="Jennifer Julius Semwaiko"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jennifer Julius Semwaiko
                </h3>
                <p className="text-cyan-600 font-sans mb-4">Treasurer</p>
                <p className="text-gray-600 font-sans text-sm">
                  Manages financial resources and ensures transparency in all foundation funds.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

     {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A structured, practical, and hands-on learning approach that empowers youth with real-world digital skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <div className="space-y-6">

                {/* 1 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Practical Learning Method
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We focus on hands-on training where youth learn by doing through real digital projects and exercises.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Skill-Based Development
                    </h3>
                    <p className="text-gray-600 font-sans">
                      Our programs are designed to build job-ready skills such as web development, design, and digital literacy.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Mentorship & Guidance
                    </h3>
                    <p className="text-gray-600 font-sans">
                      Experienced mentors guide learners step-by-step to ensure growth, confidence, and continuous improvement.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Long-Term Empowerment
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We focus on building sustainable digital careers that help youth grow beyond training into real opportunities.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <img
                src="/images/23.jpeg"
                alt="Nuru Njema training approach"
                className="rounded-lg shadow-lg"
              />
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-4xl font-serif font-black text-white mb-4">
          Join Our Movement Today
        </h2>

        <p className="text-xl text-cyan-100 mb-8 font-sans">
          Be part of a growing community of young innovators building skills,
          creating opportunities, and transforming their future through technology.
        </p>

        <Link href="/join">
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
            Get Involved
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