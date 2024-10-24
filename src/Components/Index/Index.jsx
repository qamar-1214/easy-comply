import exportIcon from "../../assets/download-icon.png";
import { useState } from "react";

import IndexHomePage from "./IndexHomePage";

const tabs = [
  {
    id: 1,
    label: "Verification report",
    content: <IndexHomePage />,
  },
  {
    id: 2,
    label: "Request",
    content: "Request",
  },
  {
    id: 3,
    label: "Response",
    content: "Response",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="w-full overflow-hidden">
      <div className="px-5 pt-7">
        <div className="flex items-center justify-between">
          <h1 className="m-0 text-[30px] font-[400]">
            Facial biometric KYC simplified
          </h1>
          <button className="export flex items-center px-7 py-2.5 rounde">
            <img src={exportIcon} width="18" />
            <div className="w-[10px]"></div>
            <p className="text-sm font-bold">Export</p>
          </button>
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

export default Index;
