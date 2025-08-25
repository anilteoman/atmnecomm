import axiosInstance from "../../utils/axiosInstance";
import { setCategories, setProductList, setTotal, setFetchState, setProductDetail, setBestSellers } from "../actions/productActions";

export const getCategories = () => async (dispatch, getState) => {
    const {categories} = getState().product;

    if(categories.length > 0)
        return categories;

    try {
        const response = await axiosInstance.get("/categories");
        dispatch(setCategories(response.data));
    } catch (error) {
        console.error("Category fetch failed: ", error);
    }
};

export const getProducts = ({limit, offset}) => async (dispatch, getState) => {
    const {fetchState} = getState().product;

    if(fetchState == "FETCHING") {
        return;
    }

    try {
        dispatch(setFetchState("FETCHING"));

        const response = await axiosInstance.get(`/products?limit=${limit}&offset=${offset}`);
        const {products, total} = response.data;
        dispatch(setTotal(total));
        dispatch(setProductList(products));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        console.error("Product fetch failed: ", error);
        dispatch(setFetchState("FAILED"));
    }
};

export const getProductsByCategory = ({categoryId, limit, offset}) => async (dispatch) => {
    try {
        dispatch(setFetchState("FETCHING"));
        const id = parseInt(categoryId);
        const response = await axiosInstance.get(`/products?category=${id}&limit=${limit}&offset=${offset}`);
        const {products, total} = response.data;

        dispatch(setTotal(total));
        dispatch(setProductList(products));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        console.error("Fetch by category failed: ", error);
        dispatch(setFetchState("FAILED"));
    }
};

export const getFilteredProducts = ({categoryId, filter, sort, limit, offset}) => async (dispatch) => {
    try {
        dispatch(setFetchState("FETCHING"));
        const request = [categoryId && `category=${categoryId}`,
            filter && `filter=${filter}`,
            sort && `sort=${sort}`,
            `limit=${limit}`,
            `offset=${offset}`].join("&");
        const response = await axiosInstance.get(`/products?${request}`);
        const {products, total} = response.data;

        dispatch(setTotal(total));
        dispatch(setProductList(products));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        console.error("Filter fetch failed: ", error);
        dispatch(setFetchState("FAILED"));
    }
};

export const getProductDetail = (productId) => async (dispatch) => {
    try {
        dispatch(setFetchState("FETCHING"));
        const response = await axiosInstance.get(`/products/${productId}`);
        dispatch(setProductDetail(response.data));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        console.error("Product detail fetch failed: ", error);
        dispatch(setFetchState("FAILED"));
    }
};

export const getBestSellers = () => async (dispatch) => {
    try {
        dispatch(setFetchState("FETCHING"));
        const response = await axiosInstance.get("/products/bestsellers");
        console.log(response.data);
        dispatch(setBestSellers(response.data));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        console.error("Bestseller fetch failed: ", error);
        dispatch(setFetchState("FAILED"));
    }
}