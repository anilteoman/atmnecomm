import { Link } from "react-router-dom";

export default function ShopCategory({ category }) {
    // Safety check to ensure category data exists
    if (!category || !category.id) {
        console.warn('Invalid category data:', category);
        return null;
    }

    // Map backend category fields to component fields with comprehensive fallbacks
    const categoryData = {
        id: category.id,
        title: category.title || category.name || category.code || `Category ${category.id}`,
        image: category.img || category.image || `https://picsum.photos/seed/${category.code || category.id}/400/300`,
        rating: category.rating || 0,
        gender: category.gender || 'unisex',
        code: category.code || '',
        description: category.description || '',
    };
    
    // Debug log to see what data we're getting from backend
    console.log('Category data received:', category);
    console.log('Mapped category data:', categoryData);

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(33,33,33,0.4), rgba(33,33,33,0.4)), url(${categoryData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <section className="shop-category flex flex-col items-center">
            <Link to={`/shop/category/${categoryData.id}`} className="category-link">
                <div 
                    className="category w-[20.75rem] h-[18.75rem] md:w-[12.813rem] md:h-[13.938rem] flex flex-col items-center justify-center text-white hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg overflow-hidden shadow-lg"
                    style={backgroundImageStyle}
                >
                    <h5 className="text-base leading-6 font-bold mb-2 text-center px-2">
                        {categoryData.title}
                    </h5>
                    {categoryData.rating > 0 && (
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-300 mr-1">⭐</span>
                            <span className="text-sm font-semibold">{categoryData.rating}</span>
                        </div>
                    )}
                    {categoryData.code && (
                        <span className="text-xs opacity-75 mt-1">{categoryData.code}</span>
                    )}
                </div>
            </Link>
        </section>
    );
}
