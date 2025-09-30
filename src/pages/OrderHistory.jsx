import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../store/thunks/clientThunks";


export default function OrderHistory() {
    
    const dispatch = useDispatch();
    
    const orderHistory = useSelector((state) => state.client.orders);
;

    useEffect(() => {
        dispatch(getOrders());
    })
    
    return (
        <section className="order-history-main mx-3 flex flex-col gap-5 md:mx-35">
            <div className="history-title">
                <h2 className="text-[#252B42] text-[2.5rem] font-bold leading-[3.125rem]">Order History</h2>
            </div>
            <div className="history-container flex flex-col gap-5">
                {orderHistory.map((order) => (
                    <div key={order.id} className="flex flex-col border p-3 gap-4">
                        <div className="history-date-price-card flex flex-col md:mx-10">
                            <div className="history-date flex gap-5">
                                <h3 className="font-bold">Order Date:</h3>
                                <h3 className="text-gray-500">{new Date(order.order_date).toLocaleDateString("tr-TR")}</h3>
                            </div>
                            <div className="history-price-card flex flex-col md:flex-row justify-between">
                                <div className="history-price flex gap-5">
                                    <h3 className="font-bold">Order Price:</h3>
                                    <h3 className="text-gray-500">$ {order.price}</h3>
                                </div>
                                <div className="history-card flex gap-5">
                                    <h3 className="font-bold">Payment Method:</h3>
                                    <h3 className="text-gray-500">**** **** **** {String(order.card_no).slice(-4)}</h3>
                                </div>
                            </div>
                        </div>    
                        <div className="history-products flex flex-col gap-2 md:mx-10">
                            <h3 className="font-bold text-lg">Product(s)</h3>
                            <div className="history-product flex flex-col gap-3">
                                {order.products.map((product) => (
                                    <div key={product.id} className="flex border-b border-gray-300">
                                        <div className="history-product-img w-[30%] md:w-[15%]">
                                            <img src={product.images[0].url} className="w-30 mb-3"/>
                                        </div>
                                        <div className="history-product-details w-[70%] flex flex-col gap-2">
                                            <div className="product-name flex gap-3 items-baseline">
                                                <h4 className="font-bold">Name:</h4>
                                                <h4 className="text-gray-500 text-sm">{product.name}</h4>
                                            </div>
                                            <div className="product-descp flex gap-3 items-baseline">
                                                <h4 className="font-bold">Description:</h4>
                                                <h4 className="text-gray-500 text-sm">{product.description}</h4>
                                            </div>
                                            <div className="product-count flex gap-3 items-baseline">
                                                <h4 className="font-bold">Quantity:</h4>
                                                <h4 className="text-gray-500 text-sm">{product.count}</h4>
                                            </div>
                                            <div className="product-price flex gap-3 items-baseline">
                                                <h4 className="font-bold">Price:</h4>
                                                <h4 className="text-gray-500 text-sm">$ {product.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}