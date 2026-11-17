import { BotaoWhatsapp } from "./BotaoWhatsapp";
import estilos from "./Preco.module.css";

const extras = [
  { item: "Atualizar números ou incluir um imóvel novo", valor: "R$147 por vez" },
  { item: "Manter a página no ar depois de 12 meses", valor: "R$97 por ano, ou você leva os arquivos" },
  { item: "Nota fiscal", valor: "Disponível" },
];

export function Preco() {
  return (
    <section id="preco" className="secao">
      <div className="secao-cabeca">
        <h2>Preço</h2>
        <p>Pagamento único. Sem mensalidade.</p>
      </div>

      <div className={estilos.quadro}>
        <div className={estilos.principal}>
          <p className={estilos.nome}>Vitrine de Captação</p>
          <p className={estilos.valor}>
            <span>R$</span>397
          </p>
          <p>Página privada com hospedagem por 12 meses, 3 vídeos, fotos otimizadas, roteiro de reunião e checklist.</p>
          <BotaoWhatsapp>Pedir prévia grátis</BotaoWhatsapp>
        </div>
        <dl className={estilos.extras}>
          {extras.map((extra) => (
            <div key={extra.item}>
              <dt>{extra.item}</dt>
              <dd>{extra.valor}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={estilos.garantia}>
        <h3>Garantia de fidelidade</h3>
        <p>
          Se alguma cena mostrar algo diferente da foto original, como cômodo, móvel, vista ou tamanho, corrigimos
          em até 2 dias úteis. Se não der para corrigir, devolvemos 100% do valor.
        </p>
      </div>

      <p className={estilos.fundadoras}>
        Fazemos no máximo 3 Vitrines por mês, para conferir cada cena com calma. As 5 primeiras gestoras ganham 1
        atualização sem custo, em troca de autorizar o uso do visual no nosso portfólio (sem os seus números) e de
        nos dar a sua opinião sincera.
      </p>
    </section>
  );
}
