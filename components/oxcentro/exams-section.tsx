import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Activity, Scan } from "lucide-react"

const exams = [
  {
    icon: Activity,
    title: "Exames Cardiológicos",
    description:
      "Avaliação completa do sistema cardiovascular com eletrocardiograma, ecocardiograma e teste ergométrico realizados com equipamentos de última geração.",
  },
  {
    icon: Scan,
    title: "Exames de Imagem",
    description:
      "Diagnósticos precisos através de ultrassonografia, raio-x e outros exames de imagem para avaliação detalhada de órgãos e estruturas.",
  },
]

export function ExamsSection() {
  return (
    <section id="exames" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Exames Especializados na OxCentro
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Somos especialistas em saúde diagnóstica. Oferecemos diagnósticos precisos com
            tecnologia de ponta e corpo clínico experiente.
          </p>
        </div>

        {/* Exams Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {exams.map((exam) => (
            <Card
              key={exam.title}
              className="border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <exam.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-foreground text-xl mb-3">
                  {exam.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exam.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar meu exame
          </Button>
        </div>
      </div>
    </section>
  )
}
