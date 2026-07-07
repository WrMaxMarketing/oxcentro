import { Calendar } from 'lucide-react'
import { FadeInSection } from './fade-in-section'

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

const WHATSAPP_LINK =
  'https://wa.me/5586999709973?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.'

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInSection className="max-w-3xl mb-12">
          <span className="eyebrow">Nossa Equipe</span>
          <h2 className="section-title text-3xl lg:text-4xl mb-4">
            Especialistas prontos para <span className="text-red">cuidar de você</span>
          </h2>
          <p className="text-cinza leading-relaxed">
            Um corpo clínico multidisciplinar, com registro ativo e experiência em diversas áreas da
            saúde.
          </p>
        </FadeInSection>

        <FadeInSection>
          {/* Layout tipo masonry — acomoda cards de alturas diferentes com conforto */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {doctors.map((doc) => (
              <article
                key={doc.name}
                className="mb-6 break-inside-avoid card-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-navy font-heading text-lg font-bold text-white">
                    {getInitials(doc.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-red text-[0.7rem] font-bold uppercase tracking-wider">
                      {doc.specialty}
                    </p>
                    <h3 className="font-heading font-bold text-navy text-lg leading-tight">
                      {doc.name}
                    </h3>
                  </div>
                </div>

                <p className="text-cinza text-xs font-semibold tracking-wide mb-3">{doc.register}</p>

                {doc.note && <p className="text-cinza text-sm leading-snug mb-3">{doc.note}</p>}

                {doc.procedures && doc.procedures.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5">
                    {doc.procedures.map((proc) => (
                      <li
                        key={proc}
                        className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.72rem] font-medium text-navy"
                      >
                        {proc}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection className="text-center mt-12" delay={120}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <Calendar className="h-5 w-5" />
            Agende sua Consulta Agora
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}
