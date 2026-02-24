import React from "react";
import { Tabs } from "../../../components/tabs/Tabs";
import { ModuleZero } from "./ModuleZero";
import { ModuleOne } from "./ModuleOne";
import { ModuleTwo } from "./ModuleTwo";
import { ModuleThree } from "./ModuleThree";
import { ModuleFour } from "./ModuleFour";
import { ModuleFive } from "./ModuleFive";

export const TabContent = ({ onCompleteModule, completedModuleIndex }) => {
  const tabs = [
    {
      id: "modulo-0",
      title: "Módulo 0",
      content: (
        <ModuleZero onComplete={() => onCompleteModule(0)} />
      ),
    },
    {
      id: "modulo-1",
      title: "Módulo 1",
      content: (
        <ModuleOne onComplete={() => onCompleteModule(1)} />
      ),
    },
    {
      id: "modulo-2",
      title: "Módulo 2",
      content: (
        <ModuleTwo onComplete={() => onCompleteModule(2)} />
      ),
    },
    {
      id: "modulo-3",
      title: "Módulo 3",
      content: (
        <ModuleThree onComplete={() => onCompleteModule(3)} />
      ),
    },
    {
      id: "modulo-4",
      title: "Módulo 4",
      content: (
        <ModuleFour onComplete={() => onCompleteModule(4)} />
      ),
    },
    {
      id: "modulo-5",
      title: "Módulo 5",
      content: (
        <ModuleFive onComplete={() => onCompleteModule(5)} />
      ),
    },
  ];
  return (
    <div className="w-full"> 
      <Tabs tabs={tabs} />
    </div>
  );
};
