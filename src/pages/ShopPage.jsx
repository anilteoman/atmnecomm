import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ShopCategories from "../components/ShopCategories";
import BrandLogos from "../components/BrandLogos";

const ShopPage = () => {
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

      <BrandLogos />
    </div>
  );
};

export default ShopPage;
