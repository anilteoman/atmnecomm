import React from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="p-5 flex justify-start items-center">
      <h1 className="text-4xl pr-20">ŞekerPetshop</h1>

      <nav className="flex flex-col md:flex-row gap-2 text-xl text-slate-400 text-center">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">Pages</a>
      </nav>
      <div className="flex gap-2 items-center ml-auto">
        <a href="#" className="hover:bg-sky-200">
          <Search size={30} />
        </a>
        <a href="#" className="hover:bg-sky-200">
          <ShoppingCart size={30} />
        </a>
        <a href="#" className="hover:bg-sky-200">
          <Menu size={30} />
        </a>
      </div>
    </header>
  );
};

export default Header;
