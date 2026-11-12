/* CategoriesAll.test.jsx — a página de áreas mostra "No dia a dia" e "Competências" (#135).
   Renderiza no servidor (react-dom/server), sem dependência nova: o efeito que busca a API não roda,
   então a página usa a cópia local areasData.js, a mesma que o site mostra sem API. */
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { CategoriesAll, ListasDaArea } from "./CategoriesAll";
import areas from "../../../constants/areasData";

const html = renderToStaticMarkup(
  <MemoryRouter>
    <CategoriesAll />
  </MemoryRouter>,
);

/* Texto do HTML sem as entidades que o React escapa. */
const texto = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

describe("página de áreas", () => {
  it("as 6 áreas da cópia local têm dia a dia e competências", () => {
    expect(areas).toHaveLength(6);
    for (const a of areas) {
      expect(a.diaADia?.length, a.id).toBeGreaterThan(0);
      expect(a.competencias?.length, a.id).toBeGreaterThan(0);
    }
  });

  it("cada área mostra as duas seções com título e lista rotulada", () => {
    for (const a of areas) {
      for (const campo of ["diaADia", "competencias"]) {
        const id = `${a.id}-${campo}`;
        expect(html, id).toContain(`<section aria-labelledby="${id}"`);
        expect(html, id).toContain(`<h3 id="${id}"`);
        expect(html, id).toContain(`<ul aria-labelledby="${id}"`);
      }
    }
    expect(html.match(/>No dia a dia</g)).toHaveLength(6);
    expect(html.match(/>Competências</g)).toHaveLength(6);
  });

  it("todo item de dia a dia e de competências aparece na página", () => {
    const pagina = texto(html);
    const faltando = areas.flatMap((a) => [...a.diaADia, ...a.competencias].filter((item) => !pagina.includes(item)));
    expect(faltando).toEqual([]);
  });

  it("área sem as listas não desenha o bloco", () => {
    expect(renderToStaticMarkup(<ListasDaArea area={{ id: "x" }} />)).toBe("");
    expect(renderToStaticMarkup(<ListasDaArea area={{ id: "x", diaADia: [], competencias: ["A"] }} />)).not.toContain("No dia a dia");
  });
});

/* Fim de CategoriesAll.test.jsx */
