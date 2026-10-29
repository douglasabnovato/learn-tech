/* mensagens.js — envio do formulário "Fala aê" para POST /v1/mensagens da API learntech-content. */
import { API_URL } from "./conteudo";

const TEMPO_LIMITE_MS = 10000;

/* Erro com tipo, para a tela escolher o texto: "indisponivel", "invalido" (com campos) ou "falha". */
export class ErroEnvio extends Error {
  constructor(tipo, mensagem, campos = []) {
    super(mensagem);
    this.tipo = tipo;
    this.campos = campos;
  }
}

/* Envia { nome, email, motivo, mensagem, projeto, pagina }; resolve com a resposta da API ou rejeita com ErroEnvio. */
export async function enviarMensagem(dados) {
  if (!API_URL) throw new ErroEnvio("indisponivel", "VITE_API_URL não configurada");
  const controle = new AbortController();
  const timer = setTimeout(() => controle.abort(), TEMPO_LIMITE_MS);
  let resposta;
  try {
    resposta = await fetch(`${API_URL}/v1/mensagens`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
      signal: controle.signal,
    });
  } catch (e) {
    throw new ErroEnvio("falha", e?.name === "AbortError" ? "tempo esgotado" : "sem conexão com a API");
  } finally {
    clearTimeout(timer);
  }
  const corpo = await resposta.json().catch(() => ({}));
  if (resposta.ok) return corpo;
  if (resposta.status === 400) throw new ErroEnvio("invalido", corpo.erro || "dados inválidos", corpo.campos || []);
  if (resposta.status === 503) throw new ErroEnvio("indisponivel", corpo.erro || "mensagens indisponíveis");
  throw new ErroEnvio("falha", corpo.erro || `erro ${resposta.status}`);
}

/* Fim de mensagens.js */
