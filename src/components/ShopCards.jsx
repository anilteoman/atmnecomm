import shopcard1 from "../assets/shopcard1.png";
import shopcard2 from "../assets/shopcard2.png";
import shopcard3 from "../assets/shopcard3.png";

export default function ShopCards() {
    return (
        <section className="shop-cards flex flex-col gap-[0.938rem] mx-[2.563rem] py-6 md:flex-row md:mx-[8.031rem] md:justify-center">
            <div className="shop-card-big h-[34.75rem] md:h-[35.75rem] flex flex-col items-center">
                <div className="bg-no-repeat bg-center bg-cover h-full w-[21.563rem] md:w-[38.188rem] relative" style={{backgroundImage: `url(${shopcard1})`}}>
                    <div className="card-content bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white md:w-[30rem]">
                        <span className="mt-[3.75rem] ml-[2.563rem] text-2xl leading-8 font-bold">Top Product Of<br/> the Week</span>
                        <span className="border border-white py-[0.938rem] px-[2.5rem] w-[12.375rem] ml-[2.594rem] text-center text-sm font-bold leading-[1.375rem] mt-3 hover:cursor-pointer">EXPLORE ITEMS</span>
                    </div>
                </div>
            </div>
            <div className="shop-cards-small flex flex-col items-center gap-[0.938rem] md:gap-[1.3rem]">
                <div className="shop-card-small h-[24.875rem] md:h-[18.063rem] md:w-[34.813rem]">
                    <div className="bg-no-repeat bg-center bg-cover h-full w-[21.563rem] md:w-[34.813rem] relative" style={{backgroundImage: `url(${shopcard2})`}}>
                    <div className="card-content bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white md:w-[21.688rem] md:h-[10.813rem]">
                        <span className="mt-[3.75rem] ml-[2.563rem] text-2xl leading-8 font-bold block md:hidden">Top Product Of<br/> the Week</span>
                        <span className="ml-[2.563rem] text-xl leading-[1.875rem] font-normal md:mt-[1.875rem] hidden md:block">Top Product Of the Week</span>
                        <span className="border border-white py-[0.938rem] px-[2.5rem] w-[12.375rem] ml-[2.594rem] text-center text-sm font-bold leading-[1.375rem] mt-3 hover:cursor-pointer">EXPLORE ITEMS</span>
                    </div>
                </div>
                </div>
                <div className="shop-card-small h-[24.875rem] md:h-[16.313rem] md:w-[34.813rem] items-center">
                    <div className="bg-no-repeat bg-center bg-cover h-full w-[21.563rem] md:w-[34.813rem] relative" style={{backgroundImage: `url(${shopcard3})`}}>
                    <div className="card-content bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white md:w-[22.5rem] md:h-[9.563rem]">
                        <span className="mt-[3.75rem] ml-[2.563rem] text-2xl leading-8 font-bold block md:hidden">Top Product Of<br/> the Week</span>
                        <span className="ml-[2.563rem] text-xl leading-[1.875rem] font-normal md:mt-[1.875rem] hidden md:block">Top Product Of the Week</span>
                        <span className="border border-white py-[0.938rem] px-[2.5rem] w-[12.375rem] ml-[2.594rem] text-center text-sm font-bold leading-[1.375rem] mt-3 hover:cursor-pointer">EXPLORE ITEMS</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}