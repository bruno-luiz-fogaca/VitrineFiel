import { Abertura } from "@/components/Abertura";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Contato } from "@/components/Contato";
import { Entrega } from "@/components/Entrega";
import { NadaInventado } from "@/components/NadaInventado";
import { Perguntas } from "@/components/Perguntas";
import { Preco } from "@/components/Preco";
import { Rodape } from "@/components/Rodape";
import { Topo } from "@/components/Topo";

// A página de venda, de cima para baixo, na ordem em que a gestora lê.
export default function Inicio() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Topo />
      <main id="conteudo">
        <Abertura />
        <Entrega />
        <ComoFunciona />
        <NadaInventado />
        <Preco />
        <Perguntas />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
