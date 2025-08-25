import axiosInstance from "../../utils/axiosInstance";
import {setUser} from "../actions/clientActions";

export const loginUser = ({email, password, rememberMe}) => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post("/login", {email, password});
            const {token, name, email: responseEmail, role_id} = response.data;
            dispatch(setUser({name, responseEmail, role_id}, [], []));

            if(rememberMe) {
                localStorage.setItem("token", token);
            }
            return {
                success: true
            };
        } catch (error) {
            console.error("Login error:", error);
            return {
                success: false
            };
        }
    };
};

export const logoutUser = () => (dispatch) => {
    dispatch(setUser(null));
    localStorage.removeItem("token");
    delete axiosInstance.defaults.headers.common["Authorization"];
};