import React from "react";
import HeroSection from "../components/home/HeroSection";
import BrandLogos from "../components/other/BrandLogos";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BestsellerProd from "../components/home/BestSellerProd";
import WeLoveWhatWeDo from "../components/home/WLWWD";
import Services from "../components/home/Services";
import FeaturedPosts from "../components/home/FeaturedPosts";



const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BrandLogos />
      <FeaturedProducts />
      <BestsellerProd />
      <WeLoveWhatWeDo />
      <Services />
      <FeaturedPosts />
      
    </div>
  );
};

export default HomePage;