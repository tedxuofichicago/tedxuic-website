import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TEDxUofIChicago - Ideas Worth Spreading",
  description: "TEDxUofIChicago is an independently organized TED event at the University of Illinois Chicago.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

