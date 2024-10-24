import { useState } from "react";
import OnboardingReport from "../Components/Verification/OnbordingReport/OnboardingReport";
import Profile from "../Components/Verification/Profile/Profile";
import Submission from "../Components/Verification/Submission/Submission";
import Documents from "../Components/Verification/Documents/Documents";
import Alerts from "../Components/Verification/Alerts/Alerts";
import Settings from "../Components/Verification/Settings/Settings";

const tabs = [
  {
    id: 1,
    label: "Onboarding report",
    content: <OnboardingReport />,
  },
  {
    id: 2,
    label: "Profile",
    content: <Profile />,
  },
  {
    id: 3,
    label: "Submission",
    content: <Submission />,
  },
  {
    id: 4,
    label: "Documents",
    content: <Documents />,
  },
  {
    id: 5,
    label: "Alerts",
    content: <Alerts />,
  },
  {
    id: 6,
    label: "Settings",
    content: <Settings />,
  },
];

const Verification = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="w-full">
      <div className="px-4 md:px-5 pt-7">
        <div className="flex items-center">
          <h1 className="m-0 text-[30px] font-[400]">Verfication</h1>
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

export default Verification;
