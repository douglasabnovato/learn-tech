/* LimiteDeErro.test.jsx: o ErrorBoundary dos pedaços sob demanda (revisão R19 de #153 e #154).
   O vitest roda sem DOM, então o teste chama o ciclo do componente direto: o estado de erro, o que ele mostra e o reset. */
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LimiteDeErro } from "./LimiteDeErro";

const comErro = (props) => {
  const limite = new LimiteDeErro({ children: <p>página</p>, ...props });
  limite.state = LimiteDeErro.getDerivedStateFromError(new Error("Failed to fetch dynamically imported module"));
  return limite;
};

describe("LimiteDeErro", () => {
  it("sem erro, mostra o conteúdo", () => {
    expect(renderToStaticMarkup(<LimiteDeErro>{<p>página</p>}</LimiteDeErro>)).toBe("<p>página</p>");
  });

  it("no erro de uma página, mostra 'Algo não carregou' com 'Recarregar', num h1 só", () => {
    const html = renderToStaticMarkup(comErro({}).render());
    expect(html).toContain("Algo não carregou");
    expect(html).toContain("Recarregar");
    expect(html).toContain('role="alert"');
    expect(html.match(/<h1/g)).toHaveLength(1);
  });

  it("silencioso (o rodapé): no erro, não mostra nada", () => {
    expect(comErro({ silencioso: true }).render()).toBeNull();
  });

  it("ao mudar de página (chave), esquece o erro", () => {
    const limite = comErro({ chave: "/novo" });
    let novo;
    limite.setState = (s) => (novo = s);
    limite.componentDidUpdate({ chave: "/antigo" });
    expect(novo).toEqual({ erro: null });
    novo = undefined;
    limite.componentDidUpdate({ chave: "/novo" });
    expect(novo).toBeUndefined();
  });
});
