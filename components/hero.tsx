"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop className="w-full h-full object-cover" poster="/junk-removal-truck.jpg">
          <source src="/junk-removal-truck.jpg" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Fast, Reliable Junk Removal for Solano County
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 text-balance">
          Professional cleanup services. Same-day quotes. Eco-friendly disposal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow text-lg px-8 py-6 transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Your Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-transparent transition-all duration-300"
            onClick={() => (window.location.href = "tel:+17079896153")}
          >
            Call Now: (707) 989-6153
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  )
}
