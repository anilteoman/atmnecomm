import {setUser} from "../actions/clientActions";
import axiosInstance from "../../utils/axiosInstance";
import { AuthService } from "../../utils/authService";

export const checkToken = () => async (dispatch) => {
    const token = AuthService.getToken();

    if(!token) {
        console.log("No token found, user not authenticated");
        return;
    }

    try {
        // Token is already set in axios headers by AuthService.initializeAuth()
        const response = await axiosInstance.get("/verify");
        const {name, email, role_id, token: responseToken} = response.data;

        // Update user state
        dispatch(setUser({name, email, role_id}, [], []));
        
        // Update token if server provides a new one
        if (responseToken && responseToken !== token) {
            AuthService.setAuthToken(responseToken);
        }
        
        console.log("Token verification successful for user:", name);
    } catch (error) {
        console.error("Authorization failed: ", error);
        // Clear invalid authentication
        AuthService.clearAuth();
        dispatch(setUser(null, [], []));
    }
};
