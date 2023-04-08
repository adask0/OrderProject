import React, { useState } from "react";

import OrdersFilter from "./OrderFilter";
import OrdersList from "./OrdersList";
import Card from "../UI/Card"
import OrdersChart from "./OrderChart";
import "./Order.css"

const Order = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
  }

const filteredOrders = props.items.filter(order => {
  return order.date.getFullYear().toString() === filteredYear;
})

    return (
      <div>
        <Card className="orders">
        <OrdersFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <OrdersChart orders={filteredOrders} />
        <OrdersList items={filteredOrders} />
        </Card>
      </div>
    ); 
}

export default Order;