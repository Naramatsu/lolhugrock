import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LanguajeState from "./context/languaje/LanguajeState";
import WhatsAppBtn from "./components/WhatsAppBtn";
import { BrowserRouter as Router } from "react-router-dom";
import "kromac-ui-18/src/css/style.css";
import "./index.style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguajeState>
      <Router>
        <App />
        <WhatsAppBtn />
      </Router>
    </LanguajeState>
  </React.StrictMode>
);
