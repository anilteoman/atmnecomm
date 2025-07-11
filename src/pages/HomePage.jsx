import BrandLogos from "../components/sharedcomp/BrandLogos";
import FeaturedPosts from "../components/homepage/FeaturedPosts";
import FeaturedProducts from "../../public/FeaturedProducts";
import Hero from "../components/homepage/Hero";
import ProductCards from "../components/homepage/ProductCards";
import Services from "../components/homepage/Services";
import HomeShopCards from "../components/homepage/HomeShopCards";

export default function HomePage() {
    return (
        <>
            <Hero />
            <BrandLogos />
            <HomeShopCards />
            <ProductCards />
            <FeaturedProducts />
            <Services />
            <FeaturedPosts />
        </>
    );
}