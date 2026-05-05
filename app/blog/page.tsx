import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-data"


export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              Our <span className="text-cyan-600">Blogs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-sans">
              Discover inspiring stories, digital skills tips, success journeys, and insights
              from Nuru Njema Foundation as we empower youth through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="mb-12">
              <h2 className="text-3xl font-serif font-black text-gray-900 mb-8">
                Featured Story
              </h2>

              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Image */}
                  <div className="relative">
                    <img
                      src="/images/23.jpeg"
                      alt="Featured Story"
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">
                      Digital Skills
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">

                    <div>

                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-3">
                          Empowering Youth Through Digital Skills Training
                        </CardTitle>

                        <p className="text-gray-600 font-sans leading-relaxed">
                          At Nuru Njema Foundation, we are transforming young lives by providing
                          practical digital skills that open doors to employment, freelancing,
                          and innovation opportunities in today’s digital world.
                        </p>
                      </CardHeader>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 font-sans mb-6">

                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          Nuru Njema Team
                        </div>

                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date().toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>

                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          5 min read
                        </div>

                      </div>

                    </div>

                    <Link href="/blog/empowering-youth-digital-skills">
                      <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                  </div>
                </div>
              </Card>

            </div>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-serif font-black text-gray-900 mb-12">
              Recent Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {recentPosts.map((post) => (
                <Card key={post.slug} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">

                  <div className="relative">
                    <img
                      src={post.thumbnail || "/images/23.jpeg"}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">
                      Digital Skills
                    </Badge>
                  </div>

                  <CardContent className="p-6">

                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-serif font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title || "Empowering Youth Through Digital Skills"}
                      </CardTitle>

                      <p className="text-gray-600 font-sans text-sm leading-relaxed line-clamp-3">
                        {post.excerpt ||
                          "Nuru Njema Foundation is empowering young people with digital skills that create opportunities in technology, freelancing, and innovation."}
                      </p>
                    </CardHeader>

                    <div className="flex items-center justify-between text-xs text-gray-500 font-sans mb-4">

                      <div className="flex items-center space-x-3">

                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          Nuru Njema Team
                        </div>

                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          5 min read
                        </div>

                      </div>

                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>

                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {(post.tags || ["digital skills", "youth empowerment"]).slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                  </CardContent>
                </Card>
              ))}

            </div>
          </div>
        </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-black text-white mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-xl text-cyan-100 mb-8 font-sans">
            Subscribe to receive updates on free digital skills training, new programs,
            and opportunities from Nuru Njema Foundation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white font-sans"
            />
            <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 font-sans">
              Subscribe
            </Button>
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