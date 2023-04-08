import React from "react";

import OrderItem from "./Orderltem";
import "./OrdersList.css"

const OrdersList = props => {
    
    if (props.items.length === 0) {
        return <h2 className="orders-list__fallback">Found no expenses</h2>
    }

    return <ul className="orders-list">
        {props.items.map((orders) => (
            <OrderItem 
            key={orders.id}
            title={orders.title} 
            amount={orders.amount} 
            date={orders.date} 
            />
        ))}
    </ul>

};

export default OrdersList;