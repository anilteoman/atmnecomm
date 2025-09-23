import {Link, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/thunks/loginThunks";
import { getCategories } from "../store/thunks/productThunks";

import { User, Search, ShoppingCart, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Heart, ChevronDown } from 'lucide-react';

export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    const handleToCart = () => {
        history.push("/cart");
    };

    const handleHistory = () => {
        history.push("/history");
    }

    useEffect(() => {
        dispatch(getCategories());
    });

    const categories = useSelector((state) => state.product.categories);
    const user = useSelector((state) => state.client.user);
    const shoppingCart = useSelector((state) => state.shoppingCart.cart);
    const limitedCart = shoppingCart.slice(0, 3);
    const restOfCart = shoppingCart.length - limitedCart.length;

    const totalItems = shoppingCart.reduce((sum, item) => sum + item.count, 0);
    
    return (
        <header className="header md:mb-5">
            <section className="header-navbar">
                <div className="mobile mt-[2.388rem] block md:hidden">
                    <div className="upper flex justify-between items-center px-[2.375rem] mb-2.5">
                        <div className="logo">
                            <span className="text-2xl font-bold leading-8 text-[#252B42]">Bandage</span>
                        </div>
                        <div className="tools flex gap-6">
                            <User />
                            <Search />
                            <div className="relative">
                                <button onClick={handleToCart} className="hover:cursor-pointer"><ShoppingCart /></button>
                                <span className="absolute -top-3 -right-2 text-black rounded-full border-2 w-4 h-4 text-xs flex justify-center items-center">{totalItems}</span>
                            </div>
                            <button onClick={toogleNavbar}><Menu /></button>
                        </div>
                    </div>
                    {isOpen && (<div className="header-navbar">
                        <nav className="navbar flex flex-col items-center gap-5 text-2xl font-normal leading-[2.813rem] text-[#737373] my-10">
                            <Link to="/">Home</Link>
                            <Link to="/shop">Product</Link>
                            {user ? (<div className="flex gap-3">
                                <Link to="/history">Order History</Link>
                                <span>/</span>
                                <span onClick={handleLogout} className="hover:cursor-pointer">Logout</span>
                            </div>
                            ) : (<div className="flex gap-3">
                                <Link to="/login">Login</Link>
                                <span>/</span>
                                <Link to="/signup">Sign Up</Link>
                            </div>)}
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>)}
                </div>
                <div className="desktop hidden md:block">
                    <div className="header-topbar bg-[#252B42] text-white px-30 flex justify-between items-center py-2.5 text-sm font-bold leading-6">
                        <div className="contact flex gap-8 p-2.5">
                            <div className="phone flex gap-[0.313rem]">
                                <Phone />
                                <span className="text">(462) 661 - 6161</span>
                            </div>
                            <div className="email flex gap-[0.313rem]">
                                <Mail />
                                <span className="text">anilteoman@outlook.com</span>
                            </div>
                        </div>
                        <div className="message p-2.5">
                            <span className="text">code : anil10 for %10 discount on checkout!</span>
                        </div>
                        <div className="socials flex gap-2.5 p-2.5">
                            <span className="text">Follow Us :</span>
                            <Instagram />
                            <Youtube />
                            <Facebook />
                            <Twitter />
                        </div>
                    </div>
                    <div className="dektop-navbar flex items-center px-35 mt-[0.813rem]">
                        <div className="logo flex-none">
                            <span className="text text-2xl font-bold text-[#252B42] leading-8">Bandage</span>
                        </div>
                        <div className="header-navbar flex grow justify-between items-center ml-30">
                            <nav className="navbar flex gap-[0.938rem] text-sm font-bold leading-6 text-[#737373]">
                                <Link to="/">Home</Link>
                                <div className="navbar-dropdown flex gap-1.5">
                                    <Link to="/shop">Shop</Link>
                                    <div className="dropdown relative inline-block group">
                                        <ChevronDown />
                                        <div className="dropdown-content absolute hidden group-hover:flex gap-20 p-5 bg-white shadow-lg shadow-gray-400 z-10">
                                            <div className="category-women">
                                                <span className="text-[#252B42]">Kadın</span>
                                                <div className="mt-5 flex flex-col gap-2">
                                                    {categories.map((category) => (
                                                        category.gender == "k" && (<Link key={category.id} to={`/shop/${category.gender}/${category.title}/${category.id}`}>{category.title}</Link>)
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="category-men">
                                                <span className="text-[#252B42]">Erkek</span>
                                                <div className="mt-5 flex flex-col gap-2">
                                                    {categories.map((category) => (
                                                        category.gender == "e" && (<Link key={category.id} to={`/shop/${category.gender}/${category.title}/${category.id}`}>{category.title}</Link>)
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/about" className="ml-[-5px]">About</Link>
                                <Link to="/blog">Blog</Link>
                                <Link to="/contact">Contact</Link>
                                <Link to="/">Pages</Link>
                            </nav>
                            <div className="tools flex text-[#23A6F0] text-sm font-bold leading-6 gap-3.5">
                                {user ? (<div className="login flex gap-[0.313rem] mr-3">
                                    <User />
                                    <div className="dropdown relative inline-block group">
                                        <span>Welcome, {user.name}</span>
                                        <div className="dropdown-content absolute hidden group-hover:flex flex-col gap-2 p-5 bg-white shadow-lg shadow-gray-400 z-10">
                                            <span className="hover: cursor-pointer" onClick={handleHistory}>Order History</span>
                                            <span className="hover: cursor-pointer" onClick={handleLogout}>Log Out</span>
                                        </div>
                                    </div>
                                </div>) : (<div className="login flex gap-[0.313rem] mr-3">
                                    <User />
                                    <Link to="/login" className="login-text">Login</Link>
                                    <span>/</span>
                                    <Link to="/signup" className="login-text">Register</Link>
                                </div>)}
                                <Search />
                                <Heart />
                                <div className="dropdown relative inline-block group">
                                    <div className="relative">
                                        <button className="hover:cursor-pointer" onClick={handleToCart}><ShoppingCart /></button>
                                        <span className="absolute -top-3 -right-2 bg-[#23A6F0] rounded-full text-white w-4 h-4 text-xs flex justify-center items-center">{totalItems}</span>
                                    </div>
                                    <div className="dropdown-content absolute hidden group-hover:flex p-5 bg-white shadow-lg shadow-gray-400 z-10 right-0">
                                        <div className="shopping-cart-content flex w-80">
                                            <ul className="flex flex-col gap-3">
                                                <h1 className="text-[#252B42] font-bold">Shopping Cart</h1>
                                                {limitedCart.map((item) => (
                                                    <li key={item.product.id}>
                                                        <div className="cart-item flex gap-5">
                                                            <div className="cart-item-img w-[20%] mt-2">
                                                                <img src={item.product.images[0].url}/>
                                                            </div>
                                                            <div className="cart-item-text flex flex-col gap-1 w-[80%] text-[#252B42]">
                                                                <h2 className="font-bold">{item.product.name}</h2>
                                                                <h3 className="font-normal">{item.product.description}</h3>
                                                                <h4 className="font-normal">Adet: {item.count}</h4>
                                                                <h2>${item.product.price}</h2>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                                <div>
                                                    {shoppingCart.length > 3 && <h2>{restOfCart} item(s) more</h2>}
                                                </div>
                                                {shoppingCart.length > 0 && <button className="bg-[#23A6F0] text-white py-2.5 px-5 rounded-[0.313rem] hover:cursor-pointer w-[50%]" onClick={handleToCart}>Shopping Cart</button>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}