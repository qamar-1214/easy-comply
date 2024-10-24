import RadialChart from "./RadialChart";

const Data = [
  {
    heading: "Date of activation",
    text: "25/04/2024",
  },
  {
    heading: "Date of subscription ends",
    text: "25/04/2024",
  },
  {
    heading: "Integration type",
    text: "Live",
  },
  {
    heading: "Peicing model",
    text: "Prepaid",
  },
  {
    heading: "Number of remaining live verifications",
    text: 999,
  },
  {
    heading: "Number of used live verificaitons",
    text: 1,
  },
];
const GraphicalView = () => {
  return (
    <section className="mt-12 mb-4">
      <div className="p-8 bg-white  rounded-lg shadow-lg ">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex-1 mt-6 relative border-[2px] border-gray-300 px-4 py-2 rounded ">
              <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-[14px] font-[400]">
                Product
              </label>
              <select
                name="fieldType"
                className="w-full bg-transparent outline-none border-none"
              >
                <option disabled selected value={""}>
                  CLM Portal
                </option>
                {["text", "integer", "boolean"].map((val) => {
                  return (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {Data.map((item, index) => (
                <div key={index}>
                  <span>
                    <h3>{item.heading}</h3>
                    <p>{item.text}</p>
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="filter-btn">Filter by date</button>
            </div>
          </div>
          <div className="m-4 sm:m-12 lg:m-24">
            <span>
              <h2>BALANCE:$399.60</h2>
            </span>
          </div>
        </div>
        <div className="my-6">
          <span>
            <h2 className="py-2">CLM Portal</h2>
          </span>
          <div className="border-t-[2px] border-border_color flex flex-col lg:flex-row justify-between">
            <div>
              <span className="flex flex-col gap-2 mt-2">
                <h3>Package verifications number</h3>
                <p>500</p>
              </span>
            </div>
            <div>
              <RadialChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicalView;
