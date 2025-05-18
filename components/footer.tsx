import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Youth Solidarity Festival</h3>
            <p className="mb-4 text-gray-400">
              A celebration of youth, creativity, and national solidarity at Kathmandu University, Dhulikhel.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1CCnwDXzAc/?mibextid=wwXIfr" target="_blank" className="text-gray-400 transition-colors hover:text-primary">
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/youthsolidarityatku?igsh=MTVueDljdXlkcmJteA==" target="_blank" className="text-gray-400 transition-colors hover:text-primary">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@youthsolidarityku?_t=ZS-8wSHoxywTnm&_r=1" target="_blank" className="text-gray-400 transition-colors hover:text-primary">
                <FaTiktok className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-400 transition-colors hover:text-white">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#artists" className="text-gray-400 transition-colors hover:text-white">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="#tickets" className="text-gray-400 transition-colors hover:text-white">
                  Tickets
                </Link>
              </li>
              <li>
                <Link href="#rules" className="text-gray-400 transition-colors hover:text-white">
                  Rules & Regulations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-5 w-5 text-primary" />
                <span>youthsolidarity7@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-5 w-5 text-primary" />
                <span>+977 9846001076</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Location</h3>
            <p className="text-gray-400">Kathmandu University</p>
            <p className="text-gray-400">28 Kilo, Dhulikhel-4, Kavre</p>
            <p className="text-gray-400">Nepal</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Youth Solidarity Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}