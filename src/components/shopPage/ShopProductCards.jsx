import { Grip, SlidersHorizontal } from "lucide-react"
import ShopProductCard from "./ShopProductCard"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import {setPage} from "../../store/actions/productActions"
import { useDispatch } from "react-redux";
import { createProductUrl } from "../../utils/createProductUrl";


export default function ShopProductCards({categoryId, filters, setFilters, handleFilter}) {
    
    const dispatch = useDispatch();

    useEffect(() => {
        handleCategoryChange(categoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId]);

    const {productList, fetchState} = useSelector((state) => state.product);

    const categories = useSelector((state) => state.product.categories);

    const handleCategoryChange = (id) => {
        setFilters((prev) => ({...prev, categoryId: id}));
        dispatch(setPage(1));
    };

    const handleSortChange = (e) => {
        setFilters((prev) => ({...prev, sort: e.target.value}));
        dispatch(setPage(1));
    };

    const handleFilterChange = (e) => {
        setFilters((prev) => ({...prev, filter: e.target.value}));
    };



    return (
        <section>
            <div className="filters flex flex-col md:flex-row md:justify-between py-6 md:px-[14.5rem] gap-6 items-center">
                <div className="info">
                    <h6 className="text-[#737373] text-sm font-bold leading-6">Showing 24 results</h6>
                </div>
                <div className="view-buttons flex gap-[0.938rem] px-[0.063rem] items-center">
                    <h6 className="text-sm leading-6 font-bold text-[#737373]">Views:</h6>
                    <div className="dots border rounded-[0.313rem] border-[#ECECEC] p-[0.938rem] w-[2.875rem] h-[2.875rem] flex items-center">
                        <Grip/>
                    </div>
                    <div className="horizontal border rounded-[0.313rem] border-[#ECECEC] p-[0.938rem] w-[2.875rem] h-[2.875rem] flex items-center">
                        <SlidersHorizontal />
                    </div>
                </div>
                <div className="filter-options flex gap-[0.938rem]">
                    <input type="text" placeholder="Filter" value={filters.filter} onChange={handleFilterChange} className="h-[3.125rem] w-[8.813rem] bg-[#F9F9F9] text-[#737373] text-sm leading-7 rounded-[0.313rem] border border-[#DDDDDD] pl-5"/>
                    <select className="h-[3.125rem] w-[8.813rem] bg-[#F9F9F9] text-[#737373] text-sm leading-7 rounded-[0.313rem] border border-[#DDDDDD] text-center" value={filters.sort} onChange={handleSortChange}>
                        <option value={"price:asc"}>Price: Ascending</option>
                        <option value={"price:desc"}>Price: Descending</option>
                        <option value={"rating:asc"}>Rating: Ascending</option>
                        <option value={"rating:desc"}>Rating: Descending</option>
                    </select>
                    <button className="bg-[#23A6F0] text-white text-center py-2.5 px-5 rounded-[0.313rem] hover:cursor-pointer" onClick={handleFilter}>Filter</button>
                </div>
            </div>
            <div className="shop-product-card-container flex flex-col md:gap-12 md:py-12 items-center">
                {fetchState == "FETCHING" ? (
                    <div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
                    </div>
                ) : (<div className="shop-product-cards grid grid-cols-1 md:grid-cols-4 gap-[1.875rem] md:flex-row md:gap-[1.875rem]">
                    {productList.map((product) => (
                        <Link to={createProductUrl(product, categories)}>
                            <ShopProductCard key={product.id} product={product}/>
                        </Link>
                    ))}
                </div>)}
            </div>
        </section>
    )
}