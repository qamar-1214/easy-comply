import Refresh from "../../../assets/verification-imgs/refresh-cw.png";
import Checked from "../../../assets/verification-imgs/checked.png";
const Section2 = () => {
  return (
    <div className="mt-6 mb-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <span>
          <h2>AML Checks</h2>
        </span>
        <button className="primary-btn flex gap-2">
          <img src={Refresh} alt="Refresh" />
          <span> Perform Fresh Check Now</span>
        </button>
      </div>
      <div className="border-t-[2px] border-border_color p-6">
        <div className="grid grid-cols-1 gap-6 w-full">
          <div className="flex items-center gap-6">
            <span className="w-[25%] lg:w-[13%]">
              <h3>Periodic Review:</h3>
            </span>
            <span className="bg-gray-100 rounded-lg w-[75%] lg:w-[85%] p-4">
              <h3>
                AML for this user is performed
                <span className="text-primary_b300 px-1">every 12 months</span>
                as this user is
                <span className="text-primary_b300 px-1">Low Risk.</span>
              </h3>
            </span>
          </div>
          <div className="flex items-center w-full">
            <span className="w-[25%] lg:w-[15%] lg:gap-4">
              <h3>Custom Review:</h3>
            </span>
            <span className="bg-gray-100 rounded-lg w-[75%] lg:w-[85%] p-4">
              <h3>
                Next check is due on
                <span className="text-primary_b300 px-1">26/12/2024.</span>
              </h3>
            </span>
          </div>
          <div className="bg-success_g300/20 p-4 w-full flex items-center justify-end rounded-lg">
            <div>
              <span className="flex gap-4 items-center sm:gap-64 text-success_g400 font-medium text-lg">
                <span className="flex items-center gap-2">
                  <img className="w-4" src={Checked} />
                  <h5>No Record Found</h5>
                </span>
                <span className="text-sm"> 08/01/2024 15:59:09 </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
