import BrandLogos from "../components/BrandLogos";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductCards";
import Services from "../components/Services";
import ShopCards from "../components/ShopCards";

export default function HomePage() {
    return (
        <>
            <Hero />
            <BrandLogos />
            <ShopCards />
            <ProductCards />
            <FeaturedProducts />
            <Services />
            <FeaturedPosts />
        </>
    );
}