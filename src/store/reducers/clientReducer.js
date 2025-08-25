import { SET_USER, SET_ROLES, SET_THEME, SET_LANGUAGE,SET_ORDERS } from "../actions/clientActions";

const initialState = {
    user: null,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "en",
    orders: [],
};

function clientReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload.user,
                addressList: action.payload.addressList || [],
                creditCards: action.payload.creditCards || [],
            };

        case SET_ROLES:
            return {
                ...state,
                roles: action.payload,
            };

        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };

        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };

        case SET_ORDERS:
            return {
                ...state,
                orders: action.payload || [],
            };

        default:
            return state;
    }
}

export {clientReducer};