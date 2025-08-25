export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ORDERS = "SET_ORDERS";

export const setUser = (user, addressList = [], creditCards = []) => ({
    type: SET_USER,
    payload: {user, addressList, creditCards},
});

export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles,
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
});

export const setOrders = (orders) => ({
    type: SET_ORDERS,
    payload: orders,
});