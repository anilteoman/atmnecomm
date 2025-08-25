import { SET_CATEGORIES, SET_PRODUCT_LIST, SET_TOTAL, SET_FETCH_STATE, SET_LIMIT, SET_OFFSET, SET_FILTER, SET_PAGE, CLEAR_PRODUCT_LIST, SET_PRODUCT_DETAIL, SET_BEST_SELLERS } from "../actions/productActions";

const initialState = {
    categories: [],
    productList: [],
    bestSellers: [],
    productDetail: null,
    total: 0,
    limit: 24,
    offset: 0,
    page: 1,
    filter: "",
    fetchState: "NOT_FETCHED",
};

function productReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload || [],
            };

        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload || [],
            };

        case SET_BEST_SELLERS:
            return {
                ...state,
                bestSellers: action.payload || [],
            };

        case SET_TOTAL:
            return {
                ...state,
                total: action.payload,
            };

        case SET_LIMIT:
            return {
                ...state,
                limit: action.payload,
            };

        case SET_OFFSET:
            return {
                ...state,
                offset: (state.page - 1) * state.limit,
            };

        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };

        case SET_FETCH_STATE:
            return {
                ...state,
                fetchState: action.payload,
            };

        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };

        case CLEAR_PRODUCT_LIST:
            return {
                ...state,
                productList: [],
            };

        case SET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload,
            };

        default:
            return state;
    }
}

export {productReducer};