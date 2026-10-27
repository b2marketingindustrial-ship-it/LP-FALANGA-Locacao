/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Falanga: o bloco "Por que escolher nosso serviço de locação?" da LP antiga, com os seus
 * 5 cards. São 5 exatos: o grid é um bento de 3 colunas em que o último card ocupa duas.
 * Copy reescrita em 27/10/2026 para não repetir o hero (manutenção inclusa, Schulz, Nordeste) nem
 * o card de emergências da locação; o "Alta tecnologia" da LP antiga, que citava Ingersoll Rand,
 * saiu.
 */
import type { IconName } from '@data/icons'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: 'Diferenciais',
  /** Cada item é uma linha do H2 (quebra forçada no desktop). */
  titleLines: ['Por que escolher', 'nosso serviço', 'de locação?'],
  text: 'Aluguel de compressores de ar rápido, confiável e personalizado para a rotina da sua indústria.',
  reasons: [
    {
      icon: 'tag',
      title: 'Economia garantida',
      description: 'Você paga só pelo período de uso, sem comprar o equipamento.',
    },
    {
      icon: 'sliders',
      title: 'Adaptabilidade',
      description: 'Ajuste a capacidade à demanda e mantenha o fluxo de caixa saudável.',
    },
    {
      icon: 'gauge',
      title: 'Capacidade sob medida',
      description: 'Compressor dimensionado para a vazão e a pressão da sua operação.',
    },
    {
      icon: 'truck',
      title: 'Fornecimento ágil',
      description: 'Compressor da frota disponível rapidamente para a sua operação.',
    },
    {
      icon: 'users',
      title: 'Assistência contínua',
      description: 'Suporte técnico especializado durante todo o período de locação.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
