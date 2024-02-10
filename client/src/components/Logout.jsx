import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetcart } from "../store/cart-action";
import { logout } from "../store/auth-actions";

const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Display the modal for user consent
    setShowModal(true);
  };

  const confirmLogout = () => {
    // Dispatch logout and reset cart actions
    dispatch(logout());
    dispatch(resetcart());
    // Close the modal after logout
    setShowModal(false);
  };

  const cancelLogout = () => {
    // Close the modal without logging out
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleLogout} className="uppercase px-4 py-2">
        Logout
      </button>

      {/* Modal for user consent */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-xl text-center text-gray-800 mb-4">
              Are you sure you want to log out? Logout will reset your cart.
            </p>
            <div className="flex justify-center">
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded mr-4"
              >
                Logout
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
