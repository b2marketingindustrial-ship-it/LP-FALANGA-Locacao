/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Variante local, a mesma das LPs de parafuso, peças e manutenção (27/10/2026): a foto de
 * cenário (`cenario.jpg`, igual à das três) já traz o técnico, então não há pessoa recortada.
 * O CTA tem rótulo próprio (`cta`). Os 5 cards são os da LP antiga de locação, reescritos para
 * não repetir o hero nem o card de emergências da seção de locação.
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
  titleLines: ['Ar comprimido para', 'a sua indústria,', 'sem imobilizar capital.'],
  /** Cada `\n` é uma quebra forçada a partir de 1280px; abaixo disso o texto corre normal. */
  text: 'Aluguel de compressores rápido, confiável e personalizado\npara a rotina da sua operação.',
  cta: 'Solicitar cotação',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  reasons: [
    {
      icon: 'tag',
      title: 'Economia garantida',
      description: 'Você paga só pelo período de uso, sem comprar o equipamento.',
    },
    {
      icon: 'sliders',
      title: 'Adaptabilidade',
      description: 'Ajuste a capacidade à demanda e preserve o caixa.',
    },
    {
      icon: 'gauge',
      title: 'Capacidade sob medida',
      description: 'Dimensionado para a vazão e a pressão da operação.',
    },
    {
      icon: 'truck',
      title: 'Fornecimento ágil',
      description: 'Equipamento da frota disponível para a sua operação.',
    },
    {
      icon: 'users',
      title: 'Assistência contínua',
      description: 'Suporte técnico especializado durante a locação.',
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
