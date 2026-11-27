/* tituloDaRota.test.js: o que recebe o foco na troca de rota (learn-tech#194 e #196). Roda sem DOM, com h1 falsos. */
import { describe, expect, it } from "vitest";
import { escolherLink, escolherTitulo, focoDaPessoa, tituloVisivel } from "./tituloDaRota";

const h1 = ({ naTela = true, escondidoEm = null, nome = "t" } = {}) => ({
  nome,
  getClientRects: () => (naTela ? [{}] : []),
  closest: (seletor) => (escondidoEm && seletor.includes(escondidoEm) ? {} : null),
});

describe("escolherTitulo", () => {
  it("pula o h1 que não ocupa a tela (o Carregando... escondido) e pega o próximo", () => {
    expect(escolherTitulo([h1({ naTela: false, nome: "carregando" }), h1({ nome: "programa" })]).nome).toBe("programa");
  });
  it("pula o h1 dentro de um trecho escondido do leitor de tela", () => {
    expect(tituloVisivel(h1({ escondidoEm: "aria-hidden" }))).toBe(false);
    expect(tituloVisivel(h1({ escondidoEm: "inert" }))).toBe(false);
  });
  it("devolve null sem um h1 na tela, para a espera continuar", () => {
    expect(escolherTitulo([h1({ naTela: false })])).toBeNull();
    expect(escolherTitulo([])).toBeNull();
    expect(escolherTitulo(undefined)).toBeNull();
  });
});

const link = (href, opcoes) => ({ ...h1(opcoes), getAttribute: (nome) => (nome === "href" ? href : null) });

describe("escolherLink (o card de origem no Voltar)", () => {
  it("pega o 1º link visível com o mesmo href e pula o escondido", () => {
    const lista = [
      link("/program/web/2"),
      link("/program/web/1", { naTela: false, nome: "oculto" }),
      link("/program/web/1", { nome: "card" }),
    ];
    expect(escolherLink(lista, "/program/web/1").nome).toBe("card");
  });
  it("devolve null sem href guardado ou sem o link na página", () => {
    expect(escolherLink([link("/a")], null)).toBeNull();
    expect(escolherLink([link("/a")], "/b")).toBeNull();
  });
});

describe("focoDaPessoa", () => {
  const body = { nome: "body" };
  const origem = { nome: "link do menu" };
  it("o body e a origem da navegação não contam: o foco ainda pode ir para o título", () => {
    expect(focoDaPessoa(body, origem, body)).toBe(false);
    expect(focoDaPessoa(origem, origem, body)).toBe(false);
    expect(focoDaPessoa(null, origem, body)).toBe(false);
  });
  it("qualquer outro elemento é o foco da pessoa (o Tab no cabeçalho, ou o h1 que o NotFound já focou)", () => {
    expect(focoDaPessoa({ nome: "cabeçalho" }, origem, body)).toBe(true);
    expect(focoDaPessoa({ nome: "h1" }, null, body)).toBe(true);
  });
});

/* Fim de tituloDaRota.test.js */
