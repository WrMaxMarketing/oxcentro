"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const convenios = [
  { 
    name: "APCEF", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-22-150x150-60zErt5OVtZM8pxioKAmeE4aBR87PM.png"
  },
  { 
    name: "SARE", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-25-150x150-o5gnK4nQSdKTxzTMGZBZRksrLorRsK.png"
  },
  { 
    name: "Modelo de Saúde", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-29-150x150-1osLO6xRO2OeMT1VFtF9QDO2Jatu0R.png"
  },
  { 
    name: "IPMT", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-24-150x150-MWUjhXqgVAZmqsnB3xpHn2rl0UE0FU.png"
  },
  { 
    name: "FUSEX", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-19-150x150-wWJi2kbuB1yBNch2vsfUyYvYEhyieK.png"
  },
  { 
    name: "MobDoc", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-21-150x150-51666RUjgywQ7JR2vyTW36Mei3r9fj.png"
  },
  { 
    name: "Med Club", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-28-150x150-s3dzifM2yiiDG0tVv5GmvEeX0JeSTH.png"
  },
  { 
    name: "Med Prev", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-18-150x150-Zg2oEvDdGY4rgmlZrKujrmjBuZ9V6C.png"
  },
  { 
    name: "Plus Saúde", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-26-150x150-jiZKnu3zVndTdbyZdFutVk8EjRqwU2.png"
  },
  { 
    name: "Obmed", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-23-150x150-UucBMtSPRBf6yjSZj9FkKvYa2dHJzd.png"
  },
  { 
    name: "MediAmigo", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-20-150x150-5n9vSklI3lyENdD6Rg8HdVrSokNNiL.png"
  },
  { 
    name: "Capitania dos Portos", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camada-27-150x150-DRxgqnNPcoG6LXfYjdjjbxv5hluplo.png"
  },
]

export function ConveniosSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="convenios" className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Nossos convênios
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            Trabalhamos com os principais convênios para facilitar seu atendimento
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card text-primary shadow-lg rounded-full hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card/90 hover:bg-card text-primary shadow-lg rounded-full hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-2 md:px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {convenios.map((convenio) => (
              <div
                key={convenio.name}
                className="flex-shrink-0 bg-card rounded-xl p-4 w-[150px] h-[120px] flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-[110px] h-[70px]">
                  <Image
                    src={convenio.logo}
                    alt={convenio.name}
                    fill
                    className="object-contain"
                    sizes="110px"
                  />
                </div>
                <span className="text-xs text-muted-foreground text-center mt-2 line-clamp-2">
                  {convenio.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
