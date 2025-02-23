import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viththagan",
  description: "Computer Science Undergraduate | Full-Stack Developer | AI Enthusiast",
  icons: {
    icon: "./logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-foreground min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}



import './globals.css'