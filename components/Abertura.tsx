import { BotaoWhatsapp } from "./BotaoWhatsapp";
import { Comparador } from "./Comparador";
import estilos from "./Abertura.module.css";

export function Abertura() {
  return (
    <section className={estilos.abertura}>
      <div className={estilos.texto}>
        <h1>Vídeos e uma página dos seus imóveis, para fechar com novos proprietários.</h1>
        <p className={estilos.lead}>
          Você manda as fotos que já tem. A gente devolve 3 vídeos e uma página com os seus melhores imóveis, para
          você mandar ao dono do imóvel antes da reunião.
        </p>
        <div className={estilos.acoes}>
          <BotaoWhatsapp>Pedir prévia grátis</BotaoWhatsapp>
          <a className="link" href="#como">
            Ver como funciona
          </a>
        </div>
        <p className="nota">Para gestoras de aluguel por temporada. A prévia de 15 segundos é grátis.</p>
      </div>
      <Comparador />
    </section>
  );
}
