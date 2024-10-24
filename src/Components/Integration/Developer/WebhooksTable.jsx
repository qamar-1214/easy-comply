import Edit from "../../../assets/integration-imgs/edit.png";
import Delete from "../../../assets/integration-imgs/delete.png";
import Eye from "../../../assets/integration-imgs/eye.png";
import Popup from "../../Popup/Popup";
import { useState } from "react";
import { postApi } from "../../../services/api";
import { toast } from "react-toastify";

const tableData = [
  ["", "Url", "Status", "Listening for", "Action"],
  {
    td1: "httpsyoutu.beT_34c1G-7JAs",
    td2: "Enabled",
    td3: "1 Event",
    edit: Edit,
    delete: Delete,
    eye: Eye,
  },
  {
    td1: "httpsyoutu.beT_34c1G-7JAs",
    td2: "Enabled",
    td3: "1 Event",
    edit: Edit,
    delete: Delete,
    eye: Eye,
  },
  {
    td1: "httpsyoutu.beT_34c1G-7JAs",
    td2: "Enabled",
    td3: "1 Event",
    edit: Edit,
    delete: Delete,
    eye: Eye,
  },
];
const WebhooksTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({});

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postApi("/WebHooks/Add", {
        ...values, 
        integration_id: 9, 
      });
      if (response.status) {
        toast.success("Webhook created successfuly");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    closePopup();
  };

  return (
    <section className="mt-12">
      <div className=" lg:py-3">
        <div className="bg-white  rounded-lg shadow-lg ">
          <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-border_color">
            <span>
              <h2>Webhooks</h2>
            </span>
            <button onClick={() => setIsOpen(true)} className="add-btn">
              Add Webhooks
            </button>
            <Popup
              isOpen={isOpen}
              heading={"Add Webhook"}
              onClose={closePopup}
              onSubmit={handleSubmit}
              content={
                <>
                  <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      URL
                    </label>
                    <input
                      className="outline-none border-none w-full"
                      type="text"
                      onInput={(e) =>
                        setValues({ ...values, URL: e.target.value })
                      }
                      value={values?.URL}
                    />
                  </div>
                  <div className="flex-1 mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                      Status
                    </label>
                    <select
                      name="status"
                      onChange={(e) =>
                        setValues({ ...values, status: e.target.value })
                      }
                      value={values?.status || ""}
                      className="w-full bg-transparent outline-none border-none"
                    >
                      <option disabled selected value={""}>
                        Select Status
                      </option>
                      {["enabled", "disabled"].map((val) => {
                        return (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex-1 mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                      Events
                    </label>
                    <select
                      name="status"
                      onChange={(e) =>
                        setValues({ ...values, events: e.target.value })
                      }
                      value={values?.events || ""}
                      className="w-full bg-transparent outline-none border-none"
                    >
                      <option disabled selected value={""}>
                        Select Option
                      </option>
                      {[
                        "face_registration_success",
                        "face_registration_failed",
                        "document_verification_success",
                        "document_verification_failed",
                        "full_kyc_registration_finished",
                        "full_kyc_additional_document_requested",
                        "full_kyc_pending_submission_tasks_requested",
                      ].map((val) => {
                        return (
                          <option key={val} value={val}>
                            {val}
                          </option>
                        );
                      })}
                    </select>
                  </div>
       
                </>
              }
            />
          </div>
          <div className="lg:overflow-x-auto xl:overflow-x-hidden hidden py-4  lg:block px-10  w-full">
            <table className="w-full lg:min-w-[80vw] xl:min-w-[74vw]">
              <thead>
                <tr>
                  {tableData[0].map((heading, index) => (
                    <th
                      key={index}
                      className={`px-[6px]  py-[17px] border-b-[1px] border-[#ddd] ${
                        index === 4 ? "text-right pr-6" : "text-left"
                      }  text-[16px] font-[600] text-dark_b100 uppercase tracking-wider`}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {tableData.slice(1).map((data, index) => (
                  <tr className="w-full" key={index}>
                    <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap    text-[16px] font-[400] text-dark_b500">
                      <button className="edit">
                        <img src={data.eye} alt="eye" />
                      </button>
                    </td>
                    <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap       text-[16px] font-[400] text-dark_b500">
                      {data.td1}
                    </td>
                    <td className="px-[6px] py-[17px] text-left   border-b-[1px] border-[#ddd]  whitespace-nowrap     text-[16px] font-[400] text-dark_b500">
                      {data.td2}
                    </td>
                    <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                      {data.td3}
                    </td>

                    <td className="px-[6px] py-[17px] text-right   border-b-[1px] border-[#ddd] whitespace-nowrap     text-[16px] font-[400] text-dark_b500">
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
                  <span className="text-[16px] font-[600] text-dark_b100"></span>
                  <button className="edit">
                    <img src={data.eye} alt="eye" />
                  </button>
                </div>

                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    URL
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {data.td1}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    STATUS
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {data.td2}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    LISTING for
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {data.td3}
                  </span>
                </div>

                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
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

export default WebhooksTable;
