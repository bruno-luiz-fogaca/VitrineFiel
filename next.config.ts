import type { NextConfig } from "next";

// O GitHub Pages só serve arquivos prontos, então o site é exportado como
// HTML/CSS/JS estático na pasta "out/".
//
// PAGES_BASE_PATH: enquanto o domínio vitrinefiel.com.br não estiver ligado,
// o site fica em bruno-luiz-fogaca.github.io/VitrineFiel/, e o GitHub Action
// define PAGES_BASE_PATH="/VitrineFiel". No computador (npm run dev) fica vazio.
// Quando o domínio estiver no ar, o Action deixa de definir essa variável.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
