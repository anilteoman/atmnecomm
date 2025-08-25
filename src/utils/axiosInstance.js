import axios from "axios";

const axiosInstance = axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com",
        
        //baseURL: kendi backend urlm "
    });

export default axiosInstance;