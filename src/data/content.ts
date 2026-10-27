/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Falanga Pneumática — locação de compressores Schulz. Copy da LP antiga
 * (falangapneumatica.com.br/locacao-de-compressores-2025/), ajustado ao layout.
 */
import type { IconName } from './icons'
import type { Photo } from './types'

import heroBg from '@assets/heroBg.webp'

/* ------------------------------------------------------------------ tipos */

export interface TrustItem {
  icon: IconName
  label: string
}

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu compressor',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

/**
 * Header no padrão das LPs Falanga: logos Falanga e Schulz (como na LP de parafuso, a pedido do
 * usuário em 27/10/2026), tagline com selo e CTA.
 */
export const header = {
  tagline: 'Locação de compressores parafuso',
  /** Rótulo do CTA do header no desktop (mesmo das outras LPs Falanga). */
  cta: 'Fale com um especialista',
} as const satisfies {
  tagline: string
  cta: string
}

/* -------------------------------------------------------------------- hero */

export const hero = {
  /** Frase de efeito na pílula acima do título. */
  pill: 'Sua produção não para.',
  /**
   * H1 da página, a manchete grande. É o que o `check:lp` confere contra a palavra-chave da
   * campanha. `tail` completa a frase comercial nas linhas seguintes, em amarelo.
   */
  title: 'Locação de compressores',
  tail: ['Schulz para a indústria.'],
  text: 'Compressores de parafuso para locação, no tempo e na capacidade que a sua operação precisar.',
  /** Linha de área atendida abaixo do CTA, separada por ponto. */
  area: ['Unidades em Fortaleza e Recife', 'Atendimento em todo o Nordeste'],
  banner: {
    src: heroBg,
    alt: 'Compressores de parafuso Schulz SRP 4030, SRP 4030 Total Solution e SRP 5100 da frota de locação',
  },
  points: [
    { icon: 'wrench', line1: 'Manutenção', line2: 'inclusa' },
    { icon: 'cpu', line1: 'Frota', line2: 'Schulz' },
    { icon: 'truck', line1: 'Entrega', line2: 'ágil' },
    { icon: 'tag', line1: 'Sem custo', line2: 'de compra' },
  ],
} as const satisfies {
  pill: string
  title: string
  tail: readonly string[]
  text: string
  area: readonly string[]
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com os nossos engenheiros agora mesmo!',
  text: 'Descubra como a locação de compressores da Falanga pode fazer a diferença no seu negócio. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'clock', label: 'Resposta rápida' },
    { icon: 'chat', label: 'Formulário ou WhatsApp' },
    { icon: 'shield', label: 'Dados usados só no orçamento' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
