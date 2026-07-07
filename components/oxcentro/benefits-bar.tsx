import { Stethoscope, Clock, HeartHandshake, CalendarCheck } from 'lucide-react'
import { FadeInSection } from './fade-in-section'

const benefits = [
  {
    icon: Stethoscope,
    title: 'Melhores aparelhos',
    description: 'Equipamentos modernos e atualizados',
  },
  {
    icon: Clock,
    title: 'Horários',
    description: 'Atendimento de Segunda a Sábado',
  },
  {
    icon: HeartHandshake,
    title: 'Convênios',
    description: 'IAPEP e Particulares aceitos',
  },
  {
    icon: CalendarCheck,
    title: 'Atendimento',
    description: 'Agende direto pelo WhatsApp',
  },
]

export function BenefitsBar() {
  return (
    <section className="py-10 lg:py-14 bg-white" aria-label="Diferenciais da OxCentro">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {benefits.map((b, i) => (
            <FadeInSection key={b.title} delay={i * 90} className="h-full">
              <div className="group h-full rounded-2xl bg-white border border-borda p-5 lg:p-6 text-center flex flex-col items-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                {/* Ícone — padrão de cor único (navy) em todos os cards */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <b.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-1">{b.title}</h3>
                <p className="text-sm text-cinza leading-snug">{b.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
