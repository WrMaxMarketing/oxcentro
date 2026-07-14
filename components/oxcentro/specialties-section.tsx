'use client'

import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeInSection } from './fade-in-section'
import { WhatsappIcon } from './whatsapp-icon'
import { cn } from '@/lib/utils'

type Doctor = {
  name: string
  specialty: string
  register: string
  note?: string
  procedures?: string[]
}

const doctors: Doctor[] = [
  {
    name: 'Ana Karoline da Costa Monteiro',
    specialty: 'Neurologista',
    register: 'CRM 7518 PI · RQE 4480',
    procedures: ['Eletroneuromiografia MMII', 'MMSS', 'Face'],
  },
  {
    name: 'Bruno Maia dos Santos',
    specialty: 'Radiologista',
    register: 'CRM 2957 PI',
    procedures: [
      'US Fetal',
      'US Ginecológica',
      'US Partes Moles',
      'PAAF de Nódulo Tireoidiano',
      'Biópsia de Próstata',
      'US Musculoesquelético',
    ],
  },
  {
    name: 'Davi Braga de Carvalho',
    specialty: 'Ortopedista',
    register: 'CRM 10380 PI · RQE 5420',
  },
  {
    name: 'Janderson Ribeiro Fernandes',
    specialty: 'Angiologista',
    register: 'CRM 8676 PI · RQE 4268',
    procedures: [
      'US Carótidas e Vértebras',
      'US Doppler Arterial',
      'US Doppler Venosa',
      'Endolaser',
      'Escleroterapia',
      'Espuma',
    ],
  },
  {
    name: 'Marcelo de Andrade Modesto',
    specialty: 'Clínico Geral',
    register: 'CRM 4591 PI',
  },
  {
    name: 'Mariana Soares Ferreira',
    specialty: 'Dermatologista',
    register: 'CRM 6615 PI · RQE 5021',
    procedures: ['Biópsia de Pele', 'Botox', 'Retirada de sinais', 'Cauterização de sinais'],
  },
  {
    name: 'Mayana Soares Ferreira Leopoldino',
    specialty: 'Clínico Geral',
    register: 'CRM 9392 PI',
  },
  {
    name: 'Mayra Soares Ferreira',
    specialty: 'Otorrinolaringologista',
    register: 'CRM 5032 PI · RQE 3822',
    procedures: ['Remoção de cerume'],
  },
  {
    name: 'Raissa Tecia Braga de Carvalho Ribeiro',
    specialty: 'Angiologista',
    register: 'CRM 5959 PI · RQE 4190',
    procedures: [
      'US Carótidas e Vértebras',
      'US Doppler Arterial',
      'US Doppler Venosa',
      'Endolaser',
      'Escleroterapia',
      'Espuma',
    ],
  },
  {
    name: 'Saulo Rodrigues Barroso',
    specialty: 'Angiologista',
    register: 'CRM 5163 PI · RQE 3799',
    procedures: [
      'US Carótidas e Vértebras',
      'US Doppler Arterial',
      'US Doppler Venosa',
      'Endolaser',
      'Escleroterapia',
      'Espuma',
    ],
  },
  {
    name: 'Ana Patrícia Nunes Barros',
    specialty: 'Ginecologista',
    register: 'CRM 6254 PI · RQE 4399',
    procedures: [
      'US Morfológica 1º semestre',
      'US Morfológica 2º semestre',
      'US Transvaginal',
      'Pequenas Cirurgias',
      'Retirada de DIU e Implanon',
      'Inserção de DIU',
      'Inserção de Implanon',
    ],
  },
  {
    name: 'Maurício Fortes Mendes',
    specialty: 'Infectologista',
    register: 'CRM 2204 PI · RQE 1010',
  },
  {
    name: 'Neylany de Carvalho Sousa',
    specialty: 'Fonoaudióloga',
    register: 'CRFA 8-10684',
    procedures: [
      'Fonoterapia',
      'Disfagia',
      'Atraso no desenvolvimento de linguagem e fala',
      'Processamento Auditivo Central',
      'TDAH',
      'Dislexia',
      'Autismo',
      'Disfonias (distúrbio da voz)',
      'Alzheimer',
      'Parkinson',
      'Motricidade orofacial',
      'Teste da linguinha',
    ],
  },
  {
    name: 'Tatiane dos Reis Dias',
    specialty: 'Psicóloga',
    register: 'CRP-PI 21/04135',
    note: 'Atendimento especializado a adultos e idosos.',
    procedures: [
      'Ansiedade e Depressão',
      'Estresse Pós-Traumático (TEPT)',
      'Espectro Autista (TEA)',
      'TDAH',
      'Transtorno Opositor Desafiador (TOD)',
      'Deficiência Intelectual',
      'Luto e Perdas',
    ],
  },
]

