# Vitrine Fiel: site

## Objetivo

O site da Vitrine Fiel tem **uma tarefa principal**: fazer a gestora de temporada pedir a **prévia grátis de 15 segundos**. Para isso, ele precisa convencer em poucos minutos de três coisas:

1. **Isto resolve um problema meu.** A gestora precisa de material para convencer donos de imóvel a deixar o apartamento com ela.
2. **É fiel ao real.** Nada é inventado, e ela consegue conferir cada cena ao lado da foto original.
3. **O risco é baixo.** A prévia é grátis, o preço é único (R$397) e a garantia de fidelidade devolve o dinheiro.

O site também serve como **vitrine da própria Vitrine Fiel**. A gestora decide pela qualidade do que vê, então ele precisa parecer tão premium quanto o produto que vendemos.

## Para quem

- **Quem decide:** sócios ou gestores de empresas de gestão de temporada com **20 a 40 imóveis**, no Brasil inteiro. Começamos pelo Paraná e por Santa Catarina.
- **Como chegam ao site:** quase sempre pelo celular, a partir de um link mandado no Instagram ou no WhatsApp durante a prospecção.
- **O que perguntam antes de comprar:**
  - "Eu fecho por indicação, para que uma página?"
  - "Eu faço no Canva."
  - "Não quero mostrar meus números."
  - "Vídeo de IA parece falso."
  - "Quem já usou?"

## O que vendemos

**Vitrine de Captação**, por R$397 em pagamento único:
- uma página só da gestora, aberta, com os melhores imóveis dela;
- 3 vídeos feitos só com as fotos reais;
- fotos otimizadas;
- roteiro de reunião e mensagem pronta;
- checklist de conferência, com cada cena ao lado da foto original.

**Extras:** R$147 por atualização ou por imóvel novo, e R$97 por ano para manter a página no ar depois de 12 meses.

## Regras que o site nunca quebra

- Não mostra imagem inventada como se fosse imóvel real. Imagens de exemplo vêm sempre com aviso.
- Não inventa clientes, números, depoimentos ou "visto em".
- Não promete resultado ("mais contratos garantidos"). Promete só o que entregamos.
- Não cria urgência falsa. O limite de 3 Vitrines por mês é real.

## Estado atual

O site é feito em **Next.js + React + TypeScript** e gerado como arquivos estáticos para o GitHub Pages. O primeiro protótipo, em HTML puro, fica em `prototipo/` como referência de visual e de textos. O andamento fica registrado em [`PROGRESSO.md`](PROGRESSO.md).

## Onde fica cada coisa

| Pasta ou arquivo | O que tem |
|---|---|
| `app/page.tsx` | A página do site |
| `app/layout.tsx` | O que vale para o site inteiro: fontes, título e descrição |
| `app/globals.css` | Cores e estilos gerais |
| `lib/config.ts` | **WhatsApp e mensagem pronta.** Para trocar o número, mude aqui |
| `next.config.ts` | Configuração da geração do site |
| `prototipo/` | O protótipo antigo, só para consulta |

## Ver no computador

Precisa do Node.js instalado. No terminal do VS Code:

1. `npm install`: baixa o que o projeto usa. Só na primeira vez.
2. `npm run dev`: abre o site em **http://localhost:3000**. Cada mudança no código aparece na hora.
3. `npm run build`: gera o site pronto na pasta `out/`, como vai para a internet. Para conferir essa versão, rode `npm start`.

## Identidade visual

A referência é uma **vistoria de imóvel**: papel claro e frio, tinta azul-petróleo e o amarelo de fita métrica para marcar o que foi conferido.

- **Cores:** papel `#eef0ec`, tinta `#17324d`, fita `#f2c230` e carimbo `#2f6b4f`.
- **Fontes:** Bricolage Grotesque nos títulos e Public Sans no texto (Google Fonts, licença aberta).
