import React from "react";

import "./OrderDate.css"

const OrderDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className="order-date">
            <div className="order-date__month">{month}</div>
            <div className="order-date__year">{year}</div>
            <div className="order-date__day">{day}</div>
        </div>
    );
}

export default OrderDate;