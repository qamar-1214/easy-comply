import { useState } from "react";
import GraphicalView from "../Components/Usage/GraphicalView/GraphicalView";
import Invoices from "../Components/Usage/Invoices/Invoices";

const tabs = [
  {
    id: 1,
    label: "Graphical view",
    content: <GraphicalView />,
  },
  {
    id: 2,
    label: "Invoices",
    content: <Invoices />,
  },
];

const Usage = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="w-full">
      <div className="px-4 md:px-5 pt-4">
        <div className="flex items-center">
          <h1 className="m-0 text-[30px] font-[400]">Billing</h1>
        </div>
        <div className="flex flex-wrap items-start mt-6 gap-y-4 md:gap-y-0 gap-x-2">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-[#EBEBEB] text-[#5A5A5A]"
              } py-[7px] rounded-lg font-[500] text-[16px]  px-[15px]`}
              key={tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </section>
  );
};

export default Usage;
