/* busca.test.js — busca de /programs sem acento e sem caixa, e o recorte na URL. */
import { describe, it, expect } from "vitest";
import { normalizar, filtrarProgramas, recorteParaQuery, textoStatusProgramas, contagemProgramas, LIMPAR_BUSCA } from "./busca";

const programas = [
  { id: 1, title: "Lógica de Programação", category: "Fundamentos", categoryFilter: "fundamentos" },
  { id: 2, title: "React do zero", category: "Web", categoryFilter: "web" },
  { id: 3, title: "Integração com CRM", category: "Negócios", categoryFilter: "crm" },
];

describe("normalizar", () => {
  it("tira acentos e caixa", () => {
    expect(normalizar("Lógica")).toBe("logica");
    expect(normalizar("  INTEGRAÇÃO ")).toBe("integracao");
    expect(normalizar(undefined)).toBe("");
  });
});

describe("filtrarProgramas", () => {
  it("'logica' acha 'Lógica'", () => {
    expect(filtrarProgramas(programas, "logica", "all").map((p) => p.id)).toEqual([1]);
  });

  it("ignora maiúsculas e acentos no termo", () => {
    expect(filtrarProgramas(programas, "LÓGICA", "all").map((p) => p.id)).toEqual([1]);
    expect(filtrarProgramas(programas, "integracao", "").map((p) => p.id)).toEqual([3]);
  });

  it("busca também na categoria", () => {
    expect(filtrarProgramas(programas, "negocios", "all").map((p) => p.id)).toEqual([3]);
  });

  it("combina termo e categoria", () => {
    expect(filtrarProgramas(programas, "react", "web").map((p) => p.id)).toEqual([2]);
    expect(filtrarProgramas(programas, "react", "crm")).toEqual([]);
  });

  it("sem termo e sem categoria devolve tudo", () => {
    expect(filtrarProgramas(programas, "", "all")).toHaveLength(3);
  });
});

describe("recorteParaQuery", () => {
  it("monta ?categoria=&q= sem parâmetros vazios", () => {
    expect(recorteParaQuery("web", "react")).toBe("?categoria=web&q=react");
    expect(recorteParaQuery("all", "lógica")).toBe("?q=l%C3%B3gica");
    expect(recorteParaQuery("all", "")).toBe("");
  });
});

describe("textoStatusProgramas (learn-tech#175)", () => {
  it("usa a palavra da página, no singular e no plural", () => {
    expect(textoStatusProgramas(49)).toBe("49 programas");
    expect(textoStatusProgramas(1)).toBe("1 programa");
  });
  it("a contagem curta da pílula, inclusive com 0", () => {
    expect(contagemProgramas(0)).toBe("0 programas");
    expect(contagemProgramas(1)).toBe("1 programa");
  });
  it("com 0, diz a saída, com o mesmo nome do botão", () => {
    expect(textoStatusProgramas(0)).toBe("Nenhum programa com esta busca e filtro. Use Limpar busca e filtro");
    expect(textoStatusProgramas(0)).toContain(LIMPAR_BUSCA);
  });
});
