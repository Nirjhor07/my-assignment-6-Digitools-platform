import React, { use } from "react";
import Card from "./Card";

const Cards = ({ cart }) => {
  const cards = use(cart);
  //   console.log(cards);
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
          <button className="btn btn-primary rounded-2xl">Products</button>
          <button className="btn btn-ghost rounded-2xl">cart/0</button>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-7 gap-7">
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
