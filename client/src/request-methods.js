import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "http://localhost:5000/api";

// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmZiNGVlNjZjMDI1OGYzYjFhODE0YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDcxMTk2NDMsImV4cCI6MTcwOTcxMTY0M30.Pq2WYy88k1Tt5oq1hkYbgNB91b_xZTYH7H5BkcQWaco";
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
