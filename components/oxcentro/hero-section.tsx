import { Calendar, ArrowRight, Zap, ShieldCheck, User } from 'lucide-react'
import Image from 'next/image'

const specialties = ['Ortopedia', 'Cardiologia', 'Dermatologia', 'Ginecologia', 'Neurologia']

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-navy-50"
    >
      {/* Formas decorativas leves */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-navy/5 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-red/5 blur-2xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--navy) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== COLUNA ESQUERDA — TEXTO ===== */}
          <div className="relative z-10">
            <span className="eyebrow animate-fade-up">Centro Médico</span>

            <h1
              className="section-title text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.08s' }}
            >
              Atendimento médico especializado e{' '}
              <span className="text-red">acessível</span>, perto de você!
            </h1>

            <p
              className="text-cinza text-lg leading-relaxed mb-8 max-w-lg animate-fade-up"
              style={{ animationDelay: '0.16s' }}
            >
              A OxCentro oferece consultas e procedimentos com tecnologia moderna, equipe médica
              experiente e agendamento rápido.
            </p>

            {/* Chips de especialidades */}
            <div
              className="flex flex-wrap gap-2.5 mb-8 animate-fade-up"
              style={{ animationDelay: '0.24s' }}
            >
              {specialties.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 text-navy rounded-full text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-red rounded-full" />
                  {spec}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-10 animate-fade-up"
              style={{ animationDelay: '0.32s' }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Agende sua Consulta Agora
              </a>
              <a href="#especialidades" className="btn-navy-outline w-full sm:w-auto">
                Ver Serviços
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Prova social */}
            <div
              className="flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy ring-2 ring-white"
                  >
                    <User className="h-4 w-4 text-white/90" />
                  </span>
                ))}
              </div>
              <div>
                {/* PLACEHOLDER: substituir por número real de pacientes atendidos (ex: "+95 mil pacientes atendidos") */}
                <p className="font-bold text-navy leading-tight">Pacientes que confiam na OxCentro</p>
                <p className="text-sm text-cinza">Atendimento humanizado e de qualidade</p>
              </div>
            </div>
          </div>

          {/* ===== COLUNA DIREITA — IMAGEM + CARDS FLUTUANTES ===== */}
          <div className="relative">
            {/* Blob navy decorativo atrás da imagem */}
            <div className="absolute -inset-4 -z-0 bg-navy/10 animate-blob hidden sm:block" />

            {/* Imagem principal */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-[520px]">
              <Image
                src="/images/oxcentro-building.jpg"
                alt="Prédio OxCentro Médico"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 to-transparent" />
            </div>

            {/* Card flutuante — OxCentro / Centro Médico */}
            <div className="absolute z-20 top-4 left-4 sm:-left-5 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 animate-float">
              <div className="relative h-9 w-9 flex-shrink-0">
                <Image
                  src="/images/oxcentro-logo.png"
                  alt="OxCentro"
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="font-bold text-navy text-base leading-tight">OxCentro</p>
                <p className="text-xs text-cinza">Centro Médico</p>
              </div>
            </div>

            {/* Cards flutuantes inferiores — Rápido / IAPEP */}
            <div className="absolute z-20 bottom-4 left-4 right-4 sm:-left-5 sm:right-5 flex gap-3">
              <div className="flex-1 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 animate-float [animation-delay:1s]">
                <div className="h-9 w-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-navy text-lg leading-tight">Rápido</p>
                  <p className="text-xs text-cinza">Agendamento</p>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3 animate-float [animation-delay:2s]">
                <div className="h-9 w-9 rounded-full bg-red flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-bold text-navy text-lg leading-tight">IAPEP</p>
                  <p className="text-xs text-cinza">e Particular</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
