/* conteudo.test.js — regra de status dos programas (API e reserva local) e o adaptador da camada de rede. */
import { describe, it, expect } from "vitest";
import { statusDoPrograma, CATALOGO_LOCAL, CAMPOS_DO_CATALOGO, carregarProgramaLocal } from "./conteudo";
import { IDS_COM_CONTEUDO_LOCAL } from "../constants/programsMidia";
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
describe("CATALOGO_LOCAL", () => {
  it("na reserva, 'Aprenda' aparece só para os programas com aulas locais", () => {
    const lancados = CATALOGO_LOCAL.filter((p) => p.status === "lancado");
    expect(lancados.length).toBeGreaterThan(0);
    const comAulas = new Set(programsData.filter((p) => p.moduleContents?.length > 0).map((p) => p.id));
    for (const p of lancados) expect(comAulas.has(p.id), String(p.id)).toBe(true);
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

  it("a cópia manual continua dando a capa e o vídeo dos cards", () => {
    for (const m of programsData) {
      const p = CATALOGO_LOCAL.find((x) => x.id === m.id);
      expect(p.image).toBe(m.image);
      expect(p.video).toBe(m.video);
    }
  });

  it("os cards da reserva não carregam módulos nem quiz (D121): o conteúdo completo vem sob demanda", async () => {
    expect(CATALOGO_LOCAL.some((p) => p.moduleContents || p.quiz)).toBe(false);
    for (const id of IDS_COM_CONTEUDO_LOCAL) {
      const completo = await carregarProgramaLocal(id);
      const m = programsData.find((p) => p.id === id);
      expect(completo.moduleContents).toBe(m.moduleContents);
      expect(completo.quiz).toBe(m.quiz);
    }
    expect(await carregarProgramaLocal(1001)).toBeNull();
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
