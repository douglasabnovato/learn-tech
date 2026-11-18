import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Inter servida pelo próprio site (fontsource, eixos opsz e wght, normal e itálico): sem o CSS do Google bloqueando a renderização (~940 ms) e sem enviar o IP de quem visita a terceiros.
import "@fontsource-variable/inter/opsz.css";
import "@fontsource-variable/inter/opsz-italic.css";
import "./index.css";
import App from "./App.jsx";
import { carregarIdentificacao } from "./services/identificacao";

carregarIdentificacao();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
