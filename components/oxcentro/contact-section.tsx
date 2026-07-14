import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FadeInSection } from './fade-in-section'
import { WhatsappIcon } from './whatsapp-icon'

const infos = [
  { icon: Phone, label: 'Telefone / WhatsApp', value: '(86) 9 9970-9973' },
  { icon: Mail, label: 'E-mail', value: 'contato@oxcentromedico.com' },
  { icon: MapPin, label: 'Endereço', value: 'R. São Pedro, 1504 - Centro (Sul), Teresina - PI' },
  { icon: Clock, label: 'Horário de Atendimento', value: 'Seg - Sex: 08h às 18h | Sáb: 08h às 12h' },
]

const WHATSAPP_LINK =
  'https://wa.me/5586999709983?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame.'

export function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="max-w-2xl mb-12">
          <span className="eyebrow">Fale Conosco</span>
          <h2 className="section-title text-3xl lg:text-4xl">
            {/* HIDE (orig): <span className="text-red"> — trocado p/ text-red-ink (texto sobre fundo claro, AA) */}
            Entre em contato e <span className="text-red-ink">agende seu exame</span>
          </h2>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Cards de contato — lista vertical, cada card ocupa a largura toda */}
          <FadeInSection className="flex flex-col gap-4">
            {infos.map((info) => (
              <div
                key={info.label}
                className="card-soft group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <info.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-navy text-[0.8rem] uppercase tracking-wide mb-0.5">
                    {info.label}
                  </h3>
                  <p className="text-cinza text-[0.95rem] leading-snug break-words">{info.value}</p>
                </div>
              </div>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2 w-full sm:w-auto sm:self-start"
            >
              <WhatsappIcon className="h-5 w-5" />
              Agende seu Exame Agora
            </a>
          </FadeInSection>

          {/* Mapa */}
          <FadeInSection className="relative min-h-[420px]">
            <div className="relative h-[420px] min-h-[420px] w-full overflow-hidden rounded-2xl border border-borda bg-white shadow-card lg:h-full">
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
            <div className="absolute bottom-4 right-4 rounded-lg bg-navy px-4 py-2 text-white shadow-lg">
              <span className="font-semibold text-sm">Localização</span>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
