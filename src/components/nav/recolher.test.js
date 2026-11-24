/* recolher.test.js: quando o cabeçalho fixo se recolhe (learn-tech#168). */
import { describe, expect, it } from "vitest";
import { deveRecolher, LIMITE } from "./recolher";

const base = { alturaTela: 800, yAnterior: 500, y: 600, menuAberto: false };

describe("deveRecolher", () => {
  it("com o texto a 100% (80 px, 10% da tela), nunca recolhe", () => {
    expect(deveRecolher({ ...base, alturaCabecalho: 80 })).toBe(false);
  });

  it("com o texto a 200% (161 px, 20% da tela), recolhe ao rolar para baixo", () => {
    expect(deveRecolher({ ...base, alturaCabecalho: 161 })).toBe(true);
  });

  it("volta ao rolar para cima", () => {
    expect(deveRecolher({ ...base, alturaCabecalho: 161, y: 400, recolhidoAntes: true })).toBe(false);
  });

  it("perto do topo e com o menu aberto, fica à vista", () => {
    expect(deveRecolher({ ...base, alturaCabecalho: 161, y: 120, yAnterior: 100 })).toBe(false);
    expect(deveRecolher({ ...base, alturaCabecalho: 161, menuAberto: true })).toBe(false);
  });

  it("sem rolar (o mesmo y), mantém o estado anterior", () => {
    expect(deveRecolher({ ...base, alturaCabecalho: 161, y: 500, recolhidoAntes: true })).toBe(true);
    expect(deveRecolher({ ...base, alturaCabecalho: 161, y: 500, recolhidoAntes: false })).toBe(false);
  });

  it("o limite fica em 15% da altura da tela", () => {
    expect(LIMITE).toBe(0.15);
    expect(deveRecolher({ ...base, alturaCabecalho: 120 })).toBe(false); // 15% exatos
    expect(deveRecolher({ ...base, alturaCabecalho: 121 })).toBe(true);
  });
});
