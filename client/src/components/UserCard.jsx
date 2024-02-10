import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md w-80 m-3 border-2 border-solid border-slate-500 p-1 text-white">
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
    </div>
  );
};

export default UserCard;
