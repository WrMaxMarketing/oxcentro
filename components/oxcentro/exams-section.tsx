'use client'

import { useMemo, useState } from 'react'
import { Search, Check, Calendar, X } from 'lucide-react'
import { FadeInSection } from './fade-in-section'

const exams = [
  'Biópsia de Pele',
  'Biópsia de Próstata',
  'Bioimpedância',
  'Botox',
  'Citologia',
  'Eletrocardiograma',
  'Eletroneuromiografia da Face',
  'Eletroneuromiografia MMII e MMSS',
  'Endolaser',
  'Ultrassonografia Musculoesquelética',
  'US Carótidas e Vértebras',
  'US Doppler Arterial',
  'US Doppler Venosa',
  'US Morfológica 1º semestre',
  'US Morfológica 2º semestre',
  'US Transvaginal',
  'Escleroterapia',
  'Espuma',
  'Exames de Laboratório',
  'Holter',
  'Inserção de DIU',
  'Inserção de Implanon',
  'Laser Transdérmico',
  'MAPA',
  'PAAF de Nódulo Tireoidiano',
  'Pequenas Cirurgias',
  'Retirada de DIU e Implanon',
  'Retirada de Sinal',
  'Ultrassom em Geral',
  'Ultrassonografia com Doppler Colorido',
  'Ultrassonografia de Pequenas Partes',
  'Ultrassonografia Fetal',
  'Ultrassonografia Ginecológica',
  'Ultrassonografia em Medicina Interna',
]

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame.'

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

export function ExamsSection() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    if (!q) return exams
    return exams.filter((e) => normalize(e).includes(q))
  }, [query])

  return (
    <section id="exames" className="py-20 lg:py-28 bg-navy-50">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="max-w-2xl mb-8">
          <span className="eyebrow">Diagnósticos</span>
          <h2 className="section-title text-3xl lg:text-4xl mb-4">Exames disponíveis na OxCentro</h2>
          <p className="text-cinza leading-relaxed">
            Diagnósticos precisos com tecnologia de ponta e corpo clínico experiente. Encontre o
            exame que você precisa na lista abaixo.
          </p>
        </FadeInSection>

        {/* Campo de busca */}
        <FadeInSection className="mb-8">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar exame..."
              aria-label="Buscar exame"
              className="w-full rounded-full border border-borda bg-white py-3 pl-12 pr-11 text-navy shadow-card placeholder:text-cinza/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Limpar busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-navy/50 transition-colors hover:bg-navy-50 hover:text-navy"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <p className="mt-3 text-sm text-cinza" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'exame encontrado' : 'exames disponíveis'}
          </p>
        </FadeInSection>

        <FadeInSection>
          {filtered.length > 0 ? (
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((exam) => (
                <li
                  key={exam}
                  className="group flex items-center gap-3 rounded-xl border border-borda bg-white px-4 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-card"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy-50 transition-colors duration-200 group-hover:bg-navy">
                    {/* HIDE (orig): className="... text-red ..." — ícone sobre fundo claro, trocado p/ text-red-ink (AA) */}
                    <Check className="h-4 w-4 text-red-ink transition-colors duration-200 group-hover:text-white" />
                  </span>
                  <span className="text-sm font-medium text-navy">{exam}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-borda bg-white p-10 text-center">
              <p className="text-navy font-semibold">Nenhum exame encontrado</p>
              <p className="text-cinza text-sm mt-1">
                Não achou o que procurava? Fale com a gente pelo WhatsApp.
              </p>
            </div>
          )}
        </FadeInSection>

        <FadeInSection className="mt-12" delay={120}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <Calendar className="h-5 w-5" />
            Agende seu Exame Agora
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
