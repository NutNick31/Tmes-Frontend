import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// axios config for entire app(Do not touch)
import "./utils/axiosUtil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
