"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Guerra Junk Removal Solutions"
              width={185}
              height={65}
              className="h-15 sm:h-17 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="text-base px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-5 space-y-2 bg-background border-t border-border animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-5 py-3 text-lg text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full mt-2 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => {
                setIsOpen(false)
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get a Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
