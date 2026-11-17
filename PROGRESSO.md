# Progresso do site da Vitrine Fiel

> **Leia este arquivo primeiro** em qualquer conversa nova sobre o site. Ele diz onde estamos e qual é o próximo passo.
> Atualize-o ao terminar cada etapa: marque a caixa, coloque a data e registre as decisões novas.

Última atualização: **17/11/2026**

## Onde estamos agora
**Fase 1 (base em Next.js):** concluída. O site roda com uma página provisória.
**Próximo passo:** **Fase 2**, que passa cada seção do protótipo (`prototipo/index.html`) para um componente React, começando pelo Topo e pela Abertura com o Comparador.
**Fase 0:** falta só o fundador buscar as fotos do imóvel de exemplo, o que não trava as Fases 1 e 2.
**Tarefas do fundador (fora do código):** registrar o domínio, criar a conta no GoatCounter e buscar as fotos. Ver "Decisões pendentes".

## Decisões tomadas (requisitos)
| # | Tema | Decisão | Data |
|---|---|---|---|
| R1 | Objetivo | Fazer a gestora pedir a **prévia grátis de 15 s**. Ver o README | 17/11/2026 |
| R2 | Escopo da v1 | **Só a página de venda**, de uma página só. As Vitrines privadas dos clientes vêm depois da 1ª venda | 17/11/2026 |
| R3 | Contato | **Só WhatsApp**: botão com mensagem pronta (`wa.me`) | 17/11/2026 |
| R4 | Hospedagem | **GitHub Pages**, pelo repositório `bruno-luiz-fogaca/VitrineFiel` | 17/11/2026 |
| R5 | Tecnologia | **Next.js + React + TypeScript**, em **exportação estática** (`output: "export"`), porque o GitHub Pages só serve arquivos estáticos. O fundador quer o resultado mais profissional possível | 17/11/2026 |
| R6 | Visual | Visual "vistoria": papel `#eef0ec`, tinta `#17324d`, fita `#f2c230`, carimbo `#2f6b4f`. Fontes Bricolage Grotesque (títulos) e Public Sans (texto). O elemento marcante é o **comparador** que se arrasta (cena do vídeo × foto original) | 17/11/2026 |
| R7 | Público | Gestoras de 20 a 40 imóveis que chegam **pelo celular** (link mandado no Instagram ou no WhatsApp). O site é pensado primeiro para celular | 17/11/2026 |
| R8 | Honestidade | Nada de imagem inventada, depoimento falso, promessa de resultado ou urgência falsa. Imagem de exemplo sempre com aviso | 17/11/2026 |
| R9 | Git | O fundador autorizou o Claude a **commitar e publicar (push) a cada etapa** concluída do site | 17/11/2026 |
| R10 | WhatsApp | Por enquanto, o número pessoal do fundador: **(41) 98409-5933**, no código `5541984095933`. Trocar quando houver um número comercial | 17/11/2026 |
| R11 | Domínio | **`vitrinefiel.com.br`**. Até ele estar registrado e ligado, o site fica em `bruno-luiz-fogaca.github.io/VitrineFiel/` | 17/11/2026 |
| R12 | Medição | **GoatCounter**: grátis e sem cookies, então dispensa o aviso de cookies da LGPD. Mede visitas, origem (Instagram, WhatsApp), aparelho e **cliques no botão do WhatsApp**, o número principal | 17/11/2026 |

## Decisões pendentes
- [x] ~~Número de WhatsApp comercial~~: decidido em R10.
- [x] ~~Medição de visitas~~: decidido em R12.
- [ ] **Fotos do imóvel de exemplo** (o fundador busca): fotos reais do Unsplash ou do Pexels, de 8 a 15 do mesmo apartamento, salvas em `Desktop/Founder/Vitrine Fiel/04 Amostras/Fotos do imóvel de exemplo`.
- [ ] **Registrar o domínio** (o fundador faz): `vitrinefiel.com.br` no [registro.br](https://registro.br), por cerca de R$40 por ano. Estava livre em 17/11/2026.
- [ ] **Criar a conta no GoatCounter** (o fundador faz): em [goatcounter.com](https://www.goatcounter.com), com o código `vitrinefiel`. O painel fica em `vitrinefiel.goatcounter.com`.

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
- [ ] Topo (marca e navegação)
- [ ] Abertura e **Comparador** (arrastar com mouse, toque e teclado; um único aceno ao carregar, que respeita "reduzir movimento")
- [ ] O que a gestora recebe (lista de vistoria)
- [ ] Como funciona (4 etapas)
- [ ] Nada inventado (3 regras)
- [ ] Preço, garantia e limite de 3 por mês
- [ ] Perguntas frequentes
- [ ] Contato (WhatsApp) e rodapé

### Fase 3: Conteúdo real
- [ ] Trocar as imagens provisórias do comparador por foto real e quadro de vídeo real (mesmo enquadramento, 3:2)
- [x] Colocar o WhatsApp no protótipo (`script.js`) (17/11/2026)
- [ ] Colocar o WhatsApp na versão Next.js
- [ ] GoatCounter: contar as visitas e os cliques em cada botão "Pedir prévia" (topo, abertura, preço e contato), para saber qual botão funciona melhor
- [ ] Título, descrição e imagem de compartilhamento (aparece quando o link é mandado no WhatsApp)
- [ ] Favicon com o símbolo da marca

### Fase 4: Qualidade
- [ ] Testar em celular (390 px) e computador (1366 px)
- [ ] Acessibilidade: foco visível, contraste, textos alternativos e navegação por teclado
- [ ] Desempenho: imagens otimizadas e página rápida no 4G
- [ ] Revisão de textos: nenhuma promessa que não cumprimos

### Fase 5: Publicação
- [ ] Criar um GitHub Action que gera o site e publica no GitHub Pages (com a autorização do fundador para o push)
- [ ] Conferir o site em `https://bruno-luiz-fogaca.github.io/VitrineFiel/`
- [ ] Quando o domínio for registrado: ligar o `vitrinefiel.com.br` e remover o `basePath`

### Depois da v1 (fora do escopo agora)
- Modelo da Vitrine privada do cliente (página com senha)
- Formulário de contato
- Portfólio com casos reais (só com autorização dos clientes)

## Registro de sessões
- **17/11/2026:** criado o protótipo de uma página com o visual "vistoria" e o comparador. Escritos o README e este arquivo, e levantados os requisitos R1 a R9.
- **17/11/2026 (2ª sessão):** o trabalho estava num segundo clone em `Desktop/Founder/Vitrine Fiel/05 Site/VitrineFiel`. Foi copiado para este repositório (`Desktop/Dev/Projetos/Foresi Tech/VitrineFiel`), que passa a ser **o único lugar do código do site**. Decididos R10 (WhatsApp), R11 (domínio) e R12 (GoatCounter). Apagado o clone antigo. **Fase 1 concluída:** protótipo movido para `prototipo/` e projeto Next.js criado, com geração do site testada.
  - Observação técnica: no Git Bash do Windows, rodar o build com `/VitrineFiel` exige `MSYS_NO_PATHCONV=1`, porque senão o Git Bash troca o caminho por `C:/Program Files/Git/VitrineFiel`. No GitHub Action (Linux) isso não acontece.
