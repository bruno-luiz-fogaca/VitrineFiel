import estilos from "./Perguntas.module.css";

const perguntas = [
  {
    pergunta: "A gente fecha proprietário por indicação. Para que uma página?",
    resposta:
      "A página não substitui a indicação. Ela entra logo depois: o proprietário indicado recebe o link e chega à reunião já tendo visto os seus imóveis e o seu padrão.",
  },
  {
    pergunta: "A gente já faz vídeo no Canva ou no CapCut.",
    resposta:
      "Então vocês já sabem o valor de mostrar bem os imóveis. A diferença é o tempo da sua equipe, a página pronta para proprietários e o checklist de fidelidade. A prévia é grátis para vocês compararem com o que já fazem.",
  },
  {
    pergunta: "Não quero meus números de ocupação expostos.",
    resposta: "A página é privada e abre só com link e senha. Você escolhe quais números aparecem, ou nenhum.",
  },
  {
    pergunta: "Vídeo feito com IA não parece falso?",
    resposta:
      "Usamos IA em poucas cenas, só para dar movimento, e mostramos cada uma ao lado da foto original. Se algo não bater com o real, corrigimos ou devolvemos o valor.",
  },
  {
    pergunta: "Quem já usou?",
    resposta:
      "Estamos começando agora, com as primeiras 5 gestoras. Por isso a prévia é grátis e a garantia é de devolução: o risco fica com a gente.",
  },
  {
    pergunta: "A página aparece no Airbnb?",
    resposta:
      "Não. A Vitrine é feita para proprietários, não para hóspedes, e fica fora do Airbnb. Você manda o link direto para o dono do imóvel.",
  },
];

export function Perguntas() {
  return (
    <section className={`secao ${estilos.perguntas}`}>
      <h2>Perguntas que as gestoras fazem</h2>
      {perguntas.map((item) => (
        <details key={item.pergunta}>
          <summary>{item.pergunta}</summary>
          <p>{item.resposta}</p>
        </details>
      ))}
    </section>
  );
}
