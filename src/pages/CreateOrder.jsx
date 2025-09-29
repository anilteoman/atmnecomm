import { useState } from "react";
import AddressInfo from "../components/orderPage/AddressInfo";
import CreditCardInfo from "../components/orderPage/CreditCardInfo";
import ConfirmOrder from "../components/orderPage/ConfirmOrder";

export default function CreateOrder() {

    const [step, setStep] = useState(1);
    
    return (
        <section className="create-order-main">
            <div className="create-order-content">
                <div className="content-nav flex justify-center gap-5 items-center pl-5 text-center">
                    <h2 className={step === 1 ? "text-orange-400 border border-orange-600 p-2 rounded-sm" : "text-black border border-black p-2 rounded-sm"}>Address Information</h2>
                    <h2 className="text-gray-500">/</h2>
                    <h2 className={step === 2 ? "text-orange-400 border border-orange-600 p-2 rounded-sm" : "text-black border border-black p-2 rounded-sm"}>Payment Information</h2>
                    <h2 className="text-gray-500">/</h2>
                    <h2 className={step === 3 ? "text-orange-400 border border-orange-600 p-2 rounded-sm" : "text-black border border-black p-2 rounded-sm"}>Confirm Order</h2>
                </div>
                <div className="create-order-container">
                    {step === 1 && <AddressInfo setStep={setStep} />}
                    {step === 2 && <CreditCardInfo setStep={setStep}/>}
                    {step === 3 && <ConfirmOrder setStep={setStep}/>}
                </div>
            </div>
            <div className="create-order-summary">

            </div>
        </section>
    ); 
}