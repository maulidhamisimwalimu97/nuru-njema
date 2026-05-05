"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, DollarSign, Users, Target } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DonatePage() {
  const [amount, setAmount] = useState("")

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mx-auto h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-cyan-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-black text-gray-900 mb-6">
            Support Our <span className="text-cyan-600">Mission</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Your donation helps us empower youth with digital skills, education, and innovation opportunities across Tanzania.
          </p>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section className="py-20 flex-1">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
              Why Your Support Matters
            </h2>

            <div className="space-y-6 text-gray-600 font-sans">

              <div className="flex gap-3">
                <Users className="text-cyan-600" />
                <p>We train youth in digital skills and entrepreneurship.</p>
              </div>

              <div className="flex gap-3">
                <Target className="text-cyan-600" />
                <p>We support innovation programs for job creation.</p>
              </div>

              <div className="flex gap-3">
                <DollarSign className="text-cyan-600" />
                <p>Every donation directly funds education and training programs.</p>
              </div>

            </div>

            <div className="mt-10">
              <img
                src="/images/23.jpeg"
                alt="donation"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">

              <h3 className="text-2xl font-serif font-bold mb-6 text-center">
                Make a Donation
              </h3>

              <form className="space-y-5">

                <div>
                  <Label>Full Name</Label>
                  <Input placeholder="Your name" />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@example.com" />
                </div>

                <div>
                  <Label>Amount (USD / TZS)</Label>
                  <Input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g 50, 100, 500"
                  />
                </div>

                {/* Quick buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {["10", "50", "100"].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => setAmount(val)}
                      className="border rounded-lg py-2 hover:bg-cyan-50"
                    >
                      ${val}
                    </button>
                  ))}
                </div>

                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Donate Now ❤️
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Secure donation • Transparent usage • Community impact
                </p>

              </form>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">

          <Card className="p-6">
            <h3 className="text-3xl font-bold text-cyan-600">500+</h3>
            <p className="text-gray-600">Youth Trained</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-3xl font-bold text-cyan-600">120+</h3>
            <p className="text-gray-600">Projects Funded</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-3xl font-bold text-cyan-600">30+</h3>
            <p className="text-gray-600">Communities Reached</p>
          </Card>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Brand */}
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

            {/* Programs */}
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

            {/* Organization */}
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

            {/* Contact */}
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400 font-sans">
                <p>📧 info@nurunjemafoundation.org</p>
                <p>📞 +255 700 000 000</p>
                <p>📍 Dar es Salaam, Tanzania</p>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-sans">
              © 2026 Nuru Njema Foundation. All rights reserved by{" "}
              <a href="https://codescandy.com/" target="_blank" className="text-cyan-400 hover:underline">
                CodesCandy
              </a>.{" "}
              Distributed by{" "}
              <a href="https://themewagon.com" target="_blank" className="text-cyan-400 hover:underline">
                ThemeWagon
              </a>.
            </p>
          </div>

        </div>
      </footer>
      </div>
      ) 
      }