import { Plus } from 'lucide-react'
import { FadeInSection } from './fade-in-section'
import { WhatsappIcon } from './whatsapp-icon'

const WHATSAPP_LINK =
  'https://wa.me/5586999709983?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento.'

/** Posições das cruzes médicas decorativas (branco translúcido) */
const crosses = [
  { top: '12%', left: '6%', size: 28, opacity: 'text-white/[0.06]' },
  { top: '60%', left: '14%', size: 44, opacity: 'text-white/[0.05]' },
  { top: '24%', left: '82%', size: 52, opacity: 'text-white/[0.06]' },
  { top: '70%', left: '90%', size: 30, opacity: 'text-white/[0.05]' },
  { top: '40%', left: '48%', size: 24, opacity: 'text-white/[0.04]' },
]

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 lg:py-20">
      {/* Cruzes médicas decorativas */}
      {crosses.map((c, i) => (
        <Plus
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute ${c.opacity}`}
          style={{ top: c.top, left: c.left, width: c.size, height: c.size }}
        />
      ))}
      {/* Brilho suave */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <FadeInSection className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <span className="eyebrow text-[#ff8a8a]">Atendimento ágil</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
              Atendimento rápido direto pelo WhatsApp
            </h2>
            <p className="text-white/70 max-w-xl leading-relaxed">
              Agende sua consulta ou exame em segundos, sem filas e sem burocracia. Nossa equipe
              responde rapidinho para cuidar de você.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-shrink-0 text-base"
          >
            <WhatsappIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
