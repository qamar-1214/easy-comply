import { useState } from "react";
import Comp3 from "./Comp3";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

const VideoKYC = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);
  const handleOrder = () => setStep(3);
  return (
    <div className="bg-white w-full mt-7 rounded-lg shadow-xl h-full p-4 mb-6 py-8">
      <span>
        <h2>Video KYC</h2>
        {step === 1 && <Comp1 onNext={handleNext} />}
        {step === 2 && <Comp2 onBack={handleBack} onOrder={handleOrder} />}
        {step === 3 && <Comp3 />}
      </span>
    </div>
  );
};

export default VideoKYC;
