import axios from "axios";

const axiosInstance = axios.create({
        baseURL: "https://ecommerce-backend-raub.onrender.com",
        
        //baseURL: kendi backend urlm "
    });

export default axiosInstance;