/* programasCatalogo.test.js — o catálogo gerado pela API completa a reserva manual sem repetir programa. */
import { describe, it, expect } from "vitest";
import programasCatalogo from "./programasCatalogo";
import { CATALOGO_LOCAL } from "../services/conteudo";

describe("catálogo de programas (reserva)", () => {
  it("tem ids únicos e os campos de card", () => {
    const ids = programasCatalogo.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of programasCatalogo) {
      expect(p.title, String(p.id)).toBeTruthy();
      expect(p.categoryFilter, String(p.id)).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("a reserva das listas inclui os programas novos sem duplicar", () => {
    const ids = CATALOGO_LOCAL.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual(expect.arrayContaining([1104, 1105, 1106, 1107, 106]));
  });
});
