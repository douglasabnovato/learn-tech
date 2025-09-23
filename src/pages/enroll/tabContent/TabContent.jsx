import React from "react";
import { Tabs } from "../../../components/tabs/Tabs";

export const TabContent = () => {
  const tabs = [
    {
      id: "overviews",
      title: "Overviews",
      content:
        "Ipsum dolor sit amet consectetur adipisicing elit. Magni quod recusandae explicabo voluptatibus nostrum at nam.",
    },
    {
      id: "resources",
      title: "Resources",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod recusandae explicabo voluptatibus nostrum at nam.",
    },
    {
      id: "reviews",
      title: "Reviews",
      content:
        "Dolor sit amet consectetur adipisicing elit. Magni quod recusandae explicabo voluptatibus nostrum at nam.",
    } 
  ];
  return (
    <div className="w-full">
      {/** Make tab components */}
      <Tabs tabs={tabs} />
    </div>
  );
};
