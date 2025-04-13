"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Venue", href: "#venue" },
    { name: "Schedule", href: "#schedule" },
    { name: "Artists", href: "#artists" },
    { name: "Gallery", href: "#gallery" },
    { name: "Tickets", href: "#tickets" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between transition-all duration-300 ease-in-out relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

          <Link href="/" className="flex items-center group z-10">
            <div className="mr-2 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold text-lg">YSF</span>
            </div>
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              } transition-colors duration-300 group-hover:text-primary`}
            >
              YSF 2025
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block z-10">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium relative overflow-hidden group ${
                      isScrolled ? "text-gray-700" : "text-white"
                    } transition-colors duration-300`}
                  >
                    <span className="relative z-10 block py-2">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block z-10">
            <Button className="bg-primary font-bold text-white hover:bg-primary/90 relative overflow-hidden group">
              <span className="relative z-10">Buy Tickets</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0"></span>
            </Button>
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
                <Button className="w-full bg-primary font-bold text-white hover:bg-primary/90">Buy Tickets</Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

