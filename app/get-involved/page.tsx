"use client";

import type React from "react";
import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ArrowRight, UserPlus } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterPage() {


  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
  });

  const handleInputChange = (
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    await axios.post(
      "http://localhost:5000/api/partners",
      formData
    );

    // ✅ SUCCESS TOAST
    toast.success(
      "🎉 Your partnership request has been submitted successfully!"
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      type: "",
    });
  } catch (error) {
    console.error(error);

    // ❌ ERROR TOAST
    toast.error("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-12 px-4">
        <div className="max-w-2xl w-full space-y-8">
          
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
              <UserPlus className="h-8 w-8 text-cyan-600" />
            </div>

            <h2 className="text-3xl font-serif font-black text-gray-900">
              Become a Partner
            </h2>

            <p className="mt-3 text-gray-600">
              Join Nuru Njema Foundation and help empower youth through
              digital skills, innovation, entrepreneurship, and
              technology-driven opportunities.
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Partnership Application
              </CardTitle>

              <CardDescription>
                Complete the form below and our team will contact you.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <Label>Full Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      handleInputChange(
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label>Email Address</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange(
                        "email",
                        e.target.value
                      )
                    }
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      handleInputChange(
                        "phone",
                        e.target.value
                      )
                    }
                    placeholder="+255 xxx xxx xxx"
                    required
                  />
                </div>

                <div>
                  <Label>Partnership Type</Label>

                  <Select
                    value={formData.type}
                    onValueChange={(value) =>
                      handleInputChange("type", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Sponsor">
                        Sponsor
                      </SelectItem>

                      <SelectItem value="Training Partner">
                        Training Partner
                      </SelectItem>

                      <SelectItem value="Technology Partner">
                        Technology Partner
                      </SelectItem>

                      <SelectItem value="Volunteer">
                        Volunteer
                      </SelectItem>

                      <SelectItem value="Mentor">
                        Mentor
                      </SelectItem>

                      <SelectItem value="Other">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Application"}

                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}