import React from "react";

const SingleUser = ({ user }) => {
  return (
    <div className="max-w-screen-lg w-full mx-4 bg-gray-800 rounded-lg p-8 shadow-lg text-center text-white">
      <h2 className="text-3xl font-semibold mb-4">{user.username}</h2>
      <p className="text-gray-400 text-sm">Email: {user.email}</p>
      <p className="text-gray-400 text-sm">Address: {user.address || "N/A"}</p>
      {user.isAdmin && <p className="text-gray-400 text-sm">Admin: Yes</p>}
      <p className="text-gray-400 text-sm">
        Created At: {new Date(user.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-400 text-sm">
        Updated At: {new Date(user.updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default SingleUser;
