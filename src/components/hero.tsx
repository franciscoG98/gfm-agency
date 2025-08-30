import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-28">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-balance mb-8 leading-tight">
          Creamos
          <span className="block text-accent">Experiencias Digitales</span>
          <div className="flex mx-auto w-fit">Que resaltan<span className="block text-accent">.</span></div>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 max-w-2xl mx-auto leading-relaxed">
          Impulsamos tu marca con creatividad, tecnología y estrategia que se traduce en resultados.
          {/* Transforming brands through innovative design, cutting-edge technology, and strategic thinking that drives real results. */}
          {/* Impulsamos tu marca con creatividad, tecnología y estrategia que genera resultados reales. */}
          {/* Impulsamos tu marca con creatividad, tecnología y estrategia para lograr resultados reales. */}
          {/* Hacemos que tu marca destaque con creatividad, tecnología y resultados reales. */}
          {/* Impulsamos marcas con diseño innovador, tecnología de vanguardia y estrategia que genera resultados. */}
          {/* Transformamos ideas en marcas digitales con impacto real. */}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#contact" className="flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg">
            Cotizá tu idea
            <ArrowRight className="ml-2 h-5 w-5 hover:ml-2.5" />
          </Link>
          <Link href="#portfolio" className="px-8 py-6 text-lg bg-transparent rounded-lg border border-[#00464b] hover:border-2 hover:px-7.5 hover:py-5.5">
            Conocé nuestro trabajo
          </Link>
        </div>
      </div>
    </section>
  )
}
