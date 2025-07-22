import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ShopCategories from "../components/shopPage/ShopCategories";
import BrandLogos from "../components/sharedcomp/BrandLogos";
import axios from "axios";
import ShopProductCard from "../components/shopPage/ShopProductCard";

const ShopPage = () => {

  const [products, setProducts] = useState([]);

    useEffect(() => {
    axios.get("https://6870f7127ca4d06b34b8d1a4.mockapi.io/atmnecomm/products?page=1&limit=12")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="px-10 md:px-35 py-10">
      <div className="shopheader flex justify-between">
        <p className="text-2xl font-bold leading-8 text-[#252B42]">Shop</p>
        <div className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <span className="text-bold"> s </span>
          <p className="text-[#BDBDBD]">Shop</p>
        </div>
      </div>
      <div className="shopCategories mt-10 ">
        <ShopCategories />
      </div>

      <section className="py-16 px-4">
      <div className="mb-6 flex justify-between items-center">
        <p>Showing all {products.length} results</p>
        {/* Filtreleme / Görünüm butonları */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ShopProductCard
            id={product.id}
            key={product.id}
            product_name={product.product_name}
            product_desc={product.product_desc}
            product_price={product.product_price}
            product_discountPrice={product.product_discountPrice}
            product_img={product.product_img}
          />
        ))}
      </div>

      {/* pagination koy */}
    </section>

      <BrandLogos />
    </div>
  );
};

export default ShopPage;
