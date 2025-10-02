import { useState } from "react";
import AddressInfo from "../components/orderPage/AddressInfo";
import CreditCardInfo from "../components/orderPage/CreditCardInfo";
import ConfirmOrder from "../components/orderPage/ConfirmOrder";

export default function CreateOrder() {
  const [step, setStep] = useState(1);

  const getStepClass = (currentStep) => {
    return step === currentStep
      ? "text-orange-400 border border-orange-600 bg-orange-50 p-3 rounded-md font-semibold"
      : "text-gray-600 border border-gray-300 p-3 rounded-md hover:border-gray-400 transition-colors";
  };

  return (
    <section className="create-order-main min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="create-order-content">
          {/* Progress Navigation */}
          <div className="content-nav flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-center mb-8 text-center">
            <div className="flex items-center gap-4 md:gap-8">
              <h2 className={getStepClass(1)}>1. Address Information</h2>
              <div className="text-gray-400 hidden md:block">→</div>
              <h2 className={getStepClass(2)}>2. Payment Information</h2>
              <div className="text-gray-400 hidden md:block">→</div>
              <h2 className={getStepClass(3)}>3. Confirm Order</h2>
            </div>
          </div>

          {/* Step Content */}
          <div className="create-order-container bg-white rounded-lg shadow-sm">
            {step === 1 && <AddressInfo setStep={setStep} />}
            {step === 2 && <CreditCardInfo setStep={setStep} />}
            {step === 3 && <ConfirmOrder setStep={setStep} />}
          </div>
        </div>
      </div>
    </section>
  );
}
