import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, deleteAddress } from "../../store/thunks/clientThunks";
import { addCartAddress } from "../../store/thunks/shoppingCartThunks";
import { Plus, User, Smartphone } from "lucide-react";

export default function AddressInfo({ setStep }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formSection, setFormSection] = useState(false);
  const [addressData, setAddressData] = useState(null);
  const [confirmButton, setConfirmButton] = useState(true);

  const dispatch = useDispatch();

  const addressList = useSelector((state) => state.client.addressList);

  const handleNewButton = () => {
    setAddressData(null);
    setFormSection(true);
  };

  const handleEditButton = (address) => {
    setAddressData(address);
    setFormSection(true);
  };

  const handleDeleteAddress = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  const handleRadioButton = (address) => {
    dispatch(addCartAddress(address));
    setConfirmButton(false);
  };

  const handleConfirmButton = () => {
    setStep(2);
  };

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  return (
    <section className="address-info-main">
      <div className="address-list flex flex-col items-center mt-15 gap-5">
        <div className="address-new border w-80 h-25 flex justify-center items-center bg-gray-100 rounded">
          <button
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={handleNewButton}
          >
            <Plus color="#E77C40" />
            <span>Add New Address</span>
          </button>
        </div>
        <div
          className={
            addressList.length > 1
              ? "saved-address-list md:grid md:grid-cols-2 md:gap-5"
              : "saved-address-list"
          }
        >
          {addressList.length > 0 &&
            addressList.map((address) => (
              <div key={address?.id} className="flex flex-col w-90">
                <div className="address-title flex justify-between px-2">
                  <div className="title-radio flex gap-1">
                    <input
                      type="radio"
                      name={address?.title}
                      id="address-title"
                      onChange={() => handleRadioButton(address)}
                    />
                    <label htmlFor="address-title">{address?.title}</label>
                  </div>
                  <div className="title-buttons flex gap-3">
                    <button
                      className="underline"
                      onClick={() => handleDeleteAddress(address?.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="underline"
                      onClick={() => handleEditButton(address)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="address-container border w-90 h-40 flex flex-col gap-1 p-4 bg-gray-100 rounded">
                  <div className="fullname-phone flex justify-between">
                    <div className="fullname flex gap-1 items-center">
                      <User color="#E77C40" size={16} />
                      <h4>{address?.name}</h4>
                      <h4>{address?.surname}</h4>
                    </div>
                    <div className="phone flex gap-1 items-center">
                      <Smartphone size={16} />
                      <h4>{address?.phone}</h4>
                    </div>
                  </div>
                  <div className="address-info flex flex-col">
                    <div className="address-city flex justify-between">
                      <h4>City:</h4>
                      <h4>{address?.city}</h4>
                    </div>
                    <div className="address-district flex justify-between">
                      <h4>District:</h4>
                      <h4>{address?.district}</h4>
                    </div>
                    <div className="address-neighborhood flex justify-between">
                      <h4>Neighborhood:</h4>
                      <h4>{address?.neighborhood}</h4>
                    </div>
                    <div className="address-address flex justify-between">
                      <h4>Address:</h4>
                      <h4>{address?.address}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          className="bg-[#23A6F0] disabled:bg-blue-300 disabled:hover:cursor-not-allowed text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer text-center flex items-center justify-center md:w-[9rem] md:h-[4rem]"
          disabled={confirmButton}
          onClick={handleConfirmButton}
        >
          Confirm Address
        </button>
      </div>
      <div className="address-new">
        {formSection && <AddressForm address={addressData} />}
      </div>
    </section>
  );
}
