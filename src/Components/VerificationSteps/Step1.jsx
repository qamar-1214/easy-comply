import Logo from "../../assets/verifications-steps-imgs/logo.png";

const Step1 = () => {
  return (
    <div id="verification-steps-page">
      <div className="bg-gray-100 h-screen w-full">
        <div className="flex h-full gap-2 sm:gap-8 p-3 sm:p-6">
          <div className="steps-container lg:flex lg:flex-col lg:justify-center bg-[#2D0F0F] w-20 sm:w-[300px] lg:w-[400px] sticky top-0 px-1 sm:px-6 lg:px-12 py-2 shadow-xl">
            <div className="flex items-center justify-center">
              <img src={Logo} alt="logo" />
            </div>
            <div className="step-wizard p-4 mt-4">
              <ul className="text-white">
                <li className="step-item">
                  <span className="step-number">1</span>
                  <span className="step-heading hidden sm:block">
                    Face scan
                  </span>
                </li>
                <li className="line"></li>
                <li className="step-item">
                  <span className="step-number">2</span>
                  <span className="step-heading hidden sm:block">
                    ID Card Scan
                  </span>
                </li>
                <li className="line"></li>
                <li className="step-item">
                  <span className="step-number">3</span>
                  <span className="step-heading hidden sm:block">
                    Review and confirm
                  </span>
                </li>
                <li className="line"></li>
                <li className="step-item">
                  <span className="step-number">4</span>
                  <span className="step-heading hidden sm:block">
                    Personal Information
                  </span>
                </li>
                <li className="line"></li>
                <li className="step-item">
                  <span className="step-number">5</span>
                  <span className="step-heading hidden sm:block">
                    Signature Approval
                  </span>
                </li>
                <li className="line"></li>
                <li className="step-item">
                  <span className="step-number">6</span>
                  <span className="step-heading hidden sm:block">
                    Final Review
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-12 h-full sm:mt-[20px] flex-1 w-full lg:w-[60%] xl:w-[65%]  sm:mx-3 flex flex-col gap-2">
            <span>
              <h1 className="page-heading font-medium">Face Scan</h1>
            </span>
            <div className="bg-white h-full mb-[100px] rounded-xl shadow-xl px-6 py-4 flex flex-col items-center text-center justify-between">
              <div>
                <span className="flex flex-col gap-2">
                  <h2>Get ready for your video selfie</h2>
                  <p className="text-md">
                    Frame your face in the Square, Press Im ready & move closer.
                  </p>
                </span>
              </div>
              <img
                alt=""
                className="w-[60%]"
                src="/assets/verifications-steps-imgs/face-scan.png"
              />
              <div>
                <button className="ready-btn">Im ready</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
