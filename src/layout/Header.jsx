import React from "react";
import { Search, ShoppingCart, Menu} from 'lucide-react';

const Header = () => {
  return (
    <header className="flex">
      
      <h1 className="text-3xl text-bold">ŞekerPetshop</h1>

      <nav className="flex flex-col md:flex-row gap-2 text-3xl text-center">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>
       <div className="flex gap-1">
        <a href="#"><Search/></a>
        <a href="#"><ShoppingCart/></a>
        <a href="#"><Menu/></a>
      </div>
      

     
    </header>
  );
};

export default Header;
