import { Calendar } from 'lucide-react'
import Image from 'next/image'
import { FadeInSection } from './fade-in-section'

const doctors = [
  {
    name: 'Dra. Maria Catarina',
    specialty: 'Especialidades',
    image: '/images/doc1.png',
  },
  {
    name: 'Andressa Leão',
    specialty: 'Especialidades',
    image: '/images/doc2.png',
  },
  {
    name: 'Dra. Mariana Soares',
    specialty: 'Especialidades',
    image: '/images/doc3.png',
  },
]

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="eyebrow">Nossa Equipe</span>
          <h2 className="section-title text-3xl lg:text-4xl">
            Nossa equipe está pronta para oferecer o melhor atendimento em diversas especialidades!
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-7 mb-12">
          {doctors.map((doctor, i) => (
            <FadeInSection key={doctor.name} delay={i * 120} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <div className="relative h-[380px] bg-navy-50">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Faixa navy inferior */}
                <div className="relative bg-navy px-5 py-4">
                  {/* Detalhe vermelho que cresce no hover */}
                  <span
                    className="absolute left-0 top-0 h-1 w-0 bg-red transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">
                    {doctor.specialty}
                  </p>
                  <h3 className="text-white font-heading font-bold text-lg">{doctor.name}</h3>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection className="text-center" delay={120}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <Calendar className="h-5 w-5" />
            Agende sua Consulta Agora
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
