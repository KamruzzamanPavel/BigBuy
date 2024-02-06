import { loginStart, loginSuccess, loginFailure, logOut } from "./auth-slice";
import { publicRequest } from "../request-methods";

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(response.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(logOut());
    } catch (err) {
      console.log(err);
    }
  };
};
