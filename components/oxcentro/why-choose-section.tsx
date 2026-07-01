import { Calendar } from 'lucide-react'
import { FadeInSection } from './fade-in-section'

const features = [
  {
    number: '01',
    title: 'Equipe multidisciplinar',
    description:
      'Especialistas renomados em diversas áreas da saúde para cuidar de você e sua família.',
  },
  {
    number: '02',
    title: 'Tecnologia de ponta',
    description: 'Diagnósticos precisos e tratamentos avançados com os equipamentos mais modernos.',
  },
  {
    number: '03',
    title: 'Atendimento humanizado',
    description:
      'Cuidado acolhedor e personalizado para você e sua família, com respeito e atenção.',
  },
  {
    number: '04',
    title: 'Facilidade de agendamento',
    description: 'Agende sua consulta facilmente via WhatsApp ou telefone, sem burocracia.',
  },
]

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function WhyChooseSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-navy-50">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Por que nos escolher?</span>
          <h2 className="section-title text-3xl lg:text-4xl mb-4">
            Por que a OxCentro é a melhor escolha pra você?
          </h2>
          <p className="text-cinza leading-relaxed">
            Vale de uma razão para confiar a saúde de sua família ao nosso cuidado.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeInSection key={f.number} delay={i * 100} className="h-full">
              <div className="group relative h-full rounded-2xl bg-white border border-borda p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <span className="block font-heading text-5xl font-extrabold text-red mb-3 leading-none">
                  {f.number}
                </span>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-cinza leading-relaxed">{f.description}</p>
                <span className="absolute bottom-0 left-7 right-7 h-1 rounded-full bg-red scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center mt-14" delay={150}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <Calendar className="h-5 w-5" />
            Agende sua Consulta Agora
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
