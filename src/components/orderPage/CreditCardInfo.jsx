import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards, deleteCard } from "../store/thunks/clientThunks";
import CreditCardForm from "./CreditCardForm";
import { addCartCard } from "../store/thunks/shoppingCartThunks";

export default function CreditCardInfo({setStep}) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const [formSection, setFormSection] = useState(false);
    const [cardData, setCardData] = useState(null);
    const [confirmButton, setConfirmButton] = useState(true);

    const dispatch = useDispatch();

    const creditCards = useSelector((state) => state.client.creditCards);

    const handleNewButton = () => {
        setCardData(null);
        setFormSection(true);
    }

    const handleEditButton = (card) => {
        setCardData(card);
        setFormSection(true);
        }
    
    const handleDeleteCard = (cardId) => {
        dispatch(deleteCard(cardId));
    }

    const handleConfirmButton = () => {
        setStep(3);
    }

    const handleReturnButton = () => {
        setStep(1);
    }

     const handleRadioButton = (card) => {
        dispatch(addCartCard(card));
        setConfirmButton(false);
     }


    useEffect(() => {
        dispatch(getCards());
    }, [])

    return (
        <section className="creditcard-form-main">
            <div className="card-list flex flex-col items-center mt-15 gap-5">
                <div className="card-new border w-80 h-25 flex justify-center items-center bg-gray-100 rounded">
                    <button className="flex flex-col items-center hover:cursor-pointer" onClick={handleNewButton}><Plus color="#E77C40" /><span>Add New Credit Card</span></button>
                </div>
                <div className={creditCards.length > 1 ? "saved-card-list md:grid md:grid-cols-2 md:gap-5" : "saved-cards-list"}>
                    {creditCards.length > 0 && creditCards.map((card) => (
                        <div key={card.id} className="flex flex-col w-90">
                            <div className="card-title flex justify-between px-2">
                                <div className="title-radio flex gap-1">
                                    <input type="radio" name={card?.id} id="card-title" onChange={() => handleRadioButton(card)}/>
                                    <label htmlFor="card-title">Credit Card: {card?.id}</label>
                                </div>
                                <div className="title-buttons flex gap-3">
                                    <button className="underline" onClick={() => handleDeleteCard(card?.id)}>Delete</button>
                                    <button className="underline" onClick={() => handleEditButton(card)}>Edit</button>
                                </div>
                            </div>
                            <div className="card-container border w-90 h-30 flex flex-col gap-1 p-4 bg-gray-100 rounded">
                                <div className="card-info flex flex-col">
                                    <div className="card-name flex justify-between">
                                        <h4>Name:</h4>
                                        <h4>{card.name_on_card}</h4>
                                    </div>
                                    <div className="card-no flex justify-between">
                                        <h4>Card No:</h4>
                                        <h4>{card.card_no}</h4>
                                    </div>
                                    <div className="card-expdate flex justify-between">
                                        <h4>Expiration Date:</h4>
                                        <div className="card-expire-date flex gap-1">
                                            <h4>{card.expire_month}</h4>
                                            <h4>/</h4>
                                            <h4>{card.expire_year}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card-buttons flex gap-3">
                    <button className="bg-[#23A6F0] disabled:bg-blue-300 disabled:hover:cursor-not-allowed text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer text-center flex items-center justify-center md:w-[9rem] md:h-[4rem]" onClick={handleReturnButton}>Return To Address</button>
                    <button className="bg-[#23A6F0] disabled:bg-blue-300 disabled:hover:cursor-not-allowed text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer text-center flex items-center justify-center md:w-[9rem] md:h-[4rem]" disabled={confirmButton} onClick={handleConfirmButton}>Confirm Card</button>
                </div>
            </div>
            <div className="address-new">
                {formSection && <CreditCardForm card={cardData}/>}
            </div>
        </section>
    );
}