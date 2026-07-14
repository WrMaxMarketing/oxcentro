/**
 * Taxonomia CANÔNICA de navegação do site OxCentro.
 *
 * Fonte única da verdade: usar EXATAMENTE estes rótulos (e nesta ordem) no
 * header e — futuramente — no rodapé, evitando divergências como "Serviços"
 * vs "Exames" ou "Especialidades" vs "Equipe".
 *
 * Ordem canônica:
 *   Início · Benefícios · Convênios · Equipe · Exames · Depoimentos · Contato
 */
export type NavItem = {
  label: string
  href: string
  /**
   * false = a seção correspondente ainda não está ativa no site.
   * Itens desabilitados NÃO são renderizados para não gerar âncora quebrada.
   */
  enabled: boolean
}

export const NAV_TAXONOMY: NavItem[] = [
  { label: 'Início', href: '#inicio', enabled: true },
  { label: 'Benefícios', href: '#beneficios', enabled: true },
  { label: 'Convênios', href: '#convenios', enabled: true },
  // "Equipe" aponta para a seção dos médicos (a <section> mantém id="especialidades").
  { label: 'Equipe', href: '#especialidades', enabled: true },
  { label: 'Exames', href: '#exames', enabled: true },
  // TODO: a seção de Depoimentos está desativada (TestimonialsSection comentada em
  // app/page.tsx e sem id). Ao reativá-la com id="depoimentos", marcar enabled: true.
  { label: 'Depoimentos', href: '#depoimentos', enabled: false },
  { label: 'Contato', href: '#contato', enabled: true },
]

/** Itens prontos para renderização imediata (sem âncoras quebradas). */
export const NAV_ITEMS: NavItem[] = NAV_TAXONOMY.filter((item) => item.enabled)
