import {Link} from "react-router-dom";
import { useState } from "react";

import { User, Search, ShoppingCart, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Heart } from 'lucide-react';

export default function Header() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    };
    
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
                            <ShoppingCart />
                            <button onClick={toogleNavbar}><Menu /></button>
                        </div>
                    </div>
                    {isOpen && (<div className="header-navbar">
                        <nav className="navbar flex flex-col items-center gap-[1.875rem] text-3xl font-normal leading-[2.813rem] text-[#737373] my-[7.875rem]">
                            <Link to="/">Home</Link>
                            <Link to="/">Product</Link>
                            <Link to="/">Pricing</Link>
                            <Link to="/">Contact</Link>
                        </nav>
                    </div>)}
                </div>
                <div className="desktop hidden md:block">
                    <div className="header-topbar bg-[#252B42] text-white px-30 flex justify-between items-center py-2.5 text-sm font-bold leading-6">
                        <div className="contact flex gap-8 p-2.5">
                            <div className="phone flex gap-[0.313rem]">
                                <Phone />
                                <span className="text">(999) 999-6161</span>
                            </div>
                            <div className="email flex gap-[0.313rem]">
                                <Mail />
                                <span className="text">anilteoman@outlook.com</span>
                            </div>
                        </div>
                        <div className="message p-2.5">
                            <span className="text">Follow Me and get a chance to win 80% off</span>
                        </div>
                        <div className="socials flex gap-2.5 p-2.5">
                            <span className="text">Follow Me :</span>
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
                                <Link to="/shop">Shop</Link>
                                <Link to="/">About</Link>
                                <Link to="/">Blog</Link>
                                <Link to="/">Contact</Link>
                                <Link to="/">Pages</Link>
                            </nav>
                            <div className="tools flex text-[#23A6F0] text-sm font-bold leading-6 gap-3.5">
                                <div className="login flex gap-[0.313rem] mr-3">
                                    <User />
                                    <span className="legin-text">Login / Register</span>
                                </div>
                                <Search />
                                <ShoppingCart />
                                <Heart />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}