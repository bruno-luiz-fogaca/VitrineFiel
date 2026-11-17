# Progresso do site da Vitrine Fiel

> **Leia este arquivo primeiro** em qualquer conversa nova sobre o site. Ele diz onde estamos e qual é o próximo passo.
> Atualize-o ao terminar cada etapa: marque a caixa, coloque a data e registre as decisões novas.

Última atualização: **17/11/2026**

## Onde estamos agora
**Fases 1 e 2:** concluídas. O site em Next.js já tem todas as seções do protótipo, cada uma num componente em `components/`.
**Publicação:** o site está **no ar** em https://bruno-luiz-fogaca.github.io/VitrineFiel/. O GitHub Action (`.github/workflows/publicar.yml`) publica de novo a cada push. O GitHub CLI (`gh`) está instalado e logado, e serve para acompanhar as publicações (`gh run list`).
**Próximo passo:** **Fase 3** (conteúdo real), começando pela imagem de compartilhamento.
**Fase 0:** falta só o fundador buscar as fotos do imóvel de exemplo, o que não trava as Fases 1 e 2.
**Tarefas do fundador (fora do código):** registrar o domínio, ligar o GitHub Pages e buscar as fotos. Ver "Decisões pendentes".

## Decisões tomadas (requisitos)
| # | Tema | Decisão | Data |
|---|---|---|---|
| R1 | Objetivo | Fazer a gestora pedir a **prévia grátis de 15 s**. Ver o README | 17/11/2026 |
| R2 | Escopo da v1 | **Só a página de venda**, de uma página só. As Vitrines (páginas) dos clientes vêm depois da 1ª venda | 17/11/2026 |
| R3 | Contato | **Só WhatsApp**: botão com mensagem pronta (`wa.me`). O site **não tem formulário** e não pede dado nenhum: as informações da gestora são pedidas na conversa pelo WhatsApp | 17/11/2026 |
| R4 | Hospedagem | **GitHub Pages**, pelo repositório `bruno-luiz-fogaca/VitrineFiel` | 17/11/2026 |
| R5 | Tecnologia | **Next.js + React + TypeScript**, em **exportação estática** (`output: "export"`), porque o GitHub Pages só serve arquivos estáticos. O fundador quer o resultado mais profissional possível | 17/11/2026 |
| R6 | Visual | Visual "vistoria": papel `#eef0ec`, tinta `#17324d`, fita `#f2c230`, carimbo `#2f6b4f`. Fontes Bricolage Grotesque (títulos) e Public Sans (texto). O elemento marcante é o **comparador** que se arrasta (cena do vídeo × foto original) | 17/11/2026 |
| R7 | Público | Gestoras de 20 a 40 imóveis que chegam **pelo celular** (link mandado no Instagram ou no WhatsApp). O site é pensado primeiro para celular | 17/11/2026 |
| R8 | Honestidade | Nada de imagem inventada, depoimento falso, promessa de resultado ou urgência falsa. Imagem de exemplo sempre com aviso | 17/11/2026 |
| R9 | Git | O fundador autorizou o Claude a **commitar e publicar (push) a cada etapa** concluída do site | 17/11/2026 |
| R10 | WhatsApp | Por enquanto, o número pessoal do fundador: **(41) 98409-5933**, no código `5541984095933`. Trocar quando houver um número comercial | 17/11/2026 |
| R11 | Domínio | **`vitrinefiel.com.br`**. Até ele estar registrado e ligado, o site fica em `bruno-luiz-fogaca.github.io/VitrineFiel/` | 17/11/2026 |
| R12 | Medição | **Sem contagem de visitas nem de cliques.** O fundador decidiu não medir por enquanto (a ideia do GoatCounter foi descartada) | 17/11/2026 |
| R13 | Vitrine do cliente | A página de captação de cada gestora é **sempre aberta, sem senha**. A palavra "privada" saiu do site porque dava a entender que ninguém veria a página. Quem não quer expor números escolhe não mostrá-los | 17/11/2026 |
| R14 | Ofertas | A oferta das 5 primeiras gestoras (1 atualização grátis em troca do uso no portfólio) **não aparece no site**. É feita só na conversa pelo WhatsApp | 17/11/2026 |

