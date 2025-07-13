// src/api/axios.js
import axios from "axios";

const apiClient = axios.create({
  // Gunakan environment variable di sini
  baseURL: import.meta.env.VITE_API_URL + '/api',
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

// Interceptor untuk menambahkan Authorization header dari localStorage
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;