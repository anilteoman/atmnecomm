import axios from "axios";

const RENDER_BACKEND_URL = "https://ecommerce-backend-raub.onrender.com";

const BASE_API_PATH = "/ecommerce";

const axiosInstance = axios.create({
  baseURL: `${RENDER_BACKEND_URL}${BASE_API_PATH}`,

  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
