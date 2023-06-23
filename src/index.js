import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import WhatsAppBtn from "./components/WhatsAppBtn";
import "kromac-ui-18/src/css/style.css";
import "./index.style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <WhatsAppBtn />
    </Router>
  </React.StrictMode>
);
