import { Link } from "react-router-dom";
import { Seo } from "./Seo";

// Aviso da reserva honesta: a API não respondeu e o conteúdo pedido não está na cópia local.
// `compacto` é a versão em caixa, para o Detail mostrar abaixo do título e da descrição do programa;
// sem ele, ocupa a página inteira (Enroll, ou Detail sem nenhum dado do programa).
export const ConteudoIndisponivel = ({ onTentarDeNovo, compacto = false }) => {
  const caixa = compacto
    ? "w-full rounded-xl border border-amber-300 bg-amber-50 p-5 space-y-3"
    : "w-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 p-6";

  return (
    <div className={caixa} role="status">
      {/* Na versão de página inteira, a rota não tem conteúdo próprio: não indexar. */}
      {!compacto && <Seo titulo="Conteúdo indisponível agora" noindex />}
      {compacto ? (
        <h2 className="text-xl font-bold text-neutral-800">Conteúdo indisponível agora</h2>
      ) : (
        <h1 className="text-3xl font-bold text-neutral-800">Conteúdo indisponível agora</h1>
      )}
      <p className="text-base text-neutral-700">
        Não conseguimos carregar as aulas deste programa. Pode ser uma falha passageira de conexão.
      </p>
      <div className={`flex flex-wrap gap-3 ${compacto ? "" : "justify-center"}`}>
        {onTentarDeNovo && (
          <button
            type="button"
            onClick={onTentarDeNovo}
            className="h-10 px-5 bg-sky-800 text-white text-sm font-medium rounded-lg hover:bg-sky-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Tentar de novo
          </button>
        )}
        <Link
          to="/programs"
          className="h-10 px-5 border border-neutral-300 text-neutral-800 text-sm font-medium rounded-lg flex items-center hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
        >
          Ver todos os programas
        </Link>
      </div>
    </div>
  );
};
