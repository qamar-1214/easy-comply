import { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import { postApi } from "../../../services/api";

const types = {
  low_risk: "Low Risk",
  medium_risk: "Medium Risk",
  high_risk: "High Risk",
};

const AddDocument = ({ isOpen, onClose, riskType }) => {
  const [title, setTitle] = useState(""); 

  const handleSave = async (e) =>{
    e.preventDefault(); 

    try {
      if(title?.trim()) {
        const response = await postApi("/KycRiskRulesDocuments/Add", {
          name: title,
          title,
          risk_type: riskType, 
        }); 
      }
    } catch (error) {
      console.log(error);  

      toast.error("Something went wrong"); 
    }
  }

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 w-[100vw] left-0  h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.5)]  z-[9999]"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999]">
        <div className="bg-white w-[30vw] h-max pb-4 rounded-lg relative">
          <div className="w-full p-4 shadow-xl flex items-center justify-between">
            <span>
              <h2>Add a new document for {types[riskType]} </h2>
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

          <div className="w-full">
            <form action="#" onSubmit={handleSave}>
              <div className="py-8 px-6 w-full border-b-[1px] border-border_color">
                <div className="mt-6 w-full relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                  <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                    Document Name
                  </label>
                  <input
                    className="outline-none border-none w-full"
                    type="text"
                    onInput={(e) => setTitle(e.target.value)}
                    placeholder="Type here.."
                    value={title}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-4 px-4">
                <button className="cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("popup-root")
  );
};

export default AddDocument;
