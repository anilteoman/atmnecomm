import axiosInstance from "./axiosInstance";

export class AuthService {
  static setAuthToken(token) {
    if (token) {
      localStorage.setItem("token", token);

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  }

  static getToken() {
    return localStorage.getItem("token");
  }

  static isAuthenticated() {
    const token = this.getToken();
    return token !== null && token !== undefined && token !== "";
  }

  static initializeAuth() {
    const token = this.getToken();
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }

  static clearAuth() {
    this.setAuthToken(null);
  }

  static async autoLoginAfterRegister(email, password) {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      const { token, name, email: responseEmail, role_id } = response.data;

      this.setAuthToken(token);

      return {
        success: true,
        userData: { name, email: responseEmail, role_id, token },
      };
    } catch (error) {
      console.error("Auto-login after registration failed:", error);
      return { success: false, error };
    }
  }
}

// Initialize auth when the module loads
AuthService.initializeAuth();
