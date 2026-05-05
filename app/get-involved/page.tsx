"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff, ArrowRight, UserPlus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    interestArea: "",
    agreeToTerms: false,
    agreeToUpdates: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Get involved submission:", formData)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl w-full space-y-8">

          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
              <UserPlus className="h-8 w-8 text-cyan-600" />
            </div>
            <h2 className="text-3xl font-serif font-black text-gray-900">
              Get Involved
            </h2>
            <p className="mt-2 text-gray-600 font-sans">
              Join Nuru Njema Foundation and be part of empowering youth through digital skills and innovation.
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-serif font-bold">
                Join the Movement
              </CardTitle>
              <CardDescription className="font-sans">
                Fill in your details to become part of our community
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Names */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>

                {/* Contact */}
                <Input type="email" placeholder="Email Address" required />
                <Input type="tel" placeholder="Phone Number" required />

                {/* Interest */}
                <Select onValueChange={(value) => handleInputChange("interestArea", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Area of Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="training">Digital Skills Training</SelectItem>
                    <SelectItem value="volunteering">Volunteering</SelectItem>
                    <SelectItem value="mentorship">Mentorship</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>

                {/* Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>

                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>

                </div>

                {/* Checkboxes */}
                <div className="space-y-3">

                  <div className="flex items-start space-x-2">
                    <Checkbox />
                    <Label className="text-sm text-gray-600">
                      I agree to the Terms and Privacy Policy of Nuru Njema Foundation
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox />
                    <Label className="text-sm text-gray-600">
                      I want to receive updates about programs and opportunities
                    </Label>
                  </div>

                </div>

                {/* Submit */}
                <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Join Nuru Njema
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Already a member?{" "}
                  <Link href="/login" className="text-cyan-600 font-medium">
                    Sign In
                  </Link>
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </div>

      {/* FOOTER (NOW STICKS AT BOTTOM) */}
      <footer className="bg-gray-900 text-white py-16 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-2xl font-serif font-black text-cyan-400 mb-4">
                Nuru Njema Foundation
              </h3>
              <p className="text-gray-400 font-sans mb-4">
                Empowering youth through digital skills, innovation, and community transformation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>Digital Skills Training</li>
                <li>Youth Mentorship</li>
                <li>Innovation Support</li>
                <li>Entrepreneurship</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Organization</h4>
              <ul className="space-y-2 text-gray-400 font-sans">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400 font-sans">
                <p>info@nurunjemafoundation.org</p>
                <p>+255 700 000 000</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-sans">
              © 2026 Nuru Njema Foundation. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}