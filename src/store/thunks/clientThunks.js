import axiosInstance from "../../utils/axiosInstance";
import { setRoles, setUser, setOrders } from "../actions/clientActions";
import { toast } from "react-toastify";

export const getRoles = () => async (dispatch, getState) => {
    const {roles} = getState().client;

    if(roles.length > 0)
        return roles;

    try {
        const response = await axiosInstance.get("/roles");
        const fetchedRoles = response.data;
        dispatch(setRoles(fetchedRoles));
        return fetchedRoles;

    } catch (error) {
        console.error("Failed to get roles:", error);
    }
};

export const getAddress = () => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;

    if(addressList.length > 0)
        return addressList;

    try {
        // AuthService automatically handles the Authorization header
        const response = await axiosInstance.get("/user/address");
        const data = response.data;
        dispatch(setUser(user, data, creditCards));
    } catch (error) {
        console.error("Address fetch error: ", error);
        console.error("Error response:", error.response?.data);
        
        if (error.response?.status === 500) {
            toast.error("Server error occurred while fetching addresses.");
        } else if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("Failed to fetch addresses.");
        }
    }
};

export const addAddress = (formData) => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    try {
        // Set authorization header
        if (token) {
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        const response = await axiosInstance.post("/user/address", formData);
        console.log("Add address response:", response.data);
        //const newAddress = response.data[0];
        const newAddress = response.data;
        dispatch(setUser(user, [...addressList, newAddress], creditCards));
        toast.success("Address added successfully!");
    } catch (error) {
        console.error("Add new address error: ", error);
        console.error("Request payload:", formData);
        console.error("Error response:", error.response?.data);
        
        if (error.response?.status === 500) {
            toast.error("Server error occurred while adding address. Please try again.");
        } else if (error.response?.data?.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("Failed to add address. Please check your input and try again.");
        }
    }
}

export const editAddress = (formData) => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    try {
        // Set authorization header
        if (token) {
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        const response = await axiosInstance.put("/user/address", formData);
        //const updatedAddress = response.data[0];
        const updatedAddress = response.data;
        const newList = addressList.map(address => address.id === updatedAddress.id ? updatedAddress : address);
        dispatch(setUser(user, newList, creditCards));
    } catch (error) {
        console.error("Edit address error: ", error);
    }
}

export const deleteAddress = (addressId) => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    try {
         axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axiosInstance.delete(`/user/address/${addressId}`);
        const message = response.data.message;
        console.log(message);
        toast.success(message);

        const updatedList = addressList.filter(address => address.id !== addressId);
        dispatch(setUser(user, updatedList, creditCards));
    } catch (error) {
        console.error("Delete address error: ", error);
        toast.error("Address delete failed!");
    }
}

export const getCards = () => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    if(creditCards.length > 0)
        return creditCards;

    try {
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axiosInstance.get("/user/card");
        const data = response.data;
        dispatch(setUser(user, addressList, data));
    } catch (error) {
        console.error("Credit Card fetch error: ", error);
    }
}

export const addCard = (formData) => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    try {
        // Set authorization header
        if (token) {
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        const response = await axiosInstance.post("/user/card", formData);
        //const newCard = response.data[0];
        const newCard = response.data;
        dispatch(setUser(user, addressList, [...creditCards, newCard]));
    } catch (error) {
        const status = error.response?.status;
        if(status === 409) {
            toast.error("Card with same card no already saved.");
        }
        console.error("Add new card error: ", error);
    }
}

export const editCard = (formData) => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    try {
        // Set authorization header
        if (token) {
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        const response = await axiosInstance.put("/user/card", formData);
        const updatedCard = response.data[0];
        const newList = creditCards.map(card => card.id === updatedCard.id ? updatedCard : card);
        dispatch(setUser(user, addressList, newList));
    } catch (error) {
        console.error("Edit card error: ", error);
    }
}

export const deleteCard = (cardId) => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    try {
         axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axiosInstance.delete(`/user/card/${cardId}`);
        const message = response.data.message;
        toast.success(message);

        const updatedList = creditCards.filter(card => card.id !== cardId);
        dispatch(setUser(user, addressList, updatedList));
    } catch (error) {
        console.error("Delete card error: ", error);
        toast.error("Card delete failed!");
    }
}

export const getOrders = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axiosInstance.get("/order");
        dispatch(setOrders(response.data));
    } catch (error) {
        console.error("Order history fetch failed: ", error);
    }
}