import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.API_URL,
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
