import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Image from "next/image"

const doctors = [
  {
    name: "Dra. Maria Catarina",
    specialty: "Especialidades",
    image: "/images/doc1.png",
  },
  {
    name: "Andressa Leão",
    specialty: "Especialidades",
    image: "/images/doc2.png",
  },
  {
    name: "Dra. Mariana Soares",
    specialty: "Especialidades",
    image: "/images/doc3.png",
  },
];

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
            Nossa equipe está pronta para oferecer o melhor atendimento em diversas especialidades!
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="overflow-hidden border-0 shadow-lg group"
            >
              {/* Container da Imagem */}
              <div className="relative h-[350px] w-full bg-muted">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                
                {/* Badge da Especialidade sobre a foto */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium shadow-md">
                  {doctor.specialty}
                </div>
              </div>

              <CardContent className="p-4 bg-card">
                <h3 className="font-semibold text-foreground text-center text-lg">
                  {doctor.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agende sua Consulta Agora
          </Button>
        </div>
      </div>
    </section>
  )
}