import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import { fileURLToPath } from "node:url";

/* react-router 7: o "exports" do pacote aponta todas as condições para dist/development, e o build levava a versão de
   desenvolvimento (com 33 avisos). O alias usa a versão de produção (learn-tech#148 A2 e #152). Ao atualizar o
   react-router, confira se os dois arquivos ainda existem: se sumirem, o build quebra, que é o lado seguro.
   Só no build (learn-tech#157-7): no `npm run dev` fica a versão de desenvolvimento, com os avisos do roteador. */
const routerProducao = (arquivo) => fileURLToPath(new URL(`./node_modules/react-router/dist/production/${arquivo}`, import.meta.url));

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
      /* O logo do cabeçalho é um arquivo à parte (fora do JS, #170): o preload o pede junto com a entrada, em todas
         as rotas, para o ícone não chegar depois do texto "Learn TECH" (R19 do #170, nota 1). */
      const logo = asset("logo192.svg");
      if (!logo) throw new Error("preload-por-rota: logo192.svg não encontrado no bundle");
      return {
        html,
        tags: [
          { tag: "script", children: script, injectTo: "head-prepend" },
          { tag: "link", attrs: { rel: "preload", as: "image", href: "/" + logo, type: "image/svg+xml" }, injectTo: "head" },
        ],
      };
    },
  },
});

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    preloadPorRota(),
    /* O relatório da composição dos pedaços só sob pedido (L2-08): `npm run analyze` (ANALYZE=1, só esse valor) gera o
       dist/stats.html. O build padrão não o gera, então ele não vai para o deploy nem abre o navegador. */
    ...(globalThis.process?.env?.ANALYZE === "1"
      ? [
          visualizer({
            filename: "dist/stats.html",
            // Abre o relatório só na máquina local; em CI (CI=true) não há navegador.
            open: !globalThis.process?.env?.CI,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias:
      command === "build"
        ? [
            { find: /^react-router$/, replacement: routerProducao("index.mjs") },
            { find: /^react-router\/dom$/, replacement: routerProducao("dom-export.mjs") },
          ]
        : [],
  },
  /* Entrada de 279,6 para 269,9 kB (learn-tech#152, meta 270), sem trocar React nem roteador:
     - modulePreload: false tira o helper de preload do Vite (e o polyfill). O pré-carregamento que importa já vem
       do preload-por-rota acima (página e dependências de /, /program/... e /blog/...); nas outras rotas, os pedaços
       comuns já estão em cache depois da primeira página. LCP no celular simulado igual antes e depois (#152).
     - terser (2 passadas, módulo ES) no lugar do esbuild: cerca de 5 kB a menos, sobretudo no react-dom.
     - SVG fora do JS: o logo (1,4 kB) virava base64 na entrada; agora é um arquivo com hash, em cache, com preload.
     Atenção: o corte do modulePreload vale enquanto o CSS for um só (Tailwind). Se uma página sob demanda passar a
     importar CSS próprio, confira na documentação do Vite se o carregamento desse CSS ainda funciona (R19, nota 5). */
  build: {
    modulePreload: false,
    minify: "terser",
    terserOptions: { module: true, ecma: 2020, compress: { passes: 2 } },
    assetsInlineLimit: (arquivo) => (arquivo.endsWith(".svg") ? false : undefined),
  },
  server: {
    port: 3000,
  },
}));
