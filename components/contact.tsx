"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", address: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">Contact us for your free quote today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 bg-muted">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="">Select Service</option>
                  <option value="residential">Residential Junk Removal</option>
                  <option value="commercial">Commercial Junk Removal</option>
                  <option value="estate">Estate Cleanout</option>
                  <option value="furniture">Furniture Removal</option>
                  <option value="appliance">Appliance Removal</option>
                  <option value="yard">Yard Waste Removal</option>
                </select>
              </div>

              <input
                type="text"
                name="address"
                placeholder="Service Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground"
              />

              <textarea
                name="message"
                placeholder="Tell us about your junk removal needs..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground"
              ></textarea>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow py-6 text-lg font-bold"
              >
                Get a Quote
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Phone</p>
                    <a href="tel:+17079896153" className="text-primary hover:underline">
                      (707) 989-6153
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Email</p>
                    <a href="mailto:Guerrasimon0411@gmail.com" className="text-primary hover:underline">
                      Guerrasimon0411@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground">Service Area</p>
                    <p className="text-muted-foreground">
                      38 Marbury Ct
                      <br />
                      Solano County, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-primary/10 border-0">
              <h4 className="font-bold text-foreground mb-3">Service Hours</h4>
              <p className="text-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-foreground">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-foreground">Sunday: By Appointment</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
