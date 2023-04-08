import React, { useState } from "react";

import OrderDate from "./OrderDate";
import Card from "../UI/Card"
import "./OrderItem.css"

const OrderItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };
  const handleInputChange = (event) => {
    if(event.keyCode === 13){
      setTitle(event.target.value);
      setIsButtonClicked(false);
    }
  };

  return (
    <li>
    <Card className="order-item">
        <OrderDate date={props.date}/>    
      <div className="order-item__description">
        <h2>{title}</h2>
        {isButtonClicked ? (
        <input className="change-title" type="text" onKeyDown={handleInputChange} />
      ) : (
        <button onClick={handleButtonClick}>Change title</button>
      )
      }
        <div className="order-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default OrderItem;
