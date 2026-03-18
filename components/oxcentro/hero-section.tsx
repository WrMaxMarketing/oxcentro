import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-card">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Centro Médico
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Atendimento médico{" "}
              <span className="text-primary">especializado e acessível</span>,{" "}
              perto de você!
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              A OxCentro oferece consultas e procedimentos com tecnologia moderna, 
              equipe médica experiente e agendamento rápido. 
             
            </p>

            {/* Specialties Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Ortopedia", "Cardiologia", "Dermatologia", "Ginecologia", "Neurologia"].map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  {spec}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                <Calendar className="mr-2 h-5 w-5" />
                Agende sua Consulta Agora
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Ver Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image/Team Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <Image
                src="/images/oxcentro-building.jpg"
                alt="Prédio OxCentro Médico"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
              {/* Overlay with brand */}
              <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center gap-2">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/images/oxcentro-logo.png"
                    alt="OxCentro"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">OxCentro</p>
                  <p className="text-xs text-muted-foreground">Centro Médico</p>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg flex-1">
                  <p className="text-2xl font-bold text-primary">Rápido</p>
                  <p className="text-xs text-muted-foreground">Agendamento</p>
                </div>
                <div className="bg-card/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg flex-1">
                  <p className="text-2xl font-bold text-primary">IAPEP</p>
                  <p className="text-xs text-muted-foreground">e Particular</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
