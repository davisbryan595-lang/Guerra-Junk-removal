"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import Gallery from "@/components/gallery"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SpecialOfferPopup from "@/components/special-offer-popup"
import PageLoader from "@/components/page-loader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <HowItWorks />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <SpecialOfferPopup />
    </main>
  )
}
