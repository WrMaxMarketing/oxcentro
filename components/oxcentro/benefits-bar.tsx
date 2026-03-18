import { Stethoscope, Clock, HeartHandshake, CalendarCheck } from "lucide-react"

const benefits = [
  {
    icon: Stethoscope,
    title: "Melhores aparelhos",
    description: "Equipamentos modernos e atualizados",
  },
  {
    icon: Clock,
    title: "Horários",
    description: "Atendimento de Segunda a Sábado",
  },
  {
    icon: HeartHandshake,
    title: "Convênios",
    description: "IAPEP e Particulares aceitos",
  },
  {
    icon: CalendarCheck,
    title: "Atendimento",
    description: "Agende direto pelo WhatsApp",
  },
]

export function BenefitsBar() {
  return (
    <section className="bg-muted border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`flex items-center gap-4 py-6 px-4 lg:px-6 ${
                index < benefits.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm lg:text-base">
                  {benefit.title}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
