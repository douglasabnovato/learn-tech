# learn-tech — Testes automatizados

## O que existe hoje

| Script (`package.json`) | Comando | O que faz | Bloqueia o CI? |
| --- | --- | --- | --- |
| `test` | `npm test` → `vitest run` | Contrato de dados em `src/constants/dados.test.js` (ids, módulos × conteúdos, títulos, `lessonsCount`, ícones, quiz, ausência de `rating`/`students`) | Sim |
| `build` | `npm run build` → `vite build` | Build de produção em `dist/` (gera também `dist/stats.html`) | Sim |
| `lint` | `npm run lint` → `eslint .` | Padrão de código | Não (informativo, ver abaixo) |
| `test:watch` | `npm run test:watch` | Vitest em modo observação | — (uso local) |
| `dev` / `preview` | `npm run dev` / `npm run preview` | Servidor local (porta 3000) / prévia do build | — (uso manual) |

Não há testes de componente, de rota ou ponta a ponta. Não há script de typecheck (projeto em JavaScript).

## Por que o lint é informativo

Nesta revisão nenhum comando foi executado. Pela leitura, há 35 arquivos com `import React` sem uso e a regra `no-unused-vars` não tem `varsIgnorePattern` — é provável que `npm run lint` acuse erros (**não verificado**). Quando o dono confirmar o resultado:

- passou → remover `continue-on-error: true` de `.github/workflows/ci.yml`;
- falhou → executar o item L2-02 do plano e depois remover.

## Como rodar no Windows

Na raiz do projeto (`learn-tech`), no PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File docs\claudeia\verificar.ps1
```

Opções:

| Parâmetro | Efeito |
| --- | --- |
| `-PularInstalacao` | Não roda `npm install` (útil quando `node_modules` já está atualizado) |
| `-LintObrigatorio` | Faz o lint parar o script em caso de erro (padrão: só avisa, igual ao CI) |

O script para no primeiro erro e diz qual etapa falhou. Ele define `CI=true` durante o build para o relatório do visualizer não abrir o navegador.

## CI (GitHub Actions)

Arquivo: `.github/workflows/ci.yml`. Roda em push para `main`, `developer-mvp-2026` e `feature/**`, e em pull requests. Etapas: checkout → Node 22 → `npm install` → `npm test` → `npm run build` → `npm run lint` (informativo).

Usa `npm install` porque `package-lock.json` está no `.gitignore`. Se o lock passar a ser versionado (L2-01), trocar por `npm ci`.

## Testes que valem a pena adicionar (proposta, sem dependência nova)

| Teste | Onde | Dependência |
| --- | --- | --- |
| `ler()` do Quiz devolve o padrão com JSON inválido e com formato errado | extrair `ler/gravar` para `src/services/armazenamento.js` + teste Vitest | nenhuma (Vitest já existe; `localStorage` pode ser simulado com objeto) |
| `hidratar()` e `resolverMidia()` de `conteudo.js` | `src/services/conteudo.test.js` | nenhuma |
| Todo `path` usado em `Link to=` existe no `App.jsx` (pegaria o `/blogs`) | teste de varredura de arquivos com `node:fs` | nenhuma |
| Ícones do teste = ícones do `ModuleRenderer` | após L2-03 | nenhuma |
