import { useState } from "react";

import LoginModal from "../Login/LoginModal"; // Import LoginModal component
import { postApi } from "../../../services/api";
import Logo from "../../../assets/logo.png";

const Registration = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    industry: "",
  });

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const result = await postApi("/Users/Signup", {
      ...values,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      password: "abc",
    });

    if (result.status === 200) {
      localStorage.setItem("user", JSON.stringify(result.data));
      location.href = "/"
    }
  };

  // Function to open login modal
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Function to close login modal
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="registration-container">
      {/* Header with logo and login button */}
      <div className="flex bg-black justify-between items-center p-4 border-b">
        {/* Top-left logo */}
        <div className="flex items-center">
          {/* Replace "logo.png" with the path to your logo image */}
          <img width={90} src={Logo} alt="" />
        </div>

        {/* Top-right login button */}
        <div>
          <button
            className="text-white hover:underline"
            onClick={openLoginModal}
          >
            Login
          </button>
        </div>
      </div>

      {/*       
      <div className="tabs flex justify-center space-x-4 p-4">
        <button
          onClick={() => handleTabClick(0)}
          className={`${
            activeTab === 0 ? "text-blue-500 underline" : "text-gray-600"
          }`}
        >
          Step 1
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`${
            activeTab === 1 ? "text-blue-500 underline" : "text-gray-600"
          }`}
        >
          Step 2
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`${
            activeTab === 2 ? "text-blue-500 underline" : "text-gray-600"
          }`}
        >
          Step 3
        </button>
      </div> */}

      {/* Tab content */}
      <div className="tab-content mt-8 p-4 flex items-center justify-center">
        {activeTab === 0 && (
          <form onSubmit={handleFormSubmit} className="space-y-4 w-[400px]">
            {/* Form 1 fields */}
            <div>
              <div className="mb-3">
                <label className="mb-1 block text-gray-700">First Name:</label>
                <input
                  type="text"
                  onInput={handleInput}
                  name="first_name"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="mb-1 block text-gray-700">Last Name:</label>
                <input
                  type="text"
                  onInput={handleInput}
                  name="last_name"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="mb-1 block text-gray-700">Email:</label>
                <input
                  type="email"
                  onInput={handleInput}
                  name="email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="mb-1 block text-gray-700">Phone:</label>
                <input
                  type="tel"
                  onInput={handleInput}
                  name="phone"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="mb-1 block text-gray-700">Industry:</label>
                <input
                  type="text"
                  name="industry"
                  onInput={handleInput}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Add other fields as needed */}
            <button
              type="submit"
              className="w-full p-2 bg-orange-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        )}
        {activeTab === 1 && (
          <form onSubmit={handleFormSubmit} className="space-y-4 w-[400px]">
            {/* Form 1 fields */}
            <div>
              <div>
                <label className="block text-gray-700">Field 1:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Field 1:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Field 1:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Add other fields as needed */}
            <button
              type="submit"
              className="w-full p-2 bg-orange-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          </form>
        )}
        {activeTab === 2 && (
          <form onSubmit={handleFormSubmit} className="space-y-4 w-[400px]">
            {/* Form 1 fields */}
            <div>
              <div>
                <label className="block text-gray-700">Field 1:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Field 1:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Field 1:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Add other fields as needed */}
            <button
              type="submit"
              className="w-full p-2 bg-orange-500 text-white rounded hover:bg-blue-600"
            >
              Next
            </button>
          </form>
        )}
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && <LoginModal closeModal={closeLoginModal} />}
    </div>
  );
};

export default Registration;
