import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LoginModal = ({ closeModal }) => {
  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic here

    try {
      const result = await axios.post(import.meta.env.VITE_BACKEND_URL+"/Users/LoginUser", {
        email, password
      })
      if(result.status === 200) {
        localStorage.setItem("user", JSON.stringify(result.data)); 
        location.href = "/"; 
      }
    } catch (error) {
      console.log(error); 
      if(error?.response?.status === 401) {
        toast.error("Invalid credentials"); 
      } else {
        toast.error("Something went wrong!"); 
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-5 p-2 bg-primary  text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <button
        className="w-full mt-2 p-2 bg-gray-100 text-gray-600 hover:text-gray-800 text-center"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
