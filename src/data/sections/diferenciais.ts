/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Falanga: o bloco "Por que escolher nosso serviço de locação?" da LP antiga, com os seus
 * 5 cards. São 5 exatos: o grid é um bento de 3 colunas em que o último card ocupa duas.
 * A LP antiga dizia "Compressores Ingersoll Rand" em "Alta tecnologia", contra "SCHULZ" no
 * resto da página e em todas as imagens: aqui vale Schulz (confirmar com a Falanga).
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
  text: 'Aluguel de compressores de ar rápido, confiável e personalizado, com o suporte de quem está há mais de 40 anos no ar comprimido.',
  reasons: [
    {
      icon: 'tag',
      title: 'Economia garantida',
      description: 'Sem custo de compra ou manutenção: você paga apenas pelo uso.',
    },
    {
      icon: 'sliders',
      title: 'Adaptabilidade',
      description: 'Ajuste a capacidade à demanda e mantenha o fluxo de caixa saudável.',
    },
    {
      icon: 'cpu',
      title: 'Alta tecnologia',
      description: 'Compressores Schulz atualizados para máxima produtividade.',
    },
    {
      icon: 'wrench',
      title: 'Manutenção inclusa',
      description: 'Equipamentos revisados, sem custo adicional além da locação.',
    },
    {
      icon: 'map-pin',
      title: 'Seu parceiro no Nordeste',
      description: 'Fornecimento ágil e assistência técnica especializada contínua.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
