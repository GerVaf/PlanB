import axios from "axios";
import Cookies from "js-cookie";

Cookies.set(
  "token",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2luZm8iOnsiaWQiOiI2NTEzYTE2OTAwNjAxMGRjNWI0MzcyNzciLCJ1c2VybmFtZSI6IlRoYW50IFppbiIsInJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2OTcxNzA2MDMsImV4cCI6MTY5NzI1NzAwM30.oHJLrDs08vtYREiYTRr3s1AkwQGJaOYJfFyAgKQKVFE"
);

const token = Cookies.get("token");
// console.log(token)

const baseUrl = "https://api.opaqueindustries.news";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multiple/form-data",
    Authorization: `Bearer ${token}`,
  },
});

export const get = (url) => {
  return axiosInstance.get(url);
};

export const post = (url, data) => {
  return axiosInstance.post(url, data);
};

export const isPublish = (url, id) => {
  return axiosInstance.post(url, { data: { id } });
};

export const patch = (url, data) => {
  return axiosInstance.patch(url, data);
};
