import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import FloatingCallButton from "@/components/FloatingCallButton"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingCallButton /> {/* 👈 Add this line */}
      </body>
    </html>
  )
}


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guerra Junk Removal Solutions | Solano County",
  description:
    "Professional junk removal services in Solano County. Fast, reliable, and eco-friendly. Get your free quote today!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
