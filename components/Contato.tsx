import { BotaoWhatsapp } from "./BotaoWhatsapp";
import estilos from "./Contato.module.css";

export function Contato() {
  return (
    <section id="contato" className={`secao ${estilos.contato}`}>
      <h2>Veja um imóvel seu na Vitrine antes de pagar</h2>
      <p>
        Mande o link de um anúncio ou de uma pasta de fotos. Em até 2 dias você recebe uma prévia de 15 segundos,
        sem compromisso.
      </p>
      <BotaoWhatsapp tamanho="grande">
        Pedir prévia grátis pelo WhatsApp
      </BotaoWhatsapp>
    </section>
  );
}
