import React, { useContext } from "react";
import { GreetContext } from "../Home/Home";
import OrderReview from "../OrderReview/OrderReview";

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
