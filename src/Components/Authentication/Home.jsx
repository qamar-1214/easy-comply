import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./Login/LoginModal";

const Home = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top header with logo on the left and links on the right */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        {/* Top-left logo */}
        <div className="flex items-center">
          {/* Replace "logo.png" with the path to your logo image */}
        </div>

        {/* Top-right navigation links */}
        <div className="flex space-x-4">
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
          <button
            className="text-blue-500 hover:underline"
            onClick={openLoginModal}
          >
            Login
          </button>
        </div>
      </header>

      {/* Main content in the center */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Easy Comply</h1>
        <p className="text-gray-600 text-center mb-8">
          This is the home page. Please use the links above to navigate.
        </p>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen || <LoginModal closeModal={closeLoginModal} />}
    </div>
  );
};

export default Home;
