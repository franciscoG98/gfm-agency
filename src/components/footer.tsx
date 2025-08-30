import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

const date = new Date()
const curr_year = date.getFullYear()

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col font-bold w-fit text-foreground">
              <span className="text-2xl text-center">GFM</span>
              <span className="text-lg text-accent">Agencia Creativa</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Somos una agencia digital enfocada en desarrollo web, identidad de marca y soluciones tecnológicas que impulsan resultados reales.
              {/* Somos una agencia creativa especializada en experiencias digitales, branding y soluciones innovadoras que hacen crecer tu negocio. */}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            {/* @fix: links vacios */}
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Diseño de Marca
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Automatizaciones
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Estrategia Digital
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                {/* @fix: link vacio */}
                <Link href="#" className="hover:text-foreground transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {curr_year} GFM Agencia Creativa. Todos los derechos reservados.
          </p>

          <div className="flex space-x-4">
            {/* @fix: links vacios */}
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
