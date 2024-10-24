import { useEffect, useState } from "react";
import Xcircle from "../../../assets/integration-imgs/x-circle.png";
import Popup from "../../Popup/Popup";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { getApi, postApi } from "../../../services/api";
import Skeleton from "react-loading-skeleton";
import AddDocument from "./AddDocument";

const countries = [
  { label: "Pakistan", value: "PAK" },
  { label: "India", value: "IND" },
  { label: "England", value: "ENG" },
];

const RiskRules = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highRiskCountryInput, setHighRiskCountryInput] = useState("");
  const [riskType, setRiskType] = useState("");
  const [countriesSelected, setCountriesSelected] = useState([]);
  const [openCountriesDropdown, setOpenCountriesDropdown] = useState(false);
  const [allCountries, setAllCountries] = useState(countries);
  const [isNew, setIsNew] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    low_risk: 0,
    medium_risk: 0,
    high_risk: 0,
    aml_sanctions: 0,
    fatca_customer_declarations: 0,
    easy_comply: 0,
    other_data_analysis: 0,
    low_risk_frequency: 1,
    medium_risk_frequency: 1,
    high_risk_frequency: 1,
    high_risk_countries: [],
  });

  const openPopup = (riskType) => {
    setRiskType(riskType);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleInput = (e) => {
    setHighRiskCountryInput(e.target.value);
    const query = e.target.value.toLowerCase();
    setAllCountries(
      countries.filter((country) => country?.toLowerCase()?.includes(query))
    );
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (typeof parseInt(e.target.value) === "number") {
      value = parseInt(e.target.value);
    }
    setValues({ ...values, [e.target.name]: value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setSaveLoading(true);
      const data = {
        ...values,
        integration_id: 9,
      };

      let url = "";
      if (isNew) {
        url = "/KycRiskRules/Add";
      } else {
        url = "/KycRiskRules/Update";
      }

      const response = await postApi(url, data);
      if (response.status === 200) {
        console.log(response.data);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setSaveLoading(false);
  };

  const fetchData = async () => {
    try {
      const response = await getApi("/KycRiskRules/GetByIntegrationId/9");

      if (response.status === 200) {
        if (response.data === null) {
          setIsNew(true);
        } else {
          setIsNew(false);
          setValues({});
        }
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setValues({
      ...values,
      high_risk_countries: countriesSelected?.map((c) => c?.value),
    });
  }, [countriesSelected]);

  return (
    <section>
      {loading ? (
        <div className="mt-6 mb-8 bg-white py-6 px-6 rounded-lg shadow-lg">
          <Skeleton inline height={300} />
        </div>
      ) : (
        <div className="mt-6 mb-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-4 py-3">
            <span>
              <h2 className="font-medium">Risk Rules</h2>
            </span>
          </div>
          <div className="border-t-[2px] border-border_color">
            <div className="mt-6 mx-6 relative border px-2 py-4">
              <div>
                {countriesSelected?.map((country) => (
                  <div
                    key={country}
                    className="border border-gray-600 select-none mr-1 inline-flex items-center py-2 px-3 rounded-full"
                  >
                    <span>{country?.label}</span>
                    <IoMdClose
                      onClick={() => {
                        setCountriesSelected(
                          countriesSelected?.filter((c) => c !== country)
                        );
                      }}
                      className="ml-2 cursor-pointer"
                      color="black"
                    />
                  </div>
                ))}
              </div>
              <input
                onBlur={() =>
                  setTimeout(() => setOpenCountriesDropdown(false), 100)
                }
                value={highRiskCountryInput}
                onInput={handleInput}
                onFocus={() => setOpenCountriesDropdown(true)}
                type="text"
                placeholder="Select high risk country"
                className="p-2 focus:border-0 focus:outline-none"
              />
              {openCountriesDropdown && (
                <div className="absolute w-[30%] max-h-[250px] overflow-y-scroll z-[1000] bg-white rounded border top-[110%] left-0 right-0 shadow-lg">
                  <div>
                    {allCountries
                      ?.filter(
                        (country) =>
                          !countriesSelected
                            ?.map((country) => country.value)
                            ?.includes(country?.value)
                      )
                      ?.map((country) => (
                        <p
                          onClick={() => {
                            setCountriesSelected([
                              ...countriesSelected,
                              country,
                            ]);
                            setOpenCountriesDropdown(false);
                          }}
                          className="py-1.5 px-3 hover:bg-grey cursor-pointer select-none"
                          key={country?.value}
                        >
                          {country?.label}
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>

            <form action="#" onSubmit={handleSave}>
              <div className="mt-6 mx-6">
                <p>Available options for FATCA Risk Type:</p>
                <div className="flex items-center gap-x-2">
                  <div className="w-[30%]">
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                      <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                        Low Risk
                      </label>
                      <input
                        value={values.low_risk}
                        className="focus:border-0 w-full focus:outline-none"
                        onInput={handleChange}
                        name="low_risk"
                        placeholder="0"
                        min={"0"}
                        max={"5"}
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                      <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                        Medium Risk
                      </label>
                      <input
                        className="focus:border-0 w-full focus:outline-none"
                        onInput={handleChange}
                        name="medium_risk"
                        placeholder="0"
                        type="number"
                        min={"0"}
                        max={"5"}
                      />
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                      <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                        High Risk
                      </label>
                      <input
                        className="focus:border-0 w-full focus:outline-none"
                        placeholder="0"
                        onInput={handleChange}
                        name="high_risk"
                        min={"0"}
                        max={"5"}
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 mx-6">
                <p>Available options for Overall Risk Type:</p>
                <div className="flex flex-wrap items-center gap-x-2">
                  <div className="w-[30%]">
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                      <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                        AML Sanctions
                      </label>
                      <input
                        className="focus:border-0 w-full focus:outline-none"
                        placeholder="0"
                        type="number"
                        name="aml_sanctions"
                        onInput={handleChange}
                        min={"0"}
                        max={"5"}
                      />
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                      <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                        FATCA Customer Declaration
                      </label>
                      <input
                        className="focus:border-0 w-full focus:outline-none"
                        placeholder="0"
                        type="number"
                        onInput={handleChange}
                        min={"0"}
                        max={"5"}
                        name="fatca_customer_declarations"
                      />
                    </div>
                  </div>
                  <div className="w-[30%]">
                    <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                      <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                        Easy Comply
                      </label>
                      <input
                        className="focus:border-0 w-full focus:outline-none"
                        placeholder="0"
                        type="number"
                        onInput={handleChange}
                        min={"0"}
                        max={"5"}
                        name="easy_comply"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[30%]">
                  <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                      Other Data Analysis
                    </label>
                    <input
                      className="focus:border-0 w-full focus:outline-none"
                      placeholder="0"
                      type="number"
                      min={"0"}
                      max={"5"}
                      onInput={handleChange}
                      name="other_data_analysis"
                    />
                  </div>
                </div>
              </div>
              <div className="flex mx-6 items-center mt-10 gap-x-5">
                <div className="flex w-[30%] items-center">
                  <strong className="w-max mr-5">Low Risk</strong>
                  <div className="flex-1 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                      Periodic Review Frequency
                    </label>
                    <select
                      name="low_risk_frequency"
                      onChange={handleChange}
                      value={values.low_risk_frequency || ""}
                      className="w-full bg-transparent outline-none border-none"
                    >
                      <option disabled selected value={""}>
                        Select frequency
                      </option>
                      {[...Array(12).keys()].map((val) => {
                        return (
                          <option key={val} value={val + 1}>
                            {val + 1} Month{!!val && "s"}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="flex w-[30%] items-center">
                  <strong className="w-max mr-5">Medium Risk</strong>
                  <div className="flex-1 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                      Periodic Review Frequency
                    </label>
                    <select
                      name="medium_risk_frequency"
                      onChange={handleChange}
                      value={values.medium_risk_frequency || ""}
                      className="w-full bg-transparent outline-none border-none"
                    >
                      <option disabled selected value={""}>
                        Select frequency
                      </option>
                      {[...Array(12).keys()].map((val) => {
                        return (
                          <option key={val} value={val + 1}>
                            {val + 1} Month{!!val && "s"}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="flex w-[30%] items-center">
                  <strong className="w-max mr-5">High Risk</strong>
                  <div className="flex-1 relative border-[1.9px] border-gray-600 px-4 py-2 rounded">
                    <label className="absolute top-[-12px] left-2 bg-gray-100 px-2 text-dark_b100 text-[14px] font-[400]">
                      Periodic Review Frequency
                    </label>
                    <select
                      name="high_risk_frequency"
                      onChange={handleChange}
                      value={values.high_risk_frequency || ""}
                      className="w-full bg-transparent outline-none border-none"
                    >
                      <option disabled selected value={""}>
                        Select frequency
                      </option>
                      {[...Array(12).keys()].map((val) => {
                        return (
                          <option key={val} value={val + 1}>
                            {val + 1} Month{!!val && "s"}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end mr-10">
                <button type="submit" className="save-btn">
                  {saveLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>

            <div className="p-6 mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-lg custom-shadow-1">
                <span>
                  <h2 className="p-6">Low risk</h2>
                </span>
                <div className="border-t-[2px] border-white p-4">
                  <div className=" flex flex-col gap-2">
                    <span>
                      <h3 className="text-md font-medium">
                        Documents that will be asked on next review:
                      </h3>
                    </span>
                    <span className="mt-4 flex items-center justify-between py-4 border-b-[2px] border-white">
                      <h6>Muhammad Tayyab (Super Admin)</h6>
                      <button>
                        <img src={Xcircle} alt="x-circle" />
                      </button>
                    </span>

                    <div className="flex items-center justify-center mt-20 py-6">
                      <button
                        onClick={() => openPopup("low_risk")}
                        className="add-btn"
                      >
                        + Add document type
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg custom-shadow-2">
                <span>
                  <h2 className="p-6">Medium risk</h2>
                </span>
                <div className="border-t-[2px] border-white p-4">
                  <div className="flex flex-col gap-2">
                    <span>
                      <h3 className="text-md font-medium">
                        Documents that will be asked on next review:
                      </h3>
                    </span>
                    <span className="mt-4 flex items-center justify-between py-4 border-b-[2px] border-white">
                      <h6>Muhammad Tayyab (Super Admin)</h6>
                      <button>
                        <img src={Xcircle} alt="x-circle" />
                      </button>
                    </span>

                    <div className="flex flex-col items-center justify-end py-8">
                      <button
                        onClick={() => openPopup("medium_risk")}
                        className="add-btn"
                      >
                        + Add document type
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg custom-shadow-3">
                <span>
                  <h2 className="p-6">High risk</h2>
                </span>
                <div className="border-t-[2px] border-white p-4">
                  <div className="flex flex-col gap-2">
                    <span>
                      <h3 className="text-md font-medium">
                        Documents that will be asked on next review:
                      </h3>
                    </span>
                    <span className="mt-4 flex items-center justify-between py-4 border-b-[2px] border-white">
                      <h6>Muhammad Tayyab (Super Admin)</h6>
                      <button>
                        <img src={Xcircle} alt="x-circle" />
                      </button>
                    </span>

                    <div className="flex items-center justify-center py-8">
                      <button
                        onClick={() => openPopup("high_risk")}
                        className="add-btn"
                      >
                        + Add document type
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <AddDocument riskType={riskType} isOpen={isOpen} onClose={closePopup} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RiskRules;
