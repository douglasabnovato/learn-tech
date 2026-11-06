import { useLocation } from "react-router-dom";

// Endereço público do site (o mesmo de public/sitemap.xml, robots.txt e das tags Open Graph do index.html).
export const SITE_URL = "https://learn-tech-pied.vercel.app";

const TITULO_PADRAO = "learnTECH: programas e artigos para entrar e crescer em tecnologia";
const DESCRICAO_PADRAO =
  "A learnTECH organiza o conteúdo técnico que já existe na internet: trilhas em ordem, comentadas, com prática e acesso livre, sem cadastro.";

// Meta descrição com até ~160 caracteres, cortada no fim de uma palavra.
function resumir(texto, limite = 160) {
  if (typeof texto !== "string") return "";
  const limpo = texto.replace(/\s+/g, " ").trim();
  if (limpo.length <= limite) return limpo;
  const corte = limpo.lastIndexOf(" ", limite - 1);
  return `${limpo.slice(0, corte > 0 ? corte : limite - 1)}…`;
}

// Título, descrição e canonical da rota. O React 19 eleva <title>, <meta> e <link> renderizados em
// qualquer componente para o <head> (e os tira quando a página sai), então não precisa de biblioteca.
// - `titulo`: só o nome da página; o sufixo " | learnTECH" entra aqui;
// - `caminho`: caminho canônico (padrão: a rota atual, sem query string);
// - `noindex`: para a página de erro; tira o canonical e pede para não indexar.
export const Seo = ({ titulo, descricao, caminho, noindex = false }) => {
  const { pathname } = useLocation();
  const tituloCompleto = titulo ? `${titulo} | learnTECH` : TITULO_PADRAO;
  const canonical = `${SITE_URL}${caminho ?? pathname}`;

  return (
    <>
      <title>{tituloCompleto}</title>
      <meta name="description" content={resumir(descricao) || DESCRICAO_PADRAO} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={canonical} />}
    </>
  );
};
