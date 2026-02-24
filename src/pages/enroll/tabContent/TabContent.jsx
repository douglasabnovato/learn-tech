import React from "react";
import { Tabs } from "../../../components/tabs/Tabs";
import { Overview } from "./Overview";
import { Resources } from "./Resources";
import { Reviews } from "./Reviews";

export const TabContent = () => {
  const tabs = [
    {
      id: "modulo-0",
      title: "Módulo 0",
      content: <Overview />,
    },
    {
      id: "modulo-1",
      title: "Módulo 1",
      content: <Resources />,
    },
    {
      id: "modulo-2",
      title: "Módulo 2",
      content: <Reviews />,
    },
    {
      id: "modulo-3",
      title: "Módulo 3",
      content: <Reviews />,
    },
    {
      id: "modulo-4",
      title: "Módulo 4",
      content: <Reviews />,
    },
    {
      id: "modulo-5",
      title: "Módulo 5",
      content: <Reviews />,
    },
  ];
  return (
    <div className="w-full"> 
      <Tabs tabs={tabs} />
    </div>
  );
};
