import { FiSearch } from "react-icons/fi";
const Invoices = () => {
  return (
    <section className="mt-12 mb-4">
      <div className="p-8 bg-white  rounded-lg shadow-lg">
        <div className="relative">
          <input
            type="text"
            className="p-3 pl-10  rounded w-full sm:w-[60%] lg:w-[40%] bg-[#eee] text-gray-600"
            placeholder="Search.."
          />
          <FiSearch
            size={18}
            className="absolute text-gray-400 left-3 top-[50%] -translate-y-[50%]"
          />
        </div>
        <div className="mt-4">
          <table className="w-full lg:min-w-[80vw] xl:min-w-[74vw]">
            <thead>
              <tr>
                {[
                  "Date",
                  "PAID (USD)",
                  "Charged (USD)",
                  "Services",
                  "Payment Reference",
                  "Status",
                  "Invoice",
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
              <tr className="w-full">
                <td className="px-[6px] py-[17px] text-left    border-[1px] border-[#ddd]  whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                  sample
                </td>
                <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                  sample
                </td>
                <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                  sample
                </td>
                <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                  sample
                </td>
                <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                  sample
                </td>
                <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                  sample
                </td>
                <td className="px-[6px] py-[17px] text-left  border-[1px] border-[#ddd] whitespace-nowrap   text-[16px] font-[400] text-dark_b500">
                  sample
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-5 text-sm text-gray-600">Showing 0 results</p>
        </div>
      </div>
    </section>
  );
};

export default Invoices;
