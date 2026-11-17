// Configuração: coloque aqui o WhatsApp comercial (só números, com DDI e DDD),
// por exemplo "5541999999999". Enquanto estiver vazio, os botões levam à seção de contato.
const WHATSAPP = "5541984095933";
const MENSAGEM = "Oi! Vi o site da Vitrine Fiel e quero uma prévia grátis de 15 segundos com um imóvel meu.";

(function configurarContato() {
  const botoes = document.querySelectorAll("[data-whatsapp]");
  if (WHATSAPP) {
    const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(MENSAGEM);
    botoes.forEach((b) => {
      b.href = url;
      b.target = "_blank";
      b.rel = "noopener";
    });
  } else {
    const aviso = document.querySelector("[data-contato-pendente]");
    if (aviso) aviso.hidden = false;
  }
})();

(function comparador() {
  const fig = document.querySelector("[data-comparador]");
  if (!fig) return;
  const controle = fig.querySelector("[data-controle]");
  const cena = fig.querySelector(".camada-cena");
  const divisor = fig.querySelector(".divisor");
  const quadro = fig.querySelector(".comparador-quadro");

  function aplicar(valor) {
    cena.style.setProperty("--corte", valor + "%");
    divisor.style.setProperty("--corte", valor + "%");
  }

  controle.addEventListener("input", () => aplicar(controle.value));

  // Arrastar direto sobre a imagem
  let arrastando = false;
  function porPonteiro(e) {
    const r = quadro.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - r.left, 0), r.width);
    const v = Math.round((x / r.width) * 100);
    controle.value = v;
    aplicar(v);
  }
  quadro.addEventListener("pointerdown", (e) => { arrastando = true; quadro.setPointerCapture(e.pointerId); porPonteiro(e); });
  quadro.addEventListener("pointermove", (e) => { if (arrastando) porPonteiro(e); });
  quadro.addEventListener("pointerup", () => { arrastando = false; });
  quadro.style.touchAction = "pan-y";

  // Um único aceno ao carregar, para mostrar que dá para arrastar
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!semMovimento) {
    fig.classList.add("acenando");
    setTimeout(() => aplicar(68), 700);
    setTimeout(() => aplicar(50), 1700);
    setTimeout(() => fig.classList.remove("acenando"), 2700);
  }
})();
