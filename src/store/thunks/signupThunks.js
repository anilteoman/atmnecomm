import axiosInstance from "../../utils/axiosInstance";
import { setUser } from "../actions/clientActions";
import { AuthService } from "../../utils/authService";
import { toast } from "react-toastify";

/**
 * Registers a new user and automatically logs them in if successful
 * @param {Object} userData - User registration data
 * @returns {Object} Result object with success status and user data
 */
export const signupUser = (userData) => async (dispatch) => {
  try {
    await axiosInstance.post("/signup", userData);
    
    const loginResult = await AuthService.autoLoginAfterRegister(
      userData.email,
      userData.password
    );
    
    if (loginResult.success) {
      const { name, email, role_id } = loginResult.userData;
      dispatch(setUser({ name, email, role_id }, [], []));
      
      toast.success(`Welcome ${name}! You are now logged in.`);
      
      return {
        success: true,
        userData: loginResult.userData,
        autoLoggedIn: true
      };
    } else {
      console.warn("Auto-login failed after registration:", loginResult.error);
      toast.info("Registration successful! Please login with your credentials.");
      
      return {
        success: true,
        autoLoggedIn: false
      };
    }
    
  } catch (error) {
    console.error("Registration failed:", error);
    
    const status = error.response?.status;
    const serverMessage = error.response?.data?.message;
    
    let userMessage;
    switch (status) {
      case 409:
        userMessage = "User with this email already exists.";
        break;
      case 400:
        userMessage = serverMessage || "Invalid registration data.";
        break;
      case 500:
        userMessage = "Server error. Please try again later.";
        break;
      default:
        userMessage = serverMessage || "Registration failed. Please try again.";
    }
    
    toast.error(userMessage);
    
    return {
      success: false,
      error: userMessage
    };
  }
};
