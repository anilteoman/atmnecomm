import productImage from "../assets/productImage.jpg";


/*product datasi databaseden alinacak */
export default function ProductCard() {
    return (
        <section className="product-card flex flex-col md:w-[11.438rem] md:h-[25rem]">
            <div className="product-image">
                <img src={productImage}/>
            </div>
            <div className="product-details flex flex-col items-center gap-2.5 py-[1.563rem]">
                <h5 className="product-title text-base font-bold leading-6 text-[#252B42]">Graphic Design</h5>
                <span className="product-link text-sm font-bold leading-6 text-[#737373]">English Department</span>
                <div className="product-price flex gap-[0.313rem]">
                    <h5 className="old-price text-base font-bold leading-6 text-[#BDBDBD]">$16.48</h5>
                    <h5 className="new-price text-base font-bold leading-6 text-[#23856D]">$6.48</h5>
                </div>
            </div>
        </section>
    );
}