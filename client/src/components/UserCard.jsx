import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md w-80 mx-auto border-2 border-solid border-slate-500 p-4 text-gray-200">
      <h2 className="text-xl font-semibold">{user.username}</h2>
      <p className="text-sm text-gray-400 mt-2">Email: {user.email}</p>
      <p className="text-sm text-gray-400">Address: {user.address || "N/A"}</p>
      {user.isAdmin && <p className="text-sm text-gray-400">Admin: Yes</p>}
      <p className="text-sm text-gray-400">
        Created At: {new Date(user.createdAt).toLocaleDateString()}
      </p>
      <p className="text-sm text-gray-400">
        Updated At: {new Date(user.updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default UserCard;
