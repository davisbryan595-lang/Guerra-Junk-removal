"use client"

import { Card } from "@/components/ui/card"
import { Phone, MapPin, Calendar, Truck, Leaf } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Call or Book Online",
    description: "Contact us for a quick consultation",
  },
  {
    icon: MapPin,
    title: "Free In-Person Quote",
    description: "We visit your location to assess the job",
  },
  {
    icon: Calendar,
    title: "Schedule Your Service",
    description: "Pick a convenient time for removal",
  },
  {
    icon: Truck,
    title: "We Remove & Haul Away",
    description: "Professional team handles everything",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Disposal",
    description: "Responsible recycling and disposal",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, straightforward process from start to finish</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col items-center">
                <Card className="w-20 h-20 flex items-center justify-center mb-4 bg-primary/10 border-0 hover:bg-primary/20 transition-colors">
                  <Icon className="w-10 h-10 text-primary" />
                </Card>
                <h3 className="font-bold text-gray-900 text-center mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 text-center">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute ml-24 mt-12 text-primary text-2xl">→</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
