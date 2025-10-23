"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Martinez",
    text: "Guerra Junk Removal was incredibly professional and efficient. They cleared out my entire garage in just a few hours. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    text: "Best service in Solano County! The team was courteous, quick, and the pricing was fair. Will definitely use them again.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "I was impressed with how they handled my estate cleanout. They were respectful and thorough. Great experience overall.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real reviews from satisfied clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
