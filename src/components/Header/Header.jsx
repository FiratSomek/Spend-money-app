import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Logo from "../../assets/Shopping Bag.svg";

function Header({ money, total, setBasket }) {
  const deleteCart = () => {
    setBasket([]);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img src={Logo} alt="#" />
      </div>
      <div className="header-info">
        <h6>
          All The Best For You
          <AiOutlineHeart className="heart-icon" />
        </h6>
        <h3>
          <span> Budget :</span> ${(money - total).toLocaleString()}
        </h3>
      </div>
      <div>
        <Link to="/basket">
          <FaShoppingCart className="cart-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
