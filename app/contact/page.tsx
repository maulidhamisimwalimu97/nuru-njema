"use client";

import type React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  MessageSquare,
  Send,
  Phone,
  Mail,
  UserCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/messages", formData);

      toast.success("Message sent successfully 🎉");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="/images/yo.jpeg"
            alt="Nuru Njema Foundation Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-6">
            Partner with <span className="text-cyan-400">Nuru Njema</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-sans">
            We collaborate with donors, partners, and institutions to empower youth,
            bridge the digital divide, and deliver measurable community impact across Tanzania.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Phone className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold">Direct Call</h3>
                <p className="text-gray-600 mb-4">Speak with our partnership team</p>
                <a href="tel:+255700000000" className="text-cyan-600 font-medium text-lg">
                  +255 700 000 000
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <Mail className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold">Partnership Email</h3>
                <p className="text-gray-600 mb-4">For donors & collaborations</p>
                <a href="mailto:info@nuru-njema.org" className="text-cyan-600 font-medium">
                  info@nuru-njema.org
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8">
                <UserCircle className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold">Impact Updates</h3>
                <p className="text-gray-600 mb-4">Get reports on projects</p>
                <Button className="bg-cyan-600 text-white">
                  Request Updates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

        {/* FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-serif font-bold flex items-center">
                <MessageSquare className="h-6 w-6 text-cyan-600 mr-3" />
                Partnership & Donor Engagement
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <Input
                  placeholder="Organization / Name *"
                  value={formData.name}
                  onChange={(e) =>
                    handleInputChange("name", e.target.value)
                  }
                  required
                />

                {/* EMAIL */}
                <Input
                  type="email"
                  placeholder="Official Email *"
                  value={formData.email}
                  onChange={(e) =>
                    handleInputChange("email", e.target.value)
                  }
                  required
                />

                {/* SUBJECT (from select) */}
                <Select
                  onValueChange={(value) =>
                    handleInputChange("subject", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Engagement Type" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="donor">
                      Donor / Funding Partner
                    </SelectItem>
                    <SelectItem value="csr">CSR</SelectItem>
                    <SelectItem value="ngo">NGO Collaboration</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                  </SelectContent>
                </Select>

                {/* MESSAGE */}
                <Textarea
                  placeholder="Describe your interest..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    handleInputChange("message", e.target.value)
                  }
                  required
                />

                {/* SUBMIT */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white"
                >
                  {loading ? "Sending..." : "Submit Request"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* OFFICE SECTION */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-serif font-black mb-4">
          Head Office
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Nuru Njema Foundation is registered under NGO Act No. 24 of 2002.
        </p>

        <div className="mt-6 text-gray-700 font-medium">
          Kichangani Street, near Kibo Hotel,<br />
          Kichangani Ward, Morogoro District,<br />
          Morogoro Region, Tanzania<br />
          P.O Box 3009
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