import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import Edit from "../assets/integration-imgs/edit.png";
import Delete from "../assets/integration-imgs/delete.png";

const tabs = [
  {
    id: 1,
    label: "CLM Portal",
  },
  {
    id: 2,
    label: "Video KYC",
  },
];

const VerificationsList = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  return (
    <>
      <section className="w-full">
        <div className="px-4 md:px-5 pt-7">
          <div className="flex items-center">
            <div className="flex flex-wrap items-start mt-6 gap-y-4 md:gap-y-0 gap-x-2">
              {tabs.map((tab) => (
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-[#EBEBEB] text-[#5A5A5A]"
                  } py-[7px] rounded-lg font-[500] text-[16px]  px-[15px]`}
                  key={tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-white py-6 px-6 mb-8 rounded-lg shadow-lg">
            <div className="flex justify-end py-3">
              <div className="flex items-center">
                <button className="save-btn mr-3">
                  Generate Verification Link
                </button>
                <button className="save-btn">Export</button>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                className="p-3 pl-10 rounded w-[30%] bg-[#eee] text-gray-600"
                placeholder="Search.."
              />
              <FiSearch
                size={18}
                className="absolute left-3 top-[50%] -translate-y-[50%]"
                color="grey"
              />
            </div>

            <div className="lg:overflow-x-auto xl:overflow-x-hidden  hidden py-4 mt-4 lg:block  w-full">
              {loading ? (
                <div className=" mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
                  <Skeleton inline height={100} />
                </div>
              ) : (
                <div>
                  <table className="w-full lg:min-w-[80vw] xl:min-w-[74vw]">
                    <thead>
                      <tr>
                        {[
                          "Verification ID",
                          "Tracking Number",
                          "Branch",
                          "Status",
                          "Assign To",
                          "Risk",
                          "Country",
                          "Date",
                        ].map((heading, index) => (
                          <th
                            key={index}
                            className={`px-[8px]  py-[17px] border-[1px] border-[#ddd] text-left text-[16px] font-[600] text-dark_b100 uppercase tracking-wider`}
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {data?.map((row) => {
                        return (
                          <tr key={row?.id} className="w-full">
                            <td className="px-[6px] py-[17px] text-left    border-[1px] border-[#ddd]  whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                              {row?.type || "-"}
                            </td>
                            <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                              {row?.name || "-"}
                            </td>
                            <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                              {row?.title || "-"}
                            </td>
                            <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                              {row?.schema || "-"}
                            </td>
                            <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                              {row?.rules || "-"}
                            </td>
                            <td className="px-[6px] py-[17px] text-right    border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                              <span className="flex gap-4 justify-end">
                                <button className="edit">
                                  <img src={Edit} alt="edit" />
                                </button>
                                <button className="delete">
                                  <img src={Delete} alt="elete" />
                                </button>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <p className="mt-5 text-sm text-gray-600">
                    Showing {data?.length} results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerificationsList;
