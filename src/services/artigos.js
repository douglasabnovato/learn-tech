import { useEffect, useState } from "react";

/* Corpo dos artigos sob demanda (Decisão LIDER D20, 20/11/2026). blogData.js (cópia gerada) leva só os campos de
   card e o lide; o resto de cada artigo está em constants/blog/<id>.js, também gerado por `npm run copias`.
   Cada arquivo vira um pedaço de JavaScript próprio: a home e o artigo não carregam mais os 46 artigos inteiros. */
const modulos = import.meta.glob("../constants/blog/*.js");

export function carregarArtigo(id) {
  const carregar = modulos[`../constants/blog/${id}.js`];
  return carregar ? carregar().then((m) => m.default) : Promise.resolve(null);
}

/* Junta o card ao corpo do artigo. Se o item já veio completo da API (tem body), usa direto.
   Devolve { artigo, carregando }: enquanto o corpo chega, `artigo` é o card (título, capa, lide). */
export function useArtigo(card) {
  const id = card?.id;
  const completo = Boolean(card?.body);
  const [corpo, setCorpo] = useState({ id: null, dados: null });

  useEffect(() => {
    if (!id || completo) return undefined;
    let ativo = true;
    carregarArtigo(id)
      .then((dados) => ativo && setCorpo({ id, dados }))
      .catch(() => ativo && setCorpo({ id, dados: null }));
    return () => {
      ativo = false;
    };
  }, [id, completo]);

  if (!card) return { artigo: null, carregando: false };
  if (completo) return { artigo: card, carregando: false };
  if (corpo.id !== id) return { artigo: card, carregando: true };
  return { artigo: { ...card, ...(corpo.dados ?? {}) }, carregando: false };
}

/* Fim de artigos.js */
