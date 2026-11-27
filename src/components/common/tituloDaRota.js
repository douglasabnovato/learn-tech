/* tituloDaRota.js — escolhe o que recebe o foco depois de uma troca de rota (learn-tech#194 e #196).
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

/* No "Voltar", o link de origem: o 1º visível com o mesmo href (learn-tech#196). O mesmo teste do h1 vale aqui. */
export function escolherLink(lista, href) {
  if (!href) return null;
  return Array.from(lista ?? []).find((a) => a.getAttribute("href") === href && tituloVisivel(a)) ?? null;
}

/* O foco é da pessoa quando está num elemento que não é a origem da navegação nem o body (learn-tech#196).
   Sem uma origem (uma navegação sem clique), só o body conta como "ninguém mexeu". */
export function focoDaPessoa(atual, origem, body) {
  if (!atual || atual === body) return false;
  return atual !== origem;
}

/* Fim de tituloDaRota.js */
