import React, { useState } from "react";

import OrderForm from "./OrderForm";
import './NewOrder.css'

const NewOrder = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const savedOrderData = (orderData) => {
        const data = {
            ...orderData,
            id: Math.random().toString()
        };
        props.addedOrder(data);
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className="new-order">
        {!isEditing && <button onClick={startEditingHandler}>Add New Order</button>}
        {isEditing && <OrderForm savedExpenseData={savedOrderData} onCancel={stopEditingHandler} />}
    </div>
};

export default NewOrder;