import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://ecospark.htwo.art/api",
  baseURL: "http://192.168.1.253:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});
