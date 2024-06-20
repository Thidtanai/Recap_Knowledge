//import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Transaction from "./components/Transaction";

// Nested component
const Title = () => (
  <h1 style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
    บัญชีรายรับรายจ่าย
  </h1>
);

function App() {
  return (
    <div className="container">
      <Title />
      <Transaction />
    </div>
  );
}

export default App;
