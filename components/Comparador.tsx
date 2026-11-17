"use client";

import { useEffect, useRef, useState } from "react";
import { arquivo } from "@/lib/config";
import estilos from "./Comparador.module.css";

/**
 * Comparador: a cena do vídeo à esquerda e a foto original à direita.
 * Dá para arrastar com o mouse, com o dedo ou com as setas do teclado.
 * Ao carregar, o divisor "acena" uma vez para mostrar que dá para arrastar,
 * a não ser que a pessoa tenha pedido ao aparelho para reduzir movimento.
 */
export function Comparador() {
  const [corte, setCorte] = useState(50);
  const [acenando, setAcenando] = useState(false);
  const quadro = useRef<HTMLDivElement>(null);
  const arrastando = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setAcenando(true);
    const t1 = setTimeout(() => setCorte(68), 700);
    const t2 = setTimeout(() => setCorte(50), 1700);
    const t3 = setTimeout(() => setAcenando(false), 2700);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  function porPonteiro(e: React.PointerEvent) {
    const r = quadro.current!.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - r.left, 0), r.width);
    setAcenando(false);
    setCorte(Math.round((x / r.width) * 100));
  }

  const estiloCorte = { "--corte": `${corte}%` } as React.CSSProperties;

  return (
    <figure className={`${estilos.comparador} ${acenando ? estilos.acenando : ""}`}>
      <div
        ref={quadro}
        className={estilos.quadro}
        onPointerDown={(e) => {
          arrastando.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          porPonteiro(e);
        }}
        onPointerMove={(e) => arrastando.current && porPonteiro(e)}
        onPointerUp={() => (arrastando.current = false)}
        onPointerCancel={() => (arrastando.current = false)}
      >
        <img
          className={estilos.camada}
          src={arquivo("/amostra/foto-original-1.svg")}
          alt="Foto original da sala do imóvel de exemplo"
          width={1200}
          height={800}
        />
        <div className={`${estilos.camada} ${estilos.cena}`} style={estiloCorte}>
          <img
            src={arquivo("/amostra/cena-video-1.svg")}
            alt="Mesma sala no quadro do vídeo, com movimento de câmera"
            width={1200}
            height={800}
          />
        </div>
        <div className={estilos.divisor} style={estiloCorte} aria-hidden="true">
          <span />
        </div>
        <span className={`${estilos.etiqueta} ${estilos.esquerda}`}>Cena do vídeo</span>
        <span className={`${estilos.etiqueta} ${estilos.direita}`}>Foto original</span>
      </div>
      <label className={estilos.controle}>
        <span className="visualmente-oculto">Comparar cena do vídeo com a foto original</span>
        <input
          type="range"
          min={0}
          max={100}
          value={corte}
          onChange={(e) => {
            setAcenando(false);
            setCorte(Number(e.target.value));
          }}
        />
      </label>
      <figcaption>
        Arraste para comparar. Cada cena da Vitrine é conferida contra a foto original antes da entrega.
      </figcaption>
    </figure>
  );
}
