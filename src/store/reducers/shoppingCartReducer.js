import { SET_CART, SET_PAYMENT, SET_ADDRESS, SET_PRICE } from "../actions/shoppingCartActions";

const initialState = {
    cart: [],
    payment: null,
    address: null,
    price: 0,
};

function shoppingCartReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.payload || [],
            };
        
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload,
            };

        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };

        case SET_PRICE:
            return {
                ...state,
                price: action.payload,
            };

        default:
            return state;
    }
}

export {shoppingCartReducer};