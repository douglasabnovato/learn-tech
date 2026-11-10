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
