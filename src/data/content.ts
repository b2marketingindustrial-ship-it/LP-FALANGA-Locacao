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
import schulz from '@assets/schulz.png'

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
 * Header no padrão das LPs Falanga: logo, tagline com selo e CTA. `partner` (logo Schulz)
 * já não aparece aqui: só o rodapé ainda a usa, até o ponto do rodapé ser revisado.
 */
export const header = {
  tagline: site.product,
  /** Rótulo do CTA do header no desktop (mesmo das outras LPs Falanga). */
  cta: 'Fale com um especialista',
  partner: {
    src: schulz,
    alt: 'Schulz Compressores',
  },
} as const satisfies {
  tagline: string
  cta: string
  partner: Photo
}

/* -------------------------------------------------------------------- hero */

export const hero = {
  /** H1 da página, na pílula de abertura. É o que o `check:lp` confere contra a palavra-chave da campanha. */
  title: 'Locação de Compressores',
  /** Manchete em duas linhas: `headline` em branco e `highlight[0]` em amarelo na primeira; o resto de `highlight` na segunda. */
  headline: ['Sua produção'],
  highlight: ['não para.', 'Manutenção inclusa.'],
  text: 'Aluguel de compressores de ar com qualidade, flexibilidade e economia: o equipamento certo, onde a sua indústria precisar.',
  banner: {
    src: heroBg,
    alt: 'Compressores de parafuso Schulz SRP 4030, SRP 4030 Total Solution e SRP 5100 da frota de locação',
  },
  points: [
    { icon: 'wrench', line1: 'Manutenção', line2: 'inclusa' },
    { icon: 'cpu', line1: 'Compressores', line2: 'Schulz' },
    { icon: 'map-pin', line1: 'Atendimento', line2: 'no Nordeste' },
    { icon: 'users', line1: 'Equipe', line2: 'especializada' },
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
    { icon: 'wrench', label: 'Manutenção inclusa' },
    { icon: 'cpu', label: 'Compressores Schulz' },
    { icon: 'pin', label: 'Atendimento em todo o Nordeste' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  /** Frase sob as marcas, no rodapé. */
  tagline:
    'Locação de compressores de ar Schulz para indústrias do Nordeste, com mais de 40 anos de tradição em soluções de ar comprimido.',
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
