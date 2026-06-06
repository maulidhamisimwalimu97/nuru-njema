"use client";

import { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Heart, DollarSign, Users, Target } from "lucide-react";
import toast from "react-hot-toast";


export default function DonatePage() {

  const [loading, setLoading] = useState(false);

  const [amount, setAmount] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    await axios.post("http://localhost:5000/api/donors", {
      ...formData,
      amount: amount || formData.amount,
    });

    // ✅ SUCCESS TOAST (react-hot-toast)
    toast.success("Thank you ❤️ Donation received successfully!");

    setFormData({
      name: "",
      email: "",
      amount: "",
    });

    setAmount("");
  } catch (error) {
    console.log(error);

    // ❌ ERROR TOAST
    toast.error("Failed to send donation. Try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mx-auto h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-cyan-600" />
          </div>

          <h1 className="text-5xl font-serif font-black mb-6">
            Support Our <span className="text-cyan-600">Mission</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation helps us empower youth with digital skills and innovation opportunities.
          </p>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section className="py-20 flex-1">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Your Support Matters</h2>

            <div className="flex gap-3">
              <Users className="text-cyan-600" />
              <p>We train youth in digital skills.</p>
            </div>

            <div className="flex gap-3">
              <Target className="text-cyan-600" />
              <p>We support innovation and job creation.</p>
            </div>

            <div className="flex gap-3">
              <DollarSign className="text-cyan-600" />
              <p>Your donation funds education programs.</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">

              <h3 className="text-2xl font-serif font-bold mb-6 text-center">
                Make a Donation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <Label>Full Name</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <Label>Amount (USD / TZS)</Label>
                  <Input
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      handleChange("amount", e.target.value);
                    }}
                    placeholder="e.g 50, 100, 500"
                    required
                  />
                </div>

                {/* QUICK AMOUNTS */}
                <div className="grid grid-cols-3 gap-2">
                  {["10", "50", "100"].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => {
                        setAmount(val);
                        handleChange("amount", val);
                      }}
                      className="border rounded-lg py-2 hover:bg-cyan-50"
                    >
                      ${val}
                    </button>
                  ))}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                >
                  {loading ? "Processing..." : "Donate Now ❤️"}
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