import Logo from "../../assets/verifications-steps-imgs/logo.png";
import Right from "../../assets/verifications-steps-imgs/right.png";

const Step13 = () => {
  return (
    <div id="verification-steps-page">
      <div className="bg-gray-100 h-full w-full">
        <div className="flex gap-2 sm:gap-8 p-3 sm:p-6">
          <div className="steps-container bg-[#2D0F0F] w-20 sm:w-[300px] lg:w-[400px] sticky top-0 px-1 sm:px-6 lg:px-12 py-12 shadow-xl">
            <div className="flex items-center justify-center">
              <img src={Logo} alt="logo" />
            </div>
            <div className="step-wizard p-4 mt-4">
              <ul className="text-white">
                <li className="step-item">
                  <span className="step-number-filled bg-green-600">
                    <img src={Right} />
                  </span>
                  <span className="step-heading hidden sm:block">
                    Face scan
                  </span>
                </li>
                <li className="line-filled bg-green-600"></li>
                <li className="step-item">
                  <span className="step-number-filled bg-green-600">
                    <img src={Right} />
                  </span>
                  <span className="step-heading hidden sm:block">
                    ID Card Scan
                  </span>
                </li>
                <li className="line-filled bg-green-600"></li>
                <li className="step-item">
                  <span className="step-number-filled bg-green-600">
                    <img src={Right} />
                  </span>
                  <span className="step-heading hidden sm:block">
                    Review and confirm
                  </span>
                </li>
                <li className="line-filled bg-green-600"></li>
                <li className="step-item">
                  <span className="step-number-filled bg-green-600">
                    <img src={Right} />
                  </span>
                  <span className="step-heading hidden sm:block">
                    Personal Information
                  </span>
                </li>
                <li className="line-filled bg-green-600"></li>
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
          <div className="mt-[36px] mb-12 sm:mt-[50px] w-full lg:w-[60%] xl:w-[65%] h-auto sm:mx-3 flex flex-col gap-6">
            <span>
              <h3 className="page-heading">Signature approval</h3>
            </span>
            <div className="bg-white h-full rounded-xl shadow-xl p-6 flex flex-col items-center text-center justify-between">
              <div>
                <span className="flex flex-col gap-4">
                  <h2>Move face closer and fill the square</h2>
                  <p>
                    Frame your face in the Square, Press Im ready & move closer.
                  </p>
                </span>
              </div>
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

export default Step13;
