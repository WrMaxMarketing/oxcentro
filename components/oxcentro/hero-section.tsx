import { Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const specialties = ['Ortopedia', 'Cardiologia', 'Dermatologia', 'Ginecologia', 'Neurologia']

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden bg-gradient-to-b from-white via-white to-navy-50 min-h-[calc(100svh-4rem)] lg:h-[calc(100svh-4rem)]"
    >
      {/* ===== IMAGEM DE FUNDO À DIREITA (lg+) — parte do background, com fade à esquerda ===== */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block lg:w-[60%]">
        <Image
          src="/images/oxcentro-building.jpg"
          alt="Prédio OxCentro Médico"
          fill
          className="object-cover object-center"
          sizes="60vw"
          priority
        />
        {/* Fade horizontal: branco só atrás do texto, revelando a clínica à direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #ffffff 0%, #ffffff 14%, rgba(255,255,255,0.82) 28%, rgba(255,255,255,0.30) 46%, rgba(255,255,255,0) 64%)',
          }}
        />
        {/* Profundidade sutil na base + leve tom da marca */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/15 via-transparent to-transparent" />
      </div>

      {/* Formas decorativas leves (lado do texto) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-navy/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-56 w-56 rounded-full bg-red/5 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--navy) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 mx-auto w-full px-4 lg:px-8 py-[clamp(1rem,3vh,2rem)] lg:py-[clamp(1.5rem,4vh,2.5rem)]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* ===== COLUNA ESQUERDA — TEXTO ===== */}
          <div className="relative z-10 max-w-xl">
            <span
              className="eyebrow animate-fade-up"
              style={{ marginBottom: 'clamp(0.5rem, 1.4vh, 0.75rem)' }}
            >
              Centro Médico
            </span>

            <h1
              className="section-title text-[clamp(1.6rem,1.2vh_+_1.35rem,1.95rem)] leading-[1.18] animate-fade-up lg:whitespace-nowrap"
              style={{ animationDelay: '0.08s', marginBottom: 'clamp(0.75rem, 1.8vh, 1.25rem)' }}
            >
              Atendimento médico{' '}
              <span className="relative inline-block text-navy">
                especializado
                {/* Traço decorativo sob a palavra em destaque */}
                <svg
                  className="absolute -bottom-1 left-0 w-full text-red"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8.5C40 3.5 90 3 118 5.5C146 8 178 6.5 198 4"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {/* Única quebra de linha (desktop) */}
              {/* HIDE (orig): <span className="text-red font-black"> — trocado p/ text-red-ink (texto sobre fundo claro, AA) */}
              <br />e <span className="text-red-ink font-black">acessível</span>, perto de você.
            </h1>

            <p
              className="text-cinza text-base lg:text-[1.05rem] leading-relaxed max-w-lg animate-fade-up"
              style={{ animationDelay: '0.16s', marginBottom: 'clamp(0.85rem, 2vh, 1.5rem)' }}
            >
              A OxCentro oferece consultas e procedimentos com tecnologia moderna, equipe médica
              experiente e agendamento rápido.
            </p>

            {/* Chips de especialidades */}
            <div
              className="flex flex-wrap gap-2 animate-fade-up"
              style={{ animationDelay: '0.24s', marginBottom: 'clamp(0.85rem, 2vh, 1.5rem)' }}
            >
              {specialties.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/70 backdrop-blur-sm border border-navy-50 text-navy rounded-full text-sm font-medium shadow-sm transition-colors hover:border-navy/20"
                >
                  <span className="w-1.5 h-1.5 bg-red rounded-full" />
                  {spec}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 animate-fade-up"
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
          </div>

          {/* ===== COLUNA DIREITA — IMAGEM (apenas mobile/tablet; no lg vira background) ===== */}
          <div className="relative lg:hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-card h-[280px] sm:h-[360px]">
              <Image
                src="/images/oxcentro-building.jpg"
                alt="Prédio OxCentro Médico"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
