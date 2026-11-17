import estilos from "./NadaInventado.module.css";

const regras = [
  "Usamos só as suas fotos.",
  "Nenhum móvel, cômodo ou vista que não exista. Nenhum defeito escondido.",
  "Você recebe cada cena do vídeo ao lado da foto original, para conferir.",
];

export function NadaInventado() {
  return (
    <section className={`secao ${estilos.fiel}`}>
      <div className={estilos.texto}>
        <h2>Nada inventado. Tudo conferido.</h2>
        <p>
          Vídeo feito com IA pode mostrar coisas que não existem. Na frente de um proprietário, isso queima a sua
          credibilidade. Por isso seguimos três regras.
        </p>
      </div>
      <ul className={estilos.regras}>
        {regras.map((regra) => (
          <li key={regra}>{regra}</li>
        ))}
      </ul>
    </section>
  );
}
