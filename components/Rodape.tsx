import estilos from "./Rodape.module.css";

export function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <p>Vitrine Fiel. Páginas de captação para gestoras de temporada.</p>
      <p className="nota">As imagens desta página são de um imóvel de exemplo.</p>
    </footer>
  );
}
