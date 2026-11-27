/* FocoNaTroca.jsx — anuncia a troca de rota: a cada mudança do pathname, o foco vai para o h1 da nova página
   (learn-tech#194, nota 1 da R19 do #193). Sem isso, quem usa leitor de tela não fica sabendo que a página mudou.
   - Na 1ª carga, o foco não se move: o leitor já começa a ler a página sozinho.
   - As páginas chegam sob demanda e com dados da API, então o h1 é esperado por até 10 s.
   - Se a pessoa mover o foco enquanto isso (o Tab, um clique), a espera para: o foco dela vale mais. O limite é
     a troca de um pedaço sob demanda: a página antiga fica na tela até ele chegar, e o foco movido nesse
     intervalo, antes do commit da nova rota, não é visto.
   - O NotFound já põe o foco no próprio h1; nesse caso, nada muda. */
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { escolherTitulo } from "./tituloDaRota";

const ESPERA_MAXIMA = 10_000;

export function FocoNaTroca() {
  const { pathname } = useLocation();
  const primeira = useRef(true);

  useEffect(() => {
    if (primeira.current) {
      primeira.current = false;
      return undefined;
    }
    const focoAntes = document.activeElement;
    let observador = null;
    let prazo = null;

    const parar = () => {
      observador?.disconnect();
      clearTimeout(prazo);
    };
    const tentar = () => {
      /* A pessoa já está em outro lugar, ou o NotFound já pôs o foco no título. */
      if (document.activeElement !== focoAntes) {
        parar();
        return;
      }
      const titulo = escolherTitulo(document.querySelectorAll("main h1"));
      if (!titulo) return;
      parar();
      if (!titulo.hasAttribute("tabindex")) titulo.setAttribute("tabindex", "-1");
      titulo.focus({ preventScroll: true });
    };

    /* Uma volta do laço depois do commit, quando a nova rota já está na tela. É um setTimeout, e não um
       requestAnimationFrame, porque este não dispara com a aba em segundo plano. */
    const volta = setTimeout(() => {
      tentar();
      if (document.activeElement !== focoAntes) return;
      observador = new MutationObserver(tentar);
      observador.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "hidden"] });
      prazo = setTimeout(parar, ESPERA_MAXIMA);
    }, 0);

    return () => {
      clearTimeout(volta);
      parar();
    };
  }, [pathname]);

  return null;
}

/* Fim de FocoNaTroca.jsx */
