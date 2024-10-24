import Delete from "../../../assets/integration-imgs/delete.png";
import chevron from "../../../assets/integration-imgs/chevron-down.png";
import Popup from "../../Popup/Popup";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { deleteApi, getApi, postApi } from "../../../services/api";
import Skeleton from "react-loading-skeleton";

const Consent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    content: "",
    label_link: "", 
    label_text: ""
  });

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postApi("/Consent/Add", {
        ...formValues, 
        integration_id: 9
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

    const deleteData = async (id) => {
    try {
      await deleteApi("/Consent/Delete/" + id);
      fetchData(); 
      toast.success("Consent deleted"); 
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getApi("/Consent/GetList");
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
    <section>
      {loading ? (
        <div className="mt-6 mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
          <Skeleton inline height={200} />
        </div>
      ) : (
        <div className="mt-12 mb-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-4 py-3">
            <span>
              <h2>Consent statements</h2>
            </span>
            <span className="flex gap-4">
              <button onClick={() => setIsOpen(true)} className="add-btn">
                Add Consent
              </button>
              <Popup
                isOpen={isOpen}
                heading={"Add Consent"}
                onClose={closePopup}
                onSubmit={handleSubmit}
                content={
                  <>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Name
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            name: e.target.value,
                          })
                        }
                        value={formValues.name}
                      />
                    </div>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Content
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            content: e.target.value,
                          })
                        }
                        value={formValues.content}
                      />
                    </div>
                     <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Label Text
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            label_text: e.target.value,
                          })
                        }
                        value={formValues.label_text}
                      />
                    </div>
                     <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Label Link
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            label_link: e.target.value,
                          })
                        }
                        value={formValues.label_link}
                      />
                    </div>
                  </>
                }
              />
            </span>
          </div>
          <div className="border-t-[2px] border-border_color">
            <div className="p-6 grid grid-cols-1 gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 flex justify-between items-center rounded-lg custom-shadow"
                >
                  <p>{item.content}</p>
                  <span className="flex items-center gap-4">
                    <button onClick={() => deleteData(item.id)} className="delete">
                      <img src={Delete} alt="delete" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-200">
                      <img src={chevron} alt="down" />
                    </button>
                  </span>
                </div>
              ))}

              <div className="w-full h-64 flex items-center justify-center border-dashed border-2 border-sky-500 rounded-lg">
                <span className="flex flex-col gap-4 justify-center items-center">
                  <h2 className="text-2xl">Upload Your Logo</h2>
                  <p className="text-lg">Drag & Drop the file here</p>
                  <span className="select-wrapper">
                    <input type="file" name="image_src" id="image_src1" />
                  </span>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};

export default Consent;
