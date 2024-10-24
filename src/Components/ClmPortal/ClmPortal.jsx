import { useState } from "react";
import ClmPortalTable1 from "./ClmPortalTable1";

const tabs = [
  {
    id: 1,
    label: "CLM Portal",
    content: <ClmPortalTable1 />,
  },
  {
    id: 2,
    label: "Facial biometric KYC",
    content: "Facial biometric KYC",
  },
  {
    id: 3,
    label: "Facial biometric KYC simplified",
    content: "Facial biometric KYC simplified",
  },
  {
    id: 4,
    label: "Secure face login",
    content: "Secure face login",
  },
];

const ClmPortal = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section>
      <div className="px-5 pt-7">
        <div className="flex items-center">
          <h1 className="m-0 text-[30px] font-[400]">CLM Portal</h1>
        </div>
        <div className="flex flex-wrap items-start mt-6 gap-y-4 md:gap-y-0 gap-x-2">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "bg-primary_b300 text-white"
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

export default ClmPortal;
