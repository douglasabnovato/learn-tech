/* dadosEstruturados.test.js — JSON-LD de artigos e programas (#131), conferido em todo o conteúdo local. */
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import blog from "../constants/blogData";
import { CATALOGO_LOCAL } from "./conteudo";
import { artigoJsonLd, duracaoIso, programaJsonLd } from "./dadosEstruturados";
import { JsonLd } from "../components/common/JsonLd";

describe("Article", () => {
  it("todo artigo tem os campos que o Google pede, com endereço absoluto", () => {
    for (const post of blog) {
      const d = artigoJsonLd(post);
      expect(d["@type"]).toBe("Article");
      expect(d.headline.length, post.id).toBeGreaterThan(0);
      expect(d.headline.length).toBeLessThanOrEqual(110);
      expect(d.datePublished, post.id).toMatch(/^\d{4}-\d{2}-\d{2}/);
      expect(d.author.name).toBeTruthy();
      expect(d.url).toBe(`https://learn-tech-pied.vercel.app/blog/${post.id}`);
      if (d.image) expect(d.image).toMatch(/^https:\/\//);
    }
  });

  it("equipe é organização; nome de pessoa é Person", () => {
    expect(artigoJsonLd({ id: "a", title: "t", author: "Equipe learnTECH" }).author["@type"]).toBe("Organization");
    expect(artigoJsonLd({ id: "a", title: "t", author: "Ana Exemplo" }).author["@type"]).toBe("Person");
  });
});

describe("Course", () => {
  it("todo programa tem nome, descrição, quem oferece e tempo em ISO 8601", () => {
    for (const p of CATALOGO_LOCAL) {
      const d = programaJsonLd(p);
      expect(d["@type"]).toBe("Course");
      expect(d.name, String(p.id)).toBeTruthy();
      expect(d.description, String(p.id)).toBeTruthy();
      expect(d.provider.name).toBe("learnTECH");
      expect(d.timeRequired, String(p.id)).toMatch(/^PT(\d+H)?(\d+M)?$/);
      expect(d.url).toBe(`https://learn-tech-pied.vercel.app/program/${p.categoryFilter}/${p.id}`);
    }
  });

  it("converte as durações usadas no catálogo", () => {
    expect(duracaoIso("10hr e 30min")).toBe("PT10H30M");
    expect(duracaoIso("6h")).toBe("PT6H");
    expect(duracaoIso("45 min")).toBe("PT45M");
    expect(duracaoIso("")).toBeUndefined();
  });
});

describe("bloco na página", () => {
  it("é JSON válido e não fecha a tag script com texto do conteúdo", () => {
    const html = renderToStaticMarkup(<JsonLd dados={{ name: "</script><b>x</b>" }} />);
    expect(html.startsWith('<script type="application/ld+json">')).toBe(true);
    expect(html.match(/<\/script>/g)).toHaveLength(1);
    const json = html.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
    expect(JSON.parse(json).name).toBe("</script><b>x</b>");
  });
});
