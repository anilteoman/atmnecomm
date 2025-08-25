import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom";
import { Trash2 } from "lucide-react";
import { updateProductCount, deleteProduct, toggleCheckProduct, addPrice } from "../store/thunks/shoppingCartThunks";

export default function ShoppingCart() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const shoppingCart = useSelector((state) => state.shoppingCart.cart);

    const itemPrice = shoppingCart.reduce((sum, item) => {return item.checked ? (sum + (item.product.price * item.count)) : sum}, 0);
    const discount = itemPrice / 2;
    const shipping = itemPrice > 100 ? 0 : 29.99;
    const totalPrice = (itemPrice + shipping - discount).toFixed(2);

    const handleCheckbox = (productId) => {
        dispatch(toggleCheckProduct(productId));
    }

    const handleCreateOrder = (totalPrice) => {
        dispatch(addPrice(totalPrice));
        history.push("/order");
    }

    const isDisabled = shoppingCart.some((item) => item.checked);

    return (
        <section className="shopping-cart-main mx-9 md:mx-35 flex flex-col gap-5">
            <div className="shopping-cart-title py-5">
                <h2 className="text-[#252B42] text-[2.5rem] font-bold leading-[3.125rem]">My Shopping Cart</h2>
            </div>
            <div className="shopping-cart-content flex flex-col md:flex-row">
                <ul className="md:w-[70%]">
                    {shoppingCart.length === 0 ? (<div>
                        <h2 className="text-2xl">Your cart is empty.</h2>
                    </div>) :(shoppingCart.map((item) => (
                        <li key={item.product.id}>
                            <div className="cart-main flex flex-col">
                                <div className="cart-item flex items-center gap-5">
                                    <div className="cart-item-checkbox w-[5%]">
                                        <input type="checkbox" className="w-5 h-5" checked={item.checked} onChange={() => handleCheckbox(item.product.id)}/>
                                    </div>
                                    <div className="cart-item-img w-[30%] md:w-[10%] md:mr-10">
                                        <img src={item.product.images[0].url} className="w-50 h-50 object-contain"/>
                                    </div>
                                    <div className="cart-item-text flex flex-col gap-1 w-[65%] text-[#252B42]">
                                        <h2 className="font-bold">{item.product.name}</h2>
                                        <h3 className="font-normal">{item.product.description}</h3>
                                        <h4 className="font-normal">Adet: {item.count}</h4>
                                        <h2>${item.product.price}</h2>
                                        <div className="cart-item-buttons flex gap-5 mt-2">
                                            <div className="quantity-buttons flex items-center gap-2">
                                                <button className="bg-[#BDBDBD] text-[#737373] w-5 rounded-sm hover:cursor-pointer" onClick={() => item.count > 1 && dispatch(updateProductCount(item.product.id, item.count - 1))}>-</button>
                                                <span className="text-sm">{item.count}</span>
                                                <button className="bg-[#BDBDBD] text-[#737373] w-5 rounded-sm hover:cursor-pointer" onClick={() => dispatch(updateProductCount(item.product.id, item.count + 1))}>+</button>
                                            </div>
                                            <button className="hover:cursor-pointer" onClick={() => dispatch(deleteProduct(item.product.id))}>
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </li>
                    )))}
                </ul>
                <div className="order-summary flex flex-col md:w-[30%] gap-3 items-center">
                    <div className="summary-container border border-[#BDBDBD] rounded-sm flex flex-col w-[70%] p-4">
                        <h1 className="text-xl mb-2 font-bold">Order Summary</h1>
                        <div className="summary-items flex justify-between">
                            <h3 className="text-[#737373]">Total Item</h3>
                            <h3 className="font-bold">$ {itemPrice}</h3>
                        </div>
                        <div className="summary-shipping flex justify-between">
                            <h3 className="text-[#737373]">Shipping</h3>
                            <h3 className="font-bold">$ {shipping}</h3>
                        </div>
                        <div className="summary-discounts flex justify-between mb-3">
                            <h3 className="text-[#737373]">Discount</h3>
                            <h3 className="text-[#E77C40] font-bold">-$ {discount}</h3>
                        </div>
                        <div className="summary-total flex border-t justify-between">
                            <h2 className="text-lg mt-2">Grand Total</h2>
                            <h2 className="text-[#E77C40] font-bold text-lg mt-2">$ {totalPrice}</h2>
                        </div>
                    </div>
                    <div className="summary-button w-[70%]">
                        <button className="bg-[#23A6F0] text-white py-2.5 px-5 rounded-[0.313rem] hover:cursor-pointer w-full disabled:cursor-not-allowed" disabled={!isDisabled} onClick={() => handleCreateOrder(totalPrice)}>Create Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
} 