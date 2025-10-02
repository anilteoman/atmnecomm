import productImage from "/productImage.jpg";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    // If no product data provided, show default static card
    if (!product) {
        return (
            <section className="product-card flex flex-col md:w-[11.438rem] md:h-[25rem]">
                <div className="product-image">
                    <img src={productImage} alt="Product" />
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

    // Handle both old static data format and new API data format
    const productImageUrl = product.images?.[0]?.url || product.product_img || productImage;
    const productName = product.name || product.product_name || "Product Name";
    const productDesc = product.description || product.product_desc || "Product Description";
    const productPrice = product.price || product.product_price || 0;
    const discountPrice = product.product_discountPrice || (productPrice * 0.8); // 20% discount if no discount price

    return (
        <Link to={`/product/${product.id}`} className="product-card-link">
            <section className="product-card flex flex-col md:w-[11.438rem] md:h-[25rem] hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="product-image">
                    <img src={productImageUrl} alt={productName} className="w-full h-[200px] object-cover" />
                </div>
                <div className="product-details flex flex-col items-center gap-2.5 py-[1.563rem]">
                    <h5 className="product-title text-base font-bold leading-6 text-[#252B42]">{productName}</h5>
                    <span className="product-link text-sm font-bold leading-6 text-[#737373]">
                        {productDesc.length > 50 ? `${productDesc.substring(0, 50)}...` : productDesc}
                    </span>
                    <div className="product-price flex gap-[0.313rem]">
                        <h5 className="old-price text-base font-bold leading-6 text-[#BDBDBD]">${productPrice.toFixed(2)}</h5>
                        <h5 className="new-price text-base font-bold leading-6 text-[#23856D]">${discountPrice.toFixed(2)}</h5>
                    </div>
                </div>
            </section>
        </Link>
    );
}
