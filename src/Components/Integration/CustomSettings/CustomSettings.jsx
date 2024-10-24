import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../../services/api";

const checkboxData = [
  { name: "Account Activated", key: "account_activated" },
  { name: "Biometric Verified", key: "biometric_verified" },
  { name: "Account Blocked", key: "account_blocked" },
  { name: "Email Verification Enabled", key: "email_verification_enabled" },
  { name: "SMS Verification Enabled", key: "sms_verification_enabled" },
  { name: "Custom Review Data Enabled", key: "custom_review_date_enabled" },
  { name: "High Net Worth", key: "high_net_worth" },
  { name: "AML CFT", key: "aml_cft" },
  { name: "Verified through Verisys", key: "verified_through_verisys" },
  { name: "Automatic Approval Enabled", key: "automatic_approval_enabled" },
];
const CustomSettings = () => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saveLoading, setSaveLoading] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const handleChange = (key) => {
    const data = values;
    const findValue = data?.findIndex((d) => d.alias === key);
    if (findValue >= 0) {
      data[findValue].value = !data[findValue].value;
    }

    setValues([...data]);
  };

  const fetchCustomerSettings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await getApi(
        "/KycCustomerSettings/GetByUserId/" + user?.id
      );
      if (response.data?.length === 0) {
        setIsNew(true);
        setValues(
          checkboxData?.map((d) => ({
            alias: d.key,
            value: false,
            enabled: true,
            exposable: true,
          }))
        );
      } else {
        setValues([]);
        setIsNew(false);
        console.log(response.data);
      }
      setTimeout(() => {
        setLoading(false);
      }, 150);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleSave = async () => {
    try {
      setSaveLoading(true);

      let url = "";
      if (isNew) {
        url = "/KycCustomerSettings/Add";
      } else {
        url = "/KycCustomerSettings/Update";
      }

      const body = {
        integration_id: 9,
        customer_checks: values,
        customer_categories: "",
        risk_weightage: "",
      };

      const response = await postApi(url, body);
      if (response.status === 200) {
        toast.success("Custom settings saved!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Couldn't save information!");
    }
    setSaveLoading(false);
  };

  useEffect(() => {
    fetchCustomerSettings();
  }, []);

  return (
    <section className="content">
      {loading ? (
        <div className="mt-6 mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
          <Skeleton inline height={300} />
        </div>
      ) : (
        <div className="mt-6 mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <span>
              <h2 className="font-medium">Customer settings</h2>
            </span>
            <button onClick={handleSave} className="save-btn">
              {saveLoading ? "Saving..." : "Save"}
            </button>
          </div>
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 sm:gap-y-12">
            <div className="flex items-center flex-wrap w-screen gap-8">
              {values.map((item, index) => (
                <div key={index} className="flex items-center gap-4 w-[30%]">
                  <input
                    className="w-[16px] h-[16px] accent-primary_b300"
                    onChange={() => handleChange(item?.alias)}
                    type="checkbox"
                    name={item.alias}
                    value={item.value}
                    id={item.alias}
                  />
                  <label htmlFor={item.alias}>
                    <h3>{checkboxData[index].name}</h3>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* <div>
          <div className="py-8 flex flex-col gap-6">
            <div>
              <span className="flex gap-4">
                <h2>List of available options htmlFor Risk Type:</h2>
                <button>
                  <img
                    src="assets/integration-imgs/toggle-show.png"
                    alt="toggle-show"
                  />
                </button>
              </span>
            </div>
            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
              <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-[14px] font-[400]">
                  Low Risk weight
                </label>
                <input
                  className="w-full border-none outline-none"
                  type="text"
                  value="00"
                />
              </div>
              <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-[14px] font-[400]">
                  Medium Risks Weightage
                </label>
                <input
                  className="w-full border-none outline-none"
                  type="text"
                  value="00"
                />
              </div>
              <div className="relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-[14px] font-[400]">
                  High Risks Weightage
                </label>
                <input
                  className="w-full border-none outline-none"
                  type="text"
                  value="00"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button className="save-btn">save</button>
          </div>
        </div> */}
        </div>
      )}
    </section>
  );
};

export default CustomSettings;
