import React from "react";

const Cart = ({ item,removeCart }) => {
    console.log(item);
  const { icon, title,price } = item;
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-200 p-4 rounded-xl mb-3">
        <div className="flex items-center gap-3">
          <img src={icon} />
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">${price}</p>
          </div>
        </div>
        <button onClick={()=>{removeCart(item)}}
        className="text-pink-500 text-sm">Remove</button>
      </div>
    </div>
  );
};

export default Cart;
