/* orcamento-bundle.mjs: o chunk inicial (o <script type="module"> do dist/index.html) não passa do teto (learn-tech#152).
   - Teto: 285 kB. Acima dele, a CI falha. A entrada mede 281,7 kB (23/11/2026), e o teto barra o crescimento sem folga grande.
   - Meta: 270 kB. Acima dela, só um aviso. React, react-dom e o roteador já somam cerca de 266 kB, e o código próprio é ~5%.
   - A meta que o usuário sente é o LCP ≤ 2,5 s no celular, medido na produção (npm run ux:lcp no learntech-content).
   Uso: npm run build && npm run orcamento (ORCAMENTO_JS_KB e ORCAMENTO_META_KB mudam os valores). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LIMITE_KB = Number(process.env.ORCAMENTO_JS_KB ?? 285);
const META_KB = Number(process.env.ORCAMENTO_META_KB ?? 270);

const html = fs.readFileSync(path.join(RAIZ, "dist", "index.html"), "utf8");
const entrada = html.match(/<script[^>]+type="module"[^>]+src="([^"]+)"/)?.[1];
if (!entrada) {
  console.error("✖ orcamento: script de entrada não encontrado em dist/index.html (rode o build antes)");
  process.exit(1);
}

const kb = fs.statSync(path.join(RAIZ, "dist", entrada.replace(/^\//, ""))).size / 1000;
const resumo = `chunk inicial ${entrada}: ${kb.toFixed(1)} kB (meta ${META_KB} kB, teto ${LIMITE_KB} kB)`;
if (kb > LIMITE_KB) {
  console.error(`✖ ${resumo}`);
  process.exit(1);
}
if (kb > META_KB) {
  console.log(`⚠ ${resumo}: acima da meta, abaixo do teto`);
} else {
  console.log(`✔ ${resumo}`);
}
