import { BotaoWhatsapp } from "./BotaoWhatsapp";
import { Comparador } from "./Comparador";
import estilos from "./Abertura.module.css";

export function Abertura() {
  return (
    <section className={estilos.abertura}>
      <div className={estilos.texto}>
        <h1>Seus imóveis, do jeito que são. Prontos para o próximo proprietário.</h1>
        <p className={estilos.lead}>
          A Vitrine de Captação é uma página privada com os melhores imóveis da sua gestora, 3 vídeos feitos só
          com as fotos reais e os números que você escolher mostrar. Você manda o link antes ou depois da
          reunião, e o dono do imóvel vê o padrão do seu trabalho.
        </p>
        <div className={estilos.acoes}>
          <BotaoWhatsapp local="abertura">Pedir prévia grátis de 15 segundos</BotaoWhatsapp>
          <a className="link" href="#preco">
            Ver preço
          </a>
        </div>
        <p className="nota">Para gestoras de temporada de 20 a 40 imóveis, em todo o Brasil.</p>
      </div>
      <Comparador />
    </section>
  );
}
