/* FocoNaTroca.jsx — anuncia a troca de rota: a cada mudança do pathname, o foco vai para o h1 da nova página
   (learn-tech#194, nota 1 da R19 do #193). Sem isso, quem usa leitor de tela não fica sabendo que a página mudou.
   - Na 1ª carga, o foco não se move: o leitor já começa a ler a página sozinho.
   - As páginas chegam sob demanda e com dados da API, então o h1 é esperado por até 10 s.
   - O foco da pessoa vale mais (learn-tech#196, nota 1 da R19 do #195): a origem da navegação é guardada no
     clique, no Enter ou no "Voltar", e não no commit da nova rota. Se, depois disso, o foco estiver em outro
     lugar que não a origem nem o body (o Tab no cabeçalho enquanto o pedaço baixa), nada muda.
   - No "Voltar" e no "Avançar" (POP), o foco volta ao link que abriu a página de onde se saiu, como o card na
     lista de programas (nota 2). Se ele não aparecer em 2 s, o foco vai para o h1.
   - O NotFound já põe o foco no próprio h1; pela regra acima, nada muda. */
import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { escolherLink, escolherTitulo, focoDaPessoa } from "./tituloDaRota";

const ESPERA_MAXIMA = 10_000;
const ESPERA_DO_LINK = 2_000;

export function FocoNaTroca() {
  const { pathname, key } = useLocation();
  const tipo = useNavigationType();
  const primeira = useRef(true);
  /* O elemento com o foco quando a navegação começou, e a chave da entrada do histórico de onde se saiu. */
  const origem = useRef(null);
  const chaveAtual = useRef(key);
  /* Por entrada do histórico, o href do link que a pessoa seguiu a partir dela. Fica só na memória. */
  const linkSeguido = useRef(new Map());

  useEffect(() => {
    const noClique = (evento) => {
      const link = evento.target.closest?.("a[href]");
      if (evento.type === "keydown" && evento.key !== "Enter") return;
      origem.current = link ?? document.activeElement;
      if (link) linkSeguido.current.set(chaveAtual.current, link.getAttribute("href"));
    };
    const noVoltar = () => {
      origem.current = document.activeElement;
    };
    document.addEventListener("click", noClique, true);
    document.addEventListener("keydown", noClique, true);
    window.addEventListener("popstate", noVoltar, true);
    return () => {
      document.removeEventListener("click", noClique, true);
      document.removeEventListener("keydown", noClique, true);
      window.removeEventListener("popstate", noVoltar, true);
    };
  }, []);

  useEffect(() => {
    chaveAtual.current = key;
  }, [key]);

  useEffect(() => {
    if (primeira.current) {
      primeira.current = false;
      return undefined;
    }
    const daOrigem = origem.current;
    origem.current = null;
    const hrefDeVolta = tipo === "POP" ? linkSeguido.current.get(key) : null;
    let procurarLink = Boolean(hrefDeVolta);
    let observador = null;
    let prazo = null;
    let prazoDoLink = null;

    const parar = () => {
      observador?.disconnect();
      clearTimeout(prazo);
      clearTimeout(prazoDoLink);
    };
    /* Devolve true quando terminou: o foco foi posto, ou a pessoa já está em outro lugar. */
    const tentar = () => {
      if (focoDaPessoa(document.activeElement, daOrigem, document.body)) {
        parar();
        return true;
      }
      const alvo = (procurarLink && escolherLink(document.querySelectorAll("main a[href]"), hrefDeVolta)) || null;
      if (alvo) {
        parar();
        /* Sem o preventScroll: o card de origem aparece na tela, para a pessoa seguir a lista de onde parou. */
        alvo.focus();
        return true;
      }
      if (procurarLink) return false;
      const titulo = escolherTitulo(document.querySelectorAll("main h1"));
      if (!titulo) return false;
      parar();
      if (!titulo.hasAttribute("tabindex")) titulo.setAttribute("tabindex", "-1");
      titulo.focus({ preventScroll: true });
      return true;
    };

    /* Uma volta do laço depois do commit, quando a nova rota já está na tela (e o NotFound já focou o h1). É um
       setTimeout, e não um requestAnimationFrame, porque este não dispara com a aba em segundo plano. */
    const volta = setTimeout(() => {
      if (tentar()) return;
      observador = new MutationObserver(tentar);
      observador.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "hidden"] });
      prazo = setTimeout(parar, ESPERA_MAXIMA);
      if (procurarLink) {
        prazoDoLink = setTimeout(() => {
          procurarLink = false;
          tentar();
        }, ESPERA_DO_LINK);
      }
    }, 0);

    return () => {
      clearTimeout(volta);
      parar();
    };
    // A troca é medida pelo pathname; key e tipo mudam junto com ele.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

/* Fim de FocoNaTroca.jsx */
