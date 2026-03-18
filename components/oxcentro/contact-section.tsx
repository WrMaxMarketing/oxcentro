import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Entre em contato e{" "}
              <span className="text-primary">agende seu exame</span>
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Telefone / WhatsApp
                  </h3>
                  <p className="text-muted-foreground">(86) 9 9970-9973</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@oxcentromedico.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    R. São Pedro, 1504 - Centro (Sul), Teresina - PI
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="text-muted-foreground">
                    Seg - Sex: 08h às 18h | Sáb: 08h às 12h
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Agende seu Exame Agora
            </Button>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px] bg-card border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.2255476086786!2d-42.81231712415128!3d-5.067169451457497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39016912389d%3A0xc3f8b0008518902d!2sOxcentro%20M%C3%A9dico!5e0!3m2!1spt-BR!2sbr!4v1710790000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização OxCentro Médico"
              />
            </div>
            
            {/* Location Badge */}
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
              <span className="font-semibold">Localização</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
