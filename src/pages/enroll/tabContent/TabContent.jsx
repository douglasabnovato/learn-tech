// TabContent.jsx — monta as abas de módulo a partir do próprio programa.
// A lista vem de program.modules e o conteúdo de program.moduleContents.

import PropTypes from "prop-types";
import { Tabs } from "../../../components/tabs/Tabs";
import { ModuleRenderer } from "./ModuleRenderer";

export const TabContent = ({
  program,
  onCompleteModule,
  activeIndex,
  onChange,
}) => {
  const modulos = program?.modules || [];
  const conteudos = program?.moduleContents || [];

  const tabs = modulos.map((mod, index) => ({
    id: `modulo-${mod.id}`,
    title: `Módulo ${mod.id}`,
    content: (
      <ModuleRenderer
        modulo={conteudos.find((c) => c.id === mod.id) || conteudos[index]}
        ordem={mod.id}
        onComplete={() => onCompleteModule(index)}
      />
    ),
  }));

  if (tabs.length === 0) {
    return (
      <div className="w-full py-12 text-center text-neutral-500">
        Este programa ainda não tem módulos publicados.
      </div>
    );
  }

  return (
    <div className="w-full">
      <Tabs tabs={tabs} activeIndex={activeIndex} onChange={onChange} />
    </div>
  );
};

TabContent.propTypes = {
  program: PropTypes.object,
  onCompleteModule: PropTypes.func,
  activeIndex: PropTypes.number,
  onChange: PropTypes.func,
};

// Fim de TabContent.jsx
