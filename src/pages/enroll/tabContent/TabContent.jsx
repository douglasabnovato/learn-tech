import PropTypes from "prop-types";
import { Tabs } from "../../../components/tabs/Tabs";
import { ModuleZero } from "./ModuleZero";
import { ModuleOne } from "./ModuleOne";
import { ModuleTwo } from "./ModuleTwo";
import { ModuleThree } from "./ModuleThree";
import { ModuleFour } from "./ModuleFour";
import { ModuleFive } from "./ModuleFive";

export const TabContent = ({
  program,
  onCompleteModule,
  activeIndex,
  onChange,
}) => {
  const tabs = [
    {
      id: "modulo-0",
      title: "Módulo 0",
      content: (
        <ModuleZero program={program} onComplete={() => onCompleteModule(0)} />
      ),
    },
    {
      id: "modulo-1",
      title: "Módulo 1",
      content: (
        <ModuleOne program={program} onComplete={() => onCompleteModule(1)} />
      ),
    },
    {
      id: "modulo-2",
      title: "Módulo 2",
      content: (
        <ModuleTwo program={program} onComplete={() => onCompleteModule(2)} />
      ),
    },
    {
      id: "modulo-3",
      title: "Módulo 3",
      content: (
        <ModuleThree program={program} onComplete={() => onCompleteModule(3)} />
      ),
    },
    {
      id: "modulo-4",
      title: "Módulo 4",
      content: (
        <ModuleFour program={program} onComplete={() => onCompleteModule(4)} />
      ),
    },
    {
      id: "modulo-5",
      title: "Módulo 5",
      content: (
        <ModuleFive program={program} onComplete={() => onCompleteModule(5)} />
      ),
    },
  ];
  return (
    <div className="w-full">
      {/*
        activeIndex / onChange tornam o Tabs um componente controlado:
        o clique na lista lateral (EnrollPrograms) passa a decidir qual aba
        aparece aqui, em vez de cada peça ter seu próprio estado isolado.

        Se o seu componente Tabs ainda não aceitar essas duas props,
        cola o arquivo dele aqui que eu ajusto exatamente.
      */}
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