"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export default function HomePage() {
  const fullText = "Empowering Youth Through Digital Skills";
  const [displayedText, setDisplayedText] = useState("");

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setDisplayedText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // FETCH BLOGS (ONLY 3 LATEST)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/blogs?limit=3"
        );
        setBlogs(res.data);
      } catch (error) {
        console.log("Error loading blogs:", error);
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
<section className="bg-gradient-to-br from-cyan-100 via-cyan-50 to-blue-100 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">

      <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6 drop-shadow-sm">
        {displayedText}
        <span className="text-cyan-600 animate-pulse">|</span>
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/get-involved">
          <Button
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg shadow-md hover:shadow-lg transition"
          >
            Get Involved
          </Button>
        </Link>

        <Link href="/about">
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-100 px-8 py-4 text-lg bg-transparent transition"
          >
            Learn More
          </Button>
        </Link>
      </div>

    </div>
  </div>
</section>
    {/* Who We Are */}
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-6">
              Who We Are ?
            </h2>

            <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
              Nuru Njema Foundation is a Non-Governmental Organization registered under
              the NGOs Act No. 24 of 2002 of Tanzania. The organization is committed to
              empowering youth, women, children, and other vulnerable and marginalized groups
              through digital skills, education, innovation, and social development programs.
            </p>

            <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
              Our mission is to bridge the digital divide by providing access to STEAM education,
              entrepreneurship training, and digital transformation skills while working with
              government, private sector, and development partners to promote sustainable
              community development.
            </p>
            {/* Stats */}
            <div className="flex items-center space-x-8">

              <div className="text-center">
                <div className="text-3xl font-serif font-black text-cyan-600">5+</div>
                <div className="text-sm text-gray-600 font-sans">Programs Launched</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-serif font-black text-cyan-600">1K+</div>
                <div className="text-sm text-gray-600 font-sans">Youth Trained</div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-serif font-black text-cyan-600">100%</div>
                <div className="text-sm text-gray-600 font-sans">Impact Focused</div>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/nlogo.png"
              alt="Nuru Njema Foundation youth training session"
              className="rounded-lg shadow-xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
    {/* Why Choose Nuru Njema Foundation */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Why Choose Nuru Njema Foundation?
            </h2>
            <p className="text-gray-600 font-sans max-w-4xl mx-auto">
              Nuru Njema Foundation empowers young people, women, and vulnerable
              communities through digital transformation, entrepreneurship,
              agriculture, climate action, innovation, leadership, and sustainable
              development initiatives that create long-term opportunities and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
                  Digital Transformation & STEAM
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-center text-gray-600">
                  We equip youth with digital literacy, STEAM education, innovation
                  skills, and emerging technologies that prepare them for future
                  opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
                  Entrepreneurship & Agriculture
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-center text-gray-600">
                  We support youth and farmers through entrepreneurship training,
                  digital agriculture solutions, market access, and income-generating
                  opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>

                <CardTitle className="text-xl font-serif font-bold">
                  Inclusion & Community Impact
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-center text-gray-600">
                  We promote gender equality, youth leadership, climate awareness,
                  biodiversity conservation, and community-driven development.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section id="philosophy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Our Philosophy
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every young person deserves the opportunity to learn,
              innovate, lead, and prosper regardless of their background,
              location, or circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-6">

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg">
                    Empowerment Through Knowledge
                  </h3>
                  <p className="text-gray-600">
                    We provide practical knowledge and skills that enable young
                    people to create opportunities for themselves and their
                    communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg">
                    Inclusive Development
                  </h3>
                  <p className="text-gray-600">
                    We support women, youth, people with disabilities, and other
                    vulnerable groups to ensure no one is left behind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg">
                    Innovation for Social Change
                  </h3>
                  <p className="text-gray-600">
                    We encourage innovative solutions that address challenges in
                    education, agriculture, climate resilience, and economic growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-lg">
                    Partnerships for Sustainable Impact
                  </h3>
                  <p className="text-gray-600">
                    We collaborate with government institutions, private sector
                    partners, development organizations, and communities to create
                    lasting change.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Image */}
            <div>
              <img
                src="/images/23.jpeg"
                alt="Nuru Njema Foundation"
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Our Key Activities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Our Key Activities
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through these strategic activities, we work towards achieving our
              mission and objectives across Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black">
                1
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">
                Digital & STEAM Education
              </h3>
              <p className="text-gray-600">
                Delivering digital literacy, STEAM learning, and technology training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black">
                2
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">
                Agriculture Innovation
              </h3>
              <p className="text-gray-600">
                Supporting farmers with digital tools, entrepreneurship, and market access.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black">
                3
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">
                Climate & Biodiversity
              </h3>
              <p className="text-gray-600">
                Promoting environmental sustainability, climate awareness, and conservation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black">
                4
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">
                Research & Leadership
              </h3>
              <p className="text-gray-600">
                Encouraging youth participation in innovation, research, and decision-making.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black">
                5
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">
                Partnerships & Advocacy
              </h3>
              <p className="text-gray-600">
                Building collaborations that improve policies and community welfare.
              </p>
            </div>

          </div>
        </div>
      </section>

      
{/* ================= BLOG SECTION (UPDATED) ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black mb-4">
              Our Latest Blogs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with insights and stories from Nuru Njema Foundation.
            </p>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {loadingBlogs ? (
              <p className="text-center col-span-3">Loading blogs...</p>
            ) : (
              blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {blog.excerpt}
                    </p>

                    <Link href={`/blog/${blog.id}`}>
                      <button className="text-cyan-600 font-semibold hover:underline">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            )}

          </div>

          {/* VIEW ALL */}
          <div className="text-center mt-12">
            <Link href="/blog">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                View All Blogs
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              Get answers to common questions about Nuru Njema Foundation
              and our digital skills programs.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">

            {/* Q1 */}
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                Who can join Nuru Njema Foundation programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Our programs are open to all young people interested in learning digital skills,
                regardless of background or experience level.
              </AccordionContent>
            </AccordionItem>

            {/* Q4 */}
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                Is the program free or paid?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Many of our programs are free or supported by partners to ensure
                equal access to digital education for all youth.
              </AccordionContent>
            </AccordionItem>

            {/* Q5 */}
            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                Will I get a certificate after training?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                Yes, participants who complete training programs receive a certificate
                recognizing their digital skills and participation.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>
      
    {/* CTA Section */}
    <section className="py-20 bg-cyan-600">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <h2 className="text-4xl font-serif font-black text-white mb-4">
        Get Involved in Creating Lasting Impact
      </h2>

      <p className="text-xl text-cyan-100 mb-8 font-sans">
        Partner with Nuru Njema Foundation as a donor, development partner,
        volunteer, or supporter. Stay connected with our projects, receive
        updates on community impact, and help us empower youth, women, and
        vulnerable communities across Tanzania.
      </p>

      <div className="flex justify-center">

        <Link href="/get-involved">
          <Button
            size="lg"
            className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Become a Partner or Supporter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

      </div>

    </div>
    </section>
    </div>
  );
}