/* artigos.test.js — blog dividido (D20): cards leves em blogData.js e o corpo de cada artigo sob demanda. */
import { describe, it, expect } from "vitest";
import { carregarArtigo, estadoDoArtigo } from "./artigos";
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

describe("estadoDoArtigo (learn-tech#173)", () => {
  const card = { id: "a", title: "T", lead: "L" };

  it("enquanto o corpo não chegou, carrega", () => {
    expect(estadoDoArtigo(card, { id: null, dados: null, erro: false })).toMatchObject({ carregando: true, erro: false });
  });

  it("o import() rejeitado vira erro, e não artigo em preparação", () => {
    const e = estadoDoArtigo(card, { id: "a", dados: null, erro: true });
    expect(e).toMatchObject({ carregando: false, erro: true });
    expect(e.artigo.body).toBeUndefined();
  });

  it("o artigo sem corpo, sem erro, segue como em preparação (erro falso)", () => {
    expect(estadoDoArtigo(card, { id: "a", dados: null, erro: false })).toMatchObject({ carregando: false, erro: false });
  });

  it("o corpo carregado junta ao card", () => {
    const e = estadoDoArtigo(card, { id: "a", dados: { body: ["x"] }, erro: false });
    expect(e.artigo.body).toEqual(["x"]);
    expect(e.erro).toBe(false);
  });

  it("o card que já veio completo da API não espera nada", () => {
    expect(estadoDoArtigo({ ...card, body: ["y"] }, { id: null, dados: null })).toMatchObject({ carregando: false, erro: false });
  });
});

/* Fim de artigos.test.js */
