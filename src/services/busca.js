/* busca.js — busca do catálogo de /programs: sem acento e sem diferença de maiúsculas. */

/** Tira acentos e caixa: "Lógica" e "LOGICA" viram "logica". */
export const normalizar = (texto) =>
  String(texto ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

/** Filtra pelo termo (título ou categoria) e pela categoria ("all" ou vazio = todas). */
export const filtrarProgramas = (programas, termo, categoria) => {
  const busca = normalizar(termo);
  return programas.filter((programa) => {
    const casaTexto = !busca || normalizar(programa.title).includes(busca) || normalizar(programa.category).includes(busca);
    const casaCategoria = !categoria || categoria === "all" || programa.categoryFilter === categoria;
    return casaTexto && casaCategoria;
  });
};

/** Monta a query string do recorte (`?categoria=&q=`), sem parâmetros vazios. */
export const recorteParaQuery = (categoria, termo) => {
  const params = new URLSearchParams();
  if (categoria && categoria !== "all") params.set("categoria", categoria);
  if (termo) params.set("q", termo);
  const query = params.toString();
  return query ? `?${query}` : "";
};

/* Texto do status da lista de programas (a região viva, learn-tech#175): a palavra é a da página ("programas"); com 0,
   diz também a saída, porque o botão "Limpar busca e filtro" aparece na lista, que não é anunciada. */
export const LIMPAR_BUSCA = "Limpar busca e filtro";
/* A contagem curta, a que aparece na pílula ("0 programas" também, para a pílula não virar um bloco de 3 linhas a 360 px). */
export function contagemProgramas(total) {
  return `${total} ${total === 1 ? "programa" : "programas"}`;
}
export function textoStatusProgramas(total) {
  if (total === 0) return `Nenhum programa com esta busca e filtro. Use ${LIMPAR_BUSCA}`;
  return contagemProgramas(total);
}
