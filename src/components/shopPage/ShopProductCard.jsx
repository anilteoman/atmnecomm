
import { getOptimizedProductImg } from "../../utils/getOptimizedProductImg";

export default function ShopProductCard({onClick, product}) {
    
    return (
        <section className="shop-product-card flex flex-col w-[21.75rem] h-[38.438rem] md:w-[15rem] md:h-[30.5rem] hover:cursor-pointer" onClick={onClick}>
            <div className="shop-product-image flex justify-center w-60 h-[300px]">
                <img src={getOptimizedProductImg(product?.images[0].url, 400)} className="object-center object-cover"/>
            </div>
            <div className="shop-product-details flex flex-col items-center gap-2.5 py-[1.563rem]">
                <h5 className="shop-product-title text-base font-bold leading-6 text-[#252B42]">{product?.name}</h5>
                <span className="shop-product-link text-sm font-bold leading-6 text-[#737373]">{product?.description}</span>
                <div className="shop-product-price flex gap-[0.313rem]">
                    <h5 className="old-price text-base font-bold leading-6 text-[#BDBDBD]">${product?.price}</h5>
                    <h5 className="new-price text-base font-bold leading-6 text-[#23856D]">${(product?.price / 2).toFixed(2)}</h5>
                </div>
                <div className="colors flex gap-[0.38rem]">
                        <span className="bg-[#23A6F0] rounded-full w-4 h-4"></span>
                        <span className="bg-[#23856D] rounded-full w-4 h-4"></span>
                        <span className="bg-[#E77C40] rounded-full w-4 h-4"></span>
                        <span className="bg-[#252B42] rounded-full w-4 h-4"></span> 
                    </div>
            </div>
        </section>
    );
}