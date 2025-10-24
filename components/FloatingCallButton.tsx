"use client"

import { Phone } from "lucide-react"

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+16316646632" // 👈 your phone number here
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg animate-bounce transition-all duration-300"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
