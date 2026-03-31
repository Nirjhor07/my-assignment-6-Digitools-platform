import React, { useState } from "react";
import Features from "./Features";

const Card = ({ card, cardCount, setCardCount, cartItems, setCartItems }) => {
  //now we gonna use usestate for btn
  const [btnchnage, setBtnChange] = useState(false);
  // console.log(btnchnage); //false

  //purchase btn state change
  const [purchaseBtn, setPuschaseBtn] = useState("Buy Now");

  //function onClick for btn change
  const handleBtn = () => {
    setBtnChange(!btnchnage);
    setPuschaseBtn("Purchased");
    setCardCount(cardCount + 1);
    setCartItems([...cartItems, card]);
    // console.log(cartItems)
    // console.log(btnchnage);
  };

  // console.log(card.id)
  const { title, badge, price, billing, icon, description, features } = card;
  return (
    <div className="container">
      <div className="card w-96 bg-base-100 shadow-lg mx-auto">
        <div className="card-body">
          {badge === "Best Seller" ? (
            <span className="badge badge-xs badge-warning">{badge}</span>
          ) : badge === "New" ? (
            <span className="badge badge-xs badge-success">{badge}</span>
          ) : (
            <span className="badge badge-xs bg-violet-600 text-white px-3 py-2 rounded-full text-sm">
              {badge}
            </span>
          )}
          <div className="flex justify-between">
            <div className="flex justify-center items-center gap-2">
              <div className="w-[100] h-[200] rounded-full  flex justify-center items-center">
                <img className="w-full" src={icon} />
              </div>
              <h2 className="text-xl font-bold ">{title}</h2>
            </div>
            <div className="text-sm">
              ${price}/{billing}
            </div>
          </div>
          <p>{description}</p>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((features, index) => (
              <Features key={index} features={features}></Features>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={() => handleBtn()}
              className={`${purchaseBtn === "Purchased" ? "btn btn-primary btn-block" : "btn btn-primary btn-block"}`}
            >
              {btnchnage ? "Purchased" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
