import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBestSellers } from "../../store/thunks/productThunks";

export default function ProductCards() {
    const dispatch = useDispatch();
    const bestSellers = useSelector((state) => state.product?.bestSellers || []);
    const fetchState = useSelector((state) => state.product?.fetchState || "NOT_FETCHED");
    
    // Debug logging
    console.log("ProductCards - bestSellers:", bestSellers, "Type:", typeof bestSellers, "IsArray:", Array.isArray(bestSellers));
    console.log("ProductCards - fetchState:", fetchState);
    
    // Ensure bestSellers is always an array
    const bestSellersArray = Array.isArray(bestSellers) ? bestSellers : [];
    
    useEffect(() => {
        // Fetch bestsellers when component mounts
        if (bestSellersArray.length === 0 && fetchState !== "FETCHING") {
            console.log("Dispatching getBestSellers...");
            dispatch(getBestSellers());
        }
    }, [dispatch, bestSellersArray.length, fetchState]);
    
    // Get first 10 products for display
    const featuredProducts = bestSellersArray.slice(0, 10);
    
    // Show loading state
    if (fetchState === "FETCHING") {
        return (
            <section className="product-cards flex flex-col items-center mt-20">
                <div className="titles flex flex-col items-center gap-2.5">
                    <h4 className="title-desktop hidden md:block text-xl font-normal leading-[1.875rem] text-[#737373]">Featured Products</h4>
                    <h3 className="title text-2xl font-bold leading-8 text-[#252B42] w-[14.938rem] md:w-full text-center">BESTSELLER PRODUCTS</h3>
                    <span className="subtitle text-sm font-normal leading-5 text-[#737373] w-[16.313rem] text-center md:hidden">Problems trying to resolve the<br/> conflict between</span>
                    <span className="subtitle text-sm font-normal leading-5 text-[#737373] text-center hidden md:block">Problems trying to resolve the conflict between</span>
                </div>
                <div className="cards-container flex flex-col items-center mt-12">
                    <div className="loading-spinner text-[#23A6F0] text-xl font-bold p-8">
                        Loading bestsellers...
                    </div>
                </div>
            </section>
        );
    }
    
    // Show error state
    if (fetchState === "FAILED") {
        return (
            <section className="product-cards flex flex-col items-center mt-20">
                <div className="titles flex flex-col items-center gap-2.5">
                    <h4 className="title-desktop hidden md:block text-xl font-normal leading-[1.875rem] text-[#737373]">Featured Products</h4>
                    <h3 className="title text-2xl font-bold leading-8 text-[#252B42] w-[14.938rem] md:w-full text-center">BESTSELLER PRODUCTS</h3>
                    <span className="subtitle text-sm font-normal leading-5 text-[#737373] w-[16.313rem] text-center md:hidden">Problems trying to resolve the<br/> conflict between</span>
                    <span className="subtitle text-sm font-normal leading-5 text-[#737373] text-center hidden md:block">Problems trying to resolve the conflict between</span>
                </div>
                <div className="cards-container flex flex-col items-center mt-12">
                    <div className="error-message text-red-500 text-lg font-bold p-8">
                        Failed to load bestsellers. Please try again later.
                        <button 
                            onClick={() => dispatch(getBestSellers())} 
                            className="block mt-4 text-[#23A6F0] text-sm font-bold leading-[1.375rem] border border-[#23A6F0] rounded-[0.313rem] px-4 py-2 hover:cursor-pointer"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="product-cards flex flex-col items-center mt-20">
            <div className="titles flex flex-col items-center gap-2.5">
                <h4 className="title-desktop hidden md:block text-xl font-normal leading-[1.875rem] text-[#737373]">Featured Products</h4>
                <h3 className="title text-2xl font-bold leading-8 text-[#252B42] w-[14.938rem] md:w-full text-center">BESTSELLER PRODUCTS</h3>
                <span className="subtitle text-sm font-normal leading-5 text-[#737373] w-[16.313rem] text-center md:hidden">Problems trying to resolve the<br/> conflict between</span>
                <span className="subtitle text-sm font-normal leading-5 text-[#737373] text-center hidden md:block">Problems trying to resolve the conflict between</span>
            </div>
            <div className="cards-container flex flex-col items-center mt-12">
                {featuredProducts.length > 0 ? (
                    <>
                        <div className="cards flex flex-col gap-[1.875rem] items-center md:flex-row">
                            {featuredProducts.slice(0, 5).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        <div className="cards hidden md:flex md:flex-row gap-[1.875rem]">
                            {featuredProducts.slice(5, 10).map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="no-products text-[#737373] text-lg p-8">
                        No bestsellers available at the moment.
                    </div>
                )}
            </div>
            <button className="text-[#23A6F0] text-sm font-bold leading-[1.375rem] border border-[#23A6F0] rounded-[0.313rem] w-[16rem] h-[3.25rem] hover:cursor-pointer block">LOAD MORE PRODUCTS</button>
        </section>
    );
}
