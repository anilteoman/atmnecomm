import { Link, useLocation } from "react-router-dom";
import {Instagram, Facebook, Twitter,} from 'lucide-react';

export default function Footer() {
    
    const location = useLocation();

    const bgColor = location.pathname == "/" ? "bg-[#FAFAFA]" : "bg-white";
    
    return (
        <footer className="footer mt-10">
            <section className={`socials ${bgColor} flex flex-col py-10 px-28 gap-8 md:flex-row md:justify-between md:px-60`}>
                <div className="logo">
                    <h3 className="text-2xl font-bold leading-8 text-[#252B42]">Bandage</h3>
                </div>
                <div className="icons flex gap-5 text-[#23A6F0] text-2xl">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </section>
            <section className="links flex flex-col gap-[1.875rem] py-[4.375rem] px-28 md:flex-row md:justify-between md:px-60">
                <div className="company-info flex flex-col gap-5">
                    <h5 className="text-base font-bold leading-6 text-[#252B42] pb-2.5">Company Info</h5>
                    <Link className="text-[#737373] text-sm font-bold leading-6">About Us</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Carrier</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">We are hiring</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Blog</Link>
                </div>
                <div className="legal flex flex-col gap-5">
                    <h5 className="text-base font-bold leading-6 text-[#252B42] pb-2.5">Legal</h5>
                    <Link className="text-[#737373] text-sm font-bold leading-6">About Us</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Carrier</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">We are hiring</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Blog</Link>
                </div>
                <div className="features flex flex-col gap-5">
                    <h5 className="text-base font-bold leading-6 text-[#252B42] pb-2.5">Features</h5>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Business Marketing</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">User Analytic</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Live Chat</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Unlimited Support</Link>
                </div>
                <div className="resources flex flex-col gap-5">
                    <h5 className="text-base font-bold leading-6 text-[#252B42] pb-2.5">Resources</h5>
                    <Link className="text-[#737373] text-sm font-bold leading-6">IOS & Android</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Watch a Demo</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">Customers</Link>
                    <Link className="text-[#737373] text-sm font-bold leading-6">API</Link>
                </div>
                <div className="contact">
                    <h5 className="text-base font-bold leading-6 text-[#252B42] pb-2.5">Get In Touch</h5>
                    <div className="input w-[20.063rem] flex">
                        <input type="email" placeholder="Your Email" className="bg-[#E6E6E6] h-[3.625rem]"></input>
                        <span className="w-[7.313rem] border border-[#23A6F0] bg-[#23A6F0] rounded-tr-[0.313rem] rounded-br-[0.313rem] text-white text-sm leading-7 text-center pt-[0.938rem]">Subscribe</span>
                    </div>
                    <span className="text-xs leading-7 text-[#737373] font-normal">Lore imp sum dolor Amit</span>
                </div>
            </section>
            <section className="copyright bg-[#FAFAFA] py-[1.563rem]">
                <div className="flex justify-center md:justify-start md:px-60">
                    <span className="text-[#737373] text-sm font-bold leading-6 text-center md:hidden">Made With Love By AnılTeoman<br/> All Right Reserved </span>
                    <span className="text-[#737373] text-sm font-bold leading-6 text-center hidden md:block">Made With Love By AnılTeoman All Right Reserved </span>
                </div>
            </section>
        </footer>
    );
}