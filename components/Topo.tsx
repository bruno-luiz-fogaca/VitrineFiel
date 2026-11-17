import { BotaoWhatsapp } from "./BotaoWhatsapp";
import { SimboloMarca } from "./SimboloMarca";
import estilos from "./Topo.module.css";

export function Topo() {
  return (
    <header className={estilos.topo}>
      <a className={estilos.marca} href="#" aria-label="Vitrine Fiel, início">
        <SimboloMarca className={estilos.simbolo} />
        Vitrine Fiel
      </a>
      <nav className={estilos.nav} aria-label="Seções">
        <a href="#como">Como funciona</a>
        <a href="#entrega">O que vem no pacote</a>
        <a href="#preco">Preço</a>
        <BotaoWhatsapp tamanho="pequeno">
          Pedir prévia grátis
        </BotaoWhatsapp>
      </nav>
    </header>
  );
}
