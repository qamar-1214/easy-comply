import Logo from "../../assets/verifications-steps-imgs/logo.png";
import Right from "../../assets/verifications-steps-imgs/right.png";

const Step15 = () => {
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
                  <span className="step-number-filled bg-green-600">
                    <img src={Right} />
                  </span>
                  <span className="step-heading hidden sm:block">
                    Signature Approval
                  </span>
                </li>
                <li className="line-filled bg-green-600"></li>
                <li className="step-item">
                  <span className="step-number-filled bg-green-600">
                    <img src={Right} />
                  </span>
                  <span className="step-heading hidden sm:block">
                    Final Review
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[36px] mb-12 sm:mt-[50px] w-full lg:w-[60%] xl:w-[65%] h-auto sm:mx-3 flex flex-col gap-4">
            <span className="flex justify-between">
              <h3 className="page-heading">Signature approval</h3>
              <button className="print-preview-btn">Print preview</button>
            </span>
            <div className="bg-white h-auto rounded-xl shadow-xl p-6">
              <div className="flex justify-between flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-4">
                  <h3>
                    Thank you, your request for account opening has been
                    received by the bank.
                  </h3>
                  <h3>Your tracking number is: WME8W12QXY1</h3>
                </div>
                <div className="flex items-end">
                  <span>
                    <p className="text-md">
                      You will be receiving a feedback within 48 hours.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white h-auto rounded-xl shadow-xl">
              <span>
                <h1 className="p-2 font-medium px-5">Basic registration</h1>
              </span>
              <div className="border-t-[1px] border-gray-100">
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-6 lg:gap-20 w-full">
                  <span>
                    <h3>First name</h3>
                    <p>Qamar</p>
                  </span>
                  <span>
                    <h3>Last name</h3>
                    <p>Shahzad</p>
                  </span>
                  <span>
                    <h3>E-mail</h3>
                    <p className="fle flex-wrap">qamarshahzad71@gmail.com</p>
                  </span>
                  <span>
                    <h3>Phone</h3>
                    <p>+92 3035276796</p>
                  </span>
                  <span>
                    <h3>Nationality</h3>
                    <p>Pakistan</p>
                  </span>
                  <span>
                    <h3>Assigned branch</h3>
                    <p>Muhammad Tayyab</p>
                  </span>
                  <span>
                    <h3>FYP</h3>
                    <p>2023-12-26</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white h-auto rounded-xl shadow-xl">
              <span>
                <h1 className="p-2 font-medium px-5">Photo and documents</h1>
              </span>
              <div className="border-t-[1px] border-gray-100 p-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <span>
                    <h3>Photo</h3>
                    <div className="h-[180px] bg-gray-100 rounded"></div>
                  </span>
                  <span>
                    <h3>Id front</h3>
                    <div className="h-[180px] bg-gray-100 rounded"></div>
                  </span>
                  <span>
                    <h3>ID back</h3>
                    <div className="h-[180px] bg-gray-100 rounded"></div>
                  </span>
                  <span>
                    <h3>Signature ID</h3>
                    <div className="h-[180px] bg-gray-100 rounded"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step15;
