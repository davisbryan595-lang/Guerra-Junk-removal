"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Guerra Junk Removal Solutions"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-background mb-4">Professional junk removal solutions for Solano County.</p>
            <p className="text-sm text-background/80">Eco-friendly disposal • Same-day quotes • Licensed & Insured</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-background">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Residential Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Commercial Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Estate Cleanout
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Furniture Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Appliance Removal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-background">Contact Us</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+17079896153" className="text-sm hover:text-primary transition-colors">
                    (707) 989-6153
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:Guerrasimon0411@gmail.com" className="text-sm hover:text-primary transition-colors">
                    Guerrasimon0411@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">38 Marbury Ct</p>
                  <p className="text-sm">Solano County, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-background/80 hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-background/80 hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-background/80 hover:text-primary transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm">© 2025 Guerra Junk Removal Solutions. All rights reserved.</p>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
