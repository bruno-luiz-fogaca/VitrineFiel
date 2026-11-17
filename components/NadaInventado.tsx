import estilos from "./NadaInventado.module.css";

const regras = [
  "Usamos só as suas fotos. A IA entra em 2 ou 3 cenas por vídeo, só para dar movimento.",
  "Nenhum móvel, cômodo, vista ou tamanho diferente do real. Nenhum defeito escondido.",
  "Toda cena vai para o checklist ao lado da foto original, para você conferir.",
];

export function NadaInventado() {
  return (
    <section className={`secao ${estilos.fiel}`}>
      <div className={estilos.texto}>
        <h2>Nada inventado. Tudo conferido.</h2>
        <p>
          Vídeos feitos com inteligência artificial podem criar cômodos, móveis e vistas que não existem. Na
          frente de um proprietário, isso queima a sua credibilidade. Por isso a Vitrine segue três regras:
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
