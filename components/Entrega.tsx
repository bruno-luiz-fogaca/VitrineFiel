import estilos from "./Entrega.module.css";

const itens = [
  {
    titulo: "Página de captação da sua gestora",
    texto:
      "Um link para mandar a qualquer proprietário. Mostra seus melhores imóveis, seus vídeos e os números que você escolher: ocupação, nota média, quantidade de imóveis. Ou nenhum número, se preferir.",
  },
  {
    titulo: "3 vídeos-vitrine",
    texto:
      "De 30 a 45 segundos, um em pé para o celular e um deitado para a tela. Feitos a partir das suas fotos, com movimento de câmera, textos e música.",
  },
  {
    titulo: "Fotos otimizadas",
    texto: "Luz, cor e nitidez ajustadas nas fotos desses imóveis. Sem esconder defeitos e sem acrescentar nada.",
  },
  {
    titulo: "Roteiro de reunião e mensagem pronta",
    texto:
      "Uma página com o que falar ao apresentar a Vitrine, e o texto para mandar o link ao proprietário pelo WhatsApp.",
  },
  {
    titulo: "Checklist de conferência",
    texto:
      "Cada cena dos vídeos ao lado da foto original que a originou. Você vê, antes de usar, que nada foi inventado.",
  },
];

/** O que a gestora recebe, em forma de lista de vistoria com o visto de "conferido". */
export function Entrega() {
  return (
    <section id="entrega" className="secao">
      <div className="secao-cabeca">
        <h2>O que a sua gestora recebe</h2>
        <p>Tudo pronto para usar na próxima reunião com um dono de imóvel.</p>
      </div>
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
