"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#events" },
    { name: "Artist Lineup", href: "/#artists" },
    { name: "Sponsors", href: "/#sponsors" },
    { name: "Contact", href: "/#contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative z-10">
            <div className={`mr-2 h-14 w-24 rounded-full overflow-hidden border border-primary/30 group-hover:scale-110 transition-transform duration-300 ${isScrolled ? "bg-gray-900" : "bg-white"
              } flex items-center justify-center`}>
              <Image
                src="/Youth solidarity fest red (5).png"
                alt="YSF Logo"
                width={80}
                height={56}
                className={`w-20 h-12 object-contain ${isScrolled && "filter brightness-0 invert"}`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block z-10">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium relative overflow-hidden group ${isScrolled ? "text-gray-700" : "text-white"
                      } transition-colors duration-300`}
                  >
                    <span className="relative z-10 block py-2">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block z-8">
  <a
    href="https://events.khalti.com/events/ET256A5QN8J6"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      className="bg-primary font-semibold text-lg text-white hover:bg-primary/90 relative overflow-hidden group"
    >
      <span className="relative z-10 flex items-center gap-3">
        <img
          src="/Khalti_white_logo.png"
          alt="Khalti Logo"
          className="h-12 w-auto"
        />
        Buy Tickets
      </span>
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0"></span>
    </Button>
  </a>
</div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4 bg-white py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-gray-700 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://events.khalti.com/events/ET256A5QN8J6" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-primary font-bold text-white hover:bg-primary/90">
                    <span className="flex items-center gap-2">
                      <img src="/Khalti_white_logo.png" alt="Logo" className="h-6 w-auto" />
                      Buy Tickets
                    </span>
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
