"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bO5xaRBB3HywGeXxyYzr9ES1wR7ibf.png",
    alt: "Sala de medicina hiperbárica com câmaras SECHRIST da OxCentro",
    caption: "Medicina Hiperbárica — Tratamento Avançado de Feridas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CUjVWCqB05AoZV2tAUb53NJPY0D2Ph.png",
    alt: "Fachada frontal do Instituto Médico Cuidar — OxCentro",
    caption: "Nossa Estrutura Moderna em Teresina",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VP1Q8xoYf26Gohi9V3cdYC5VJXk5xc.png",
    alt: "Painel digital OxCentro Centro Médico Avançado",
    caption: "Tecnologia e Organização no Atendimento",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5zctEmjoi1VYDR3kW8R3W26sIvdaUB.png",
    alt: "Fachada lateral do prédio AlfaLab e OxCentro",
    caption: "Complexo Médico Completo",
  },
]

export function ClinicCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Conheça nossa estrutura
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Instalações modernas e equipamentos de última geração para oferecer o melhor cuidado à sua saúde.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9]">
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority={i === 0}
                />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 backdrop-blur-sm px-6 py-4">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para imagem ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
