import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const navigationLinks = [
  { label: 'Serviços', href: '#exames' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Contato', href: '#contato' },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Marca */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="font-heading font-bold text-navy">O</span>
              </div>
              <span className="text-xl font-heading font-bold text-white">OxCentro</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              A OxCentro oferece consultas e procedimentos em um só lugar, sempre com conforto,
              tecnologia avançada e equipe experiente para garantir o melhor cuidado com sua saúde.
            </p>
            {/* Redes sociais */}
            <div className="flex gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-red"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-red"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-red transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  R. São Pedro, 1504 - Centro (Sul), Teresina - PI
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red flex-shrink-0" />
                <span className="text-white/70 text-sm">(86) 9 9970-9973</span>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <Mail className="h-5 w-5 text-red flex-shrink-0" />
                <span className="text-white/70 text-sm">contato@oxcentromedico.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2024 OxCentro Médico. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Ajuda
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
