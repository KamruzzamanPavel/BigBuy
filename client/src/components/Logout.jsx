import { useDispatch } from "react-redux";
import { resetcart } from "../store/cart-action";
import { logout } from "../store/auth-actions";
import { useHistory } from "react-router-dom";
const Logout = () => {
  const dispatch = useDispatch(); // Access the dispatch function
  const history = useHistory();
  const handleLogout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to log out? Logout will reset your cart."
    );
    // Display confirmation dialog
    if (confirmed) {
      dispatch(logout()); // Dispatch the logout action if user confirms
      history.push("/");
      dispatch(resetcart()); // Dispatch the resetcart action if user confirms
    }
  };

  return (
    <button onClick={handleLogout} className="y-5 uppercase px-4 py-2">
      Logout
    </button>
  );
};

export default Logout;
