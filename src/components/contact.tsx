import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-6">Let&apos;s Create Something Amazing</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let&apos;s discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border-border">
            <h3 className="text-2xl font-bold">Send us a message</h3>
            <article className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input className="border border-slate-300 py-2 px-4 rounded-md" id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input className="border border-slate-300 py-2 px-4 rounded-md" id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input className="border border-slate-300 py-2 px-4 rounded-md" id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input className="border border-slate-300 py-2 px-4 rounded-md" id="subject" placeholder="Project inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea className="border border-slate-300 py-2 px-4 rounded-md" id="message" placeholder="Tell us about your project..." rows={6} />
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-md">Send Message</button>
            </article>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border-border">
              <article className="p-8">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-accent mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@nexuscreative.com</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="border-border">
              <article className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-accent mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </article>
            </div>

            <div className="border-border">
              <article className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-accent mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      123 Creative Street
                      <br />
                      Design District, NY 10001
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
