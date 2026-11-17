import { LINK_WHATSAPP } from "@/lib/config";

type Props = {
  children: React.ReactNode;
  tamanho?: "pequeno" | "normal" | "grande";
};

/** Botão que abre o WhatsApp com a mensagem pronta. */
export function BotaoWhatsapp({ children, tamanho = "normal" }: Props) {
  const classe = tamanho === "normal" ? "botao" : `botao botao-${tamanho}`;
  return (
    <a className={classe} href={LINK_WHATSAPP} target="_blank" rel="noopener">
      {children}
    </a>
  );
}
