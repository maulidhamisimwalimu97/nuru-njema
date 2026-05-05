"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Star,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {

  const [showTopButton, setShowTopButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowTopButton(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  const fullText = "Empowering Youth Through Digital Skills";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      setDisplayedText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            {/* Animated Heading */}
            <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
              {displayedText}
              <span className="text-cyan-600 animate-pulse">|</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-4 text-lg bg-transparent"
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
              Who We Are
            </h2>

            <p className="text-lg text-gray-600 mb-6 font-sans leading-relaxed">
              Nuru Njema Foundation is a youth-focused organization committed to
              empowering young people through digital skills, innovation, and
              education. We believe that technology is the key to unlocking
              opportunities and transforming communities.
            </p>

            <p className="text-lg text-gray-600 mb-8 font-sans leading-relaxed">
              Our mission is to bridge the digital skills gap by providing training,
              mentorship, and access to modern tools that help young people build
              careers in the digital economy and become creators, not just users of technology.
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
              src="/images/23.jpeg"
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We don’t just teach digital skills — we empower young people to build careers,
              create solutions, and lead innovation in their communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">
                  Digital Safety & Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We ensure learners understand safe and responsible use of technology,
                  including online security and ethical digital practices.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">
                  Skills for Future Careers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We provide hands-on training in digital skills such as web development,
                  design, and entrepreneurship to prepare youth for the future economy.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl font-serif font-bold">
                  Community Empowerment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans text-center">
                  We build a strong network of young innovators who collaborate,
                  support each other, and drive positive change in their communities.
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              We believe in transparency, empowerment, and equal access to digital skills
              that shape the future of young people in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <div className="space-y-6">

                {/* Item 1 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Practical Learning Approach
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We focus on hands-on training where learners build real projects
                      to gain practical digital skills.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Future-Focused Growth
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We prepare youth for future careers in technology, innovation,
                      and entrepreneurship.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Inclusive Access to Skills
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We ensure every young person, regardless of background,
                      has access to digital education opportunities.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Transparency & Impact
                    </h3>
                    <p className="text-gray-600 font-sans">
                      We openly share our progress and ensure every program creates
                      measurable impact in the community.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Image */}
            <div>
              <img
                src="/images/23.jpeg"
                alt="Nuru Njema students learning digital skills"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

          </div>
        </div>
      </section>

     {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Our simple learning process helps young people move from beginners
              to skilled digital creators step by step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Registration & Orientation
              </h3>
              <p className="text-gray-600 font-sans">
                Youth join the program and are introduced to available digital
                skills learning paths and opportunities.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Skills Training
              </h3>
              <p className="text-gray-600 font-sans">
                Participants receive hands-on training in areas like web development,
                design, and digital literacy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Practical Projects
              </h3>
              <p className="text-gray-600 font-sans">
                Learners build real-world projects to apply their knowledge
                and gain practical experience.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif font-black">
                4
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                Growth & Opportunities
              </h3>
              <p className="text-gray-600 font-sans">
                Graduates get mentorship, networking opportunities,
                and support to start careers or projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Meet the dedicated leadership team guiding Nuru Njema Foundation
              in empowering youth and driving community transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="/images/2.jpeg" alt="Abraham Jackson Mwankenja"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-serif font-bold text-gray-900">
                Abraham Jackson Mwankenja
              </h3>
              <p className="text-cyan-600 font-sans font-medium mt-1">
                Chairperson
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tanzania, United Republic of
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="/images/2.jpeg" alt="Marcelina Charles Kibena"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-serif font-bold text-gray-900">
                Marcelina Charles Kibena
              </h3>
              <p className="text-cyan-600 font-sans font-medium mt-1">
                Member
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tanzania, United Republic of
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="/images/2.jpeg" alt="Halima Joseph Kihaka"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-serif font-bold text-gray-900">
                Halima Joseph Kihaka
              </h3>
              <p className="text-cyan-600 font-sans font-medium mt-1">
                Member
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tanzania, United Republic of
              </p>
            </div>

            {/* Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="/images/2.jpeg" alt="Fazali James Sikawakwe"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-serif font-bold text-gray-900">
                Fazali James Sikawakwe
              </h3>
              <p className="text-cyan-600 font-sans font-medium mt-1">
                Executive Secretary
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tanzania, United Republic of
              </p>
            </div>

            {/* Member 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="/images/2.jpeg" alt="Tito Charles Kunambi"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-serif font-bold text-gray-900">
                Tito Charles Kunambi
              </h3>
              <p className="text-cyan-600 font-sans font-medium mt-1">
                Member
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tanzania, United Republic of
              </p>
            </div>

            {/* Member 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="/images/2.jpeg" alt="Jennifer Julius Semwaiko"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-serif font-bold text-gray-900">
                Jennifer Julius Semwaiko
              </h3>
              <p className="text-cyan-600 font-sans font-medium mt-1">
                Treasurer
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tanzania, United Republic of
              </p>
            </div>

          </div>
        </div>
      </section>
      
      {/* Our Blogs */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif font-black text-gray-900 mb-4">
        Our Latest Blogs
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
        Stay updated with insights, stories, and knowledge from Nuru Njema Foundation
        as we empower youth through digital skills.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Blog 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <img src="/images/23.jpeg" alt="Blog 1"
          className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
            The Future of Digital Skills in Tanzania
          </h3>
          <p className="text-gray-600 font-sans text-sm mb-4">
            Discover how digital skills are shaping opportunities for young people
            and transforming communities.
          </p>

          <Link href="/blogs/future-digital-skills">
            <button className="text-cyan-600 font-semibold hover:underline">
              Read More →
            </button>
          </Link>
        </div>
      </div>

          {/* Blog 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/images/23.jpeg" alt="Blog 2"
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Why Youth Must Embrace Technology
                </h3>
                <p className="text-gray-600 font-sans text-sm mb-4">
                  Technology is no longer optional — learn why every young person
                  should build digital skills.
                </p>

                <Link href="/blogs/youth-technology">
                  <button className="text-cyan-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/images/23.jpeg" alt="Blog 3"
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Building a Strong Digital Future
                </h3>
                <p className="text-gray-600 font-sans text-sm mb-4">
                  How Nuru Njema Foundation is creating opportunities through training,
                  mentorship, and innovation.
                </p>

                <Link href="/blogs/digital-future">
                  <button className="text-cyan-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>

            {/* Blog 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/images/23.jpeg" alt="Blog 4"
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Skills That Lead to Employment
                </h3>
                <p className="text-gray-600 font-sans text-sm mb-4">
                  Explore the most in-demand digital skills that can help youth
                  secure jobs and freelance opportunities.
                </p>

                <Link href="/blogs/employment-skills">
                  <button className="text-cyan-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>

            {/* Blog 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/images/23.jpeg" alt="Blog 5"
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Empowering Communities Through Education
                </h3>
                <p className="text-gray-600 font-sans text-sm mb-4">
                  Education remains the strongest tool for community transformation
                  and youth empowerment.
                </p>

                <Link href="/blogs/education-impact">
                  <button className="text-cyan-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>

            {/* Blog 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src="/images/23.jpeg" alt="Blog 6"
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                  Innovation Starts with You
                </h3>
                <p className="text-gray-600 font-sans text-sm mb-4">
                  Every young person has the potential to innovate and create solutions
                  for real-world problems.
                </p>

                <Link href="/blogs/innovation-starts">
                  <button className="text-cyan-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Button */}
          <div className="text-center mt-12">
            <Link href="/blogs">
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

            {/* Q2 */}
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                Do I need prior computer knowledge to join?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                No. Our training starts from the basics and gradually advances to more
                professional digital skills like web development, design, and online tools.
              </AccordionContent>
            </AccordionItem>

            {/* Q3 */}
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-serif font-bold text-gray-900 hover:text-cyan-600">
                What skills will I learn?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-sans">
                You will learn practical skills such as computer basics, web development,
                graphic design, digital marketing, and problem-solving using technology.
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
    {showTopButton && (
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6
          bg-cyan-600 hover:bg-cyan-700
          text-white
          w-12 h-12
          rounded-full
          shadow-lg
          flex items-center justify-center
          transition-all duration-300
          z-50
        "
        aria-label="Back to top"
      >
        ↑
      </button>
    )}
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
                  <Link href="/services/digital" className="hover:text-cyan-400 transition-colors">
                    Digital Skills Training
                  </Link>
                </li>
                <li>
                  <Link href="/services/mentorship" className="hover:text-cyan-400 transition-colors">
                    Youth Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="/services/innovation" className="hover:text-cyan-400 transition-colors">
                    Innovation Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/entrepreneurship" className="hover:text-cyan-400 transition-colors">
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