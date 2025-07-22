import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';

const ShopProductCard = ({ id, product_name, product_desc, product_price, product_discountPrice, product_img}) => {
  return ( 
    <Link to={`/product/${id}`} className="text-center">
      <img src={product_img} alt={product_name} className="w-full h-[350px] object-cover rounded-lg mb-4" />
      <h3 className="font-bold">{product_name}</h3>
      <p className="text-gray-500">{product_desc}</p>
      <div className="mt-2">
        <span className="line-through text-gray-500 mr-2">${product_price}</span>
        <span className="text-green-600 font-bold">${product_discountPrice}</span>
      </div>
      <div className="flex justify-center gap-2 mt-2">
        renkler eklenecek
      </div>
    </Link>
  );
};

export default ShopProductCard