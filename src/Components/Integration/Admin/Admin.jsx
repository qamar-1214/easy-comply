import Edit from "../../../assets/integration-imgs/edit.png";
import Delete from "../../../assets/integration-imgs/delete.png";
import Visibility from "../../../assets/integration-imgs/visibility.png";
import Copy from "../../../assets/integration-imgs/copy.png";
import { getApi, postApi } from "../../../services/api";
import { useEffect, useState } from "react";
import Popup from "../../Popup/Popup";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";

const tableData = ["Full Name", " Email", "Action"];
const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postApi("/Users/AddAdmin", {
        ...formValues,
        role: 2,
      });
      if (response.status) {
        toast.success("Admin created successfuly");
        fetchData(); 
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    closePopup();
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getApi(
        "/Users/GetList"
      );
      setData(response.data || []);
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
              <h2>Admins</h2>
            </span>
            <button onClick={() => setIsOpen(true)} className="add-btn">
              Add Admin
            </button>
            <Popup
              isOpen={isOpen}
              heading={"Add Admin"}
              onClose={closePopup}
              onSubmit={handleSubmit}
              content={
                <>
                  <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      First name
                    </label>
                    <input
                      className="outline-none border-none w-full"
                      type="text"
                      onInput={(e) =>
                        setFormValues({
                          ...formValues,
                          first_name: e.target.value,
                        })
                      }
                      value={formValues.first_name}
                    />
                  </div>
                  <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      Last name
                    </label>
                    <input
                      className="outline-none border-none w-full"
                      type="text"
                      onInput={(e) =>
                        setFormValues({
                          ...formValues,
                          last_name: e.target.value,
                        })
                      }
                      value={formValues?.last_name}
                    />
                  </div>
                  <div className="lg:col-span-2 mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      E-mail
                    </label>
                    <input
                      className="outline-none border-none w-full"
                      type="email"
                      value={formValues?.email}
                      onInput={(e) =>
                        setFormValues({
                          ...formValues,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="lg:col-span-2 mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                    <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                      Password
                    </label>
                    <span className="flex justify-between">
                      <input
                        className="outline-none border-none w-full"
                        type="password"
                        value={formValues?.password}
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            password: e.target.value,
                          })
                        }
                      />
                      <span className="flex gap-2">
                        <button>
                          <img src={Visibility} alt="visibility" />
                        </button>
                        <button>
                          <img src={Copy} alt="copy" />
                        </button>
                      </span>
                    </span>
                  </div>
                </>
              }
            />
          </div>
          <div className="lg:overflow-x-auto xl:overflow-x-hidden hidden py-4  lg:block px-10  w-full">
            {loading ? (
              <div className="mt-6 mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
                <Skeleton inline height={200} />
              </div>
            ) : (
              <table className=" w-[100%]">
                <thead>
                  <tr>
                    {tableData.map((heading, index) => (
                      <th
                        key={index}
                        className={`px-[6px]  py-[17px] border-b-[1px] border-[#ddd] ${
                          index === 3 ? "text-right pr-6" : "text-left"
                        }     text-[16px] font-[600] text-dark_b100 uppercase tracking-wider`}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((item, index) => (
                    <tr className="w-full" key={index}>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap text-[16px] font-[400] text-dark_b500">
                        {item.first_name + " " + item.last_name}
                      </td>
                      <td className="px-[6px] py-[17px] text-left   border-b-[1px] border-[#ddd]  whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                        {item.email}
                      </td>
         
                      <td className="px-[6px] py-[17px] text-right   border-b-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
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
                  <span className="text-[600] font-[16px] text-dark_b100">
                    Full Name
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
                  <span className="text-[600] font-[16px] text-dark_b100">
                    Email
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
                  <span className="text-[600] font-[16px] text-dark_b100">
                    CESES
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
                  <span className="text-[600] font-[16px] text-dark_b100">
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
          <div className="flex justify-end py-4 lg:py-0 px-5 lg:pb-4">
            <button className="save-btn">All branch Cases: 03</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
