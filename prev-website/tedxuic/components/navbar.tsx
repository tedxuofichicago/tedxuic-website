"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

// Try out filled backgrounds for page user is currently on
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  // { name: "Past Events", href: "/past-events" }, This page was combined with symposiums, not in use, but can look at for code
  { name: "Upcoming Events", href: "/upcoming-events" },
  { name: "Past Events & Symposiums", href: "/past-events-symposiums" },
  { name: "LinkTree", href: "https://linktr.ee/tedxuofichicago"},
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        {/* <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-red-600">TEDx</span>UofIChicago
          </span>
        </Link> */}
        <Link href="/" className="flex items-center">
          {/* Replace text logo with image logo */}
          <Image src="/pictures/logos/tedx-logo-black.png" alt="TEDxUofIChicago Logo" width={120} height={40} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-red-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="container px-4 py-4 mx-auto space-y-1 bg-white">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-700 transition-colors hover:text-red-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

