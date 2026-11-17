import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";

// As fontes são baixadas na hora de gerar o site e servidas junto com ele,
// sem depender do Google Fonts quando a gestora abre a página.
const fonteTitulo = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--fonte-titulo",
  display: "swap",
});

const fonteTexto = Public_Sans({
  subsets: ["latin"],
  variable: "--fonte-texto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitrine Fiel: páginas de captação para gestoras de temporada",
  description:
    "Página privada com os melhores imóveis da sua gestora e vídeos feitos só com as fotos reais, para mandar ao próximo proprietário. R$397, pagamento único.",
};

export const viewport: Viewport = {
  themeColor: "#eef0ec",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fonteTitulo.variable} ${fonteTexto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
