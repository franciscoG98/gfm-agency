// import { Card, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "/professional-woman-ceo.png",
    content:
      "Nexus transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, Bloom Wellness",
    avatar: "/professional-man-founder.png",
    content:
      "The team at Nexus created a brand identity that perfectly captures our mission. The results speak for themselves - 300% increase in engagement.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager, FinanceApp",
    avatar: "/professional-woman-product-manager.png",
    content:
      "Working with Nexus was seamless. They delivered a mobile app that our users love, with intuitive design and flawless functionality.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-6">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-border hover:border-accent/50 transition-colors">
              <div className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <div className="size-24 mr-4">
                    <Image className="rounded-lg" height={500} width={500} src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
