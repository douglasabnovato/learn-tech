/* identificacao.js — injeta o script único de identificação do ecossistema (servido pela API learntech-content). */
import { API_URL } from "./conteudo";

/* Adiciona a tag <script> uma única vez; sem VITE_API_URL, não faz nada (desenvolvimento offline). */
export function carregarIdentificacao() {
  if (!API_URL || document.getElementById("learntech-sdk")) return;
  const s = document.createElement("script");
  s.id = "learntech-sdk";
  s.src = `${API_URL}/sdk/identificacao.js`;
  s.defer = true;
  s.dataset.projeto = "learn-tech";
  s.dataset.privacidade = `${window.location.origin}/privacy`;
  document.head.appendChild(s);
}

/* Fim de identificacao.js */
