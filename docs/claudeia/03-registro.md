# learn-tech — Registro de execução

| Campo | Valor |
| --- | --- |
| Data | 27/10/2026 |
| Branch | `feature/claudeia-2026-10-27` (já ativa; nenhum comando git foi rodado) |
| Executado por | Revisor independente (Claude) |
| Comandos rodados | Apenas leitura (`cat`, `grep`, `find`, `wc`, `du`, `file`) e escrita com `python3`/`cat`. **Sem** npm, node, build, lint, teste ou git |
| Arquivos apagados | Nenhum |
| `.env` lido | Não. Só os nomes de variáveis de `.env.example` (`VITE_API_URL`) |

## Erros encontrados antes de mexer

| Arquivo | Problema | Efeito |
| --- | --- | --- |
| `src/components/tabs/Tabs.jsx` | Recebia só `tabs` e mantinha estado próprio; ignorava `activeIndex` e `onChange` enviados por `TabContent.jsx:39`. Também quebrava com lista vazia (`tabs[0].id`) | Clique em módulo na lista lateral e o "avançar para o próximo módulo" (`EnrollPrograms.jsx:28-33`) não trocavam o conteúdo exibido |
| `src/pages/enroll/quiz/Quiz.jsx` | `JSON.parse` sem checar formato | Valor inválido em `quiz:<id>:historico` (ex.: string) quebraria `[...quizHistory]` ao reiniciar |
| `vite.config.js` | `visualizer({ open: true })` | Em CI tentaria abrir navegador |

## Alterações, arquivo por arquivo

| Arquivo | Tipo | O que mudou | Fim de linha | Como verificar |
| --- | --- | --- | --- | --- |
| `src/components/tabs/Tabs.jsx` | Editado | Modo controlado (`activeIndex` + `onChange`) com fallback para estado interno; índice limitado ao intervalo da lista; retorna `null` com lista vazia; `propTypes`. **Marcação e classes CSS inalteradas** | CRLF preservado | Roteiro manual T-07 e T-08 (`05-testes-manuais.md`) |
| `src/pages/enroll/quiz/Quiz.jsx` | Editado | `ler()` só aceita valor do mesmo formato do padrão (array ↔ array, objeto ↔ objeto); try/catch já existia | CRLF preservado | T-12: gravar `localStorage.setItem('quiz:1:historico','"x"')` no console, recarregar, quiz abre |
| `vite.config.js` | Editado | `open: !globalThis.process?.env?.CI` (usa `globalThis` para não gerar `no-undef` no lint com globais de navegador) | CRLF preservado | `npm run build` local abre o relatório; com `$env:CI="true"` não abre |
| `.github/workflows/ci.yml` | Novo | Node 22 → `npm install` → `npm test` → `npm run build` → `npm run lint` (informativo) | LF | Push na branch e conferir aba Actions |
| `docs/claudeia/01-relatorio.md` | Novo | Relatório | LF | — |
| `docs/claudeia/02-plano-e-arquitetura.md` | Novo | Arquitetura, ADRs e plano | LF | — |
| `docs/claudeia/03-registro.md` | Novo | Este registro | LF | — |
| `docs/claudeia/04-testes-automatizados.md` | Novo | Guia dos testes automatizados | LF | — |
| `docs/claudeia/verificar.ps1` | Novo | Script de verificação para Windows (UTF-8 com BOM, sem acentos, para o PowerShell 5.1) | CRLF | Rodar na raiz: `powershell -ExecutionPolicy Bypass -File docs\claudeia\verificar.ps1` |
| `docs/claudeia/05-testes-manuais.md` | Novo | Roteiro manual | LF | — |

Nada foi alterado em conteúdo, textos, dados, regras de negócio, identificação de acesso ou aparência.

## Pendências

| ID | Pendência | Responsável |
| --- | --- | --- |
| PEN-01 | Rodar `docs\claudeia\verificar.ps1` e confirmar instalação, testes, build e lint | Dono |
| PEN-02 | Se o lint passar, remover `continue-on-error` do `ci.yml`; se falhar, executar L2-02 | Dono / próximo lote |
| PEN-03 | Decidir os itens L3-02 a L3-09 (produto) | Dono |
| PEN-04 | Decidir se versiona `package-lock.json` (L2-01) | Dono |
| PEN-05 | Conferir a versão publicada (não foi acessível desta sessão) com o roteiro `05-testes-manuais.md` | Dono |
| PEN-06 | O `dist/` local é de 07/10/2026; `programsData.js` mudou depois. Números de bundle devem ser remedidos | Dono |

## Decisão de 18/11/2026: lockfile e formatação na CI (PEN-04, issue #127)

- **Decisão do autor**, dada no chat em 18/11/2026 ao aprovar o item 9 de `orientacoes-ia.md`: o `package-lock.json` passa a ser versionado e sai do `.gitignore`. A CI instala com `npm ci`.
- A CI ganha mais dois passos:
  - `npm run format:check`. Antes do passo, o código foi reformatado num commit só de estilo, para as 140 colunas do `.prettierrc`; as cópias geradas ficam de fora pelo `.prettierignore`.
  - `npm run orcamento`: o chunk inicial não pode passar de 320 kB. Em 18/11 ele tem 286,4 kB.
- A PEN-04 está resolvida.
