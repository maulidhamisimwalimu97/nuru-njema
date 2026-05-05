import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1 */}
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

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400 font-sans">
              <li><Link href="/services/digital" className="hover:text-cyan-400">Digital Skills Training</Link></li>
              <li><Link href="/services/mentorship" className="hover:text-cyan-400">Youth Mentorship</Link></li>
              <li><Link href="/services/innovation" className="hover:text-cyan-400">Innovation Support</Link></li>
              <li><Link href="/services/entrepreneurship" className="hover:text-cyan-400">Entrepreneurship Guidance</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Organization</h4>
            <ul className="space-y-2 text-gray-400 font-sans">
              <li><Link href="/about" className="hover:text-cyan-400">About Us</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
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
          <p className="text-gray-400 font-sans text-sm">
            © 2026 Nuru Njema Foundation. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}