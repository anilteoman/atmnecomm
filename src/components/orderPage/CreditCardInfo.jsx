import { useState, useEffect } from "react";
import CreditCardForm from "./CreditCardForm";
import { useDispatch, useSelector } from "react-redux";
import { getCards, deleteCard } from "../../store/thunks/clientThunks";
import { addCartCard } from "../../store/thunks/shoppingCartThunks";
import { Plus, CreditCard, Calendar } from "lucide-react";

export default function CreditCardInfo({ setStep }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formSection, setFormSection] = useState(false);
  const [cardData, setCardData] = useState(null);
  const [confirmButton, setConfirmButton] = useState(true);

  const dispatch = useDispatch();
  const cardList = useSelector((state) => state.client.creditCards || []);

  const getCardLastFourDigits = (cardNo) => {
    if (!cardNo) return "****";
    const cardStr = String(cardNo);
    return cardStr.length >= 4 ? cardStr.slice(-4) : cardStr;
  };

  const handleNewButton = () => {
    setCardData(null);
    setFormSection(true);
  };

  const handleEditButton = (card) => {
    setCardData(card);
    setFormSection(true);
  };

  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard(cardId));
  };

  const handleRadioButton = (card) => {
    dispatch(addCartCard(card));
    setConfirmButton(false);
  };

  const handleConfirmButton = () => {
    setStep(3);
  };

  const handleBackButton = () => {
    setStep(1);
  };

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <section className="credit-card-info-main">
      <div className="credit-card-list flex flex-col items-center mt-15 gap-5">
        <div className="card-new border w-80 h-25 flex justify-center items-center bg-gray-100 rounded">
          <button
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={handleNewButton}
          >
            <Plus color="#E77C40" />
            <span>Add New Credit Card</span>
          </button>
        </div>
        <div
          className={
            cardList.length > 1
              ? "saved-card-list md:grid md:grid-cols-2 md:gap-5"
              : "saved-card-list"
          }
        >
          {cardList.length > 0 ? (
            cardList.map((card) => {
              if (!card || !card.id) {
                console.warn("Invalid card data:", card);
                return null;
              }

              return (
                <div key={card?.id} className="flex flex-col w-90">
                  <div className="card-title flex justify-between px-2">
                    <div className="title-radio flex gap-1">
                      <input
                        type="radio"
                        name="card-selection"
                        id={`card-${card?.id}`}
                        onChange={() => handleRadioButton(card)}
                      />
                      <label htmlFor={`card-${card?.id}`}>
                        Card ending in {getCardLastFourDigits(card?.card_no)}
                      </label>
                    </div>
                    <div className="title-buttons flex gap-3">
                      <button
                        className="underline"
                        onClick={() => handleDeleteCard(card?.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="underline"
                        onClick={() => handleEditButton(card)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="card-container border w-90 h-40 flex flex-col gap-1 p-4 bg-gray-100 rounded">
                    <div className="card-name-number flex justify-between">
                      <div className="card-name flex gap-1 items-center">
                        <CreditCard color="#E77C40" size={16} />
                        <h4>{card?.name_on_card || "Card Holder"}</h4>
                      </div>
                      <div className="card-number flex gap-1 items-center">
                        <span className="text-sm">
                          **** **** **** {getCardLastFourDigits(card?.card_no)}
                        </span>
                      </div>
                    </div>
                    <div className="card-expire flex justify-between">
                      <div className="expire-label flex gap-1 items-center">
                        <Calendar size={16} />
                        <span className="text-sm">Expires:</span>
                      </div>
                      <div className="expire-date">
                        <span className="text-sm">
                          {card?.expire_month || "MM"}/
                          {card?.expire_year || "YYYY"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>
                No credit cards found. Please add a new credit card to continue.
              </p>
            </div>
          )}
        </div>
        <div className="card-buttons flex gap-4">
          <button
            className="bg-gray-500 text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer text-center flex items-center justify-center md:w-[9rem] md:h-[4rem]"
            onClick={handleBackButton}
          >
            Back to Address
          </button>
          <button
            className="bg-[#23A6F0] disabled:bg-blue-300 disabled:hover:cursor-not-allowed text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer text-center flex items-center justify-center md:w-[9rem] md:h-[4rem]"
            disabled={confirmButton}
            onClick={handleConfirmButton}
          >
            Confirm Payment
          </button>
        </div>
      </div>
      <div className="card-form">
        {formSection && <CreditCardForm card={cardData} />}
      </div>
    </section>
  );
}
