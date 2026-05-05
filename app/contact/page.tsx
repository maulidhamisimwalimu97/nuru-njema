"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    investmentAmount: "",
    message: "",
    preferredContact: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submission:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        

        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full text-center">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-black text-gray-900 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600 font-sans mb-8">
              We have received your message. The Nuru Njema Foundation team will respond within 24 hours.
            </p>
            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-50"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-24">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/23.jpeg"
          alt="Contact Nuru Njema Foundation"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
          Contact <span className="text-cyan-400">Nuru Njema</span>
        </h1>

        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
          Join us on a journey of digital skills learning. Our team is ready to help you learn, innovate, and build a better future.
        </p>

      </div>
      </section>
      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 font-sans mb-4">Speak directly with our team</p>
                <a href="tel:+255700000000" className="text-cyan-600 font-medium text-lg">
                  +255 700 000 000
                </a>
                <p className="text-sm text-gray-500 mt-2">Mon - Fri: 9:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 font-sans mb-4">Send your questions anytime</p>
                <a href="mailto:info@nuru-njema.org" className="text-cyan-600 font-medium">
                  info@nuru-njema.org
                </a>
                <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Schedule Meeting</h3>
                <p className="text-gray-600 font-sans mb-4">Book a session with our trainers</p>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-bold text-gray-900 flex items-center">
                <MessageSquare className="h-6 w-6 text-cyan-600 mr-3" />
                Send Message to Nuru Njema
              </CardTitle>
              <p className="text-gray-600 font-sans">
                Fill in the form below and we will respond as soon as possible.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name *" required />
                  <Input placeholder="Last Name *" required />
                </div>

                <Input type="email" placeholder="Email Address *" required />
                <Input type="tel" placeholder="Phone Number *" required />

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="training">Training Programs</SelectItem>
                    <SelectItem value="registration">Registration</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea placeholder="Your message..." rows={5} required />

                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif font-black text-white mb-4">
            Join Nuru Njema Today
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your journey into digital skills and new opportunities.
          </p>
          <Button className="bg-white text-cyan-600 hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </section>
  
          </div>
          ) 
          }