import axios from "axios";
import { isAuthenticated, getToken } from "./auth";
const api = axios.create({
  baseURL: "http://localhost:3333/"
});

api.interceptors.request.use(config => {
  if (isAuthenticated()) {
    config.headers.Authorization = `Beare ${getToken()}`;
    return config;
  }
});

export default api;
