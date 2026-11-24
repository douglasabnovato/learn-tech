import { Component } from "react";
import { ehErroDeCarga } from "./erroDeCarga";

/* LimiteDeErro: um ErrorBoundary para os pedaços carregados sob demanda (revisão R19 de #153 e #154).
   Sem ele, se o import() de uma página ou do rodapé falhar (rede instável, ou uma aba aberta antes de um deploy
   que pede um arquivo que já não existe), o React desmonta o app inteiro e a tela fica branca.
   - `silencioso`: no erro, não mostra nada. É o caso do rodapé, que não é essencial para a página.
   - sem `silencioso`: mostra "Algo não carregou" com o botão "Recarregar".
   - `chave`: quando muda (o caminho da página), o erro é esquecido, e a navegação pelo menu volta a funcionar.
   A mensagem fala em conexão só quando o erro é de carga (learn-tech#157-3); um bug de renderização ganha uma
   frase genérica, para não enganar o diagnóstico. Os dois são registrados no console. */

export class LimiteDeErro extends Component {
  constructor(props) {
    super(props);
    this.state = { erro: null };
  }

  static getDerivedStateFromError(erro) {
    return { erro };
  }

  componentDidCatch(erro, info) {
    console.error("LimiteDeErro:", erro, info?.componentStack ?? "");
  }

  componentDidUpdate(anteriores) {
    if (this.state.erro && anteriores.chave !== this.props.chave) this.setState({ erro: null });
  }

  render() {
    if (!this.state.erro) return this.props.children;
    if (this.props.silencioso) return null;
    return <FalhaDeCarga deCarga={ehErroDeCarga(this.state.erro)} />;
  }
}

/* A tela de erro ocupa a altura toda, como o "Carregando...", para o rodapé não pular para o meio. */
export const FalhaDeCarga = ({ deCarga = true }) => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center" role="alert">
    <h1 className="text-3xl font-bold text-neutral-800">Algo não carregou</h1>
    <p className="text-base text-neutral-700">
      {deCarga
        ? "Uma parte do site não chegou. Pode ser a conexão, ou o site acabou de ganhar uma versão nova."
        : "Esta página teve um erro ao abrir. Recarregar costuma resolver; se continuar, volte pelo menu."}
    </p>
    <button
      type="button"
      onClick={() => window.location.reload()}
      className="h-11 px-5 bg-sky-800 text-white text-sm font-medium rounded-lg hover:bg-sky-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
    >
      Recarregar
    </button>
  </div>
);
