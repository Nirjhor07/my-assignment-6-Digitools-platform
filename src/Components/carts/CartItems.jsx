import React, { useState } from "react";
import { BsListNested } from "react-icons/bs";
import Cart from "./Cart";

const CartItems = ({ cartItems, card }) => {
  //   console.log(cartItems);
  // when procees btn pres empty array
  const [items, setItems] = useState([]);
  //function forthis
const removeCart = ()=>{

}
  return (
    <div className="container mx-auto mt-10 bg-gray-100 p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-3">Your Card</h1>
      {cartItems.map((item, index) => (
        <Cart key={index} item={item}
        removeCart={removeCart}
        items={items}
        setItems={setItems}
        ></Cart>
      ))}
      <div className="flex justify-between text-xl font-bold px-2.5">
        <p>Total</p>
        <p>$90</p>
      </div>
      <button className="text-xl btn btn-primary btn-block mt-7">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartItems;
