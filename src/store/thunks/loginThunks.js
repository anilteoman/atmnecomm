import axiosInstance from "../../utils/axiosInstance";
import {setUser} from "../actions/clientActions";
import { AuthService } from "../../utils/authService";
import { toast } from "react-toastify";

export const loginUser = ({email, password, rememberMe}) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post("/login", {email, password});
            const {token, name, email: responseEmail, role_id} = response.data;
            
            // Always set authentication token (not just when rememberMe is checked)
            AuthService.setAuthToken(token);
            
            // Update user state in Redux
            dispatch(setUser({name, email: responseEmail, role_id}, [], []));
            
            toast.success(`Welcome back, ${name}!`);
            
            return {
                success: true,
                userData: { name, email: responseEmail, role_id, token }
            };
        } catch (error) {
            console.error("Login error:", error);
            const message = error.response?.data?.message || "Login failed";
            toast.error(message);
            return {
                success: false,
                error: message
            };
        }
    };
};

export const logoutUser = () => (dispatch) => {
    // Clear authentication using AuthService
    AuthService.clearAuth();
    
    // Clear user state in Redux
    dispatch(setUser(null, [], []));
    
    toast.success("You have been logged out successfully.");
};
