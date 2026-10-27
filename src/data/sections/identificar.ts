/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * Falanga: título e convite vêm do bloco "Solicite um orçamento" da LP antiga. Os 6 itens
 * são os dados de um orçamento de locação, inferidos (a LP antiga não traz a lista do
 * comercial). Confirmar com a Falanga.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Orçamento sob medida',
  title: 'Conheça nossas soluções sob medida para a sua indústria',
  /** Trecho final do título, em amarelo (precisa existir dentro de `title`). */
  highlight: 'sob medida para a sua indústria',
  text: 'Não precisa ter todos os dados em mãos. Envie o que souber da sua operação e nossa a equipe indica o compressor certo para locação.',
  /** Rótulo da lista de dados. */
  itemsLabel: 'O que agiliza o seu orçamento',
  microcopy: 'Dimensionamento feito pela equipe técnica',
  /** Rótulo do botão da seção. */
  cta: 'Solicite sua cotação',
  items: [
    { icon: 'gauge', label: 'Pressão', hint: 'de trabalho, em bar' },
    { icon: 'move', label: 'Vazão', hint: 'consumo de ar' },
    { icon: 'bolt', label: 'Potência', hint: 'em HP ou kW' },
    { icon: 'clock', label: 'Período', hint: 'tempo de locação' },
    { icon: 'zap', label: 'Tensão', hint: 'da rede elétrica' },
    { icon: 'map-pin', label: 'Local', hint: 'cidade da operação' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  microcopy: string
  cta: string
  itemsLabel: string
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
