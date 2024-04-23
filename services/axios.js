import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://ecospark.htwo.art/api",
  headers: {
    "Content-Type": "application/json",
  },
});
