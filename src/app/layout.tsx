import type React from "react"
import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

export const metadata: Metadata = {
  title: "Nexus Creative Agency",
  description: "Modern creative agency specializing in digital experiences and brand innovation",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      {/* <body className={`font-sans ${Geist} ${Geist_Mono} antialiased`}>{children}</body> */}
      <body className={`antialiased`}>{children}</body>

    </html>
  )
}
