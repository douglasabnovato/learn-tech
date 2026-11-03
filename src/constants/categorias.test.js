/* categorias.test.js — a cópia de reserva das categorias (gerada pela API) só usa ícones registrados e tem slugs únicos. */
import { describe, it, expect } from "vitest";
import categoriesData from "./categoriesData";
import areasData from "./areasData";
import { ICONES } from "./icones";

describe("cópia de reserva das categorias", () => {
  it("tem pelo menos as categorias de base", () => {
    expect(categoriesData.length).toBeGreaterThanOrEqual(10);
  });

  it("todo ícone citado por nome existe em icones.js", () => {
    const faltando = [...categoriesData, ...areasData].map((c) => c.icon).filter((nome) => typeof nome === "string" && !ICONES[nome]);
    expect(faltando).toEqual([]);
  });

  it("slugs são únicos e em minúsculas com hífen", () => {
    const slugs = categoriesData.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
});
