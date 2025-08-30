"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const nav_links = [
  {
    id: 1,
    slug: 'Inicio',
    path: '#home'
  },
  {
    id: 2,
    slug: 'Servicios',
    path: '#services'
  },
  {
    id: 3,
    slug: 'Portfolio',
    path: '#portfolio'
  },
  {
    id: 4,
    slug: 'Contacto',
    path: '#contact'
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-center font-bold text-foreground">
            <span className="text-2xl">GFM</span>
            <span className="text-lg text-accent">Agencia Creativa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {nav_links.map(link => (
              <Link href={link.path} key={link.id} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.slug}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="size-12" /> : <Menu className="size-12" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-border pt-12 mx-auto h-screen  w-fit">
            <nav className="flex flex-col space-y-4 items-center gap-6">
              {nav_links.map(link => (
                <Link href={link.path} key={link.id} onClick={() => setIsMenuOpen(false)} className="text-muted-foreground text-center w-16 hover:text-foreground transition-colors">
                  {link.slug}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
