import Logo from "../../assets/verifications-steps-imgs/logo.png";
import Right from "../../assets/verifications-steps-imgs/right.png";

const Step8 = () => {
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
          <div className="mt-[36px] mb-12 sm:mt-[50px] w-full lg:w-[60%] xl:w-[65%] h-auto sm:mx-3 flex flex-col gap-6">
            <span>
              <h3 className="page-heading">Reviews and confirm</h3>
            </span>
            <div className="bg-white h-full rounded-xl shadow-xl p-6 flex flex-col">
              <div className="flex flex-col gap-12">
                <span>
                  <h2>Your information</h2>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4">
                  <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-[var(--text-light-color)] text-sm">
                      Date of birth
                    </label>
                    <input
                      className="w-full border-none outline-none"
                      type="text"
                      value="lorem"
                    />
                  </div>
                  <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-[var(--text-light-color)] text-sm">
                      Full name
                    </label>
                    <input
                      className="w-full border-none outline-none"
                      type="text"
                      value="lorem"
                    />
                  </div>
                  <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-[var(--text-light-color)] text-sm">
                      Id card no.
                    </label>
                    <input
                      className="w-full border-none outline-none"
                      type="text"
                      value="lorem"
                    />
                  </div>
                  <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-[var(--text-light-color)] text-sm">
                      Issued date
                    </label>
                    <input
                      className="w-full border-none outline-none"
                      type="text"
                      value="lorem"
                    />
                  </div>
                  <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-[var(--text-light-color)] text-sm">
                      Expiration date
                    </label>
                    <input
                      className="w-full border-none outline-none"
                      type="text"
                      value="lorem"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button className="confirm-btn">Confirm info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;
