/* previaConheca.test.js: metatags da prévia do link /conheca (issue #137). */
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { montarPrevia } from "../../scripts/previa-conheca.mjs";
import conheca from "../constants/conhecaData";

const indexHtml = fs.readFileSync(new URL("../../index.html", import.meta.url), "utf8");

describe("prévia do /conheca", () => {
  const html = montarPrevia(indexHtml, conheca.seo);

  it("troca título, descrição, URL e imagem da prévia", () => {
    expect(html).toContain(`<title>${conheca.seo.titulo} | learnTECH</title>`);
    expect(html).toContain(`<meta property="og:title" content="${conheca.seo.titulo}" />`);
    expect(html).toContain(`<meta property="og:description" content="${conheca.seo.descricao}" />`);
    expect(html).toContain('<meta property="og:url" content="https://learn-tech-pied.vercel.app/conheca" />');
    expect(html).toContain('<meta property="og:image" content="https://learn-tech-pied.vercel.app/og-conheca.png" />');
    expect(html).toContain('<link rel="canonical" href="https://learn-tech-pied.vercel.app/conheca" />');
  });

  it("mantém o resto do index.html, para o React carregar igual", () => {
    expect(html).toContain('<div id="root"></div>');
    expect(html.match(/og:title/g)).toHaveLength(1);
  });

  it("falha alto se a metatag sumir do index.html", () => {
    const semOg = indexHtml.replace(/<meta property="og:image"[^>]*>/, "");
    expect(() => montarPrevia(semOg, conheca.seo)).toThrow(/og:image/);
  });

  it("descrição cabe na prévia (até 160 caracteres)", () => {
    expect(conheca.seo.descricao.length).toBeLessThanOrEqual(160);
  });
});

/* Fim de previaConheca.test.js */
