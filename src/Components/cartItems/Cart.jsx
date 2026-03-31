import React from "react";

const Cart = ({ cart, cartTotalPrice, setCartTotalPrice }) => {
  const { title, price, icon } = cart;


  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-xl mb-3">
      <div className="flex items-center gap-3">
        <img src={icon} />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">${price}</p>
        </div>
      </div>
      <button className="text-pink-500 text-sm">Remove</button>
    </div>
  );
};

export default Cart;
