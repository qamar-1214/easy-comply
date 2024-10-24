import Edit from "../../../assets/integration-imgs/edit.png";
import Delete from "../../../assets/integration-imgs/delete.png";
import { useState } from "react";
import Popup from "../../Popup/Popup";

const tableData = [
  ["Organization", "Has more than 25%", "Action"],
  {
    td1: "Qamar Test",
    td2: "Yes",
    edit: Edit,
    delete: Delete,
  },
  {
    td1: "Qamar Qamar Qamar",
    td2: "No",
    edit: Edit,
    delete: Delete,
  },
  {
    td1: "Qamar Test",
    td2: "Yes",
    edit: Edit,
    delete: Delete,
  },
];
const Section4 = () => {
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
    <section className="mt-12">
      <div className="lg:py-3">
        <div className="bg-white  rounded-lg shadow-lg ">
          <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-border_color">
            <span>
              <h1 className="font-medium">Account type</h1>
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
              Add account type
            </button>
            <Popup
              isOpen={isOpen}
              onClose={closePopup}
              onSubmit={handleSubmit}
              content={popupContent}
            />
          </div>
          <div className="lg:overflow-x-auto xl:overflow-x-hidden hidden py-6  lg:block px-10  w-full">
            <table className=" w-[100%]">
              <thead>
                <tr>
                  {tableData[0].map((heading, index) => (
                    <th
                      key={index}
                      className={`px-[6px]  py-[17px] border-b-[1px] border-[#ddd] ${
                        index === 2 ? "text-right pr-6" : "text-left"
                      }   text-[16px]  font-[600] text-dark_b100 uppercase tracking-wider`}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {tableData.slice(1).map((data, index) => (
                  <tr className="w-full" key={index}>
                    <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap     text-[16px]  font-[400] text-dark_b500">
                      {data.td1}
                    </td>
                    <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap     text-[16px]  font-[400] text-dark_b500">
                      {data.td2}
                    </td>

                    <td className="px-[6px] py-[17px] text-right   border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px]  font-[400] text-dark_b500">
                      <span className="flex gap-4 justify-end">
                        <button className="edit">
                          <img src={data.edit} alt="edit" />
                        </button>
                        <button className="delete">
                          <img src={data.delete} alt="elete" />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:hidden rounded-2xl">
            {tableData.slice(1).map((data, index) => (
              <div key={index} className="rounded-2xl">
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="  text-[16px]  font-[600] text-dark_b100 uppercase">
                    Organization
                  </span>
                  <span className="text-[16px]  font-[400] text-dark_b500">
                    {data.td1}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="  text-[16px]  font-[600] text-dark_b100 uppercase">
                    Has More Than 25%
                  </span>
                  <span className="text-[16px]  font-[400] text-dark_b500">
                    {data.td2}
                  </span>
                </div>

                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="  text-[16px]  font-[600] text-dark_b100 uppercase">
                    ACTION
                  </span>
                  <span className="flex gap-4 justify-end">
                    <button className="edit">
                      <img src={data.edit} alt="edit" />
                    </button>
                    <button className="delete">
                      <img src={data.delete} alt="elete" />
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
