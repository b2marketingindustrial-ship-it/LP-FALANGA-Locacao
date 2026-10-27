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
import { site } from './site'

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
 * Header no padrão das LPs Falanga: logo, tagline com selo e CTA. Sem logo Schulz: a autorização
 * de uso da marca não foi solicitada (como nas LPs de peças e manutenção).
 */
export const header = {
  tagline: site.product,
  /** Rótulo do CTA do header no desktop (mesmo das outras LPs Falanga). */
  cta: 'Fale com um especialista',
} as const satisfies {
  tagline: string
  cta: string
}

/* -------------------------------------------------------------------- hero */

export const hero = {
  /** H1 da página, na pílula de abertura. É o que o `check:lp` confere contra a palavra-chave da campanha. */
  title: 'Locação de Compressores',
  /** Manchete em duas linhas: `headline` em branco e `highlight[0]` em amarelo na primeira; o resto de `highlight` na segunda. */
  headline: ['Sua produção'],
  highlight: ['não para.', 'Compressores para alugar.'],
  text: 'Compressores de parafuso Schulz para locação, com manutenção inclusa e atendimento em todo o Nordeste.',
  banner: {
    src: heroBg,
    alt: 'Compressores de parafuso Schulz SRP 4030, SRP 4030 Total Solution e SRP 5100 da frota de locação',
  },
  points: [
    { icon: 'wrench', line1: 'Manutenção', line2: 'inclusa' },
    { icon: 'cpu', line1: 'Frota', line2: 'Schulz' },
    { icon: 'trophy', line1: 'Desde', line2: '1981' },
    { icon: 'map-pin', line1: 'Fortaleza', line2: 'e Recife' },
  ],
} as const satisfies {
  title: string
  headline: readonly string[]
  highlight: readonly string[]
  text: string
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
    { icon: 'gauge', label: 'Compressor dimensionado' },
    { icon: 'tag', label: 'Sem custo de compra' },
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
