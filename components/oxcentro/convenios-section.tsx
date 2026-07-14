import Image from 'next/image'
import { FadeInSection } from './fade-in-section'

const convenios = [
  {
    name: 'APCEF',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-22-150x150-60zErt5OVtZM8pxioKAmeE4aBR87PM.png',
  },
  {
    name: 'SARE',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-25-150x150-o5gnK4nQSdKTxzTMGZBZRksrLorRsK.png',
  },
  {
    name: 'Modelo de Saúde',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-29-150x150-1osLO6xRO2OeMT1VFtF9QDO2Jatu0R.png',
  },
  {
    name: 'IPMT',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-24-150x150-MWUjhXqgVAZmqsnB3xpHn2rl0UE0FU.png',
  },
  {
    name: 'FUSEX',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-19-150x150-wWJi2kbuB1yBNch2vsfUyYvYEhyieK.png',
  },
  {
    name: 'MobDoc',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-21-150x150-51666RUjgywQ7JR2vyTW36Mei3r9fj.png',
  },
  {
    name: 'Med Club',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-28-150x150-s3dzifM2yiiDG0tVv5GmvEeX0JeSTH.png',
  },
  {
    name: 'Med Prev',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-18-150x150-Zg2oEvDdGY4rgmlZrKujrmjBuZ9V6C.png',
  },
  {
    name: 'Plus Saúde',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-26-150x150-jiZKnu3zVndTdbyZdFutVk8EjRqwU2.png',
  },
  {
    name: 'Obmed',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-23-150x150-UucBMtSPRBf6yjSZj9FkKvYa2dHJzd.png',
  },
  {
    name: 'MediAmigo',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-20-150x150-5n9vSklI3lyENdD6Rg8HdVrSokNNiL.png',
  },
  {
    name: 'Capitania dos Portos',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-27-150x150-DRxgqnNPcoG6LXfYjdjjbxv5hluplo.png',
  },
]

export function ConveniosSection() {
  return (
    <section id="convenios" className="py-20 lg:py-28 bg-navy-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <FadeInSection className="text-center max-w-xl mx-auto">
          <span className="eyebrow">Planos aceitos</span>
          <h2 className="section-title text-3xl lg:text-4xl mb-4">Nossos convênios</h2>
          <p className="text-cinza leading-relaxed">
            Trabalhamos com os principais convênios para facilitar seu atendimento
          </p>
        </FadeInSection>
      </div>

      {/* Marquee horizontal infinito */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 inset-y-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-navy-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 inset-y-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-navy-50 to-transparent" />

        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...convenios, ...convenios].map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              aria-hidden={i >= convenios.length}
              className="group flex-shrink-0 flex h-28 w-40 flex-col items-center justify-center rounded-xl border border-borda bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-card"
            >
              <div className="relative h-14 w-24">
                <Image
                  src={c.logo}
                  alt={i >= convenios.length ? '' : c.name}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <span className="mt-1 line-clamp-1 text-[11px] text-cinza text-center">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
