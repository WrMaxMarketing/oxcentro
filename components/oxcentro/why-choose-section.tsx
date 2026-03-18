import { Users, Cpu, Heart, CalendarClock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    number: "01",
    icon: Users,
    title: "Equipe multidisciplinar",
    description:
      "Especialistas renomados em diversas áreas da saúde para cuidar de você e sua família.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Tecnologia de ponta",
    description:
      "Diagnósticos precisos e tratamentos avançados com os equipamentos mais modernos.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Atendimento humanizado",
    description:
      "Cuidado acolhedor e personalizado para você e sua família, com respeito e atenção.",
  },
  {
    number: "04",
    icon: CalendarClock,
    title: "Facilidade de agendamento",
    description:
      "Agende sua consulta facilmente via WhatsApp ou telefone, sem burocracia.",
  },
]

export function WhyChooseSection() {
  return (
    <section id="beneficios" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Por que a OxCentro é a melhor escolha pra você?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vale de uma razão para confiar a saúde de sua família ao nosso cuidado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.number}
              className="relative border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Number Badge */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
