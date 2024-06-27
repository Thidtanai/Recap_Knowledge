//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";

import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Nested component
const Title = () => (
  <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
    บัญชีรายรับรายจ่าย
  </h1>
);

function App() {
  const initData = [
    { id: 1, title: "Home", amount: -3000 },
    { id: 2, title: "Income", amount: 30000 },
  ];

  //Data is send to Transaction
  const [items, setItems] = useState(initData);

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

    setReportIncome(income.toFixed(2));
    setReportExpense(Math.abs(expense).toFixed(2));
  }, [items, reportIncome, reportExpense]);

  // //reducer state
  // const [showReport, setShowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       return setShowReport(true);
  //     case "HIDE":
  //       return setShowReport(false);
  //     default:
  //       return setShowReport(false);
  //   }
  // };
  // const [result, dispatch] = useReducer(reducer, showReport);

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
        {/* Router */}
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Transaction Info</Link>
              </li>
              <li>
                <Link to="/insert">Insert Transaction</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />}></Route>
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />
                    <Transaction items={items} />
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
        {/* {showReport && <ReportComponent />} */}
        {/* Reducer */}
        {/* <h1>{result}</h1> */}
        {/* <button onClick={() => dispatch({ type: "SHOW"})}>
          Show
        </button>
        <button onClick={() => dispatch({ type: "HIDE"})}>
          Hide
        </button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
