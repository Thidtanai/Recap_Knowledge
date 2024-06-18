//import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Transaction from "./components/Transaction";

// Nested component
const Title = () => <h1>Header</h1>;

function App() {
  return (
    <div>
      <Title />
      <Transaction />
    </div>
  );
}

export default App;
