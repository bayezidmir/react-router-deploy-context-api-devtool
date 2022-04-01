import React, { useState } from "react";
import Cart from "../Cart/Cart";
import useTshirt from "../hooks/useShirt";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTshirts] = useTshirt();
  const [cart, setCart] = useState([]);

  const addToCart = (seletedTshirt) => {
    const exist = cart.find((tshirt) => tshirt._id === seletedTshirt._id);
    if (!exist) {
      const newCart = [...cart, seletedTshirt];
      setCart(newCart);
    } else {
      alert`already in cart`;
    }
  };

  const removeItem = (seletedTshirt) => {
    const remainingItem = cart.filter(
      (tshirt) => tshirt._id !== seletedTshirt._id
    );
    setCart(remainingItem);
  };

  console.log(cart);

  return (
    <main>
      <div className="tshirts-container">
        {tShirts.map((tshirt) => (
          <Tshirt key={tshirt._id} data={tshirt} addToCart={addToCart}></Tshirt>
        ))}
      </div>

      <div className="cart-container">
        <h3>Order Summary</h3>
        <div>
          {cart.map((tshirt) => (
            <Cart cart={tshirt} remove={removeItem}></Cart>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
