'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/navigation'

/*
 * HIDE (orig): navItems local — substituído pela taxonomia canônica em @/lib/navigation.
 * O item "Especialidades" apontava para a seção da equipe (#especialidades), quebrando a
 * expectativa do usuário; agora o rótulo é "Equipe" (mesmo âncora, link funcional).
 *
 * const navItems = [
 *   { label: 'Início', href: '#inicio' },
 *   { label: 'Benefícios', href: '#beneficios' },
 *   { label: 'Convênios', href: '#convenios' },
 *   { label: 'Especialidades', href: '#especialidades' },
 *   { label: 'Exames', href: '#exames' },
 *   { label: 'Contato', href: '#contato' },
 * ]
 */
const navItems = NAV_ITEMS

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-300',
        scrolled
          ? 'shadow-[0_6px_24px_-12px_rgba(0,59,117,0.35)]'
          : 'shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="OxCentro Médico - Início">
          <div className="relative h-10 w-36">
            <Image
              src="/images/oxcentro-logo.png"
              alt="OxCentro Médico"
              fill
              className="object-contain object-left"
              sizes="144px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative py-2 text-sm font-medium text-navy/80 transition-colors hover:text-navy',
                'after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left',
                'after:scale-x-0 after:bg-red after:transition-transform after:duration-200 hover:after:scale-x-100'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-whatsapp-dark hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Agende sua Consulta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-borda bg-white" aria-label="Menu mobile">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy/80 transition-colors hover:bg-navy-50 hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-whatsapp-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              Agende sua Consulta
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
