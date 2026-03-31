import React from "react";
import Cart from "./Cart";

const CartItems = ({ cartItems, setCartItems, cardCount, setCardCount }) => {
  const cartTotalPrice = cartItems
    ? cartItems.reduce((total, item) => total + item.price, 0)
    : 0;

  return (
    <>
      <div className="max-w-xl mx-auto mt-10 bg-gray-100 p-6 rounded-2xl shadow-md">
        <h2 className="mb-7 p-4 text-3xl font-bold">Your cart</h2>
        {cartItems &&
          cartItems.map((item) => (
            <Cart
              key={item.id}
              cart={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
              cardCount={cardCount}
              setCardCount={setCardCount}
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
