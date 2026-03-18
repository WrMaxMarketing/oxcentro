"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Convênios", href: "#convenios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Exames", href: "#exames" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-30 h-30">
            <Image
              src="/images/oxcentro-logo.png"
              alt="OxCentro Médico"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
            <Phone className="mr-2 h-4 w-4" />
            Agende sua Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-white/20 bg-primary/95">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full mt-2">
              <Phone className="mr-2 h-4 w-4" />
              Agende sua Consulta
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
