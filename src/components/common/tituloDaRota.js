/* tituloDaRota.js — escolhe o título que recebe o foco depois de uma troca de rota (learn-tech#194).
   Sem DOM próprio, para o teste rodar no node: recebe a lista de h1 e devolve o 1º que está na tela. */

/* Um h1 conta quando ocupa espaço na tela (o "Carregando..." escondido não ocupa) e não está num trecho
   escondido do leitor de tela. */
export function tituloVisivel(h1) {
  if (!h1 || h1.getClientRects().length === 0) return false;
  return !h1.closest('[aria-hidden="true"], [hidden], [inert]');
}

export function escolherTitulo(lista) {
  return Array.from(lista ?? []).find(tituloVisivel) ?? null;
}

/* Fim de tituloDaRota.js */
