const Settings = () => {
  return (
    <section className="content">
      <div className="mt-6 mb-8 bg-white py-8 px-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <span>
            <h2>Settings</h2>
          </span>
          <button className="save-btn">Save</button>
        </div>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20 sm:gap-y-12">
          <div className="flex flex-col gap-8">
            <span className="flex items-center gap-4">
              <input
                className="w-[16px] h-[16px] accent-primary_b300"
                type="checkbox"
                checked
                id="account-activate"
              />
              <label htmlFor="account-activate">
                <h3>Account Activated</h3>
              </label>
            </span>
            <span className="flex items-center gap-4">
              <input
                className="w-[16px] h-[16px]"
                type="checkbox"
                checked
                id="biometric"
              />
              <label htmlFor="biometric">
                <h3>Biometric Verified</h3>
              </label>
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <span className="flex items-center gap-4">
              <input
                className="w-[16px] h-[16px]"
                type="checkbox"
                checked
                id="sms-verification"
              />
              <label htmlFor="sms-verification">
                <h3>SMS Verification</h3>
              </label>
            </span>
            <span className="flex items-center gap-4">
              <input
                className="w-[16px] h-[16px]"
                type="checkbox"
                checked
                id="custom-review-required"
              />
              <label htmlFor="custom-review-required">
                <h3>Custom Review Required</h3>
              </label>
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <span className="flex items-center gap-4">
              <input
                className="w-[16px] h-[16px]"
                type="checkbox"
                checked
                id="verified-through-verisys"
              />
              <label htmlFor="verified-through-verisys">
                <h3>Verified through Verisys</h3>
              </label>
            </span>
            <span className="flex items-center gap-4">
              <input
                className="w-[16px] h-[16px]"
                type="checkbox"
                checked
                id="activate-automatic-approval"
              />
              <label htmlFor="activate-automatic-approval">
                <h3>Activate Automatic Approval</h3>
              </label>
            </span>
          </div>
        </div>
        <div className="py-2 flex flex-col gap-6">
          <div className="py-2 grid grid-cols-1 sm:grid-cols-5">
            <div className="relative border-[1.9px] border-gray-600 px-4 py-2 grid-cols-1 sm:col-span-3 rounded">
              <label className="absolute top-[-12px] left-2 text-dark_b100 bg-white px-2  text-sm">
                Risk type
              </label>
              <select className="bg-transparent w-full outline-none border-none">
                <option value="low">Low risk</option>
                <option value="high">High risk</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button className="save-btn">save</button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
