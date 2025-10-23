"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, Home, Users, Sofa, Zap, Leaf } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Junk Removal",
    description: "Clear out your home, garage, or basement quickly and efficiently.",
  },
  {
    icon: Users,
    title: "Commercial Junk Removal",
    description: "Professional cleanup for businesses and commercial properties.",
  },
  {
    icon: Trash2,
    title: "Estate Cleanouts",
    description: "Compassionate and thorough estate and property cleanouts.",
  },
  {
    icon: Sofa,
    title: "Furniture Removal",
    description: "Remove old furniture and bulky items from your property.",
  },
  {
    icon: Zap,
    title: "Appliance Removal",
    description: "Safe and responsible removal of old appliances.",
  },
  {
    icon: Leaf,
    title: "Yard Waste Removal",
    description: "Clear yard debris, branches, and landscaping waste.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">Comprehensive junk removal solutions for every need</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-0 bg-card hover-glow"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                  Learn More →
                </Button>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow px-8 py-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
