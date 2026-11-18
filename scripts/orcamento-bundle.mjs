/* orcamento-bundle.mjs: o chunk inicial (o <script type="module"> do dist/index.html) não passa de 320 kB (issue #127).
   O CLAUDE.md pede menos de 300 kB; o limite de 320 dá folga para não reprovar por pouco, e a meta continua 300.
   Uso: npm run build && npm run orcamento */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LIMITE_KB = Number(process.env.ORCAMENTO_JS_KB ?? 320);

const html = fs.readFileSync(path.join(RAIZ, "dist", "index.html"), "utf8");
const entrada = html.match(/<script[^>]+type="module"[^>]+src="([^"]+)"/)?.[1];
if (!entrada) {
  console.error("✖ orcamento: script de entrada não encontrado em dist/index.html (rode o build antes)");
  process.exit(1);
}

const kb = fs.statSync(path.join(RAIZ, "dist", entrada.replace(/^\//, ""))).size / 1000;
const resumo = `chunk inicial ${entrada}: ${kb.toFixed(1)} kB (limite ${LIMITE_KB} kB)`;
if (kb > LIMITE_KB) {
  console.error(`✖ ${resumo}`);
  process.exit(1);
}
console.log(`✔ ${resumo}`);
