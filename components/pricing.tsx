"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    title: "Small Junk Removal",
    price: "$150",
    description: "Perfect for small cleanups",
    features: ["Up to 1/4 truck load", "Same-day service available", "Free quote", "Eco-friendly disposal"],
  },
  {
    title: "Medium Junk Removal",
    price: "$350",
    description: "Most popular option",
    features: [
      "Up to 1/2 truck load",
      "Same-day service available",
      "Free quote",
      "Eco-friendly disposal",
      "Furniture removal included",
    ],
    highlighted: true,
  },
  {
    title: "Large Junk Removal",
    price: "$650",
    description: "For bigger projects",
    features: [
      "Up to full truck load",
      "Same-day service available",
      "Free quote",
      "Eco-friendly disposal",
      "Furniture & appliances",
      "Priority scheduling",
    ],
  },
  {
    title: "Full Estate Cleanout",
    price: "Custom",
    description: "Complete property cleanup",
    features: [
      "Multiple truck loads",
      "Flexible scheduling",
      "Free on-site quote",
      "Eco-friendly disposal",
      "All items removed",
      "Property ready for sale",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground mb-4">Competitive rates with no hidden fees</p>
          <p className="text-muted-foreground">Prices vary based on location and volume. Call for exact quote.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col border-2 transition-all duration-300 hover:shadow-xl ${
                tier.highlighted ? "border-primary bg-primary/5 scale-105" : "border-border hover:border-primary"
              }`}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold w-fit">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.title}</h3>
              <p className="text-muted-foreground mb-4">{tier.description}</p>
              <div className="text-4xl font-bold text-primary mb-6">{tier.price}</div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  tier.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
                variant={tier.highlighted ? "default" : "outline"}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Quote
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
