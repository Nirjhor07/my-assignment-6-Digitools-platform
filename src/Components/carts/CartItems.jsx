import React, { useState } from "react";
import { BsListNested } from "react-icons/bs";
import Cart from "./Cart";
import { toast } from "react-toastify";

const CartItems = ({ cartItems, setCartItems, cardCount, setCardCount }) => {
  // console.log(cartItems);
  //function forthis

  const removeCart = (item) => {
    const filteredItems = cartItems.filter(
      (selected) => selected.title !== item.title,
    );
    setCartItems(filteredItems);
    setCardCount(cardCount - 1);
    toast(`${item.title} is removed from the cart Items Succesfully!`);

    // console.log(item.title);
    // console.log(filteredItems);
  };

  // now if proced to cart pressed emty the array
  const emptyArray = () => {
    setCartItems([]);
    setCardCount(0);
  };

  return (
    <div className="container mx-auto mt-10 bg-gray-100 p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-3">Your Card</h1>
      {cartItems.map((item, index) => (
        <Cart key={index} item={item} removeCart={removeCart}></Cart>
      ))}
      <div className="flex justify-between text-xl font-bold px-2.5">
        <p>Total</p>
        <p>${cartItems.reduce((sum, product) => sum + product.price, 0)}</p>
      </div>
      <button
        onClick={() => emptyArray()}
        className="text-xl btn btn-primary btn-block mt-7"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartItems;
