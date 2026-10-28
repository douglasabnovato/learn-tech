/* conteudo.test.js — regra de status dos programas quando os dados vêm da API (que não publica status). */
import { describe, it, expect } from "vitest";
import { statusDoPrograma } from "./conteudo";

describe("statusDoPrograma", () => {
  it("programa com módulos na API é lançado, mesmo marcado como novidade no dado local", () => {
    expect(statusDoPrograma({ id: 503, modulesCount: 5 }, { status: "novidade" })).toBe("lancado");
  });

  it("programa completo (moduleContents) é lançado", () => {
    expect(statusDoPrograma({ id: 404, moduleContents: [{}, {}] }, undefined)).toBe("lancado");
  });

  it("capa sem módulos continua em breve", () => {
    expect(statusDoPrograma({ id: 2, modulesCount: 0 }, { status: "novidade" })).toBe("novidade");
    expect(statusDoPrograma({ id: 2 }, undefined)).toBe("novidade");
  });

  it("status vindo da API tem prioridade", () => {
    expect(statusDoPrograma({ id: 9, status: "novidade", modulesCount: 3 }, undefined)).toBe("novidade");
  });
});
