// import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code, Smartphone, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Creating memorable visual identities that resonate with your audience and stand out in the market.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and scalable websites using the latest technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Designing and developing native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Comprehensive digital strategies that align with your business goals and drive measurable growth.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            We offer a comprehensive suite of creative and technical services to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover:bg-accent/10 transition-all duration-300 border-border hover:border-accent/50"
            >
              <section className="p-8 text-center">
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
          {/* {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:bg-accent/10 transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))} */}
        </div>
      </div>
    </section>
  )
}
