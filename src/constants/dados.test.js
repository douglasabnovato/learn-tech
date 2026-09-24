// dados.test.js — contrato de dados dos programas.
// Roda com `npm test`. Falha quando o dado de um programa fica inconsistente:
// id repetido, módulo sem conteúdo, título divergente entre as listas,
// contagem que não bate, questão apontando para módulo inexistente.

import { describe, it, expect } from "vitest";
import programsData from "./programsData";

// Ícones aceitos pelo ModuleRenderer. Nome fora desta lista cai no padrão em
// silêncio, então o teste existe para transformar o erro de digitação em falha.
const ICONES_VALIDOS = [
  "bolt", "clipboard", "comment", "folder", "gauge", "github", "globe",
  "grid", "laptop", "list", "mobile", "palette", "rocket", "search",
  "shield", "sitemap", "sync", "tags", "tasks", "tools",
];

// Programas que já têm conteúdo de módulo publicado.
const comConteudo = programsData.filter(
  (p) => Array.isArray(p.moduleContents) && p.moduleContents.length > 0
);

// Soma os passos de todas as seções de um módulo.
const passosDe = (modulo) =>
  (modulo.sections || []).reduce(
    (total, secao) => total + (secao.subsections || []).length,
    0
  );

describe("catálogo de programas", () => {
  it("tem pelo menos um programa", () => {
    expect(programsData.length).toBeGreaterThan(0);
  });

  it("não repete id", () => {
    const ids = programsData.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("todo programa tem os campos mínimos do card", () => {
    for (const p of programsData) {
      expect(p, `programa ${p.id}`).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        category: expect.any(String),
        categoryFilter: expect.any(String),
      });
      expect(p.title.trim().length, `programa ${p.id} sem título`).toBeGreaterThan(0);
    }
  });

  it("não expõe número que a plataforma não consegue medir", () => {
    for (const p of programsData) {
      expect(p, `programa ${p.id}`).not.toHaveProperty("rating");
      expect(p, `programa ${p.id}`).not.toHaveProperty("students");
    }
  });
});

describe("módulos", () => {
  it("todo módulo listado tem conteúdo correspondente", () => {
    for (const p of comConteudo) {
      for (const mod of p.modules) {
        const conteudo = p.moduleContents.find((c) => c.id === mod.id);
        expect(conteudo, `programa ${p.id}, módulo ${mod.id} sem conteúdo`).toBeDefined();
      }
    }
  });

  it("não há conteúdo órfão sem módulo na lista", () => {
    for (const p of comConteudo) {
      const ids = p.modules.map((m) => m.id);
      for (const c of p.moduleContents) {
        expect(ids, `programa ${p.id}, conteúdo ${c.id} sem módulo`).toContain(c.id);
      }
    }
  });

  it("o título é o mesmo em modules, moduleContents e na ementa", () => {
    for (const p of comConteudo) {
      for (const mod of p.modules) {
        const conteudo = p.moduleContents.find((c) => c.id === mod.id);
        expect(conteudo.title, `programa ${p.id}, módulo ${mod.id}`).toBe(mod.title);

        const ementa = p.enrollDetails?.moduleOverviews?.find(
          (o) => o.moduleId === mod.id
        );
        if (ementa) {
          expect(ementa.title, `ementa do módulo ${mod.id}`).toContain(mod.title);
        }
      }
    }
  });

  it("lessonsCount é igual ao número real de passos", () => {
    for (const p of comConteudo) {
      for (const mod of p.modules) {
        const conteudo = p.moduleContents.find((c) => c.id === mod.id);
        expect(mod.lessonsCount, `programa ${p.id}, módulo ${mod.id}`).toBe(
          passosDe(conteudo)
        );
      }
    }
  });

  it("todo módulo tem os campos que o renderizador usa", () => {
    for (const p of comConteudo) {
      for (const c of p.moduleContents) {
        for (const campo of [
          "title", "shortDescription", "introductionText",
          "closingText", "ctaTitle", "ctaText", "nextButtonText",
        ]) {
          expect(typeof c[campo], `programa ${p.id}, módulo ${c.id}, campo ${campo}`).toBe("string");
          expect(c[campo].trim().length, `${campo} vazio no módulo ${c.id}`).toBeGreaterThan(0);
        }
        expect(Array.isArray(c.sections), `módulo ${c.id} sem sections`).toBe(true);
        expect(passosDe(c), `módulo ${c.id} sem passos`).toBeGreaterThan(0);
      }
    }
  });

  it("os passos são numerados de 1 em diante, sem repetir", () => {
    for (const p of comConteudo) {
      for (const c of p.moduleContents) {
        const numeros = (c.sections || []).flatMap((s) =>
          (s.subsections || []).map((x) => x.number)
        );
        expect(numeros, `módulo ${c.id}`).toEqual(
          Array.from({ length: numeros.length }, (_, i) => i + 1)
        );
      }
    }
  });

  it("todo ícone referenciado existe no renderizador", () => {
    for (const p of comConteudo) {
      for (const c of p.moduleContents) {
        expect(ICONES_VALIDOS, `módulo ${c.id}`).toContain(c.icon);
        for (const h of c.highlights || []) {
          expect(ICONES_VALIDOS, `destaque "${h.title}"`).toContain(h.icon);
        }
      }
    }
  });
});

describe("quiz", () => {
  it("toda questão aponta para um módulo que existe", () => {
    for (const p of programsData) {
      if (!Array.isArray(p.quiz)) continue;
      const ids = (p.modules || []).map((m) => m.id);
      for (const q of p.quiz) {
        expect(ids, `programa ${p.id}, questão ${q.id}`).toContain(q.moduleId);
      }
    }
  });

  it("toda questão tem exatamente uma alternativa correta", () => {
    for (const p of programsData) {
      if (!Array.isArray(p.quiz)) continue;
      for (const q of p.quiz) {
        const certas = q.options.filter((o) => o.isCorrect).length;
        expect(certas, `programa ${p.id}, questão ${q.id}`).toBe(1);
        expect(q.options.length, `questão ${q.id} com poucas alternativas`).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("toda questão tem enunciado e explicação", () => {
    for (const p of programsData) {
      if (!Array.isArray(p.quiz)) continue;
      for (const q of p.quiz) {
        expect(q.question?.trim().length, `questão ${q.id}`).toBeGreaterThan(0);
        expect(q.explanation?.trim().length, `questão ${q.id} sem explicação`).toBeGreaterThan(0);
      }
    }
  });

  it("não repete id de questão dentro do mesmo programa", () => {
    for (const p of programsData) {
      if (!Array.isArray(p.quiz)) continue;
      const ids = p.quiz.map((q) => q.id);
      expect(new Set(ids).size, `programa ${p.id}`).toBe(ids.length);
    }
  });
});

// Pendente: quando `lessons` passar a ser derivado da soma dos passos, trocar
// este todo por uma asserção comparando o valor exibido com passosDe().
describe.todo("lessons derivado da soma dos passos");

// Fim de dados.test.js
