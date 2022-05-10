import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { ReactSession } from "react-client-session";
// import { CookiesProvider } from "react-cookie";
// ReactSession.setStoreType("Cookie");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
