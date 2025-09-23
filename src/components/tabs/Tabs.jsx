import React from "react";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);
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
                ? "border-sky-500 text-sky-500 bg-sky-500/10 rounded-t-lg"
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
