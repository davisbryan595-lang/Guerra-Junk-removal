"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    before: "/messy-garage-before-junk-removal.jpg",
    after: "/clean-garage-after-junk-removal.jpg",
    title: "Garage Cleanup",
  },
  {
    id: 2,
    before: "/cluttered-basement-before.jpg",
    after: "/clean-basement-after.jpg",
    title: "Basement Cleanout",
  },
  {
    id: 3,
    before: "/yard-debris-before-removal.jpg",
    after: "/clean-yard-after-removal.jpg",
    title: "Yard Waste Removal",
  },
  {
    id: 4,
    before: "/furniture-pile-before-removal.jpg",
    after: "/empty-space-after-furniture-removal.jpg",
    title: "Furniture Removal",
  },
  {
    id: 5,
    before: "/estate-junk-before-cleanup.jpg",
    after: "/clean-property-after-estate-cleanup.jpg",
    title: "Estate Cleanout",
  },
  {
    id: 6,
    before: "/commercial-debris-before.jpg",
    after: "/clean-commercial-space-after.jpg",
    title: "Commercial Cleanup",
  },
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [showBefore, setShowBefore] = useState(true)

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Before & After Transformations</h2>
          <p className="text-xl text-muted-foreground">See the amazing results we deliver</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer group border-0 hover:shadow-xl transition-all duration-300 bg-card"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={item.before || "/placeholder.svg"}
                  alt={`${item.title} before`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Click to View</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-card-foreground">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="sticky top-0 flex justify-between items-center p-4 bg-muted border-b border-border">
                <h3 className="font-bold text-lg text-card-foreground">{selectedItem.title}</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="relative mb-6">
                  <img
                    src={showBefore ? selectedItem.before : selectedItem.after}
                    alt={showBefore ? "Before" : "After"}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                    {showBefore ? "BEFORE" : "AFTER"}
                  </div>
                </div>

                <Button
                  onClick={() => setShowBefore(!showBefore)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {showBefore ? "View After" : "View Before"}
                </Button>
              </div>
            </div>
          </div>
        )}

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
