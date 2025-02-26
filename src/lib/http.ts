import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "x-api-key": process.env.API_KEY,
  },
});
