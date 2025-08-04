import React from "react";
import TeamPage from "./TeamPage";
import aboutCompany from "/aboutcompany.png";
import BrandLogos from "../components/sharedcomp/BrandLogos";
import aboutTestimonials from "/abouttestimonials.jpg"

const AboutPage = () => {
  return (
    <>
      <section className="about-company-main mt-5">
        <div className="about-company-content flex flex-col items-center gap-5 md:flex-row md:gap-20 md:justify-center">
          <div className="about-company-text flex flex-col gap-10 items-center py-20 md:items-start">
            <h5 className="hidden md:block text-[#252B42] text-base font-bold leading-6">
              ABOUT COMPANY
            </h5>
            <h2 className="text-[#252B42] text-[2.5rem] leading-[3.125rem] font-bold">
              ABOUT US
            </h2>
            <h4 className="text-[#737373] text-xl leading-[1.875rem] w-2xs text-center md:text-start md:w-130">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <button className="bg-[#23A6F0] text-white text-sm leading-[1.375rem] font-bold py-[0.938rem] px-10 rounded-[0.313rem] w-48 h-[3.25rem] hover:cursor-pointer">
              Get Quote Now
            </button>
          </div>
          <div className="about-company-img w-[24.188rem] h-[27.5rem] md:w-[39.5rem] md:h-[38.25rem]">
            <img src={aboutCompany} alt="" />
          </div>
        </div>
      </section>
      <section className="about-content-main">
        <div className="about-content flex flex-col py-20 gap-[3.75rem] items-center md:flex-row md:justify-center md:gap-[15rem]">
          <div className="about-content-text-bold flex flex-col items-center gap-6 md:items-start">
            <p className="text-[#E74040] text-sm leading-5">Problems trying</p>
            <h3 className="text-[#252B42] text-2xl leading-8 font-bold w-64 text-center md:w-96 md:text-start">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
          <div className="about-content-text-thin">
            <p className="text-[#737373] text-sm leading-5 w-72 md:w-[31rem]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>
      <section className="about-stats-main">
        <div className="abaout-stats-content flex flex-col gap-[6.25rem] py-[6.25rem] items-center md:flex-row md:justify-center md:gap-[11rem] md:py-20">
          <div className="stat flex flex-col items-center">
            <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">
              15K
            </h1>
            <h5 className="text-[#737373] text-base font-bold leading-6">
              Happy Customers
            </h5>
          </div>
          <div className="stat flex flex-col items-center">
            <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">
              150K
            </h1>
            <h5 className="text-[#737373] text-base font-bold leading-6">
              Monthly Visitors
            </h5>
          </div>
          <div className="stat flex flex-col items-center">
            <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">
              15
            </h1>
            <h5 className="text-[#737373] text-base font-bold leading-6">
              Countries Worldwide
            </h5>
          </div>
          <div className="stat flex flex-col items-center">
            <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">
              100+
            </h1>
            <h5 className="text-[#737373] text-base font-bold leading-6">
              Top Partners
            </h5>
          </div>
        </div>
      </section>
      <section>
        <h1>*video gelecek*</h1>
      </section>

      <TeamPage />

       <section className="about-clients-main bg-[#FAFAFA] py-20">
            <div className="about-clients-content flex flex-col gap-6">
                <div className="about-clients-texts flex flex-col gap-7 items-center">
                    <h2 className="text-[2.5rem] text-[#252B42] leading-[3.125rem] font-bold w-3xs text-center md:w-full">Big Companies Are Here</h2>
                    <p className="text-[#737373] text-sm leading-5 w-2xs text-center md:w-sm">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>
                <div className="about-logos">
                    <BrandLogos />
                </div>
            </div>
        </section>

          <section className="about-testimonails-main">
            <div className="about-testimonails-content md:flex">
                <div className="testimonails-texts text-white flex flex-col gap-6 items-center bg-[#2A7CC7] py-20 md:w-[70%] md:items-start md:pl-[12.188rem] md:py-28 md:justify-center">
                    <h5 className="text-base leading-6 font-bold">WORK WITH US</h5>
                    <h2 className="text-[2.5rem] leading-[3.125rem] font-bold w-3xs text-center md:w-full md:text-start">Now Let's Grow Yours</h2>
                    <p className="text-sm leading-5 w-3xs text-center md:w-[25rem] md:text-start">
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
                    </p>
                    <button className="text-sm font-bold leading-[1.375rem] py-[0.938rem] px-10 border border-white rounded-[0.313rem]">Button</button>
                </div>
                <div className="testimonails-img hidden md:block object-contain object-center">
                    <img src={aboutTestimonials} className="w-[36.875rem] h-[35rem]"/>
                </div>
            </div>
        </section>
    </>
  );
};

export default AboutPage;
