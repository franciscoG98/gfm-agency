import { Palette, Code, Smartphone, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Diseño de Marca",
    description: "Diseñamos identidades visuales simples y efectivas que acompañan el desarrollo digital de tu proyecto.",
  //   description: "Creamos identidades visuales memorables que conectan con tu audiencia y hacen destacar tu marca en el mercado.",
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Creamos sitios web rápidos, escalables y optimizados, usando tecnologías modernas y buenas prácticas de desarrollo.",
  //   description: "Desarrollamos sitios web rápidos, escalables y optimizados, utilizando las últimas tecnologías y mejores prácticas.",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description: "Construimos flujos automatizados y herramientas para integrar sistemas, reducir tareas repetitivas y optimizar procesos para mejorar la eficiencia de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Estrategia Digital",
    description: "Definimos estrategias digitales con foco en la tecnología y la eficiencia, alineadas a tus objetivos de negocio.",
    //   description: "Diseñamos estrategias digitales integrales alineadas a tus objetivos, impulsando el crecimiento y la presencia online de tu marca.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-6">
            Nuestos Servicios
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Transformamos tus procesos y presencia online con desarrollo web, automatización y estrategias digitales a medida.
            {/* We offer a comprehensive suite of creative and technical services to bring your vision to life. */}
            {/* Brindamos soluciones creativas y técnicas completas para llevar tu marca al siguiente nivel. */}
            {/* Servicios integrales de diseño, desarrollo y estrategia para potenciar tu marca en digital. */}
            {/* Ofrecemos un conjunto integral de servicios creativos y tecnológicos para hacer realidad tu visión. */}
            {/* Ofrecemos soluciones digitales completas, combinando desarrollo, automatización y estrategia para hacer crecer tu negocio. */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {/* @fix: deberian ser links */}
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:bg-accent/10 transition-all duration-300 border-border hover:border-accent/50"
            >
              <section className="px-6 py-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
