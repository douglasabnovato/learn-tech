/* tituloDaRota.test.js: qual h1 recebe o foco na troca de rota (learn-tech#194). Roda sem DOM, com h1 falsos. */
import { describe, expect, it } from "vitest";
import { escolherTitulo, tituloVisivel } from "./tituloDaRota";

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

/* Fim de tituloDaRota.test.js */