const PARTICLES = new Set(['da', 'de', 'do', 'dos', 'das', 'e'])

function getInitials(name: string) {
  const parts = name.split(/\s+/).filter((w) => !PARTICLES.has(w.toLowerCase()))
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

// id estável (aria-controls) a partir do nome — nomes são únicos.
const slugify = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Mapeia o título profissional (nos dados) para a ÁREA de especialidade exibida no filtro.
const SPECIALTY_AREA: Record<string, string> = {
  Neurologista: 'Neurologia',
  Radiologista: 'Radiologia',
  Ortopedista: 'Ortopedia',
  Angiologista: 'Angiologia',
  'Clínico Geral': 'Clínica Geral',
  Dermatologista: 'Dermatologia',
  Otorrinolaringologista: 'Otorrinolaringologia',
  Ginecologista: 'Ginecologia',
  Infectologista: 'Infectologia',
  Fonoaudióloga: 'Fonoaudiologia',
  Psicóloga: 'Psicologia',
}

const areaOf = (doc: Doctor) => SPECIALTY_AREA[doc.specialty] ?? doc.specialty

// Lista de áreas DERIVADA dos dados reais (ordem de aparição, sem duplicatas) — não hardcode solto.
const SPECIALTY_FILTERS = Array.from(new Set(doctors.map(areaOf)))

const ALL_LABEL = 'Todos'

const WHATSAPP_LINK =
  'https://wa.me/5586999709983?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function SpecialtiesSection() {
  const [active, setActive] = useState<string>(ALL_LABEL)
  // Acordeon externo: o diretório da equipe começa recolhido; o usuário abre quando quiser.
  const [listOpen, setListOpen] = useState(false)
  // Múltiplos podem ficar abertos ao mesmo tempo (acordeons independentes por médico).
  const [open, setOpen] = useState<Set<string>>(() => new Set())

  // Selecionar um filtro revela a lista já filtrada (evita clicar no filtro e "não acontecer nada").
  const selectFilter = (f: string) => {
    setActive(f)
    setListOpen(true)
  }

  const toggle = (name: string) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })

  const filters = useMemo(() => [ALL_LABEL, ...SPECIALTY_FILTERS], [])
  const visible = useMemo(
    () => (active === ALL_LABEL ? doctors : doctors.filter((doc) => areaOf(doc) === active)),
    [active]
  )

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="max-w-3xl mb-8">
          <span className="eyebrow">Nossa Equipe</span>
          <h2 className="section-title text-3xl lg:text-4xl mb-4">
            {/* HIDE (orig): <span className="text-red"> — trocado p/ text-red-ink (texto sobre fundo claro, AA) */}
            Especialistas prontos para <span className="text-red-ink">cuidar de você</span>
          </h2>
          <p className="text-cinza leading-relaxed">
            Um corpo clínico multidisciplinar, com registro ativo e experiência em diversas áreas da
            saúde.
          </p>
        </FadeInSection>

        {/* Filtro por especialidade (toggles com aria-pressed) */}
        <FadeInSection className="mb-10">
          <div
            role="group"
            aria-label="Filtrar equipe por especialidade"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const selected = f === active
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectFilter(f)}
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

        {/* Acordeon externo: revela o diretório da equipe (respeita o filtro ativo) */}
        <FadeInSection>
          <button
            type="button"
            onClick={() => setListOpen((v) => !v)}
            aria-expanded={listOpen}
            aria-controls="equipe-lista"
            className="flex w-full items-center justify-between gap-4 rounded-xl border-[0.5px] border-borda bg-white px-5 py-4 text-left shadow-card transition-colors hover:bg-navy-50"
          >
            <span className="text-[15px] font-medium text-navy">
              {listOpen
                ? 'Ocultar profissionais'
                : active === ALL_LABEL
                  ? 'Ver todos os profissionais'
                  : `Ver profissionais de ${active}`}
              <span className="ml-1.5 text-cinza">({visible.length})</span>
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
            id="equipe-lista"
            role="region"
            aria-label="Diretório da equipe"
            inert={!listOpen}
            className="grid transition-all duration-300 ease-out motion-reduce:transition-none"
            style={{ gridTemplateRows: listOpen ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <div className="pt-4">
                {visible.length > 0 ? (
                  <ul className="overflow-hidden rounded-xl border-[0.5px] border-borda bg-white shadow-card">
              {visible.map((doc) => {
                const expandable = (doc.procedures?.length ?? 0) > 0
                const isOpen = open.has(doc.name)
                const regionId = `proc-${slugify(doc.name)}`
                return (
                  <li key={doc.name} className="border-b-[0.5px] border-borda last:border-b-0">
                    {/* Linha (estado fechado) — altura uniforme */}
                    <div className="flex items-start gap-4 px-5 py-3.5 sm:items-center">
                      {/* Avatar (preparado p/ virar <img> de foto no futuro) */}
                      <span
                        role="img"
                        aria-label={doc.name}
                        className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-navy font-heading text-[13px] font-bold text-white"
                      >
                        {getInitials(doc.name)}
                      </span>

                      {/* Nome + linha secundária */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[15px] font-medium leading-tight text-navy">
                          {doc.name}
                        </h3>
                        <p className="mt-0.5 text-[13px] leading-snug text-cinza">
                          {doc.specialty} · {doc.register}
                        </p>
                      </div>

                      {/* Botão de procedimentos + chevron (só quem tem procedimentos) */}
                      {expandable && (
                        <button
                          type="button"
                          onClick={() => toggle(doc.name)}
                          aria-expanded={isOpen}
                          aria-controls={regionId}
                          className="flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium text-navy transition-colors hover:bg-navy-50"
                        >
                          Procedimentos ({doc.procedures!.length})
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              'size-4 transition-transform duration-200',
                              isOpen && 'rotate-180'
                            )}
                          />
                        </button>
                      )}
                    </div>

                    {/* Região expandida: nota (se houver) + procedimentos como tags discretas.
                        Animação por grid-template-rows (0fr↔1fr) empurra só o conteúdo desta linha. */}
                    {expandable && (
                      <div
                        id={regionId}
                        role="region"
                        aria-label={`Procedimentos de ${doc.name}`}
                        className="grid transition-all duration-300 ease-out motion-reduce:transition-none"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          {/* pl alinha o conteúdo à coluna do nome (após o avatar de 40px) */}
                          <div className="pb-4 pl-[76px] pr-5">
                            {doc.note && (
                              <p className="mb-2 text-[13px] leading-snug text-cinza">{doc.note}</p>
                            )}
                            <ul className="flex flex-wrap gap-1.5">
                              {doc.procedures!.map((proc) => (
                                <li key={proc}>
                                  <span className="inline-block rounded-full bg-navy-50 px-2.5 py-1 text-[13px] text-cinza">
                                    {proc}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
                ) : (
                  <div className="rounded-xl border-[0.5px] border-borda bg-white p-10 text-center shadow-card">
                    <p className="text-cinza">Nenhum especialista nesta área no momento.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="text-center mt-12" delay={120}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WhatsappIcon className="h-5 w-5" />
            Agende sua Consulta Agora
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
