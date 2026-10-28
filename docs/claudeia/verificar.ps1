<#
  verificar.ps1 - verificacao local do learn-tech (Windows / PowerShell)

  Rode na RAIZ do projeto:
    powershell -ExecutionPolicy Bypass -File docs\claudeia\verificar.ps1

  Parametros:
    -PularInstalacao   nao roda "npm install"
    -LintObrigatorio   erro de lint para o script (padrao: so avisa, igual ao CI)

  Usa somente scripts que ja existem no package.json: test, build, lint.
  Para no primeiro erro.
#>
param(
  [switch]$PularInstalacao,
  [switch]$LintObrigatorio
)

$ErrorActionPreference = "Stop"

function Etapa {
  param([string]$Numero, [string]$Titulo, [string]$Explicacao)
  Write-Host ""
  Write-Host "=== [$Numero] $Titulo ===" -ForegroundColor Cyan
  Write-Host $Explicacao -ForegroundColor DarkGray
}

function Rodar {
  param([string]$Comando, [string]$Etapa, [bool]$Obrigatorio = $true)
  Write-Host "> $Comando" -ForegroundColor Gray
  cmd /c $Comando
  if ($LASTEXITCODE -ne 0) {
    if ($Obrigatorio) {
      Write-Host ""
      Write-Host "FALHOU na etapa: $Etapa (codigo $LASTEXITCODE). Corrija e rode de novo." -ForegroundColor Red
      exit $LASTEXITCODE
    } else {
      Write-Host "AVISO: $Etapa terminou com erro (codigo $LASTEXITCODE), seguindo porque e informativo." -ForegroundColor Yellow
      $script:avisos += $Etapa
    }
  } else {
    Write-Host "OK: $Etapa" -ForegroundColor Green
  }
}

$script:avisos = @()

# 0. Pre-requisitos
Etapa "0" "Pre-requisitos" "Confere se esta na raiz do projeto e se Node e npm estao instalados (Vitest 4 pede Node 20.19+ ou 22+)."
if (-not (Test-Path ".\package.json")) {
  Write-Host "package.json nao encontrado. Rode este script na raiz do learn-tech." -ForegroundColor Red
  exit 1
}
foreach ($cmd in @("node", "npm")) {
  if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
    Write-Host "$cmd nao encontrado no PATH. Instale o Node.js 22 LTS." -ForegroundColor Red
    exit 1
  }
}
Write-Host ("node " + (node --version) + " | npm " + (npm --version))

# 1. Instalacao
if (-not $PularInstalacao) {
  Etapa "1" "Instalacao de dependencias" "npm install (o .npmrc ja define legacy-peer-deps). Usa install e nao ci porque o package-lock.json esta no .gitignore."
  Rodar "npm install --no-audit --no-fund" "instalacao"
} else {
  Etapa "1" "Instalacao de dependencias" "Pulada (-PularInstalacao)."
}

# 2. Testes
Etapa "2" "Testes (npm test)" "Vitest roda o contrato de dados em src/constants/dados.test.js: ids, modulos, titulos, contagem de passos, icones e quiz."
Rodar "npm test" "testes"

# 3. Build
Etapa "3" "Build de producao (npm run build)" "Vite gera dist/. CI=true evita que o relatorio do visualizer abra o navegador."
$env:CI = "true"
try {
  Rodar "npm run build" "build"
} finally {
  Remove-Item Env:\CI -ErrorAction SilentlyContinue
}

# 4. Lint
Etapa "4" "Lint (npm run lint)" "ESLint no projeto. Informativo por padrao ate o resultado ser confirmado (ver docs/claudeia/04-testes-automatizados.md)."
Rodar "npm run lint" "lint" $LintObrigatorio.IsPresent

Write-Host ""
if ($script:avisos.Count -gt 0) {
  Write-Host ("Concluido com avisos em: " + ($script:avisos -join ", ")) -ForegroundColor Yellow
} else {
  Write-Host "Tudo certo: instalacao, testes, build e lint." -ForegroundColor Green
}
Write-Host "Proximo passo: 'npm run preview' e seguir docs/claudeia/05-testes-manuais.md."
