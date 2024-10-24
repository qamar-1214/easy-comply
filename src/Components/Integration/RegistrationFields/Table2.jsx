import Edit from "../../../assets/integration-imgs/edit.png";
import Delete from "../../../assets/integration-imgs/delete.png";
import Popup from "../../Popup/Popup";
import { useEffect, useState } from "react";
import Menu from "../../../assets/integration-imgs/menu.png";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../../services/api";
import Skeleton from "react-loading-skeleton";

const Table2 = ({ activeAccountType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    type: "",
    schema: "",
    name: "",
    label: "",
  });

  const [editValues, setEditValues] = useState({
    type: "",
    schema: "",
    name: "",
    label: "",
  });

  const closePopup = () => {
    setIsOpen(false);
  };

  const closeEditPopup = () => {
    setIsOpenEdit(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postApi("/RegistrationFields/Add", {
        ...values,
        entity_type: "registration",
        entity_id: activeAccountType?.id,
        section: "registration",
      });
      if (response.status) {
        toast.success("Field added successfuly");
        fetchRegistrationFields(activeAccountType?.id);
        setValues({
          type: "",
          schema: "",
          name: "",
          title: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    closePopup();
  };

  const handleEditSubmit = async () => {
    try {
      const response = await postApi("/RegistrationFields/Update", {
        ...editValues,
        entity_type: "registration",
        entity_id: activeAccountType?.id,
        section: "registration",
      });
      if (response.status) {
        toast.success("Field updated successfuly");
        fetchRegistrationFields(activeAccountType?.id);
        setEditValues({
          accountType: "",
          type: "",
          schema: "",
          name: "",
          title: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    closeEditPopup();
  };

  const fetchRegistrationFields = async (id) => {
    setLoading(true);
    try {
      const response = await getApi(
        "/RegistrationFields/GetBySection/registration/" + id
      );
      if (response.status) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (activeAccountType?.id !== 0) {
      fetchRegistrationFields(activeAccountType?.id);
    } else {
      setLoading(false);
    }
  }, [activeAccountType?.id]);

  return (
    <section className="mt-12">
      <div className=" lg:py-3">
        <div className="bg-white  rounded-lg shadow-lg ">
          <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-border_color">
            <span>
              <h2>
                Registration Fields{" "}
                {activeAccountType?.title && "for " + activeAccountType?.title}
              </h2>
            </span>
            {activeAccountType?.id !== 0 && (
              <button onClick={() => setIsOpen(true)} className="add-btn">
                Add Field
              </button>
            )}
            {isOpen && (
              <Popup
                isOpen={isOpen}
                heading={"Provide field information"}
                onClose={closePopup}
                onSubmit={handleSubmit}
                content={
                  <>
                    <div className="flex-1 mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                      <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                        Field Type
                      </label>
                      <select
                        name="type"
                        onChange={(e) =>
                          setValues({ ...values, type: e.target.value })
                        }
                        value={values.type || ""}
                        className="w-full bg-transparent outline-none border-none"
                      >
                        <option disabled selected value={""}>
                          Select Field Type
                        </option>
                        {["string", "integer", "boolean"].map((val) => {
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
                        Schema Layout
                      </label>
                      <select
                        name="accountType"
                        onChange={(e) =>
                          setValues({ ...values, schema: e.target.value })
                        }
                        value={values.schema || ""}
                        className="w-full bg-transparent outline-none border-none"
                      >
                        <option disabled selected value={""}>
                          Select Schema Layout
                        </option>
                        {["half", "full"].map((val) => {
                          return (
                            <option key={val} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        System name
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setValues({ ...values, name: e.target.value })
                        }
                        value={values?.name}
                      />
                    </div>
                    <div className="lg:col-span-2 mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Title
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setValues({ ...values, label: e.target.value })
                        }
                        value={values?.label}
                      />
                    </div>
                  </>
                }
              />
            )}
          </div>
          <div className="lg:overflow-x-auto xl:overflow-x-hidden  hidden py-4  lg:block px-10  w-full">
            {loading ? (
              <div className=" mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
                <Skeleton inline height={100} />
              </div>
            ) : (
              <table className="w-full lg:min-w-[80vw] xl:min-w-[74vw]">
                <thead>
                  <tr>
                    {[
                      "",
                      "Field Type",
                      "Name",
                      "Title",
                      "Schema",
                      "Account Type",
                      "Rules",
                      "Action",
                    ].map((heading, index) => (
                      <th
                        key={index}
                        className={`px-[6px]  py-[17px] border-b-[1px] border-[#ddd] ${
                          index === 7 ? "text-right pr-6" : "text-left"
                        }     text-[16px] font-[600] text-dark_b100 uppercase tracking-wider`}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {data.map((data, index) => (
                    <tr className="w-full" key={index}>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap     text-[16px] font-[400] text-dark_b500">
                        <button>
                          <img src={Menu} />
                        </button>
                      </td>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap     text-[16px] font-[400] text-dark_b500">
                        {data.type}
                      </td>
                      <td className="px-[6px] py-[17px] text-left   border-b-[1px] border-[#ddd]  whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        {data.name}
                      </td>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        {data?.label}
                      </td>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        {data.schema}
                      </td>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        {activeAccountType?.name}
                      </td>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        {data?.rules}
                      </td>
                      <td className="px-[6px] py-[17px] text-right   border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        <span className="flex gap-4 justify-end">
                          <button
                            onClick={() => {
                              setEditValues({
                                id: data?.id,
                                type: data?.type,
                                schema: data?.schema,
                                name: data?.name,
                                label: data?.label,
                              });
                              setIsOpenEdit(true);
                            }}
                            className="edit"
                          >
                            <img src={Edit} alt="edit" />
                          </button>
                          <button className="delete">
                            <img src={Delete} alt="elete" />
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <Popup
            heading={"Edit field information"}
            isOpen={isOpenEdit}
            onClose={closeEditPopup}
            onSubmit={handleEditSubmit}
            content={
              <>
                <div className="flex-1 mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                  <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                    Field Type
                  </label>
                  <select
                    name="type"
                    onChange={(e) =>
                      setEditValues({ ...editValues, type: e.target.value })
                    }
                    value={editValues.type || ""}
                    className="w-full bg-transparent outline-none border-none"
                  >
                    <option disabled selected value={""}>
                      Select Field Type
                    </option>
                    {["string", "integer", "boolean"].map((val) => {
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
                    Schema Layout
                  </label>
                  <select
                    name="accountType"
                    onChange={(e) =>
                      setEditValues({ ...editValues, schema: e.target.value })
                    }
                    value={editValues.schema || ""}
                    className="w-full bg-transparent outline-none border-none"
                  >
                    <option disabled selected value={""}>
                      Select Schema Layout
                    </option>
                    {["half", "full"].map((val) => {
                      return (
                        <option key={val} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                  <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                    System name
                  </label>
                  <input
                    className="outline-none border-none w-full"
                    type="text"
                    onInput={(e) =>
                      setEditValues({ ...editValues, name: e.target.value })
                    }
                    value={editValues?.name}
                  />
                </div>
                <div className="lg:col-span-2 mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                  <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                    Title
                  </label>
                  <input
                    className="outline-none border-none w-full"
                    type="text"
                    onInput={(e) =>
                      setEditValues({ ...editValues, label: e.target.value })
                    }
                    value={editValues?.label}
                  />
                </div>
              </>
            }
          />

          <div className="lg:hidden rounded-2xl">
            {data.map((data, index) => (
              <div key={index} className="rounded-2xl">
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100"></span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {" "}
                    <button>
                      <img src={Menu} />
                    </button>
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    Field Type
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
                    Name
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
                    Title
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
                    Schema
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {data.td4}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    Account Types
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {data.td5}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    Rules
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {data.td6}
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
                      <img src={Edit} alt="edit" />
                    </button>
                    <button className="delete">
                      <img src={Delete} alt="elete" />
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

export default Table2;
