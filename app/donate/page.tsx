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
      </div>
      ) 
      }