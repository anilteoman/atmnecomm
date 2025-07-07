import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        {/* Ana Hero Kartı */}
        <div
  className="relative rounded-[20px] overflow-hidden 
             bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]
             flex flex-col md:flex-row items-center 
             min-h-[622px] bg-no-repeat bg-center bg-cover"
  style={{ backgroundImage: "url('/hero.png')" }}
>
  <div className="w-full md:w-1/2 lg:w-2/5 p-8 md:p-12 lg:pl-20 z-10 text-center md:text-left bg-transparent rounded-[20px]">
    <h5 className="font-bold text-[#2A7CC7]"> test test</h5>
    <h1 className="text-4xl md:text-6xl font-bold my-6 text-[#252B42]">
      NEW COLLECTION
    </h1>
    <p className="text-lg text-[#737373] mb-8 max-w-sm mx-auto md:mx-0">
      We know how large objects will act, but things on a small scale.
    </p>
    <Link
      to="/shop"
      className="bg-[#2DC071] hover:bg-green-600 text-white font-bold py-4 px-10 rounded transition-colors"
    >
      SHOP NOW
    </Link>
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;