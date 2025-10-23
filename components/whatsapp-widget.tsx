"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "17079896153"
  const message = "Hi! I'm interested in your junk removal services. Can you provide a quote?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-20 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </div>
    </div>
  )
}
