/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Variante local, a mesma das LPs de parafuso, peças e manutenção (27/10/2026): a foto de
 * cenário (`cenario.jpg`, igual à das três) já traz o técnico, então não há pessoa recortada.
 * O CTA tem rótulo próprio (`cta`). Os 5 cards são institucionais, os mesmos argumentos de empresa
 * das LPs de manutenção e parafuso (27/10/2026).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada): as duas primeiras em branco, a última em amarelo. */
  titleLines: ['Há 40 anos levando', 'ar comprimido à', 'indústria do Nordeste.'],
  /** Cada `\n` é uma quebra forçada a partir de 1280px; abaixo disso o texto corre normal. */
  text: 'A Falanga acompanha a sua indústria em cada etapa,\ncom confiabilidade e qualidade no atendimento.',
  cta: 'Solicitar cotação',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  /**
   * Institucional e de autoridade, como nas LPs de parafuso e manutenção: quem é a Falanga, não o
   * que a locação entrega. O comercial está no hero (manutenção inclusa, frota, entrega, custo) e
   * na seção de locação (emergências, planejamento); o orçamento, no painel e na cotação.
   */
  reasons: [
    {
      icon: 'badge-check',
      title: 'Desde 1981',
      description: 'Mais de quatro décadas atendendo a indústria.',
    },
    {
      icon: 'users',
      title: 'Equipe própria',
      description: 'Técnicos capacitados e certificados.',
    },
    {
      icon: 'layers',
      title: 'Um só fornecedor',
      description: 'Compressor, peças e manutenção na mesma parceria.',
    },
    {
      icon: 'gear',
      title: 'Rede de ar comprimido',
      description: 'Projeto e execução da rede da sua planta.',
    },
    {
      icon: 'shield',
      title: 'Peças originais',
      description: 'Componentes para manutenção e reposição.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string, string]
  text: string
  cta: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
