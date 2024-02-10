import React, { useState, useEffect } from "react";

const Product = ({ product, onUpdate, onDelete }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    title: product.title,
    description: product.description,
    image: product.image,
    category: product.category,
    price: product.price,
  });

  const handleUpdate = () => {
    onUpdate(product._id, updatedData);
    setShowUpdateModal(false);
  };

  useEffect(() => {
    // Your effect cleanup logic here
  }, []);

  return (
    <div className="bg-slate-700 text-white  p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-4"
      />
      <div className="flex ">
        <h2 className="ml-1 text-lg font-semibold">{product.title} </h2>
        <h2 className="text-xl font-bold mx-4 text-green-500">
          {product.price} $
        </h2>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setShowUpdateModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 flex m-4 items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-black text white p-8 rounded-lg shadow-md m-4">
            <h2 className="text-lg font-semibold mb-4">Update Product</h2>
            <form>
              <label htmlFor="title" className="block mb-2">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={updatedData.title}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, title: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md mb-4"
              />
              <label htmlFor="title" className="block mb-2">
                Description:
              </label>
              <input
                type="text"
                id="description"
                value={updatedData.description}
                onChange={(e) =>
                  setUpdatedData({
                    ...updatedData,
                    description: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-md mb-4"
              />
              <label htmlFor="title" className="block mb-2">
                Image:
              </label>
              <input
                type="text"
                id="title"
                value={updatedData.image}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, image: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md mb-4"
              />
              <label htmlFor="title" className="block mb-2">
                Price:
              </label>
              <input
                type="text"
                id="title"
                value={updatedData.price}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, price: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md mb-4"
              />

              {/* Add input fields for description, image_url, category, and price similarly */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
