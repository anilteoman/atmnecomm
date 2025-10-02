import axiosInstance from "../../utils/axiosInstance";
import { setUser } from "../actions/clientActions";
import { AuthService } from "../../utils/authService";
import { toast } from "react-toastify";

export const signupUser = (userData) => async (dispatch) => {
  try {
    // Register the user
    const response = await axiosInstance.post("/signup", userData);
    
    toast.success(response.data.message || "Registration successful!");
    
    // Auto-login after successful registration
    const loginResult = await AuthService.autoLoginAfterRegister(
      userData.email,
      userData.password
    );
    
    if (loginResult.success) {
      // Update Redux state with user data
      const { name, email, role_id } = loginResult.userData;
      dispatch(setUser({ name, email, role_id }, [], []));
      
      toast.success(`Welcome ${name}! You are now logged in.`);
      
      return {
        success: true,
        userData: loginResult.userData,
        autoLoggedIn: true
      };
    } else {
      // Registration succeeded but auto-login failed
      console.warn("Registration successful but auto-login failed:", loginResult.error);
      toast.info("Registration successful! Please login with your credentials.");
      
      return {
        success: true,
        autoLoggedIn: false,
        message: "Registration successful! Please login."
      };
    }
    
  } catch (error) {
    console.error("Registration error:", error);
    
    const status = error.response?.status;
    const message = error.response?.data?.message || "Registration failed";
    
    switch (status) {
      case 409:
        toast.error("User with this email already exists.");
        break;
      case 400:
        toast.error(`Invalid registration data: ${message}`);
        break;
      default:
        toast.error(`Registration failed: ${message}`);
        break;
    }
    
    return {
      success: false,
      error: message
    };
  }
};