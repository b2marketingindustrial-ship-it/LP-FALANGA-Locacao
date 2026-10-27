# Briefing da LP — registro da entrevista

> Preenchido pelo agente durante a leitura do briefing, a composição e a entrevista (PROMPT-PADRAO-LP, seções 0 a 0.3). Uma linha por entrada, atualizada assim que a resposta é confirmada. Se a sessão cair, o agente lê este arquivo e retoma da primeira entrada com status `pendente`.
>
> Status: `pendente` · `confirmado` · `default` (assumiu o valor padrão) · `pendência` (falta asset ou decisão do cliente) · `extraído` / `inferido` / `conflito` (vindos do documento de briefing, seção 0 do prompt)

## Origem: LP antiga do cliente

LP da **Falanga Pneumática — Locação de compressores**, montada em 22/10/2026 sobre o código da LP Spinplus (mesma estrutura de Header, Hero, Cotação e Footer), com o conteúdo trocado pelo da LP antiga a pedido do usuário.

| Campo                          | Valor                                                                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fonte do conteúdo              | https://falangapneumatica.com.br/locacao-de-compressores-2025/ (lida integralmente em `22/10/2026`)                                                    |
| Fonte complementar             | https://falangapneumatica.com.br/locacao/ — só a foto da frota                                                                                         |
| Tipo                           | B (página publicada, sem documento de briefing)                                                                                                        |
| Referências visuais do cliente | logo Falanga (amarelo #f8e818 e azul #2858a8), logo Schulz e imagem dos compressores SRP 4030 / SRP 4030 Total Solution / SRP 5100, todos da LP antiga |
| Dados não aplicados por padrão | telefone (85) 98129-5507 · e-mail falanga@falangaservice.com.br · formulário antigo (Nome, E-mail, Telefone, Empresa, Produto, Finalidade, UTMs)       |

### Mapa de aproveitamento

| Bloco da LP antiga                                                            | Veredito   | Destino                                 | Motivo                                                    |
| ----------------------------------------------------------------------------- | ---------- | --------------------------------------- | --------------------------------------------------------- |
| H1 "Locação de Compressores" + "Sua Parceira no Nordeste…"                    | equivale   | `hero` (title, eyebrow)                 |                                                           |
| "Aluguel de Compressores: Eficiência, Confiabilidade e Economia…" + parágrafo | equivale   | `locacao` (título e texto); `hero.text` |                                                           |
| "Com mais de 40 anos de tradição… SCHULZ"                                     | equivale   | `hero.callout`, selo "40+" da `locacao` |                                                           |
| "Temos o COMPRESSOR IDEAL para a sua aplicação!"                              | equivale   | faixa amarela do hero                   |                                                           |
| "Solicite um orçamento: Conheça nossas soluções sob medida…"                  | cabe em    | `identificar` (título e convite)        | vira o painel com os 6 dados do orçamento                 |
| "Por que escolher nosso serviço de locação?" (5 cards)                        | equivale   | `diferenciais`                          | 5 itens completos; textos encurtados para ≤ 70 caracteres |
| "…seja em emergências ou planejamentos estratégicos"                          | cabe em    | `locacao` (2 cards de uso)              | descrições `inferido`                                     |
| "Fale com os nossos engenheiros agora mesmo!" + "Ajudamos as indústrias…"     | equivale   | `cotacao` (título e 3 pontos)           |                                                           |
| Botões "Fale com os nossos especialistas" / "Chame no WhatsApp"               | descartado | —                                       | padrão: vocabulário fixo de CTA (`cta` em content.ts)     |
| Formulário antigo                                                             | descartado | —                                       | padrão: formulário via shortcode do plugin                |
| Telefone e e-mail do rodapé                                                   | descartado | —                                       | padrão: só cidade/endereço no rodapé                      |

## Campanha

| Campo                   | Valor                                                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal | `inferido` — **locação de compressores** (H1 "Locação de Compressores"; title "Locação de compressores para indústrias no Nordeste \| Falanga") |
| Origem                  | H1 da LP antiga; lista de palavras-chave da campanha não fornecida                                                                              |
| Área atendida           | Nordeste ("Sua parceira no Nordeste"), sede em Fortaleza - CE                                                                                   |
| Negativas / claims      | não informados (`campaign.negatives` e `campaign.forbidden` vazios)                                                                             |

## Composição

Aplicada à mão em `22/10/2026` (a biblioteca de seções não está nesta pasta): `lp.manifest.json` e `src/pages/index.astro` editados diretamente.

| Fase       | Seção          | Fundo     | Respiro     | Observação                                                                       |
| ---------- | -------------- | --------- | ----------- | -------------------------------------------------------------------------------- |
| oferta     | `locacao`      | branco    | pt-20 pb-10 | **seção nova, fora da biblioteca** (`RentalOverview.astro`), no lugar da vitrine |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | volta a ser o painel navy da fase                                                |
| prova      | —              | —         | —           | LP antiga sem prova; dispensada em `lp.manifest.json` (`phaseWaivers`)           |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | seção clara (bento de 5 cards); bloco navy dispensado (`navyWaivers`)            |

### Seções descartadas

| Seção                                | Motivo do descarte                                                           | O que faria ela entrar                        |
| ------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------------- |
| `vitrine`                            | a LP antiga não tem lista de equipamentos; a vitrine pede de 6 a 24 com foto | lista da frota de locação com foto por modelo |
| `clientes`, `perguntas`, `segmentos` | sem material na LP antiga                                                    | logos, números com fonte, FAQ ou setores      |

## Entradas do núcleo

| #   | Entrada                 | Status     | Valor                                                                                                                                                                                                                                                                                                    | Observação                                         |
| --- | ----------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 1   | MARCA                   | extraído   | Falanga Pneumática                                                                                                                                                                                                                                                                                       |                                                    |
| 2   | MARCA_CURTA             | inferido   | Falanga                                                                                                                                                                                                                                                                                                  | usada no title, para ficar abaixo de 70 caracteres |
| 3   | PRODUTO_PRINCIPAL       | extraído   | Locação de compressores                                                                                                                                                                                                                                                                                  |                                                    |
| 4   | CONTEXTO_DE_USO         | inferido   | indústrias no Nordeste                                                                                                                                                                                                                                                                                   |                                                    |
| 6   | HERO                    | decidido   | Pílula "Sua produção não para."; H1 "Locação de compressores / Schulz para a indústria."; pontos: Manutenção inclusa, Frota Schulz, Entrega ágil, Sem custo de compra; área atendida sob o botão (27/10/2026)                                                                                            |
| 7   | MARCAS_ATENDIDAS        | decidido   | Logo Schulz no header, ao lado da Falanga, como na LP de parafuso (pedido do usuário, 27/10/2026); sem logo Schulz nos diferenciais e no rodapé                                                                                                                                                          |
| 8   | SELOS_DE_CONFIANCA      | decidido   | Sem repetição entre blocos (27/10/2026): hero = comercial; locação = emergências e planejamento; painel e cotação = orçamento (resposta rápida, formulário ou WhatsApp, dados só no orçamento); diferenciais = institucional (Desde 1981, equipe própria, um só fornecedor, rede de ar, peças originais) |
| 9   | ENDERECO                | decidido   | R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE (igual às outras LPs Falanga)                                                                                                                                                                                          |
| 10  | URL_FINAL + PRIVACIDADE | decidido   | `https://falangapneumatica.com.br/locacao-de-compressores/` (27/10/2026; a página `-2025` precisa ser substituída ou redirecionada) · sem política de privacidade                                                                                                                                        |
| 11  | SHORTCODES              | default    | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                                                                                                                                                                                                                               |                                                    |
| 12  | WHATSAPP                | default    | sem botão flutuante                                                                                                                                                                                                                                                                                      | (85) 98129-5507 não confirmado como WhatsApp       |
| 14  | TOKENS_DE_COR + FONTE   | confirmado | azul `brand` #0043ad, amarelo `brand-yellow` #ffe300 e navy #001641, amostrados do mockup do hero (22/10/2026); `brand-blue`/`brand-yellow-soft` das outras LPs Falanga (27/10/2026); Manrope                                                                                                            | a logo usa #2858a8 / #f8e818, mais apagados        |
| 15  | CAMPANHA                | inferido   | locação de compressores                                                                                                                                                                                                                                                                                  |                                                    |

## Assets

| Asset          | Arquivo                                | Status   | Observação                                                                                             |
| -------------- | -------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| Logo           | `src/assets/LOGO.png`                  | extraído | logo com selo de 40 anos da LP antiga, **só 341×82** — pedir versão maior/vetor                        |
| Banner do hero | `src/assets/heroBg.webp`               | gerado   | recorte dos compressores da LP antiga (SRP 4030, SRP 4030 TS, SRP 5100) sobre o navy do hero, 1981×900 |
| Foto da frota  | `src/assets/locacao/frota-schulz.webp` | extraído | página /locacao/ do site, 680×682 — pedir original em alta                                             |
| Favicon        | `public/favicon.svg`                   | inferido | desenhado a partir da logo (placa amarela, riscos e "F" azuis)                                         |

## Desvios do padrão

Em 27/10/2026 a LP foi realinhada às LPs de parafuso, peças e manutenção (regras em decisão ponto a ponto com o usuário). O que ainda difere do padrão:

| Peça         | O que muda                                                                                                                                  | Consequência                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Locação      | seção `locacao` (foto da frota com selo "Desde 1981", dois usos e CTA azul) no lugar da vitrine/linhas, no molde de abertura das outras LPs | **`npm run compose` não a conhece**: restaurar `RentalOverview.astro` e `locacao.ts` pelo git |
| Orçamento    | `identificar` como painel navy (molde do "Como funciona") com os 6 dados de orçamento de locação e botão amarelo                            | `carriesNavy: true` no manifesto                                                              |
| Diferenciais | bloco navy com a foto `cenario.jpg` (a mesma das outras LPs) e os 5 cards de locação sobrepostos                                            | vizinho do painel de orçamento: `adjacentNavyWaivers` no manifesto e no `check-lp.mjs`        |
| Versão       | continua em `2.7.1`: o fluxo da ficha (`npm run ficha`, v2.8.0) não foi aplicado                                                            | subir de versão exige trazer `ficha.mjs` e a `FICHA-LP.md`                                    |

Já no padrão (cores iguais às das outras três LPs, `brand-blue` no lugar de `brand`): header (filete amarelo-azul, logos Falanga e Schulz, tagline "Locação de compressores parafuso" com selo, CTA), hero navy com pílula, H1 grande e área atendida, malha e chat de 340px, contêiner de 1450px, 70px entre seções (`uniform`), `title-section`/`text-lead`, botões `.cta`, cotação só com o shortcode (sem card nem LGPD), rodapé de uma linha, sem WhatsApp flutuante.

## Pendências para o cliente

1. **Marca dos compressores:** a LP antiga dizia "Compressores Ingersoll Rand" no card "Alta tecnologia" e "SCHULZ" no resto da página e em todas as imagens. O card saiu; a Schulz aparece só em texto, além da logo do header.
2. Logo Falanga em alta resolução (ou vetor) e a foto da frota em tamanho original.
3. Confirmar com a Falanga os cards institucionais dos diferenciais (rede de ar comprimido, peças originais, equipe certificada: vieram das LPs de manutenção e parafuso) e validar os 6 dados do orçamento (Pressão, Vazão, Potência, Período, Tensão, Local) e as descrições dos cards "Emergências" e "Planejamento estratégico".
4. Substituir ou redirecionar a página `-2025`, política de privacidade e confirmar se (85) 98129-5507 é o WhatsApp comercial. Autorização de uso da marca Schulz (a logo está no header; no restante da página a Schulz aparece só em texto).
5. Material de prova (clientes atendidos, números com fonte, depoimentos) para preencher a fase vazia.

## Aprovação

- [ ] Conteúdo inferido validado pelo cliente em: —
- [x] Padrão B2 versão: `2.7.1`
