# Acessibilidade e rolagem da home: relatório de 10/11/2026

Issues: #130 (carrossel, modal de vídeo e axe), #139 (rolagem horizontal da home). Branch `feature/tasks-10-11-2026-b`.

## Como foi medido

- Build local: `npm run build` e `npx vite preview --port 4301` (depois). O "antes" é o build de `origin/developer-mvp-2026` (commit `6a8a2ac`), servido na porta 4311.
- Build sem `VITE_API_URL`: o site usa a cópia de reserva e não carrega a janela de identificação. As rotas da issue existem na reserva (`/program/web/1/enroll` é o programa 1).
- O fallback da SPA no `vite preview` serviu todas as rotas sem problema (títulos próprios em cada uma).
- axe-core 4 por `@axe-core/playwright`, com as mesmas tags e exclusão do e2e da API: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`, sem `iframe`. O e2e da API (`e2e/acessibilidade.spec.mjs`) só cobre `/`, um programa e um artigo; as quatro rotas da issue foram medidas por um script avulso com a mesma configuração, fora dos dois repositórios.

## axe nas quatro rotas (serious ou critical)

| Rota | Antes | Depois |
|---|---|---|
| `/` | `color-contrast` (38), `svg-img-alt` (3) | 0 |
| `/programs` | `label-content-name-mismatch` (1) | 0 |
| `/program/web/1/enroll` | `color-contrast` (7), `label-content-name-mismatch` (5) | 0 |
| `/falaae` | `color-contrast` (1) | 0 |
| **Total** | **6 regras, 55 ocorrências** | **0** |

Nenhuma violação moderate ou minor nas quatro rotas, antes ou depois.

e2e da API: `E2E_LEARN_TECH=http://localhost:4301 npx playwright test -c e2e/playwright.config.mjs acessibilidade --grep learn-tech`, 3 passaram, 0 violações em home, programa-1104 e artigo.

### O que mudou para zerar

| Regra | Onde | Correção |
|---|---|---|
| `color-contrast` | `StatsCard` (home) | Descrição `neutral-500` → `neutral-600`; etiqueta de categoria no tom 800 da cor do ícone (o 600 dava 3,0 a 4,3:1) |
| `svg-img-alt` | `StatsCard` | Ícone decorativo com `aria-hidden` |
| `label-content-name-mismatch` | "Ver mais" de `/programs` | Sai o `aria-label`; o texto visível já diz quantos faltam |
| `color-contrast` | Enroll: lista de módulos e "Módulo N" | `neutral-400` → `neutral-600` |
| `color-contrast` | Quiz: "Anterior" e "Próxima" | `sky-500` → `sky-700` |
| `label-content-name-mismatch` | Botão do passo (mostra o número) | Nome "Passo N: marcar como concluído" |
| `color-contrast` | Fala aê: número da pergunta | `neutral-500` → `neutral-600` |

## Carrossel do Hero (WCAG 2.2.2)

- Botão "Pausar a troca de imagens" / "Retomar a troca de imagens", no canto da imagem.
- Com `prefers-reduced-motion: reduce`, a troca automática não começa; o botão aparece como "Retomar".
- Os pontos indicadores ficam `aria-hidden` (são só visuais).

## Modal de vídeo

- Ao abrir, o foco vai para "Fechar vídeo". Tab e Shift+Tab circulam dentro do diálogo.
- Se o foco escapar (o Tab de dentro do iframe do YouTube não passa pela página), um `focusin` o traz de volta.
- Esc, clique fora ou "Fechar" devolvem o foco ao card que abriu.

## Conferência de comportamento (Playwright, 10/11/2026, no preview)

| Verificação | Resultado |
|---|---|
| Hero troca a imagem em 5 s sem preferência | OK |
| Hero pausado não troca; botão vira "Retomar" | OK |
| Hero com `reducedMotion: "reduce"` não troca; botão começa em "Retomar" | OK |
| Modal em `/softskills` abre com foco em "Fechar vídeo" | OK |
| 6 Tab e 6 Shift+Tab: foco sempre dentro do diálogo | OK |
| Esc devolve o foco ao card "Dominando as Soft Skills" | OK |

## Rolagem horizontal da home (#139)

Excesso = `scrollWidth - innerWidth`, no preview:

| Largura | Antes | Depois | Antes, etiquetas longas | Depois, etiquetas longas |
|---|---|---|---|---|
| 360 | 35 | 0 | 62 | 0 |
| 768 | 95 | 0 | 102 | 0 |
| 1024 | 31 | 0 | 38 | 0 |
| 1440 | 0 | 0 | 0 | 0 |

"Etiquetas longas": "Produtos-Digitais", "Comunicação" e "Inteligência-Artificial" injetadas nas etiquetas, para simular as categorias da produção que a reserva não tem.

- `StatsCard`: a etiqueta quebra linha e o card cabe na coluna (`min-w-0`, `flex-wrap`).
- `QuickAccess`: em 768 px, o ícone de 10rem e o título não cabiam lado a lado. As duas colunas agora começam em 1024 px; em tablet, os cards ficam empilhados como no celular.
- e2e: `E2E_LEARN_TECH=http://localhost:4301 npx playwright test -c e2e/playwright.config.mjs capturas --grep "learn-tech — home"`: antes 1 de 4 passava; depois 4 de 4.

## Pendente

- Conferir na produção depois do deploy (a home da API tem outras categorias; a simulação acima cobre as conhecidas).
- Leitor de tela real (NVDA) não foi usado: a conferência é pelo axe e pelo Playwright.
- O chunk inicial foi de 284,6 kB para 285,8 kB (os dois ícones de pausa vêm de `react-icons/io`, o mesmo pacote do Navbar). Meta ≤ 300 kB.
