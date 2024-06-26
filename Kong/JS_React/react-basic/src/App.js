//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";

// Nested component
const Title = () => (
  <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
    บัญชีรายรับรายจ่าย
  </h1>
);

function App() {
  //Data is send to Transaction
  const [items, setItems] = useState([]);
  //Data is receive from Form
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    // Provider
    <DataContext.Provider value={"Thidtanai"}>
      <div className="container">
        <Title />
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
