import React from "react";

const Cart = ({ cart, cartItems, setCartItems, cardCount, setCardCount }) => {
  const { title, price, icon } = cart;

  const handleRemove = () => {
    const idx = cartItems.findIndex((item) => item.id === cart.id);
    if (idx !== -1) {
      const updatedCart = [...cartItems];
      updatedCart.splice(idx, 1);
      setCartItems(updatedCart);
      setCardCount(cardCount - 1);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-xl mb-3">
      <div className="flex items-center gap-3">
        <img src={icon} alt={title} />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">${price}</p>
        </div>
      </div>
      <button onClick={handleRemove} className="text-pink-500 text-sm">Remove</button>
    </div>
  );
};

export default Cart;
