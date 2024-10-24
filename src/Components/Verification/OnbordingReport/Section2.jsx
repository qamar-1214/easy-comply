import { useState } from "react";
import Popup from "../../Popup/Popup";

const Section2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Submit button clicked");
    closePopup();
  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-5 mt-8 gap-6">
        <div className="bg-white rounded-lg custom-shadow lg:col-span-2">
          <span className="flex justify-between items-center p-2">
            <h2 className="px-4 text-[20px] font-[500]">Document OCR Result</h2>
            <button
              onClick={() =>
                openPopup(
                  <>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        First name
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        value="Qamar"
                      />
                    </div>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Last name
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        value="Abbas"
                      />
                    </div>
                    <div className="lg:col-span-2 mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        E-mail
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="email"
                        value="qshah8r8e@gmail.com"
                      />
                    </div>
                  </>
                )
              }
              className="p-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z"
                  fill="#A99D9D"
                />
              </svg>
            </button>
            <Popup
              isOpen={isOpen}
              onClose={closePopup}
              onSubmit={handleSubmit}
              content={popupContent}
            />
          </span>
          <div className="border-t-[2px] border-[#E8EFF4] flex items-center lg:justify-start lg:px-2 md:justify-center">
            <div className="py-4 px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 gap-x-32 lg:gap-x-28 justify-start">
              <span className="space-y-1">
                <h3>Full name</h3>
                <p>MUHAMMAD TAYYAB</p>
              </span>
              <span className="space-y-1 w-full">
                <h3>Date of birth</h3>
                <p>02/05/1994</p>
              </span>
              <span className="space-y-1">
                <h3>Id number</h3>
                <p>181085</p>
              </span>
              <span className="space-y-1">
                <h3>Date of issue</h3>
                <p>06/01/2016</p>
              </span>
              <span className="space-y-1">
                <h3>Date of expiration</h3>
                <p>06/01/2026</p>
              </span>
              <span className="space-y-1">
                <h3>Sex</h3>
                <p>M</p>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg col-span-1 lg:col-span-3 custom-shadow order-2">
          <span className="flex justify-between items-center p-2">
            <h2 className="px-4 text-[20px] font-[500]">
              Basic Contact Information
            </h2>
            <button
              onClick={() =>
                openPopup(
                  <>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        First name
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        value="Qamar"
                      />
                    </div>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Last name
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        value="Abbas"
                      />
                    </div>
                    <div className="lg:col-span-2 mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        E-mail
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="email"
                        value="qshah8r8e@gmail.com"
                      />
                    </div>
                  </>
                )
              }
              className="p-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM17.6 7.8L19 6.4L17.6 5L16.2 6.4L17.6 7.8Z"
                  fill="#A99D9D"
                />
              </svg>
            </button>
            <Popup
              isOpen={isOpen}
              onClose={closePopup}
              onSubmit={handleSubmit}
              content={popupContent}
            />
          </span>

          <div className="border-t-[2px] border-[#E8EFF4] flex items-center lg:justify-start lg:px-3 px-4 md:px-0 md:justify-center">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  gap-y-6 sm:gap-y-6 pb-5 sm:gap-12 lg:px-4 lg:gap-x-32 md:px-4 items-center">
              <span className="space-y-1">
                <h3>E-mail</h3>
                <p>tayyab.uid@gmail.com</p>
              </span>
              <span className="space-y-1 w-full">
                <h3>Phone</h3>
                <p>+923477271560</p>
              </span>
              <span className="space-y-1">
                <h3>Geolocation</h3>
                <p>Rawalpindi, Pakistan</p>
              </span>
              <span className="space-y-1">
                <h3>First Name</h3>
                <p>Muhammad</p>
              </span>
              <span className="space-y-1">
                <h3>Browser Type</h3>
                <p>Chrome 119.0.0.0</p>
              </span>
              <span className="space-y-1">
                <h3>IP Address</h3>
                <p>58.65.163.161</p>
              </span>
              <span className="space-y-1">
                <h3>Last Name</h3>
                <p>Tayyab</p>
              </span>
              <span className="space-y-1">
                <h3>Device Name</h3>
                <p>Windows</p>
              </span>
              <span className="space-y-1">
                <h3>Device Type</h3>
                <p>WebKit, desktop</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
