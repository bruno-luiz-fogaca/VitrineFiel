import estilos from "./ComoFunciona.module.css";

const etapas = [
  {
    titulo: "Você manda o link",
    texto: "Da pasta de fotos dos seus 3 melhores imóveis, e um print dos números que quer mostrar.",
  },
  {
    titulo: "Prévia grátis em 2 dias",
    texto: "15 segundos de um imóvel seu, já com a cena ao lado da foto original. Você decide se segue.",
  },
  {
    titulo: "Entrega em 7 dias úteis",
    texto: "Página, vídeos, fotos, roteiro e checklist, depois do pagamento.",
  },
  {
    titulo: "Você manda ao proprietário",
    texto: "Antes ou depois da reunião, com a mensagem pronta.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como" className={`secao ${estilos.faixa}`}>
      <div className="secao-cabeca">
        <h2>Como funciona</h2>
        <p>Você só manda o link das fotos. O resto é com a gente.</p>
      </div>
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
