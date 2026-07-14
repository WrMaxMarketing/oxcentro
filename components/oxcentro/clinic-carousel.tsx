import Image from 'next/image'
import { FadeInSection } from './fade-in-section'

// Alts revisados para consistência de marca (sempre "OxCentro Centro Médico").
const images = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bO5xaRBB3HywGeXxyYzr9ES1wR7ibf.png',
    // HIDE (orig alt): 'Sala de medicina hiperbárica com câmaras SECHRIST da OxCentro'
    alt: 'Sala de medicina hiperbárica com câmaras SECHRIST do OxCentro Centro Médico',
    caption: 'Medicina Hiperbárica — Tratamento Avançado de Feridas',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CUjVWCqB05AoZV2tAUb53NJPY0D2Ph.png',
    // HIDE (orig alt): 'Fachada frontal do Instituto Médico Cuidar — OxCentro' (marca errada)
    alt: 'Fachada do OxCentro Centro Médico',
    caption: 'Nossa Estrutura Moderna em Teresina',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VP1Q8xoYf26Gohi9V3cdYC5VJXk5xc.png',
    // HIDE (orig alt): 'Painel digital OxCentro Centro Médico Avançado'
    alt: 'Painel digital de senhas do OxCentro Centro Médico',
    caption: 'Tecnologia e Organização no Atendimento',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5zctEmjoi1VYDR3kW8R3W26sIvdaUB.png',
    // HIDE (orig alt): 'Fachada lateral do prédio AlfaLab e OxCentro' (marca de terceiro)
    alt: 'Fachada lateral do prédio do OxCentro Centro Médico',
    caption: 'Complexo Médico Completo',
  },
]

export function ClinicCarousel() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Nossa Estrutura</span>
          <h2 className="section-title text-3xl lg:text-4xl mb-4">Conheça nossa estrutura</h2>
          <p className="text-cinza leading-relaxed">
            Instalações modernas e equipamentos de última geração para oferecer o melhor cuidado à
            sua saúde.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {images.map((img, i) => (
            // HIDE (orig): FadeInSection tinha className="h-full" — removido; a altura vem do aspect-ratio da figure
            <FadeInSection key={img.src} delay={i * 90}>
              {/* Crop padronizado nas 4 fotos: mesma proporção (aspect-[4/5]) + object-cover.
                  HIDE (orig): figure tinha "h-full" junto do aspect-[4/5]; removido p/ a proporção governar o crop. */}
              <figure className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  // Sem priority (só o hero é LCP) — lazy-load explícito
                  loading="lazy"
                />
                {/* Gradiente base p/ legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-transparent" />
                {/* Overlay navy no hover */}
                <div className="absolute inset-0 bg-navy/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-white font-semibold text-sm leading-snug drop-shadow-md transition-transform duration-300 lg:translate-y-1 lg:group-hover:translate-y-0">
                    {img.caption}
                  </p>
                </figcaption>
              </figure>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
