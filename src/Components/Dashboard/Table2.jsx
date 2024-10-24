import rejectImg from "../../assets/dashboard-imgs/reject.png";
import successImg from "../../assets/dashboard-imgs/success.png";
import pendingImg from "../../assets/dashboard-imgs/pending.png";
import externalLink from "../../assets/dashboard-imgs/external-link.png";
const tableData = [
  [
    " URID",
    " TASK",
    " TASK DATE",
    " DUE",
    "ASSIGNED TO",
    "CASE TYPE",
    " STATUS",
  ],
  {
    td1: "018283923",
    td2: "Document Approval",
    td3: "Oct 27, 2022",
    td4: "Oct 27, 2022",
    td5: "John Doe",
    td6: "New registration",
    td7: "Rejected",
    icon: rejectImg,
    link: externalLink,
    color: "text-danger_r300",
    backColor: "bg-btn_bg",
  },
  {
    td1: "018283923",
    td2: "Document Approval",
    td3: "Oct 27, 2022",
    td4: "Oct 27, 2022",
    td5: "John Doe",
    td6: "New registration",
    td7: "Approved",
    icon: successImg,
    link: externalLink,
    color: "text-success_g500",
    backColor: "bg-btn_bg",
  },
  {
    td1: "018283923",
    td2: "Document Approval",
    td3: "Oct 27, 2022",
    td4: "Oct 27, 2022",
    td5: "John Doe",
    td6: "New registration",
    td7: "Pending",
    icon: pendingImg,
    link: externalLink,
    color: "text-secondary_400",
    backColor: "bg-btn_bg",
  },
];
const Table2 = () => {
  return (
    <div
      id="dashboard-page"
      className="bg-white py-8 rounded-lg shadow-lg my-12"
    >
      <span>
        <h2 className="px-1 mb-5 md:px-3 lg:px-6 pb-5 border-b-[2px] border-border_color text-dark_b300 text-lg font-[500]">
          Finished task
        </h2>
      </span>
      <div className=" lg:px-4 ">
        <div className="container mx-auto  px-4  rounded-2xl">
          <div className="overflow-hidden overflow-x-auto lg:overflow-visible ">
            <div className="overflow-hidden hidden lg:block">
              <div className="lg:overflow-x-auto xl:overflow-x-hidden ">
                <table className="w-full lg:min-w-[80vw] xl:min-w-[74vw]     ">
                  <thead>
                    <tr>
                      {tableData[0].map((heading, index) => (
                        <th
                          key={index}
                          className="px-[6px] py-[17px] border-b-[2px] border-border_color    text-left text-sm xl:text-md font-[600] text-dark_b100 uppercase tracking-wider"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white  ">
                    {tableData.slice(1).map((data, index) => (
                      <tr key={index}>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color whitespace-nowrap  text-sm sxl:text-md  font-medium  text-blue_b300">
                          <a href="#">
                            <span className="flex gap-1 text-blue_b300 font-medium">
                              <img src={data.link} alt="external" />
                              {data.td1}
                            </span>
                          </a>
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color whitespace-nowrap   text-sm sxl:text-md font-medium text-dark_b300">
                          {data.td2}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px]  border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium  text-dark_b300">
                          {data.td3}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px]  border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium  text-dark_b300">
                          {data.td4}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px]  border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium  text-dark_b300">
                          {data.td5}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color   whitespace-nowrap   text-sm sxl:text-md font-medium  text-dark_b300">
                          {data.td6}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color   whitespace-nowrap text-sm sxl:text-md font-medium ">
                          <button
                            className={`py-[5px] px-[10px] ${data.color} ${data.backColor} rounded-lg shadow `}
                          >
                            <span className="flex gap-1 items-center font-medium">
                              <img
                                src={data.icon}
                                alt="icon"
                                width="15px"
                                height="15px"
                              />
                              <h5>{data.td7}</h5>
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:hidden rounded-2xl">
              {tableData.slice(1).map((data, index) => (
                <div key={index} className="rounded-2xl">
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-dark_b50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark_b100">
                      URID
                    </span>
                    <span className="text-sm text-blue_b300">
                      <a href="#">
                        <span className="flex gap-1 text-blue_b300 font-medium">
                          <img src={data.link} alt="external" />
                          {data.td1}
                        </span>
                      </a>
                    </span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-dark_b50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark_b100">
                      TASK
                    </span>
                    <span className="text-sm text-dark_b300">{data.td2}</span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-dark_b50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark_b100">
                      TASK DATE
                    </span>
                    <span className="text-sm text-dark_b300">{data.td3}</span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-dark_b50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark_b100">
                      DUE
                    </span>
                    <span className="text-sm text-dark_b300">{data.td4}</span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-dark_b50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark_b100">
                      ASSIGNED TO
                    </span>
                    <span className="text-sm text-dark_b300">{data.td5}</span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-dark_b50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark_b100">
                      CASE TYPE
                    </span>
                    <span className="text-sm text-dark_b300">{data.td6}</span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-dark_b50" : "bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-dark_b100">
                      STATUS
                    </span>
                    <span className="text-sm text-gray-500">
                      <button
                        className={`py-[5px] px-[10px] ${data.color} ${data.backColor} rounded-lg shadow `}
                      >
                        <span className="flex gap-1 items-center font-medium">
                          <img
                            src={data.icon}
                            alt="icon"
                            width="15px"
                            height="15px"
                          />
                          {data.td7}
                        </span>
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table2;
