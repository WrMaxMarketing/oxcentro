import { Stethoscope, Clock, HeartHandshake, CalendarCheck } from 'lucide-react'
import { FadeInSection } from './fade-in-section'
import { cn } from '@/lib/utils'

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
    <section className="relative z-20 -mt-10 lg:-mt-16 pb-4" aria-label="Diferenciais da OxCentro">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {benefits.map((b, i) => {
            const elevated = i === 1
            const circle = i % 2 === 0 ? 'bg-navy' : 'bg-red'
            return (
              <FadeInSection key={b.title} delay={i * 90} className="h-full">
                <div
                  className={cn(
                    'h-full rounded-2xl bg-white border border-borda p-5 lg:p-6 text-center flex flex-col items-center transition-all duration-300',
                    elevated
                      ? 'shadow-card-hover lg:-translate-y-4'
                      : 'shadow-card hover:-translate-y-1'
                  )}
                >
                  <div
                    className={cn(
                      'mb-4 flex h-14 w-14 items-center justify-center rounded-full shadow-sm',
                      circle
                    )}
                  >
                    <b.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base mb-1">{b.title}</h3>
                  <p className="text-sm text-cinza leading-snug">{b.description}</p>
                </div>
              </FadeInSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
