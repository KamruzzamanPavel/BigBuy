import React, { useState } from "react";
import { useUserRequest } from "../req_m";
import { Link, useHistory } from "react-router-dom";

const ProductUpload = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const history = useHistory();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    size: "",
    color: "",
    price: "",
    inStock: true,
  });

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
      const response = await userRequest.post("/products", formData);
      console.log(response.data); // handle response accordingly
      setShowSuccessMessage(true); // Show success message
      setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message after 3 seconds
        history.push("/dashboard"); // Redirect to '/dashboard'
      }, 3000);
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen bg-login bg-no-repeat bg-cover">
      {/* Modal */}
      {showModal && (
        <div className="fixed p-8 top-0 left-0 w-full h-full flex  justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-screen h-full overflow-scroll">
            <button
              className="bg-transparent absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800
               hover:bg-red-500 text-4xl font-bold transition duration-300 rounded-full p-2"
              onClick={() => setShowModal(false)}
            >
              &#x2715;
            </button>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="fixed top-0 left-0 w-full flex justify-center items-center h-screen bg-gray-900 bg-opacity-50">
                <div className="bg-slate-800 shadow-md rounded p-8">
                  <h2 className="text-3xl text-green-500 text-center font-bold mb-4">
                    Upload Successfull!
                  </h2>
                </div>
              </div>
            )}
            {/* End of Success Message */}
            <h2 className="text-2xl mb-4 text-gray-800 text-center font-semibold">
              Upload Product
            </h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Title:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter the title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Description:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter the description"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Image URL:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Enter the image URL"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Category:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Enter the category"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Size:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="Enter the sizes (comma separated)"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Color:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Enter the colors (comma separated)"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Price:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter the price"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  In Stock:
                </label>
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      inStock: e.target.checked,
                    }))
                  }
                />
              </div>
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      )}
      {/* End of Modal */}

      {/* Open Modal Button */}
      <button
        className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-xl"
        onClick={() => setShowModal(true)}
      >
        WANT TO UPLOAD PRODUCT ?
      </button>

      <Link
        to="/dashboard"
        className="bg-gray-800 ml-4 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-xl"
      >
        GO BACK TO DASHBOARD
      </Link>
    </div>
  );
};

export default ProductUpload;
