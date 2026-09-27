/* conteudo.js — camada de dados do learn-tech: busca na API learntech-content e cai para os dados locais se a API falhar. */
import { useEffect, useState } from "react";
import programsData from "../constants/programsData";
import { ICONES } from "../constants/icones";

export const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
const TEMPO_LIMITE_MS = 5000;
const cache = new Map();
const pendentes = new Map();

/* Busca um recurso /v1 com tempo limite; a mesma requisição é compartilhada entre componentes. */
export function buscarRecurso(caminho) {
  if (!API_URL) return Promise.reject(new Error("VITE_API_URL não configurada"));
  if (cache.has(caminho)) return Promise.resolve(cache.get(caminho));
  if (!pendentes.has(caminho)) {
    const controle = new AbortController();
    const timer = setTimeout(() => controle.abort(), TEMPO_LIMITE_MS);
    const p = fetch(`${API_URL}/v1/${caminho}`, { signal: controle.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} em ${caminho}`);
        return r.json();
      })
      .then((dados) => {
        cache.set(caminho, dados);
        return dados;
      })
      .finally(() => {
        clearTimeout(timer);
        pendentes.delete(caminho);
      });
    pendentes.set(caminho, p);
  }
  return pendentes.get(caminho);
}

/* Troca caminhos /media/... pela URL completa da API. */
export function resolverMidia(valor) {
  return typeof valor === "string" && valor.startsWith("/media/") ? `${API_URL}${valor}` : valor;
}

/* Percorre o dado da API: ícone por nome vira componente e /media/ vira URL absoluta. */
export function hidratar(valor, chave) {
  if (Array.isArray(valor)) return valor.map((v) => hidratar(v));
  if (valor && typeof valor === "object") {
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, hidratar(v, k)]));
  }
  if (chave === "icon" && typeof valor === "string" && ICONES[valor]) return ICONES[valor];
  return resolverMidia(valor);
}

/* Hook genérico: começa com o dado local e troca pelo da API quando ele chega. */
export function useApi(caminho, local, adaptar = hidratar) {
  const inicial = () => ({
    caminho,
    dados: cache.has(caminho) ? adaptar(cache.get(caminho)) : local,
    carregando: Boolean(API_URL) && !cache.has(caminho),
  });
  const [estado, setEstado] = useState(inicial);
  const atual = estado.caminho === caminho ? estado : inicial();

  useEffect(() => {
    let ativo = true;
    buscarRecurso(caminho)
      .then((d) => ativo && setEstado({ caminho, dados: adaptar(d), carregando: false }))
      .catch((e) => {
        if (API_URL) console.warn(`[learntech-content] usando dados locais para ${caminho}:`, e.message);
        if (ativo) setEstado({ caminho, dados: local, carregando: false });
      });
    return () => {
      ativo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caminho]);

  return atual;
}

/* Conteúdo de página (sobre, aprender, termos...). Listas locais em default export entram como { itens }. */
export function usePagina(nome, local) {
  return useApi(`learn-tech/paginas/${nome}.json`, local).dados;
}

/* Mantém o vídeo local (47 MB, fica no site) quando a API não publica vídeo. */
function comMidiaLocal(programa) {
  const p = hidratar(programa);
  const local = programsData.find((x) => x.id === p.id);
  return { ...p, video: p.video || local?.video, videoPoster: p.videoPoster || local?.videoPoster, image: p.image || local?.image };
}

/* Catálogo de programas para listas e cards. */
export function useProgramas() {
  return useApi("learn-tech/programas.json", programsData, (lista) => lista.map(comMidiaLocal)).dados;
}

/* Programa completo por id; `carregando` evita mostrar "não encontrado" antes da resposta da API. */
export function usePrograma(id) {
  const local = programsData.find((p) => p.id === id);
  const { dados, carregando } = useApi(`learn-tech/programas/${id}.json`, local, comMidiaLocal);
  return { programa: dados, carregando };
}

/* Fim de conteudo.js */
