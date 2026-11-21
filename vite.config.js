import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";

/* Pré-carregamento por rota (D19, 20/11/2026). Todas as rotas usam o mesmo index.html, então um script curto no
   head olha o caminho e cria os <link>: o pedaço de JavaScript da página (e o que ele importa), para não esperar
   o index.js pedir, e, na home, a primeira imagem do hero, que é o LCP (mesmo srcset e sizes do Hero.jsx). */
const ROTAS = [
  { teste: String.raw`p==="/"`, pagina: /pages[\\/]home[\\/]Home\.jsx$/i, hero: true },
  { teste: String.raw`/^\/program\/[^/]+\/[^/]+$/.test(p)`, pagina: /pages[\\/]detail[\\/]Detail\.jsx$/i },
  { teste: String.raw`/^\/blog\/[^/]+$/.test(p)`, pagina: /pages[\\/]home[\\/]blog[\\/]BlogOne\.jsx$/i },
];

const preloadPorRota = () => ({
  name: "preload-por-rota",
  apply: "build",
  transformIndexHtml: {
    order: "post",
    handler(html, { bundle }) {
      const itens = Object.values(bundle ?? {});
      const asset = (nome) => itens.find((a) => a.type === "asset" && a.names?.includes(nome))?.fileName;
      const chunks = itens.filter((c) => c.type === "chunk");
      const entrada = chunks.find((c) => c.isEntry);
      const jaCarregados = new Set([entrada?.fileName, ...(entrada?.imports ?? [])]);
      const partes = ROTAS.map((r) => {
        const pagina = chunks.find((c) => r.pagina.test(c.facadeModuleId ?? ""));
        if (!pagina) throw new Error(`preload-por-rota: pedaço não encontrado para ${r.pagina}`);
        const modulos = [pagina.fileName, ...pagina.imports].filter((f) => !jaCarregados.has(f)).map((f) => "/" + f);
        let corpo = `m(${JSON.stringify(modulos)});`;
        if (r.hero) {
          const pq = asset("dev-4-480.webp");
          const gr = asset("dev-4-800.webp");
          if (!pq || !gr) throw new Error("preload-por-rota: imagens do hero não encontradas no bundle");
          corpo += `var l=document.createElement("link");l.rel="preload";l.as="image";l.fetchPriority="high";l.imageSrcset="/${pq} 480w, /${gr} 800w";l.imageSizes="(min-width: 768px) 45vw, 92vw";document.head.appendChild(l);`;
        }
        return `if(${r.teste}){${corpo}}`;
      });
      const script = `(function(){var p=location.pathname;function m(hs){hs.forEach(function(h){var e=document.createElement("link");e.rel="modulepreload";e.href=h;document.head.appendChild(e)})}${partes.join("else ")}})()`;
      return { html, tags: [{ tag: "script", children: script, injectTo: "head-prepend" }] };
    },
  },
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    preloadPorRota(),
    visualizer({
      filename: "dist/stats.html",
      // Abre o relatório só na máquina local; em CI (CI=true) não há navegador.
      open: !globalThis.process?.env?.CI,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  server: {
    port: 3000,
  },
});