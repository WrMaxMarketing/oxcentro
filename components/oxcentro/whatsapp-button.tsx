import { MessageCircle } from 'lucide-react'

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Anel pulsante */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" aria-hidden="true" />
      {/* Botão */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-whatsapp/40 transition-transform duration-200 group-hover:scale-110">
        <MessageCircle className="h-7 w-7 text-white" />
      </span>
      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Fale conosco no WhatsApp
      </span>
    </a>
  )
}
