/* rotasVercel.test.js: o vercel.json precisa cobrir toda rota do React Router (issue #131).
   Rota nova no App.jsx sem reescrita no vercel.json responderia 404 na produção, por isso este teste falha antes. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { montarPagina404 } from "../../scripts/pagina-404.mjs";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const app = fs.readFileSync(path.join(RAIZ, "src/App.jsx"), "utf8");
const { rewrites } = JSON.parse(fs.readFileSync(path.join(RAIZ, "vercel.json"), "utf8"));

/* Converte o `source` da Vercel (":param" e grupos "(a|b)") numa RegExp equivalente para o teste. */
const paraRegExp = (fonte) => new RegExp(`^${fonte.replace(/:\w+/g, "[^/]+")}/?$`);
const reescritas = rewrites.map((r) => paraRegExp(r.source));
const atendida = (caminho) => caminho === "/" || reescritas.some((re) => re.test(caminho));

/* Rotas do App.jsx, com cada parâmetro trocado por um valor de exemplo. */
const rotas = [...app.matchAll(/path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== "*");

describe("vercel.json × rotas do React Router", () => {
  it("encontra as rotas do App.jsx", () => {
    expect(rotas.length).toBeGreaterThan(15);
  });

  it.each(rotas)("reescreve %s para a SPA", (rota) => {
    expect(atendida(rota.replace(/:\w+/g, "exemplo"))).toBe(true);
  });

  it.each(["/nao-existe", "/blog", "/program/so-categoria", "/programs/extra/nivel"])("deixa %s cair no 404", (caminho) => {
    expect(atendida(caminho)).toBe(false);
  });
});

describe("montarPagina404", () => {
  const html = `<html><head>\n<title>learnTECH</title>\n<link rel="canonical" href="https://x" />\n</head><body></body></html>`;
  const saida = montarPagina404(html);

  it("pede para não indexar e tira o canonical", () => {
    expect(saida).toContain('<meta name="robots" content="noindex" />');
    expect(saida).not.toContain('rel="canonical"');
    expect(saida).toContain("<title>Página não encontrada | learnTECH</title>");
  });

  it("falha alto se o index.html não tiver </head>", () => {
    expect(() => montarPagina404("<html></html>")).toThrow(/head/);
  });
});
