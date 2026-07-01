'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FadeInSectionProps {
  children: ReactNode
  /** atraso em ms */
  delay?: number
  className?: string
  as?: 'div' | 'li'
}

/**
 * Animação sutil de entrada (fade + slide-up) ao rolar, via IntersectionObserver.
 * Sem dependências externas. Respeita prefers-reduced-motion.
 */
export function FadeInSection({ children, delay = 0, className, as = 'div' }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
