import estilos from "./ComoFunciona.module.css";

// Os 3 passos são a explicação do produto inteiro: o que a gestora faz,
// o que a gente faz e o que ela ganha no fim.
const etapas = [
  {
    titulo: "Você manda as fotos",
    texto: "As fotos que você já tem dos seus 3 melhores imóveis. Pode ser o link do anúncio.",
  },
  {
    titulo: "A gente faz os vídeos e a página",
    texto: "Prévia grátis em 2 dias. Tudo pronto em 7 dias úteis depois do pagamento.",
  },
  {
    titulo: "Você manda o link ao proprietário",
    texto: "Pelo WhatsApp, antes da reunião. Ele chega já tendo visto o seu trabalho.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como" className={`secao ${estilos.faixa}`}>
      <h2 className={estilos.titulo}>Como funciona</h2>
      <ol className={estilos.etapas}>
        {etapas.map((etapa) => (
          <li key={etapa.titulo}>
            <h3>{etapa.titulo}</h3>
            <p>{etapa.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
