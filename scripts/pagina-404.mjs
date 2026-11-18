/* pagina-404.mjs: 404 de verdade na Vercel (issue #131).
   O vercel.json reescreve para o index.html só as rotas conhecidas do React Router; o resto cai no
   dist/404.html, que a Vercel serve com status HTTP 404. Este arquivo é o próprio index.html (o React
   carrega e mostra o NotFound), com noindex e sem canonical, para o buscador não indexar a página de erro.
   Uso: node scripts/pagina-404.mjs  (roda sozinho no npm run build) */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function montarPagina404(html) {
  if (!/<\/head>/.test(html)) throw new Error("pagina-404: </head> não encontrado em dist/index.html");
  return html
    .replace(/\s*<link\s+rel="canonical"[^>]*>/, "")
    .replace(/<title>[^<]*<\/title>/, "<title>Página não encontrada | learnTECH</title>")
    .replace(/<\/head>/, '    <meta name="robots" content="noindex" />\n  </head>');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const origem = path.join(RAIZ, "dist", "index.html");
  const destino = path.join(RAIZ, "dist", "404.html");
  fs.writeFileSync(destino, montarPagina404(fs.readFileSync(origem, "utf8")));
  console.log("pagina-404: dist/404.html gerado (status 404 na Vercel, noindex)");
}
