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
import type { Photo } from './types'
import { site } from './site'

import heroCompressores from '@assets/hero-compressores.webp'
import schulz from '@assets/schulz.png'

/* ------------------------------------------------------------------ tipos */

/** Trecho de texto com destaque: `strong` em negrito, `accent` em negrito azul. */
export type RichText = readonly (string | { strong: string } | { accent: string })[]

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

/**
 * Hero claro do mockup aprovado pelo usuário em 22/10/2026: texto, botão de cotação e selo de
 * tradição à esquerda; compressores Schulz no chão do estúdio, diante do painel azul.
 */
export const hero = {
  eyebrow: 'Sua parceira no Nordeste em soluções de ar comprimido',
  /** H1 completo: é nele que o `check:lp` procura a palavra-chave da campanha. */
  title: 'Locação de Compressores',
  /** Trecho final do título, em azul na segunda linha (precisa existir dentro de `title`). */
  highlight: 'Compressores',
  text: [
    'Aluguel de compressores de ar com ',
    { strong: 'qualidade, flexibilidade e economia:' },
    ' o equipamento certo, quando e onde a sua indústria precisar.',
  ],
  /** Rótulo do botão do mockup (fora do vocabulário fixo de CTA, a pedido do usuário). */
  button: 'Solicitar cotação',
  /** Selo de tradição sob o botão. */
  trust: {
    title: 'Mais de 40 anos de tradição',
    text: ['Tecnologia de compressores de ar ', { accent: 'SCHULZ' }, '.'],
  },
  /** Selo flutuante sobre o painel azul. */
  chip: { title: 'Manutenção inclusa', text: 'sem custo além da locação' },
  /** Faixa amarela que fecha o hero. */
  band: ['Temos o ', { strong: 'COMPRESSOR IDEAL' }, ' para a sua aplicação!'],
  banner: {
    src: heroCompressores,
    alt: 'Compressores de parafuso Schulz SRP 4030, SRP 4030 Total Solution e SRP 5100',
  },
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: RichText
  button: string
  trust: { title: string; text: RichText }
  chip: { title: string; text: string }
  band: RichText
  banner: Photo
}

/* ----------------------------------------------------------------- cotação */

/**
 * Cotação: faixa navy com o convite da LP antiga à esquerda e o formulário do plugin à
 * direita. Os três pontos vêm do fechamento da LP antiga ("Ajudamos as indústrias…").
 */
export const quote = {
  /** H2: o trecho `strong` em extrabold, o resto em peso regular. */
  title: [{ strong: 'Fale com os nossos engenheiros' }, ' agora mesmo!'],
  text: [
    'Entre em contato e descubra como a ',
    { strong: 'locação de compressores' },
    ' da ',
    { strong: site.brand },
    ' pode fazer a diferença no seu negócio, com uma equipe de especialistas pronta para te atender.',
  ],
  points: [
    'Ar comprimido de excelência, com eficiência e confiabilidade',
    'Redução de custos de manutenção e de energia',
    'Fornecimento ágil e suporte técnico contínuo',
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de orçamento, conforme a LGPD.`,
} as const satisfies {
  title: RichText
  text: RichText
  points: readonly string[]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  /** Frase sob as marcas, no rodapé. */
  tagline:
    'Locação de compressores de ar Schulz para indústrias do Nordeste, com mais de 40 anos de tradição em soluções de ar comprimido.',
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
