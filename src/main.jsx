import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./components/CounterApp";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} stock={12} />
  </React.StrictMode>
);
