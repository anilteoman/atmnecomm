import ProductCard from "./ProductCard";


/* map ile yapilabilir */
export default function ProductCards() {
    return (
        <section className="product-cards flex flex-col items-center mt-20">
            <div className="titles flex flex-col items-center gap-2.5">
                <h4 className="title-desktop hidden md:block text-xl font-normal leading-[1.875rem] text-[#737373]">Featured Products</h4>
                <h3 className="title text-2xl font-bold leading-8 text-[#252B42] w-[14.938rem] md:w-full text-center">BESTSELLER PRODUCTS</h3>
                <span className="subtitle text-sm font-normal leading-5 text-[#737373] w-[16.313rem] text-center md:hidden">Problems trying to resolve the<br/> conflict between</span>
                <span className="subtitle text-sm font-normal leading-5 text-[#737373] text-center hidden md:block">Problems trying to resolve the conflict between</span>
            </div>
            <div className="cards-container flex flex-col items-center mt-12">
                <div className="cards flex flex-col gap-[1.875rem] items-center md:flex-row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="cards hidden md:flex md:flex-row gap-[1.875rem]">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <button className="text-[#23A6F0] text-sm font-bold leading-[1.375rem] border border-[#23A6F0] rounded-[0.313rem] w-[16rem] h-[3.25rem] hover:cursor-pointer block">LOAD MORE PRODUCTS</button>
        </section>
    );
}