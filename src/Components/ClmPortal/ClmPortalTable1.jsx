import rejectImg from "../../assets/dashboard-imgs/reject.png";
import successImg from "../../assets/dashboard-imgs/success.png";
import pendingImg from "../../assets/dashboard-imgs/pending.png";
import externalLink from "../../assets/dashboard-imgs/external-link.png";
import Search from "../../assets/clmportal-img/Search.png";
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
    td3: "Approved",
    td4: "Oct 27, 2022",
    td5: "Low Risk",
    td6: "New registration",
    td7: "John Doe",
    icon: successImg,
    link: externalLink,
    color: "text-success_g400",
    backColor: "bg-success_g500/20",
    btn_bg: "bg-btn_bg",
  },
  {
    td1: "018283923",
    td2: "Document Approval",
    td3: "Pending",
    td4: "Oct 27, 2022",
    td5: "Medium Risk",
    td6: "New registration",
    td7: "John Doe",
    icon: pendingImg,
    link: externalLink,
    color: "text-secondary_400",
    backColor: "bg-secondary_300/20",
    btn_bg: "bg-btn_bg",
  },
  {
    td1: "018283923",
    td2: "Document Approval",
    td3: "Rejected",
    td4: "Oct 27, 2022",
    td5: "High Risk",
    td6: "New registration",
    td7: "John Doe",
    icon: rejectImg,
    link: externalLink,
    color: "text-danger_r300",
    backColor: "bg-danger_r300/20",
    btn_bg: "bg-btn_bg",
  },
];
const ClmPortalTable1 = () => {
  return (
    <div className="bg-white py-3 rounded-lg shadow-lg my-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-[2px] border-border_color p-5">
        <div className="w-max-full flex items-center col-span-1 p-2 bg-dark_b50 rounded-lg">
          <button>
            <img src={Search} alt="search" />
          </button>
          <input
            className="w-full p-2 text-lg bg-dark_b50 border-none outline-none"
            type="search"
            placeholder="Search.."
          />
        </div>
      </div>
      <div className="lg:px-4">
        <div className="container mx-auto   rounded-2xl">
          <div className="overflow-hidden overflow-x-auto lg:overflow-visible ">
            <div className="overflow-hidden hidden lg:block">
              <div className="lg:overflow-x-auto  xl:overflow-x-hidden">
                <table className="w-full lg:min-w-[80vw] xl:min-w-[74vw]     ">
                  <thead>
                    <tr>
                      {tableData[0].map((heading, index) => (
                        <th
                          key={index}
                          className="px-[6px] py-[17px] border-b-[2px] border-border_color text-left  text-[16px] font-[600] text-dark_b100 uppercase tracking-wider"
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
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium text-dark_b300">
                          {data.td2}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium text-dark_b300">
                          <button
                            className={`py-[5px] px-[10px] ${data.color} ${data.btn_bg} rounded-lg shadow `}
                          >
                            <span className="flex gap-1 items-center font-medium">
                              <img
                                src={data.icon}
                                alt="icon"
                                width="15px"
                                height="15px"
                              />
                              {data.td3}
                            </span>
                          </button>
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium text-dark_b300">
                          {data.td4}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium text-dark_b300">
                          <button
                            className={`py-[5px] px-[10px] ${data.color} ${data.backColor} rounded-lg shadow `}
                          >
                            <span className="flex gap-1 items-center font-medium">
                              {data.td5}
                            </span>
                          </button>
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color  whitespace-nowrap   text-sm sxl:text-md font-medium text-dark_b300">
                          {data.td6}
                        </td>
                        <td className="px-[6px] py-[17px] border-b-[2px] border-border_color  whitespace-nowrap text-sm sxl:text-md font-medium text-dark_b300">
                          {data.td7}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:hidden rounded-2xl ">
              {tableData.slice(1).map((data, index) => (
                <div key={index} className="rounded-2xl">
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100 uppercase">
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
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100 uppercase">
                      TASK
                    </span>
                    <span className="text-sm sxl:text-md font-medium text-dark_b300">
                      {data.td2}
                    </span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100 uppercase">
                      TASK DATE
                    </span>
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
                        {data.td3}
                      </span>
                    </button>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100 uppercase">
                      DUE
                    </span>
                    <span className="text-sm sxl:text-md font-medium text-dark_b300">
                      {data.td4}
                    </span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100 uppercase">
                      ASSIGNED TO
                    </span>
                    <button
                      className={`py-[5px] px-[10px] ${data.color} ${data.backColor} rounded-lg shadow `}
                    >
                      <span className="flex gap-1 items-center font-medium">
                        {data.td5}
                      </span>
                    </button>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100 uppercase">
                      CASE TYPE
                    </span>
                    <span className="   text-sm sxl:text-md font-medium text-dark_b300">
                      {data.td6}
                    </span>
                  </div>
                  <div
                    className={`flex justify-between items-center px-6 py-3 ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <span className="text-[16px] font-[600] text-dark_b100 uppercase">
                      STATUS
                    </span>
                    <span className="   text-sm sxl:text-md font-medium text-dark_b300">
                      {data.td7}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-6 pt-5 pb-3">
        <button className="save-btn">All branch Cases: 03</button>
      </div>
    </div>
  );
};

export default ClmPortalTable1;
