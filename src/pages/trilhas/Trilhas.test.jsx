/* Trilhas.test.jsx — trilhas por objetivo (#132): tempo de cada passo, passos resolvidos pela cópia local
   e a página com objetivo, ordem e tempo estimado. Renderiza no servidor, sem dependência nova. */
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Trilhas } from "./Trilhas";
import { TrilhasHome } from "../home/trilhas/TrilhasHome";
import trilhas from "../../constants/trilhasData";
import blog from "../../constants/blogData";
import { CATALOGO_LOCAL } from "../../services/conteudo";
import navbar from "../../constants/navbarData";
import { formatarTempo, minutosDoArtigo, minutosDoPrograma, montarTrilha } from "../../services/trilhas";

const pagina = (no) => renderToStaticMarkup(<MemoryRouter>{no}</MemoryRouter>);

describe("tempo", () => {
  it("lê as durações usadas nos programas e artigos", () => {
    expect(minutosDoPrograma("10h estimadas")).toBe(600);
    expect(minutosDoPrograma("10hr e 30min")).toBe(630);
    expect(minutosDoPrograma(undefined)).toBe(0);
    expect(minutosDoArtigo("5 min")).toBe(5);
    expect(formatarTempo(45)).toBe("45 min");
    expect(formatarTempo(600)).toBe("10 h");
    expect(formatarTempo(630)).toBe("10 h 30 min");
  });

  it("todo programa do catálogo local tem duração legível", () => {
    expect(CATALOGO_LOCAL.filter((p) => minutosDoPrograma(p.duration) === 0).map((p) => p.id)).toEqual([]);
  });
});

describe("trilhas da cópia local", () => {
  const montadas = trilhas.itens.map((t) => montarTrilha(t, CATALOGO_LOCAL, blog));

  it("são 3 trilhas de 4 a 6 passos, todos encontrados no catálogo", () => {
    expect(montadas).toHaveLength(3);
    montadas.forEach((t, i) => {
      expect(t.passos.length, t.id).toBe(trilhas.itens[i].passos.length);
      expect(t.passos.length).toBeGreaterThanOrEqual(4);
      expect(t.passos.length).toBeLessThanOrEqual(6);
      expect(t.total, t.id).toBeGreaterThan(0);
    });
  });

  it("passo inexistente fica de fora em vez de quebrar a página", () => {
    const t = montarTrilha({ passos: [{ tipo: "programa", id: 99999, porque: "x" }, { tipo: "artigo", id: "nao-existe", porque: "x" }] }, CATALOGO_LOCAL, blog);
    expect(t.passos).toEqual([]);
    expect(t.total).toBe(0);
  });

  it("link de programa e de artigo seguem as rotas do site", () => {
    const passos = montadas.flatMap((t) => t.passos);
    expect(passos.filter((p) => p.tipo === "programa").every((p) => /^\/program\/[a-z-]+\/\d+$/.test(p.link))).toBe(true);
    expect(passos.filter((p) => p.tipo === "artigo").every((p) => /^\/blog\/[a-z0-9-]+$/.test(p.link))).toBe(true);
  });
});

describe("página /trilhas", () => {
  const html = pagina(<Trilhas />);

  it("mostra cada trilha com título, objetivo, passos em ordem e tempo estimado", () => {
    for (const t of trilhas.itens) {
      expect(html).toContain(`<section id="${t.id}"`);
      expect(html).toContain(t.titulo);
      expect(html).toContain(t.objetivo);
    }
    expect(html.match(/<ol/g)).toHaveLength(3);
    expect(html.match(/passos · cerca de \d+ h/g)).toHaveLength(3);
  });

  it("a home leva a cada trilha e o menu tem o item Trilhas", () => {
    const home = pagina(<TrilhasHome />);
    for (const t of trilhas.itens) expect(home).toContain(`href="/trilhas#${t.id}"`);
    expect(navbar.some((n) => n.path === "/trilhas")).toBe(true);
  });
});

/* Fim de Trilhas.test.jsx */
