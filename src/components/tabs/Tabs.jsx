import React from "react";
import PropTypes from "prop-types";

// Funciona controlado (activeIndex + onChange, como o TabContent usa para
// sincronizar a aba com a lista de módulos ao lado) ou sozinho, com estado
// interno, quando o pai não passa essas props.
export const Tabs = ({ tabs = [], activeIndex, onChange }) => {
  const [indiceInterno, setIndiceInterno] = React.useState(0);
  const controlado = typeof activeIndex === "number";
  const bruto = controlado ? activeIndex : indiceInterno;
  // Mantém o índice dentro da lista (ex.: "avançar" depois do último módulo).
  const indice = Math.min(Math.max(bruto, 0), Math.max(tabs.length - 1, 0));
  const activeTab = tabs[indice]?.id;

  const setActiveTab = (id) => {
    const novo = tabs.findIndex((t) => t.id === id);
    if (novo < 0) return;
    if (!controlado) setIndiceInterno(novo);
    if (onChange) onChange(novo);
  };

  if (tabs.length === 0) return null;

  return (
    <div className="w-full">
      {/** tab headers */}
      <div className="flex flex-wrap border-b border-neutral-200 bg-neutral-100 rounded-t-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-base font-semibold border-b-2 cursor-pointer focus:outline-none ${
              activeTab === tab.id
                ? "border-in-500 text-in-500 bg-in-500/10 rounded-t-lg"
                : "text-neutral-600 border-neutral-100 hover:text-neutral-900"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/** tab content */}
      <div className="mt-">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
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
