import { useState } from "react";
import Popup from "../../Popup/Popup";

const Documents = () => {
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
    <section className="content">
      <div className="mt-6 mb-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <span>
            <h2>Document Submission</h2>
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
            className="add-btn"
          >
            Request a new document
          </button>
          <Popup
            isOpen={isOpen}
            onClose={closePopup}
            onSubmit={handleSubmit}
            content={popupContent}
          />
        </div>
        <div className="border-t-[2px] border-border_color p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              lorem is a dumy text
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              lorem is a dumy text
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              lorem is a dumy text
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
