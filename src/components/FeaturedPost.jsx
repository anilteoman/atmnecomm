import FeaturedPostImg from "../assets/featuredpostimg.jpg";
import FeaturedPost1 from "../assets/featuredpost1.jpg";
import { AlarmClock, ChartArea, ChevronRight, Heart, ShoppingCart, Eye, ChartBar, Star, Download } from "lucide-react";

export default function FeaturedPost() {
    return (
        <>
            <section className="featured-post mobile flex flex-col items-center md:hidden">
                <div className="post-image w-[20.625rem] h-[18.75rem] relative bg-cover bg-center" style={{backgroundImage: `url(${FeaturedPostImg})`}}>
                    <h6 className="text-white text-sm font-bold leading-6 bg-[#E74040] rounded-[0.188rem] w-14 h-6 px-2.5 absolute top-5 left-5">NEW</h6>
                </div>
                <div className="post-content flex flex-col w-[20.625rem] gap-2.5 px-[1.563rem] pt-[1.563rem] pb-[2.188rem]">
                    <div className="tags flex gap-[0.938rem] text-xs font-normal leading-4">
                        <span className="text-[#8EC2F2]">Google</span>
                        <span className="text-[#737373]">Trending</span>
                        <span className="text-[#737373]">New</span>
                    </div>
                    <h4 className="text-[#252B42] text-xl font-normal leading-[1.875rem]">Loudest à la Madison #1 (L'integral)</h4>
                    <p className="text-[#737373] text-sm font-normal leading-5 w-[17.5rem]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <div className="info py-[0.938rem] flex justify-between">
                        <span className="text-[#737373] text-xs font-normal leading-4 flex items-center gap-1.5"><AlarmClock color="#23A6F0" size={16}/> 22 April 2021</span>
                        <span className="text-[#737373] text-xs font-normal leading-4 flex items-center gap-1.5"><ChartArea color="#23856D" size={16}/> 10 Comments</span>
                    </div>
                    <span className="text-[#737373] text-sm font-bold leading-6 flex items-center gap-1.5 hover:cursor-pointer">Learn More <ChevronRight /></span>
                </div>
            </section>
            <section className="featured-post desktop hidden md:flex">
                <div className="post-image md:w-[13.063rem] md:h-[25.25rem] relative bg-cover bg-center" style={{backgroundImage: `url(${FeaturedPost1})`}}>
                    <h6 className="text-white text-sm font-bold leading-6 bg-[#E74040] rounded-[0.188rem] w-[3.188rem] h-6 px-2.5 absolute top-5 left-5">Sale</h6>
                     <div className="img-interactions absolute top-[21.25rem] left-[2.188rem] flex gap-2.5">
                        <span className="bg-white rounded-full w-10 h-10 flex justify-center items-center"><Heart /></span>
                        <span className="bg-white rounded-full w-10 h-10 flex justify-center items-center"><ShoppingCart /></span>
                        <span className="bg-white rounded-full w-10 h-10 flex justify-center items-center"><Eye /></span>
                    </div>
                </div>
                <div className="post-content flex flex-col w-[18.25rem] gap-2.5 px-[1.563rem] pt-[1.563rem] pb-[2.188rem]">
                    <div className="tags flex gap-[0.938rem] text-xs font-normal leading-4">
                        <span className="text-[#23A6F0] text-sm font-bold leading-6">English Department</span>
                        <div className="rating bg-[#252B42] flex rounded-[1.25rem] p-[0.313rem] gap-[0.313rem] items-center">
                            <Star color="#FFCE31" size={16}/>
                            <span className="text-white font-normal text-xs leading-4">4.9</span>
                        </div>
                    </div>
                    <h5 className="text-[#252B42] text-base font-bold leading-6">Graphic Design</h5>
                    <p className="text-[#737373] text-sm font-normal leading-5 w-[15.125rem]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <div className="sales flex gap-2.5 text-[#737373] items-center">
                        <Download size={16}/>
                        <span className="text-sm font-bold leading-6">15 Sales</span>
                    </div>
                    <div className="prices flex gap-[0.313rem] py-[0.313rem] px-[0.188rem]">
                        <span className="text-[#BDBDBD] text-base font-bold leading-6">$16.48</span>
                        <span className="text-[#23856D] text-base font-bold leading-6">$6.48</span>
                    </div>
                    <div className="colors flex gap-[0.38rem]">
                        <span className="bg-[#23A6F0] rounded-full w-4 h-4"></span>
                        <span className="bg-[#23856D] rounded-full w-4 h-4"></span>
                        <span className="bg-[#E77C40] rounded-full w-4 h-4"></span>
                        <span className="bg-[#252B42] rounded-full w-4 h-4"></span>
                    </div>
                    <div className="info flex justify-between py-[0.938rem]">
                        <div className="info-col flex gap-[0.313rem] items-center">
                            <AlarmClock color="#23A6F0" size={16}/>
                            <span className="text-[#737373] text-xs font-normal leading-4">22h...</span>
                        </div>
                        <div className="info-col flex gap-[0.313rem] items-center">
                            <ChartBar color="#E77C40" size={16}/>
                            <span className="text-[#737373] text-xs font-normal leading-4 items-center">64 Lessons</span>
                        </div>
                        <div className="info-col flex gap-[0.313rem]">
                            <ChartArea color="#23856D" size={16}/>
                            <span className="text-[#737373] text-xs font-normal leading-4 items-center">Progress</span>
                        </div>
                    </div>
                    <span className="text-[#23A6F0] border border-[#23A6F0] rounded-[2.313rem] w-[8.821rem] h-11 text-sm font-bold leading-6 px-5 py-2.5 flex items-center hover:cursor-pointer">Learn More <ChevronRight /></span>
                </div>
            </section>
        </>
        
    );
}