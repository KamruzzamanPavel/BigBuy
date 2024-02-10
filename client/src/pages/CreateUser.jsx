import React, { useState } from "react";
import { useUserRequest } from "../req_m";
import { useHistory } from "react-router-dom";

const RegisterModal = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const userRequest = useUserRequest();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRequest.post("/auth/register", formData);
      console.log(response.data); // handle response accordingly
      setShowSuccessMessage(true); // Show success message
      setTimeout(() => {
        setShowModal(false); // Close the modal after successful registration
        setShowSuccessMessage(false); // Hide success message after 3 seconds
        history.push("/dashboard"); // Redirect to '/dashboard'
      }, 3000);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-login bg-no-repeat bg-cover">
      {/* Open Modal Button */}
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-xl"
        onClick={() => setShowModal(true)}
      >
        REGISTER
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <button
              className="absolute top-0 right-0 m-4 text-red-500 hover:text-red-700 text-4xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &#x2715;
            </button>
            {showSuccessMessage && (
              <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
                Registration Successful!
              </div>
            )}
            <h2 className="text-2xl mb-4 text-gray-800 text-center font-semibold">
              Register
            </h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Username:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
      {/* End of Modal */}
    </div>
  );
};

export default RegisterModal;
