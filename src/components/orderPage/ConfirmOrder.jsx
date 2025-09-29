import { useSelector, useDispatch } from "react-redux";
import { confirmOrder } from "../../store/thunks/shoppingCartThunks";
import {useHistory} from "react-router-dom";

export default function ConfirmOrder({setStep}) {
    
    const cart = useSelector((state) => state.shoppingCart.cart);
    const checkedCart = cart.filter((item) => item.checked);
    const address = useSelector((state) => state.shoppingCart.address);
    const payment = useSelector((state) => state.shoppingCart.payment);
    const price = useSelector((state) => state.shoppingCart.price);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleConfirmButton = () => {
        const addressId = address.id;
        const cardInfo = payment;
        const products = checkedCart;
        const totalPrice = price; 
        dispatch(confirmOrder(addressId, cardInfo, products, totalPrice, history));
    }

    const handleReturnAddressButton = () => {
        setStep(1);
    }

    const handleReturnPaymentButton = () => {
        setStep(2);
    }
    
    return (
        <section className="confirm-order-main mt-10 ml-5 flex flex-col gap-5 border p-3 md:w-4xl md:justify-center md:mx-auto">
            <div className="confirm-title">
                <h2 className="text-2xl font-bold">Please confirm your order:</h2>
            </div>
            <div className="confirm-products flex flex-col">
                <h2 className="font-bold text-lg">Product(s):</h2>
                <div className="products-container flex flex-col">
                    {checkedCart.map((item) => ( 
                        <div key={item.product.id} className="flex gap-3 border-b border-gray-300 mt-3">
                            <div className="product-image w-[30%] flex">
                                <img src={item.product.images[0].url} className="h-[80%]"/>
                            </div>
                            <div className="product-details w-[70%] flex flex-col mt-3 gap-3">
                                <div className="details-name flex gap-2">
                                    <h3 className="font-bold">Name:</h3>
                                    <h3 className="text-gray-600">{item.product.name}</h3>
                                </div>
                                <div className="details-details flex gap-2">
                                    <h3 className="font-bold">Details:</h3>
                                    <h3 className="text-gray-600">{item.product.description}</h3>
                                </div>
                                <div className="count-details flex gap-2">
                                    <h3 className="font-bold">Quantity:</h3>
                                    <h3 className="text-gray-600">{item.count}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="confirm-price border p-2">
                <div className="price flex justify-around">
                    <h2>Total Price:</h2>
                    <h2>$ {price}</h2>
                </div>
            </div>
            <div className="confirm-address">
                <h2 className="font-bold text-lg">Address:</h2>
                <div className="address-container border py-3 px-22">
                    <div className="address flex justify-between">
                        <h3>Address:</h3>
                        <h3>{address.address}</h3>
                    </div>
                    <div className="address flex justify-between">
                        <h3>Neighborhood:</h3>
                        <h3>{address.neighborhood}</h3>
                    </div>
                    <div className="district flex justify-between">
                        <h3>District:</h3>
                        <h3>{address.district}</h3>
                    </div>
                    <div className="city flex justify-between">
                        <h3>City:</h3>
                        <h3>{address.city}</h3>
                    </div>
                    <div className="fullname flex justify-between">
                        <h3>Fullname:</h3>
                        <h3>{address.name} {address.surname}</h3>
                    </div>
                    <div className="phone flex justify-between">
                        <h3>Phone:</h3>
                        <h3>{address.phone}</h3>
                    </div>
                </div>
            </div>
            <div className="confirm-card">
                <h2 className="font-bold text-lg">Payment:</h2>
                <div className="paymeny-container border py-3 px-22">
                    <div className="name flex justify-between">
                        <h3>Name:</h3>
                        <h3>{payment.name_on_card}</h3>
                    </div>
                    <div className="card-no flex justify-between">
                        <h3>Card No:</h3>
                        <h3>{payment.card_no}</h3>
                    </div>
                    <div className="expdate flex justify-between">
                        <h3>Expire Date:</h3>
                        <h3>{payment.expire_month} / {payment.expire_year}</h3>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-6">
                <button className="border p-2 hover:cursor-pointer bg-[#23A6F0] text-white rounded" onClick={handleReturnAddressButton}>Return To Address</button>
                <button className="border p-2 hover:cursor-pointer bg-[#23A6F0] text-white rounded" onClick={handleReturnPaymentButton}>Return To Payment</button>
                <button className="border p-2 hover:cursor-pointer bg-[#23A6F0] text-white rounded" onClick={() => handleConfirmButton()}>Confirm Order</button>
            </div>
        </section>
    );
}