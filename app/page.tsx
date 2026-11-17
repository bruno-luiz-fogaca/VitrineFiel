import { LINK_WHATSAPP } from "@/lib/config";

// Página provisória da Fase 1: só confirma que fontes, cores e WhatsApp
// funcionam. Na Fase 2 ela é substituída pelas seções do protótipo.
export default function Inicio() {
  return (
    <main style={{ maxWidth: "var(--largura)", margin: "0 auto", padding: "64px 24px", display: "grid", gap: 24 }}>
      <h1>Vitrine Fiel: base do site pronta</h1>
      <p>
        Esta é a página provisória da Fase 1. O título usa a Bricolage Grotesque e este texto usa a Public Sans.
      </p>
      <p>
        <a href={LINK_WHATSAPP} target="_blank" rel="noopener">
          Testar o botão do WhatsApp
        </a>
      </p>
    </main>
  );
}
