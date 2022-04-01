import React from "react";
import "./Tshirt.css";

const Tshirt = ({ data, addToCart }) => {
  const { name, price, picture, _id } = data;
  return (
    <div className="tshirt-container">
      <img src={picture} alt="" />
      <h3>{data.name}</h3>
      <h4>Price: {price}</h4>
      <button onClick={() => addToCart(data)}>Add to Cart</button>
    </div>
  );
};

export default Tshirt;
