'use client'

import { useState, useRef } from 'react'
import { Activity, Scan, Calendar, Check } from 'lucide-react'
import { FadeInSection } from './fade-in-section'
import { cn } from '@/lib/utils'

const exams = [
  {
    icon: Activity,
    title: 'Exames Cardiológicos',
    description:
      'Avaliação completa do sistema cardiovascular com eletrocardiograma, ecocardiograma e teste ergométrico realizados com equipamentos de última geração.',
    items: ['Eletrocardiograma', 'Ecocardiograma', 'Teste ergométrico'],
  },
  {
    icon: Scan,
    title: 'Exames de Imagem',
    description:
      'Diagnósticos precisos através de ultrassonografia, raio-x e outros exames de imagem para avaliação detalhada de órgãos e estruturas.',
    items: ['Ultrassonografia', 'Raio-X', 'Avaliação detalhada'],
  },
]

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame.'

export function ExamsSection() {
  const [active, setActive] = useState(0)
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (e: React.KeyboardEvent, idx: number) => {
    let next = idx
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (idx + 1) % exams.length
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft')
      next = (idx - 1 + exams.length) % exams.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = exams.length - 1
    else return
    e.preventDefault()
    setActive(next)
    tabsRef.current[next]?.focus()
  }

  const current = exams[active]
  const Icon = current.icon

  return (
    <section id="exames" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="max-w-2xl mb-14">
          <span className="eyebrow">Diagnósticos</span>
          <h2 className="section-title text-3xl lg:text-4xl mb-4">
            Exames Especializados na OxCentro
          </h2>
          <p className="text-cinza leading-relaxed">
            Somos especialistas em saúde diagnóstica. Oferecemos diagnósticos precisos com tecnologia
            de ponta e corpo clínico experiente.
          </p>
        </FadeInSection>

        <FadeInSection>
          <div className="grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-8">
            {/* Menu vertical (abas) */}
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Categorias de exames"
              className="flex flex-col gap-3"
            >
              {exams.map((exam, i) => {
                const selected = i === active
                const TabIcon = exam.icon
                return (
                  <button
                    key={exam.title}
                    ref={(el) => {
                      tabsRef.current[i] = el
                    }}
                    role="tab"
                    id={`exam-tab-${i}`}
                    aria-selected={selected}
                    aria-controls={`exam-panel-${i}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={cn(
                      'relative flex items-center gap-3 rounded-2xl px-5 py-4 text-left transition-all duration-200',
                      selected
                        ? 'bg-navy text-white shadow-card'
                        : 'bg-navy-50 text-navy hover:bg-navy-50/70'
                    )}
                  >
                    {/* Indicador vermelho da aba ativa */}
                    <span
                      className={cn(
                        'absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-red transition-opacity duration-200',
                        selected ? 'opacity-100' : 'opacity-0'
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0',
                        selected ? 'bg-white/15' : 'bg-white'
                      )}
                    >
                      <TabIcon className={cn('h-5 w-5', selected ? 'text-white' : 'text-navy')} />
                    </span>
                    <span className="font-semibold text-sm">{exam.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Painel de conteúdo */}
            <div
              role="tabpanel"
              id={`exam-panel-${active}`}
              aria-labelledby={`exam-tab-${active}`}
              tabIndex={0}
              className="rounded-2xl border border-borda bg-gradient-to-br from-navy-50 to-white p-8 lg:p-10 shadow-card"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy mb-6">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-heading font-bold text-navy text-2xl mb-3">{current.title}</h3>
              <p className="text-cinza leading-relaxed mb-6 max-w-xl">{current.description}</p>

              <ul className="flex flex-wrap gap-3 mb-8">
                {current.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-borda px-4 py-1.5 text-sm text-navy font-medium"
                  >
                    <Check className="h-4 w-4 text-red" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <Calendar className="h-5 w-5" />
                Agendar meu exame
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
