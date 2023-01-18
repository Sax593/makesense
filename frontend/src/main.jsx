import React from "react";
import ReactDOM from "react-dom/client";
import "./Main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Provider from "@services/context/userContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
