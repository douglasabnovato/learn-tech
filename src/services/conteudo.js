/* conteudo.js — dados de programas do learn-tech: catálogo e programa completo, vindos da API learntech-content,
   com a cópia local como reserva. A camada de rede fica em api.js.
   Reserva em duas partes (Decisão LIDER D121, learn-tech#148 A1): programsMidia.js, leve, vai junto com a página;
   programsData.js (módulos, quiz e textos do Detail) só é baixado quando a API falha num programa que tem aulas locais. */
import { useEffect, useState } from "react";
import programasCatalogo from "../constants/programasCatalogo";
import { MIDIA_LOCAL, IDS_COM_CONTEUDO_LOCAL } from "../constants/programsMidia";
import { useApi } from "./api";
import { hidratar } from "./hidratar";

export { API_URL, buscarRecurso, resolverMidia, useApi, usePagina, useContagens } from "./api";
export { hidratar };

/*
 * Status do card ("lancado" mostra "Aprenda"; "novidade" mostra "Em breve").
 * A API não publica status: programa com módulos tem conteúdo e é lançado;
 * sem módulos, vale o status local (capa em breve).
 */
export function statusDoPrograma(p, local) {
  if (p?.status) return p.status;
  const modulos = p?.modulesCount ?? p?.moduleContents?.length ?? p?.modules?.length ?? 0;
  if (modulos > 0) return "lancado";
  return local?.status ?? "novidade";
}

/* Mantém o vídeo local quando a API não publica vídeo e completa o status que a API não tem. */
function comMidiaLocal(programa) {
  const p = hidratar(programa);
  const local = MIDIA_LOCAL[p.id];
  return {
    ...p,
    video: p.video || local?.video,
    videoPoster: p.videoPoster || local?.videoPoster,
    image: p.image || local?.image,
    status: statusDoPrograma(p, local),
  };
}

/* Campos de card que vêm do catálogo gerado pela API (programasCatalogo.js), e não da cópia manual (desatualizada, #144). */
export const CAMPOS_DO_CATALOGO = [
  "title",
  "duration",
  "lessons",
  "level",
  "category",
  "categoryFilter",
  "description",
  "access",
  "accessType",
];

/* Reserva das listas: o catálogo gerado pela API, com a mídia local (capa e vídeo de programsMidia.js) por cima.
   Sem API, todos os cards continuam aparecendo, mas só os que têm aulas locais mostram "Aprenda".
   A regra de status na reserva é uma só: IDS_COM_CONTEUDO_LOCAL. O `modulesCount` do catálogo gerado não basta,
   porque o Enroll não teria o que mostrar. O dados.test.js confere que a lista bate com os programas com aulas em
   programsData.
   A ordem é a de antes: primeiro os programas da cópia local, depois os que só existem no catálogo gerado. */
const naReserva = (p) => {
  const midia = Object.fromEntries(Object.entries(MIDIA_LOCAL[p.id] ?? {}).filter(([campo]) => campo !== "status"));
  return { ...hidratar(p), ...midia, status: IDS_COM_CONTEUDO_LOCAL.has(p.id) ? "lancado" : "novidade" };
};
export const CATALOGO_LOCAL = [
  ...programasCatalogo.filter((p) => p.id in MIDIA_LOCAL),
  ...programasCatalogo.filter((p) => !(p.id in MIDIA_LOCAL)),
].map(naReserva);

/* Conteúdo completo da cópia local de um programa (módulos, quiz e textos do Detail), baixado sob demanda. */
export function carregarProgramaLocal(id) {
  if (!IDS_COM_CONTEUDO_LOCAL.has(id)) return Promise.resolve(null);
  return import("../constants/programsData").then((m) => m.default.find((p) => p.id === id) ?? null);
}

/* Enquanto `precisa` for verdadeiro, busca o conteúdo local do programa. Devolve undefined enquanto carrega.
   Cada valor novo de `tentativa` repete o import(): se a rede caiu, o "Tentar de novo" baixa a reserva outra vez,
   em vez de ficar preso no null do erro (revisão R19, #153-1). */
function useProgramaLocal(id, precisa, tentativa) {
  const [estado, setEstado] = useState({ chave: null, dados: undefined });
  const chave = `${id}:${tentativa}`;
  useEffect(() => {
    if (!precisa) return undefined;
    let ativo = true;
    carregarProgramaLocal(id)
      .then((dados) => ativo && setEstado({ chave, dados }))
      .catch(() => ativo && setEstado({ chave, dados: null }));
    return () => {
      ativo = false;
    };
  }, [id, precisa, chave]);
  return estado.chave === chave ? estado.dados : undefined;
}

/* Catálogo de programas para listas e cards. */
export function useProgramas() {
  return useApi("learn-tech/programas.json", CATALOGO_LOCAL, (lista) => lista.map(comMidiaLocal)).dados;
}

/*
 * Programa completo por id. A reserva é a cópia manual (programsData) ou, sem ela, o card do catálogo
 * gerado, para o Detail mostrar ao menos título e descrição.
 * - `carregando` evita mostrar "não encontrado" antes da resposta da API;
 * - `indisponivel` diz que a API falhou e o conteúdo completo (moduleContents) não está na reserva;
 * - `tentarDeNovo` repete a busca na API e o import() da reserva.
 */
export function usePrograma(id) {
  const card = CATALOGO_LOCAL.find((p) => p.id === id);
  const api = useApi(`learn-tech/programas/${id}.json`, card, comMidiaLocal);
  const [tentativa, setTentativa] = useState(0);
  const naoExiste = api.erro?.status === 404;
  /* A API falhou: o conteúdo completo vem da cópia local, se houver, sem pesar no carregamento normal. */
  const precisaDaReserva = Boolean(api.erro) && !naoExiste && IDS_COM_CONTEUDO_LOCAL.has(id);
  const completo = useProgramaLocal(id, precisaDaReserva, tentativa);
  const tentarDeNovo = () => {
    setTentativa((n) => n + 1);
    api.tentarDeNovo();
  };
  const dados = precisaDaReserva && completo ? { ...completo, ...card } : api.dados;
  const carregando = api.carregando || (precisaDaReserva && completo === undefined);
  const indisponivel = Boolean(api.erro) && !naoExiste && !carregando && !(dados?.moduleContents?.length > 0);
  return { programa: naoExiste ? undefined : dados, carregando, indisponivel, tentarDeNovo };
}

/* Fim de conteudo.js */
