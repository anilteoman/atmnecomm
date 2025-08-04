/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";*/
import ProductCards from "../components/homepage/ProductCards";
import { products } from "../data/products";

/*product id si prop olarak verilecek/



/*  PRODUCT DETAİL AXİOS İSTEGİ APİ DE 404 OLARAK DONUYOR . FİXLE*/

const ProductDetail = () => {
  /*const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://YOUR-MOCKAPI-URL/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;*/

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Üst Kısım */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sol: Slider */}
        <div className="flex-1">
          <img
            src={products.product_img}
            alt={products.product_name}
            className="w-full rounded-lg"
          />
        </div>

        {/* Sağ: Ürün Bilgileri */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{products.product_name}</h2>
          <div className="flex items-center mb-4">
            ⭐⭐⭐⭐☆ <span className="ml-2 text-gray-600">10 Reviews</span>
          </div>
          <p className="text-2xl font-bold mb-2">${products.product_discountPrice}</p>
          <p className="text-gray-500 mb-2">
            <span className="text-green-600 font-semibold">In Stock</span>
          </p>
          <p className="text-gray-700 mb-4">{products.product_desc}</p>

          {/* Renk Seçenekleri örnek */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-6 bg-green-500 rounded-full"></span>
            <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
            <span className="w-6 h-6 bg-red-500 rounded-full"></span>
          </div>

          
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      
      <div className="mt-12 border-t pt-8">
        <div className="flex gap-8 mb-4 border-b pb-2">
          <button className="font-semibold">Description</button>
          <button className="text-gray-500">Additional Information</button>
          <button className="text-gray-500">Reviews (0)</button>
        </div>
        <div className="text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eu turpis molestie, dictum est a, mattis tellus.
          </p>
        </div>
      </div>

      <ProductCards />
      
    </div>
  );
};

export default ProductDetail;