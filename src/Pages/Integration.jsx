import dot from "../assets/integration-imgs/dot.png";
import { useState } from "react";
import Confugration from "../Components/Integration/Confugration/Confugration";
import CustomSettings from "../Components/Integration/CustomSettings/CustomSettings";
import RiskRules from "../Components/Integration/RiskRules/RiskRules";
import Admin from "../Components/Integration/Admin/Admin";
import RegistrationFields from "../Components/Integration/RegistrationFields/RegistrationFields";
import SectionFields from "../Components/Integration/SectionFields/SectionFields";
import FatcaForm from "../Components/Integration/FATCAForm/FatcaForm";
import Documents from "../Components/Integration/Documents/Documents";
import Consent from "../Components/Integration/Consent/Consent";
import VideoKYC from "../Components/Integration/VideoKYC/VideoKYC";
import Developer from "../Components/Integration/Developer/Developer";
import ManualDataEntry from "../Components/Integration/ManualDataEntry/ManualDataEntry";

const tabs = [
  {
    id: 1,
    label: "Configuration",
    content: <Confugration />,
  },
  {
    id: 2,
    label: "Customer Settings",
    content: <CustomSettings />,
  },
  {
    id: 3,
    label: "Risk Rules",
    content: <RiskRules />,
  },
  {
    id: 4,
    label: "Admin",
    content: <Admin />,
  },
  {
    id: 5,
    label: "Registration Fields",
    content: <RegistrationFields />,
  },
  {
    id: 6,
    label: "Section Fields",
    content: <SectionFields />,
  },
  {
    id: 7,
    label: "FATCA form",
    content: <FatcaForm />,
  },
  {
    id: 8,
    label: "Documents",
    content: <Documents />,
  },
  {
    id: 9,
    label: "Consents",
    content: <Consent />,
  },
  {
    id: 10,
    label: "Video KYC",
    content: <VideoKYC />,
  },
  {
    id: 11,
    label: "Manual Data Entry",
    content: <ManualDataEntry />,
  },
  {
    id: 12,
    label: "Developer",
    content: <Developer />,
  },
];

const Integration = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="w-full overflow-hidden">
      <div className="px-4 md:px-5 pt-7">
        <div className="flex items-center">
          <h1 className="m-0 text-[30px] font-[400]">CLM Portal</h1>
        </div>
        <div className="flex flex-wrap items-start mt-6 gap-y-4  gap-x-2">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`relative ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-[#EBEBEB] text-[#5A5A5A]"
              } py-[7px] rounded-lg font-[500] text-[16px]  px-[15px] ${
                (tab.id === 3 || tab.id === 6) &&
                "border-[1px] border-primary_b300"
              }`}
              key={tab.id}
            >
              {(tab.id === 3 || tab.id === 6) && (
                <img
                  src={dot}
                  className="absolute top-1 right-2"
                  alt="ellipse"
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab && tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </section>
  );
};

export default Integration;
