import { Mail, Phone } from "lucide-react"
// import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-6">
            Construyamos juntos algo increíble
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            ¿Listo para potenciar tu presencia digital? Escríbenos y conversemos sobre tu idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6 border-border w-full">
            <h3 className="text-2xl font-bold md:ml-44">Envianos un mensaje</h3>
            <fieldset className="md:w-2/3 md:ml-44">
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Nombre completo
              </label>
              <input className="border border-slate-300 py-2 px-4 rounded-md w-full" id="fullName" placeholder="John Doe" />
            </fieldset>

            <fieldset className="md:w-2/3 md:ml-44">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input className="border border-slate-300 py-2 px-4 rounded-md w-full" id="email" type="email" placeholder="john@example.com" />
            </fieldset>

            <fieldset className="md:w-2/3 md:ml-44">
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input className="border border-slate-300 py-2 px-4 rounded-md w-full" id="subject" placeholder="Project inquiry" />
            </fieldset>

            <fieldset className="md:w-2/3 md:ml-44">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea className="border border-slate-300 py-2 px-4 rounded-md w-full" id="message" placeholder="Tell us about your project..." rows={6} />
            </fieldset>

            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md md:ml-44">
              Enviar Mensaje
            </button>
          </form>

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

              <article className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-accent mr-4" />
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </article>

              {/* <article className="p-8">
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
              </article> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
