import featured1 from "../assets/featured1.jpg";
import featured2 from "../assets/featured2.jpg";

export default function FeaturedProducts() {
    return (
        <section className="featured-products ml-[1.281rem] py-20 flex flex-col gap-[3.125rem] md:flex-row-reverse md:justify-center md:gap-[5.625rem]">
            <div className="featured-texts flex flex-col gap-4 h-[21rem] w-[17.5rem] md:w-[27.938rem] md:h-[15.375rem] mx-auto md:mx-0 md:my-auto">
                <h5 className="text-base font-bold leading-6 text-[#23A6F0]">Featured Products</h5>
                <h2 className="text-[2.5rem] font-bold leading-[3.125rem] text-[#252B42]">We love what we do</h2>
                <p className="text-[#737373] text-base font-normal leading-5">Problems trying to resolve the conflict between the two major realms of Classical physics: 
                    Newtonian mechanics<br /><br/>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: 
                    Newtonian mechanics
                </p>
            </div>
            <div className="features-images flex h-[22.722rem] w-[23.388rem] md:w-[32.063rem] md:h-[31.125rem] gap-[1.369rem] mx-auto md:mx-0">
                <img src={featured1} className="w-[9.901rem] md:w-[13.563rem] object-cover"/>
                <img src={featured2} className="w-[12.776rem] md:w-[17.5rem] object-cover"/>
            </div>
        </section>
    );
}