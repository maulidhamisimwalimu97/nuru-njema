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
      
     {/* Hero Section */}
      <section className="relative py-20">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/23.jpeg"
            alt="Nuru Njema Blogs"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">

            <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
              Our <span className="text-cyan-400">Blogs</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
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
                    src="/images/77.jpeg"
                    alt="Featured Story"
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">
                    Agriculture & Digital Skills
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">

                  <div>

                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-3">
                        Empowering Youth Through Agriculture & Digital Markets
                      </CardTitle>

                      <p className="text-gray-600 font-sans leading-relaxed">
                        Nuru Njema Foundation inawapatia vijana mafunzo ya vitendo
                        katika kilimo cha kisasa, uzalishaji wa mazao, na jinsi ya
                        kuuza bidhaa zao kupitia majukwaa ya kidigitali ili kuongeza
                        kipato na kujiajiri.
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

                  <Link href="/blog/youth-agriculture-digital-markets">
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

     
          </div>
          ) 
          }