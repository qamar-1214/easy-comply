import { useState } from "react";
import Popup from "../../Popup/Popup";

const Section1 = () => {
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
    <div className="mt-6 mb-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <span>
          <h2>Submission process flow</h2>
        </span>
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
          className="primary-btn"
        >
          Send New Request For Pending Task
        </button>
        <Popup
          isOpen={isOpen}
          onClose={closePopup}
          onSubmit={handleSubmit}
          content={popupContent}
        />
      </div>
      <div className="border-t-[2px] border-border_color p-6">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-4 border-b-[2px] border-border_color ">
            <span>
              <h3>Digital photo</h3>
              <p>Failed</p>
            </span>
            <span>
              <h3>Last Update</h3>
              <p>26/12/2023</p>
            </span>
            <span>
              <h3>Updated By</h3>
              <p>Muhammad Tayyab</p>
            </span>
            <span>
              <div className="relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                  Change status
                </label>
                <select className="w-full outline-none border-none bg-transparent">
                  <option value="fail">Failed</option>
                  <option value="fail">Aproved</option>
                </select>
              </div>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-4 border-b-[2px] border-border_color ">
            <span>
              <h3>CNIC / ID Document</h3>
              <p>Approved</p>
            </span>
            <span>
              <h3>Last Update</h3>
              <p>26/12/2023</p>
            </span>
            <span>
              <h3>Updated By</h3>
              <p>Muhammad Tayyab</p>
            </span>
            <span>
              <div className="relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                <label className="absolute top-[-12px] left-2 bg-white text-dark_b100 px-2 text-sm">
                  Change status
                </label>
                <select className="w-full outline-none border-none bg-transparent">
                  <option value="fail">Failed</option>
                  <option value="fail">Aproved</option>
                </select>
              </div>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-4 border-b-[2px] border-border_color ">
            <span>
              <h3>FATCA/CSR Declaration</h3>
              <p>Submitted</p>
            </span>
            <span>
              <h3>Last Update</h3>
              <p>26/12/2023</p>
            </span>
            <span>
              <h3>Updated By</h3>
              <p>Muhammad Tayyab</p>
            </span>
            <span>
              <div className="relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                <label className="absolute top-[-12px] left-2 bg-white text-dark_b100 px-2 text-sm">
                  Change status
                </label>
                <select className="w-full outline-none border-none bg-transparent">
                  <option value="fail">Failed</option>
                  <option value="fail">Aproved</option>
                </select>
              </div>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-4 border-b-[2px] border-border_color ">
            <span>
              <h3>Digital signature</h3>
              <p>Submitted</p>
            </span>
            <span>
              <h3>Last Update</h3>
              <p>26/12/2023</p>
            </span>
            <span>
              <h3>Updated By</h3>
              <p>Muhammad Tayyab</p>
            </span>
            <span>
              <div className="relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                <label className="absolute top-[-12px] left-2 bg-white text-dark_b100 px-2 text-sm">
                  Change status
                </label>
                <select className="w-full outline-none border-none bg-transparent">
                  <option value="fail">Failed</option>
                  <option value="fail">Aproved</option>
                </select>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
