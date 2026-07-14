'use client'

import { useMemo, useState } from 'react'
import {
  Search,
  X,
  ChevronDown,
  Waves,
  HeartPulse,
  Brain,
  Sparkles,
  TestTubeDiagonal,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { FadeInSection } from './fade-in-section'
import { WhatsappIcon } from './whatsapp-icon'
import { cn } from '@/lib/utils'

// Categorias em ordem canônica de exibição. UMA única fonte de verdade para rótulo + ícone.
type Categoria =
  | 'Imagem e ultrassonografia'
  | 'Cardiologia'
  | 'Neurologia'
  | 'Dermatologia e estética'
  | 'Coletas e biópsias'
  | 'Outros exames'

const CATEGORIES: { nome: Categoria; icon: LucideIcon }[] = [
  { nome: 'Imagem e ultrassonografia', icon: Waves },
  { nome: 'Cardiologia', icon: HeartPulse },
  { nome: 'Neurologia', icon: Brain },
  { nome: 'Dermatologia e estética', icon: Sparkles },
  { nome: 'Coletas e biópsias', icon: TestTubeDiagonal },
  { nome: 'Outros exames', icon: Stethoscope },
]

type Exam = { nome: string; categoria: Categoria }

// Fonte de verdade única: nomes preservados exatamente (acentos, maiúsculas, abreviações).
const exams: Exam[] = [
  { nome: 'Biópsia de Pele', categoria: 'Dermatologia e estética' },
  { nome: 'Biópsia de Próstata', categoria: 'Coletas e biópsias' },
  { nome: 'Bioimpedância', categoria: 'Cardiologia' },
  { nome: 'Botox', categoria: 'Dermatologia e estética' },
  { nome: 'Citologia', categoria: 'Coletas e biópsias' },
  { nome: 'Eletrocardiograma', categoria: 'Cardiologia' },
  { nome: 'Eletroneuromiografia da Face', categoria: 'Neurologia' },
  { nome: 'Eletroneuromiografia MMII e MMSS', categoria: 'Neurologia' },
  { nome: 'Endolaser', categoria: 'Dermatologia e estética' },
  { nome: 'Ultrassonografia Musculoesquelética', categoria: 'Imagem e ultrassonografia' },
  { nome: 'US Carótidas e Vértebras', categoria: 'Imagem e ultrassonografia' },
  { nome: 'US Doppler Arterial', categoria: 'Imagem e ultrassonografia' },
  { nome: 'US Doppler Venosa', categoria: 'Imagem e ultrassonografia' },
  { nome: 'US Morfológica 1º semestre', categoria: 'Imagem e ultrassonografia' },
  { nome: 'US Morfológica 2º semestre', categoria: 'Imagem e ultrassonografia' },
  { nome: 'US Transvaginal', categoria: 'Imagem e ultrassonografia' },
  { nome: 'Escleroterapia', categoria: 'Dermatologia e estética' },
  { nome: 'Espuma', categoria: 'Dermatologia e estética' },
  { nome: 'Exames de Laboratório', categoria: 'Outros exames' },
  { nome: 'Holter', categoria: 'Cardiologia' },
  { nome: 'Inserção de DIU', categoria: 'Outros exames' },
  { nome: 'Inserção de Implanon', categoria: 'Outros exames' },
  { nome: 'Laser Transdérmico', categoria: 'Dermatologia e estética' },
  { nome: 'MAPA', categoria: 'Cardiologia' },
  { nome: 'PAAF de Nódulo Tireoidiano', categoria: 'Coletas e biópsias' },
  { nome: 'Pequenas Cirurgias', categoria: 'Outros exames' },
  { nome: 'Retirada de DIU e Implanon', categoria: 'Outros exames' },
  { nome: 'Retirada de Sinal', categoria: 'Dermatologia e estética' },
  { nome: 'Ultrassom em Geral', categoria: 'Imagem e ultrassonografia' },
  { nome: 'Ultrassonografia com Doppler Colorido', categoria: 'Imagem e ultrassonografia' },
  { nome: 'Ultrassonografia de Pequenas Partes', categoria: 'Imagem e ultrassonografia' },
  { nome: 'Ultrassonografia Fetal', categoria: 'Imagem e ultrassonografia' },
  { nome: 'Ultrassonografia Ginecológica', categoria: 'Imagem e ultrassonografia' },
  { nome: 'Ultrassonografia em Medicina Interna', categoria: 'Imagem e ultrassonografia' },
]

const TOTAL = exams.length

const WHATSAPP_LINK =
  'https://wa.me/5586999709983?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame.'

const ALL_LABEL = 'Todos'

const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

// Só exibe chips de categorias que realmente têm exames (derivado dos dados, em ordem canônica).
const CATEGORIES_WITH_EXAMS = CATEGORIES.filter((c) => exams.some((e) => e.categoria === c.nome))

export function ExamsSection() {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState<Categoria | typeof ALL_LABEL>(ALL_LABEL)
  // Acordeon externo: a lista de exames começa recolhida; o usuário abre quando quiser.
  const [listOpen, setListOpen] = useState(false)

  // Selecionar categoria ou buscar revela a lista já filtrada.
  const selectCat = (f: Categoria | typeof ALL_LABEL) => {
    setActiveCat(f)
    setListOpen(true)
  }
  const onQueryChange = (v: string) => {
    setQuery(v)
    if (v.trim() !== '') setListOpen(true)
  }

  const filters = useMemo<(Categoria | typeof ALL_LABEL)[]>(
    () => [ALL_LABEL, ...CATEGORIES_WITH_EXAMS.map((c) => c.nome)],
    []
  )

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return exams.filter((e) => {
      const matchesCat = activeCat === ALL_LABEL || e.categoria === activeCat
      const matchesQuery = !q || normalize(e.nome).includes(q)
      return matchesCat && matchesQuery
    })
  }, [query, activeCat])

  // Agrupa os visíveis por categoria, na ordem canônica, escondendo grupos vazios.
  const groups = useMemo(
    () =>
      CATEGORIES.map((cat) => ({
        ...cat,
        items: filtered.filter((e) => e.categoria === cat.nome),
      })).filter((g) => g.items.length > 0),
    [filtered]
  )

  const isFiltering = query.trim() !== '' || activeCat !== ALL_LABEL
  const counterText = isFiltering
    ? `${filtered.length} de ${TOTAL} exames`
    : `${TOTAL} exames disponíveis`

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

        {/* Campo de busca + contador dinâmico */}
        <FadeInSection className="mb-6">
          <label htmlFor="busca-exame" className="sr-only">
            Buscar exame
          </label>
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/50" />
            <input
              id="busca-exame"
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar exame…"
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
            {counterText}
          </p>
        </FadeInSection>

        {/* Chips de categoria — mesmo estilo dos filtros da seção "Nossa Equipe" */}
        <FadeInSection className="mb-10">
          <div
            role="group"
            aria-label="Filtrar exames por categoria"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const selected = f === activeCat
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectCat(f)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                    selected
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy border border-borda hover:border-navy/40'
                  )}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </FadeInSection>

        {/* Acordeon externo: revela a lista de exames (respeita busca + categoria) */}
        <FadeInSection>
          <button
            type="button"
            onClick={() => setListOpen((v) => !v)}
            aria-expanded={listOpen}
            aria-controls="exames-lista"
            className="flex w-full items-center justify-between gap-4 rounded-xl border-[0.5px] border-borda bg-white px-5 py-4 text-left shadow-card transition-colors hover:bg-navy-50"
          >
            <span className="text-[15px] font-medium text-navy">
              {listOpen
                ? 'Ocultar exames'
                : isFiltering
                  ? 'Ver exames filtrados'
                  : 'Ver todos os exames'}
              <span className="ml-1.5 text-cinza">({filtered.length})</span>
            </span>
            <ChevronDown
              aria-hidden="true"
              className={cn(
                'size-5 flex-shrink-0 text-navy transition-transform duration-200',
                listOpen && 'rotate-180'
              )}
            />
          </button>

          {/* Região animada (grid 0fr↔1fr). inert remove a lista recolhida da tabulação. */}
          <div
            id="exames-lista"
            role="region"
            aria-label="Lista de exames"
            inert={!listOpen}
            className="grid transition-all duration-300 ease-out motion-reduce:transition-none"
            style={{ gridTemplateRows: listOpen ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <div className="pt-4">
                {groups.length > 0 ? (
                  <div>
                    {groups.map((group) => (
                <section key={group.nome} className="mb-7 last:mb-0" aria-label={group.nome}>
                  {/* Cabeçalho do grupo: ícone navy + título 15px/500 + contagem 12px cinza */}
                  <div className="mb-3 flex items-center gap-2">
                    <group.icon className="size-[18px] flex-shrink-0 text-navy" aria-hidden="true" />
                    <h3 className="text-[15px] font-medium text-navy">{group.nome}</h3>
                    <span className="text-xs text-cinza">{group.items.length}</span>
                  </div>
                  {/* 2 colunas no desktop, 1 no mobile; cada item não quebra entre colunas */}
                  <ul className="columns-1 md:columns-2 md:gap-x-12">
                    {group.items.map((exam) => (
                      <li
                        key={exam.nome}
                        className="break-inside-avoid border-b-[0.5px] border-borda py-2.5 text-sm text-navy"
                      >
                        {exam.nome}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
                ) : (
                  <div className="rounded-2xl border border-borda bg-white p-10 text-center">
                    <p className="text-navy font-semibold">
                      Nenhum exame encontrado para “{query.trim()}”.
                    </p>
                    <p className="text-cinza text-sm mt-1">
                      Não achou o que procurava? Fale com a gente pelo WhatsApp.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="mt-12" delay={120}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsappIcon className="h-5 w-5" />
            Agende seu Exame Agora
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
