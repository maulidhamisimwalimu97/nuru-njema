"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-24">

          {/* LEFT SIDE */}
          <div className="flex items-center">

            {/* LOGO */}
              <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/nlogo.png"
                  alt="Nuru Njema Foundation Logo"
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-all duration-300"
                />
              </Link>
              </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:block ml-8">
              <div className="flex items-center space-x-1 lg:space-x-5">

                <Link
                  href="/about"
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-semibold transition-all duration-300"
                >
                  About Us
                </Link>

                <Link
                  href="/program"
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-semibold transition-all duration-300"
                >
                  Programs
                </Link>

                <Link
                  href="/objective"
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-semibold transition-all duration-300"
                >
                  Objectives
                </Link>

                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-semibold transition-all duration-300"
                >
                  Blogs
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-semibold transition-all duration-300"
                >
                  Contact
                </Link>

              </div>
            </div>
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">

            <Link href="/get-involved">
              <Button
                variant="outline"
                className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-700 px-5 py-5 rounded-xl bg-transparent transition-all duration-300"
              >
                Get Involved
              </Button>
            </Link>

            <Link href="/donate">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                Donate
              </Button>
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-600 p-2 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>

        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-xl rounded-b-2xl animate-in slide-in-from-top duration-300">

            <div className="px-4 pt-4 pb-6 space-y-2">

              <Link
                href="/about"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/program"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>

              <Link
                href="/objective"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Objectives
              </Link>

              <Link
                href="/blog"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* MOBILE BUTTONS */}
              <div className="pt-4 space-y-3">

                <Link
                  href="/get-involved"
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-base rounded-xl shadow-md">
                    Get Involved
                  </Button>
                </Link>

                <Link
                  href="/donate"
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base rounded-xl shadow-md">
                    Donate
                  </Button>
                </Link>

              </div>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}