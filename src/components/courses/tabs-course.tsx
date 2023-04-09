// components/MenuTabs.tsx
import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface MenuTabsProps {
  tabs: Tab[];
  initialActiveTab?: string;
  onTabChange?: (tab: Tab) => void;
  renderContent: (activeTab: string) => React.ReactNode;
}

const TabsCourse: React.FC<MenuTabsProps> = ({
  tabs,
  initialActiveTab,
  onTabChange,
  renderContent,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    initialActiveTab || tabs[0]?.id
  );

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab.id);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div>
      <div className="border-b border-gray-200 bg-white">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-4 px-6 text-black hover:border-b hover:border-b-slate-600 hover:duration-300 hover:ease-in-out ${
                activeTab === tab.id
                  ? "border-b-2 font-bold border-black text-black"
                  : ""
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">{renderContent(activeTab)}</div>
    </div>
  );
};

export default TabsCourse;
