import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "http://localhost:5000/api";

const user = () => useSelector((store) => store.auth.currentUser);
var TOKEN = "";

if (user) {
  TOKEN = user.token;
  console.log(TOKEN);
}
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
