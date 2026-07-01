import { Quote, User } from 'lucide-react'
import { FadeInSection } from './fade-in-section'

/*
 * PLACEHOLDER: depoimentos genéricos para ilustrar o layout.
 * Substituir por depoimentos reais de pacientes (com autorização).
 * Não usar nomes de pessoas reais sem consentimento.
 */
const testimonials = [
  {
    text: 'Fui muito bem atendida desde a recepção até a consulta. Agendei pelo WhatsApp e fui atendida rapidamente. Ambiente limpo e equipe atenciosa.',
    name: 'Paciente OxCentro',
    context: 'Ginecologia',
  },
  {
    text: 'Fiz meus exames cardiológicos aqui e o resultado saiu rápido. Estrutura moderna e profissionais que explicam tudo com calma e cuidado.',
    name: 'Paciente OxCentro',
    context: 'Cardiologia',
  },
  {
    text: 'Experiência excelente. O agendamento é simples e o atendimento humanizado faz toda a diferença. Recomendo o centro médico.',
    name: 'Paciente OxCentro',
    context: 'Clínico Geral',
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28" aria-label="Depoimentos de pacientes">
      {/* Brilho decorativo */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-[#ff8a8a]">Depoimentos</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white">
            O que nossos pacientes dizem
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeInSection key={i} delay={i * 120} className="h-full">
              {/* PLACEHOLDER: substituir por depoimento real */}
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card">
                <Quote className="h-9 w-9 text-red mb-4 flex-shrink-0" aria-hidden="true" />
                <blockquote className="flex-1 text-cinza leading-relaxed text-sm mb-6">
                  {t.text}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-borda pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 flex-shrink-0">
                    <User className="h-5 w-5 text-navy" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy text-sm">{t.name}</span>
                    <span className="block text-xs text-cinza">Paciente – {t.context}</span>
                  </span>
                </figcaption>
              </figure>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
