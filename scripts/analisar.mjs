/* npm run analyze: o build de sempre, com ANALYZE=1, para o vite.config.js ligar o rollup-plugin-visualizer e gerar
   dist/stats.html (L2-08). Um script node, e não `ANALYZE=1 npm run build`, porque essa forma não funciona no cmd
   nem no PowerShell do Windows; assim também não é preciso instalar o cross-env. No Linux e no macOS, o
   `ANALYZE=1 npm run build` dá o mesmo resultado. */
import { spawnSync } from "node:child_process";

const r = spawnSync("npm", ["run", "build"], {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, ANALYZE: "1" },
});
process.exit(r.status ?? 1);
