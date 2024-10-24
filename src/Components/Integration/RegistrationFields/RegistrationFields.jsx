import { useEffect, useState } from "react";
import Table2 from "./Table2";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../../services/api";
import Edit from "../../../assets/integration-imgs/edit.png";
import Delete from "../../../assets/integration-imgs/delete.png";
import Popup from "../../Popup/Popup";
import Skeleton from "react-loading-skeleton";
import {  FaTimes } from "react-icons/fa";

const RegistrationFields = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeAccountType, setActiveAccountType] = useState({
    id: 0
  }); 
  const [values, setValues] = useState({
    isMerchant: false,
    title: "",
    accountTypeDocuments: [],
  });
  const [accountTypeDocuments, setAccountTypeDocuments] = useState([]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getApi("/KycAccountTypes/GetByIntegrationId/9");
      if (response.status) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postApi("/KycAccountTypes/Add", {
        name: values.title,
        title: values.title,
        integration_id: 9,
      });
      if (response.status) {
        toast.success("Account type created successfuly");
        fetchData(); 
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    closePopup();
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <section className="mt-12">
      <div className="lg:py-3">
        <div className="bg-white  rounded-lg shadow-lg ">
          <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-border_color">
            <span>
              <h2 className="font-medium">Account type</h2>
            </span>
            <button onClick={() => setIsOpen(true)} className="add-btn">
              Add account type
            </button>
            <Popup
              heading={"Add Account Type"}
              isOpen={isOpen}
              onClose={closePopup}
              onSubmit={handleSubmit}
              content={
                <>
                  <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      Is this a merchant account?
                    </label>
                    <input
                      className="outline-none border-none"
                    type="checkbox"
                      onChange={(e) => {
                        setValues({ ...values, isMerchant: e.target.checked });
                      }}
                      checked={values.isMerchant}
                    />
                  </div>
                  <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      Title
                    </label>
                    <input
                      className="outline-none border-none w-full"
                      type="text"
                      onInput={(e) =>
                        setValues({ ...values, title: e.target.value })
                      }
                      value={values.title}
                    />
                  </div>
                  <div className="mt-6 flex-1 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                      Account Type Documents
                    </label>
                    <select
                      name="low_risk_frequency"
                      onChange={(e) =>
                        setValues({
                          ...values,
                          accountTypeDocuments: e.target.value,
                        })
                      }
                      value={values.low_risk_frequency || ""}
                      className="w-full bg-transparent outline-none border-none"
                    >
                      <option disabled selected value={""}>
                        Select Account Type Documents
                      </option>
                      {accountTypeDocuments?.map((val) => {
                        return (
                          <option key={val} value={val + 1}>
                            {val + 1} Month{!!val && "s"}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </>
              }
            />
          </div>
          <div className="lg:overflow-x-auto xl:overflow-x-hidden hidden py-6  lg:block px-10  w-full">
            {loading ? (
              <div className="mt-6 mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
                <Skeleton inline height={150} />
              </div>
            ) : (
              <table className=" w-[100%]">
                <thead>
                  <tr>
                    {["Title", "Action"].map((heading, index) => (
                      <th
                        key={index}
                        className={`px-[6px]  py-[17px] border-b-[1px] border-[#ddd] ${
                          index === 1 ? "text-right pr-6" : "text-left"
                        }     text-[16px] font-[600] text-dark_b100 uppercase tracking-wider`}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data?.map((item, index) => (
                    <tr className="w-full" key={index}>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap     text-[16px] font-[400] text-dark_b500">
                        {item.title}
                      </td>

                      <td className="px-[6px] py-[17px] text-right   border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400]">
                        <span className="flex gap-4 justify-end">
                          <button onClick={() => {
                            if(item?.id === activeAccountType?.id) {
                              setActiveAccountType({
                                id: 0 
                              })
                            } else {
                              setActiveAccountType(item)
                            }

                          } } className="edit">
                        {activeAccountType?.id === item?.id ? <FaTimes color="grey" size={22}/> : 
                            <img src={Edit} alt="edit" />
                          }
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

          <div className="lg:hidden rounded-2xl">
            {data?.map((data, index) => (
              <div key={index} className="rounded-2xl">
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    Full Name
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500 ">
                    {data.td1}
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
      <Table2 activeAccountType={activeAccountType}/>
    </div>
  );
};

export default RegistrationFields;
