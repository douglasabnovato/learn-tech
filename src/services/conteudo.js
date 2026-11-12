/* conteudo.js — dados de programas do learn-tech: catálogo e programa completo, vindos da API learntech-content,
   com a cópia local (programsData + programasCatalogo) como reserva. A camada de rede fica em api.js. */
import programsData from "../constants/programsData";
import programasCatalogo from "../constants/programasCatalogo";
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

/*
 * Status na reserva (API fora do ar): só é "lancado" o programa cujo conteúdo completo
 * (moduleContents) está na cópia local. `modulesCount` do catálogo gerado não basta,
 * porque o Enroll não teria o que mostrar.
 */
export function statusDaReserva(p) {
  return p?.moduleContents?.length > 0 ? "lancado" : "novidade";
}

/* Mantém o vídeo local quando a API não publica vídeo e completa o status que a API não tem. */
function comMidiaLocal(programa) {
  const p = hidratar(programa);
  const local = programsData.find((x) => x.id === p.id);
  return {
    ...p,
    video: p.video || local?.video,
    videoPoster: p.videoPoster || local?.videoPoster,
    image: p.image || local?.image,
    status: statusDoPrograma(p, local),
  };
}

/* Card do catálogo gerado como reserva: mesma mídia local, mas status pela regra da reserva. */
function naReserva(programa) {
  return { ...comMidiaLocal(programa), status: statusDaReserva(programa) };
}

/* Reserva das listas: a cópia manual (com capa, vídeo e quiz locais) mais os programas que só existem
   no catálogo gerado pela API (programasCatalogo.js). Sem API, todos os cards continuam aparecendo,
   mas só os que têm conteúdo local mostram "Aprenda". */
const idsLocais = new Set(programsData.map((p) => p.id));
/* Campos de card que vêm do catálogo gerado pela API, e não da cópia manual (desatualizada, #144).
   A cópia manual continua dando a mídia local (capa e vídeo), o quiz e o conteúdo dos módulos. */
export const CAMPOS_DO_CATALOGO = ["title", "duration", "lessons", "level", "category", "categoryFilter", "description", "access", "accessType"];
const catalogoPorId = new Map(programasCatalogo.map((p) => [p.id, p]));
function comCamposDoCatalogo(p) {
  const c = catalogoPorId.get(p.id);
  if (!c) return p;
  return { ...p, ...Object.fromEntries(CAMPOS_DO_CATALOGO.filter((k) => c[k] !== undefined).map((k) => [k, c[k]])) };
}
export const CATALOGO_LOCAL = [
  ...programsData.map((p) => ({ ...comCamposDoCatalogo(p), status: statusDaReserva(p) })),
  ...programasCatalogo.filter((p) => !idsLocais.has(p.id)).map(naReserva),
];

/* Catálogo de programas para listas e cards. */
export function useProgramas() {
  return useApi("learn-tech/programas.json", CATALOGO_LOCAL, (lista) => lista.map(comMidiaLocal)).dados;
}

/*
 * Programa completo por id. A reserva é a cópia manual (programsData) ou, sem ela, o card do catálogo
 * gerado, para o Detail mostrar ao menos título e descrição.
 * - `carregando` evita mostrar "não encontrado" antes da resposta da API;
 * - `indisponivel` diz que a API falhou e o conteúdo completo (moduleContents) não está na reserva;
 * - `tentarDeNovo` repete a busca.
 */
export function usePrograma(id) {
  const local = CATALOGO_LOCAL.find((p) => p.id === id);
  const { dados, carregando, erro, tentarDeNovo } = useApi(`learn-tech/programas/${id}.json`, local, comMidiaLocal);
  const naoExiste = erro?.status === 404;
  const indisponivel = Boolean(erro) && !naoExiste && !carregando && !(dados?.moduleContents?.length > 0);
  return { programa: naoExiste ? undefined : dados, carregando, indisponivel, tentarDeNovo };
}

/* Fim de conteudo.js */
