import React, { useState } from "react";
import Cart from "./Cart";

const CartItems = ({ cartItems }) => {
  // count update for cart items
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="mb-7 p-4 text-3xl font-bold">Your cart</h2>
        {cartItems &&
          cartItems.map((item) => (
            <Cart
              key={item.id}
              cart={item}
              cartTotalPrice={cartTotalPrice}
              setCartTotalPrice={setCartTotalPrice}
            />
          ))}
        {/* Subscribe button at bottom */}
        <div className="flex justify-between">
          <p>Total</p>
          <p>${cartTotalPrice}</p>
        </div>
        <button className="btn btn-primary btn-block mt-6">
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export default CartItems;
