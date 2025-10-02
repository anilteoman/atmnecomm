import {Link} from "react-router-dom"
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopCategory from "./ShopCategory";
import { getCategories } from "../../store/thunks/productThunks";

export default function ShopCategories() {
    const dispatch = useDispatch();
    const { categories, fetchState } = useSelector((state) => state.product);
    
    // Fetch categories from backend when component mounts
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    
    // Use backend categories data and sort by rating (highest first) - show top 5
    const topCategories = categories && Array.isArray(categories) ? 
        [...categories]
            .filter(category => category && category.id) // Filter out invalid categories
            .sort((a, b) => (b.rating || 0) - (a.rating || 0)) // Sort by rating with fallback
            .slice(0, 5) : 
        [];
    
    return (
        <section className="bg-[#FAFAFA] py-6">
            <div className="title-links flex flex-col items-center gap-7 mb-5 md:mb-2 md:flex-row md:justify-between md:py-6 md:px-[13rem]">
                <h3 className="text-2xl leading-8 font-bold text-[#252B42]">Shop</h3>
                <div className="links flex gap-[0.938rem] py-2.5 text-sm font-bold leading-6">
                    <Link to="/" className="text-[#252B42]">Home</Link>
                    <ChevronRight color="#BDBDBD"/>
                    <Link to="/shop" className="text-[#737373]">Shop</Link>
                </div>
            </div>
            <div className="categories flex flex-col md:flex-row gap-3.5 md:gap-[1.5rem] md:pb-12 md:px-44 md:justify-center">
                {fetchState === "FETCHING" ? (
                    <div className="flex justify-center items-center py-10 w-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                        <span className="ml-4 text-lg text-gray-600">Loading categories...</span>
                    </div>
                ) : topCategories && topCategories.length > 0 ? (
                    topCategories.map((category) => (
                        <ShopCategory key={category.id} category={category}/>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <h4 className="text-lg font-bold text-gray-600">No categories available</h4>
                        <p className="text-gray-500">
                            {fetchState === "FAILED" ? 
                                "Failed to load categories. Please try again." : 
                                "No categories found."
                            }
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}