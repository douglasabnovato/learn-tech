/* conteudo.test.js — regra de status dos programas (API e reserva local) e o adaptador da camada de rede. */
import { describe, it, expect } from "vitest";
import { statusDoPrograma, statusDaReserva, CATALOGO_LOCAL, CAMPOS_DO_CATALOGO } from "./conteudo";
import programasCatalogo from "../constants/programasCatalogo";
import programsData from "../constants/programsData";
import { criarHidratar, buscarRecurso, API_URL } from "./api";

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

/* Reserva honesta: sem API, só mostra "Aprenda" o programa cujas aulas estão na cópia local. */
describe("statusDaReserva e CATALOGO_LOCAL", () => {
  it("programa com moduleContents local é lançado", () => {
    expect(statusDaReserva({ id: 1, moduleContents: [{}, {}] })).toBe("lancado");
  });

  it("card do catálogo gerado com modulesCount, mas sem aulas locais, fica em breve", () => {
    expect(statusDaReserva({ id: 1001, modulesCount: 5 })).toBe("novidade");
    expect(statusDaReserva({ id: 2, status: "lancado", moduleContents: [] })).toBe("novidade");
    expect(statusDaReserva(undefined)).toBe("novidade");
  });

  it("na reserva, 'Aprenda' aparece só para os programas com aulas locais", () => {
    const lancados = CATALOGO_LOCAL.filter((p) => p.status === "lancado");
    expect(lancados.length).toBeGreaterThan(0);
    for (const p of lancados) expect(p.moduleContents?.length, String(p.id)).toBeGreaterThan(0);
    expect(CATALOGO_LOCAL.find((p) => p.id === 1001)?.status).toBe("novidade");
  });
});

/* Adaptador da API: ícone só vira componente se estiver no registro injetado; /media/ vira URL absoluta. */
describe("reserva igual à API nos campos de card (#144)", () => {
  it("título, duração, passos e nível do CATALOGO_LOCAL são os do catálogo gerado", () => {
    const diferentes = programasCatalogo.flatMap((c) => {
      const p = CATALOGO_LOCAL.find((x) => x.id === c.id);
      return CAMPOS_DO_CATALOGO.filter((k) => c[k] !== undefined && p?.[k] !== c[k]).map((k) => `${c.id}.${k}`);
    });
    expect(diferentes).toEqual([]);
  });

  it("a cópia manual continua dando capa, quiz e conteúdo dos módulos", () => {
    for (const m of programsData) {
      const p = CATALOGO_LOCAL.find((x) => x.id === m.id);
      expect(p.image).toBe(m.image);
      expect(p.quiz).toBe(m.quiz);
      expect(p.moduleContents).toBe(m.moduleContents);
    }
  });
});

describe("criarHidratar", () => {
  const Icone = () => null;
  it("troca o nome do ícone pelo componente registrado e mantém o nome desconhecido", () => {
    const hidratarTeste = criarHidratar({ FaCode: Icone });
    expect(hidratarTeste([{ icon: "FaCode" }, { icon: "FaNada" }])).toEqual([{ icon: Icone }, { icon: "FaNada" }]);
  });

  it("sem registro (padrão de api.js), o ícone continua texto", () => {
    expect(criarHidratar()({ icon: "FaCode", titulo: "x" })).toEqual({ icon: "FaCode", titulo: "x" });
  });

  it("buscarRecurso sem VITE_API_URL rejeita (a tela cai para a reserva)", async () => {
    if (API_URL) return;
    await expect(buscarRecurso("learn-tech/programas.json")).rejects.toThrow(/VITE_API_URL/);
  });
});
