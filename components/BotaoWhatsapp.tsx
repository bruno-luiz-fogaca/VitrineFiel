import { LINK_WHATSAPP } from "@/lib/config";

type Props = {
  children: React.ReactNode;
  /** Onde o botão fica na página. Na Fase 3, o GoatCounter usa isso para
   *  contar qual botão "Pedir prévia" recebe mais cliques. */
  local: "topo" | "abertura" | "preco" | "contato";
  tamanho?: "pequeno" | "normal" | "grande";
};

/** Botão que abre o WhatsApp com a mensagem pronta. */
export function BotaoWhatsapp({ children, local, tamanho = "normal" }: Props) {
  const classe = tamanho === "normal" ? "botao" : `botao botao-${tamanho}`;
  return (
    <a className={classe} href={LINK_WHATSAPP} target="_blank" rel="noopener" data-local={local}>
      {children}
    </a>
  );
}
