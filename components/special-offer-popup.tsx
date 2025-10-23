"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function SpecialOfferPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300 border border-primary/20">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="mb-4">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              SPECIAL OFFER
            </span>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-4">Get 15% OFF Your First Service!</h2>

          <p className="text-muted-foreground mb-6">
            Use promo code <span className="font-bold text-primary text-lg">GUERRA15</span> when booking your junk
            removal service.
          </p>

          <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Promo Code</p>
            <p className="text-2xl font-bold text-primary">GUERRA15</p>
          </div>

          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow py-6 text-lg font-bold mb-3"
            onClick={() => {
              setIsOpen(false)
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Claim Offer
          </Button>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  )
}