## Decisões pendentes
- [x] ~~Número de WhatsApp comercial~~: decidido em R10.
- [ ] **Fotos do imóvel de exemplo** (o fundador busca): fotos reais do Unsplash ou do Pexels, de 8 a 15 do mesmo apartamento, salvas em `Desktop/Founder/Vitrine Fiel/04 Amostras/Fotos do imóvel de exemplo`.
- [ ] **Registrar o domínio** (o fundador faz): `vitrinefiel.com.br` no [registro.br](https://registro.br), por cerca de R$40 por ano. Estava livre em 17/11/2026.
- [x] **Ligar o GitHub Pages** (o fundador faz, uma vez só): no GitHub, abra o repositório VitrineFiel, vá em **Settings → Pages** e, em **Source**, escolha **GitHub Actions**. Depois, em **Actions**, rode de novo o "Publicar site" se ele tiver falhado. Feito em 17/11/2026.

## Passo a passo

### Fase 0: Requisitos
- [x] README com o objetivo completo (17/11/2026)
- [x] Escopo, contato, hospedagem e tecnologia definidos (17/11/2026)
- [x] Protótipo em HTML/CSS/JS de uma página (`index.html`, `styles.css`, `script.js`) como referência de visual e de textos (17/11/2026)
- [ ] Decisões pendentes acima

### Fase 1: Base do projeto em Next.js
- [x] Mover o protótipo para `prototipo/`, para servir de referência (17/11/2026)
- [x] Criar o projeto Next.js (App Router, TypeScript) na raiz do repositório: Next 16.4, React 19.3, TypeScript 7.0 (17/11/2026)
- [x] Configurar a exportação estática (`out/`) e o `basePath`. O `basePath` vem da variável `PAGES_BASE_PATH`: vazio no computador e `/VitrineFiel` no GitHub Action. Ver `next.config.ts` (17/11/2026)
- [x] Carregar as fontes com `next/font`, que as serve junto com o site, sem depender do Google Fonts, e passar as cores para variáveis CSS (`app/globals.css`) (17/11/2026)
- [x] Centralizar o WhatsApp e a mensagem em `lib/config.ts` (17/11/2026)
- [x] Rodar localmente (`npm run dev`) e conferir, e gerar o site com e sem `/VitrineFiel` (17/11/2026)

### Fase 2: Seções (componentes React)
Cada seção vira um componente, copiando os textos do protótipo:
- [x] Topo (marca e navegação): `Topo.tsx` e `SimboloMarca.tsx`
- [x] Abertura e **Comparador** (arrastar com mouse, toque e teclado; um único aceno ao carregar, que respeita "reduzir movimento"): `Abertura.tsx` e `Comparador.tsx`
- [x] O que a gestora recebe (lista de vistoria): `Entrega.tsx`
- [x] Como funciona (4 etapas): `ComoFunciona.tsx`
- [x] Nada inventado (3 regras): `NadaInventado.tsx`
- [x] Preço, garantia e limite de 3 por mês: `Preco.tsx`
- [x] Perguntas frequentes: `Perguntas.tsx`
- [x] Contato (WhatsApp) e rodapé: `Contato.tsx` e `Rodape.tsx`. Todos os botões usam `BotaoWhatsapp.tsx`
- [x] Conferido lado a lado com o protótipo em 1366 px: visual igual (17/11/2026)

### Fase 3: Conteúdo real
- [ ] Trocar as imagens provisórias do comparador por foto real e quadro de vídeo real (mesmo enquadramento, 3:2)
- [x] Colocar o WhatsApp no protótipo (`script.js`) (17/11/2026)
- [ ] Colocar o WhatsApp na versão Next.js
- [ ] Título, descrição e imagem de compartilhamento (aparece quando o link é mandado no WhatsApp)
- [ ] Favicon com o símbolo da marca

### Fase 4: Qualidade
- [ ] Testar em celular (390 px) e computador (1366 px)
- [ ] Acessibilidade: foco visível, contraste, textos alternativos e navegação por teclado
- [ ] Desempenho: imagens otimizadas e página rápida no 4G
- [ ] Revisão de textos: nenhuma promessa que não cumprimos

### Fase 5: Publicação
- [x] Criar um GitHub Action que gera o site e publica no GitHub Pages: `.github/workflows/publicar.yml` (17/11/2026)
- [x] Ligar o GitHub Pages no repositório (fundador) Feito em 17/11/2026.
- [x] Conferir o site em `https://bruno-luiz-fogaca.github.io/VitrineFiel/` (17/11/2026: no ar)
- [ ] Quando o domínio for registrado: ligar o `vitrinefiel.com.br` e remover o `basePath`

### Depois da v1 (fora do escopo agora)
- Modelo da Vitrine do cliente (página aberta, sem senha: ver R13)
- Portfólio com casos reais (só com autorização dos clientes)

## Registro de sessões
- **17/11/2026:** criado o protótipo de uma página com o visual "vistoria" e o comparador. Escritos o README e este arquivo, e levantados os requisitos R1 a R9.
- **17/11/2026 (2ª sessão):** o trabalho estava num segundo clone em `Desktop/Founder/Vitrine Fiel/05 Site/VitrineFiel`. Foi copiado para este repositório (`Desktop/Dev/Projetos/Foresi Tech/VitrineFiel`), que passa a ser **o único lugar do código do site**. Decididos R10 (WhatsApp), R11 (domínio) e R12 (medição). Apagado o clone antigo. **Fase 1 concluída:** protótipo movido para `prototipo/` e projeto Next.js criado, com geração do site testada.
  - Observação técnica: no Git Bash do Windows, rodar o build com `/VitrineFiel` exige `MSYS_NO_PATHCONV=1`, porque senão o Git Bash troca o caminho por `C:/Program Files/Git/VitrineFiel`. No GitHub Action (Linux) isso não acontece.
- **17/11/2026 (2ª sessão, cont.):** **Fase 2 concluída:** as 9 seções viraram componentes React com CSS próprio (`components/*.module.css`), e as imagens provisórias foram para `public/amostra/`. Criado o Action de publicação. O fundador autorizou commits e push a cada etapa (R9).
- **17/11/2026 (2ª sessão, cont.):** retirada a contagem de visitas e cliques (R12). A Vitrine do cliente passou a ser sempre aberta, e a palavra "privada" saiu do site (R13).
- **17/11/2026 (2ª sessão, cont.):** textos simplificados para a gestora entender o produto rápido. Abertura diz em uma frase o que fazemos; "Como funciona" passou a vir logo depois, em 3 passos; o pacote virou 4 itens curtos (roteiro + mensagem viraram "Kit para a reunião"); Nada inventado e Preço com menos texto. Saiu do site a oferta das 5 primeiras gestoras (1 atualização grátis): o fundador confirmou que ela fica só na conversa pelo WhatsApp (R14).
- **17/11/2026 (2ª sessão, cont.):** instalado e logado o GitHub CLI. GitHub Pages ligado e site publicado pela primeira vez.
