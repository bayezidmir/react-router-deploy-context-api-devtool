import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Custom T-shirt</h3>
      </div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/orderreview">Order Review</Link>
      </nav>
    </header>
  );
};

export default Header;
