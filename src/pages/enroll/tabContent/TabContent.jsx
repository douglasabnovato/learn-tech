import React from "react";
import { Tabs } from "../../../components/tabs/Tabs";
import { Overview } from "./Overview";
import { Resources } from "./Resources";
import { Reviews } from "./Reviews";

export const TabContent = () => {
  const tabs = [
    {
      id: "overviews",
      title: "Overviews",
      content: <Overview />,
    },
    {
      id: "resources",
      title: "Resources",
      content: <Resources />,
    },
    {
      id: "reviews",
      title: "Reviews",
      content: <Reviews />,
    },
  ];
  return (
    <div className="w-full"> 
      <Tabs tabs={tabs} />
    </div>
  );
};
