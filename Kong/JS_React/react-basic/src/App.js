//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { useState, useReducer } from "react";

import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

// Nested component
const Title = () => (
  <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
    บัญชีรายรับรายจ่าย
  </h1>
);

function App() {
  //Data is send to Transaction
  const [items, setItems] = useState([]);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  //Data is receive from Form
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense = amounts
      .filter((element) => element < 0)
      .reduce((total, element) => (total += element), 0);

    setReportIncome(income);
    setReportExpense(Math.abs(expense));
  }, [items, reportIncome, reportExpense]);

  //reducer state
  const [showReport, setShowReport] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    /* Provider */
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <Title />
        {showReport && <ReportComponent />}
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
        {/* Reducer */}
        <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW"})}>
          Show
        </button>
        <button onClick={() => dispatch({ type: "HIDE"})}>
          Hide
        </button>
      </div>
    </DataContext.Provider>
  );
}

export default App;
