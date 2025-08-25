export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_PRICE = "SET_PRICE";

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart,
});

export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment,
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address,
});

export const setPrice = (price) => ({
    type: SET_PRICE,
    payload: price,
});