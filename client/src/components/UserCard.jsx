import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg aspect-w-1 aspect-h-golden">
      <h2 className="text-xl font-semibold text-gray-200">{user.username}</h2>
      <p className="text-gray-400 text-sm mt-2">Email: {user.email}</p>
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

export default UserCard;
