// Configurações do site num lugar só. Para trocar o número ou a mensagem,
// mude aqui e todos os botões "Pedir prévia" acompanham.

/** WhatsApp que recebe os pedidos: só números, com DDI (55) e DDD (41). */
export const WHATSAPP = "5541984095933";

/** Mensagem que já vem escrita quando a gestora abre o WhatsApp. */
export const MENSAGEM_WHATSAPP =
  "Oi! Vi o site da Vitrine Fiel e quero uma prévia grátis de 15 segundos com um imóvel meu.";

export const LINK_WHATSAPP = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`;

/** Endereço definitivo do site (usado no compartilhamento do link). */
export const SITE_URL = "https://vitrinefiel.com.br";

/** Prefixo do endereço no GitHub Pages ("/VitrineFiel"), vazio no computador. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Endereço de um arquivo da pasta public/, já com o prefixo do GitHub Pages. */
export function arquivo(caminho: string) {
  return `${BASE_PATH}${caminho}`;
}
