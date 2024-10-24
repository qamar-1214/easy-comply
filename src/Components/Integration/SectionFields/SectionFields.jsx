import Edit from "../../../assets/integration-imgs/edit.png";
import Delete from "../../../assets/integration-imgs/delete.png";
import Eye from "../../../assets/integration-imgs/eye.png";
import { useEffect, useState } from "react";
import Popup from "../../Popup/Popup";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../../services/api";
import Skeleton from "react-loading-skeleton";
import Table2 from "./Table2";
import { FaTimes } from "react-icons/fa";

const tableData = ["Title", "Action"];
const SectionFields = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState({
    id: 0
  }); 
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    title: "",
  });

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (values.title?.trim()) {
      try {
        const response = await postApi("/KycSectionTabs/Add", {
          name: values.title,
          title: values.title,
          integration_id: 9
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
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getApi(
        "/KycSectionTabs/GetByIntegrationId/9"
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
    fetchData();
  }, []);

  return (
    <section className="mt-12">
      <div className=" lg:py-3">
        <div className="bg-white  rounded-lg shadow-lg ">
          <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-border_color">
            <span>
              <h2>Section Tabs</h2>
            </span>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="add-btn"
            >
              Add section tab
            </button>
            <Popup
              heading={"Add Section Tab"}
              isOpen={isOpen}
              onClose={closePopup}
              onSubmit={handleSubmit}
              content={
                <>
                  <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      Title
                    </label>
                    <input
                      className="outline-none w-full border-none"
                      type="text"
                      onInput={(e) => {
                        setValues({ ...values, title: e.target.value });
                      }}
                      value={values.title}
                    />
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
                    {tableData.map((heading, index) => (
                      <th
                        key={index}
                        className={`px-[6px]  py-[17px] border-b-[1px] border-[#ddd] ${
                          index === 1 ? "text-right pr-6" : "text-left"
                        }      text-[16px] font-[600] text-dark_b100 uppercase tracking-wider`}
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
                        {data.title}
                      </td>

                      <td className="px-[6px] py-[17px] text-right   border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        <span className="flex gap-4 justify-end">
                          {/* <button className="edit">
                            <img src={Eye} alt="edit" />
                          </button> */}
                          <button onClick={() =>{
                              if(data?.id === activeSection?.id) {
                              setActiveSection({
                                id: 0 
                              })
                            } else {
                              setActiveSection(data)
                            }
                          }} className="edit">
                          {activeSection?.id === data?.id ? <FaTimes color="grey" size={22}/> : 
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
            {data.map((data, index) => (
              <div key={index} className="rounded-2xl">
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    Title
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b500">
                    {data.title}
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
                      <img src={Eye} alt="edit" />
                    </button>
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

          <Table2 activeSection={activeSection}/>
        </div>
      </div>
    </section>
  );
};

export default SectionFields;
