import estilos from "./Entrega.module.css";

// Cada item em uma linha: o nome diz o que é, o texto diz para que serve.
const itens = [
  {
    titulo: "Página da sua gestora",
    texto: "Seus melhores imóveis e seus vídeos num link só, para mandar a qualquer proprietário.",
  },
  {
    titulo: "3 vídeos",
    texto: "De 30 a 45 segundos, feitos com as fotos reais. Um para celular e um para tela grande.",
  },
  {
    titulo: "Fotos ajustadas",
    texto: "Luz e cor corrigidas. Sem esconder defeitos e sem acrescentar nada.",
  },
  {
    titulo: "Kit para a reunião",
    texto:
      "Um guia curto do que falar ao mostrar a página ao proprietário, e o texto pronto para mandar o link a ele no WhatsApp.",
  },
];

/** O que vem no pacote, em forma de lista de vistoria com o visto de "conferido". */
export function Entrega() {
  return (
    <section id="entrega" className="secao">
      <h2 className={estilos.titulo}>O que vem no pacote</h2>
      <ul className={estilos.vistoria}>
        {itens.map((item) => (
          <li key={item.titulo}>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
