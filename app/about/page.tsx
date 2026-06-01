import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="relative py-24">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/5.jpg"
            alt="About Nuru Njema Foundation"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
          About <span className="text-cyan-400">Nuru Njema Foundation</span>
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
          Nuru Njema Foundation is a registered Non-Governmental Organization under the
          NGOs Act No. 24 of 2002 in Tanzania. The organization is committed to empowering
          youth, women, children, and other vulnerable and marginalized groups through
          digital skills, STEAM education, innovation, and sustainable development initiatives
          in collaboration with stakeholders and partners.
        </p>

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
                Nuru Njema Foundation was established as a youth-driven initiative
                aimed at bridging the digital divide and promoting equal access to
                education, innovation, and technology skills in Tanzania and beyond.
              </p>

              <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
                The organization focuses on empowering young people through STEAM education,
                digital literacy, entrepreneurship training, and practical skills development
                to prepare them for opportunities in the modern digital economy.
              </p>

              <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
                Today, the foundation works in partnership with government institutions,
                private sector organizations, and community stakeholders to drive social
                and economic transformation through technology, innovation, and inclusive
                development programs.
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/nlogo.png"
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
              The principles that guide our work in empowering youth and building inclusive,
              innovative, and sustainable communities through digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Value 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">
                  Integrity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We uphold transparency, accountability, and ethical leadership in all
                  our activities as a registered NGO committed to serving communities fairly
                  and responsibly.
                </p>
              </CardContent>
            </Card>

            {/* Value 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We are committed to delivering high-quality training in digital skills,
                  STEAM education, and innovation programs that meet both local and global standards.
                </p>
              </CardContent>
            </Card>

            {/* Value 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">
                  Empowerment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We empower youth, women, children, and marginalized groups by providing
                  access to digital skills, entrepreneurship opportunities, and inclusive
                  education programs that promote sustainable development.
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
              Nuru Njema Foundation applies a structured, inclusive, and practical approach
              to empower youth, women, children, and marginalized groups through digital
              transformation and STEAM education.
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
                      Practical & Experiential Learning
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We emphasize hands-on training where learners build real-world projects
                      in digital skills, innovation, and technology applications.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Competency-Based Skills Development
                    </h3>
                    <p className="text-gray-600 font-sans">
                      Our programs focus on building practical competencies in STEAM education,
                      digital literacy, entrepreneurship, and innovation.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Mentorship & Stakeholder Collaboration
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We work with mentors, government institutions, and private sector partners
                      to guide learners and expand opportunities for growth.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Sustainable Youth Empowerment
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We focus on long-term empowerment by equipping youth with skills that
                      enable them to create jobs, innovate, and contribute to community development.
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
            Be part of a registered NGO working to empower youth, women, children,
            and marginalized communities through digital skills, STEAM education,
            and sustainable development initiatives.
          </p>

          <Link href="/join">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-sans">
              Get Involved
            </Button>
          </Link>

        </div>
      </section>
      </div>
      ) 
      }