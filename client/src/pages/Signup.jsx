import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { publicRequest } from "../request-methods";
import { login } from "../store/auth-actions";
import { Link, Redirect } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSignupFormOpen, setIsSignupFormOpen] = useState(true);
  const [redirectHome, setRedirectHome] = useState(false);

  const dispatch = useDispatch();

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
      const response = await publicRequest.post("/auth/register", formData);
      console.log(response.data); // handle response accordingly
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleModalClose = () => {
    setIsSuccessModalOpen(false);
    // Automatically login the user after modal is closed
    dispatch(
      login({ username: formData.username, password: formData.password })
    );
    setRedirectHome(true);
  };

  const toggleSignupForm = () => {
    setIsSignupFormOpen(!isSignupFormOpen);
    setRedirectHome(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-login bg-no-repeat bg-cover">
      {redirectHome && <Redirect to="/" />}
      {isSignupFormOpen && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="flex justify-end">
            <button
              onClick={toggleSignupForm}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              x
            </button>
          </div>
          <h2 className="text-2xl mb-4 text-gray-800 text-center font-semibold">
            Register
          </h2>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Address:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                autoComplete="off"
              />
            </div>
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <Link
              to="/login"
              className="block text-center text-sm mt-4 text-gray-600 hover:text-gray-800"
            >
              Already have an account
            </Link>
          </form>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-2xl text-center text-green-500 mb-4">
              Registration Successful!
            </p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
              onClick={handleModalClose}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
