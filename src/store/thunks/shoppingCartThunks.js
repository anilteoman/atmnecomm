import axiosInstance from "../../utils/axiosInstance";
import {setCart, setPayment, setAddress, setPrice} from "../actions/shoppingCartActions";
import { toast } from "react-toastify";

export const addToCart = (product) => async (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const existingItem = cart.find((item) => item.product.id === product.id);

    if(existingItem) {
        const updatedCart = cart.map((item) => item.product.id === product.id ? {...item, count: item.count + 1} : item);
        dispatch(setCart(updatedCart));
        toast.success("The quantity of the product increased successfully.");
    } else {
        const updatedCart = [...cart, {count: 1, checked: false, product}];
        dispatch(setCart(updatedCart));
        toast.success("Product added to the cart successfully!");
    }
};

export const updateProductCount = (productId, newCount) => (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const updatedCart = cart.map((item) => item.product.id === productId ? {...item, count: newCount} : item);
    dispatch(setCart(updatedCart));
};

export const deleteProduct = (productId) => (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const updatedCart = cart.filter(item => item.product.id !== productId);
    dispatch(setCart(updatedCart));
};

export const toggleCheckProduct = (productId) => (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const updatedCart = cart.map((item) => item.product.id === productId ? {...item, checked: !item.checked} : item);
    dispatch(setCart(updatedCart));
};

export const addCartAddress = (address) => (dispatch) => {
    dispatch(setAddress(address));
}

export const addCartCard = (card) => (dispatch) => {
    dispatch(setPayment(card));
}

export const addPrice = (totalPrice) => (dispatch) => {
    dispatch(setPrice(totalPrice));
}

export const confirmOrder = (addressId, cardInfo, products, totalPrice, history) => async (dispatch) => {
    const token = localStorage.getItem("token");
    
    // Check if user is authenticated
    if (!token) {
        toast.error("Please login to place an order.");
        history.push("/login");
        return;
    }
    
    const payload = {
        address_id: addressId,
        order_date: new Date().toISOString(),
        card_no: cardInfo.card_no,
        card_name: cardInfo.name_on_card,
        card_expire_month: cardInfo.expire_month,
        card_expire_year: cardInfo.expire_year,
        price: totalPrice,
        products: products.map(item => ({
            product_id: item.product.id,
            count: item.count,
            detail: item.product.name
        }))
    };

    try {
        // Set authorization header
        axiosInstance.defaults.headers.common["Authorization"] = token;
        
        // Debug logging
        console.log("Order payload:", payload);
        console.log("Authorization token:", token ? "Present" : "Missing");
        
        const response = await axiosInstance.post("/order", payload);
        console.log(response.data);
        toast.success("Order successfull!");
        dispatch(setCart([]));
        dispatch(setPrice(0));
        history.push("/");
    } catch (error) {
        console.error("Order error: ", error);
        
        // Handle different types of errors
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        
        switch (status) {
            case 401:
                toast.error("Session expired. Please login again.");
                localStorage.removeItem("token");
                history.push("/login");
                break;
            case 403:
                toast.error("Access denied. Please check your account permissions.");
                break;
            case 400:
                toast.error(`Invalid order data: ${message}`);
                break;
            case 500:
                toast.error("Server error. Please try again later.");
                break;
            default:
                toast.error(`Order failed: ${message}`);
                break;
        }
    }
}