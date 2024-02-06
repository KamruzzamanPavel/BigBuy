import { addProduct, removeProduct, resetCart } from "./cart-slice";
export const resetcart = () => {
  return async (dispatch) => {
    try {
      dispatch(resetCart());
    } catch (err) {
      console.log(err);
    }
  };
};
