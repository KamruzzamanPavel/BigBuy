import { useDispatch, useSelector } from "react-redux";

import { logout } from "../store/auth-actions";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(logout());
      }}
      className="y-5 uppercase px-4 py-2"
    >
      Logout
    </button>
  );
};

export default Logout;
