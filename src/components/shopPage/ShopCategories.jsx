import React from "react";
import { Link } from "react-router-dom";

import card1 from "/card1.png";
import card2 from "/card2.png";
import card3 from "/card3.png";
import card4 from "/card4.png";
import card5 from "/card5.png";

const categories = [
  { name: "CLOTHS", imageUrl: card1, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: card2, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: card3, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: card4, link: "/shop/category/cloths" },
  { name: "CLOTHS", imageUrl: card5, link: "/shop/category/cloths" },
];

const ShopCategories = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center mb-10">
      {categories.map((category) => (
        
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-[205px] h-[205px] object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
          />
      ))}
    </div>
  );
};

export default ShopCategories;