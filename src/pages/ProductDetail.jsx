import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCards from "../components/homepage/ProductCards";
import { getProductDetail } from "../store/thunks/productThunks";
import { addToCart } from "../store/thunks/shoppingCartThunks";
import { ShoppingCart, Plus, Minus, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Get product data from Redux store
  const { productDetail: product, fetchState } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.shoppingCart);
  
  // Fetch product details when component mounts or ID changes
  useEffect(() => {
    if (id) {
      console.log('Fetching product detail for ID:', id);
      dispatch(getProductDetail(id));
    }
  }, [id, dispatch]);
  
  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1);
  }, [product]);
  
  // Handler functions
  const handleQuantityIncrease = () => {
    if (product && product.stock && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => prev + 1);
    }
  };
  
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = async () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    try {
      // Add the product multiple times based on quantity
      // The existing thunk already handles incrementing if product exists
      for (let i = 0; i < quantity; i++) {
        dispatch(addToCart(product));
      }
      
      // Reset quantity to 1 after adding to cart
      setQuantity(1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };
  
  // Get current cart item quantity
  const currentCartItem = cart.find(item => item.product.id === product?.id);
  const cartQuantity = currentCartItem ? currentCartItem.count : 0;
  
  // Debug logs
  console.log('ProductDetail - ID from URL:', id);
  console.log('ProductDetail - Product from Redux:', product);
  console.log('ProductDetail - Fetch state:', fetchState);
  console.log('ProductDetail - Current cart quantity:', cartQuantity);

  // Handle loading state
  if (fetchState === "FETCHING") {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent mb-4"></div>
          <div className="text-lg">Loading product details...</div>
        </div>
      </div>
    );
  }

  // Handle error cases
  if (!id) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[400px]">
        <div className="text-lg text-red-600">No product ID provided</div>
      </div>
    );
  }

  if (fetchState === "FAILED" || (!product && fetchState === "FETCHED")) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="text-lg text-red-600 mb-2">Product not found</div>
          <div className="text-sm text-gray-500">Product ID: {id}</div>
          <div className="text-sm text-gray-500">Please check the product ID and try again.</div>
        </div>
      </div>
    );
  }

  // Still loading or no product data yet
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[400px]">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Üst Kısım */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sol: Slider */}
        <div className="flex-1">
          <img
            src={product.images && product.images[0] ? product.images[0].url : 'https://via.placeholder.com/400x300?text=No+Image'}
            alt={product.name || 'Product'}
            className="w-full rounded-lg max-h-[500px] object-cover"
          />
        </div>

        {/* Sağ: Ürün Bilgileri */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center mb-4">
            ⭐⭐⭐⭐☆ <span className="ml-2 text-gray-600">{product.rating || 0} Reviews</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <p className="text-2xl font-bold text-green-600">${(product.price / 2).toFixed(2)}</p>
            <p className="text-lg text-gray-500 line-through">${product.price}</p>
          </div>
          <p className="text-gray-500 mb-2">
            <span className="text-green-600 font-semibold">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Renk Seçenekleri örnek */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-6 bg-green-500 rounded-full"></span>
            <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
            <span className="w-6 h-6 bg-red-500 rounded-full"></span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={handleQuantityDecrease}
                disabled={quantity <= 1}
                className="flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus size={16} />
              </button>
              <span className="flex items-center justify-center w-12 h-10 text-center font-semibold">
                {quantity}
              </span>
              <button
                onClick={handleQuantityIncrease}
                className="flex items-center justify-center w-10 h-10 text-gray-600 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
            {cartQuantity > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-600 font-medium">
                  {cartQuantity} in cart
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Link 
                  to="/cart" 
                  className="text-xs text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                >
                  <Eye size={12} />
                  View Cart
                </Link>
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={isAddingToCart || !product}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex-1"
            >
              {isAddingToCart ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Adding...
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Add {quantity > 1 ? `${quantity} items` : 'to Cart'}
                </>
              )}
            </button>
            
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      
      <div className="mt-12 border-t pt-8">
        <div className="flex gap-8 mb-4 border-b pb-2">
          <button className="font-semibold">Description</button>
          <button className="text-gray-500">Additional Information</button>
          <button className="text-gray-500">Reviews (0)</button>
        </div>
        <div className="text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eu turpis molestie, dictum est a, mattis tellus.
          </p>
        </div>
      </div>

      <ProductCards />
      
    </div>
  );
};

export default ProductDetail;