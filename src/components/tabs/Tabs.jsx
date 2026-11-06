import React from "react";
import PropTypes from "prop-types";

// Funciona controlado (activeIndex + onChange, como o TabContent usa para
// sincronizar a aba com a lista de módulos ao lado) ou sozinho, com estado
// interno, quando o pai não passa essas props.
// Segue o padrão de abas do WAI-ARIA: role tablist/tab/tabpanel, aria-selected,
// só a aba ativa entra no Tab, e as setas (mais Home e End) trocam de aba.
export const Tabs = ({ tabs = [], activeIndex, onChange }) => {
  const [indiceInterno, setIndiceInterno] = React.useState(0);
  const botoes = React.useRef([]);
  const prefixo = React.useId();
  const controlado = typeof activeIndex === "number";
  const bruto = controlado ? activeIndex : indiceInterno;
  // Mantém o índice dentro da lista (ex.: "avançar" depois do último módulo).
  const indice = Math.min(Math.max(bruto, 0), Math.max(tabs.length - 1, 0));

  const selecionar = (novo) => {
    if (novo < 0 || novo >= tabs.length) return;
    if (!controlado) setIndiceInterno(novo);
    if (onChange) onChange(novo);
  };

  // Setas trocam de aba e levam o foco junto (ativação automática).
  const aoTeclar = (e) => {
    const ultimo = tabs.length - 1;
    const destinos = {
      ArrowRight: indice === ultimo ? 0 : indice + 1,
      ArrowLeft: indice === 0 ? ultimo : indice - 1,
      Home: 0,
      End: ultimo,
    };
    if (!(e.key in destinos)) return;
    e.preventDefault();
    const novo = destinos[e.key];
    selecionar(novo);
    botoes.current[novo]?.focus();
  };

  if (tabs.length === 0) return null;

  const idAba = (tab) => `${prefixo}-aba-${tab.id}`;
  const idPainel = (tab) => `${prefixo}-painel-${tab.id}`;

  return (
    <div className="w-full">
      {/** tab headers */}
      <div
        role="tablist"
        aria-label="Módulos do programa"
        className="flex flex-wrap border-b border-neutral-200 bg-neutral-100 rounded-t-lg"
        onKeyDown={aoTeclar}
      >
        {tabs.map((tab, i) => {
          const ativa = i === indice;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                botoes.current[i] = el;
              }}
              type="button"
              role="tab"
              id={idAba(tab)}
              aria-selected={ativa}
              aria-controls={idPainel(tab)}
              tabIndex={ativa ? 0 : -1}
              onClick={() => selecionar(i)}
              className={`px-4 py-2 text-base font-semibold border-b-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                ativa
                  ? "border-sky-600 text-sky-700 bg-sky-600/10 rounded-t-lg"
                  : "text-neutral-600 border-neutral-100 hover:text-neutral-900"
              }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      {/** tab content */}
      <div className="mt-4">
        {tabs.map((tab, i) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={idPainel(tab)}
            aria-labelledby={idAba(tab)}
            hidden={i !== indice}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.node,
      content: PropTypes.node,
    })
  ),
  activeIndex: PropTypes.number,
  onChange: PropTypes.func,
};
