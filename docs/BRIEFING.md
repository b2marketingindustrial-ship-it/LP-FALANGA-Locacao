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

| #   | Entrada                 | Status     | Valor                                                                                                                   | Observação                                                 |
| --- | ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 1   | MARCA                   | extraído   | Falanga Pneumática                                                                                                      |                                                            |
| 2   | MARCA_CURTA             | inferido   | Falanga                                                                                                                 | usada no title, para ficar abaixo de 70 caracteres         |
| 3   | PRODUTO_PRINCIPAL       | extraído   | Locação de compressores                                                                                                 |                                                            |
| 4   | CONTEXTO_DE_USO         | inferido   | indústrias no Nordeste                                                                                                  |                                                            |
| 6   | HERO                    | extraído   | "Locação de / Compressores", texto, destaque 40 anos + SCHULZ, faixa "COMPRESSOR IDEAL"                                 |                                                            |
| 7   | MARCAS_ATENDIDAS        | extraído   | Schulz (logo no header, diferenciais e rodapé)                                                                          | ver conflito Ingersoll Rand em Pendências                  |
| 8   | SELOS_DE_CONFIANCA      | extraído   | Mais de 40 anos de tradição · Sua parceira no Nordeste · Manutenção inclusa                                             |                                                            |
| 9   | ENDERECO                | extraído   | Fortaleza - CE                                                                                                          | a LP antiga não traz rua nem CEP                           |
| 10  | URL_FINAL + PRIVACIDADE | pendência  | URL provisória = a da LP antiga · sem política de privacidade                                                           | `/politica-de-privacidade/` dá 404 no site; link escondido |
| 11  | SHORTCODES              | default    | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                                              |                                                            |
| 12  | WHATSAPP                | default    | sem botão flutuante                                                                                                     | (85) 98129-5507 não confirmado como WhatsApp               |
| 14  | TOKENS_DE_COR + FONTE   | confirmado | azul `brand` #0043ad, amarelo `brand-yellow` #ffe300 e navy #001641, amostrados do mockup do hero (22/10/2026); Manrope | a logo usa #2858a8 / #f8e818, mais apagados                |
| 15  | CAMPANHA                | inferido   | locação de compressores                                                                                                 |                                                            |

## Assets

| Asset             | Arquivo                                | Status   | Observação                                                                      |
| ----------------- | -------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| Logo              | `src/assets/LOGO.png`                  | extraído | logo com selo de 40 anos da LP antiga, **só 341×82** — pedir versão maior/vetor |
| Logo Schulz       | `src/assets/schulz.png`                | extraído | da LP antiga, recortada e reduzida a 633×160, transparente                      |
| Compressores hero | `src/assets/hero-compressores.webp`    | extraído | recorte transparente da LP antiga (SRP 4030, SRP 4030 TS, SRP 5100), 2400×899   |
| Foto da frota     | `src/assets/locacao/frota-schulz.webp` | extraído | página /locacao/ do site, 680×682 — pedir original em alta                      |
| Favicon           | `public/favicon.svg`                   | inferido | desenhado a partir da logo (placa amarela, riscos e "F" azuis)                  |

## Desvios do padrão

Herdados da LP Spinplus (header e hero claros, cotação escura, rodapé em dois níveis, cantos arredondados entre seções), com as mudanças abaixo.

| Peça         | O que muda                                                                                                                                                                                                                                                                                                                                                                                 | Consequência                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cores        | `brand-red` e `cta-green` saem; entram `brand` (azul) e `brand-yellow` (amarelo) nos tons do mockup do hero; navy (`primary-dark*`) puxado para o azul                                                                                                                                                                                                                                     | seleção de texto, foco e skip link passam ao azul                                                                                                                     |
| Hero         | mockup do usuário (22/10/2026): estúdio claro com feixes de luz; H1 em extrabold com marca-texto amarelo; botão amarelo "Solicitar cotação" (`hero-primary`, rótulo fora do vocabulário fixo) **dentro** do espaço do plugin; selo "Mais de 40 anos de tradição"; compressores Schulz no chão cinza com reflexo, diante de painel azul inclinado de canto curvo; selo "Manutenção inclusa" | se o plugin **acrescenta** o botão dele ao espaço em vez de trocar o conteúdo, aparecem dois botões — conferir no WordPress. Só uma imagem no LCP (preload no Layout) |
| Locação      | seção nova `locacao` no lugar da vitrine                                                                                                                                                                                                                                                                                                                                                   | **`npm run compose` não a conhece**: restaurar `RentalOverview.astro` e `locacao.ts` pelo git                                                                         |
| Orçamento    | `identificar` volta a ser painel navy, com botão amarelo e os 6 dados de orçamento de locação                                                                                                                                                                                                                                                                                              | `carriesNavy: true` no manifesto                                                                                                                                      |
| Diferenciais | bento de 5 cards ao lado do título, último card largo em azul; sem a faixa de imagem                                                                                                                                                                                                                                                                                                       | sem assets próprios                                                                                                                                                   |
| Cotação      | fundo navy com malha e brilho amarelo, sem foto; 3 pontos com check abaixo do texto                                                                                                                                                                                                                                                                                                        | `quote.background` sai, `quote.points` entra                                                                                                                          |
| Verificação  | `scripts/check-lp.mjs` (A8 e especificação de LOGO/hero) confere as assinaturas da versão Falanga (`data-*="falanga"`, `border-brand-yellow`, `hero-band`)                                                                                                                                                                                                                                 |                                                                                                                                                                       |

## Pendências para o cliente

1. **Marca dos compressores:** a LP antiga dizia "Compressores Ingersoll Rand" no card "Alta tecnologia" e "SCHULZ" no resto da página e em todas as imagens. A página nova usa Schulz em tudo — confirmar.
2. Logo Falanga em alta resolução (ou vetor) e a foto da frota em tamanho original.
3. Validar os 6 dados do orçamento (Pressão, Vazão, Potência, Período, Tensão, Local) e as descrições dos cards "Emergências" e "Planejamento estratégico".
4. URL final da LP, política de privacidade e se (85) 98129-5507 é o WhatsApp comercial.
5. Material de prova (clientes atendidos, números com fonte, depoimentos) para preencher a fase vazia.

## Aprovação

- [ ] Conteúdo inferido validado pelo cliente em: —
- [x] Padrão B2 versão: `2.7.1`
