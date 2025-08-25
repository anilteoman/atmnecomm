export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_PAGE = "SET_PAGE";
export const CLEAR_PRODUCT_LIST = "CLEAR_PRODUCT_LIST";
export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";
export const SET_BEST_SELLERS = "SET_BEST_SELLERS";

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList,
});

export const setBestSellers = (bestSellers) => ({
    type: SET_BEST_SELLERS,
    payload: bestSellers,
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState,
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
});

export const setOffset = () => ({
    type: SET_OFFSET,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
});

export const clearProductList = () => ({
    type: CLEAR_PRODUCT_LIST,
});

export const setProductDetail = (productDetail) => ({
    type: SET_PRODUCT_DETAIL,
    payload: productDetail,
});