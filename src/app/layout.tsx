import type React from "react"
import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

export const metadata: Metadata = {
  title: "GFM Agencia Creativa",
  description: "Agencia creatriva moderna especializada en experiencias digitales, automatización e inovación de marca",
  generator: "v0.app (?)",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      {/* <body className={`font-sans ${Geist} ${Geist_Mono} antialiased`}>{children}</body> */}
      <body className={`antialiased`}>{children}</body>

    </html>
  )
}
