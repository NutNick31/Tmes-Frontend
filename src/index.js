import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import "./style.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*
TMES

Event --- online events { ... apply for events }
      --- offline event { ... }

Our Team --- Hireachy 
         --- Gsec
         --- heads

search --- event search

Log In / Sign Up

Admin pannel
*/
