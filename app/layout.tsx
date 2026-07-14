import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'OxCentro Médico - Atendimento Especializado e Acessível',
  description: 'Centro médico com atendimento especializado, equipe multidisciplinar e tecnologia de ponta. Agende sua consulta!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {/* HIDE: Skip link ocultado a pedido. Preservado para reativar quando necessário.
            (âncora #conteudo e a classe .skip-link em globals.css continuam existindo)
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}

