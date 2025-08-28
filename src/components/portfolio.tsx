// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

import Image from "next/image"

const projects = [
  {
    title: "TechFlow Dashboard",
    category: "Web App",
    image: "/modern-dashboard-interface-dark-theme.png",
    tags: ["React", "TypeScript", "Design System"],
  },
  {
    title: "Bloom Wellness",
    category: "Brand Identity",
    image: "/wellness-brand-identity-minimalist.png",
    tags: ["Branding", "Logo Design", "Print"],
  },
  {
    title: "FinanceApp Mobile",
    category: "Mobile App",
    image: "/finance-mobile-app.png",
    tags: ["React Native", "UX/UI", "Fintech"],
  },
  {
    title: "EcoStore E-commerce",
    category: "E-commerce",
    image: "/eco-friendly-ecommerce-website.png",
    tags: ["Shopify", "Web Design", "Sustainability"],
  },
  {
    title: "CreativeSpace Platform",
    category: "SaaS Platform",
    image: "/creative-collaboration-platform-interface.png",
    tags: ["Next.js", "Database", "Real-time"],
  },
  {
    title: "Artisan Collective",
    category: "Portfolio Site",
    image: "/artisan-portfolio-website-elegant.png",
    tags: ["WordPress", "Custom Theme", "Photography"],
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            A showcase of our recent projects that demonstrate our expertise across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-border hover:border-accent/50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  height={200}
                  width={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
