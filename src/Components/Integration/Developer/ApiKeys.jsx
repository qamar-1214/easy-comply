import visible from "../../../assets/integration-imgs/visibility.png";
import copy from "../../../assets/integration-imgs/copy.png";
const ApiKeys = () => {
  return (
    <div className="mt-12 mb-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        <span>
          <h2>API Keys</h2>
        </span>
      </div>
      <div className="border-t-[2px] border-border_color p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
            <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-[14px] font-[400]">
              Password
            </label>
            <span className="flex justify-between">
              <input
                className="outline-none border-none w-full"
                type="password"
                value="121342"
              />
              <span className="flex gap-2">
                <button>
                  <img src={visible} alt="visibility" />
                </button>
                <button>
                  <img src={copy} alt="copy" />
                </button>
              </span>
            </span>
          </div>
          <div className="mt-6 relative border-[1.9px] border-gray-600 px-4 py-4 rounded">
            <label className="absolute top-[-12px] left-2 bg-white px-2 text-dark_b100 text-[14px] font-[400]">
              Password
            </label>
            <span className="flex justify-between">
              <input
                className="outline-none border-none w-full"
                type="password"
                value="121342"
              />
              <span className="flex gap-2">
                <button>
                  <img src={visible} alt="visibility" />
                </button>
                <button>
                  <img src={copy} alt="copy" />
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
