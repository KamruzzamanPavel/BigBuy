import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmE3MWY0Mjk5YTE3NGNjYmJjMzIyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjg5MTYwOCwiZXhwIjoxNzA5NDgzNjA4fQ.p3qtAsafKCkf9GJY2eU3ssB3qlWZikPc8JADUTF5Q2o";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
