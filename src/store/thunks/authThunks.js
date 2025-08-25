import {setUser} from "../actions/clientActions";
import axiosInstance from "../../utils/axiosInstance";

export const checkToken = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    if(!token)
        return;

    try {
        axiosInstance.defaults.headers.common["Authorization"] = token;
        const response = await axiosInstance.get("/verify");
        const {name, email, role_id, token: responseToken} = response.data;

        dispatch(setUser({name, email, role_id}, [], []));
        localStorage.setItem("token", responseToken);
        axiosInstance.defaults.headers.common["Authorization"] = responseToken;
    } catch (error) {
        console.error("Authorization failed: ", error);
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers.common["Authorization"];
    }

}