/* previa-conheca.mjs: prévia própria do link /conheca (issue #137).
   O WhatsApp, o LinkedIn e o e-mail não rodam JavaScript: leem só as metatags do HTML inicial.
   Depois do `vite build`, este script copia dist/index.html para dist/conheca/index.html com título,
   descrição, imagem e URL da apresentação. O React carrega por cima, igual às outras rotas.
   Os textos vêm de src/constants/conhecaData.js (cópia gerada de paginas/conheca.json da API).
   Uso: node scripts/previa-conheca.mjs  (roda sozinho no npm run build) */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://learn-tech-pied.vercel.app";
const ROTA = "/conheca";
const IMAGEM = `${SITE_URL}/og-conheca.png`;

const escapar = (t) => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Troca o content de uma metatag; falha alto se a tag sumir do index.html, para a prévia não sair genérica sem aviso. */
function trocarMeta(html, atributo, nome, valor) {
  const re = new RegExp(`(<meta\\s+${atributo}="${nome}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`previa-conheca: <meta ${atributo}="${nome}"> não encontrada em dist/index.html`);
  return html.replace(re, `$1${escapar(valor)}$2`);
}

export function montarPrevia(html, { titulo, descricao }) {
  let saida = html.replace(/<title>[^<]*<\/title>/, `<title>${escapar(titulo)} | learnTECH</title>`);
  saida = trocarMeta(saida, "property", "og:title", titulo);
  saida = trocarMeta(saida, "property", "og:description", descricao);
  saida = trocarMeta(saida, "property", "og:url", `${SITE_URL}${ROTA}`);
  saida = trocarMeta(saida, "property", "og:image", IMAGEM);
  const extras = [
    `<meta name="description" content="${escapar(descricao)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapar(titulo)}: learn-tech, bootcamps, career e tools" />`,
    `<link rel="canonical" href="${SITE_URL}${ROTA}" />`,
  ].join("\n    ");
  return saida.replace("</head>", `    ${extras}\n  </head>`);
}

async function main() {
  const dist = path.join(RAIZ, "dist");
  const base = path.join(dist, "index.html");
  if (!fs.existsSync(base)) throw new Error("previa-conheca: rode o vite build antes (dist/index.html não existe)");
  const { default: conheca } = await import(pathToFileURL(path.join(RAIZ, "src/constants/conhecaData.js")).href);
  const html = montarPrevia(fs.readFileSync(base, "utf8"), conheca.seo);
  fs.mkdirSync(path.join(dist, "conheca"), { recursive: true });
  fs.writeFileSync(path.join(dist, "conheca", "index.html"), html);
  console.log(`✔ prévia de ${ROTA}: dist/conheca/index.html (${conheca.seo.titulo})`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}

/* Fim de previa-conheca.mjs */
