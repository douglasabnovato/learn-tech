/* api.js — camada de rede do learn-tech: busca na API learntech-content com tempo limite, cache e reserva local.
   Não importa nada de constants/ (nem conteudo.js), para o Navbar e as páginas institucionais
   não levarem o catálogo de programas nem os ícones para a carga inicial. */
import { useCallback, useEffect, useState } from "react";

export const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
const TEMPO_LIMITE_MS = 5000;
const cache = new Map();
const pendentes = new Map();

/* Busca um recurso /v1 com tempo limite; a mesma requisição é compartilhada entre componentes.
   O erro de HTTP leva `status` (ex.: 404), para a tela separar "não existe" de "API fora do ar". */
export function buscarRecurso(caminho) {
  if (!API_URL) return Promise.reject(new Error("VITE_API_URL não configurada"));
  if (cache.has(caminho)) return Promise.resolve(cache.get(caminho));
  if (!pendentes.has(caminho)) {
    const controle = new AbortController();
    const timer = setTimeout(() => controle.abort(), TEMPO_LIMITE_MS);
    const p = fetch(`${API_URL}/v1/${caminho}`, { signal: controle.signal })
      .then((r) => {
        if (!r.ok) throw Object.assign(new Error(`${r.status} em ${caminho}`), { status: r.status });
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

/* Cria o adaptador que percorre o dado da API: ícone por nome vira componente (se estiver no registro
   recebido) e /media/ vira URL absoluta. O registro de ícones é injetado por quem precisa dele (hidratar.js). */
export function criarHidratar(icones = {}) {
  const percorrer = (valor, chave) => {
    if (Array.isArray(valor)) return valor.map((v) => percorrer(v));
    if (valor && typeof valor === "object") {
      return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, percorrer(v, k)]));
    }
    if (chave === "icon" && typeof valor === "string" && icones[valor]) return icones[valor];
    return resolverMidia(valor);
  };
  return (valor) => percorrer(valor);
}

/* Adaptador padrão, sem ícones: só resolve /media/. */
export const hidratarMidia = criarHidratar();

/*
 * Hook genérico: começa com o dado local e troca pelo da API quando ele chega.
 * `erro` fica preenchido quando a API falhou e o dado mostrado é a reserva local;
 * `tentarDeNovo` repete a busca (a falha não vai para o cache).
 */
export function useApi(caminho, local, adaptar = hidratarMidia) {
  const [tentativa, setTentativa] = useState(0);
  const inicial = () => ({
    caminho,
    tentativa,
    dados: cache.has(caminho) ? adaptar(cache.get(caminho)) : local,
    carregando: Boolean(API_URL) && !cache.has(caminho),
    erro: null,
  });
  const [estado, setEstado] = useState(inicial);
  const atual = estado.caminho === caminho && estado.tentativa === tentativa ? estado : inicial();

  useEffect(() => {
    let ativo = true;
    buscarRecurso(caminho)
      .then((d) => ativo && setEstado({ caminho, tentativa, dados: adaptar(d), carregando: false, erro: null }))
      .catch((e) => {
        if (API_URL) console.warn(`[learntech-content] usando dados locais para ${caminho}:`, e.message);
        if (ativo) setEstado({ caminho, tentativa, dados: local, carregando: false, erro: e });
      });
    return () => {
      ativo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caminho, tentativa]);

  const tentarDeNovo = useCallback(() => setTentativa((n) => n + 1), []);
  return { ...atual, tentarDeNovo };
}

/*
 * Quantidade de itens publicados por recurso, lida do índice da API (/v1/index.json).
 * Chaves sem /v1/ e sem .json (ex.: "tools/ferramentas", "bootcamps/eventos"). Sem API, devolve {}.
 */
export function useContagens() {
  return useApi("index.json", {}, (indice) =>
    Object.fromEntries(
      (indice?.recursos ?? [])
        .filter((r) => typeof r.itens === "number")
        .map((r) => [r.caminho.replace(/^\/v1\//, "").replace(/\.json$/, ""), r.itens])
    )
  ).dados;
}

/* Conteúdo de página (sobre, aprender, termos...). Listas locais em default export entram como { itens }.
   Página com ícones por nome passa `hidratar` (de hidratar.js) como terceiro argumento. */
export function usePagina(nome, local, adaptar = hidratarMidia) {
  return useApi(`learn-tech/paginas/${nome}.json`, local, adaptar).dados;
}

/* Fim de api.js */
