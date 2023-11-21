import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import IconsPanel from "./layout/IconsPanel";
import LanguajeState from "./context/languaje/LanguajeState";
import { BrowserRouter as Router } from "react-router-dom";
import "kromac-ui-18/src/css/style.css";
import "./index.style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguajeState>
      <Router>
        <App />
        <IconsPanel />
      </Router>
    </LanguajeState>
  </React.StrictMode>
);
