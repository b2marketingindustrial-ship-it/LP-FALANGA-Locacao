/**
 * Dados da seção "Aluguel de compressores" (fase: oferta).
 *
 * Falanga: substitui a vitrine da LP Spinplus — a LP antiga não traz lista de
 * equipamentos, e a vitrine pede de 6 a 24. Seção feita na própria LP (não está na
 * biblioteca): foto real da frota à esquerda; à direita, a proposta da LP antiga
 * ("Aluguel de Compressores: Eficiência, Confiabilidade e Economia…") e os dois usos que
 * ela cita — emergências e planejamento estratégico. São 2 exatos: o grid é `sm:grid-cols-2`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

// Foto da página /locacao/ do site da Falanga: compressores Schulz SRP 4030 com o adesivo Falanga.
import frota from '@assets/locacao/frota-schulz.webp'

export interface RentalUse {
  icon: IconName
  title: string
  description: string
}

export const rental = {
  eyebrow: 'Aluguel de compressores',
  title: 'Eficiência, confiabilidade e economia para a sua indústria',
  text: 'A disponibilidade e a eficiência do seu sistema de ar comprimido são cruciais para a produtividade do seu negócio. Com a locação da Falanga, você tem ar comprimido de qualidade sem imobilizar capital em equipamento.',
  photo: {
    src: frota,
    alt: 'Compressores de parafuso Schulz SRP 4030 da frota de locação da Falanga Pneumática instalados em sala de compressores',
  },
  stat: { value: '40+', label: 'anos de tradição em ar comprimido' },
  items: [
    {
      icon: 'alert',
      title: 'Emergências',
      description:
        'Compressor parado? Reponha o ar comprimido rápido e mantenha a produção rodando.',
    },
    {
      icon: 'clipboard-check',
      title: 'Planejamento estratégico',
      description:
        'Demanda sazonal, obra ou expansão: ajuste a capacidade sem comprar equipamento.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  photo: Photo
  stat: { value: string; label: string }
  items: readonly [RentalUse, RentalUse]
}
