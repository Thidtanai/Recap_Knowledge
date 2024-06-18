import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import HelloComponent from "./HelloComponent";

//การสร้าง function component
// function HelloComponent() {
//   return <h1>Hello Component</h1>;
// }

//การสร้าง class component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>Hello Component</h1>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
