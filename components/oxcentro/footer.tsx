import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

const navigationLinks = [
  { label: "Serviços", href: "#exames" },
  { label: "Convênios", href: "#convenios" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">O</span>
              </div>
              <span className="text-xl font-bold text-background">
                OxCentro
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              A OxCentro oferece consultas e procedimentos em um só lugar, 
              sempre com conforto, tecnologia avançada e equipe experiente 
              para garantir o melhor cuidado com sua saúde.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-background mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-background mb-4">Contato</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  R. São Pedro, 1504 - Centro (Sul), Teresina - PI
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  (86) 9 9970-9973
                </span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  contato@oxcentromedico.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 OxCentro Médico. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Ajuda
            </Link>
            <Link
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
