import axios from "axios";
import { useSelector } from "react-redux";

// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://bigbuy.onrender.com/api";
export const useUserRequest = () => {
  const user = useSelector((store) => store.auth.currentUser);
  const TOKEN = user ? user.token : null;

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    },
  });
};
