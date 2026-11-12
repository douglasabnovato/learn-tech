/* dadosEstruturados.js — JSON-LD de artigos (Article) e programas (Course) para os buscadores (#131).
   Funções puras: recebem o item da API ou da cópia local e devolvem o objeto schema.org. */
import { SITE_URL } from "../components/common/Seo";
import { minutosDoPrograma } from "./trilhas";

const ORGANIZACAO = { "@type": "Organization", name: "learnTECH", url: SITE_URL };

/* Só endereço absoluto https entra como imagem; imagem empacotada pelo Vite vira absoluta com o SITE_URL. */
function imagemAbsoluta(src) {
  if (typeof src !== "string" || !src) return undefined;
  if (/^https:\/\//.test(src)) return src;
  if (src.startsWith("/")) return `${SITE_URL}${src}`;
  return undefined;
}

/* "10hr e 30min" -> "PT10H30M" (duração ISO 8601). Sem duração legível, fica de fora. */
export function duracaoIso(duracao) {
  const minutos = minutosDoPrograma(duracao);
  if (!minutos) return undefined;
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}`;
}

/* Tira os campos vazios, para o JSON-LD não levar "undefined". */
function semVazios(objeto) {
  return Object.fromEntries(Object.entries(objeto).filter(([, v]) => v !== undefined && v !== null && v !== ""));
}

/* Artigo do blog: título até 110 caracteres, como pede o Google. Autor "Equipe ..." é organização. */
export function artigoJsonLd(post) {
  const url = `${SITE_URL}/blog/${post.id}`;
  const autor = post.author || "learnTECH";
  return semVazios({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: String(post.title ?? "").slice(0, 110),
    description: post.lead || post.excerpt,
    image: imagemAbsoluta(post.img),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { "@type": /^equipe\b/i.test(autor) || autor === "learnTECH" ? "Organization" : "Person", name: autor },
    publisher: ORGANIZACAO,
    inLanguage: "pt-BR",
    mainEntityOfPage: url,
    url,
  });
}

/* Programa: Course com quem oferece, nível, tempo estimado e acesso livre. */
export function programaJsonLd(programa) {
  const url = `${SITE_URL}/program/${programa.categoryFilter}/${programa.id}`;
  return semVazios({
    "@context": "https://schema.org",
    "@type": "Course",
    name: programa.title,
    description: programa.description,
    url,
    image: imagemAbsoluta(programa.image),
    provider: ORGANIZACAO,
    inLanguage: "pt-BR",
    educationalLevel: programa.level,
    timeRequired: duracaoIso(programa.duration),
    isAccessibleForFree: programa.accessType ? programa.accessType === "livre" : undefined,
    about: programa.category,
  });
}

/* Fim de dadosEstruturados.js */
