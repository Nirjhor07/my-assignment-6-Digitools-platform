import React, { use, useState } from "react";
import Card from "./Card";
import CartItems from "../cartItems/CartItems";

const Cards = ({ cart, cardCount, setCardCount }) => {
  const cards = use(cart);
  //   console.log(cards);

  //now we will set the active btn
  const [activeBtn, setActiveBtn] = useState("Active");

  //use state for selectted or cartItems
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems); // empty array found

  return (
    <div className=" mt-7 md:mt-18 container mx-auto ">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382] mt-4">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        {/* btns products and cart */}
        <div className="mt-7">
          <button
            onClick={() => setActiveBtn("Active")}
            className={`${activeBtn === "Active" ? "btn btn-primary rounded-2xl" : "btn btn-ghost rounded-2xl"}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveBtn("notActive")}
            className={`${activeBtn === "notActive" ? "btn btn-primary rounded-2xl" : "btn btn-ghost rounded-2xl"}`}
          >
            cart ({cardCount})
          </button>
        </div>
      </div>

      {activeBtn === "Active" ? (
        <div className="grid grid-cols-3 mt-7 gap-7">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              cardCount={cardCount}
              setCardCount={setCardCount}
              cartItems={cartItems}
              setCartItems={setCartItems}
            ></Card>
          ))}
        </div>
      ) : (
        <CartItems cartItems={cartItems} setCartItems={setCartItems} cardCount={cardCount} setCardCount={setCardCount} />
      )}
    </div>
  );
};

export default Cards;
