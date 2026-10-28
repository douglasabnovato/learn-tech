# learn-tech — Roteiro de testes manuais

> Rodar em dois ambientes: **local** (`npm run build` e `npm run preview`, ou `npm run dev` em `http://localhost:3000`) e **publicado** (https://learn-tech-pied.vercel.app).
> Marque `[x]` ao passar. Anote o que falhar com print e URL.
> Itens com ⚠ descrevem comportamento atual conhecido (decisão de produto pendente) — o esperado é o comportamento **de hoje**, não o ideal.

## A. Carga e identificação de acesso (regra de negócio)

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-01 | Abrir a Home numa janela anônima (publicado, com `VITE_API_URL` configurada) | Página carrega; o script de identificação pede nome e e-mail uma vez | [ ] |
| T-02 | Preencher a identificação e recarregar | Não pergunta de novo neste navegador | [ ] |
| T-03 | DevTools → Network: filtrar `identificacao.js` e `/v1/` | Script `/sdk/identificacao.js` carregado uma vez; requisições `/v1/learn-tech/...` com status 200 | [ ] |
| T-04 | Local sem `.env` (sem `VITE_API_URL`) | Site funciona com dados locais; nenhum pedido de identificação; sem erro no console | [ ] |

## B. Home e navegação

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-05 | Percorrer a Home de cima a baixo | Hero com carrossel e 2 CTAs, Stats, Categorias, Programas, Acesso rápido, Blog, Footer com ano corrente | [ ] |
| T-06 | Clicar em cada item do menu (Home, Programas, Recursos, Learn TECH, Fala aê) | Abre a página certa; item ativo com texto em gradiente; rolagem volta ao topo | [ ] |
| T-06b | Rolar mais de 100 px | Navbar ganha fundo translúcido e borda | [ ] |
| T-06c | ⚠ Blog → "Veja Todos" | Hoje cai na página "não encontrado" (`/blogs` não existe) | [ ] |
| T-06d | Abrir um artigo do Blog | `/blog/:id` com o artigo e relacionados | [ ] |
| T-06e | Botão fixo de voltar ao topo | Aparece ao rolar e leva ao topo | [ ] |

## C. Catálogo e programa

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-06f | Programas → digitar "React" na busca | Lista filtra pelo título; contador atualiza | [ ] |
| T-06g | Filtrar por categoria "IA" | Mostra o programa 801 e demais de IA | [ ] |
| T-06h | "Ver mais" | Carrega +6 cards | [ ] |
| T-06i | Abrir o programa 1 (`/program/web/1`) | Página de apresentação com imagem, duração, categoria e botões "Acessar" e "Programas" | [ ] |
| T-06j | ⚠ Abrir um programa sem conteúdo (ex.: um card "novidade") → "Acessar" | Hoje fica em "Carregando conteúdo..." sem módulos (pendência L3-02) | [ ] |

## D. Treinamento (lote 1 mexeu aqui)

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-07 | Em `/program/web/1/enroll`, clicar em "Módulo 3" na lista lateral | **A aba do Módulo 3 passa a ser exibida** e o item lateral fica destacado (correção L1-02) | [ ] |
| T-08 | Clicar na aba "Módulo 2" no topo das abas | Conteúdo do Módulo 2 aparece e o destaque da lista lateral acompanha | [ ] |
| T-09 | Marcar todos os passos de um módulo e clicar no botão do final | Progresso geral aumenta (1/6 ≈ 17% no programa 1) e **a aba do próximo módulo abre** | [ ] |
| T-10 | Concluir o último módulo | Progresso 100%; continua exibindo o último módulo, sem erro | [ ] |
| T-11 | ⚠ Recarregar a página após concluir módulos | Hoje o progresso de módulos volta a 0% (não persiste; pendência L3-03) | [ ] |
| T-12 | Console: `localStorage.setItem('quiz:1:historico','"x"')` e recarregar | Página abre e o quiz funciona (correção L1-03) | [ ] |
| T-13 | Responder todas as questões do quiz | Cada resposta mostra certo/errado e explicação; ao final, placar com percentual | [ ] |
| T-14 | Recarregar no meio do quiz | Respostas dadas continuam marcadas | [ ] |
| T-15 | Reiniciar o quiz | Nova tentativa entra no histórico com data, hora e pontuação | [ ] |
| T-16 | Repetir T-07 a T-15 nos programas 101 e 801 | Mesmo comportamento com 4 módulos | [ ] |
| T-17 | Programa 1: vídeo | Embed do YouTube carrega e toca | [ ] |

## E. Demais páginas

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-18 | `/resources`, `/about`, `/aprender`, `/careers` | Conteúdo carrega, links externos abrem | [ ] |
| T-19 | `/softskills` e `/mentorias` | Grade de vídeos; clicar abre o modal com o vídeo; fechar funciona | [ ] |
| T-20 | `/category` | Todas as categorias | [ ] |
| T-21 | `/terms` e `/privacy` | Textos completos; Privacidade cita a identificação por nome e e-mail | [ ] |
| T-22 | ⚠ `/falaae`: preencher as etapas e enviar | Hoje mostra sucesso, mas a mensagem **não é enviada** a ninguém (pendência L3-04) | [ ] |
| T-23 | `/rota-que-nao-existe` | Página "não encontrado" | [ ] |
| T-24 | Acessar direto `https://learn-tech-pied.vercel.app/program/web/1` (sem passar pela Home) | Abre normalmente (rewrite de SPA) | [ ] |

## F. Celular e responsivo

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-25 | DevTools em 375 px (ou celular real) | Sem rolagem horizontal em Home, Programas, Detalhe, Treinamento e Fala aê | [ ] |
| T-26 | Abrir e fechar o menu hambúrguer | Menu desliza da direita; clicar num item fecha | [ ] |
| T-27 | Treinamento no celular | Lista de módulos e quiz aparecem abaixo do conteúdo; T-07 funciona | [ ] |
| T-28 | Celular real (Android/iOS) no site publicado | Fontes, imagens e vídeo carregam | [ ] |

## G. Temas e acessibilidade

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-29 | Sistema operacional em modo escuro | Site continua no tema claro (só existe tema claro hoje), legível | [ ] |
| T-30 | Navegar só com Tab/Enter na Home e no Treinamento | Todos os links e botões alcançáveis | [ ] |
| T-31 | Zoom 200% | Conteúdo reflui sem cortar | [ ] |

## H. Versão publicada

| ID | Ação | Esperado | OK |
| --- | --- | --- | --- |
| T-32 | Ver código-fonte do publicado | `lang="pt-BR"`, meta description e favicons | [ ] |
| T-33 | Lighthouse (mobile) na Home | Anotar Performance, Acessibilidade, SEO para comparar com os próximos lotes | [ ] |
| T-34 | Após deploy desta branch, repetir T-07 a T-12 no publicado | Mesmo resultado do local | [ ] |
