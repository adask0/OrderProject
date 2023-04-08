import React, { useState } from "react";

import NewOrder from "./components/NewOrders/NewOrder";
import Order from "./components/Orders/Order";

const EXAMPLES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 10.10,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 344.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 300.50,
    date: new Date(2020, 4, 12),
  },
  {
    id: "e5",
    title: "Hard drive",
    amount: 230.55,
    date: new Date(2019, 2, 2),
  },
];

const App = () => {
  const [orders, setExpenses] = useState(EXAMPLES)

  const addExpenseHandler = order => {
    setExpenses(prevOrders => {
      return [order, ...prevOrders];
    });
  }

  return (
    <div>
      <NewOrder addedOrder={addExpenseHandler} />
      <Order items={orders}/>
    </div>
    )
}

export default App;
