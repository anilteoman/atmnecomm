import axiosInstance from "./axiosInstance";

// Authentication utility service
export class AuthService {
  // Set authentication token
  static setAuthToken(token) {
    if (token) {
      // Store in localStorage
      localStorage.setItem("token", token);
      // Set in axios headers for all requests
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      // Remove token
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  }

  // Get stored token
  static getToken() {
    return localStorage.getItem("token");
  }

  // Check if user is authenticated
  static isAuthenticated() {
    const token = this.getToken();
    return token !== null && token !== undefined && token !== "";
  }

  // Initialize auth state (call on app start)
  static initializeAuth() {
    const token = this.getToken();
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }

  // Clear authentication
  static clearAuth() {
    this.setAuthToken(null);
  }

  // Auto-login after successful registration
  static async autoLoginAfterRegister(email, password) {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      const { token, name, email: responseEmail, role_id } = response.data;
      
      // Set authentication
      this.setAuthToken(token);
      
      return {
        success: true,
        userData: { name, email: responseEmail, role_id, token }
      };
    } catch (error) {
      console.error("Auto-login after registration failed:", error);
      return { success: false, error };
    }
  }
}

// Initialize auth when the module loads
AuthService.initializeAuth();