const tableData = [
  [" SR.", " PRODUCT", " ESTIMATE"],
  {
    td1: "01.",
    td2: "AML Check",
    td3: "API transaction estimate",
    subtd: `. AML Check 1000`,
  },
  {
    td1: "02.",
    td2: "AML Check",
    td3: "API transaction estimate",
    subtd: `. AML Check 1000`,
  },
  {
    td1: "03.",
    td2: "AML Check",
    td3: "API transaction estimate",
    subtd: `. AML Check 1000`,
  },
];
const OrderSummaryTable = () => {
  return (
    <section className="bg-white rounded-xl shadow-xl  py-6 mt-12">
      <span>
        <h2 className="px-1 mb-5 md:px-3 lg:px-6 pb-5 border-b-[2px] border-border_color">
          Order Summary
        </h2>
      </span>
      <div className="lg:px-5 lg:py-3">
        <div className="bg-grey py-8 rounded-lg shadow-lg ">
          <span>
            <h2 className="px-1 mb-5 md:px-3 lg:px-6 pb-5 border-b-[2px] border-white">
              Pending task
            </h2>
          </span>
          <div className="lg:overflow-x-auto xl:overflow-x-hidden hidden lg:block px-5  w-full">
            <table className=" w-[100%]">
              <thead>
                <tr>
                  {tableData[0].map((heading, index) => (
                    <th
                      key={index}
                      className="px-[6px]  py-[17px] border-b-[2px] border-white  text-right  text-[16px] font-[600] text-dark_b100 uppercase tracking-wider"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-grey ">
                {tableData.slice(1).map((data, index) => (
                  <tr className="w-full" key={index}>
                    <td className="px-[6px] py-[17px] text-right border-b-[2px] border-white whitespace-nowrap text-[16px] font-[400] text-dark_b300">
                      {data.td1}
                    </td>
                    <td className="px-[6px] py-[17px] text-right  border-b-[2px] border-white  whitespace-nowrap   text-[16px] font-[400] text-dark_b300">
                      {data.td2}
                    </td>
                    <td className="px-[6px] py-[17px] text-right border-b-[2px] border-white whitespace-nowrap   text-[16px] font-[400] text-dark_b300">
                      {data.td3}
                      <br />
                      <span>
                        <h3>{data.subtd}</h3>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end pt-6 pr-3">
              <div className="flex items-center justify-center">
                <p>
                  Sub total: <strong>$700.00</strong>
                </p>
                <p className="mx-12">|</p>
                <p>
                  Order total: <strong>$700.00</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:hidden rounded-2xl">
            {tableData.slice(1).map((data, index) => (
              <div key={index} className="rounded-2xl">
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    SR.
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b300">
                    {data.td1}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    PRODUCT
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b300">
                    {data.td2}
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center px-6 py-3 ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <span className="text-[16px] font-[600] text-dark_b100">
                    ESTIMATE
                  </span>
                  <span className="text-[16px] font-[400] text-dark_b300">
                    {data.td3} <br />
                    <h3>{data.subtd}</h3>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-6 px-6 pt-6 lg:pt-2">
        <button className="back-configuration-btn">
          Back to configuration
        </button>
        <button className="live-account-btn">Start a live account</button>
      </div>
    </section>
  );
};

export default OrderSummaryTable;
