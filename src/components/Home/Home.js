import React, { createContext, useContext, useState } from "react";
import Cart from "../Cart/Cart";
import useTshirt from "../hooks/useShirt";
import OrderReview from "../OrderReview/OrderReview";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

export const GreetContext = createContext("greet");

const Home = () => {
  const [tShirts, setTshirts] = useTshirt();
  const [cart, setCart] = useState([]);

  //Conditional rendering using element variable
  let displayText;
  const cartLength = 3 - cart.length;
  if (cart.length === 0) {
    displayText = <p>Please buy a product</p>;
  } else if (cart.length === 2) {
    displayText = <p>Add {cartLength} more to get one free</p>;
  } else if (cart.length === 3) {
    displayText = <button>Proceed To Cart</button>;
  }

  const addToCart = (seletedTshirt) => {
    const exist = cart.find((tshirt) => tshirt._id === seletedTshirt._id);
    if (!exist) {
      const newCart = [...cart, seletedTshirt];
      setCart(newCart);
    } else {
      alert`already in cart`;
      return;
    }
  };

  const removeItem = (seletedTshirt) => {
    const remainingItem = cart.filter(
      (tshirt) => tshirt._id !== seletedTshirt._id
    );
    setCart(remainingItem);
  };

  console.log(cart);
  const greeting = "welcome to Tshirt Zone";

  return (
    <GreetContext.Provider value={greeting}>
      <main>
        <div className="tshirts-container">
          {/* <OrderReview></OrderReview> */}
          {tShirts.map((tshirt) => (
            <Tshirt
              key={tshirt._id}
              data={tshirt}
              addToCart={addToCart}
            ></Tshirt>
          ))}
        </div>

        <div className="cart-container">
          <h3>Order Summary</h3>
          <div>
            {cart.map((tshirt) => (
              <Cart cart={tshirt} remove={removeItem}></Cart>
            ))}
          </div>
          {displayText}

          {/* conditional rendering using ternary */}
          {tShirts.length === cart.length ? (
            <p>You have bought all products</p>
          ) : (
            ""
          )}

          {cart.length >= 5 && `Yey! ${cart.length} orders`}
        </div>
      </main>
    </GreetContext.Provider>
  );
};

export default Home;
