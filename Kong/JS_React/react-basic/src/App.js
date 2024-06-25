//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";

// Nested component
const Title = () => (
  <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
    บัญชีรายรับรายจ่าย
  </h1>
);

function App() {
  //Data send to Transaction
  const initData = [
    { id: 1, title: "ค่ารักษาพยาบาล", amount: 2000 },
    { id: 2, title: "เงินเดือน", amount: 50000 },
    { id: 3, title: "ค่าเดินทาง", amount: 200 },
  ];

  const [items, setItems] = useState([]);
  //Data receive from Form
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    <div className="container">
      <Title />
      <FormComponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
