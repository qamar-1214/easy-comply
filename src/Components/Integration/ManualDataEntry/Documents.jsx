import Edit from "../../../assets/integration-imgs/edit.png";
import Delete from "../../../assets/integration-imgs/delete.png";
import Popup from "../../Popup/Popup";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { deleteApi, getApi, postApi } from "../../../services/api";
import Skeleton from "react-loading-skeleton";

const tableData = [["Title", "Action"]];
const Documents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    title: "",
  });

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postApi("/DocumentsManual/Add", {
        integration_id: 9,
        name: formValues.title,
        title: formValues.title,
      });
      if (response.status) {
        toast.success("Document created successfuly");
        fetchData();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }

    closePopup();
  };

  const deleteData = async (id) => {
    try {
      await deleteApi("/DocumentsManual/Delete/" + id);
      fetchData();
      toast.success("Document deleted");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getApi("/DocumentsManual/GetList");
      setData(response.data || []);
      console.log(response.data);
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
        {loading ? (
          <div className="mt-6 mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
            <Skeleton inline height={200} />
          </div>
        ) : (
          <div className="bg-white  rounded-lg shadow-lg ">
            <div className="flex justify-between items-center px-6 py-4 border-b-[2px] border-border_color">
              <span>
                <h2>Documents</h2>
              </span>
              <button onClick={() => setIsOpen(true)} className="add-btn">
                Add Documents
              </button>
              <Popup
                isOpen={isOpen}
                heading={"Add Document"}
                onClose={closePopup}
                onSubmit={handleSubmit}
                content={
                  <>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Document Title
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            title: e.target.value,
                          })
                        }
                        value={formValues.title}
                      />
                    </div>
                  </>
                }
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
                          index === 1 ? "text-right pr-6" : "text-left"
                        }  text-[16px] font-[600] text-dark_b100 uppercase tracking-wider`}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data.map((data, index) => (
                    <tr className="w-full" key={index}>
                      <td className="px-[6px] py-[17px] text-left border-b-[1px] border-[#ddd] whitespace-nowrap      text-[16px] font-[400] text-dark_b500">
                        {data.title}
                      </td>

                      <td className="px-[6px] py-[17px] text-right   border-b-[1px] border-[#ddd] whitespace-nowrap    text-[16px] font-[400] text-dark_b500">
                        <span className="flex gap-4 justify-end">
                          <button className="edit">
                            <img src={Edit} alt="edit" />
                          </button>
                          <button
                            onClick={() => deleteData(data.id)}
                            className="delete"
                          >
                            <img src={Delete} alt="elete" />
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:hidden rounded-2xl">
              {data.map((data, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 rounded-2xl"
                >
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100">
                      Full Name
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
        )}
      </div>
    </section>
  );
};

export default Documents;
