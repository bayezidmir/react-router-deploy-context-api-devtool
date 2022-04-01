import React from "react";

const Cart = ({ cart, remove }) => {
  return (
    <div>
      <p>
        {cart.name} <button onClick={() => remove(cart)}>X</button>
      </p>
    </div>
  );
};

export default Cart;
