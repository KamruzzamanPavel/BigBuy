import React, { useState } from "react";

const UserCard = ({ user, onUpdate, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    username: user.username,
    email: user.email,
    address: user.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submit logic here
    onUpdate(user._id, userData);
    setShowModal(false); // Close modal after submission
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md w-fit m-3 border-2 border-solid border-slate-500 p-1 text-white">
      {user.isAdmin && (
        <p className="text-2xl font-bold  text-green-600 text-center">Admin</p>
      )}
      <h2 className="text-xl font-semibold">{user.username}</h2>
      <p className="text-xl font-semibold mt-2">Email: {user.email}</p>
      <p className="text-xl font-semibold">Address: {user.address || "N/A"}</p>

      <p className="text-xl font-semibold">
        Created At: {new Date(user.createdAt).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-400">
        Updated At: {new Date(user.updatedAt).toLocaleDateString()}
      </p>

      {/* Update Button */}
      {!user.isAdmin && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-500 text-white m-2 px-4 py-2 rounded-lg mt-4"
        >
          Update
        </button>
      )}

      {/* Update Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className=" bg-gray-800 p-8 rounded-lg">
            <button
              className="absolute top-2 right-2 text-pink-500"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">Update User</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block font-semibold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg text-black font-bold"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg text-black font-bold"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block font-semibold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg text-black font-bold"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Button */}
      {!user.isAdmin && (
        <button
          onClick={() => onDelete(user._id)}
          className="bg-red-500 text-white m-2 px-4 py-2 rounded-lg mt-4"
        >
          Delete
        </button>
      )}

      {/* Success Modal */}
      {/* Add success modal logic here */}
    </div>
  );
};

export default UserCard;
