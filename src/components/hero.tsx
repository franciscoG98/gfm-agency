// import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black text-balance mb-8 leading-tight">
          We Create
          <span className="block text-accent">Digital Experiences</span>
          That Matter
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforming brands through innovative design, cutting-edge technology, and strategic thinking that drives
          real results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
          {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"> */}
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          {/* </Button> */}
          <button className="px-8 py-6 text-lg bg-transparent">
          {/* <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent"> */}
            View Our Work
          </button>
          {/* </Button> */}
        </div>
      </div>
    </section>
  )
}
