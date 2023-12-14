import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Basket({ basket, total, setBasket, money }) {
  const cleanBasket = () => {
    setBasket([]);
  };

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h4>
          <span> Budget :</span> ${(money - total).toLocaleString()}
        </h4>
        <h3>My Basket</h3>
        <Link to="/">
          Return <GiReturnArrow />{" "}
        </Link>
      </div>

      <ul>
        {basket.map((item, id) => {
          return (
            <li className="basket-list" key={id}>
              <div className="list-info">
                <img src={item.image} alt={item.title} />
                <p>{item.title} </p>
              </div>
              <div className="price-info">
                <h4>
                  {" "}
                  <RxCross1 className="cross-icon" />
                  {item.amount}{" "}
                </h4>
                <h3>$ {(item.price * item.amount).toLocaleString()}</h3>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="total-info">
        <div className="total-price">
          <p>Total Price :</p>
          <span>${total.toLocaleString()}</span>
        </div>
        <button className="clean-button" onClick={cleanBasket}>
          Clean The Basket
        </button>
      </div>
    </div>
  );
}

export default Basket;
