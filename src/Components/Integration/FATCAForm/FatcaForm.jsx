import Delete from "../../../assets/integration-imgs/delete.png";
import chevron from "../../../assets/integration-imgs/chevron-down.png";
import Popup from "../../Popup/Popup";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../../services/api";
import Skeleton from "react-loading-skeleton";

const FatcaForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    text: "",
    comment_label: "", 
    exposable: 0, 
    label: "", 
    integration_id: 9, 

  });

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await postApi("/FatcaForm/Add", {
        ...formValues, 
        name: formValues.label, 
        commentable_answers: []
      });
      if (response.status) {
        toast.success("Question created successfuly");
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
      const response = await getApi("/FatcaForm/GetList/");
      //setData(response.data || []);
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
              <h2>FATCA form requirements</h2>
            </span>
            <span className="flex gap-4">
              <button onClick={() => setIsOpen(true)} className="add-btn">
                Add Field
              </button>
              <Popup
                isOpen={isOpen}
                heading={"Provide field information"}
                onClose={closePopup}
                onSubmit={handleSubmit}
                content={
                  <>
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Text
                      </label>
                      <textarea
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            text: e.target.value,
                          })
                        }
                        value={formValues.text}
                      />
                    </div>
                     <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Question
                      </label>
                      <input
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            label: e.target.value,
                          })
                        }
                        value={formValues.label}
                      />
                    </div>
                     <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
                      <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-sm">
                        Placeholder for comment field
                      </label>
                      <textarea
                        className="outline-none border-none w-full"
                        type="text"
                        onInput={(e) =>
                          setFormValues({
                            ...formValues,
                            comment_label: e.target.value,
                          })
                        }
                        value={formValues.comment_label}
                      />
                    </div>
                    <div className="mt-6 flex items-center">
                        <label><strong>Exposable</strong></label>
                        <input className="ml-2" type="checkbox"/>
                    </div>
                  </>
                }
              />
              <button className="save-btn">Save</button>
            </span>
          </div>
          <div className="border-t-[2px] border-border_color">
            <div className="p-6 grid grid-cols-1 gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 flex justify-between items-center rounded-lg custom-shadow"
                >
                  <p>{item.text}</p>
                  <span className="flex items-center gap-4">
                    <button className="delete">
                      <img src={Delete} alt="delete" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-200">
                      <img src={chevron} alt="down" />
                    </button>
                  </span>
                </div>
              ))}
            </div>
      
          </div>
        </div>
      )}
    </section>
  );
};

export default FatcaForm;
