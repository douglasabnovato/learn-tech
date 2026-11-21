/* artigos.test.js — blog dividido (D20): cards leves em blogData.js e o corpo de cada artigo sob demanda. */
import { describe, it, expect } from "vitest";
import { carregarArtigo } from "./artigos";
import blogData from "../constants/blogData";

describe("blog dividido", () => {
  it("blogData leva só os campos de card e o lide, sem o corpo", () => {
    expect(blogData.length).toBeGreaterThan(0);
    for (const card of blogData) {
      expect(card.id && card.title && card.lead).toBeTruthy();
      expect(card.body).toBeUndefined();
    }
  });

  it("todo card tem o corpo do artigo para carregar sob demanda", async () => {
    for (const card of blogData) {
      const artigo = await carregarArtigo(card.id);
      expect(Array.isArray(artigo?.body), card.id).toBe(true);
    }
  });

  it("artigo que não existe devolve null", async () => {
    expect(await carregarArtigo("nao-existe")).toBeNull();
  });
});

/* Fim de artigos.test.js */
