"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-serif font-black text-cyan-600">
                Nuru Njema
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/program"
                  className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Programs
                </Link>
                <Link
                  href="/objective"
                  className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Objectives
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  News & Updates
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/get-involved">
              <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                Get Involved
              </Button>
            </Link>
            <Link href="/donate">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Donate
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-cyan-600 p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">

              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/programs"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>

              <Link
                href="/objectives"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Objectives
              </Link>

              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                News & Updates
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <Link href="/get-involved" className="block px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mb-2">
                  Get Involved
                </Button>
              </Link>

              <Link href="/donate" className="block px-3 py-2" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Donate
                </Button>
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}