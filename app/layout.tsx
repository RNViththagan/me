import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viththagan",
  description: "Computer Science Undergraduate | Full-Stack Developer | AI Enthusiast",
  icons: {
    icon: "./logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground`}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  )
}

