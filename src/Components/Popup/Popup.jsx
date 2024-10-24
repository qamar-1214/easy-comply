import ReactDOM from "react-dom";

const Popup = ({ isOpen, onClose, onSubmit, content, heading }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 w-[100vw] left-0  h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.5)]  z-[9999]"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999]">
        <div className="bg-white w-[90vw] sm:w-[50vw] pb-4 rounded-lg relative">
          <div className="w-full p-4 shadow-xl flex items-center justify-between">
            <span>
              <h2>{heading}</h2>
            </span>

            <button
              className=" text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div>
            <div className="py-8 px-6 border-b-[1px] border-border_color gap-4">
              {content}
            </div>
            <div className="flex justify-end gap-4 mt-4 px-4">
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button className="save-btn" onClick={onSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("popup-root")
  );
};

export default Popup;
